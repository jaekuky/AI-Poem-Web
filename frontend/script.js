
// 언어 코드와 이름 매핑
const languageMap = {
    'ko': { name: '한국어', ttsLang: 'ko-KR' },
    'en': { name: 'English', ttsLang: 'en-US' },
    'ja': { name: '日本語', ttsLang: 'ja-JP' },
    'zh': { name: '中文', ttsLang: 'zh-CN' },
    'es': { name: 'Español', ttsLang: 'es-ES' },
    'fr': { name: 'Français', ttsLang: 'fr-FR' },
    'ru': { name: 'Русский', ttsLang: 'ru-RU' },
    'it': { name: 'Italiano', ttsLang: 'it-IT' },
    'de': { name: 'Deutsch', ttsLang: 'de-DE' },
    'ms': { name: 'Bahasa Melayu', ttsLang: 'ms-MY' }, // 한글 주석: 말레이어 지원 추가
    'bn': { name: 'বাংলা', ttsLang: 'bn-IN' }, // 한글 주석: 벵골어 지원 추가
    'vi': { name: 'Tiếng Việt', ttsLang: 'vi-VN' }, // 한글 주석: 베트남어 지원 추가
};

// 시 작성 중 메시지 설정
const processingMessage = {
    'ko': '시를 작성하는 중입니다. 잠시만 기다려 주세요.',
    'en': 'I am writing a poem. Please wait a moment.',
    'ja': '詩を書いています。しばらくお待ちください。',
    'zh': '我正在写一首诗。请稍等。',
    'es': 'Estoy escribiendo un poema. Por favor espera un momento.',
    'fr': 'J\'écris un poème. S\'il vous plaît, attendez un moment.',
    'ru': 'Я пишу стихотворение. Пожалуйста, подождите немного.',
    'it': 'Sto scrivendo una poesia. Per favore aspetta un attimo.',
    'de': 'Ich schreibe ein Gedicht. Bitte warten Sie einen Moment.',
    'ms': 'Sedang menulis puisi. Sila tunggu sebentar.', // 한글 주석: 말레이어 안내 문구
    'bn': 'আমি একটি কবিতা লিখছি। অনুগ্রহ করে একটু অপেক্ষা করুন।', // 한글 주석: 벵골어 안내 문구
    'vi': 'Tôi đang viết bài thơ. Vui lòng đợi trong giây lát.', // 한글 주석: 베트남어 안내 문구
};

// 오류 메시지 설정
const errorMessage = {
    // 한글 주석: 콜론을 제거해 오류 메시지가 "::"로 표시되지 않도록 조정
    'ko': '오류 발생',
    'en': 'An error occurred',
    'ja': 'エラーが発生しました',
    'zh': '发生错误',
    'es': 'Se produjo un error',
    'fr': 'Une erreur s\'est produite',
    'ru': 'Произошла ошибка',
    'it': 'Si è verificato un errore',
    'de': 'Es ist ein Fehler aufgetreten',
    'ms': 'Ralat berlaku', // 한글 주석: 말레이어 오류 메시지
    'bn': 'একটি ত্রুটি ঘটেছে', // 한글 주석: 벵골어 오류 메시지
    'vi': 'Đã xảy ra lỗi' // 한글 주석: 베트남어 오류 메시지
};

// 필수 입력 안내 문구를 언어별로 정의
const topicRequiredMessage = {
    'ko': '시의 주제를 입력해 주세요.',
    'en': 'Please enter the topic of your poem.',
    'ja': '詩のテーマを入力してください。',
    'zh': '请输入诗歌的主题。',
    'es': 'Por favor ingresa el tema de tu poema.',
    'fr': 'Veuillez saisir le sujet de votre poème.',
    'ru': 'Пожалуйста, укажите тему стихотворения.',
    'it': 'Inserisci l\'argomento della tua poesia.',
    'de': 'Bitte geben Sie das Thema Ihres Gedichts ein.',
    'ms': 'Sila masukkan topik puisi anda.', // 한글 주석: 말레이어 필수 입력 메시지
    'bn': 'অনুগ্রহ করে আপনার কবিতার বিষয় লিখুন।', // 한글 주석: 벵골어 필수 입력 메시지
    'vi': 'Vui lòng nhập chủ đề cho bài thơ của bạn.' // 한글 주석: 베트남어 필수 입력 메시지
};

// 제목 표시
const title ={
    'ko': '제목: ',
    'en': 'Title: ',
    'ja': 'タイトル: ',
    'zh': '标题: ',
    'es': 'Título: ',
    'fr': 'Titre: ',
    'ru': 'Заголовок: ',
    'it': 'Titolo: ',
    'de': 'Titel: ',
    'ms': 'Tajuk: ', // 한글 주석: 말레이어 제목 접두사
    'bn': 'শিরোনাম: ', // 한글 주석: 벵골어 제목 접두사
    'vi': 'Tiêu đề: ' // 한글 주석: 베트남어 제목 접두사
}

const languageSelect = document.getElementById('language');
const processingVideo = document.getElementById('processing-video');
const topicInput = document.getElementById('topic');
const poemDiv = document.getElementById('poem');
const poetryWritingButton = document.getElementById('poetry-writing-button');
const ttsButton = document.getElementById('tts-button');

// 필수 입력 메시지 다국어 대응
topicInput.addEventListener('invalid', () => {
    const language = languageSelect.value;
    const message = topicRequiredMessage[language] || topicRequiredMessage['ko'];
    topicInput.setCustomValidity(message);
});

topicInput.addEventListener('input', () => {
    topicInput.setCustomValidity('');
});

document.getElementById('language').addEventListener('change', async function(event) {
    event.preventDefault();

    const language = languageSelect.value;
    var link;
    switch(language){
        case 'ko':
            link = 'https://www.ai-and-poem.art/ko/index.html'
            location.href = link;
            break;
        case 'en':
            link = 'https://www.ai-and-poem.art/en/index.html'
            location.href = link;
            break;
        case 'ja':
            link = 'https://www.ai-and-poem.art/ja/index.html'
            location.href = link;
            break;
        case 'zh':
            link = 'https://www.ai-and-poem.art/zh/index.html'
            location.href = link;
            break;
        case 'es':
            link = 'https://www.ai-and-poem.art/es/index.html'
            location.href = link;
            break;
        case 'fr':
            link = 'https://www.ai-and-poem.art/fr/index.html'
            location.href = link;
            break;
        case 'ru':
            link = 'https://www.ai-and-poem.art/ru/index.html'
            location.href = link;
            break;
        case 'it':
            link = 'https://www.ai-and-poem.art/it/index.html'
            location.href = link;
            break;
        case 'de':
            link = 'https://www.ai-and-poem.art/de/index.html'
            location.href = link;
            break;
        case 'ms':
            link = 'https://www.ai-and-poem.art/ms/index.html' // 한글 주석: 말레이어 페이지 이동 처리
            location.href = link;
            break;
        case 'bn':
            link = 'https://www.ai-and-poem.art/bn/index.html' // 한글 주석: 벵골어 페이지 이동 처리
            location.href = link;
            break;
        case 'vi':
            link = 'https://www.ai-and-poem.art/vi/index.html' // 한글 주석: 베트남어 페이지 이동 처리
            location.href = link;
            break;
        default:
            break;
    }
});

// 시 작성 버튼 함수
document.getElementById('poem-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const topic = topicInput.value.trim();
    const language = languageSelect.value;

    poemDiv.textContent = processingMessage[language] || processingMessage['ko'];

    // 비디오 재생
    processingVideo.play();
    // TTS 버튼 비활성화
    ttsButton.disabled = true;

    try {
        const response = await fetch('https://mlvpfnsdxpkw5wwdbcz6sh52xe0aqkpm.lambda-url.ap-northeast-2.on.aws/generate-poem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // 프론트엔드 CORS 추가
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify({
                topic: topic,
                language: language
            })
        });

        if (response.ok) {
            const data = await response.json();
            const poem = data.poem;
            poemDiv.textContent = poem;
            
            // TTS 버튼 활성화
            ttsButton.disabled = false;

            // 비디오 정지
            processingVideo.pause();
        } else {
            const errorData = await response.json();
            poemDiv.textContent = `${errorMessage[language]}: ${errorData.error}`;
            
            // 비디오 정지
            processingVideo.pause();
        }
    } catch (error) {
        poemDiv.textContent = `${errorMessage[language]}: ${error.message}`;
        
        // 비디오 정지
        processingVideo.pause();
    }
});

// TTS 버튼 함수
ttsButton.addEventListener('click', async function(event) {
    const language = languageSelect.value;
    const poem = poemDiv.textContent;
    const ttsLang = languageMap[language]?.ttsLang || 'ko-KR';

    const utterance = new SpeechSynthesisUtterance(poem);
    utterance.lang = ttsLang;
    window.speechSynthesis.speak(utterance);
});
