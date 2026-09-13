const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createRequire } = require('node:module');

const filename = path.resolve(__dirname, '../../index.js');
const source = fs.readFileSync(filename, 'utf8');
const backendRequire = createRequire(filename);

// 테스트에서 실제 API 키를 읽거나 외부 요청을 보내지 않는다.
function loadBackend({ post = async () => { throw new Error('Unexpected API request'); },
    now, apiKey = 'mock-key' } = {}) {
    const context = {
        module: { exports: {} },
        process: { env: { OPENAI_API_KEY: apiKey } },
        console: { info() {}, warn() {}, error() {} },
        AbortController, setTimeout, clearTimeout,
        require(name) {
            if (name === 'axios') return { post };
            if (name === 'dotenv') return { config() {} };
            if (name === 'node:perf_hooks' && now) return { performance: { now } };
            return backendRequire(name);
        }
    };
    vm.runInNewContext(source, context, { filename });
    return context.module.exports;
}

function validSijo() {
    return {
        chojang: { first: '찬바람', second: '문풍지를', third: '흔들어', fourth: '잠을 깨네' },
        jungjang: { first: '흰 눈은', second: '골목마다', third: '소리 없이', fourth: '내려앉네' },
        jongjang: { first: '이 밤도', second: '지나고 나면', third: '새벽빛이', fourth: '오리라' }
    };
}

function completion(value = validSijo(), finishReason = 'stop') {
    return { data: { choices: [{ finish_reason: finishReason,
        message: { content: typeof value === 'string' ? value : JSON.stringify(value) } }] } };
}

async function endpoint(t, options) {
    const { app } = loadBackend(options);
    const server = app.listen(0, '127.0.0.1');
    await new Promise(resolve => server.once('listening', resolve));
    t.after(() => new Promise(resolve => {
        server.close(resolve);
        server.closeAllConnections();
    }));
    return async body => {
        const response = await fetch(`http://127.0.0.1:${server.address().port}/generate-poem`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        return { status: response.status, body: await response.json() };
    };
}

module.exports = { loadBackend, validSijo, completion, endpoint };
