// 언어 코드와 이름 매핑
const languageMap = {
    'ko': { name: '한국어', ttsLang: 'ko-KR' },
    'en': { name: 'English', ttsLang: 'en-US' },
    'ja': { name: '日本語', ttsLang: 'ja-JP' },
    'zh': { name: '中文', ttsLang: 'zh-CN' },
    'es': { name: 'Español', ttsLang: 'es-ES' },
    'fr': { name: 'Français', ttsLang: 'fr-FR' },
    'ru': { name: 'русский', ttsLang: 'ru-RU' },
    'it': { name: 'Italiano', ttsLang: 'it-IT' },
    'de': { name: 'Deutsch', ttsLang: 'de-DE' },
};

document.getElementById('language').addEventListener('change', async function(event) {
    event.preventDefault();
    const topicInput = document.getElementById('topic');
    const poetryWritingButton = document.getElementById('poetry-writing-button');
    const ttsButton = document.getElementById('tts-button');

    const language = document.getElementById('language').value;
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

    const topic = document.getElementById('topic').value.trim();
    const language = document.getElementById('language').value;
    const poemDiv = document.getElementById('poem');
    const ttsButton = document.getElementById('tts-button');
    const shareButton = document.getElementById('share-button');
    
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

    poemDiv.textContent = processingMessage[language] || processingMessage['ko'];
    
    ttsButton.disabled = true;
    shareButton.disabled = true;

    try {
        const response = await fetch('http://localhost:3000/generate-poem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                topic: topic,
                language: language
            })
        });

        if (response.ok) {
            const data = await response.json();
            const poem = data.poem;
            poemDiv.textContent = poem;
            
            console.log("Poem: " + poem);

            // TTS 및 공유 버튼 활성화
            ttsButton.disabled = false;
            shareButton.disabled = false;

            // 선택한 언어의 TTS 설정
            const ttsLang = languageMap[language]?.ttsLang || 'ko-KR';

            // TTS 버튼 클릭 이벤트 추가
            ttsButton.onclick = () => {
                const utterance = new SpeechSynthesisUtterance(poem);
                utterance.lang = ttsLang;
                window.speechSynthesis.speak(utterance);
            };

            // 공유 버튼 클릭 이벤트 추가
            shareButton.onclick = () => {
                if (navigator.share) {
                    navigator.share({
                        title: topic,
                        text: poem,
                        url: window.location.href
                    }).catch((error) => console.log('공유 실패:', error));
                } else {
                    alert('이 브라우저에서는 공유 기능을 지원하지 않습니다.');
                }
            };
        } else {
            const errorData = await response.json();
            poemDiv.textContent = `오류 발생: ${errorData.error}`;
        }
    } catch (error) {
        poemDiv.textContent = `오류 발생: ${error.message}`;
    }
});