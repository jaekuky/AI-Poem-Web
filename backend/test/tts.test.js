const assert = require('node:assert/strict');
const { test } = require('node:test');
const { loadBackend, completion, endpoint, ttsEndpoint } = require('./support/backend.cjs');

const config = {
    env: {
        TTS_ENABLED_LANGS: 'ko,en,ja',
        TTS_PROVIDER: 'openai',
        TTS_TOKEN_SECRET: 'tts-test-secret',
        TTS_NONCE_TABLE: 'tts-nonces'
    }
};
const poem = '창문에 비가 남는다\n새벽은 천천히 밝아온다';

function oneTimeRuntime() {
    const consumed = new Set();
    return {
        consumeNonce: async payload => {
            if (consumed.has(payload.jti)) {
                const error = new Error('used');
                error.code = 'TTS_TOKEN_USED';
                error.statusCode = 403;
                throw error;
            }
            consumed.add(payload.jti);
        },
        synthesizeSpeech: async () => Buffer.from([0x49, 0x44, 0x33])
    };
}

test('활성 언어 생성 응답은 기존 poem 필드와 선택적 ttsToken을 함께 반환', async t => {
    const request = await endpoint(t, {
        ...config,
        post: async () => completion('A quiet harbor waits for dawn.')
    });
    const result = await request({ topic: 'harbor', language: 'en', form: 'auto' });
    assert.equal(result.status, 200);
    assert.equal(result.body.poem, 'A quiet harbor waits for dawn.');
    assert.equal(typeof result.body.ttsToken, 'string');
});

test('유효한 토큰은 MP3와 no-store 헤더를 반환', async t => {
    const { backend, request } = await ttsEndpoint(t, config);
    const runtime = oneTimeRuntime();
    backend.setTtsRuntimeForTest(runtime);
    const token = backend.issueTtsToken(poem, 'ko');
    const result = await request({ poem, language: 'ko', ttsToken: token });
    assert.equal(result.status, 200);
    assert.match(result.headers.get('content-type'), /^audio\/mpeg/);
    assert.equal(result.headers.get('cache-control'), 'no-store');
    assert.deepEqual(result.body, Buffer.from([0x49, 0x44, 0x33]));
});

function lambdaEvent(body) {
    return {
        version: '2.0', rawPath: '/synthesize-speech', rawQueryString: '',
        headers: { 'content-type': 'application/json' },
        requestContext: { http: { method: 'POST', sourceIp: '127.0.0.1' } },
        body: JSON.stringify(body), isBase64Encoded: false
    };
}

test('Lambda 응답은 MP3의 비 ASCII 바이트를 보존하고 JSON 오류는 텍스트로 반환', async () => {
    const backend = loadBackend(config);
    const audio = Buffer.from([0x49, 0x44, 0x33, 0xff, 0xfb, 0x90, 0x00, 0x80]);
    backend.setTtsRuntimeForTest({ ...oneTimeRuntime(), synthesizeSpeech: async () => audio });
    const response = await backend.handler(lambdaEvent({
        poem, language: 'ko', ttsToken: backend.issueTtsToken(poem, 'ko')
    }), {});
    assert.equal(response.statusCode, 200);
    assert.equal(response.isBase64Encoded, true);
    assert.equal(response.headers['content-type'], 'audio/mpeg');
    assert.equal(response.headers['cache-control'], 'no-store');
    assert.deepEqual(Buffer.from(response.body, 'base64'), audio);

    const invalid = await backend.handler(lambdaEvent({ poem, language: 'ko', ttsToken: 'invalid' }), {});
    assert.equal(invalid.statusCode, 403);
    assert.equal(invalid.isBase64Encoded, false);
    assert.equal(JSON.parse(invalid.body).error, 'INVALID_TTS_TOKEN');
});

for (const [language, voice, instructions] of [['ko', 'marin', /^시를/], ['en', 'cedar', /^Read/], ['ja', 'marin', /^詩を/]]) {
    test(`OpenAI ${language} 요청은 ${voice}와 MP3를 사용`, async t => {
        const calls = [];
        const audio = Buffer.from([0xff, 0xfb, 0x90, 0x00]);
        const { backend, request } = await ttsEndpoint(t, {
            ...config,
            post: async (url, body, options) => { calls.push({ url, body, options }); return { data: audio }; }
        });
        backend.setTtsRuntimeForTest({ consumeNonce: async () => {} });
        const response = await request({ poem, language, ttsToken: backend.issueTtsToken(poem, language) });
        assert.equal(response.status, 200);
        assert.deepEqual(response.body, audio);
        assert.equal(calls.length, 1);
        assert.equal(calls[0].url, 'https://api.openai.com/v1/audio/speech');
        assert.equal(calls[0].body.model, 'gpt-4o-mini-tts');
        assert.equal(calls[0].body.voice, voice);
        assert.equal(calls[0].body.input, poem);
        assert.equal(calls[0].body.response_format, 'mp3');
        assert.match(calls[0].body.instructions, instructions);
        assert.equal(calls[0].options.responseType, 'arraybuffer');
        assert.equal(calls[0].options.timeout, 30000);
        assert.equal(calls[0].options.headers.Authorization, 'Bearer mock-key');
    });
}

test('기본 공급자는 OpenAI이며 활성화에 키·언어·비밀값·테이블이 모두 필요', () => {
    const { TTS_PROVIDER, ...env } = config.env;
    assert.equal(typeof loadBackend({ env }).issueTtsToken(poem, 'ko'), 'string');
    assert.equal(loadBackend({ env, apiKey: '' }).issueTtsToken(poem, 'ko'), null);
    for (const key of ['TTS_ENABLED_LANGS', 'TTS_TOKEN_SECRET', 'TTS_NONCE_TABLE']) {
        assert.equal(loadBackend({ env: { ...env, [key]: '' } }).issueTtsToken(poem, 'ko'), null);
    }
    assert.equal(loadBackend({ env: { ...env, TTS_ENABLED_LANGS: 'ko,en' } }).issueTtsToken(poem, 'ja'), null);
});

test('위조·만료·재사용 토큰은 공급자 호출 전에 차단', async t => {
    const { backend, request } = await ttsEndpoint(t, config);
    let synthesisCalls = 0;
    backend.setTtsRuntimeForTest({
        ...oneTimeRuntime(),
        synthesizeSpeech: async () => { synthesisCalls += 1; return Buffer.from([1]); }
    });
    const valid = backend.issueTtsToken(poem, 'ko');
    const expired = backend.issueTtsToken(poem, 'ko', Date.now() - 700000);
    for (const token of ['invalid.token', expired]) {
        const result = await request({ poem, language: 'ko', ttsToken: token });
        assert.equal(result.status, 403);
        assert.equal(result.body.error, 'INVALID_TTS_TOKEN');
    }
    assert.equal(synthesisCalls, 0);

    const first = await request({ poem, language: 'ko', ttsToken: valid });
    assert.equal(first.status, 200);
    const replay = await request({ poem, language: 'ko', ttsToken: valid });
    assert.equal(replay.status, 403);
    assert.equal(replay.body.error, 'TTS_TOKEN_USED');
    assert.equal(synthesisCalls, 1);
});

test('활성 언어 밖 요청과 긴 원문은 차단', async t => {
    const { backend, request } = await ttsEndpoint(t, config);
    backend.setTtsRuntimeForTest(oneTimeRuntime());
    const zhToken = backend.issueTtsToken(poem, 'zh');
    const disabled = await request({ poem, language: 'zh', ttsToken: zhToken });
    assert.equal(disabled.status, 404);

    const longPoem = '가'.repeat(3001);
    const token = backend.issueTtsToken(longPoem, 'ko');
    const tooLong = await request({ poem: longPoem, language: 'ko', ttsToken: token });
    assert.equal(tooLong.status, 400);
    assert.equal(tooLong.body.error, 'INVALID_TTS_TEXT');
});

test('공급자 실패는 원문 없이 503으로 응답', async t => {
    const { backend, request } = await ttsEndpoint(t, config);
    backend.setTtsRuntimeForTest({
        ...oneTimeRuntime(),
        synthesizeSpeech: async () => { throw new Error('provider unavailable'); }
    });
    const token = backend.issueTtsToken(poem, 'ko');
    const result = await request({ poem, language: 'ko', ttsToken: token });
    assert.equal(result.status, 503);
    assert.equal(result.body.error, 'TTS_UNAVAILABLE');
    assert.equal(JSON.stringify(result.body).includes(poem), false);
});

test('SSML은 시 행을 문단으로 만들고 특수문자를 이스케이프', async () => {
    const backend = loadBackend(config);
    assert.equal(backend.poemToSsml('첫 줄 & <별>\n둘째 줄'),
        '<speak><p>첫 줄 &amp; &lt;별&gt;</p><p>둘째 줄</p></speak>');
});
