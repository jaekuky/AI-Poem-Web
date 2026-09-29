// frontend 파일이 참조하는 경로(링크·이미지·404 base·쿠키 배너 개인정보 링크)가 실제 파일을 가리키는지 검사
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const frontend = path.resolve(__dirname, '../../frontend');
const site = 'https://ai-and-poem.art/';
const siteHosts = new Set(['ai-and-poem.art', 'www.ai-and-poem.art', 'ai-and-poem-jaekuky.pages.dev']);
const read = file => fs.readFileSync(path.join(frontend, file), 'utf8');
const script = read('script.js');

function walk(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
        const filename = path.join(directory, entry.name);
        return entry.isDirectory() ? walk(filename) : [filename];
    });
}

// readdir 결과를 그대로 쓴다. macOS와 달리 Cloudflare Pages는 대소문자를 구분한다.
const files = walk(frontend).map(filename => path.relative(frontend, filename).split(path.sep).join('/'));
const fileSet = new Set(files);
const htmlFiles = files.filter(file => file.endsWith('.html'));

// Cloudflare Pages는 /x 요청에 x, x.html, x/index.html 순으로 응답한다.
function servedFile(sitePath) {
    const file = sitePath.slice(1);
    const candidates = file === '' || file.endsWith('/')
        ? [`${file}index.html`]
        : [file, `${file}.html`, `${file}/index.html`];
    return candidates.find(candidate => fileSet.has(candidate));
}

// 사이트 내부 참조면 절대경로, 외부 링크·앵커·mailto 등이면 null
function toSitePath(reference, baseUrl) {
    const value = reference.trim().replace(/&amp;/g, '&');
    if (!value || /^(#|mailto:|tel:|javascript:|data:)/i.test(value)) return null;
    const url = new URL(value, baseUrl);
    if (!/^https?:$/.test(url.protocol) || !siteHosts.has(url.hostname)) return null;
    return decodeURIComponent(url.pathname);
}

const cssUrlPattern = /url\(\s*['"]?([^'")]+)['"]?\s*\)/g;

function referencesIn(file, text) {
    const values = pattern => [...text.matchAll(pattern)].map(match => match.slice(1).find(Boolean));
    if (file.endsWith('.css')) return values(cssUrlPattern);
    if (file.endsWith('.xml')) return values(/<loc>([^<]+)<\/loc>|\bhref="([^"]+)"/g);
    const attributes = [...text.matchAll(/\b(href|src|poster|content)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)]
        .map(match => ({ name: match[1].toLowerCase(), value: match[2] ?? match[3] }))
        // content는 og:image·og:url처럼 경로인 값만 검사한다.
        .filter(({ name, value }) => name !== 'content' || /^(\/|https?:)/.test(value))
        .map(({ value }) => value);
    return [
        ...attributes,
        ...values(/"(?:url|image|logo|@id|contentUrl|thumbnailUrl|sameAs|item|embedUrl)"\s*:\s*"([^"]+)"/g),
        ...values(cssUrlPattern)
    ];
}

test('frontend의 내부 링크·이미지·sitemap 참조가 모두 실제 파일을 가리킴', () => {
    const broken = [];
    let checked = 0;
    for (const file of files.filter(name => /\.(html|css|xml)$/.test(name))) {
        const text = read(file);
        const fileUrl = new URL(file, site);
        const baseHref = text.match(/<base\s+href="([^"]+)"/)?.[1];
        const baseUrl = baseHref ? new URL(baseHref, fileUrl) : fileUrl;
        for (const reference of referencesIn(file, text)) {
            const sitePath = toSitePath(reference, baseUrl);
            if (sitePath === null) continue;
            checked += 1;
            if (!servedFile(sitePath)) broken.push(`${file} → ${reference}`);
        }
    }
    assert.ok(checked > htmlFiles.length * 5, `검사한 참조가 너무 적음 (${checked}개)`);
    assert.equal(broken.length, 0, broken.slice(0, 20).join('\n'));
});

test('404 페이지는 요청 경로와 무관하게 자기 폴더 기준으로 경로를 해석', () => {
    const pages = files.filter(file => path.posix.basename(file) === '404.html');
    assert.ok(pages.length > 0);
    for (const file of pages) {
        const folder = `/${path.posix.dirname(file)}/`.replace('/./', '/');
        assert.match(read(file), new RegExp(`<base href="${folder}">`), file);
    }
});

// #language가 없는 페이지(블로그·소개 등)에서 script.js를 실행해 쿠키 배너의 개인정보 링크를 얻는다.
function privacyLinkFor(lang) {
    const created = [];
    const createElement = () => {
        const element = {
            children: [], classList: { add() {}, remove() {} },
            appendChild(child) { this.children.push(child); return child; },
            remove() {}
        };
        created.push(element);
        return element;
    };
    vm.runInNewContext(script, {
        console,
        localStorage: { getItem: () => null, setItem() {} },
        window: {},
        document: {
            documentElement: { lang },
            body: createElement(),
            getElementById: () => null,
            querySelector: () => null,
            createElement,
            createTextNode: text => ({ text })
        }
    });
    return created.find(element => element.className === 'cookie-privacy-link').href;
}

test('모든 html lang 값에서 쿠키 배너 개인정보 링크가 실제 페이지를 가리킴', () => {
    const langs = new Set(htmlFiles.map(file => read(file).match(/<html\b[^>]*\blang="([^"]+)"/)?.[1])
        .filter(Boolean));
    assert.ok(langs.size > 0);
    for (const lang of langs) {
        const href = privacyLinkFor(lang);
        const sitePath = toSitePath(href, site);
        assert.ok(sitePath && servedFile(sitePath), `lang="${lang}" → ${href}`);
    }
});
