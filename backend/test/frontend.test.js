const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.resolve(__dirname, '../../frontend/script.js'), 'utf8');

function page(fetch) {
    const elements = new Map();
    for (const id of ['language', 'processing-video', 'topic', 'poem', 'tts-button',
        'poetry-writing-button', 'poem-form-select', 'poem-form']) {
        elements.set(id, { value: '', textContent: '', placeholder: '', disabled: false,
            listeners: {}, paused: true, addEventListener(name, callback) { this.listeners[name] = callback; },
            setCustomValidity() {}, play() { this.paused = false; }, pause() { this.paused = true; } });
    }
    elements.get('language').value = 'ko';
    elements.get('topic').value = '겨울밤';
    elements.get('poem-form-select').value = 'sijo';
    const timers = new Map();
    let timerId = 0;
    const spoken = [];
    const context = {
        console, AbortController, fetch,
        document: { documentElement: { lang: 'ko' },
            getElementById: id => elements.get(id) || null, querySelector: () => null },
        window: { speechSynthesis: { cancel() {}, speak(utterance) { spoken.push(utterance); } } },
        SpeechSynthesisUtterance: function(text) { this.text = text; },
        setTimeout(callback, delay) { timers.set(++timerId, { callback, delay }); return timerId; },
        clearTimeout(id) { timers.delete(id); }
    };
    // 같은 파일의 쿠키 배너를 제외하고 실제 생성·낭송 핸들러를 실행한다.
    vm.runInNewContext(source.slice(0, source.indexOf('// 쿠키 동의 배너 (모든 페이지에서 실행)')), context);
    return { elements, timers, spoken, submit: () => elements.get('poem-form').listeners.submit({ preventDefault() {} }) };
}

test('한국어 시조 요청, 대기 중 버튼 비활성화, 성공 후 세 행 출력과 낭송', async () => {
    let resolveFetch;
    let sent;
    const poem = '찬바람 문풍지를 흔들어 잠을 깨네\n흰 눈은 골목마다 소리 없이 내려앉네\n이 밤도 지나고 나면 새벽빛이 오리라';
    const ui = page((_url, options) => {
        sent = JSON.parse(options.body);
        return new Promise(resolve => { resolveFetch = resolve; });
    });
    const pending = ui.submit();
    assert.deepEqual(sent, { topic: '겨울밤', language: 'ko', form: 'sijo' });
    assert.equal(ui.elements.get('poetry-writing-button').disabled, true);
    assert.equal(ui.elements.get('tts-button').disabled, true);
    resolveFetch({ ok: true, json: async () => ({ poem }) });
    await pending;
    assert.equal(ui.elements.get('poem').textContent, poem);
    assert.equal(ui.elements.get('poetry-writing-button').disabled, false);
    assert.equal(ui.elements.get('tts-button').disabled, false);
    assert.equal(ui.elements.get('processing-video').paused, true);
    assert.equal(ui.timers.size, 0);
    ui.elements.get('tts-button').listeners.click({});
    assert.equal(ui.spoken[0].text, poem);
    assert.equal(ui.spoken[0].lang, 'ko-KR');
});

for (const [status, error] of [
    [502, '평시조 형식에 맞는 시를 완성하지 못했습니다. 다시 시도해 주세요.'],
    [504, '시조 생성 시간이 초과되었습니다. 다시 시도해 주세요.']
]) {
    test(`HTTP ${status} 오류 표시, 제출 복구, 낭송 비활성화`, async () => {
        const ui = page(async () => ({ ok: false, status, json: async () => ({ error }) }));
        await ui.submit();
        assert.ok(ui.elements.get('poem').textContent.includes(error));
        assert.equal(ui.elements.get('poetry-writing-button').disabled, false);
        assert.equal(ui.elements.get('tts-button').disabled, true);
        assert.equal(ui.elements.get('processing-video').paused, true);
        assert.equal(ui.timers.size, 0);
    });
}

test('브라우저 30초 제한 후 버튼 복구', async () => {
    const ui = page((_url, options) => new Promise((_resolve, reject) => {
        options.signal.addEventListener('abort', () => reject(new Error('aborted')));
    }));
    const pending = ui.submit();
    const timer = [...ui.timers.values()][0];
    assert.equal(timer.delay, 30000);
    timer.callback();
    await pending;
    assert.equal(ui.elements.get('poetry-writing-button').disabled, false);
    assert.equal(ui.elements.get('tts-button').disabled, true);
    assert.equal(ui.elements.get('processing-video').paused, true);
    assert.equal(ui.timers.size, 0);
});
