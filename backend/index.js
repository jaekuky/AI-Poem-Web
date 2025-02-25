const serverless =require('serverless-http'); // serverless-http 설정
const express = require('express');
const cors = require('cors'); // CORS 허용을 위해 필요
const bodyParser = require('body-parser');
const axios = require('axios'); // HTTP 요청을 위해 axios 사용
require('dotenv').config(); // 환경 변수 사용을 위해 dotenv 사용

const app = express();

// CORS 설정
let corsOptions = {
    origin: ['https://ai-and-poem-jaekuky.pages.dev',
             'https://www.ai-and-poem.art'],
    credentials: true 
};
// 미들웨어 설정
app.use(cors(corsOptions));
app.use(bodyParser.json());

// OpenAI API 키 설정 (환경 변수에서 가져옴)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/generate-poem', async (req, res) => {
    const { topic, language } = req.body;

    // 언어 매핑
    const languageMap = {
        'ko': { prompt: '한국어로', ttsLang: 'ko-KR' },
        'en': { prompt: 'in English', ttsLang: 'en-US' },
        'ja': { prompt: '日本語で', ttsLang: 'ja-JP' },
        'zh': { prompt: '用中文', ttsLang: 'zh-CN' },
        'es': { prompt: 'en Español', ttsLang: 'es-ES' },
        'fr': { prompt: 'en français', ttsLang: 'fr-FR' },
        'ru': { prompt: 'на русском языке', ttsLang: 'ru-RU' },
        'it': { prompt: 'in italiano', ttsLang: 'it-IT' },
        'de': { prompt: 'auf Deutsch', ttsLang: 'de-DE' },
    };

    const langPrompt = languageMap[language]?.prompt || '한국어로';

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: `Please write a poem about ${topic} ${langPrompt}.` }],
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
        console.error(error.response ? error.response.data : error.message);
        res.status(500).json({ error: '시 생성 중 오류가 발생했습니다.' });
    }
});

// app.listen(port, () => {
//     console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
// });
module.exports.handler = serverless(app); // app을 serverless()함수로 감싸서
                                          // AWSLambda에서 실행할 수 있도록 만듦