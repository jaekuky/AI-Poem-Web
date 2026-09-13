const path = require('node:path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const axios = require('axios');
const { performance } = require('node:perf_hooks');
const { generateSijo, validateSijo } = require('../index');

// 실행 시 실제 OpenAI 사용량이 발생한다. 기본값: 세 주제, 주제별 세 번.
async function main() {
    if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY가 필요합니다.');
    const repetitions = Number(process.argv[2] || 3);
    if (!Number.isInteger(repetitions) || repetitions < 1 || repetitions > 10) {
        throw new Error('주제별 반복 횟수는 1~10 사이 정수여야 합니다.');
    }
    const topics = ['겨울밤', '그리움', '도시'];
    const results = [];
    let candidateCount = 0;
    let validCandidateCount = 0;
    let stop = false;
    for (const topic of topics) {
        for (let sample = 1; sample <= repetitions; sample++) {
            const startedAt = performance.now();
            let attempts = 0;
            let firstAttemptValid = false;
            const post = async (...args) => {
                attempts++;
                const response = await axios.post(...args);
                candidateCount++;
                const choice = response.data?.choices?.[0];
                try {
                    const valid = choice?.finish_reason === 'stop' && !choice?.message?.refusal &&
                        validateSijo(JSON.parse(choice?.message?.content)).valid;
                    if (valid) validCandidateCount++;
                    if (attempts === 1) firstAttemptValid = valid;
                } catch { /* JSON 오류는 생성 함수에서 보정한다. */ }
                return response;
            };
            let result;
            try {
                result = { topic, sample, success: true, ...await generateSijo(topic, { post }), firstAttemptValid };
            } catch (error) {
                const status = error.statusCode || error.response?.status || 500;
                result = { topic, sample, success: false, attempts, firstAttemptValid,
                    durationMs: performance.now() - startedAt, status,
                    code: error.code || 'UPSTREAM_ERROR' };
                if ([401, 403, 429].includes(status)) stop = true;
            }
            results.push(result);
            console.log(JSON.stringify(result));
            if (stop) break;
        }
        if (stop) break;
    }
    const successful = results.filter(result => result.success);
    console.log(JSON.stringify({ summary: {
        requested: topics.length * repetitions, completed: results.length,
        successes: successful.length, failures: results.length - successful.length,
        firstAttemptPassRate: results.filter(result => result.firstAttemptValid).length / results.length,
        finalSuccessRate: successful.length / results.length,
        candidateCount, validCandidateCount,
        candidatePassRate: candidateCount ? validCandidateCount / candidateCount : null,
        meanDurationMs: results.reduce((total, result) => total + result.durationMs, 0) / results.length,
        maxDurationMs: Math.max(...results.map(result => result.durationMs))
    } }));
    if (successful.length !== results.length || stop) process.exitCode = 1;
}

main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
});
