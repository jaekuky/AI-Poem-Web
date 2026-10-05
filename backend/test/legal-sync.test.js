// privacy·terms 번역본이 영문 원본과 같은 시행일·구조·식별자·링크를 유지하는지 검사
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const frontend = path.resolve(__dirname, '../../frontend');
const read = file => fs.readFileSync(path.join(frontend, file), 'utf8');
const consentBlock = read('script.js').match(/const consentMessageMap = \{([\s\S]*?)\n\};/)[1];
const settingsTitles = Object.fromEntries([...consentBlock
    .matchAll(/\n {4}'([a-z]+)': \{[\s\S]*?settingsTitle: '([^']*)'/g)].map(match => [match[1], match[2]]));
const translated = fs.readdirSync(frontend, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && fs.existsSync(path.join(frontend, entry.name, 'privacy.html')))
    .map(entry => entry.name)
    .filter(lang => !['en', 'ko'].includes(lang));
const kinds = ['privacy', 'terms'];

function body(file, kind) {
    return read(file).match(new RegExp(`<div class="${kind}_container">([\\s\\S]*?)\\n\\s*</div>`))[1];
}

// 번역과 무관하게 같아야 하는 골격만 뽑는다.
function skeleton(file, kind) {
    const html = body(file, kind);
    const count = tag => (html.match(new RegExp(`<${tag}>`, 'g')) || []).length;
    return {
        date: html.match(/<time datetime="([^"]+)">/)?.[1],
        h2: count('h2'), p: count('p'), li: count('li'),
        codes: [...html.matchAll(/<code>([^<]+)<\/code>/g)].map(match => match[1]),
        links: [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1])
    };
}

test('번역본 29개는 영문 원본과 시행일·절·문단·목록·식별자·링크가 같음', () => {
    assert.equal(translated.length, 29);
    for (const kind of kinds) {
        const original = skeleton(`en/${kind}.html`, kind);
        assert.ok(original.date);
        for (const lang of translated) {
            assert.deepEqual(skeleton(`${lang}/${kind}.html`, kind), original, `${lang}/${kind}.html`);
        }
    }
});

test('한국어 원본은 영문과 시행일이 같고 루트와 ko 본문이 동일', () => {
    for (const kind of kinds) {
        assert.equal(skeleton(`ko/${kind}.html`, kind).date, skeleton(`en/${kind}.html`, kind).date);
        assert.equal(body(`${kind}.html`, kind), body(`ko/${kind}.html`, kind));
    }
});

test('privacy는 처리 업체 이름을 원문 그대로 쓰고 화면의 쿠키 설정 버튼 이름을 안내', () => {
    for (const lang of ['ko', 'en', ...translated]) {
        const html = body(`${lang}/privacy.html`, 'privacy');
        for (const name of ['OpenAI', 'Amazon Web Services', 'DynamoDB', 'Cloudflare', 'Google']) {
            assert.ok(html.includes(name), `${lang}: ${name}`);
        }
        assert.ok(html.includes(settingsTitles[lang]), `${lang}: ${settingsTitles[lang]}`);
    }
});
