// 생성 시 응답에서 행 앞뒤 공백이 제거되고 연 구분 빈 행은 유지되는지 검사
const assert = require('node:assert/strict');
const { test } = require('node:test');
const { loadBackend, completion, endpoint } = require('./support/backend.cjs');

const config = {
    env: {
        TTS_ENABLED_LANGS: 'ko',
        TTS_PROVIDER: 'openai',
        TTS_TOKEN_SECRET: 'tts-test-secret',
        TTS_NONCE_TABLE: 'tts-nonces'
    }
};

test('생성 시는 행마다 앞뒤 공백을 지우고 연 구분은 남긴다', async t => {
    const request = await endpoint(t, {
        ...config,
        post: async () => completion('봄,  \n 멀리서  \n　새싹\r\n\n끝.')
    });
    const result = await request({ topic: '봄', language: 'ko', form: 'free-verse' });
    assert.equal(result.status, 200);
    assert.equal(result.body.poem, '봄,\n멀리서\n새싹\n\n끝.');
    // TTS 토큰은 정리된 시 기준으로 발급되어야 프런트가 돌려보낸 시와 해시가 맞는다
    const { verifyTtsToken } = loadBackend(config);
    assert.ok(verifyTtsToken(result.body.ttsToken, result.body.poem, 'ko'));
});
