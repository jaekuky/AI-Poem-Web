// 미디어쿼리 안 규칙이 파일 뒤쪽의 같은 선택자 기본 규칙에 덮여 죽지 않았는지 검사
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const frontend = path.resolve(__dirname, '../../frontend');

// 주석은 줄 수를 유지한 채 공백으로 지워 행 번호를 원본과 맞춘다.
function parseRules(css) {
    const source = css.replace(/\/\*[\s\S]*?\*\//g, comment => comment.replace(/[^\n]/g, ' '));
    const rules = [];
    let media = null;
    const pattern = /([^{}]+)\{([^{}]*)\}|(@[^{]+)\{|\}/g;
    let match;
    while ((match = pattern.exec(source))) {
        if (match[3] !== undefined) {
            media = match[3].trim();
            continue;
        }
        if (match[0] === '}') {
            media = null;
            continue;
        }
        const line = source.slice(0, match.index + match[0].search(/\S/)).split('\n').length;
        const props = match[2].split(';').map(declaration => declaration.split(':')[0].trim()).filter(Boolean);
        for (const selector of match[1].split(',')) {
            rules.push({ selector: selector.trim().replace(/\s+/g, ' '), props, media, line });
        }
    }
    return rules;
}

function overriddenMediaRules(css) {
    const rules = parseRules(css);
    const found = [];
    rules.forEach((rule, index) => {
        if (!rule.media) return;
        for (const later of rules.slice(index + 1)) {
            if (later.media || later.selector !== rule.selector) continue;
            const props = rule.props.filter(prop => later.props.includes(prop));
            if (props.length) found.push(`${rule.line}행 ${rule.media} ${rule.selector} {${props.join(', ')}} ← ${later.line}행`);
        }
    });
    return found;
}

for (const file of ['style.css', 'blog/style.css']) {
    test(`${file} 미디어쿼리 규칙이 뒤쪽 기본 규칙에 덮이지 않음`, () => {
        const css = fs.readFileSync(path.join(frontend, file), 'utf8');
        assert.deepEqual(overriddenMediaRules(css), []);
    });
}
