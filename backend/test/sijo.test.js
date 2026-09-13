const assert = require('node:assert/strict');
const { test } = require('node:test');
const { loadBackend, validSijo, completion, endpoint } = require('./support/backend.cjs');

const { validateSijo, generateSijo } = loadBackend();
const screenshot = '차가운 바람 불어오는 겨울밤,\n별빛 아래 조용히 흐르는 눈,\n어둠 속에 숨어, 새로운 꿈이,\n다시 태어날 희망을 안고 있다.';
const input = { topic: '겨울밤', language: 'ko', form: 'sijo' };

for (const choThird of ['흔들어', '흔들어서']) {
    for (const jungThird of ['고요히', '소리 없이']) {
        test(`기본형 통과: 초장 ${choThird}, 중장 ${jungThird}`, () => {
            const poem = validSijo();
            poem.chojang.third = choThird;
            poem.jungjang.third = jungThird;
            const result = validateSijo(poem);
            assert.equal(result.valid, true);
            assert.equal(result.poem.split('\n').length, 3);
            assert.deepEqual(JSON.parse(JSON.stringify(result.syllables)),
                [[3, 4, choThird.length, 4], [3, 4, jungThird.replaceAll(' ', '').length, 4], [3, 5, 4, 3]]);
        });
    }
}

test('NFD 한글을 NFC로 합치고 공백·문장부호를 제외해 계산', () => {
    const poem = validSijo();
    poem.chojang.first = `  ${'찬바람'.normalize('NFD')},\t`;
    poem.jongjang.second = '지나고\t  나면';
    const result = validateSijo(poem);
    assert.equal(result.valid, true);
    assert.ok(result.poem.startsWith('찬바람, 문풍지를'));
    assert.ok(result.poem.endsWith('이 밤도 지나고 나면 새벽빛이 오리라'));
});

for (const [label, candidate] of [
    ['4행 원문', screenshot], ['null', null], ['배열', []], ['빈 객체', {}],
    ['추가 필드', { ...validSijo(), title: '겨울밤' }],
    ['종장 누락', { chojang: validSijo().chojang, jungjang: validSijo().jungjang }]
]) {
    test(`잘못된 구조 차단: ${label}`, () => assert.equal(validateSijo(candidate).valid, false));
}

for (const key of ['chojang', 'jungjang', 'jongjang']) {
    for (const size of [3, 5]) {
        test(`${key}의 음보 ${size}개 차단`, () => {
            const poem = validSijo();
            poem[key] = Object.fromEntries(['first', 'second', 'third', 'fourth', 'fifth'].slice(0, size)
                .map(phraseKey => [phraseKey, '찬바람']));
            assert.equal(validateSijo(poem).valid, false);
        });
    }
}

for (const [label, phrase] of [
    ['빈 문자열', ''], ['공백', '   '], ['문장부호만', '...'], ['문자열 아님', 123],
    ['영문', '찬바람A'], ['숫자', '찬바람1'], ['한자', '찬바람雪'],
    ['독립 자모', '찬바람ㄱ'], ['미완성 조합 자모', '찬바람ᄀ'],
    ['이모지', '찬바람❄️'], ['개행', '찬\n바람'], ['CRLF', '찬\r\n바람'],
    ['끝의 개행', '찬바람\n'], ['끝의 CRLF', '찬바람\r\n'],
    ['유니코드 개행', '찬\u2028바람'], ['보이지 않는 문자', '찬\u200b바람']
]) {
    test(`음절 계산을 흐리는 표현 차단: ${label}`, () => {
        const poem = validSijo();
        poem.chojang.first = phrase;
        assert.equal(validateSijo(poem).valid, false);
    });
}

test('총음절 수가 같아도 종장 음보별 기준 위반 차단', () => {
    const poem = validSijo();
    poem.jongjang.first = '밤도';
    poem.jongjang.second = '지나고 또 나면';
    const result = validateSijo(poem);
    assert.equal(result.valid, false);
    assert.ok(result.errors.some(error => error.includes('종장 1번째 음보: 실제 2음절, 요구 3음절')));
});

test('종장 둘째 음보의 위치와 실제 음절 수를 보정 요청에 전달', async () => {
    const bad = validSijo();
    bad.jongjang.second = '지나가면';
    const calls = [];
    const result = await generateSijo('겨울밤', { post: async (_url, body) => {
        calls.push(body);
        return completion(calls.length === 1 ? bad : validSijo());
    } });
    assert.equal(result.attempts, 2);
    assert.equal(calls[0].model, 'gpt-5-mini');
    assert.equal(calls[0].reasoning_effort, 'low');
    assert.equal(calls[0].temperature, undefined);
    assert.equal(calls[0].response_format.type, 'json_schema');
    assert.equal(calls[0].response_format.json_schema.strict, true);
    const schema = calls[0].response_format.json_schema.schema;
    assert.equal(schema.additionalProperties, false);
    assert.equal(schema.properties.jongjang.additionalProperties, false);
    const secondPattern = new RegExp(schema.properties.jongjang.properties.second.pattern, 'u');
    assert.equal(secondPattern.test('지나가면'), false);
    assert.equal(secondPattern.test('지나고 나면'), true);
    const firstPattern = new RegExp(schema.properties.chojang.properties.first.pattern, 'u');
    assert.equal(firstPattern.test('차가운 밤'), false);
    assert.equal(firstPattern.test('찬바람'), true);
    assert.equal(calls[0].messages.length, 2);
    assert.equal(calls[0].messages[0].role, 'system');
    assert.ok(calls[0].messages[0].content.includes('3·5·4·3'));
    assert.match(calls[0].messages[1].content, /겨울밤/);
    assert.match(calls[1].messages.at(-1).content, /종장 2번째 음보: 실제 4음절, 요구 5음절/);
});

test('보정이 다른 장을 깨뜨리면 전체를 다시 검사', async () => {
    const first = validSijo();
    first.jongjang.second = '지나가면';
    const second = validSijo();
    second.chojang.first = '바람';
    let calls = 0;
    const result = await generateSijo('겨울밤', { post: async () =>
        completion([first, second, validSijo()][calls++]) });
    assert.equal(result.attempts, 3);
});

for (const [label, response] of [
    ['스크린샷 자유시', completion(screenshot)], ['JSON 오류', completion('{')],
    ['빈 문자열', completion('')], ['빈 choices', { data: { choices: [] } }],
    ['null 내용', { data: { choices: [{ finish_reason: 'stop', message: { content: null } }] } }],
    ['완성된 JSON이어도 생성 중단', completion(validSijo(), 'length')],
    ['알 수 없는 종료 이유', completion(validSijo(), 'tool_calls')]
]) {
    test(`불완전 응답 보정: ${label}`, async () => {
        let calls = 0;
        const result = await generateSijo('겨울밤', { post: async () => ++calls === 1 ? response : completion() });
        assert.equal(result.attempts, 2);
    });
}

test('세 번 실패하면 HTTP 502, 부적합 시 반환 없음', async t => {
    let calls = 0;
    const request = await endpoint(t, { post: async () => { calls++; return completion(screenshot); } });
    const result = await request(input);
    assert.equal(calls, 3);
    assert.equal(result.status, 502);
    assert.equal(result.body.code, 'SIJO_VALIDATION_FAILED');
    assert.equal(result.body.poem, undefined);
    assert.match(result.body.error, /다시 시도/);
});

for (const reason of ['refusal', 'content_filter']) {
    test(`${reason} 응답은 보정 없이 종료`, async t => {
        let calls = 0;
        const request = await endpoint(t, { post: async () => {
            calls++;
            const response = completion(validSijo(), reason === 'content_filter' ? reason : 'stop');
            if (reason === 'refusal') response.data.choices[0].message.refusal = 'refused';
            return response;
        } });
        const result = await request(input);
        assert.equal(result.status, 502);
        assert.equal(result.body.code, 'SIJO_REFUSED');
        assert.equal(calls, 1);
    });
}

test('모든 호출이 같은 25초 예산을 공유', async () => {
    let time = 0;
    const timeouts = [];
    const signals = [];
    const result = await generateSijo('겨울밤', { now: () => time, post: async (_url, _body, config) => {
        timeouts.push(config.timeout);
        signals.push(config.signal);
        time += 8000;
        return completion(timeouts.length < 3 ? screenshot : validSijo());
    } });
    assert.deepEqual(timeouts, [25000, 17000, 9000]);
    assert.ok(signals.every(signal => signal === signals[0]));
    assert.equal(result.durationMs, 24000);
});

test('늦게 도착한 정상 응답도 HTTP 504', async t => {
    let time = 0;
    const request = await endpoint(t, { now: () => time, post: async () => {
        time = 25000;
        return completion();
    } });
    const result = await request(input);
    assert.equal(result.status, 504);
    assert.equal(result.body.code, 'SIJO_TIMEOUT');
    assert.equal(result.body.poem, undefined);
});

test('연결 대기 중에도 전체 타이머가 요청 취소', async t => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const backend = loadBackend();
    let signal;
    const pending = backend.generateSijo('겨울밤', { post: (_url, _body, config) => new Promise((_resolve, reject) => {
        signal = config.signal;
        signal.addEventListener('abort', () => reject(Object.assign(new Error('aborted'), { code: 'ERR_CANCELED' })));
    }) });
    const rejected = assert.rejects(pending, error => error.statusCode === 504 && error.code === 'SIJO_TIMEOUT');
    t.mock.timers.tick(25000);
    await rejected;
    assert.equal(signal.aborted, true);
});

test('호출 timeout은 HTTP 504, 추가 호출 없음', async t => {
    let calls = 0;
    const request = await endpoint(t, { post: async () => {
        calls++;
        throw Object.assign(new Error('timeout'), { code: 'ECONNABORTED' });
    } });
    const result = await request(input);
    assert.equal(result.status, 504);
    assert.equal(calls, 1);
});

test('성공 응답은 기존 poem 필드와 세 행 유지', async t => {
    const request = await endpoint(t, { post: async () => completion() });
    const result = await request(input);
    assert.equal(result.status, 200);
    assert.deepEqual(Object.keys(result.body), ['poem']);
    assert.equal(result.body.poem, validateSijo(validSijo()).poem);
});

for (const [label, body, promptMatch] of [
    ['한국어 자유시', { ...input, form: 'free-verse' }, /free verse/],
    ['한국어 N행시', { ...input, topic: '사과', form: 'n-haengsi' }, /2행시/],
    ['영어', { ...input, language: 'en', form: 'sonnet' }, /sonnet/],
    ['다른 언어의 시조 요청', { ...input, language: 'en' }, /sijo/],
    ['형식 누락', { topic: '겨울밤', language: 'ko' }, /Please write a poem/],
    ['잘못된 형식', { ...input, form: 'unknown' }, /Please write a poem/]
]) {
    test(`기존 생성 경로 유지: ${label}`, async t => {
        let sent;
        const request = await endpoint(t, { post: async (_url, body) => { sent = body; return completion('기존 시'); } });
        const result = await request(body);
        assert.equal(result.status, 200);
        assert.equal(result.body.poem, '기존 시');
        assert.equal(sent.response_format, undefined);
        assert.equal(sent.model, 'gpt-4o-mini');
        assert.equal(sent.temperature, 0.7);
        assert.match(sent.messages[0].content, promptMatch);
    });
}

for (const [label, body] of [
    ['빈 주제', { ...input, topic: '' }], ['긴 주제', { ...input, topic: '가'.repeat(201) }],
    ['금칙어', { ...input, topic: '폭력' }], ['미지원 언어', { ...input, language: 'unknown' }]
]) {
    test(`${label}는 API 호출 전에 차단`, async t => {
        const request = await endpoint(t, {});
        assert.equal((await request(body)).status, 400);
    });
}

test('API 키 누락은 기존 HTTP 500', async t => {
    const request = await endpoint(t, { apiKey: '' });
    assert.equal((await request(input)).status, 500);
});

test('공급자 HTTP 오류는 형식 보정으로 재시도하지 않음', async t => {
    let calls = 0;
    const request = await endpoint(t, { post: async () => {
        calls++;
        throw Object.assign(new Error('rate limit'), { response: { status: 429 } });
    } });
    assert.equal((await request(input)).status, 429);
    assert.equal(calls, 1);
});
