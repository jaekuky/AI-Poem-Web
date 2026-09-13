const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const frontend = path.resolve(__dirname, '../../frontend');
const read = file => fs.readFileSync(path.join(frontend, file), 'utf8');
const plain = html => html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const schemas = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map(match => JSON.parse(match[1]));

function walk(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
        const filename = path.join(directory, entry.name);
        return entry.isDirectory() ? walk(filename) : [filename];
    });
}

const koreanPages = walk(frontend).filter(filename => filename.endsWith('.html'))
    .map(filename => ({ filename, html: fs.readFileSync(filename, 'utf8') }))
    .filter(({ html }) => /<html\b[^>]*lang=["']ko(?:-KR)?["']/i.test(html));

test('한국어 페이지와 원고에 과거 시조 70% 안내가 남지 않음', () => {
    assert.ok(koreanPages.length > 0);
    const manuscripts = walk(frontend).filter(filename => filename.endsWith('.md'))
        .map(filename => ({ filename, html: fs.readFileSync(filename, 'utf8') }));
    for (const { filename, html } of [...koreanPages, ...manuscripts]) {
        assert.doesNotMatch(html, /시조의\s*70\s*%\s*벽|음수율[^<\n]*(?:70\s*%|70퍼센트)/, filename);
    }
});

test('한국어 HTML의 JSON-LD 구문 유지', () => {
    for (const { filename, html } of koreanPages) {
        assert.doesNotThrow(() => schemas(html), filename);
    }
});

test('시조 설명을 갱신한 글의 표시 수정일과 JSON-LD 일치', () => {
    for (const slug of ['article-7', 'ai-poetry-simplicity-preference', 'hanja-tokenizer-conflict',
        'sijo-meter-for-ai', 'llm-korean-sijo-meter']) {
        const html = read(`blog/ko/${slug}.html`);
        const article = schemas(html).find(schema => ['Article', 'BlogPosting'].includes(schema['@type']));
        const [year, month, day] = article.dateModified.slice(0, 10).split('-').map(Number);
        const displayed = `${year}년 ${month}월 ${day}일`;
        const visible = plain(html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/)[1]);
        assert.ok(visible.includes(`수정 ${displayed}`) || visible.includes(`최종 수정일: ${displayed}`), slug);
    }
});

test('한국어 메인 두 페이지와 원고의 시조 안내 동기화', () => {
    const paragraphs = file => [...read(file).matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)]
        .map(match => plain(match[1]))
        .filter(text => text.startsWith('한국어 시조는') || text.startsWith('시조는 각 음보'));
    const root = paragraphs('index.html');
    assert.equal(root.length, 2);
    assert.deepEqual(root, paragraphs('ko/index.html'));
    const manuscript = read('content_ko_main.md').replace(/\*\*/g, '');
    for (const paragraph of root) assert.ok(manuscript.includes(paragraph));
    for (const meter of ['3·4·3(4)·4', '3·5·4·3']) assert.ok(root[0].includes(meter));
    assert.match(root[1], /자연스러움까지 보장하지는 않습니다/);
});

for (const file of ['faq.html', 'ko/faq.html']) {
    test(`${file}: 시조 형식·대기 안내와 FAQ 구조화 데이터 일치`, () => {
        const html = read(file);
        const answers = new Map(schemas(html).find(schema => schema['@type'] === 'FAQPage')
            .mainEntity.map(question => [question.name, question.acceptedAnswer.text]));
        const visible = new Map([...html.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g)]
            .map(([, body]) => [plain(body.match(/<summary>([\s\S]*?)<\/summary>/)[1]),
                plain(body.match(/<div class="faq-answer">([\s\S]*?)<\/div>/)[1])]));
        const timing = '시가 생성되는 데 얼마나 걸리나요?';
        const form = '시의 스타일이나 형식을 선택할 수 있나요?';
        for (const question of [timing, form]) assert.equal(answers.get(question), visible.get(question));
        for (const text of ['10초를 넘길', '최대 3회', '전체 25초', '재시도 안내']) {
            assert.ok(answers.get(timing).includes(text));
        }
        for (const text of ['한국어 시조', '3·4·3(4)·4', '3·5·4·3', '문학적 완성도']) {
            assert.ok(answers.get(form).includes(text));
        }
        assert.doesNotMatch(html, /평균 10초 이내/);
    });
}

test('시조 블로그 목록의 제목과 요약이 현재 글과 일치', () => {
    const items = [...read('blog/ko/index.html').matchAll(/<li class="blog-item">([\s\S]*?)<\/li>/g)]
        .map(match => match[1]);
    for (const slug of ['sijo-meter-for-ai', 'llm-korean-sijo-meter']) {
        const item = items.find(body => body.includes(`href="${slug}.html"`));
        assert.ok(item);
        const title = plain(read(`blog/ko/${slug}.html`).match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]);
        assert.equal(plain(item.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/)[1]), title);
        assert.match(plain(item), /서버 검산/);
    }
});

test('한국어 404 메타 설명에 일률적인 10초 생성 약속이 없음', () => {
    for (const file of ['404.html', 'ko/404.html']) {
        const descriptions = [...read(file).matchAll(/<meta (?:name|property)="(?:description|og:description|twitter:description)" content="([^"]*)"/g)]
            .map(match => match[1]);
        assert.equal(descriptions.length, 3);
        assert.equal(new Set(descriptions).size, 1);
        assert.doesNotMatch(descriptions[0], /10초/);
    }
});
