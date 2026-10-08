// pre-wrap으로 렌더링되는 정적 시 블록에 HTML 들여쓰기 공백이 새어 들어가지 않았는지 검사
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const frontend = path.resolve(__dirname, '../../frontend');
const htmlFiles = fs.readdirSync(frontend, { recursive: true })
    .filter(file => file.endsWith('.html'))
    .map(file => ({ file, html: fs.readFileSync(path.join(frontend, file), 'utf8') }));

test('<pre>는 공백만 있는 행으로 끝나지 않는다', () => {
    const offenders = [];
    for (const { file, html } of htmlFiles) {
        for (const [, body] of html.matchAll(/<pre\b[^>]*>([\s\S]*?)<\/pre>/g)) {
            const lastLine = body.split('\n').pop();
            if (lastLine && !lastLine.trim()) offenders.push(file);
        }
    }
    assert.deepEqual(offenders, []);
});

test('.poem-body 행에는 앞뒤 공백이 없다', () => {
    const offenders = [];
    for (const { file, html } of htmlFiles) {
        for (const [, body] of html.matchAll(/<div class="poem-body">([\s\S]*?)<\/div>/g)) {
            const padded = body.split('\n').filter(line => line && line !== line.trim());
            if (padded.length) offenders.push(`${file}: ${JSON.stringify(padded[0])}`);
        }
    }
    assert.deepEqual(offenders, []);
});
