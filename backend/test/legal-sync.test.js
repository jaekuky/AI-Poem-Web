// privacy·terms 번역본이 영문 원본과 같은 게시일·시행일·구조·식별자·링크를 유지하는지 검사
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
        dates: [...html.matchAll(/<time datetime="([^"]+)">/g)].map(match => match[1]),
        h2: count('h2'), p: count('p'), li: count('li'),
        codes: [...html.matchAll(/<code>([^<]+)<\/code>/g)].map(match => match[1]),
        links: [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1])
    };
}

test('번역본 29개는 영문 원본과 게시일·시행일·절·문단·목록·식별자·링크가 같음', () => {
    assert.equal(translated.length, 29);
    for (const kind of kinds) {
        const original = skeleton(`en/${kind}.html`, kind);
        assert.equal(original.dates.length, kind === 'terms' ? 2 : 1);
        for (const lang of translated) {
            assert.deepEqual(skeleton(`${lang}/${kind}.html`, kind), original, `${lang}/${kind}.html`);
        }
    }
});

test('한국어 원본은 영문과 게시일·시행일이 같고 루트와 ko 본문이 동일', () => {
    for (const kind of kinds) {
        assert.deepEqual(skeleton(`ko/${kind}.html`, kind).dates, skeleton(`en/${kind}.html`, kind).dates);
        assert.equal(body(`${kind}.html`, kind), body(`ko/${kind}.html`, kind));
    }
});

test('이용약관은 2026-10-08에 게시하고 2026-10-16에 시행', () => {
    const expected = ['2026-10-08', '2026-10-16'];
    for (const file of ['terms.html', 'ko/terms.html', 'en/terms.html', 'ja/terms.html']) {
        assert.deepEqual(skeleton(file, 'terms').dates, expected, file);
    }
});

test('약관은 책임·변경 주체와 소비자 관할 보호를 분명히 밝힘', () => {
    const ko = body('ko/terms.html', 'terms');
    const en = body('en/terms.html', 'terms');
    const ja = body('ja/terms.html', 'terms');

    assert.ok(ko.includes('관련 법령이 허용하는 범위에서 운영자는 광고 내용이나 제안에 책임지지 않습니다.'));
    assert.ok(!ko.includes('서비스는 광고 내용이나 제안에 책임지지 않습니다.'));
    assert.ok(ko.includes('운영자는 광고와 콘텐츠를 혼동하게 하는 배치를 피하고'));
    assert.ok(ko.includes('시행일 7일 전까지 서비스에 공지합니다.'));
    assert.ok(ko.includes('보호와 관할에 관한 권리는 그대로 적용됩니다.'));

    assert.ok(en.includes('To the maximum extent permitted by applicable law, we are not responsible for their content or offers.'));
    assert.ok(en.includes('at least seven days before it takes effect'));
    assert.ok(en.includes('protection or jurisdiction rights'));

    assert.ok(ja.includes('適用法令で許される範囲で、運営者は広告の内容や提案について責任を負いません。'));
    assert.ok(!ja.includes('本サービスは広告の内容や提案について責任を負いません。'));
    assert.ok(ja.includes('施行日の少なくとも7日前に本サービスで告知します。'));
    assert.ok(ja.includes('保護および管轄に関する権利はそのまま適用されます。'));
});

test('처리방침 서문은 서비스가 아니라 운영자를 처리 주체로 정의', () => {
    const ko = body('ko/privacy.html', 'privacy');
    const en = body('en/privacy.html', 'privacy');
    const ja = body('ja/privacy.html', 'privacy');

    assert.ok(ko.includes('류재국(이하 "운영자")'));
    assert.ok(ko.includes('이 방침은 운영자가 어떤 정보를'));
    assert.ok(!ko.includes('이 방침은 서비스가'));
    assert.ok(!body('ko/terms.html', 'terms').includes('서비스가 공지하는'));

    assert.ok(en.includes('operated by Ryu Jae-kuk ("we," "us," or "our")'));
    assert.ok(!en.includes('"the Service", "we"'));

    assert.ok(ja.includes('Ryu Jae-kuk（以下「運営者」）'));
    assert.ok(!ja.includes('当方'));

    // 서문 첫 괄호에는 서비스 정의 하나만 두고, 운영자 이름 뒤에 1인칭 정의를 둔다.
    for (const lang of translated) {
        const intro = body(`${lang}/privacy.html`, 'privacy').match(/<p>[^<]*AI &amp; Poem[\s\S]*?<\/p>/)[0];
        const firstParen = intro.match(/[(（][^)）]*[)）]/)[0];
        const quoteCount = (firstParen.match(/["“”«»‘’„「」]/g) || []).length;
        assert.equal(quoteCount, 2, `${lang}: ${firstParen}`);
        assert.ok(/Ryu Jae-kuk\s*[(（]/.test(intro), `${lang}: 운영자 정의 없음`);
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
