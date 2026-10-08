// 지원 언어 수 표기가 백엔드 실제 값(31)과 같고, 다른 언어 페이지에 한국어가 섞이지 않았는지 검사
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const { SUPPORTED_LANGUAGES } = require('../index.js');

const root = path.resolve(__dirname, '../..');
const collect = (dir, ext) => fs.readdirSync(path.join(root, dir), { recursive: true })
    .filter(file => file.endsWith(ext))
    .map(file => ({ file: path.join(dir, file), text: fs.readFileSync(path.join(root, dir, file), 'utf8') }));
const pages = collect('frontend', '.html');
const manuscripts = collect('archive/frontend', '.md');

// 31개 언어 페이지에서 "언어"를 뜻하는 명사
const languageWord = '(languages|언어|言語|语言|langues|idiomas|lenguas|Sprachen|Sprooche|языков|язык|lingue|línguas|języków|języki|мов|dil|språk|sprog|भाषाओं|bahasa|ภาษา|kieltä|لغة|хэл|lugha|talen|wika|nyelv|ngôn ngữ|γλώσσες|ভাষা)';
const digits = '[0-9০-৯०-९]+';
// 숫자와 언어 명사 사이에 문장부호가 끼면 다른 대상을 센 숫자다(예: "15个常见问题解答：…支持语言").
const gap = '[^.。!?<>"\\d:：、,，;；]';
const countBefore = new RegExp(`(?<![0-9০-৯०-९])(${digits})${gap}{0,25}?${languageWord}`, 'gi');
// sw "lugha zaidi ya 32"처럼 명사 뒤에 숫자가 오는 언어
const countAfter = new RegExp(`${languageWord}${gap}{0,12}?(?<![0-9০-৯०-९])(${digits})(?![0-9০-৯०-९])`, 'gi');
const toAscii = value => value.replace(/[০-৯]/g, d => d.charCodeAt(0) - 0x09e6).replace(/[०-९]/g, d => d.charCodeAt(0) - 0x0966);

test('백엔드 지원 언어는 31개', () => {
    assert.equal(SUPPORTED_LANGUAGES.size, 31);
});

test('페이지와 원고의 언어 수 표기는 모두 31', () => {
    for (const { file, text } of [...pages, ...manuscripts]) {
        const counts = [...[...text.matchAll(countBefore)].map(match => [match[0], match[1]]),
            ...[...text.matchAll(countAfter)].map(match => [match[0], match[2]])];
        for (const [phrase, value] of counts) {
            const count = Number(toAscii(value));
            // 연도·글자 수 같은 큰 숫자는 언어 수가 아니다.
            if (count >= 10 && count < 100) assert.equal(count, SUPPORTED_LANGUAGES.size, `${file}: ${phrase}`);
        }
    }
});

test('한국어가 아닌 페이지의 블로그 메타·제목에 한글이 없음', () => {
    for (const { file, text } of pages) {
        if (/<html lang="ko"/.test(text)) continue;
        for (const pattern of [/<p class="article-meta">([\s\S]*?)<\/p>/, /<div class="blog-header">\s*<h2>([\s\S]*?)<\/h2>/]) {
            const block = text.match(pattern);
            // 운영자 이름 병기 "Ryu Jae-kuk (류재국)"의 한글은 의도한 표기다.
            if (block) assert.ok(!/[가-힣]/.test(block[1].replaceAll('류재국', '')), `${file}: ${block[1].trim()}`);
        }
    }
});
