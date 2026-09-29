const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const axios = require('axios');
const { PollyClient, SynthesizeSpeechCommand } = require('@aws-sdk/client-polly');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const fixturesPath = path.resolve(__dirname, '../fixtures/tts-benchmark.json');
const outputRoot = path.resolve(__dirname, '../../.context/tts-benchmark');
const region = process.env.AWS_REGION || 'ap-northeast-2';
const polly = new PollyClient({ region });
const scoreFields = ['pronunciation', 'linePauses', 'naturalness', 'poeticTone'];

function usage() {
    console.error('OPENAI_API_KEY와 AWS 자격 증명이 필요합니다. 실제 합성 비용이 발생합니다.');
    process.exitCode = 1;
}

function escapeSsml(text) {
    return text.replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
    })[character]);
}

function poemToSsml(text) {
    return `<speak>${text.split(/\r?\n/).map(line => `<p>${escapeSsml(line.trim())}</p>`).join('')}</speak>`;
}

async function streamToBuffer(stream) {
    if (Buffer.isBuffer(stream)) return stream;
    if (stream instanceof Uint8Array) return Buffer.from(stream);
    if (stream && typeof stream.transformToByteArray === 'function') {
        return Buffer.from(await stream.transformToByteArray());
    }
    const chunks = [];
    for await (const chunk of stream) chunks.push(Buffer.from(chunk));
    return Buffer.concat(chunks);
}

async function synthesizePolly(item) {
    const response = await polly.send(new SynthesizeSpeechCommand({
        Engine: 'neural',
        OutputFormat: 'mp3',
        SampleRate: '24000',
        Text: poemToSsml(item.text),
        TextType: 'ssml',
        VoiceId: item.language === 'ko' ? 'Seoyeon' : 'Joanna'
    }));
    return streamToBuffer(response.AudioStream);
}

async function synthesizeOpenAi(item) {
    const response = await axios.post('https://api.openai.com/v1/audio/speech', {
        model: 'gpt-4o-mini-tts',
        voice: item.language === 'ko' ? 'marin' : 'cedar',
        input: item.text,
        response_format: 'mp3',
        instructions: item.language === 'ko'
            ? '시를 또렷하고 차분하게 읽으십시오. 각 줄의 끝에서 자연스럽게 쉬십시오.'
            : 'Read this poem clearly and calmly. Pause naturally at each line ending.'
    }, {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
        responseType: 'arraybuffer',
        timeout: 30000
    });
    return Buffer.from(response.data);
}

function randomLabels() {
    return crypto.randomInt(2) === 0
        ? { polly: 'A', openai: 'B' }
        : { polly: 'B', openai: 'A' };
}

function hasAwsCredentials() {
    return Boolean(process.env.AWS_ACCESS_KEY_ID || process.env.AWS_PROFILE ||
        process.env.AWS_WEB_IDENTITY_TOKEN_FILE || process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI);
}

function readScore(value, file, field) {
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 1 || value > 5) {
        throw new Error(`${file}: ${field}에는 1부터 5까지 숫자가 필요합니다.`);
    }
    return value;
}

async function scoreRun(outputDir) {
    const scorecard = JSON.parse(await fs.readFile(path.join(outputDir, 'scorecard.json'), 'utf8'));
    const privateManifest = JSON.parse(await fs.readFile(path.join(outputDir, 'provider-map.private.json'), 'utf8'));
    const providerByFile = new Map(privateManifest.map(item => [item.file, item.provider]));
    const totals = {
        polly: { total: 0, count: 0 },
        openai: { total: 0, count: 0 }
    };

    for (const row of scorecard) {
        const provider = providerByFile.get(row.file);
        if (!Object.hasOwn(totals, provider)) throw new Error(`${row.file}: 공급자 매핑이 없습니다.`);
        for (const field of scoreFields) {
            totals[provider].total += readScore(row[field], row.file, field);
            totals[provider].count += 1;
        }
    }
    if (!totals.polly.count || !totals.openai.count) throw new Error('두 공급자의 점수가 모두 필요합니다.');

    const averages = Object.fromEntries(Object.entries(totals)
        .map(([provider, value]) => [provider, value.total / value.count]));
    const difference = Math.abs(averages.polly - averages.openai);
    const winner = difference >= 0.25
        ? (averages.polly > averages.openai ? 'polly' : 'openai')
        : 'polly';
    const result = { averages, difference, winner, threshold: 0.25 };
    await fs.writeFile(path.join(outputDir, 'selection.json'), `${JSON.stringify(result, null, 2)}\n`);
    console.log(JSON.stringify(result));
}

async function main() {
    const [command, directory] = process.argv.slice(2);
    if (command === '--score') {
        if (!directory) throw new Error('--score 뒤에 벤치마크 디렉터리가 필요합니다.');
        return scoreRun(path.resolve(directory));
    }
    if (command) throw new Error(`알 수 없는 인수: ${command}`);
    if (!process.env.OPENAI_API_KEY || !hasAwsCredentials()) return usage();
    const fixtures = JSON.parse(await fs.readFile(fixturesPath, 'utf8'));
    if (fixtures.length !== 5 || fixtures.filter(item => item.language === 'ko').length !== 3 ||
        fixtures.filter(item => item.language === 'en').length !== 2) {
        throw new Error('벤치마크 원문은 한국어 3편과 영어 2편이어야 합니다.');
    }
    const runId = new Date().toISOString().replace(/[:.]/g, '-');
    const outputDir = path.join(outputRoot, runId);
    await fs.mkdir(outputDir, { recursive: true });
    const privateManifest = [];
    const scorecard = [];

    for (const item of fixtures) {
        const labels = randomLabels();
        for (const [provider, synthesize] of Object.entries({ polly: synthesizePolly, openai: synthesizeOpenAi })) {
            const audio = await synthesize(item);
            const blindName = `${item.id}-${labels[provider]}.mp3`;
            await fs.writeFile(path.join(outputDir, blindName), audio);
            privateManifest.push({ file: blindName, provider, id: item.id, language: item.language });
            scorecard.push({ file: blindName, pronunciation: null, linePauses: null, naturalness: null, poeticTone: null });
        }
    }
    await fs.writeFile(path.join(outputDir, 'scorecard.json'), `${JSON.stringify(scorecard, null, 2)}\n`);
    await fs.writeFile(path.join(outputDir, 'provider-map.private.json'), `${JSON.stringify(privateManifest, null, 2)}\n`);
    console.log(`완료: ${outputDir}`);
    console.log('scorecard.json을 먼저 채우고 provider-map.private.json을 마지막에 확인하십시오.');
}

main().catch(error => {
    console.error('TTS 벤치마크 실패', { message: error.message, code: error.code, status: error.response?.status });
    process.exitCode = 1;
});
