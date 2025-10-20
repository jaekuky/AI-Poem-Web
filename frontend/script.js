
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
    'el': { name: 'Ελληνικά', ttsLang: 'el-GR' }, // 한글 주석: 그리스어 지원 추가
    'pt': { name: 'Português', ttsLang: 'pt-PT' }, // 한글 주석: 포르투갈어 지원 추가
    'pl': { name: 'Polski', ttsLang: 'pl-PL' }, // 한글 주석: 폴란드어 지원 추가
    'ch': { name: 'Schweizerdeutsch', ttsLang: 'de-CH' }, // 한글 주석: 스위스 독일어 지원 추가
    'uk': { name: 'Українська', ttsLang: 'uk-UA' }, // 한글 주석: 우크라이나어 지원 추가
    'tr': { name: 'Türkçe', ttsLang: 'tr-TR' }, // 한글 주석: 터키어 지원 추가
    'sv': { name: 'Svenska', ttsLang: 'sv-SE' }, // 수정: 스웨덴어 지원 추가
    'hi': { name: 'हिन्दी', ttsLang: 'hi-IN' }, // 수정: 힌디어 지원 추가
    'id': { name: 'Bahasa Indonesia', ttsLang: 'id-ID' }, // 수정: 인도네시아어 지원 추가
    'th': { name: 'ไทย', ttsLang: 'th-TH' }, // 수정: 태국어 지원 추가
    'fi': { name: 'Suomi', ttsLang: 'fi-FI' } // 수정: 핀란드어 지원 추가
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
    'el': 'Γράφω ένα ποίημα. Παρακαλώ περιμένετε λίγο.', // 한글 주석: 그리스어 안내 문구
    'pt': 'Estou a escrever um poema. Aguarde um momento.', // 한글 주석: 포르투갈어 안내 문구
    'pl': 'Piszę wiersz. Proszę chwilę poczekać.', // 한글 주석: 폴란드어 안내 문구
    'ch': 'Ich bi grad am dichte. Bitte wart e chli.', // 한글 주석: 스위스 독일어 안내 문구
    'uk': 'Я пишу вірш. Будь ласка, зачекайте трохи.', // 한글 주석: 우크라이나어 안내 문구
    'tr': 'Bir şiir yazıyorum. Lütfen biraz bekleyin.', // 한글 주석: 터키어 안내 문구
    'sv': 'Jag skriver en dikt. Vänta ett ögonblick, tack.', // 수정: 스웨덴어 안내 문구 추가
    'hi': 'मैं एक कविता लिख रहा हूँ। कृपया थोड़ी देर प्रतीक्षा करें।', // 수정: 힌디어 안내 문구 추가
    'id': 'Saya sedang menulis puisi. Mohon tunggu sebentar.', // 수정: 인도네시아어 안내 문구 추가
    'th': 'กำลังเขียนบทกวี กรุณารอสักครู่', // 수정: 태국어 안내 문구 추가
    'fi': 'Kirjoitan runoa. Odota hetki, kiitos.' // 수정: 핀란드어 안내 문구 추가
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
    'vi': 'Đã xảy ra lỗi', // 한글 주석: 베트남어 오류 메시지
    'el': 'Παρουσιάστηκε σφάλμα', // 한글 주석: 그리스어 오류 메시지
    'pt': 'Ocorreu um erro', // 한글 주석: 포르투갈어 오류 메시지
    'pl': 'Wystąpił błąd', // 한글 주석: 폴란드어 오류 메시지
    'ch': 'Es isch e Fähler uufträtte', // 한글 주석: 스위스 독일어 오류 메시지
    'uk': 'Сталася помилка', // 한글 주석: 우크라이나어 오류 메시지
    'tr': 'Bir hata oluştu', // 한글 주석: 터키어 오류 메시지
    'sv': 'Ett fel inträffade', // 수정: 스웨덴어 오류 메시지 추가
    'hi': 'एक त्रुटि हुई', // 수정: 힌디어 오류 메시지 추가
    'id': 'Terjadi kesalahan', // 수정: 인도네시아어 오류 메시지 추가
    'th': 'เกิดข้อผิดพลาด', // 수정: 태국어 오류 메시지 추가
    'fi': 'Tapahtui virhe' // 수정: 핀란드어 오류 메시지 추가
};

// 필수 입력 안내 문구를 언어별로 정의
const topicRequiredMessage = {
    'ko': '시의 주제를 입력해 주세요.',
    'en': 'Please enter the topic of your poem.',
    'ja': '詩のテーマを入力してください。',
    'zh': '请输入诗歌的主题。',
    'es': 'Por favor, introduce el tema de tu poema.',
    'fr': 'Veuillez saisir le sujet de votre poème.',
    'ru': 'Пожалуйста, введите тему вашего стихотворения.',
    'it': 'Inserisci il tema della tua poesia.',
    'de': 'Bitte geben Sie das Thema Ihres Gedichts ein.',
    'ms': 'Sila masukkan topik puisi anda.',
    'bn': 'অনুগ্রহ করে আপনার কবিতার বিষয় লিখুন।',
    'vi': 'Vui lòng nhập chủ đề bài thơ của bạn.',
    'el': 'Παρακαλώ εισαγάγετε το θέμα του ποιήματός σας.',
    'pt': 'Por favor, insira o tema do seu poema.',
    'pl': 'Proszę podać temat swojego wiersza.',
    'ch': 'Bitte gib das Thema deines Gedichts ein.',
    'uk': 'Будь ласка, введіть тему вашого вірша.',
    'tr': 'Lütfen şiirinizin konusunu girin.',
    'sv': 'Ange ämnet för din dikt.', // 수정: 스웨덴어 검증 메시지 추가
    'hi': 'कृपया अपनी कविता का विषय दर्ज करें।', // 수정: 힌디어 검증 메시지 추가
    'id': 'Silakan masukkan topik puisi Anda.', // 수정: 인도네시아어 검증 메시지 추가
    'th': 'กรุณากรอกหัวข้อของบทกวี', // 수정: 태국어 검증 메시지 추가
    'fi': 'Anna runosi aihe.' // 수정: 핀란드어 검증 메시지 추가
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
    'vi': 'Tiêu đề: ', // 한글 주석: 베트남어 제목 접두사
    'el': 'Τίτλος: ', // 한글 주석: 그리스어 제목 접두사
    'pt': 'Título: ', // 한글 주석: 포르투갈어 제목 접두사
    'pl': 'Tytuł: ', // 한글 주석: 폴란드어 제목 접두사
    'ch': 'Titel: ', // 한글 주석: 스위스 독일어 제목 접두사
    'uk': 'Заголовок: ', // 한글 주석: 우크라이나어 제목 접두사
    'tr': 'Başlık: ', // 한글 주석: 터키어 제목 접두사
    'sv': 'Titel: ', // 수정: 스웨덴어 제목 접두사 추가
    'hi': 'शीर्षक: ', // 수정: 힌디어 제목 접두사 추가
    'id': 'Judul: ', // 수정: 인도네시아어 제목 접두사 추가
    'th': 'หัวเรื่อง: ', // 수정: 태국어 제목 접두사 추가
    'fi': 'Otsikko: ' // 수정: 핀란드어 제목 접두사 추가
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
    // 사이트 링크 수정
    switch(language){
        case 'ko':
            link = 'https://www.ai-and-poem.art/ko/'
            location.href = link;
            break;
        case 'en':
            link = 'https://www.ai-and-poem.art/en/'
            location.href = link;
            break;
        case 'ja':
            link = 'https://www.ai-and-poem.art/ja/'
            location.href = link;
            break;
        case 'zh':
            link = 'https://www.ai-and-poem.art/zh/'
            location.href = link;
            break;
        case 'es':
            link = 'https://www.ai-and-poem.art/es/'
            location.href = link;
            break;
        case 'fr':
            link = 'https://www.ai-and-poem.art/fr/'
            location.href = link;
            break;
        case 'ru':
            link = 'https://www.ai-and-poem.art/ru/'
            location.href = link;
            break;
        case 'it':
            link = 'https://www.ai-and-poem.art/it/'
            location.href = link;
            break;
        case 'de':
            link = 'https://www.ai-and-poem.art/de/'
            location.href = link;
            break;
        case 'ms':
            link = 'https://www.ai-and-poem.art/ms/' // 한글 주석: 말레이어 페이지 이동 처리
            location.href = link;
            break;
        case 'bn':
            link = 'https://www.ai-and-poem.art/bn/' // 한글 주석: 벵골어 페이지 이동 처리
            location.href = link;
            break;
        case 'vi':
            link = 'https://www.ai-and-poem.art/vi/' // 한글 주석: 베트남어 페이지 이동 처리
            location.href = link;
            break;
        case 'el':
            link = 'https://www.ai-and-poem.art/el/' // 한글 주석: 그리스어 페이지 이동 처리
            location.href = link;
            break;
        case 'pt':
            link = 'https://www.ai-and-poem.art/pt/' // 한글 주석: 포르투갈어 페이지 이동 처리
            location.href = link;
            break;
        case 'pl':
            link = 'https://www.ai-and-poem.art/pl/' // 한글 주석: 폴란드어 페이지 이동 처리
            location.href = link;
            break;
        case 'ch':
            link = 'https://www.ai-and-poem.art/ch/' // 한글 주석: 스위스 독일어 페이지 이동 처리
            location.href = link;
            break;
        case 'uk':
            link = 'https://www.ai-and-poem.art/uk/' // 한글 주석: 우크라이나어 페이지 이동 처리
            location.href = link;
            break;
        case 'tr':
            link = 'https://www.ai-and-poem.art/tr/' // 한글 주석: 터키어 페이지 이동 처리
            location.href = link;
            break;
        case 'sv':
            link = 'https://www.ai-and-poem.art/sv/' // 한글 주석: 스웨덴어 페이지 이동 처리
            location.href = link;
            break;
        case 'hi':
            link = 'https://www.ai-and-poem.art/hi/' // 한글 주석: 힌디어 페이지 이동 처리
            location.href = link;
            break;
        case 'id':
            link = 'https://www.ai-and-poem.art/id/' // 한글 주석: 인도네시아어 페이지 이동 처리
            location.href = link;
            break;
        case 'th':
            link = 'https://www.ai-and-poem.art/th/' // 한글 주석: 태국어 페이지 이동 처리
            location.href = link;
            break;
        case 'fi':
            link = 'https://www.ai-and-poem.art/fi/' // 한글 주석: 핀란드어 페이지 이동 처리
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
