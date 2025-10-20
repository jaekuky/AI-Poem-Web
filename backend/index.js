const serverless =require('serverless-http'); // serverless-http 설정
const express = require('express');
const cors = require('cors'); // CORS 허용을 위해 필요
const bodyParser = require('body-parser');
const axios = require('axios'); // HTTP 요청을 위해 axios 사용
require('dotenv').config(); // 환경 변수 사용을 위해 dotenv 사용

const app = express();

// CORS 설정
let corsOptions = {
    // Modified: allowed origins, without trailing slashes
    origin: ['https://ai-and-poem-jaekuky.pages.dev',
             'https://www.ai-and-poem.art'],
    // Modified: 허용 메서드와 헤더를 명시적으로 선언
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true 
};
// 미들웨어 설정
app.use(cors(corsOptions));
// Modified: 모든 경로에 대해 preflight(OPTIONS) 요청도 처리
app.options('*', cors(corsOptions));

app.use(bodyParser.json());

// OpenAI API 키 설정 (환경 변수에서 가져옴)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

//  언어별 프롬프트 매핑을 라우트 밖으로 이동해 반복 생성을 방지
const languagePromptMap = {
    'ko': '한국어로',
    'en': 'in English',
    'ja': '日本語で',
    'zh': '用中文',
    'es': 'en Español',
    'fr': 'en français',
    'ru': 'на русском языке',
    'it': 'in italiano',
    'de': 'auf Deutsch',
    'ms': 'dalam Bahasa Melayu', // 한글 주석: 말레이어 프롬프트 추가
    'bn': 'বাংলায়', // 한글 주석: 벵골어 프롬프트 추가
    'vi': 'bằng tiếng Việt', // 한글 주석: 베트남어 프롬프트 추가
    'el': 'στα ελληνικά', // 한글 주석: 그리스어 프롬프트 추가
    'pt': 'em português', // 한글 주석: 포르투갈어 프롬프트 추가
    'pl': 'po polsku', // 한글 주석: 폴란드어 프롬프트 추가
    'ch': 'auf Schweizerdeutsch', // 한글 주석: 스위스 독일어 프롬프트 추가
    'uk': 'українською мовою', // 한글 주석: 우크라이나어 프롬프트 추가
    'tr': 'Türkçe olarak', // 한글 주석: 튀르키예어(터키어) 프롬프트 추가
    'sv': 'på svenska', // 수정: 스웨덴어 지원 추가
    'hi': 'हिन्दी में', // 수정: 힌디어 지원 추가
    'id': 'dalam Bahasa Indonesia', // 수정: 인도네시아어 지원 추가
    'th': 'เป็นภาษาไทย', // 수정: 태국어 지원 추가
    'fi': 'suomeksi', // 수정: 핀란드어 지원 추가
};

// 수정: 지원 언어 집합을 미리 생성해 유효성 검증에 재사용
const SUPPORTED_LANGUAGES = new Set(Object.keys(languagePromptMap));

//  필수 환경 변수 검증을 선행하여 배포 오류를 조기에 파악
if (!OPENAI_API_KEY) {
    console.error('환경 변수 OPENAI_API_KEY가 설정되지 않았습니다.'); //  한글 주석: 누락된 키를 명확히 기록
}

const MAX_TOPIC_LENGTH = 200; //  한글 주석: 과도한 프롬프트 길이를 제한하여 OpenAI 에러를 예방

app.post('/generate-poem', async (req, res) => {
    const rawTopic = typeof req.body.topic === 'string' ? req.body.topic.trim() : '';
    const language = typeof req.body.language === 'string' ? req.body.language : 'ko';

    //  한글 주석: 필수 입력값이 없으면 OpenAI 호출 전에 400을 반환
    if (!rawTopic) {
        return res.status(400).json({ error: '시의 주제를 입력해 주세요.' });
    }

    if (rawTopic.length > MAX_TOPIC_LENGTH) {
        return res.status(400).json({ error: `시의 주제는 ${MAX_TOPIC_LENGTH}자 이내로 입력해 주세요.` });
    }

    if (!SUPPORTED_LANGUAGES.has(language)) {
        return res.status(400).json({ error: '지원하지 않는 언어입니다.' }); //  한글 주석: 미지원 언어 요청 차단
    }

    const langPrompt = languagePromptMap[language];

    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: '서버 설정 오류가 발생했습니다.' }); //  한글 주석: 키 누락 시 호출 중단
    }

    const prompt = `Please write a poem about ${rawTopic} ${langPrompt}.`; //  한글 주석: 입력을 정제한 뒤 프롬프트 구성

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
            n: 1
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        });

        const data = response.data;
        const poem = data.choices[0].message.content.trim();

        res.json({ poem });
    } catch (error) {
        const statusCode = error.response?.status || 500;
        const errorPayload = error.response?.data;

        //  한글 주석: 외부 응답을 그대로 노출하지 않고 서버 로그에만 상세 기록
        console.error('OpenAI 호출 실패', {
            statusCode,
            message: error.message,
            errorPayload
        });

        const clientStatus = statusCode >= 400 && statusCode < 500 ? statusCode : 500;
        res.status(clientStatus).json({ error: '시 생성 중 오류가 발생했습니다.' });
    }
});

// app.listen(port, () => {
//     console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
// });
module.exports.handler = serverless(app); // app을 serverless()함수로 감싸서
                                          // AWSLambda에서 실행할 수 있도록 만듦
