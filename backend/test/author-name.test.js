// 운영자 이름이 모든 페이지·구조화 데이터에서 "Ryu Jae-kuk" 기준으로 표기되는지 검사
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const frontend = path.resolve(__dirname, '../../frontend');
const pages = fs.readdirSync(frontend, { recursive: true })
    .filter(file => file.endsWith('.html'))
    .map(file => ({ file, html: fs.readFileSync(path.join(frontend, file), 'utf8') }));

// 한국어 페이지는 한글 이름을, 나머지는 로마자 이름을 앞에 둔다.
const isKorean = html => /<html lang="ko"/.test(html);

test('구조화 데이터의 운영자 이름은 Ryu Jae-kuk 하나', () => {
    for (const { file, html } of pages) {
        // 인용 논문 저자도 Person이라 운영자 이름이 들어간 값만 본다.
        for (const [, name] of html.matchAll(/"name": ?"([^"]*(?:Ryu|류재국)[^"]*)"/g)) {
            assert.equal(name, 'Ryu Jae-kuk', file);
        }
    }
});

test('화면 표기에 약칭·어순이 다른 이름이 없음', () => {
    for (const { file, html } of pages) {
        for (const variant of ['>Ryu<', 'Jaekuk Ryu', 'Ryu (Jae-kuk)', 'リュ・ジェグク', '— Ryu |', 'Ryu(류재국)']) {
            assert.ok(!html.includes(variant), `${file}: ${variant}`);
        }
    }
});

test('병기는 페이지 언어의 이름을 앞에 둠', () => {
    for (const { file, html } of pages) {
        const wrong = isKorean(html) ? /Ryu Jae-kuk\s*[(（]류재국[)）]/ : /류재국\s*[(（]Ryu Jae-kuk[)）]/;
        assert.ok(!wrong.test(html), file);
    }
});
