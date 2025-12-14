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
    'porn', 'porno', 'sex', 'sexual', 'nude', 'fetish', 'xxx', 'violence', 'kill', 'murder', 'terror', 'terrorist', 'bomb', 'weapon', 'gun', 'drug', 'marijuana', 'cocaine', 'heroin', 'nazi', 'hitler', 'suicide', 'self-harm', 'gamble', 'casino', 'betting', 'hate', 'racist', 'rape', 'sexual assault', 'torture', 'sexual harassment', 'pedophilia', 'cannibalism', 'gang rape', 'beheading', 'execution', 'burning to death', 'bestiality', 'necrophilia', 'zoophilia',
    
    // --- Korean (ko) ---
    '포르노', '성인', '섹스', '성관계', '나체', '야동', '폭력', '살인', '죽이다', '테러', '폭탄', '무기', '총', '마약', '대마초', '필로폰', '헤로인', '나치', '히틀러', '자살', '자해', '도박', '카지노', '토토', '혐오', '인종차별', '강간', '겁탈', '고문', '성추행', '성폭행', '소아성애', '식인', '윤간', '참수', '처형', '화형', '수간', '시체애', '동물성애',

    // --- Japanese (ja) ---
    'ポルノ', 'アダルト', 'セックス', '性行為', 'ヌード', '暴力', '殺人', '殺す', 'テロ', '爆弾', '武器', '銃', '麻薬', '覚醒剤', '大麻', 'ナチス', 'ヒトラー', '自殺', '自傷', 'ギャンブル', 'カジノ', '賭博', 'ヘイト', '差別', 'レイプ', '強姦', '拷問', 'セクハラ', '性的暴行', '小児性愛', 'カニバリズム', '輪姦', '斬首', '処刑', '火あぶり', '獣姦', '死体愛好', '動物性愛',

    // --- Chinese (zh) ---
    '色情', '成人', '性爱', '裸体', '暴力', '谋杀', '杀人', '恐怖主义', '炸弹', '武器', '枪', '毒品', '大麻', '海洛因', '纳粹', '希特勒', '自杀', '自残', '赌博', '赌场', '仇恨', '种族歧视', '强奸', '性侵', '酷刑', '性骚扰', '恋童癖', '食人', '轮奸', '斩首', '处决', '火刑', '兽交', '恋尸癖', '恋兽癖',

    // --- Spanish (es) ---
    'pornografía', 'porno', 'sexo', 'sexual', 'desnudo', 'violencia', 'matar', 'asesinato', 'terrorismo', 'bomba', 'arma', 'pistola', 'drogas', 'marihuana', 'cocaína', 'nazi', 'suicidio', 'autolesión', 'juego', 'casino', 'apuestas', 'odio', 'racismo', 'violación', 'abuso sexual', 'tortura', 'acoso sexual', 'pedofilia', 'canibalismo', 'violación en grupo', 'decapitación', 'ejecución', 'hoguera', 'bestialismo', 'necrofilia', 'zoofilia',

    // --- French (fr) ---
    'pornographie', 'porno', 'sexe', 'sexuel', 'nu', 'violence', 'tuer', 'meurtre', 'terrorisme', 'bombe', 'arme', 'pistolet', 'drogue', 'cannabis', 'cocaïne', 'nazi', 'suicide', 'automutilation', 'jeu', 'casino', 'pari', 'haine', 'racisme', 'viol', 'agression sexuelle', 'torture', 'harcèlement sexuel', 'pédophilie', 'cannibalisme', 'viol collectif', 'décapitation', 'exécution', 'bûcher', 'bestialité', 'nécrophilie', 'zoophilie',

    // --- German / Swiss German (de, ch) ---
    'pornografie', 'sex', 'sexuell', 'nackt', 'gewalt', 'töten', 'mord', 'terrorismus', 'bombe', 'waffe', 'pistole', 'drogen', 'cannabis', 'kokain', 'nazi', 'hitler', 'selbstmord', 'selbstverletzung', 'glücksspiel', 'casino', 'wette', 'hass', 'rassismus', 'vergewaltigung', 'sexuelle nötigung', 'folter', 'sexuelle belästigung', 'pädophilie', 'kannibalismus', 'gruppenvergewaltigung', 'enthauptung', 'hinrichtung', 'verbrennung', 'sodomie', 'nekrophilie', 'zoophilie',

    // --- Arabic (ar) ---
    'إباحي', 'جنس', 'جنسي', 'عاري', 'عنف', 'قتل', 'إرهاب', 'قنبلة', 'سلاح', 'مسدس', 'مخدرات', 'حشيش', 'كوكايين', 'نازي', 'انتحار', 'إيذاء النفس', 'قمار', 'كازينو', 'رهان', 'كراهية', 'عنصرية', 'اغتصاب', 'اعتداء جنسي', 'تعذيب', 'تحرش جنسي', 'بيدوفيليا', 'أكل لحوم البشر', 'اغتصاب جماعي', 'قطع الرأس', 'إعدام', 'حرق', 'بهيمية', 'نيكروفيليا', 'زوفيليا',

    // --- Bengali (bn) ---
    'পর্ন', 'যৌন', 'সেক্স', 'নগ্ন', 'সহিংসতা', 'হত্যা', 'খুন', 'সন্ত্রাস', 'বোমা', 'অস্ত্র', 'বন্দুক', 'মাদক', 'গাঁজা', 'কোকেন', 'নাৎসি', 'আত্মহত্যা', 'আত্মক্ষতি', 'জুয়া', 'ক্যাসিনো', 'বাজি', 'ঘৃণা', 'বর্ণবাদ', 'ধর্ষণ', 'যৌন নির্যাতন', 'নির্যাতন', 'যৌন হয়রানি', 'পেডোফিলিয়া', 'নরমাংসভোজী', 'গণধর্ষণ', 'শিরশ্ছেদ', 'মৃত্যুদণ্ড', 'আগুনে পোড়ানো', 'পশুকামিতা', 'নেক্রোফিলিয়া', 'জুফিলিয়া',

    // --- Vietnamese (vi) ---
    'khiêu dâm', 'tình dục', 'quan hệ tình dục', 'khỏa thân', 'bạo lực', 'giết', 'giết người', 'khủng bố', 'bom', 'vũ khí', 'súng', 'ma túy', 'cần sa', 'cocain', 'phát xít', 'tự tử', 'tự hại', 'cờ bạc', 'sòng bạc', 'cá cược', 'thù hận', 'phân biệt chủng tộc', 'hiếp dâm', 'cưỡng hiếp', 'tra tấn', 'quấy rối tình dục', 'ấu dâm', 'ăn thịt người', 'hiếp dâm tập thể', 'chặt đầu', 'hành quyết', 'thiêu sống', 'thú giao', 'ái tử thi', 'ái thú',

    // --- Thai (th) ---
    'โป๊', 'เซ็กซ์', 'เพศ', 'เปลือย', 'ความรุนแรง', 'ฆ่า', 'ฆาตกรรม', 'การก่อการร้าย', 'ระเบิด', 'อาวุธ', 'ปืน', 'ยาเสพติด', 'กัญชา', 'โคเคน', 'นาซี', 'ฆ่าตัวตาย', 'ทำร้ายตัวเอง', 'การพนัน', 'คาสิโน', 'เดิมพัน', 'เกลียดชัง', 'เหยียดเชื้อชาติ', 'ข่มขืน', 'ล่วงละเมิดทางเพศ', 'ทรมาน', 'คุกคามทางเพศ', 'ใคร่เด็ก', 'กินเนื้อมนุษย์', 'รุมโทรม', 'ตัดหัว', 'ประหารชีวิต', 'เผาทั้งเป็น', 'สมสู่กับสัตว์', 'เนโครฟีเลีย', 'ซูฟีเลีย',

    // --- Hindi (hi) ---
    'पॉर्न', 'सेक्स', 'यौन', 'नग्न', 'हिंसा', 'मारना', 'हत्या', 'आतंक', 'बम', 'हथियार', 'बंदूक', 'ड्रग्स', 'गांजा', 'कोकीन', 'नाजी', 'आत्महत्या', 'आत्म-हानि', 'जुआ', 'कैसीनो', 'सट्टेबाजी', 'नफरत', 'जातिवाद', 'बलात्कार', 'यौन हमला', 'यातना', 'यौन उत्पीड़न', 'बाल यौन शोषण', 'नरभक्षण', 'सामूहिक बलात्कार', 'सिर कलम', 'फांसी', 'दाह', 'पशुगमन', 'शव संभोग', 'पशु प्रेम',

    // --- Indonesian (id) ---
    'pornografi', 'seks', 'seksual', 'telanjang', 'kekerasan', 'membunuh', 'pembunuhan', 'terorisme', 'bom', 'senjata', 'pistol', 'narkoba', 'ganja', 'kokain', 'nazi', 'bunuh diri', 'melukai diri', 'judi', 'kasino', 'taruhan', 'kebencian', 'rasisme', 'pemerkosaan', 'kekerasan seksual', 'penyiksaan', 'pelecehan seksual', 'pedofilia', 'kanibalisme', 'pemerkosaan massal', 'pemenggalan', 'eksekusi', 'bakar hidup-hidup', 'bestialitas', 'nekrofilia', 'zoofilia',

    // --- Malay (ms) ---
    'pornografi', 'seks', 'seksual', 'keganasan', 'bunuh', 'pembunuhan', 'keganasan', 'bom', 'senjata', 'pistol', 'dadah', 'ganja', 'kokain', 'nazi', 'bunuh diri', 'cederakan diri', 'judi', 'kasino', 'pertaruhan', 'kebencian', 'perkauman', 'rogol', 'serangan seksual', 'seksa', 'gangguan seksual', 'pedofilia', 'kanibalisme', 'rogol berkumpulan', 'pancung', 'hukum mati', 'bakar', 'bestialiti', 'nekrofilia', 'zoofilia',

    // --- Turkish (tr) ---
    'pornografi', 'seks', 'cinsel', 'çıplak', 'şiddet', 'öldürmek', 'cinayet', 'terör', 'bomba', 'silah', 'tabanca', 'uyuşturucu', 'esrar', 'kokain', 'nazi', 'intihar', 'kendine zarar', 'kumar', 'kumarhane', 'bahis', 'nefret', 'ırkçılık', 'tecavüz', 'cinsel saldırı', 'işkence', 'cinsel taciz', 'pedofili', 'yamyamlık', 'toplu tecavüz', 'kafa kesme', 'idam', 'yakma', 'zoofili', 'nekrofili', 'hayvanlarla seks',

    // --- Russian (ru) ---
    'порно', 'секс', 'сексуальный', 'голый', 'насилие', 'убить', 'убийство', 'террор', 'бомба', 'оружие', 'пистолет', 'наркотики', 'марихуана', 'кокаин', 'нацист', 'самоубийство', 'членовредительство', 'азартные игры', 'казино', 'ставки', 'ненависть', 'расизм', 'изнасилование', 'сексуальное насилие', 'пытки', 'сексуальные домогательства', 'педофилия', 'каннибализм', 'групповое изнасилование', 'обезглавливание', 'казнь', 'сожжение', 'скотоложство', 'некрофилия', 'зоофилия',

    // --- Ukrainian (uk) ---
    'порно', 'секс', 'сексуальний', 'голий', 'насильство', 'вбити', 'вбивство', 'террор', 'бомба', 'зброя', 'пістолет', 'наркотики', 'марихуана', 'кокаїн', 'нацист', 'самогубство', 'самоушкодження', 'азартні ігри', 'казино', 'ставки', 'ненависть', 'расизм', 'згвалтування', 'сексуальне насильство', 'torture', 'сексуальні домагання', 'педофілія', 'канібалізм', 'групове згвалтування', 'обезголовлення', 'страта', 'спалення', 'скотолозтва', 'некрофілія', 'зоофілія',

    // --- Polish (pl) ---
    'pornografia', 'seks', 'seksualny', 'nagi', 'przemoc', 'zabić', 'morderstwo', 'terroryzm', 'bomba', 'broń', 'pistolet', 'narkotyki', 'marihuana', 'kokaina', 'nazista', 'samobójstwo', 'samookaleczenie', 'hazard', 'kasyno', 'zakłady', 'nienawiść', 'rasizm', 'gwałt', 'napaść seksualna', 'tortury', 'molestowanie seksualne', 'pedofilia', 'kanibalizm', 'gwałt zbiorowy', 'ścięcie', 'egzekucja', 'spalenie', 'bestialstwo', 'nekrofilia', 'zoofilia',

    // --- Italian (it) ---
    'pornografia', 'sesso', 'sessuale', 'nudo', 'violenza', 'uccidere', 'omicidio', 'terrorismo', 'bomba', 'arma', 'pistola', 'droga', 'marijuana', 'cocaina', 'nazista', 'suicidio', 'autolesionismo', 'gioco d\'azzardo', 'casinò', 'scommesse', 'odio', 'razzismo', 'stupro', 'violenza sessuale', 'tortura', 'molestie sessuali', 'pedofilia', 'cannibalismo', 'stupro di gruppo', 'decapitazione', 'esecuzione', 'rogo', 'bestialità', 'necrofilia', 'zoofilia',

    // --- Portuguese (pt) ---
    'pornografia', 'sexo', 'sexual', 'nu', 'violência', 'olência', 'matar', 'assassinato', 'terrorismo', 'bomba', 'arma', 'pistola', 'drogas', 'maconha', 'cocaína', 'nazista', 'suicídio', 'automutilação', 'jogo', 'cassino', 'apostas', 'ódio', 'racismo', 'estupro', 'abuso sexual', 'tortura', 'assédio sexual', 'pedofilia', 'canibalismo', 'estupro coletivo', 'decapitação', 'execução', 'fogueira', 'bestialidade', 'necrofilia', 'zoofilia',

    // --- Greek (el) ---
    'πορνό', 'σεξ', 'σεξουαλικός', 'γυμνός', 'βία', 'σκοτώνω', 'φόνος', 'τρομοκρατία', 'βόμβα', 'όπλο', 'πιστόλι', 'ναρκωτικά', 'μαριχουάνα', 'κοκαΐνη', 'ναζί', 'αυτοκτονία', 'αυτοτραυματισμός', 'τζόγος', 'καζίνο', 'στοίχημα', 'μίσος', 'ρατσισμός', 'βιασμός', 'σεξουαλική επίθεση', 'βασανιστήρια', 'σεξουαλική παρενόχληση', 'παιδοφιλία', 'κανιβαλισμός', 'ομαδικός βιασμός', 'αποκεφαλισμός', 'εκτέλεση', 'κάψιμο', 'κτηνοβασία', 'νεκροφιλία', 'ζωοφιλία',

    // --- Swedish (sv) ---
    'porr', 'sex', 'sexuell', 'naken', 'våld', 'döda', 'mord', 'terrorism', 'bomb', 'vapen', 'pistol', 'droger', 'marijuana', 'kokain', 'nazist', 'självmord', 'självskadebeteende', 'spel', 'kasino', 'vadslagning', 'hat', 'rasism', 'våldtäkt', 'sexuella övergrepp', 'tortyren', 'sexuella trakasserier', 'pedofili', 'kannibalism', 'gruppvåldtäkt', 'halshuggning', 'avrättning', 'bränning', 'tidelag', 'nekrofili', 'zoofili',

    // --- Finnish (fi) ---
    'porno', 'seksi', 'seksuaalinen', 'alaston', 'väkivalta', 'tappaa', 'murha', 'terrorismi', 'pommi', 'ase', 'pistooli', 'huumeet', 'marihuana', 'kokaiini', 'natsi', 'itsemurha', 'itseään vahingoittava', 'uhkapeli', 'kasino', 'vedonlyönti', 'viha', 'rasismi', 'raiskaus', 'seksuaalinen väkivalta', 'kidutus', 'seksuaalinen häirintä', 'pedofilia', 'kannibalismi', 'joukkoraiskaus', 'mestaus', 'teloitus', 'polttaminen', 'eläimeen sekaantuminen', 'nekrofilia', 'zoofilia',

    // --- Mongolian (mn) ---
    'порно', 'секс', 'бэлгийн', 'нүцгэн', 'хүчирхийлэл', 'алах', 'аллага', 'терроризм', 'бөмбөг', 'зэвсэг', 'буу', 'мансууруулах', 'хар тамхи', 'кокаин', 'нацист', 'амиа', 'өөрийгөө', 'мөрийтэй', 'казино', 'бооцоо', 'үзэн', 'арьс', 'хүчин', 'бэлгийн хүчирхийлэл', 'эрүү шүүлт', 'бэлгийн дарамт', 'педофили', 'хүн идэх', 'бүлэглэн хүчирхийлэх', 'толгой авах', 'цаазаар авах', 'шатаах', 'малын гаж дон', 'цогцос сонирхох', 'амьтан сонирхох',

    // --- Swahili (sw) ---
    'picha', 'ngono', 'kujamiiana', 'uchi', 'vurugu', 'ua', 'mauaji', 'ugaidi', 'bomu', 'silaha', 'bunduki', 'dawa', 'bangi', 'kokeini', 'nazi', 'kujiua', 'kujidhuru', 'kamari', 'kasino', 'kuweka', 'chuki', 'ubaguzi', 'ubakaji', 'shambulio la kingono', 'utesaji', 'unyanyasaji wa kijinsia', 'ulawiti wa watoto', 'ulaji watu', 'ubakaji wa genge', 'kukata kichwa', 'kunyongwa', 'kuchoma', 'ngono na wanyama', 'necrophilia', 'zoophilia'
];

// 수정: 다국어 에러 메시지 정의
const ERROR_MESSAGES = {
    'ko': {
        missingTopic: '시의 주제를 입력해 주세요.',
        topicTooLong: (max) => `시의 주제는 ${max}자 이내로 입력해 주세요.`,
        disallowedTopic: '해당 주제로는 시를 생성할 수 없습니다.',
        unsupportedLang: '지원하지 않는 언어입니다.',
        serverConfigError: '서버 설정 오류가 발생했습니다.',
        generationError: '시 생성 중 오류가 발생했습니다.'
    },
    'en': {
        missingTopic: 'Please enter a poem topic.',
        topicTooLong: (max) => `Please enter a topic within ${max} characters.`,
        disallowedTopic: 'Cannot generate a poem with this topic.',
        unsupportedLang: 'Unsupported language.',
        serverConfigError: 'Server configuration error.',
        generationError: 'An error occurred while generating the poem.'
    },
    'ja': {
        missingTopic: '詩のテーマを入力してください。',
        topicTooLong: (max) => `詩のテーマは${max}文字以内で入力してください。`,
        disallowedTopic: 'そのテーマでは詩を作成できません。',
        unsupportedLang: 'サポートされていない言語です。',
        serverConfigError: 'サーバー設定エラーが発生しました。',
        generationError: '詩の生成中にエラーが発生しました。'
    },
    'zh': {
        missingTopic: '请输入诗的主题。',
        topicTooLong: (max) => `请输入${max}字以内的主题。`,
        disallowedTopic: '无法以此主题生成诗歌。',
        unsupportedLang: '不支持的语言。',
        serverConfigError: '服务器配置错误。',
        generationError: '生成诗歌时发生错误。'
    },
    'es': {
        missingTopic: 'Por favor, introduce un tema para el poema.',
        topicTooLong: (max) => `Por favor, introduce un tema de menos de ${max} caracteres.`,
        disallowedTopic: 'No se puede generar un poema con este tema.',
        unsupportedLang: 'Idioma no soportado.',
        serverConfigError: 'Error de configuración del servidor.',
        generationError: 'Ocurrió un error al generar el poema.'
    },
    'fr': {
        missingTopic: 'Veuillez entrer un sujet pour le poème.',
        topicTooLong: (max) => `Veuillez entrer un sujet de moins de ${max} caractères.`,
        disallowedTopic: 'Impossible de générer un poème avec ce sujet.',
        unsupportedLang: 'Langue non prise en charge.',
        serverConfigError: 'Erreur de configuration du serveur.',
        generationError: 'Une erreur est survenue lors de la génération du poème.'
    },
    'de': {
        missingTopic: 'Bitte geben Sie ein Gedichtsthema ein.',
        topicTooLong: (max) => `Bitte geben Sie ein Thema innerhalb von ${max} Zeichen ein.`,
        disallowedTopic: 'Mit diesem Thema kann kein Gedicht erstellt werden.',
        unsupportedLang: 'Nicht unterstützte Sprache.',
        serverConfigError: 'Serverkonfigurationsfehler.',
        generationError: 'Beim Erstellen des Gedichts ist ein Fehler aufgetreten.'
    },
    'ch': { // Swiss German (using German as fallback mostly, slightly tweaks if needed, mapped to 'de' usually but defining explicit if needed. Sticking to standard German for simplicity or slight variation)
        missingTopic: 'Bitte geben Sie ein Gedichtsthema ein.',
        topicTooLong: (max) => `Bitte geben Sie ein Thema innerhalb von ${max} Zeichen ein.`,
        disallowedTopic: 'Mit diesem Thema kann kein Gedicht erstellt werden.',
        unsupportedLang: 'Nicht unterstützte Sprache.',
        serverConfigError: 'Serverkonfigurationsfehler.',
        generationError: 'Beim Erstellen des Gedichts ist ein Fehler aufgetreten.'
    },
    'it': {
        missingTopic: 'Inserisci un argomento per la poesia.',
        topicTooLong: (max) => `Inserisci un argomento entro ${max} caratteri.`,
        disallowedTopic: 'Impossibile generare una poesia con questo argomento.',
        unsupportedLang: 'Lingua non supportata.',
        serverConfigError: 'Errore di configurazione del server.',
        generationError: 'Si è verificato un errore durante la generazione della poesia.'
    },
    'ru': {
        missingTopic: 'Пожалуйста, введите тему стихотворения.',
        topicTooLong: (max) => `Пожалуйста, введите тему до ${max} символов.`,
        disallowedTopic: 'Невозможно создать стихотворение с этой темой.',
        unsupportedLang: 'Неподдерживаемый язык.',
        serverConfigError: 'Ошибка конфигурации сервера.',
        generationError: 'Произошла ошибка при создании стихотворения.'
    },
    'ar': {
        missingTopic: 'الرجاء إدخال موضوع القصيدة.',
        topicTooLong: (max) => `الرجاء إدخال موضوع في غضون ${max} حرفًا.`,
        disallowedTopic: 'لا يمكن إنشاء قصيدة بهذا الموضوع.',
        unsupportedLang: 'لغة غير مدعومة.',
        serverConfigError: 'خطأ في تكوين الخادم.',
        generationError: 'حدث خطأ أثناء إنشاء القصيدة.'
    },
    'bn': {
        missingTopic: 'অনুগ্রহ করে কবিতার বিষয় লিখুন।',
        topicTooLong: (max) => `অনুগ্রহ করে ${max} অক্ষরের মধ্যে একটি বিষয় লিখুন।`,
        disallowedTopic: 'এই বিষয়ে কবিতা তৈরি করা সম্ভব নয়।',
        unsupportedLang: 'অসমর্থিত ভাষা।',
        serverConfigError: 'সার্ভার কনফিগারেশন ত্রুটি।',
        generationError: 'কবিতা তৈরির সময় একটি ত্রুটি ঘটেছে।'
    },
    'vi': {
        missingTopic: 'Vui lòng nhập chủ đề bài thơ.',
        topicTooLong: (max) => `Vui lòng nhập chủ đề trong vòng ${max} ký tự.`,
        disallowedTopic: 'Không thể tạo bài thơ với chủ đề này.',
        unsupportedLang: 'Ngôn ngữ không được hỗ trợ.',
        serverConfigError: 'Lỗi cấu hình máy chủ.',
        generationError: 'Đã xảy ra lỗi khi tạo bài thơ.'
    },
    'th': {
        missingTopic: 'กรุณาใส่หัวข้อบทกวี',
        topicTooLong: (max) => `กรุณาใส่หัวข้อภายใน ${max} ตัวอักษร`,
        disallowedTopic: 'ไม่สามารถสร้างบทกวีด้วยหัวข้อนี้ได้',
        unsupportedLang: 'ภาษาที่ไม่รองรับ',
        serverConfigError: 'ข้อผิดพลาดการกำหนดค่าเซิร์ฟเวอร์',
        generationError: 'เกิดข้อผิดพลาดขณะสร้างบทกวี'
    },
    'hi': {
        missingTopic: 'कृपया कविता का विषय दर्ज करें।',
        topicTooLong: (max) => `कृपया ${max} वर्णों के भीतर एक विषय दर्ज करें।`,
        disallowedTopic: 'इस विषय के साथ कविता नहीं बनाई जा सकती।',
        unsupportedLang: 'असमर्थित भाषा।',
        serverConfigError: 'सर्वर कॉन्फ़िगरेशन त्रुटि।',
        generationError: 'कविता बनाते समय एक त्रुटि हुई।'
    },
    'id': {
        missingTopic: 'Silakan masukkan topik puisi.',
        topicTooLong: (max) => `Silakan masukkan topik dalam ${max} karakter.`,
        disallowedTopic: 'Tidak dapat membuat puisi dengan topik ini.',
        unsupportedLang: 'Bahasa tidak didukung.',
        serverConfigError: 'Kesalahan konfigurasi server.',
        generationError: 'Terjadi kesalahan saat membuat puisi.'
    },
    'ms': {
        missingTopic: 'Sila masukkan topik puisi.',
        topicTooLong: (max) => `Sila masukkan topik dalam ${max} perkataan.`,
        disallowedTopic: 'Tidak dapat menghasilkan puisi dengan topik ini.',
        unsupportedLang: 'Bahasa tidak disokong.',
        serverConfigError: 'Ralat konfigurasi pelayan.',
        generationError: 'Ralat berlaku semasa menghasilkan puisi.'
    },
    'tr': {
        missingTopic: 'Lütfen şiir konusunu girin.',
        topicTooLong: (max) => `Lütfen ${max} karakter içinde bir konu girin.`,
        disallowedTopic: 'Bu konuyla şiir oluşturulamaz.',
        unsupportedLang: 'Desteklenmeyen dil.',
        serverConfigError: 'Sunucu yapılandırma hatası.',
        generationError: 'Şiir oluşturulurken bir hata oluştu.'
    },
    'uk': {
        missingTopic: 'Будь ласка, введіть тему вірша.',
        topicTooLong: (max) => `Будь ласка, введіть тему до ${max} символів.`,
        disallowedTopic: 'Нееможливо створити вірш з цією темою.',
        unsupportedLang: 'Непідтримувана мова.',
        serverConfigError: 'Помилка конфігурації сервера.',
        generationError: 'Виникла помилка при створенні вірша.'
    },
    'pl': {
        missingTopic: 'Proszę podać temat wiersza.',
        topicTooLong: (max) => `Proszę podać temat do ${max} znaków.`,
        disallowedTopic: 'Nie można wygenerować wiersza na ten temat.',
        unsupportedLang: 'Nieobsługiwany język.',
        serverConfigError: 'Błąd konfiguracji serwera.',
        generationError: 'Wystąpił błąd podczas generowania wiersza.'
    },
    'pt': {
        missingTopic: 'Por favor, insira um tema para o poema.',
        topicTooLong: (max) => `Por favor, insira um tema com menos de ${max} caracteres.`,
        disallowedTopic: 'Não é possível gerar um poema com este tema.',
        unsupportedLang: 'Idioma não suportado.',
        serverConfigError: 'Erro de configuração do servidor.',
        generationError: 'Ocorreu um erro ao gerar o poema.'
    },
    'el': {
        missingTopic: 'Παρακαλώ εισάγετε το θέμα του ποιήματος.',
        topicTooLong: (max) => `Παρακαλώ εισάγετε ένα θέμα εντός ${max} χαρακτήρων.`,
        disallowedTopic: 'Δεν είναι δυνατή η δημιουργία ποιήματος με αυτό το θέμα.',
        unsupportedLang: 'Μη υποστηριζόμενη γλώσσα.',
        serverConfigError: 'Σφάλμα διαμόρφωσης διακομιστή.',
        generationError: 'Παρουσιάστηκε σφάλμα κατά τη δημιουργία του ποιήματος.'
    },
    'sv': {
        missingTopic: 'Vänligen ange ett dikttema.',
        topicTooLong: (max) => `Vänligen ange ett tema inom ${max} tecken.`,
        disallowedTopic: 'Kan inte skapa en dikt med detta tema.',
        unsupportedLang: 'Språket stöds inte.',
        serverConfigError: 'Serverkonfigurationsfel.',
        generationError: 'Ett fel uppstod när dikten genererades.'
    },
    'fi': {
        missingTopic: 'Anna runon aihe.',
        topicTooLong: (max) => `Anna aihe, joka on enintään ${max} merkkiä pitkä.`,
        disallowedTopic: 'Tällä aiheella ei voi luoda runoa.',
        unsupportedLang: 'Kieltä ei tueta.',
        serverConfigError: 'Palvelimen konfigurointivirhe.',
        generationError: 'Virhe runon luomisessa.'
    },
    'mn': {
        missingTopic: 'Шүлгийн сэдвийг оруулна уу.',
        topicTooLong: (max) => `Сэдвийг ${max} тэмдэгтэд багтаан оруулна уу.`,
        disallowedTopic: 'Энэ сэдвээр шүлэг зохиох боломжгүй.',
        unsupportedLang: 'Дэмжигдээгүй хэл.',
        serverConfigError: 'Серверийн тохиргооны алдаа.',
        generationError: 'Шүлэг зохиох явцад алдаа гарлаа.'
    },
    'sw': {
        missingTopic: 'Tafadhali ingiza mada ya shairi.',
        topicTooLong: (max) => `Tafadhali ingiza mada ndani ya vibambo ${max}.`,
        disallowedTopic: 'Haiwezi kutoa shairi na mada hii.',
        unsupportedLang: 'Lugha haitumiki.',
        serverConfigError: 'Hitilafu ya usanidi wa seva.',
        generationError: 'Hitilafu imetokea wakati wa kutoa shairi.'
    }
};

// 수정: 에러 메시지를 언어별로 가져오는 헬퍼 함수
// ko(한국어)를 기본값으로 사용
const getErrorMessage = (lang, key, arg) => {
    const langMessages = ERROR_MESSAGES[lang] || ERROR_MESSAGES['ko'];
    const message = langMessages[key];
    if (typeof message === 'function') {
        return message(arg);
    }
    return message || ERROR_MESSAGES['ko'][key];
};

app.post('/generate-poem', async (req, res) => {
    const rawTopic = typeof req.body.topic === 'string' ? req.body.topic.trim() : '';
    // 수정: 언어 설정이 없으면 기본값 'ko' 사용
    const language = typeof req.body.language === 'string' ? req.body.language : 'ko';

    // 수정: 필수 입력값 검증 실패 시 다국어 에러 메시지 반환
    if (!rawTopic) {
        return res.status(400).json({ error: getErrorMessage(language, 'missingTopic') });
    }

    // 수정: 길이 제한 초과 시 다국어 에러 메시지 반환
    if (rawTopic.length > MAX_TOPIC_LENGTH) {
        return res.status(400).json({ error: getErrorMessage(language, 'topicTooLong', MAX_TOPIC_LENGTH) });
    }

    // 수정: 금칙어 포함 시 다국어 에러 메시지 반환
    const loweredTopic = rawTopic.toLowerCase();
    const matchedKeyword = DISALLOWED_KEYWORDS.find((keyword) => loweredTopic.includes(keyword));
    if (matchedKeyword) {
        return res.status(400).json({ error: getErrorMessage(language, 'disallowedTopic') });
    }

    // 수정: 미지원 언어 요청 시 다국어 에러 메시지 반환
    if (!SUPPORTED_LANGUAGES.has(language)) {
        return res.status(400).json({ error: getErrorMessage(language, 'unsupportedLang') });
    }

    const langPrompt = languagePromptMap[language];

    // 수정: 서버 키 설정 오류 시 다국어 에러 메시지 반환
    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: getErrorMessage(language, 'serverConfigError') });
    }

    const prompt = `Please write a poem about ${rawTopic} ${langPrompt}.`;

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

        console.error('OpenAI 호출 실패', {
            statusCode,
            message: error.message,
            errorPayload
        });

        const clientStatus = statusCode >= 400 && statusCode < 500 ? statusCode : 500;
        // 수정: 생성 중 오류 발생 시 다국어 에러 메시지 반환
        res.status(clientStatus).json({ error: getErrorMessage(language, 'generationError') });
    }
});

// app.listen(port, () => {
//     console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
// });
module.exports.handler = serverless(app); // app을 serverless()함수로 감싸서
                                          // AWSLambda에서 실행할 수 있도록 만듦
