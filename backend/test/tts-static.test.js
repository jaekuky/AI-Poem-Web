const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const frontend = path.resolve(__dirname, '../../frontend');
const script = fs.readFileSync(path.join(frontend, 'script.js'), 'utf8');
const languageBlock = script.match(/const languageMap = \{([\s\S]*?)\n\};/)[1];
const ttsBlock = script.match(/const ttsTextMap = \{([\s\S]*?)\n\};/)[1];
const languages = [...languageBlock.matchAll(/^\s*'([^']+)'\s*:/gm)].map(match => match[1]);
const ttsLanguages = [...ttsBlock.matchAll(/^\s*([a-z]+):\s*\{/gm)].map(match => match[1]);

test('31개 언어의 TTS 문구와 루트 포함 32개 제어 화면을 유지', () => {
    assert.equal(languages.length, 31);
    assert.deepEqual([...ttsLanguages].sort(), [...languages].sort());
    const pages = ['index.html', ...languages.map(language => `${language}/index.html`)];
    assert.equal(pages.length, 32);
    for (const page of pages) {
        const html = fs.readFileSync(path.join(frontend, page), 'utf8');
        assert.match(html, /<button id="tts-button" type="button" disabled>/, page);
        assert.match(html, /<button id="tts-stop-button" type="button" disabled/, page);
        assert.match(html, /<select id="tts-speed" aria-labelledby="tts-speed-label">/, page);
        assert.match(html, /<p id="tts-status" role="status" aria-live="polite"><\/p>/, page);
    }
});

test('31개 언어의 TTS 문구 키가 같고 기기 음성 문구에는 AI 음성 표기가 없음', () => {
    const map = vm.runInNewContext(`({${ttsBlock}\n})`);
    const keys = Object.keys(map.ko).sort();
    assert.ok(keys.includes('devicePlaying'));
    for (const [language, text] of Object.entries(map)) {
        assert.deepEqual(Object.keys(text).sort(), keys, language);
        assert.ok(!text.devicePlaying.includes(text.ai), language);
        assert.notEqual(text.devicePlaying, text.playing, language);
    }
});

test('TTS 속도 선택지와 서버 음성 제한을 고정', () => {
    const controlMarkup = fs.readFileSync(path.join(frontend, 'index.html'), 'utf8');
    for (const value of ['0.8', '1', '1.2']) assert.match(controlMarkup, new RegExp(`value="${value}"`));
    assert.match(script, /const serverTtsLanguages = new Set\(\['ko', 'en', 'ja'\]\);/);
});
