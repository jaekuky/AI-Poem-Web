
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
};

// 오류 메시지 설정
const errorMessage = {
    'ko': '오류 발생: ',
    'en': 'An error occurred: ',
    'ja': 'エラーが発生しました: ',
    'zh': '发生错误: ',
    'es': 'Se produjo un error: ',
    'fr': 'Une erreur s\'est produite: ',
    'ru': 'Произошла ошибка: ',
    'it': 'Si è verificato un errore: ',
    'de': 'Es ist ein Fehler aufgetreten: '
};

// 제목 표시
const title ={
    'ko': '제목: ',
    'en': 'Title: ',
    'ja': 'タイトル: ',
    'zh': '标题: ',
    'es': 'Título: ',
    'fr': 'Titre: ',
    'ru': 'Заголовок',
    'it': 'Titolo',
    'de': 'Titel'
}

const languageSelect = document.getElementById('language');
const processingVideo = document.getElementById('processing-video');
const topicInput = document.getElementById('topic');
const poemDiv = document.getElementById('poem');
const poetryWritingButton = document.getElementById('poetry-writing-button');
const ttsButton = document.getElementById('tts-button');
const facebookButton = document.getElementById('facebook-button');
const kakaoButton = document.getElementById('kakao-button');
const xButton = document.getElementById('x-button');

document.getElementById('language').addEventListener('change', async function(event) {
    event.preventDefault();

    const language = languageSelect.value;
    switch(language){
        case 'ko':
            topicInput.placeholder = '시의 주제를 입력하세요';
            poetryWritingButton.innerText = '시 작성';
            ttsButton.innerText = '🔊 시 낭송';
            break;
        case 'en':
            topicInput.placeholder = 'Enter the topic of your poem';
            poetryWritingButton.innerText = 'Write a poem';
            ttsButton.innerText = '🔊 Recite a poem';
            break;
        case 'ja':
            topicInput.placeholder = '市のテーマを入力してください';
            poetryWritingButton.innerText = '詩の作成';
            ttsButton.innerText = '🔊 詩の朗読';
            break;
        case 'zh':
            topicInput.placeholder = '请输入你的诗的主题';
            poetryWritingButton.innerText = '诗歌写作';
            ttsButton.innerText = '🔊 朗诵诗歌';
            break;
        case 'es':
            topicInput.placeholder = 'Por favor ingresa el tema de tu poema';
            poetryWritingButton.innerText = 'Escritura de poesía';
            ttsButton.innerText = '🔊 Recitar poesía';
            break;
        case 'fr':
            topicInput.placeholder = 'Veuillez indiquer le sujet de votre poème';
            poetryWritingButton.innerText = 'Écriture de poésie';
            ttsButton.innerText = '🔊 Réciter de la poésie';
            break;
        case 'ru':
            topicInput.placeholder = 'Пожалуйста, укажите тему вашего стихотворения';
            poetryWritingButton.innerText = 'Написание стихов';
            ttsButton.innerText = '🔊 Чтение стихов';
            break;
        case 'it':
            topicInput.placeholder = 'Inserisci l\'argomento della tua poesia';
            poetryWritingButton.innerText = 'Scrittura di poesie';
            ttsButton.innerText = '🔊 Recitare poesie';
            break;
        case 'de':
            topicInput.placeholder = 'Bitte geben Sie das Thema Ihres Gedichts ein';
            poetryWritingButton.innerText = 'Gedichte schreiben';
            ttsButton.innerText = '🔊 Gedichte rezitieren';
            break;
        default:
            break;
    }
});

document.getElementById('poem-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const topic = topicInput.value.trim();
    const language = languageSelect.value;

    poemDiv.textContent = processingMessage[language] || processingMessage['ko'];

    // 비디오 재생
    processingVideo.play();
    // TTS 버튼 비활성화
    ttsButton.disabled = true;
    // Facebook 버튼 비활성화
    facebookButton.disabled = true;
    // Kakao 버튼 비활성화
    kakaoButton.disabled = true;
    // X 버튼 비활성화
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
            // Facebook 버튼 활성화
            facebookButton.disabled = false;
            // Kakao 버튼 활성화
            kakaoButton.disabled = false;
            // X 버튼 활성화
            xButton.disabled = false;

            // 선택한 언어의 TTS 설정
            const ttsLang = languageMap[language]?.ttsLang || 'ko-KR';

            // TTS 버튼 클릭 이벤트 추가
            ttsButton.onclick = () => {
                const utterance = new SpeechSynthesisUtterance(poem);
                utterance.lang = ttsLang;
                window.speechSynthesis.speak(utterance);

            };
            
            // 비디오 정지
            processingVideo.pause();
        } else {
            const errorData = await response.json();
            poemDiv.textContent = `${errorMessage[language]} ${errorData.error}`;
            
            // 비디오 정지
            processingVideo.pause();
        }
    } catch (error) {
        poemDiv.textContent = `${errorMessage[language]} ${error.message}`;
        
        // 비디오 정지
        processingVideo.pause();
    }
});

// Facebook 공유 버튼 함수 
document.getElementById('facebook-button').addEventListener('click', function() {
    const poem = poemDiv.textContent;

    if (!poem) {
        alert('먼저 시를 생성해주세요.');
        return;
    }

    // 클립보드에 텍스트 복사
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(poem).then(() => {
            console.log('Poem copied to clipboard successfully!');

            // Facebook 공유 다이얼로그 열기
            FB.ui({
                method: 'feed',
                href: window.location.href, // 현재 페이지 URL
                quote: poem, // 공유 다이얼로그에 시 내용 자동 삽입
            }, function(response) {
                if (response && !response.error_message) {
                    console.log('공유가 성공적으로 완료되었습니다.');
                } else {
                    console.log('공유에 실패했습니다.');
                }
            });

        }).catch(err => {
            console.error('클립보드 복사 중 오류 발생:', err);
        });
    } else {
        // Clipboard API를 지원하지 않는 브라우저를 위한 대안
        const textarea = document.createElement('textarea');
        textarea.value = poem;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            console.log('시가 클립보드에 복사되었습니다.');
            
            // Facebook 공유 다이얼로그 열기
            FB.ui({
                method: 'feed',
                href: window.location.href,
                quote: poem, // 공유 다이얼로그에 시 내용 자동 삽입
            }, function(response) {
                if (response && !response.error_message) {
                    alert('공유가 성공적으로 완료되었습니다.');
                } else {
                    alert('공유에 실패했습니다.');
                }
            });
        } catch (err) {
            console.error('클립보드 복사 중 오류 발생:', err);
            alert('시를 클립보드에 복사하지 못했습니다.');
        }
        document.body.removeChild(textarea);
    }

});

// Kakao 공유 버튼 함수 
document.getElementById('kakao-button').addEventListener('click', async function(event) {
});
// X 공유 버튼 함수 
document.getElementById('x-button').addEventListener('click', async function(event) {
});
