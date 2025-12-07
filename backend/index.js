const serverless =require('serverless-http'); // serverless-http 설정
const express = require('express');
const cors = require('cors'); // CORS 허용을 위해 필요
const bodyParser = require('body-parser');
const axios = require('axios'); // HTTP 요청을 위해 axios 사용
require('dotenv').config(); // 환경 변수 사용을 위해 dotenv 사용

const app = express();

// CORS 설정
let corsOptions = {
    origin: [
             'https://ai-and-poem-jaekuky.pages.dev',
             'https://www.ai-and-poem.art',
             'https://ai-and-poem.art',
            ],
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
    'ms': 'dalam Bahasa Melayu', // 수정: 말레이어 프롬프트 추가
    'bn': 'বাংলায়', // 수정: 벵골어 프롬프트 추가
    'vi': 'bằng tiếng Việt', // 수정: 베트남어 프롬프트 추가
    'el': 'στα ελληνικά', // 수정: 그리스어 프롬프트 추가
    'pt': 'em português', // 수정: 포르투갈어 프롬프트 추가
    'pl': 'po polsku', // 수정: 폴란드어 프롬프트 추가
    'ch': 'auf Schweizerdeutsch', // 수정: 스위스 독일어 프롬프트 추가
    'uk': 'українською мовою', // 수정: 우크라이나어 프롬프트 추가
    'tr': 'Türkçe olarak', // 수정: 튀르키예어(터키어) 프롬프트 추가
    'sv': 'på svenska', // 수정: 스웨덴어 지원 추가
    'hi': 'हिन्दी में', // 수정: 힌디어 지원 추가
    'id': 'dalam Bahasa Indonesia', // 수정: 인도네시아어 지원 추가
    'th': 'เป็นภาษาไทย', // 수정: 태국어 지원 추가
    'fi': 'suomeksi', // 수정: 핀란드어 지원 추가
    'ar': 'بالعربية', // 수정: 아랍어 지원 추가
    'mn': 'Монгол хэлээр', // 수정: 몽골어 지원 추가
    'sw': 'kwa Kiswahili', // 수정: 스와힐리어 지원 추가
};

// 수정: 지원 언어 집합을 미리 생성해 유효성 검증에 재사용
const SUPPORTED_LANGUAGES = new Set(Object.keys(languagePromptMap));

//  필수 환경 변수 검증을 선행하여 배포 오류를 조기에 파악
if (!OPENAI_API_KEY) {
    console.error('환경 변수 OPENAI_API_KEY가 설정되지 않았습니다.'); //  수정: 누락된 키를 명확히 기록
}

const MAX_TOPIC_LENGTH = 200; //  수정: 과도한 프롬프트 길이를 제한하여 OpenAI 에러를 예방
// 수정: 구글 애드센스 정책 준수를 위해 금칙어 목록을 추가
const DISALLOWED_KEYWORDS = [
    // --- English (en) ---
    'porn', 'porno', 'sex', 'sexual', 'nude', 'fetish', 'xxx', 'violence', 'kill', 'murder', 'terror', 'terrorist', 'bomb', 'weapon', 'gun', 'drug', 'marijuana', 'cocaine', 'heroin', 'nazi', 'hitler', 'suicide', 'self-harm', 'gamble', 'casino', 'betting', 'hate', 'racist',
    
    // --- Korean (ko) ---
    '포르노', '성인', '섹스', '성관계', '나체', '야동', '폭력', '살인', '죽이다', '테러', '폭탄', '무기', '총', '마약', '대마초', '필로폰', '헤로인', '나치', '히틀러', '자살', '자해', '도박', '카지노', '토토', '혐오', '인종차별',

    // --- Japanese (ja) ---
    'ポルノ', 'アダルト', 'セックス', '性行為', 'ヌード', '暴力', '殺人', '殺す', 'テロ', '爆弾', '武器', '銃', '麻薬', '覚醒剤', '大麻', 'ナチス', 'ヒトラー', '自殺', '自傷', 'ギャンブル', 'カジノ', '賭博', 'ヘイト', '差別',

    // --- Chinese (zh) ---
    '色情', '成人', '性爱', '裸体', '暴力', '谋杀', '杀人', '恐怖主义', '炸弹', '武器', '枪', '毒品', '大麻', '海洛因', '纳粹', '希特勒', '自杀', '自残', '赌博', '赌场', '仇恨', '种族歧视',

    // --- Spanish (es) ---
    'pornografía', 'porno', 'sexo', 'sexual', 'desnudo', 'violencia', 'matar', 'asesinato', 'terrorismo', 'bomba', 'arma', 'pistola', 'drogas', 'marihuana', 'cocaína', 'nazi', 'suicidio', 'autolesión', 'juego', 'casino', 'apuestas', 'odio', 'racismo',

    // --- French (fr) ---
    'pornographie', 'porno', 'sexe', 'sexuel', 'nu', 'violence', 'tuer', 'meurtre', 'terrorisme', 'bombe', 'arme', 'pistolet', 'drogue', 'cannabis', 'cocaïne', 'nazi', 'suicide', 'automutilation', 'jeu', 'casino', 'pari', 'haine', 'racisme',

    // --- German / Swiss German (de, ch) ---
    'pornografie', 'sex', 'sexuell', 'nackt', 'gewalt', 'töten', 'mord', 'terrorismus', 'bombe', 'waffe', 'pistole', 'drogen', 'cannabis', 'kokain', 'nazi', 'hitler', 'selbstmord', 'selbstverletzung', 'glücksspiel', 'casino', 'wette', 'hass', 'rassismus',

    // --- Arabic (ar) ---
    'إباحي', 'جنس', 'جنسي', 'عاري', 'عنف', 'قتل', 'إرهاب', 'قنبلة', 'سلاح', 'مسدس', 'مخدرات', 'حشيش', 'كوكايين', 'نازي', 'انتحار', 'إيذاء النفس', 'قمار', 'كازينو', 'رهان', 'كراهية', 'عنصرية',

    // --- Bengali (bn) ---
    'পর্ন', 'যৌন', 'সেক্স', 'নগ্ন', 'সহিংসতা', 'হত্যা', 'খুন', 'সন্ত্রাস', 'বোমা', 'অস্ত্র', 'বন্দুক', 'মাদক', 'গাঁজা', 'কোকেন', 'নাৎসি', 'আত্মহত্যা', 'আত্মক্ষতি', 'জুয়া', 'ক্যাসিনো', 'বাজি', 'ঘৃণা', 'বর্ণবাদ',

    // --- Vietnamese (vi) ---
    'khiêu dâm', 'tình dục', 'quan hệ tình dục', 'khỏa thân', 'bạo lực', 'giết', 'giết người', 'khủng bố', 'bom', 'vũ khí', 'súng', 'ma túy', 'cần sa', 'cocain', 'phát xít', 'tự tử', 'tự hại', 'cờ bạc', 'sòng bạc', 'cá cược', 'thù hận', 'phân biệt chủng tộc',

    // --- Thai (th) ---
    'โป๊', 'เซ็กซ์', 'เพศ', 'เปลือย', 'ความรุนแรง', 'ฆ่า', 'ฆาตกรรม', 'การก่อการร้าย', 'ระเบิด', 'อาวุธ', 'ปืน', 'ยาเสพติด', 'กัญชา', 'โคเคน', 'นาซี', 'ฆ่าตัวตาย', 'ทำร้ายตัวเอง', 'การพนัน', 'คาสิโน', 'เดิมพัน', 'เกลียดชัง', 'เหยียดเชื้อชาติ',

    // --- Hindi (hi) ---
    'पॉर्न', 'सेक्स', 'यौन', 'नग्न', 'हिंसा', 'मारना', 'हत्या', 'आतंक', 'बम', 'हथियार', 'बंदूक', 'ड्रग्स', 'गांजा', 'कोकीन', 'नाजी', 'आत्महत्या', 'आत्म-हानि', 'जुआ', 'कैसीनो', 'सट्टेबाजी', 'नफरत', 'जातिवाद',

    // --- Indonesian (id) ---
    'pornografi', 'seks', 'seksual', 'telanjang', 'kekerasan', 'membunuh', 'pembunuhan', 'terorisme', 'bom', 'senjata', 'pistol', 'narkoba', 'ganja', 'kokain', 'nazi', 'bunuh diri', 'melukai diri', 'judi', 'kasino', 'taruhan', 'kebencian', 'rasisme',

    // --- Malay (ms) ---
    'pornografi', 'seks', 'seksual', 'keganasan', 'bunuh', 'pembunuhan', 'keganasan', 'bom', 'senjata', 'pistol', 'dadah', 'ganja', 'kokain', 'nazi', 'bunuh diri', 'cederakan diri', 'judi', 'kasino', 'pertaruhan', 'kebencian', 'perkauman',

    // --- Turkish (tr) ---
    'pornografi', 'seks', 'cinsel', 'çıplak', 'şiddet', 'öldürmek', 'cinayet', 'terör', 'bomba', 'silah', 'tabanca', 'uyuşturucu', 'esrar', 'kokain', 'nazi', 'intihar', 'kendine zarar', 'kumar', 'kumarhane', 'bahis', 'nefret', 'ırkçılık',

    // --- Russian (ru) ---
    'порно', 'секс', 'сексуальный', 'голый', 'насилие', 'убить', 'убийство', 'террор', 'бомба', 'оружие', 'пистолет', 'наркотики', 'марихуана', 'кокаин', 'нацист', 'самоубийство', 'членовредительство', 'азартные игры', 'казино', 'ставки', 'ненависть', 'расизм',

    // --- Ukrainian (uk) ---
    'порно', 'секс', 'сексуальний', 'голий', 'насильство', 'вбити', 'вбивство', 'террор', 'бомба', 'зброя', 'пістолет', 'наркотики', 'марихуана', 'кокаїн', 'нацист', 'самогубство', 'самоушкодження', 'азартні ігри', 'казино', 'ставки', 'ненависть', 'расизм',

    // --- Polish (pl) ---
    'pornografia', 'seks', 'seksualny', 'nagi', 'przemoc', 'zabić', 'morderstwo', 'terroryzm', 'bomba', 'broń', 'pistolet', 'narkotyki', 'marihuana', 'kokaina', 'nazista', 'samobójstwo', 'samookaleczenie', 'hazard', 'kasyno', 'zakłady', 'nienawiść', 'rasizm',

    // --- Italian (it) ---
    'pornografia', 'sesso', 'sessuale', 'nudo', 'violenza', 'uccidere', 'omicidio', 'terrorismo', 'bomba', 'arma', 'pistola', 'droga', 'marijuana', 'cocaina', 'nazista', 'suicidio', 'autolesionismo', 'gioco d\'azzardo', 'casinò', 'scommesse', 'odio', 'razzismo',

    // --- Portuguese (pt) ---
    'pornografia', 'sexo', 'sexual', 'nu', 'violência', 'olência', 'matar', 'assassinato', 'terrorismo', 'bomba', 'arma', 'pistola', 'drogas', 'maconha', 'cocaína', 'nazista', 'suicídio', 'automutilação', 'jogo', 'cassino', 'apostas', 'ódio', 'racismo',

    // --- Greek (el) ---
    'πορνό', 'σεξ', 'σεξουαλικός', 'γυμνός', 'βία', 'σκοτώνω', 'φόνος', 'τρομοκρατία', 'βόμβα', 'όπλο', 'πιστόλι', 'ναρκωτικά', 'μαριχουάνα', 'κοκαΐνη', 'ναζί', 'αυτοκτονία', 'αυτοτραυματισμός', 'τζόγος', 'καζίνο', 'στοίχημα', 'μίσος', 'ρατσισμός',

    // --- Swedish (sv) ---
    'porr', 'sex', 'sexuell', 'naken', 'våld', 'döda', 'mord', 'terrorism', 'bomb', 'vapen', 'pistol', 'droger', 'marijuana', 'kokain', 'nazist', 'självmord', 'självskadebeteende', 'spel', 'kasino', 'vadslagning', 'hat', 'rasism',

    // --- Finnish (fi) ---
    'porno', 'seksi', 'seksuaalinen', 'alaston', 'väkivalta', 'tappaa', 'murha', 'terrorismi', 'pommi', 'ase', 'pistooli', 'huumeet', 'marihuana', 'kokaiini', 'natsi', 'itsemurha', 'itseään vahingoittava', 'uhkapeli', 'kasino', 'vedonlyönti', 'viha', 'rasismi',

    // --- Mongolian (mn) ---
    'порно', 'секс', 'бэлгийн', 'нүцгэн', 'хүчирхийлэл', 'алах', 'аллага', 'терроризм', 'бөмбөг', 'зэвсэг', 'буу', 'мансууруулах', 'хар тамхи', 'кокаин', 'нацист', 'амиа', 'өөрийгөө', 'мөрийтэй', 'казино', 'бооцоо', 'үзэн', 'арьс',

    // --- Swahili (sw) ---
    'picha', 'ngono', 'kujamiiana', 'uchi', 'vurugu', 'ua', 'mauaji', 'ugaidi', 'bomu', 'silaha', 'bunduki', 'dawa', 'bangi', 'kokeini', 'nazi', 'kujiua', 'kujidhuru', 'kamari', 'kasino', 'kuweka', 'chuki', 'ubaguzi'
];

app.post('/generate-poem', async (req, res) => {
    const rawTopic = typeof req.body.topic === 'string' ? req.body.topic.trim() : '';
    const language = typeof req.body.language === 'string' ? req.body.language : 'ko';

    //  수정: 필수 입력값이 없으면 OpenAI 호출 전에 400을 반환
    if (!rawTopic) {
        return res.status(400).json({ error: '시의 주제를 입력해 주세요.' });
    }

    if (rawTopic.length > MAX_TOPIC_LENGTH) {
        return res.status(400).json({ error: `시의 주제는 ${MAX_TOPIC_LENGTH}자 이내로 입력해 주세요.` });
    }

    // 수정: 애드센스 정책과 사용자 안전을 위해 금칙어 검사 추가
    const loweredTopic = rawTopic.toLowerCase();
    const matchedKeyword = DISALLOWED_KEYWORDS.find((keyword) => loweredTopic.includes(keyword));
    if (matchedKeyword) {
        return res.status(400).json({ error: '해당 주제로는 시를 생성할 수 없습니다.' });
    }

    if (!SUPPORTED_LANGUAGES.has(language)) {
        return res.status(400).json({ error: '지원하지 않는 언어입니다.' }); //  수정: 미지원 언어 요청 차단
    }

    const langPrompt = languagePromptMap[language];

    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: '서버 설정 오류가 발생했습니다.' }); //  수정: 키 누락 시 호출 중단
    }

    const prompt = `Please write a poem about ${rawTopic} ${langPrompt}.`; //  수정: 입력을 정제한 뒤 프롬프트 구성

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

        //  수정: 외부 응답을 그대로 노출하지 않고 서버 로그에만 상세 기록
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
