#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { load } from 'cheerio';

const SITE_FALLBACK_ORIGIN = 'https://ai-and-poem.art';
const EXCLUDED_DIRECTORIES = new Set(['audio', 'image', 'node_modules']);
const SEVERITIES = ['high', 'medium', 'low'];
const LATIN_LANGUAGES = new Set([
    'ch', 'da', 'de', 'en', 'es', 'fi', 'fil', 'fr', 'hu', 'id', 'it', 'ms',
    'nl', 'no', 'pl', 'pt', 'sv', 'sw', 'tr', 'vi'
]);
const UNTRANSLATED_TEXT = [
    'Poem form', 'Speed', 'AI voice', 'Service Overview', 'All rights reserved'
];

const usage = `Usage: node scripts/i18n-audit.mjs [--root <path>] [--lang <code,code>] [--out <prefix>]`;

function fail(message) {
    const error = new Error(message);
    error.auditFatal = true;
    throw error;
}

export function parseCli(argv = process.argv.slice(2)) {
    const options = { root: process.cwd(), languages: null, out: 'i18n-audit' };
    for (let index = 0; index < argv.length; index += 1) {
        const argument = argv[index];
        if (!['--root', '--lang', '--out'].includes(argument)) fail(`${usage}\nUnknown option: ${argument}`);
        const value = argv[index + 1];
        if (!value || value.startsWith('--')) fail(`${usage}\nMissing value for ${argument}`);
        index += 1;
        if (argument === '--root') options.root = value;
        if (argument === '--out') options.out = value;
        if (argument === '--lang') {
            options.languages = [...new Set(value.split(',').map(code => code.trim()).filter(Boolean))];
            if (options.languages.length === 0) fail('--lang needs at least one code');
        }
    }
    if (!options.out || options.out === '.' || options.out === '..' || /[\\/]/.test(options.out)) {
        fail('--out must be a filename prefix without a path separator');
    }
    return options;
}

function slash(value) {
    return value.split(path.sep).join('/');
}

function walk(directory, files = []) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        if (entry.isDirectory() && EXCLUDED_DIRECTORIES.has(entry.name)) continue;
        const filename = path.join(directory, entry.name);
        if (entry.isDirectory()) walk(filename, files);
        else files.push(filename);
    }
    return files;
}

function normalise(value) {
    return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

function normaliseLang(value) {
    return String(value ?? '').trim().replaceAll('_', '-').toLowerCase();
}

function primaryLanguage(value) {
    return normaliseLang(value).split('-')[0];
}

function expectedLanguages(code) {
    if (code === 'ch') return new Set(['de-ch']);
    if (code === 'no') return new Set(['no', 'nb']);
    return new Set([code]);
}

function isExpectedLanguage(code, lang) {
    return expectedLanguages(code).has(normaliseLang(lang));
}

function countWords(value) {
    return (normalise(value).match(/[\p{L}\p{N}]+/gu) ?? []).length;
}

function isUrlOrEmail(value) {
    return /^(?:https?:\/\/|www\.)/iu.test(value) || /\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b/u.test(value);
}

function lineAt(raw, needle, from = 0) {
    if (!needle) return 1;
    const position = raw.indexOf(needle, Math.max(0, from));
    const index = position === -1 ? raw.indexOf(needle) : position;
    return index === -1 ? 1 : raw.slice(0, index).split('\n').length;
}

function pagePath(rel) {
    if (rel === 'index.html') return '/';
    if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
    return `/${rel}`;
}

function makeUrl(origin, rel) {
    return new URL(pagePath(rel), `${origin.replace(/\/$/u, '')}/`).href;
}

function urlKey(value) {
    try {
        const url = new URL(value);
        return `${url.origin}${url.pathname}`;
    } catch {
        return String(value ?? '').trim();
    }
}

function stripScripts(raw, onlyJsonLd = false) {
    return raw.replace(/<script\b([^>]*)>[\s\S]*?<\/script\s*>/giu, (whole, attributes) => {
        const isJsonLd = /\btype\s*=\s*(["'])application\/ld\+json\1/iu.test(attributes);
        return onlyJsonLd ? (isJsonLd ? '' : whole) : '';
    });
}

function bodySource(raw) {
    return raw.match(/<body\b[^>]*>([\s\S]*?)<\/body\s*>/iu)?.[1] ?? raw;
}

function inferLanguage(rel, optionLanguages) {
    const segments = rel.split('/');
    if (segments.length === 1) return 'x-default';
    if (optionLanguages.includes(segments[0])) return segments[0];
    if (segments[0] === 'blog' && optionLanguages.includes(segments[1])) return segments[1];
    return null;
}

function logicalKey(page) {
    if (!page || page.language === 'x-default') return null;
    const parts = page.rel.split('/');
    return parts[0] === 'blog' ? `blog/${parts.slice(2).join('/')}` : parts.slice(1).join('/');
}

function counterpartEnRel(page) {
    const parts = page.rel.split('/');
    if (parts[0] === 'blog') return ['blog', 'en', ...parts.slice(2)].join('/');
    return ['en', ...parts.slice(1)].join('/');
}

function extractVisibleTextNodes(page) {
    const nodes = [];
    const root = page.$('body').length ? page.$('body') : page.$.root();
    root.find('*').contents().each((_, node) => {
        if (node.type !== 'text') return;
        const parent = node.parent;
        const tag = parent?.name?.toLowerCase();
        if (['script', 'style', 'template', 'noscript'].includes(tag)) return;
        const value = normalise(node.data);
        if (!value) return;
        nodes.push({
            value,
            rawValue: node.data ?? value,
            line: lineAt(page.raw, node.data?.trim() || value),
            parent: tag ?? '',
            inLanguageOption: page.$(node).parents('select#language option').length > 0
        });
    });
    return nodes;
}

function collectJsonStrings(value, values = [], location = '$') {
    if (typeof value === 'string') values.push({ value, location });
    else if (Array.isArray(value)) value.forEach((item, index) => collectJsonStrings(item, values, `${location}[${index}]`));
    else if (value && typeof value === 'object') {
        for (const [key, item] of Object.entries(value)) collectJsonStrings(item, values, `${location}.${key}`);
    }
    return values;
}

function collectByType(value, type, results = []) {
    if (Array.isArray(value)) value.forEach(item => collectByType(item, type, results));
    else if (value && typeof value === 'object') {
        const types = Array.isArray(value['@type']) ? value['@type'] : [value['@type']];
        if (types.includes(type)) results.push(value);
        for (const item of Object.values(value)) collectByType(item, type, results);
    }
    return results;
}

function extractOrigin(siteRoot, allFiles) {
    const sitemap = path.join(siteRoot, 'sitemap.xml');
    if (fs.existsSync(sitemap)) {
        const loc = fs.readFileSync(sitemap, 'utf8').match(/<loc>\s*(https?:\/\/[^<]+)\s*<\/loc>/iu)?.[1];
        if (loc) return new URL(loc).origin;
    }
    for (const filename of allFiles.filter(file => file.endsWith('.html'))) {
        const raw = fs.readFileSync(filename, 'utf8');
        const canonical = raw.match(/<link\b(?=[^>]*\brel=["'][^"']*\bcanonical\b[^"']*["'])(?=[^>]*\bhref=["'](https?:\/\/[^"']+)["'])[^>]*>/iu)?.[1];
        if (canonical) return new URL(canonical).origin;
    }
    return SITE_FALLBACK_ORIGIN;
}

function targetForReference(reference, page, origin, fileSet) {
    const value = String(reference ?? '').trim().replaceAll('&amp;', '&');
    if (!value || /^(?:#|mailto:|tel:|javascript:|data:)/iu.test(value)) return null;
    let url;
    try {
        url = new URL(value, page.url);
    } catch {
        return null;
    }
    if (!/^https?:$/u.test(url.protocol) || url.origin !== origin) return null;
    const clean = decodeURIComponent(url.pathname).replace(/^\/+/u, '');
    const candidates = clean === '' || clean.endsWith('/')
        ? [`${clean}index.html`]
        : path.posix.extname(clean)
            ? [clean]
            : [clean, `${clean}.html`, `${clean}/index.html`];
    const rel = candidates.find(candidate => fileSet.has(candidate));
    return { url, rel: rel ?? null, raw: value };
}

function languageForPublicPath(pathname, optionLanguages) {
    const parts = pathname.replace(/^\/+/u, '').split('/').filter(Boolean);
    if (optionLanguages.includes(parts[0])) return parts[0];
    if (parts[0] === 'blog' && optionLanguages.includes(parts[1])) return parts[1];
    return 'x-default';
}

function footerDetails(page) {
    const footer = page.$('footer, .site-footer, .footer').first();
    const markup = footer.length ? footer.toString() : '';
    return {
        exists: footer.length > 0,
        line: footer.length ? lineAt(page.raw, markup || '<footer') : 1,
        className: normalise(footer.attr('class')).split(' ').filter(Boolean).sort().join(' '),
        hrefs: [...new Set(footer.find('a[href]').toArray()
            .map(element => normalise(page.$(element).attr('href')))
            .filter(Boolean))].sort()
    };
}

function featureMap(page) {
    const header = page.$('body > header, body > .header, [role="banner"]').first();
    const footer = footerDetails(page);
    return {
        header: header.length > 0,
        footer: footer.exists,
        favicon: page.$('link[rel]').toArray().some(element => /(?:^|\s)(?:shortcut\s+)?icon(?:\s|$)/iu.test(page.$(element).attr('rel') ?? '')),
        script: page.$('script[src]').toArray().some(element => /script\.js/iu.test(page.$(element).attr('src') ?? '')),
        footerDetails: footer
    };
}

function siteHeaderLogoH1(page) {
    const header = page.$('body > header, body > .header, [role="banner"]').first();
    if (!header.length) return [];
    return header.find('h1').toArray().filter(element => !/(article|title)/iu.test(page.$(element).attr('class') ?? ''));
}

function isVerificationFile(raw) {
    return !/<(?:html|body)\b/iu.test(raw);
}

function markdownCell(value) {
    return String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', '<br>');
}

function humanSeverity(severity) {
    return ({ high: '높음', medium: '중간', low: '낮음' })[severity];
}

function sortFindings(findings) {
    const priority = { high: 0, medium: 1, low: 2 };
    return [...findings].sort((left, right) =>
        priority[left.severity] - priority[right.severity]
        || left.file.localeCompare(right.file)
        || left.line - right.line
        || left.code.localeCompare(right.code));
}

function summaryTable(summaries) {
    const rows = [
        '| 언어 | 높음 | 중간 | 낮음 | 색인 허용 페이지 수 |',
        '| --- | ---: | ---: | ---: | ---: |'
    ];
    for (const summary of summaries) {
        rows.push(`| ${summary.language} | ${summary.high} | ${summary.medium} | ${summary.low} | ${summary.indexablePages} |`);
    }
    return rows.join('\n');
}

function makeMarkdown(report) {
    const lines = [
        '# i18n audit report',
        '',
        `- 검사 루트: \`${report.siteRoot}\``,
        `- 언어 option 수: ${report.optionLanguageCount}`,
        `- 검사 언어: ${report.selectedLanguages.join(', ') || '없음'}`,
        '',
        '## 언어별 요약',
        '',
        summaryTable(report.summaries),
        '',
        '## 항목별 상세',
        '',
        '| 파일:행 | 검사 코드 | 심각도 | 발견 내용 | 수정 제안 |',
        '| --- | --- | --- | --- | --- |'
    ];
    for (const finding of report.findings) {
        lines.push(`| ${markdownCell(`${finding.file}:${finding.line}`)} | ${finding.code} | ${humanSeverity(finding.severity)} | ${markdownCell(finding.message)} | ${markdownCell(finding.suggestion)} |`);
    }
    if (report.findings.length === 0) lines.push('| - | - | - | 발견 항목 없음 | - |');
    lines.push('', '## 공통 문제', '');
    if (report.commonIssues.length === 0) lines.push('공통 문제 없음.');
    else {
        lines.push('| 검사 코드 | 영향 언어 수 | 발견 내용 | 수정 제안 |', '| --- | ---: | --- | --- |');
        for (const issue of report.commonIssues) {
            lines.push(`| ${issue.code} | ${issue.languages.length} | ${markdownCell(issue.message)} | ${markdownCell(issue.suggestion)} |`);
        }
    }
    return `${lines.join('\n')}\n`;
}

function nonJsonAmpersands(raw) {
    const scripts = [...raw.matchAll(/<script\b[^>]*>[\s\S]*?<\/script\s*>/giu)]
        .map(match => [match.index ?? 0, (match.index ?? 0) + match[0].length]);
    const body = /<body\b[^>]*>([\s\S]*?)<\/body\s*>/iu.exec(raw);
    const bodyStart = body ? (body.index ?? 0) : 0;
    const bodyEnd = body ? bodyStart + body[0].length : raw.length;
    const values = [];
    const expression = /&(?!#\d+;|#x[\da-f]+;|[a-z][\da-z]+;)/giu;
    for (const match of raw.matchAll(expression)) {
        const offset = match.index ?? 0;
        if (scripts.some(([start, end]) => offset >= start && offset < end)) continue;
        const tagStart = raw.lastIndexOf('<', offset);
        const tagEnd = raw.indexOf('>', offset);
        const inAttribute = tagStart !== -1 && tagEnd !== -1 && tagEnd > offset && raw.lastIndexOf('>', offset) < tagStart;
        if (!(offset >= bodyStart && offset < bodyEnd) && !inAttribute) continue;
        values.push({ line: lineAt(raw, '&', offset), offset });
    }
    return values;
}

function sentenceSamples(page) {
    const samples = [];
    for (const node of page.visibleText) {
        for (const sentence of node.value.split(/(?<=[.!?。！？])\s+/u)) {
            if (/(?<!\d)(?:20|31|32)(?!\d)/u.test(sentence)) samples.push({ value: sentence, line: node.line });
        }
    }
    return samples;
}

function textHasMarkdown(value) {
    return /\*\*[^*]+\*\*|__[^_]+__|(?:^|\n)\s*#(?!\d)|`[^`]+`/mu.test(value);
}

function missingLatinSpace(value) {
    const text = value.replace(/https?:\/\/\S+/giu, '');
    for (const match of text.matchAll(/([a-z][.!?])([A-Z][a-z])/gu)) {
        const start = match.index ?? 0;
        const before = text.slice(Math.max(0, start - 8), start + 2);
        if (/\b(?:(?:[A-Za-z]\.){2,}|(?:Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St|vs|etc)\.)$/u.test(before)) continue;
        return match[0];
    }
    return null;
}

export function runAudit({ root = process.cwd(), languages = null, out = 'i18n-audit' } = {}) {
    if (!out || out === '.' || out === '..' || /[\\/]/.test(out)) fail('--out must be a filename prefix without a path separator');
    const projectRoot = path.resolve(root);
    if (!fs.existsSync(projectRoot) || !fs.statSync(projectRoot).isDirectory()) fail(`--root directory not found: ${projectRoot}`);
    const autoFrontend = path.join(projectRoot, 'frontend');
    const siteRoot = fs.existsSync(path.join(autoFrontend, 'ko', 'index.html')) ? autoFrontend : projectRoot;
    const koIndex = path.join(siteRoot, 'ko', 'index.html');
    if (!fs.existsSync(koIndex)) fail(`Missing language source: ${koIndex}`);

    const koSource = fs.readFileSync(koIndex, 'utf8');
    const ko$ = load(koSource);
    const optionLanguages = [...new Set(ko$('#language option[value]').toArray()
        .map(element => normalise(ko$(element).attr('value'))).filter(Boolean))];
    if (optionLanguages.length === 0) fail(`No #language option values in ${koIndex}`);
    const activeLanguages = languages ? [...new Set(languages)] : optionLanguages;
    const invalidLanguages = activeLanguages.filter(code => !optionLanguages.includes(code));
    if (invalidLanguages.length) fail(`Unknown --lang code(s): ${invalidLanguages.join(', ')}`);

    const allAbsFiles = walk(siteRoot);
    const allFiles = allAbsFiles.map(filename => slash(path.relative(siteRoot, filename)));
    const fileSet = new Set(allFiles);
    const htmlFiles = allFiles.filter(file => file.endsWith('.html'));
    const origin = extractOrigin(siteRoot, allAbsFiles);
    const topLevelDirectories = fs.readdirSync(siteRoot, { withFileTypes: true })
        .filter(entry => entry.isDirectory() && !EXCLUDED_DIRECTORIES.has(entry.name) && entry.name !== 'blog')
        .filter(entry => fs.existsSync(path.join(siteRoot, entry.name, 'index.html')))
        .map(entry => entry.name);
    const unexpectedFolders = topLevelDirectories.filter(directory => !optionLanguages.includes(directory));
    const languageFolders = new Set(topLevelDirectories);
    const reportLanguages = [
        'x-default',
        ...activeLanguages,
        ...(languages ? [] : unexpectedFolders.filter(code => !activeLanguages.includes(code)))
    ];
    const findings = [];
    const pages = [];
    const pageByRel = new Map();

    function relativeForReport(filename) {
        return slash(path.relative(projectRoot, filename));
    }
    function addFinding({ language, page, line = 1, code, severity, message, suggestion, commonKey }) {
        const resolvedLanguage = language ?? page?.language ?? 'x-default';
        if (!reportLanguages.includes(resolvedLanguage)) reportLanguages.push(resolvedLanguage);
        findings.push({
            language: resolvedLanguage,
            file: page ? relativeForReport(page.abs) : relativeForReport(koIndex),
            line,
            code,
            severity,
            message,
            suggestion,
            commonKey: commonKey ?? message
        });
    }

    for (const rel of htmlFiles) {
        const language = inferLanguage(rel, optionLanguages);
        if (!language || (language !== 'x-default' && !activeLanguages.includes(language) && language !== 'ko' && language !== 'en')) continue;
        const abs = path.join(siteRoot, rel);
        const raw = fs.readFileSync(abs, 'utf8');
        if (language === 'x-default' && isVerificationFile(raw)) continue;
        const $ = load(raw);
        const page = {
            abs, rel, raw, $, language, selected: language === 'x-default' || activeLanguages.includes(language),
            url: makeUrl(origin, rel), jsonLd: [], visibleText: [], links: [], indexable: false
        };
        page.visibleText = extractVisibleTextNodes(page);
        $('script[type="application/ld+json"]').each((_, element) => {
            const text = $(element).text().trim();
            try {
                page.jsonLd.push({ value: JSON.parse(text), line: lineAt(raw, text), raw: text });
            } catch (error) {
                addFinding({
                    page, line: lineAt(raw, text), code: 'B5', severity: 'high',
                    message: `JSON-LD 파싱 오류: ${error.message}`,
                    suggestion: 'application/ld+json 내용을 유효한 JSON으로 고치기.',
                    commonKey: 'invalid-json-ld'
                });
            }
        });
        pages.push(page);
        pageByRel.set(rel, page);
    }

    for (const code of optionLanguages) {
        if (activeLanguages.includes(code) && !languageFolders.has(code)) {
            addFinding({
                language: code, line: lineAt(koSource, `value="${code}"`), code: 'A0', severity: 'high',
                message: `언어 option "${code}"에 대응하는 ${code}/ 폴더 없음.`,
                suggestion: `${code}/index.html과 언어 페이지를 추가하거나 option 제거.`,
                commonKey: `option-without-folder:${code}`
            });
        }
    }
    if (!languages) {
        for (const code of unexpectedFolders) {
            addFinding({
                language: code, line: 1, code: 'A0', severity: 'high',
                message: `${code}/ 폴더가 #language option 목록에 없음.`,
                suggestion: `ko/index.html의 #language에 "${code}" option 추가 또는 폴더 제거.`,
                commonKey: `folder-without-option:${code}`
            });
        }
    }

    const incoming = new Map();
    const sameLanguageLinkTexts = new Map();
    for (const page of pages.filter(item => item.selected)) {
        page.$('a[href]').each((_, element) => {
            const href = page.$(element).attr('href') ?? '';
            const target = targetForReference(href, page, origin, fileSet);
            const text = normalise(page.$(element).text());
            const line = lineAt(page.raw, href);
            page.links.push({ href, target, text, line });
            if (!target) return;
            if (!target.rel) {
                addFinding({
                    page, line, code: 'A1', severity: 'high',
                    message: `깨진 내부 링크: ${href}`,
                    suggestion: '대상 파일 또는 href 경로를 고치기.',
                    commonKey: `broken-link:${target.url.pathname}`
                });
                return;
            }
            const targetPage = pageByRel.get(target.rel);
            if (page.language !== 'x-default' && /^\/(?!\/)/u.test(href.trim())) {
                const destinationLanguage = languageForPublicPath(target.url.pathname, optionLanguages);
                if (destinationLanguage === 'x-default' || destinationLanguage !== page.language) {
                    addFinding({
                        page, line, code: 'A2', severity: 'high',
                        message: `언어 페이지의 루트 절대 링크가 ${destinationLanguage} 페이지로 이동: ${href}`,
                        suggestion: `상대 경로 또는 /${page.language}/ 경로로 바꾸기.`,
                        commonKey: `root-absolute:${target.url.pathname}`
                    });
                }
            }
            if (targetPage && targetPage.language === page.language) {
                if (!incoming.has(target.rel)) incoming.set(target.rel, new Set());
                incoming.get(target.rel).add(page.rel);
                if (text) {
                    if (!sameLanguageLinkTexts.has(target.rel)) sameLanguageLinkTexts.set(target.rel, new Map());
                    const texts = sameLanguageLinkTexts.get(target.rel);
                    if (!texts.has(text)) texts.set(text, []);
                    texts.get(text).push({ page, line });
                }
            }
        });
    }

    for (const page of pages.filter(item => item.selected && item.language !== 'x-default')) {
        if (!incoming.has(page.rel)) {
            addFinding({
                page, code: 'A3', severity: 'high',
                message: `같은 ${page.language} 페이지에서 연결되지 않는 페이지: ${page.rel}`,
                suggestion: '언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가.',
                commonKey: `orphan:${logicalKey(page)}`
            });
        }
    }

    const koPages = pages.filter(page => page.language === 'ko');
    const koByKey = new Map(koPages.map(page => [logicalKey(page), page]));
    for (const language of activeLanguages.filter(code => code !== 'ko')) {
        const languagePages = pages.filter(page => page.language === language);
        const byKey = new Map(languagePages.map(page => [logicalKey(page), page]));
        for (const [key, koPage] of koByKey) {
            const translated = byKey.get(key);
            if (!translated) {
                addFinding({
                    language, line: 1, code: 'A4', severity: 'high',
                    message: `ko 기준 누락 페이지: ${key}`,
                    suggestion: `${language}/${key.replace(/^blog\//u, '')}에 대응 페이지 추가.`,
                    commonKey: `missing-ko-page:${key}`
                });
                continue;
            }
            const koreanFeatures = featureMap(koPage);
            const translatedFeatures = featureMap(translated);
            for (const feature of ['header', 'footer', 'favicon', 'script']) {
                if (koreanFeatures[feature] && !translatedFeatures[feature]) {
                    const label = {
                        header: 'header',
                        footer: 'footer',
                        favicon: 'favicon(link rel="icon")',
                        script: 'script.js'
                    }[feature];
                    addFinding({
                        page: translated, code: 'A5', severity: 'high',
                        message: `ko 동등 페이지에는 있으나 없는 ${label}: ${key}`,
                        suggestion: `ko 페이지의 ${label} 구조를 이 페이지에 동기화.`,
                        commonKey: `missing-feature:${key}:${feature}`
                    });
                }
            }
            if (koreanFeatures.footer && translatedFeatures.footer
                && (koreanFeatures.footerDetails.className !== translatedFeatures.footerDetails.className
                    || koreanFeatures.footerDetails.hrefs.join('\u0000') !== translatedFeatures.footerDetails.hrefs.join('\u0000'))) {
                addFinding({
                    page: translated, line: translatedFeatures.footerDetails.line, code: 'A5', severity: 'medium',
                    message: `A5 푸터 구조 불일치: ${key} (class 또는 링크 href 집합이 ko와 다름).`,
                    suggestion: 'ko 동등 페이지의 footer class와 링크 href 집합을 맞추기.',
                    commonKey: `footer-structure:${key}`
                });
            }
        }
    }

    const sitemapFile = path.join(siteRoot, 'sitemap.xml');
    const sitemapRels = new Set();
    if (fs.existsSync(sitemapFile)) {
        const sitemap = fs.readFileSync(sitemapFile, 'utf8');
        for (const match of sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/giu)) {
            const probe = targetForReference(match[1], { url: `${origin}/` }, origin, fileSet);
            if (probe?.rel) sitemapRels.add(probe.rel);
        }
    } else {
        addFinding({
            language: 'x-default', line: 1, code: 'B4', severity: 'high',
            message: 'sitemap.xml 파일 없음.', suggestion: '색인 페이지를 포함한 sitemap.xml 추가.', commonKey: 'missing-sitemap'
        });
    }

    for (const page of pages.filter(item => item.selected)) {
        const htmlLang = normaliseLang(page.$('html').attr('lang'));
        if (page.language !== 'x-default' && !isExpectedLanguage(page.language, htmlLang)) {
            addFinding({
                page, line: lineAt(page.raw, '<html'), code: 'B1', severity: 'high',
                message: `html lang="${htmlLang || '(없음)'}"가 폴더 코드 ${page.language}와 맞지 않음.`,
                suggestion: `html lang를 ${[...expectedLanguages(page.language)].join(' 또는 ')}로 고치기.`,
                commonKey: `html-lang:${htmlLang}`
            });
        }

        const ogLocale = page.$('meta[property="og:locale"]').attr('content');
        if (ogLocale && htmlLang && primaryLanguage(ogLocale) !== primaryLanguage(htmlLang)) {
            addFinding({
                page, line: lineAt(page.raw, ogLocale), code: 'B2', severity: 'medium',
                message: `og:locale "${ogLocale}"와 html lang "${htmlLang}"의 언어 코드 불일치.`,
                suggestion: 'og:locale의 언어 부분을 html lang에 맞추기.',
                commonKey: `og-locale:${primaryLanguage(ogLocale)}:${primaryLanguage(htmlLang)}`
            });
        }
        for (const block of page.jsonLd) {
            const languagesInJson = [];
            const visit = value => {
                if (Array.isArray(value)) value.forEach(visit);
                else if (value && typeof value === 'object') {
                    if (typeof value.inLanguage === 'string') languagesInJson.push(value.inLanguage);
                    Object.values(value).forEach(visit);
                }
            };
            visit(block.value);
            for (const jsonLanguage of languagesInJson) {
                if (htmlLang && normaliseLang(jsonLanguage) !== htmlLang) {
                    addFinding({
                        page, line: lineAt(page.raw, jsonLanguage), code: 'B2', severity: 'medium',
                        message: `JSON-LD inLanguage "${jsonLanguage}"와 html lang "${htmlLang}" 불일치.`,
                        suggestion: 'JSON-LD inLanguage을 html lang과 같은 BCP 47 코드로 고치기.',
                        commonKey: `json-language:${normaliseLang(jsonLanguage)}:${htmlLang}`
                    });
                }
            }
        }

        const canonical = page.$('link[rel~="canonical"]').attr('href');
        const ogUrl = page.$('meta[property="og:url"]').attr('content');
        const actual = page.url;
        for (const [name, value] of [['canonical', canonical], ['og:url', ogUrl]]) {
            if (!value || urlKey(value) !== urlKey(actual)) {
                addFinding({
                    page, line: value ? lineAt(page.raw, value) : 1, code: 'B3', severity: 'high',
                    message: `${name} "${value || '(없음)'}"가 실제 URL "${actual}"와 다름.`,
                    suggestion: `${name}을 ${actual}로 맞추기.`,
                    commonKey: `${name}:${urlKey(value)}:${urlKey(actual)}`
                });
            }
        }

        const robots = page.$('meta[name="robots"]').attr('content') ?? '';
        page.indexable = !/\bnoindex\b/iu.test(robots);
        if (page.indexable && !sitemapRels.has(page.rel)) {
            addFinding({
                page, code: 'B4', severity: 'high',
                message: `색인 허용 페이지가 sitemap.xml에 없음: ${page.rel}`,
                suggestion: 'sitemap.xml에 canonical URL 추가 또는 robots에 noindex 지정.',
                commonKey: `indexable-not-sitemap:${logicalKey(page) ?? page.rel}`
            });
        }
        if (!page.indexable && sitemapRels.has(page.rel)) {
            addFinding({
                page, code: 'B4', severity: 'high',
                message: `noindex 페이지가 sitemap.xml에 있음: ${page.rel}`,
                suggestion: 'sitemap.xml에서 제거하거나 robots noindex 제거.',
                commonKey: `noindex-in-sitemap:${logicalKey(page) ?? page.rel}`
            });
        }

        for (const logo of siteHeaderLogoH1(page)) {
            const text = normalise(page.$(logo).text());
            if (text !== 'AI & Poem') {
                addFinding({
                    page, line: lineAt(page.raw, text), code: 'C1', severity: 'high',
                    message: `헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "${text}".`,
                    suggestion: '사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일.',
                    commonKey: `header-logo:${text}`
                });
            }
        }

        for (const sample of sentenceSamples(page)) {
            addFinding({
                page, line: sample.line, code: 'C5', severity: 'medium',
                message: `수동 확인, 지원 언어 수 ${optionLanguages.length}개. 화면 문장: ${sample.value}`,
                suggestion: `표기 숫자가 실제 option 수 ${optionLanguages.length}와 맞는지 확인.`,
                commonKey: 'language-count-manual-check'
            });
        }

        if (page.language !== 'ko' && page.language !== 'x-default') {
            for (const node of page.visibleText.filter(node => /[가-힣]/u.test(node.value))) {
                addFinding({
                    page, line: node.line, code: 'D1', severity: 'medium',
                    message: `비한국어 화면 텍스트에 한글 포함: ${node.value}`,
                    suggestion: '페이지 언어로 번역하거나 의도한 고유명사인지 확인.',
                    commonKey: 'hangul-visible-text'
                });
            }
            page.$('meta[content]').each((_, element) => {
                const value = page.$(element).attr('content') ?? '';
                if (/[가-힣]/u.test(value)) {
                    addFinding({
                        page, line: lineAt(page.raw, value), code: 'D1', severity: 'medium',
                        message: `비한국어 meta에 한글 포함: ${value}`,
                        suggestion: 'meta content를 페이지 언어로 번역.', commonKey: 'hangul-meta'
                    });
                }
            });
            for (const block of page.jsonLd) {
                for (const item of collectJsonStrings(block.value)) {
                    if (/[가-힣]/u.test(item.value)) {
                        addFinding({
                            page, line: lineAt(page.raw, item.value), code: 'D1', severity: 'medium',
                            message: `비한국어 JSON-LD ${item.location}에 한글 포함: ${item.value}`,
                            suggestion: 'JSON-LD 문자열을 페이지 언어로 번역.', commonKey: 'hangul-json-ld'
                        });
                    }
                }
            }
        }

        for (const node of page.visibleText) {
            if (textHasMarkdown(node.rawValue)) {
                addFinding({
                    page, line: node.line, code: 'E1', severity: 'low',
                    message: `화면 텍스트에 마크다운 잔여 기호: ${node.value}`,
                    suggestion: '마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체.', commonKey: 'markdown-residue'
                });
            }
            if (LATIN_LANGUAGES.has(page.language)) {
                const sample = missingLatinSpace(node.value);
                if (sample) {
                    addFinding({
                        page, line: node.line, code: 'E2', severity: 'low',
                        message: `라틴 문자 문장부호 뒤 공백 누락: ${sample}`,
                        suggestion: '문장부호 뒤에 공백 추가.', commonKey: `punctuation-space:${sample}`
                    });
                }
            }
        }
        if (normaliseLang(htmlLang) === 'de-ch' && /ß/u.test(stripScripts(page.raw, true))) {
            addFinding({
                page, line: lineAt(page.raw, 'ß'), code: 'E3', severity: 'low',
                message: 'de-CH 페이지에 ß 포함.', suggestion: '스위스 독일어 표기에 맞게 ss 사용.', commonKey: 'de-ch-eszett'
            });
        }
        for (const ampersand of nonJsonAmpersands(page.raw)) {
            addFinding({
                page, line: ampersand.line, code: 'E4', severity: 'low',
                message: 'HTML 본문 또는 속성에 이스케이프되지 않은 & 포함.',
                suggestion: '&를 &amp;로 이스케이프.', commonKey: 'unescaped-ampersand'
            });
        }
        page.$('p').each((_, element) => {
            if (!normalise(page.$(element).text())) {
                const markup = page.$(element).toString();
                addFinding({
                    page, line: lineAt(page.raw, markup || '<p'), code: 'E5', severity: 'low',
                    message: '빈 p 요소 발견.', suggestion: '빈 p 제거 또는 필요한 내용 추가.', commonKey: 'empty-paragraph'
                });
            }
        });
        const koreanComments = (page.raw.match(/<!--[\s\S]*?-->/gu) ?? []).filter(comment => /[가-힣]/u.test(comment));
        if (koreanComments.length) {
            addFinding({
                page, code: 'F1', severity: 'low', message: `한글 HTML 주석 ${koreanComments.length}개.`,
                suggestion: '배포 HTML에서 필요 없는 편집 주석 제거.', commonKey: 'korean-html-comments'
            });
        }
        const gtagCount = (page.raw.match(/\bfunction\s+gtag\b/gu) ?? []).length;
        if (gtagCount > 1) {
            addFinding({
                page, code: 'F2', severity: 'low', message: `function gtag 선언 ${gtagCount}개.`,
                suggestion: 'gtag 초기화 선언을 하나로 합치기.', commonKey: 'duplicate-gtag'
            });
        }
        const h1Count = page.$('h1').length;
        if (h1Count >= 2) {
            addFinding({
                page, code: 'F3', severity: 'low', message: `페이지 h1 ${h1Count}개.`,
                suggestion: '문서 주제를 나타내는 h1 하나만 유지.', commonKey: 'multiple-h1'
            });
        }
    }

    for (const [targetRel, labels] of sameLanguageLinkTexts) {
        if (labels.size < 2) continue;
        const target = pageByRel.get(targetRel);
        const examples = [...labels.keys()].slice(0, 4).join(' / ');
        for (const references of labels.values()) {
            const reference = references[0];
            addFinding({
                page: reference.page, line: reference.line, code: 'C2', severity: 'medium',
                message: `같은 언어 href ${targetRel}의 링크 텍스트 ${labels.size}종류: ${examples}`,
                suggestion: '같은 대상 링크의 번역 텍스트를 하나로 통일.', commonKey: `inconsistent-link-text:${target?.language}:${targetRel}`
            });
        }
    }

    for (const page of pages.filter(item => item.selected && item.language !== 'x-default')) {
        const isMain = page.rel === `${page.language}/index.html`;
        const isBlogIndex = page.rel === `blog/${page.language}/index.html`;
        if (!isMain && !isBlogIndex) continue;
        for (const link of page.links) {
            const target = link.target?.rel ? pageByRel.get(link.target.rel) : null;
            if (!target || target.language !== page.language || !target.rel.startsWith(`blog/${page.language}/`) || target.rel.endsWith('/index.html')) continue;
            const articleH1 = target.$('h1.article-title').first().length
                ? target.$('h1.article-title').first()
                : target.$('h1').last();
            const title = normalise(articleH1.text());
            if (link.text && title && normalise(link.text) !== title) {
                addFinding({
                    page, line: link.line, code: 'C3', severity: 'high',
                    message: `기사 링크 텍스트 "${link.text}"와 대상 h1 "${title}" 불일치: ${target.rel}`,
                    suggestion: '메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기.', commonKey: `article-title:${logicalKey(target)}`
                });
            }
        }
    }

    for (const page of pages.filter(item => item.selected)) {
        const faqPages = page.jsonLd.flatMap(block => collectByType(block.value, 'FAQPage'));
        for (const faq of faqPages) {
            const entities = Array.isArray(faq.mainEntity) ? faq.mainEntity : [];
            const details = page.$('details').toArray();
            if (entities.length !== details.length) {
                addFinding({
                    page, code: 'C4', severity: 'high',
                    message: `FAQPage 질문 ${entities.length}개와 화면 details ${details.length}개 수 불일치.`,
                    suggestion: 'FAQ JSON-LD와 화면 FAQ 항목 수를 맞추기.', commonKey: 'faq-count-mismatch'
                });
            }
            const limit = Math.min(entities.length, details.length);
            for (let index = 0; index < limit; index += 1) {
                const entity = entities[index] ?? {};
                const detail = page.$(details[index]);
                const question = normalise(detail.find('summary').first().text());
                const answer = normalise(detail.clone().children('summary').remove().end().text());
                const schemaQuestion = normalise(entity.name);
                const schemaAnswer = normalise(entity.acceptedAnswer?.text);
                if (question !== schemaQuestion || answer !== schemaAnswer) {
                    addFinding({
                        page, line: lineAt(page.raw, question || schemaQuestion), code: 'C4', severity: 'high',
                        message: `FAQ ${index + 1} 화면과 JSON-LD 불일치. 화면 질문="${question}", JSON-LD 질문="${schemaQuestion}".`,
                        suggestion: 'summary·답변과 FAQPage mainEntity를 같은 문구로 동기화.', commonKey: `faq-content:${index}`
                    });
                }
            }
        }
        const creativeWorks = page.jsonLd.flatMap(block => collectByType(block.value, 'CreativeWork'));
        const poems = page.$('pre').toArray().map(element => normalise(page.$(element).text()));
        for (const work of creativeWorks) {
            const text = normalise(work.text);
            if (text && !poems.includes(text)) {
                addFinding({
                    page, line: lineAt(page.raw, text), code: 'C4', severity: 'medium',
                    message: 'CreativeWork text와 화면 pre 내용이 일치하지 않음.',
                    suggestion: 'CreativeWork text를 화면에 보이는 시 전문과 동기화.', commonKey: 'creative-work-poem-mismatch'
                });
            }
        }
    }

    for (const page of pages.filter(page => page.selected && page.language !== 'en' && page.language !== 'x-default')) {
        const english = pageByRel.get(counterpartEnRel(page));
        if (!english) continue;
        const englishNodes = new Set(english.visibleText
            .filter(node => !node.inLanguageOption)
            .map(node => node.value));
        for (const node of page.visibleText) {
            if (node.inLanguageOption || countWords(node.value) < 2 || node.value === 'AI & Poem' || isUrlOrEmail(node.value)) continue;
            if (englishNodes.has(node.value)) {
                addFinding({
                    page, line: node.line, code: 'D2', severity: 'medium',
                    message: `동명 en 페이지와 같은 2단어 이상 텍스트: ${node.value}`,
                    suggestion: '페이지 언어로 번역하거나 공통 고정 문구인지 확인.', commonKey: `same-en-text:${node.value}`
                });
            }
        }
    }

    for (const page of pages.filter(item => item.selected)) {
        for (const node of page.visibleText) {
            for (const phrase of UNTRANSLATED_TEXT) {
                if (node.value.includes(phrase)) {
                    addFinding({
                        page, line: node.line, code: 'D3', severity: 'medium',
                        message: `알려진 미번역 문자열 "${phrase}" 발견.`,
                        suggestion: '페이지 언어에 맞는 문구로 번역.', commonKey: `known-untranslated:${phrase}`
                    });
                }
            }
            if (/^by\s+/iu.test(node.value)) {
                addFinding({
                    page, line: node.line, code: 'D3', severity: 'medium',
                    message: '작성자 줄에 "by " 표기 발견.', suggestion: '페이지 언어의 작성자 표기로 번역.', commonKey: 'known-untranslated:by'
                });
            }
        }
        page.$('[aria-label="Stop"]').each((_, element) => {
            addFinding({
                page, line: lineAt(page.raw, 'aria-label="Stop"'), code: 'D3', severity: 'medium',
                message: '알려진 미번역 속성 aria-label="Stop" 발견.', suggestion: '페이지 언어에 맞는 aria-label로 번역.', commonKey: 'known-untranslated:aria-stop'
            });
        });
    }

    const summaries = reportLanguages.map(language => {
        const languageFindings = findings.filter(finding => finding.language === language);
        const languagePages = pages.filter(page => page.selected && page.language === language);
        return {
            language,
            high: languageFindings.filter(finding => finding.severity === 'high').length,
            medium: languageFindings.filter(finding => finding.severity === 'medium').length,
            low: languageFindings.filter(finding => finding.severity === 'low').length,
            indexablePages: languagePages.filter(page => page.indexable).length
        };
    });
    const threshold = Math.ceil(optionLanguages.length / 2);
    const commonGroups = new Map();
    for (const finding of findings.filter(finding => optionLanguages.includes(finding.language))) {
        const key = `${finding.code}:${finding.commonKey}`;
        if (!commonGroups.has(key)) commonGroups.set(key, []);
        commonGroups.get(key).push(finding);
    }
    const commonIssues = [...commonGroups.values()]
        .map(group => ({
            code: group[0].code,
            message: group[0].message,
            suggestion: group[0].suggestion,
            languages: [...new Set(group.map(finding => finding.language))].sort(),
            files: [...new Set(group.map(finding => `${finding.file}:${finding.line}`))].sort()
        }))
        .filter(issue => issue.languages.length >= threshold)
        .sort((left, right) => left.code.localeCompare(right.code) || right.languages.length - left.languages.length);

    const report = {
        generatedAt: new Date().toISOString(),
        projectRoot,
        siteRoot,
        origin,
        optionLanguageCount: optionLanguages.length,
        optionLanguages,
        selectedLanguages: activeLanguages,
        summaries,
        findings: sortFindings(findings),
        languageCountMentions: findings.filter(finding => finding.code === 'C5'),
        commonIssues
    };
    const reportsDir = path.join(projectRoot, 'reports');
    fs.mkdirSync(reportsDir, { recursive: true });
    const markdownPath = path.join(reportsDir, `${out}.md`);
    const jsonPath = path.join(reportsDir, `${out}.json`);
    fs.writeFileSync(markdownPath, makeMarkdown(report));
    fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);
    return { report, markdownPath, jsonPath };
}

export function main(argv = process.argv.slice(2)) {
    const options = parseCli(argv);
    const result = runAudit(options);
    process.stdout.write(`${summaryTable(result.report.summaries)}\n\n`);
    process.stdout.write(`Reports: ${result.markdownPath}\n         ${result.jsonPath}\n`);
    return result;
}

const executedDirectly = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (executedDirectly) {
    try {
        main();
    } catch (error) {
        process.stderr.write(`${error.message}\n`);
        process.exitCode = 1;
    }
}
