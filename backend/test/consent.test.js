// 쿠키 동의를 언제든 바꾸거나 철회하는 푸터 "쿠키 설정" 경로가 모든 페이지에서 동작하는지 검사
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const frontend = path.resolve(__dirname, '../../frontend');
const read = file => fs.readFileSync(path.join(frontend, file), 'utf8');
const script = read('script.js');
const consentKey = 'aiAndPoemCookieConsent';

class FakeElement {
    constructor(tagName, className = '') {
        this.tagName = tagName;
        this.className = className;
        this.id = '';
        this.textContent = '';
        this.children = [];
        this.parent = null;
        this.classList = { add() {}, remove() {} };
    }
    appendChild(child) {
        child.parent = this;
        this.children.push(child);
        return child;
    }
    remove() {
        if (this.parent) this.parent.children = this.parent.children.filter(child => child !== this);
        this.parent = null;
    }
    *descendants() {
        for (const child of this.children) {
            yield child;
            yield* child.descendants();
        }
    }
    // '#id'와 '.class' 선택자만 지원한다.
    querySelector(selector) {
        const name = selector.slice(1);
        const matches = selector.startsWith('#')
            ? element => element.id === name
            : element => element.className.split(' ').includes(name);
        for (const element of this.descendants()) if (matches(element)) return element;
        return null;
    }
}

function load({ storage = {}, footer = 'v2', lang = 'ko' } = {}) {
    const body = new FakeElement('body');
    if (footer === 'v2') {
        body.appendChild(new FakeElement('footer', 'site-footer site-footer--v2'))
            .appendChild(new FakeElement('nav', 'footer-secondary'));
    } else if (footer === 'plain') {
        body.appendChild(new FakeElement('footer', 'site-footer'));
    }
    const gtagCalls = [];
    vm.runInNewContext(script, {
        console,
        window: {},
        localStorage: {
            getItem: key => (Object.hasOwn(storage, key) ? storage[key] : null),
            setItem: (key, value) => { storage[key] = String(value); }
        },
        gtag: (...args) => gtagCalls.push(JSON.parse(JSON.stringify(args))),
        document: {
            documentElement: { lang },
            body,
            getElementById: id => body.querySelector(`#${id}`),
            querySelector: selector => (selector === 'footer.site-footer' ? body.querySelector('.site-footer') : null),
            createElement: tagName => new FakeElement(tagName),
            createTextNode: text => Object.assign(new FakeElement('#text'), { textContent: text })
        }
    });
    return { body, storage, gtagCalls };
}

test('푸터 쿠키 설정은 저장된 동의를 그대로 보여주고 철회를 Consent Mode에 반영', () => {
    const storage = { [consentKey]: JSON.stringify({ essential: true, analytics: true, advertising: false }) };
    const { body, gtagCalls } = load({ storage });
    const nav = body.querySelector('.footer-secondary');
    const button = nav.querySelector('.footer-cookie-settings');
    assert.equal(button.textContent, '쿠키 설정');
    assert.equal(nav.children.at(-3).textContent, '|');

    button.onclick();
    const analytics = body.querySelector('#cookie-analytics');
    assert.equal(analytics.checked, true);
    assert.equal(body.querySelector('#cookie-advertising').checked, false);

    analytics.checked = false;
    body.querySelector('.cookie-modal-save').onclick();
    assert.deepEqual(JSON.parse(storage[consentKey]), { essential: true, analytics: false, advertising: false });
    assert.deepEqual(gtagCalls.at(-1), ['consent', 'update', {
        analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
    }]);
    assert.equal(body.querySelector('#cookie-settings-overlay'), null);
});

test('첫 방문 푸터 설정은 기본 꺼짐이며 저장하면 동의 배너를 닫음', () => {
    const { body, storage } = load({ footer: 'plain', lang: 'de' });
    assert.ok(body.querySelector('#cookie-consent-banner'));
    const button = body.querySelector('.site-footer').querySelector('.footer-cookie-settings');
    assert.equal(button.textContent, 'Cookie-Einstellungen');

    button.onclick();
    assert.equal(body.querySelector('#cookie-analytics').checked, false);
    assert.equal(body.querySelector('#cookie-advertising').checked, false);
    body.querySelector('.cookie-modal-save').onclick();
    assert.deepEqual(JSON.parse(storage[consentKey]), { essential: true, analytics: false, advertising: false });
    assert.equal(body.querySelector('#cookie-consent-banner'), null);
});

test('사이트 푸터가 없는 페이지에서도 스크립트가 오류 없이 실행', () => {
    const { body } = load({ footer: null });
    assert.equal(body.querySelector('.footer-cookie-settings'), null);
});

function htmlFiles(directory = frontend) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
        const filename = path.join(directory, entry.name);
        if (entry.isDirectory()) return htmlFiles(filename);
        return entry.name.endsWith('.html') ? [path.relative(frontend, filename).split(path.sep).join('/')] : [];
    });
}

test('검색엔진 소유 확인 파일을 뺀 모든 HTML이 script.js와 사이트 푸터를 가짐', () => {
    const pages = htmlFiles().filter(file => !/^(google|naver)[0-9a-f]+\.html$/.test(path.posix.basename(file)));
    assert.ok(pages.length > 500);
    const missing = pages.filter(file => {
        const html = read(file);
        return !/<script\b[^>]*\bsrc="[^"]*script\.js"/.test(html) ||
            !/<footer\b[^>]*\bclass="[^"]*\bsite-footer\b/.test(html);
    });
    assert.deepEqual(missing, []);
});
