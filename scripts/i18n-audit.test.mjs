import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { afterEach, test } from 'node:test';
import { parseCli, runAudit } from './i18n-audit.mjs';

const temporaryRoots = [];

afterEach(() => {
    while (temporaryRoots.length) fs.rmSync(temporaryRoots.pop(), { recursive: true, force: true });
});

function fixtureRoot() {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'i18n-audit-'));
    temporaryRoots.push(root);
    return root;
}

function write(root, relative, content) {
    const filename = path.join(root, relative);
    fs.mkdirSync(path.dirname(filename), { recursive: true });
    fs.writeFileSync(filename, content);
}

function page({ lang, canonical, robots = 'index, follow', body, head = '' }) {
    return `<!doctype html>
<html lang="${lang}"><head>
<meta name="robots" content="${robots}">
<link rel="canonical" href="${canonical}">
<meta property="og:url" content="${canonical}">
${head}</head><body>${body}</body></html>`;
}

const auditScript = fileURLToPath(new URL('./i18n-audit.mjs', import.meta.url));

test('CLI parses options and rejects invalid report prefix', () => {
    assert.deepEqual(parseCli(['--root', 'site', '--lang', 'en,ko,en', '--out', 'audit']), {
        root: 'site', languages: ['en', 'ko'], out: 'audit'
    });
    assert.throws(() => parseCli(['--out', '../audit']), /filename prefix/);
    assert.throws(() => parseCli(['--wat']), /Unknown option/);
});

test('audit detects fixture problems, accepts de-CH, filters language, and writes both reports', () => {
    const root = fixtureRoot();
    const frontend = path.join(root, 'frontend');
    const selector = '<select id="language"><option value="ko">한국어</option><option value="en">English</option><option value="ch">Deutsch</option></select>';
    write(root, 'frontend/ko/index.html', page({
        lang: 'ko', canonical: 'https://example.test/ko/',
        body: `${selector}<a href="/missing">broken link</a><a href="about.html">About one</a>`
    }));
    write(root, 'frontend/ko/about.html', page({
        lang: 'ko', canonical: 'https://example.test/ko/about.html', body: '<p>ko about</p>'
    }));
    write(root, 'frontend/en/index.html', page({
        lang: 'en', canonical: 'https://example.test/en/', body: '<p>Same copied sentence</p>'
    }));
    write(root, 'frontend/author.html', page({
        lang: 'ko', canonical: 'https://example.test/author.html', body: '<p>author</p>'
    }));
    write(root, 'frontend/ch/index.html', page({
        lang: 'de-CH', canonical: 'https://example.test/ch/', robots: 'noindex, follow',
        head: `<meta property="og:locale" content="de_CH">
<script type="application/ld+json">{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Schema question","acceptedAnswer":{"text":"Schema answer"}}]}</script>
<script type="application/ld+json">{"@type":"CreativeWork","text":"structured poem"}</script>`,
        body: `<div class="header"><h1>AI &amp; Poem</h1></div>
${selector}<a href="/author">root author</a><a href="/missing">broken link</a><a href="https://example.test/ch/">Name one</a><a href="https://example.test/ch/">Name two</a>
<details><summary>Screen question</summary><p>Screen answer</p></details><pre>screen poem</pre>
<p>Same copied sentence</p><p>한글 **markdown** Hello.World ß</p><p title="A&B">Poem form</p><p aria-label="Stop">by Ryu</p><p></p>
<!-- 한글 주석 --><script>function gtag(){} function gtag(){}</script><h1>second heading</h1>`
    }));
    write(root, 'frontend/sitemap.xml', `<?xml version="1.0"?><urlset><url><loc>https://example.test/ko/</loc></url><url><loc>https://example.test/en/</loc></url></urlset>`);

    const result = runAudit({ root, languages: ['ch'], out: 'fixture' });
    const codes = new Set(result.report.findings.map(finding => finding.code));
    for (const code of ['A1', 'A2', 'A4', 'B4', 'C2', 'C4', 'D1', 'D2', 'D3', 'E1', 'E2', 'E3', 'E4', 'E5', 'F1', 'F2', 'F3']) {
        assert.ok(codes.has(code), `missing ${code}`);
    }
    assert.ok(!result.report.findings.some(finding => finding.code === 'B1' && finding.language === 'ch'));
    assert.deepEqual(result.report.summaries.map(summary => summary.language), ['x-default', 'ch']);
    assert.ok(fs.existsSync(result.markdownPath));
    assert.ok(fs.existsSync(result.jsonPath));
    const json = JSON.parse(fs.readFileSync(result.jsonPath, 'utf8'));
    assert.equal(json.optionLanguageCount, 3);
    assert.ok(Array.isArray(json.commonIssues));
    assert.match(fs.readFileSync(result.markdownPath, 'utf8'), /언어별 요약/);
    assert.ok(frontend.endsWith('frontend'));
});

test('C5 extracts de-CH 20, 32, 31 language-count sentences with option count via --root', () => {
    const root = fixtureRoot();
    const selector = '<select id="language"><option value="ko">한국어</option><option value="ch">Schweizerdeutsch</option></select>';
    write(root, 'ko/index.html', page({
        lang: 'ko', canonical: 'https://example.test/ko/', body: selector
    }));
    write(root, 'ch/index.html', page({
        lang: 'de-CH', canonical: 'https://example.test/ch/', robots: 'noindex, follow',
        body: `${selector}<p>Unterstützt über 20 Sprachen.</p><p>In über 32 Sprachen verfügbar.</p><p>Jetzt in 31 Sprachen.</p>`
    }));

    const result = spawnSync(process.execPath, [auditScript, '--root', root, '--lang', 'ch', '--out', 'c5'], {
        encoding: 'utf8'
    });
    assert.equal(result.status, 0, result.stderr);
    const reportPath = path.join(root, 'reports', 'c5.json');
    assert.ok(fs.existsSync(reportPath));
    assert.ok(!fs.existsSync(path.resolve('reports', 'c5.json')));

    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    const c5 = report.findings.filter(finding => finding.language === 'ch' && finding.code === 'C5');
    assert.equal(c5.length, 3);
    for (const sentence of ['Unterstützt über 20 Sprachen.', 'In über 32 Sprachen verfügbar.', 'Jetzt in 31 Sprachen.']) {
        assert.ok(c5.some(finding => finding.message.includes(sentence)), sentence);
    }
    assert.ok(c5.every(finding => finding.message.includes('지원 언어 수 2개')));
});

test('A5 detects footer structure mismatch when translated footer has no links', () => {
    const root = fixtureRoot();
    const selector = '<select id="language"><option value="ko">한국어</option><option value="ch">Schweizerdeutsch</option></select>';
    write(root, 'ko/index.html', page({
        lang: 'ko', canonical: 'https://example.test/ko/',
        body: `${selector}<footer class="site-footer"><a href="about.html">About</a></footer>`
    }));
    write(root, 'ch/index.html', page({
        lang: 'de-CH', canonical: 'https://example.test/ch/', robots: 'noindex, follow',
        body: `${selector}<footer class="site-footer"></footer>`
    }));

    const result = runAudit({ root, languages: ['ch'], out: 'footer-structure' });
    const mismatch = result.report.findings.find(finding =>
        finding.language === 'ch'
        && finding.code === 'A5'
        && finding.severity === 'medium'
        && finding.message.startsWith('A5 푸터 구조 불일치:'));
    assert.ok(mismatch, 'missing A5 footer structure mismatch');
});
