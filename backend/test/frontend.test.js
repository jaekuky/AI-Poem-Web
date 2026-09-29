const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.resolve(__dirname, '../../frontend/script.js'), 'utf8');

function element(value = '') {
    return {
        value, textContent: '', placeholder: '', disabled: false, attributes: {}, listeners: {}, paused: true,
        addEventListener(name, callback) { this.listeners[name] = callback; },
        setAttribute(name, value) { this.attributes[name] = String(value); },
        removeAttribute(name) { delete this.attributes[name]; },
        setCustomValidity() {},
        play() { this.paused = false; return Promise.resolve(); },
        pause() { this.paused = true; }
    };
}

function page(fetch, { voices = [{ lang: 'ko-KR', name: 'Korean test voice' }], storage = {},
    playAudio, browserSupported = true, htmlLang = 'ko', language = 'ko' } = {}) {
    const elements = new Map();
    for (const id of ['language', 'processing-video', 'topic', 'poem', 'tts-button', 'tts-stop-button',
        'tts-speed', 'tts-speed-label', 'tts-ai-notice', 'tts-status', 'poetry-writing-button',
        'poem-form-select', 'poem-form']) elements.set(id, element());
    elements.get('language').value = language;
    elements.get('topic').value = '겨울밤';
    elements.get('poem-form-select').value = 'sijo';
    elements.get('tts-speed').value = '1';

    const timers = new Map();
    let timerId = 0;
    const spoken = [];
    const speechListeners = {};
    const speech = {
        cancelCount: 0, pauseCount: 0, resumeCount: 0, paused: false, queue: [],
        getVoices: () => voices,
        addEventListener(name, callback) { speechListeners[name] = callback; },
        cancel() { this.cancelCount += 1; this.queue = []; },
        pause() { this.pauseCount += 1; this.paused = true; },
        resume() {
            this.resumeCount += 1; this.paused = false;
            spoken.push(...this.queue); this.queue = [];
        },
        speak(utterance) { (this.paused ? this.queue : spoken).push(utterance); }
    };
    const audios = [];
    const createdUrls = [];
    const revokedUrls = [];
    class Audio {
        constructor(src) {
            this.src = src; this.paused = true; this.playCount = 0;
            audios.push(this);
        }
        play() {
            this.playCount += 1; this.paused = false;
            return playAudio ? playAudio(this) : Promise.resolve();
        }
        pause() { this.paused = true; }
        removeAttribute(name) { if (name === 'src') this.src = ''; }
        load() {}
    }
    const windowListeners = {};
    function Utterance(text) { this.text = text; }
    const localStorage = {
        getItem(key) { return Object.hasOwn(storage, key) ? storage[key] : null; },
        setItem(key, value) { storage[key] = String(value); }
    };
    const context = {
        console, AbortController, fetch, localStorage, Audio,
        URL: {
            createObjectURL(blob) {
                const url = `blob:tts-${createdUrls.length + 1}`;
                createdUrls.push({ url, blob }); return url;
            },
            revokeObjectURL(url) { revokedUrls.push(url); }
        },
        document: {
            documentElement: { lang: htmlLang },
            getElementById: id => elements.get(id) || null,
            querySelector: () => null
        },
        window: {
            speechSynthesis: browserSupported ? speech : undefined,
            SpeechSynthesisUtterance: browserSupported ? Utterance : undefined,
            addEventListener(name, callback) { windowListeners[name] = callback; }
        },
        SpeechSynthesisUtterance: Utterance,
        setTimeout(callback, delay) { timers.set(++timerId, { callback, delay }); return timerId; },
        clearTimeout(id) { timers.delete(id); }
    };
    vm.runInNewContext(source.slice(0, source.indexOf('// 쿠키 동의 배너 (모든 페이지에서 실행)')), context);
    return {
        elements, timers, spoken, speech, speechListeners, storage, windowListeners,
        audios, createdUrls, revokedUrls,
        fireTimer(delay) {
            const entry = [...timers.entries()].find(([, timer]) => timer.delay === delay);
            assert.ok(entry, `No timer for ${delay} ms`);
            timers.delete(entry[0]); entry[1].callback();
        },
        submit: () => elements.get('poem-form').listeners.submit({ preventDefault() {} }),
        clickPlay: () => elements.get('tts-button').listeners.click(),
        clickStop: () => elements.get('tts-stop-button').listeners.click(),
        changeSpeed: value => {
            elements.get('tts-speed').value = value;
            elements.get('tts-speed').listeners.change();
        }
    };
}

const poem = '찬바람 문풍지를 흔들어 잠을 깨네\n흰 눈은 골목마다 소리 없이 내려앉네\n이 밤도 지나고 나면 새벽빛이 오리라';

async function flush() {
    await new Promise(resolve => setImmediate(resolve));
}

test('한국어 시조 요청 뒤 행 단위 낭독, 버튼 상태, 음성 언어 적용', async () => {
    let resolveFetch;
    let sent;
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
    assert.equal(ui.elements.get('tts-button').disabled, false);
    assert.equal(ui.elements.get('tts-stop-button').disabled, true);
    assert.equal(ui.elements.get('tts-stop-button').textContent, '■ 정지');
    assert.equal(ui.elements.get('tts-stop-button').attributes['aria-label'], '정지');
    assert.equal(ui.elements.get('processing-video').paused, true);
    assert.equal(ui.timers.size, 0);

    ui.clickPlay();
    ui.clickPlay();
    await flush();
    assert.equal(ui.spoken.length, 1);
    assert.equal(ui.spoken[0].text, poem.split('\n')[0]);
    assert.equal(ui.spoken[0].lang, 'ko-KR');
    assert.equal(ui.spoken[0].rate, 1);
    ui.spoken[0].onend();
    assert.equal(ui.spoken[1].text, poem.split('\n')[1]);
    ui.spoken[1].onend();
    assert.equal(ui.spoken[2].text, poem.split('\n')[2]);
    ui.spoken[2].onend();
    assert.match(ui.elements.get('tts-status').textContent, /멈췄습니다/);
});

test('음성 목록 지연 뒤 정확한 언어 음성으로 낭독', async () => {
    const voices = [];
    const ui = page(async () => ({ ok: true, json: async () => ({ poem }) }), { voices });
    await ui.submit();
    ui.clickPlay();
    await flush();
    assert.equal(ui.spoken.length, 0);
    voices.push({ lang: 'ko-KR', name: 'Late Korean voice' });
    ui.speechListeners.voiceschanged();
    await flush();
    assert.equal(ui.spoken.length, 1);
    assert.equal(ui.spoken[0].lang, 'ko-KR');
});

test('일시정지, 재개, 정지, 속도 저장과 새 생성 시 낭독 취소', async () => {
    const ui = page(async () => ({ ok: true, json: async () => ({ poem }) }), {
        storage: { aiAndPoemTtsSpeed: '0.8' }
    });
    await ui.submit();
    ui.clickPlay();
    await flush();
    assert.equal(ui.spoken[0].rate, 0.8);
    ui.clickPlay();
    assert.equal(ui.speech.pauseCount, 1);
    assert.match(ui.elements.get('tts-status').textContent, /일시 정지/);
    ui.clickPlay();
    assert.equal(ui.speech.resumeCount, 1);
    ui.changeSpeed('1.2');
    assert.equal(ui.storage.aiAndPoemTtsSpeed, '1.2');
    ui.clickStop();
    assert.equal(ui.elements.get('tts-stop-button').disabled, true);
    const cancelledBefore = ui.speech.cancelCount;
    await ui.submit();
    assert.ok(ui.speech.cancelCount > cancelledBefore);
    assert.equal(ui.elements.get('tts-button').disabled, false);
});

test('선택 언어 음성이 없으면 상태를 알리고 재생을 막음', async () => {
    const ui = page(async () => ({ ok: true, json: async () => ({ poem }) }), {
        voices: [{ lang: 'en-US', name: 'English test voice' }]
    });
    await ui.submit();
    ui.clickPlay();
    await flush();
    ui.fireTimer(1200);
    await flush();
    assert.equal(ui.spoken.length, 0);
    assert.equal(ui.elements.get('tts-button').disabled, true);
    assert.match(ui.elements.get('tts-status').textContent, /없습니다/);
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

function mp3Response() {
    return { ok: true, blob: async () => new Blob([new Uint8Array([0x49, 0x44, 0x33, 0xff])],
        { type: 'audio/mpeg' }) };
}

function serverPage({ synthesize = async () => mp3Response(), ...options } = {}) {
    const requests = [];
    const ui = page(async (url, request) => {
        if (url.endsWith('/generate-poem')) {
            return { ok: true, json: async () => ({ poem, ttsToken: 'one-time-token' }) };
        }
        requests.push(request);
        return synthesize(request);
    }, options);
    return { ...ui, requests };
}

test('서버 음성은 완료·정지 후 MP3를 재사용하고 일시정지·속도·AI 고지를 유지', async () => {
    const ui = serverPage({ storage: { aiAndPoemTtsSpeed: '0.8' } });
    await ui.submit();
    ui.clickPlay(); ui.clickPlay();
    await flush();
    assert.equal(ui.requests.length, 1);
    assert.equal(JSON.parse(ui.requests[0].body).ttsToken, 'one-time-token');
    assert.equal(ui.audios.length, 1);
    assert.equal(ui.audios[0].playbackRate, 0.8);
    assert.equal(ui.audios[0].preservesPitch, true);
    const url = ui.audios[0].src;
    ui.clickPlay();
    assert.equal(ui.audios[0].paused, true);
    ui.clickPlay();
    await flush();
    assert.equal(ui.audios[0].playCount, 2);
    ui.changeSpeed('1.2');
    assert.equal(ui.audios[0].playbackRate, 1.2);
    ui.audios[0].onended();
    ui.clickPlay();
    await flush();
    assert.equal(ui.audios[1].src, url);
    assert.equal(ui.audios[1].playbackRate, 1.2);
    ui.clickStop();
    ui.clickPlay();
    await flush();
    assert.equal(ui.audios[2].src, url);
    assert.equal(ui.requests.length, 1);
    assert.equal(ui.spoken.length, 0);
    assert.equal(ui.createdUrls.length, 1);
    assert.equal(ui.revokedUrls.length, 0);
    assert.equal(ui.elements.get('tts-ai-notice').hidden, false);
    assert.equal(ui.timers.size, 0);

    await ui.submit();
    assert.deepEqual(ui.revokedUrls, [url]);
    ui.clickPlay();
    await flush();
    assert.equal(ui.requests.length, 2);
    ui.windowListeners.pagehide();
    assert.equal(ui.revokedUrls.length, 2);
});

for (const restartEarly of [false, true]) {
    test(`합성 중 정지 후 ${restartEarly ? '응답 전' : '응답 후'} 재생은 진행 중 요청 재사용`, async () => {
        let resolveSynthesis;
        const ui = serverPage({ synthesize: () => new Promise(resolve => { resolveSynthesis = resolve; }) });
        await ui.submit();
        ui.clickPlay();
        await flush();
        ui.clickStop();
        assert.equal(ui.elements.get('tts-stop-button').disabled, true);
        if (restartEarly) ui.clickPlay();
        resolveSynthesis(mp3Response());
        await flush();
        if (!restartEarly) {
            assert.equal(ui.audios.length, 0);
            assert.equal(ui.createdUrls.length, 1);
            ui.clickPlay();
            await flush();
        }
        assert.equal(ui.requests.length, 1);
        assert.equal(ui.audios.length, 1);
        assert.equal(ui.spoken.length, 0);
        assert.equal(ui.timers.size, 0);
    });
}

for (const cancelBy of ['new-poem', 'pagehide']) {
    test(`${cancelBy}: 이전 합성을 취소하고 늦은 응답은 새 음성을 덮어쓰지 않음`, async () => {
        let resolveOld;
        let count = 0;
        const ui = serverPage({ synthesize: () => ++count === 1
            ? new Promise(resolve => { resolveOld = resolve; }) : Promise.resolve(mp3Response()) });
        await ui.submit();
        ui.clickPlay();
        await flush();
        const oldSignal = ui.requests[0].signal;
        if (cancelBy === 'new-poem') await ui.submit();
        else ui.windowListeners.pagehide();
        assert.equal(oldSignal.aborted, true);
        assert.equal(ui.timers.size, 0);
        if (cancelBy === 'new-poem') {
            ui.clickPlay();
            await flush();
        }
        resolveOld(mp3Response());
        await flush();
        const expected = cancelBy === 'new-poem' ? 1 : 0;
        assert.equal(ui.createdUrls.length, expected);
        assert.equal(ui.audios.length, expected);
        assert.equal(ui.spoken.length, 0);
    });
}

for (const phase of ['headers', 'body']) {
    test(`서버 ${phase} 대기 35초 초과 시 취소·기기 전환, 소비한 토큰 재요청 없음`, async () => {
        const ui = serverPage({ synthesize: request => {
            const pending = () => new Promise((_, reject) => {
                request.signal.addEventListener('abort', () => reject(new Error('aborted')));
            });
            return phase === 'headers' ? pending() : Promise.resolve({ ok: true, blob: pending });
        } });
        await ui.submit();
        ui.clickPlay();
        await flush();
        ui.fireTimer(35000);
        await flush();
        assert.equal(ui.requests[0].signal.aborted, true);
        assert.equal(ui.spoken.length, 1);
        assert.equal(ui.elements.get('tts-button').disabled, false);
        assert.match(ui.elements.get('tts-status').textContent, /기기 음성/);
        ui.clickStop(); ui.clickPlay();
        await flush();
        assert.equal(ui.requests.length, 1);
        assert.equal(ui.spoken.length, 2);
        assert.equal(ui.timers.size, 0);
    });
}

test('정지 중 합성 실패는 자동 낭독하지 않고 다음 클릭에서 기기 음성 사용', async () => {
    let rejectSynthesis;
    const ui = serverPage({ synthesize: () => new Promise((_, reject) => { rejectSynthesis = reject; }) });
    await ui.submit();
    ui.clickPlay();
    await flush();
    ui.clickStop();
    rejectSynthesis(new Error('offline'));
    await flush();
    assert.equal(ui.spoken.length, 0);
    ui.clickPlay();
    await flush();
    assert.equal(ui.requests.length, 1);
    assert.equal(ui.spoken.length, 1);
});

test('Audio error와 play 거부가 함께 발생해도 기기 낭독은 한 번만 시작', async () => {
    const ui = serverPage({ playAudio: audio => new Promise((_, reject) => {
        queueMicrotask(() => {
            audio.onerror();
            reject(new Error('decode failed'));
        });
    }) });
    await ui.submit();
    ui.clickPlay();
    await flush();
    assert.equal(ui.spoken.length, 1);
    assert.equal(ui.spoken[0].text, poem.split('\n')[0]);
    ui.spoken[0].onend();
    assert.equal(ui.spoken[1].text, poem.split('\n')[1]);
    assert.equal(ui.revokedUrls.length, 1);
    assert.equal(ui.elements.get('tts-ai-notice').hidden, true);
    assert.match(ui.elements.get('tts-status').textContent, /기기 음성/);
});

test('재생 중 서버 오류 뒤 음성 대기에서도 정지 가능, 늦은 음성 추가는 자동 재생하지 않음', async () => {
    const voices = [];
    const ui = serverPage({ voices });
    await ui.submit();
    ui.clickPlay();
    await flush();
    ui.audios[0].onerror();
    assert.equal(ui.elements.get('tts-button').disabled, true);
    assert.equal(ui.elements.get('tts-stop-button').disabled, false);
    ui.clickStop();
    voices.push({ lang: 'ko-KR' });
    ui.speechListeners.voiceschanged();
    await flush();
    assert.equal(ui.spoken.length, 0);
    assert.equal(ui.timers.size, 0);
    ui.clickPlay();
    await flush();
    assert.equal(ui.spoken.length, 1);
    assert.equal(ui.requests.length, 1);
});

for (const [name, response] of [
    ['HTTP 503', { ok: false }],
    ['빈 MP3', { ok: true, blob: async () => new Blob([], { type: 'audio/mpeg' }) }],
    ['오디오 아닌 응답', { ok: true, blob: async () => new Blob(['error'], { type: 'text/html' }) }]
]) {
    test(`${name}: 기기 음성으로 전환하고 잘못된 응답은 캐시하지 않음`, async () => {
        const ui = serverPage({ synthesize: async () => response });
        await ui.submit();
        ui.clickPlay();
        await flush();
        assert.equal(ui.spoken.length, 1);
        assert.equal(ui.audios.length, 0);
        assert.equal(ui.createdUrls.length, 0);
        assert.equal(ui.timers.size, 0);
        ui.clickStop(); ui.clickPlay();
        await flush();
        assert.equal(ui.requests.length, 1);
    });
}

test('서버 재개 실패의 늦은 콜백은 새 시 상태를 변경하지 않음', async () => {
    let rejectResume;
    const ui = serverPage({ playAudio: audio => audio.playCount === 1 ? Promise.resolve()
        : new Promise((_, reject) => { rejectResume = reject; }) });
    await ui.submit();
    ui.clickPlay();
    await flush();
    ui.clickPlay(); ui.clickPlay();
    await ui.submit();
    rejectResume(new Error('play failed'));
    await flush();
    assert.equal(ui.spoken.length, 0);
    assert.equal(ui.elements.get('tts-status').textContent, '낭독을 준비했습니다.');
    assert.equal(ui.elements.get('tts-button').disabled, false);
});

test('브라우저 합성 미지원이어도 서버 음성 재생 가능', async () => {
    const ui = serverPage({ browserSupported: false });
    await ui.submit();
    ui.clickPlay();
    await flush();
    assert.equal(ui.audios.length, 1);
    assert.equal(ui.audios[0].playCount, 1);
    assert.equal(ui.elements.get('tts-button').disabled, false);
});

test('일시정지 후 정지·새 시 생성 시 합성 엔진을 재개해 실제 낭독 시작', async () => {
    const ui = page(async () => ({ ok: true, json: async () => ({ poem }) }));
    await ui.submit();
    ui.clickPlay();
    await flush();
    ui.clickPlay(); ui.clickStop(); ui.clickPlay();
    await flush();
    assert.equal(ui.speech.paused, false);
    assert.equal(ui.spoken.length, 2);
    assert.equal(ui.speech.queue.length, 0);
    ui.clickPlay();
    await ui.submit();
    ui.clickPlay();
    await flush();
    assert.equal(ui.speech.paused, false);
    assert.equal(ui.spoken.length, 3);
});

test('다른 언어 음성만 있어도 요청 언어를 기다리고 늦은 추가 후 버튼 복구', async () => {
    const voices = [{ lang: 'en-US' }];
    const ui = page(async () => ({ ok: true, json: async () => ({ poem }) }), { voices });
    await ui.submit();
    ui.clickPlay();
    await flush();
    ui.speechListeners.voiceschanged();
    await flush();
    assert.equal(ui.spoken.length, 0);
    assert.equal(ui.timers.size, 1);
    ui.fireTimer(1200);
    await flush();
    assert.equal(ui.elements.get('tts-button').disabled, true);
    voices.push({ lang: 'ko-KR' });
    ui.speechListeners.voiceschanged();
    assert.equal(ui.elements.get('tts-button').disabled, false);
    assert.equal(ui.spoken.length, 0);
    ui.clickPlay();
    await flush();
    assert.equal(ui.spoken.length, 1);
    assert.equal(ui.spoken[0].voice.lang, 'ko-KR');
    assert.equal(ui.timers.size, 0);
});

test('음성 목록 대기 중 정지는 타이머 해제, 늦은 음성 추가는 자동 재생하지 않음', async () => {
    const voices = [];
    const ui = page(async () => ({ ok: true, json: async () => ({ poem }) }), { voices });
    await ui.submit();
    ui.clickPlay();
    await flush();
    ui.clickStop();
    assert.equal(ui.timers.size, 0);
    voices.push({ lang: 'ko-KR' });
    ui.speechListeners.voiceschanged();
    await flush();
    assert.equal(ui.spoken.length, 0);
});

test('스위스 독일어 페이지(html lang="de-CH")는 ch 시 형식 옵션 사용', () => {
    const ui = page(async () => ({ ok: true, json: async () => ({ poem }) }), { htmlLang: 'de-CH' });
    const options = ui.elements.get('poem-form-select').innerHTML;
    assert.match(options, /Freii Värs/);
    assert.doesNotMatch(options, /Sonnet/);
});

test('시 생성 전에도 낭독 버튼·정지·속도 문구는 페이지 언어로 표시', () => {
    const ui = page(async () => ({ ok: true, json: async () => ({ poem }) }), { language: 'en', htmlLang: 'en' });
    assert.equal(ui.elements.get('tts-button').textContent, '🔊 Recite poem');
    assert.equal(ui.elements.get('tts-stop-button').textContent, '■ Stop');
    assert.equal(ui.elements.get('tts-speed-label').textContent, 'Speed');
});
