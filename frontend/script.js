
// 햄버거 메뉴 토글
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.header-right')) {
            navLinks.classList.remove('active');
        }
    });
}

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
    'ms': { name: 'Bahasa Melayu', ttsLang: 'ms-MY' }, // 수정: 말레이어 지원 추가
    'bn': { name: 'বাংলা', ttsLang: 'bn-IN' }, // 수정: 벵골어 지원 추가
    'vi': { name: 'Tiếng Việt', ttsLang: 'vi-VN' }, // 수정: 베트남어 지원 추가
    'el': { name: 'Ελληνικά', ttsLang: 'el-GR' }, // 수정: 그리스어 지원 추가
    'pt': { name: 'Português', ttsLang: 'pt-PT' }, // 수정: 포르투갈어 지원 추가
    'pl': { name: 'Polski', ttsLang: 'pl-PL' }, // 수정: 폴란드어 지원 추가
    'ch': { name: 'Schweizerdeutsch', ttsLang: 'de-CH' }, // 수정: 스위스 독일어 지원 추가
    'uk': { name: 'Українська', ttsLang: 'uk-UA' }, // 수정: 우크라이나어 지원 추가
    'tr': { name: 'Türkçe', ttsLang: 'tr-TR' }, // 수정: 터키어 지원 추가
    'sv': { name: 'Svenska', ttsLang: 'sv-SE' }, // 수정: 스웨덴어 지원 추가
    'hi': { name: 'हिन्दी', ttsLang: 'hi-IN' }, // 수정: 힌디어 지원 추가
    'id': { name: 'Bahasa Indonesia', ttsLang: 'id-ID' }, // 수정: 인도네시아어 지원 추가
    'th': { name: 'ไทย', ttsLang: 'th-TH' }, // 수정: 태국어 지원 추가
    'fi': { name: 'Suomi', ttsLang: 'fi-FI' }, // 수정: 핀란드어 지원 추가
    'ar': { name: 'العربية', ttsLang: 'ar-SA' }, // 수정: 아랍어 지원 추가
    'mn': { name: 'Монгол', ttsLang: 'mn-MN' }, // 수정: 몽골어 지원 추가
    'sw': { name: 'Kiswahili', ttsLang: 'sw-KE' }, // 수정: 스와힐리어 지원 추가
    'nl': { name: 'Nederlands', ttsLang: 'nl-NL' }, // 수정: 네덜란드어 지원 추가
    'no': { name: 'Norsk', ttsLang: 'nb-NO' }, // 수정: 노르웨이어 지원 추가
    'da': { name: 'Dansk', ttsLang: 'da-DK' }, // 수정: 덴마크어 지원 추가
    'fil': { name: 'Filipino', ttsLang: 'fil-PH' }, // 수정: 필리핀어 지원 추가
    'hu': { name: 'Magyar', ttsLang: 'hu-HU' } // 수정: 헝가리어 지원 추가
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
    'ms': 'Sedang menulis puisi. Sila tunggu sebentar.', // 수정: 말레이어 안내 문구
    'bn': 'আমি একটি কবিতা লিখছি। অনুগ্রহ করে একটু অপেক্ষা করুন।', // 수정: 벵골어 안내 문구
    'vi': 'Tôi đang viết bài thơ. Vui lòng đợi trong giây lát.', // 수정: 베트남어 안내 문구
    'el': 'Γράφω ένα ποίημα. Παρακαλώ περιμένετε λίγο.', // 수정: 그리스어 안내 문구
    'pt': 'Estou a escrever um poema. Aguarde um momento.', // 수정: 포르투갈어 안내 문구
    'pl': 'Piszę wiersz. Proszę chwilę poczekać.', // 수정: 폴란드어 안내 문구
    'ch': 'Ich bi grad am dichte. Bitte wart e chli.', // 수정: 스위스 독일어 안내 문구
    'uk': 'Я пишу вірш. Будь ласка, зачекайте трохи.', // 수정: 우크라이나어 안내 문구
    'tr': 'Bir şiir yazıyorum. Lütfen biraz bekleyin.', // 수정: 터키어 안내 문구
    'sv': 'Jag skriver en dikt. Vänta ett ögonblick, tack.', // 수정: 스웨덴어 안내 문구 추가
    'hi': 'मैं एक कविता लिख रहा हूँ। कृपया थोड़ी देर प्रतीक्षा करें।', // 수정: 힌디어 안내 문구 추가
    'id': 'Saya sedang menulis puisi. Mohon tunggu sebentar.', // 수정: 인도네시아어 안내 문구 추가
    'th': 'กำลังเขียนบทกวี กรุณารอสักครู่', // 수정: 태국어 안내 문구 추가
    'fi': 'Kirjoitan runoa. Odota hetki, kiitos.', // 수정: 핀란드어 안내 문구 추가
    'ar': 'أنا أكتب قصيدة. يرجى الانتظار لحظة.', // 수정: 아랍어 안내 문구 추가
    'mn': 'Би шүлэг бичиж байна. Түр хүлээнэ үү.', // 수정: 몽골어 안내 문구 추가
    'sw': 'Ninaandika shairi. Tafadhali subiri kidogo.', // 수정: 스와힐리어 안내 문구 추가
    'nl': 'Ik schrijf een gedicht. Een ogenblik geduld alstublieft.', // 수정: 네덜란드어 안내 문구 추가
    'no': 'Jeg skriver et dikt. Vennligst vent et øyeblikk.', // 수정: 노르웨이어 안내 문구 추가
    'da': 'Jeg skriver et digt. Vent venligst et øjeblik.', // 수정: 덴마크어 안내 문구 추가
    'fil': 'Sumusulat ako ng tula. Mangyaring maghintay sandali.', // 수정: 필리핀어 안내 문구 추가
    'hu': 'Verset írok. Kérem, várjon egy pillanatot.' // 수정: 헝가리어 안내 문구 추가
};

// 오류 메시지 설정
const errorMessage = {
    // 수정: 콜론을 제거해 오류 메시지가 "::"로 표시되지 않도록 조정
    'ko': '오류 발생',
    'en': 'An error occurred',
    'ja': 'エラーが発生しました',
    'zh': '发生错误',
    'es': 'Se produjo un error',
    'fr': 'Une erreur s\'est produite',
    'ru': 'Произошла ошибка',
    'it': 'Si è verificato un errore',
    'de': 'Es ist ein Fehler aufgetreten',
    'ms': 'Ralat berlaku', // 수정: 말레이어 오류 메시지
    'bn': 'একটি ত্রুটি ঘটেছে', // 수정: 벵골어 오류 메시지
    'vi': 'Đã xảy ra lỗi', // 수정: 베트남어 오류 메시지
    'el': 'Παρουσιάστηκε σφάλμα', // 수정: 그리스어 오류 메시지
    'pt': 'Ocorreu um erro', // 수정: 포르투갈어 오류 메시지
    'pl': 'Wystąpił błąd', // 수정: 폴란드어 오류 메시지
    'ch': 'Es isch e Fähler uufträtte', // 수정: 스위스 독일어 오류 메시지
    'uk': 'Сталася помилка', // 수정: 우크라이나어 오류 메시지
    'tr': 'Bir hata oluştu', // 수정: 터키어 오류 메시지
    'sv': 'Ett fel inträffade', // 수정: 스웨덴어 오류 메시지 추가
    'hi': 'एक त्रुटि हुई', // 수정: 힌디어 오류 메시지 추가
    'id': 'Terjadi kesalahan', // 수정: 인도네시아어 오류 메시지 추가
    'th': 'เกิดข้อผิดพลาด', // 수정: 태국어 오류 메시지 추가
    'fi': 'Tapahtui virhe', // 수정: 핀란드어 오류 메시지 추가
    'ar': 'حدث خطأ', // 수정: 아랍어 오류 메시지 추가
    'mn': 'Алдаа гарлаа', // 수정: 몽골어 오류 메시지 추가
    'sw': 'Hitilafu imetokea', // 수정: 스와힐리어 오류 메시지 추가
    'nl': 'Er is een fout opgetreden', // 수정: 네덜란드어 오류 메시지 추가
    'no': 'En feil oppstod', // 수정: 노르웨이어 오류 메시지 추가
    'da': 'Der opstod en fejl', // 수정: 덴마크어 오류 메시지 추가
    'fil': 'May naganap na error', // 수정: 필리핀어 오류 메시지 추가
    'hu': 'Hiba történt' // 수정: 헝가리어 오류 메시지 추가
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
    'fi': 'Anna runosi aihe.', // 수정: 핀란드어 검증 메시지 추가
    'ar': 'الرجاء إدخال موضوع قصيدتك.', // 수정: 아랍어 검증 메시지 추가
    'mn': 'Шүлгийнхээ сэдвийг оруулна уу.', // 수정: 몽골어 검증 메시지 추가
    'sw': 'Tafadhali ingiza mada ya shairi lako.', // 수정: 스와힐리어 검증 메시지 추가
    'nl': 'Voer het onderwerp van uw gedicht in.', // 수정: 네덜란드어 검증 메시지 추가
    'no': 'Vennligst skriv inn temaet for diktet ditt.', // 수정: 노르웨이어 검증 메시지 추가
    'da': 'Indtast venligst emnet for dit digt.', // 수정: 덴마크어 검증 메시지 추가
    'fil': 'Mangyaring ilagay ang paksa ng iyong tula.', // 수정: 필리핀어 검증 메시지 추가
    'hu': 'Kérjük, adja meg a vers témáját.' // 수정: 헝가리어 검증 메시지 추가
};

// 쿠키 동의 배너 메시지 및 번역 (31개 언어 전체 번역)
const consentMessageMap = {
    'ko': {
        message: 'AI & Poem은 서비스 제공과 광고 최적화를 위해 쿠키를 사용합니다.',
        acceptAll: '모두 수락',
        essentialOnly: '필수만 수락',
        settings: '설정',
        privacyLink: '개인정보처리방침',
        settingsTitle: '쿠키 설정',
        essential: '필수 쿠키',
        essentialDesc: '서비스 운영에 반드시 필요한 쿠키입니다. 비활성화할 수 없습니다.',
        analytics: '분석 쿠키',
        analyticsDesc: '서비스 이용 현황 파악을 위한 쿠키입니다.',
        advertising: '광고 쿠키',
        advertisingDesc: '맞춤 광고 제공을 위한 쿠키입니다.',
        alwaysOn: '항상 켜짐',
        save: '설정 저장',
    },
    'en': {
        message: 'AI & Poem uses cookies for service delivery and ad optimization.',
        acceptAll: 'Accept All',
        essentialOnly: 'Essential Only',
        settings: 'Settings',
        privacyLink: 'Privacy Policy',
        settingsTitle: 'Cookie Settings',
        essential: 'Essential Cookies',
        essentialDesc: 'These cookies are required for the service to operate. They cannot be disabled.',
        analytics: 'Analytics Cookies',
        analyticsDesc: 'These cookies help us understand how visitors use our service.',
        advertising: 'Advertising Cookies',
        advertisingDesc: 'These cookies are used to provide personalized advertisements.',
        alwaysOn: 'Always On',
        save: 'Save Settings',
    },
    'ja': {
        message: 'AI & Poemはサービス提供と広告最適化のためにクッキーを使用します。',
        acceptAll: 'すべて受け入れる',
        essentialOnly: '必須のみ',
        settings: '設定',
        privacyLink: 'プライバシーポリシー',
        settingsTitle: 'Cookieの設定',
        essential: '必須Cookie',
        essentialDesc: 'サービス運営に必要不可欠なCookieです。無効にはできません。',
        analytics: '分析Cookie',
        analyticsDesc: 'サービス利用状況の把握に使用するCookieです。',
        advertising: '広告Cookie',
        advertisingDesc: 'パーソナライズされた広告の提供に使用するCookieです。',
        alwaysOn: '常にオン',
        save: '設定を保存',
    },
    'zh': {
        message: 'AI & Poem 使用 Cookie 来提供服务并优化广告。',
        acceptAll: '全部接受',
        essentialOnly: '仅必要',
        settings: '设置',
        privacyLink: '隐私政策',
        settingsTitle: 'Cookie 设置',
        essential: '必要 Cookie',
        essentialDesc: '这些 Cookie 是服务运行所必需的，无法禁用。',
        analytics: '分析 Cookie',
        analyticsDesc: '这些 Cookie 帮助我们了解访客如何使用服务。',
        advertising: '广告 Cookie',
        advertisingDesc: '这些 Cookie 用于提供个性化广告。',
        alwaysOn: '始终开启',
        save: '保存设置',
    },
    'es': {
        message: 'AI & Poem usa cookies para ofrecer el servicio y optimizar la publicidad.',
        acceptAll: 'Aceptar todo',
        essentialOnly: 'Solo esenciales',
        settings: 'Configuración',
        privacyLink: 'Política de privacidad',
        settingsTitle: 'Configuración de cookies',
        essential: 'Cookies esenciales',
        essentialDesc: 'Estas cookies son necesarias para el funcionamiento del servicio y no se pueden desactivar.',
        analytics: 'Cookies de análisis',
        analyticsDesc: 'Estas cookies nos ayudan a entender cómo los visitantes usan el servicio.',
        advertising: 'Cookies publicitarias',
        advertisingDesc: 'Estas cookies se usan para mostrar anuncios personalizados.',
        alwaysOn: 'Siempre activo',
        save: 'Guardar configuración',
    },
    'fr': {
        message: 'AI & Poem utilise des cookies pour fournir le service et optimiser la publicité.',
        acceptAll: 'Tout accepter',
        essentialOnly: 'Essentiels seulement',
        settings: 'Paramètres',
        privacyLink: 'Politique de confidentialité',
        settingsTitle: 'Paramètres des cookies',
        essential: 'Cookies essentiels',
        essentialDesc: 'Ces cookies sont indispensables au fonctionnement du service. Ils ne peuvent pas être désactivés.',
        analytics: 'Cookies analytiques',
        analyticsDesc: 'Ces cookies nous aident à comprendre comment les visiteurs utilisent le service.',
        advertising: 'Cookies publicitaires',
        advertisingDesc: 'Ces cookies sont utilisés pour fournir des publicités personnalisées.',
        alwaysOn: 'Toujours actif',
        save: 'Enregistrer les paramètres',
    },
    'de': {
        message: 'AI & Poem verwendet Cookies für den Dienst und zur Optimierung von Werbung.',
        acceptAll: 'Alle akzeptieren',
        essentialOnly: 'Nur notwendige',
        settings: 'Einstellungen',
        privacyLink: 'Datenschutzerklärung',
        settingsTitle: 'Cookie-Einstellungen',
        essential: 'Notwendige Cookies',
        essentialDesc: 'Diese Cookies sind für den Betrieb des Dienstes erforderlich und können nicht deaktiviert werden.',
        analytics: 'Analyse-Cookies',
        analyticsDesc: 'Diese Cookies helfen uns zu verstehen, wie Besucher den Dienst nutzen.',
        advertising: 'Werbe-Cookies',
        advertisingDesc: 'Diese Cookies dienen der Bereitstellung personalisierter Werbung.',
        alwaysOn: 'Immer aktiv',
        save: 'Einstellungen speichern',
    },
    'it': {
        message: 'AI & Poem utilizza cookie per offrire il servizio e ottimizzare la pubblicità.',
        acceptAll: 'Accetta tutto',
        essentialOnly: 'Solo essenziali',
        settings: 'Impostazioni',
        privacyLink: 'Informativa sulla privacy',
        settingsTitle: 'Impostazioni dei cookie',
        essential: 'Cookie essenziali',
        essentialDesc: 'Questi cookie sono necessari al funzionamento del servizio e non possono essere disattivati.',
        analytics: 'Cookie analitici',
        analyticsDesc: 'Questi cookie ci aiutano a capire come i visitatori utilizzano il servizio.',
        advertising: 'Cookie pubblicitari',
        advertisingDesc: 'Questi cookie vengono utilizzati per mostrare annunci personalizzati.',
        alwaysOn: 'Sempre attivo',
        save: 'Salva impostazioni',
    },
    'pt': {
        message: 'AI & Poem utiliza cookies para fornecer o serviço e otimizar anúncios.',
        acceptAll: 'Aceitar tudo',
        essentialOnly: 'Apenas essenciais',
        settings: 'Configurações',
        privacyLink: 'Política de privacidade',
        settingsTitle: 'Configurações de cookies',
        essential: 'Cookies essenciais',
        essentialDesc: 'Estes cookies são necessários para o funcionamento do serviço e não podem ser desativados.',
        analytics: 'Cookies de análise',
        analyticsDesc: 'Estes cookies nos ajudam a entender como os visitantes usam o serviço.',
        advertising: 'Cookies de publicidade',
        advertisingDesc: 'Estes cookies são usados para exibir anúncios personalizados.',
        alwaysOn: 'Sempre ativo',
        save: 'Salvar configurações',
    },
    'pl': {
        message: 'AI & Poem używa plików cookie do świadczenia usług i optymalizacji reklam.',
        acceptAll: 'Zaakceptuj wszystkie',
        essentialOnly: 'Tylko niezbędne',
        settings: 'Ustawienia',
        privacyLink: 'Polityka prywatności',
        settingsTitle: 'Ustawienia plików cookie',
        essential: 'Niezbędne pliki cookie',
        essentialDesc: 'Te pliki cookie są wymagane do działania serwisu i nie można ich wyłączyć.',
        analytics: 'Analityczne pliki cookie',
        analyticsDesc: 'Te pliki cookie pomagają nam zrozumieć, jak odwiedzający korzystają z serwisu.',
        advertising: 'Reklamowe pliki cookie',
        advertisingDesc: 'Te pliki cookie służą do wyświetlania spersonalizowanych reklam.',
        alwaysOn: 'Zawsze włączone',
        save: 'Zapisz ustawienia',
    },
    'ru': {
        message: 'AI & Poem использует cookie для работы сервиса и оптимизации рекламы.',
        acceptAll: 'Принять все',
        essentialOnly: 'Только необходимые',
        settings: 'Настройки',
        privacyLink: 'Политика конфиденциальности',
        settingsTitle: 'Настройки cookie',
        essential: 'Необходимые cookie',
        essentialDesc: 'Эти cookie необходимы для работы сервиса и не могут быть отключены.',
        analytics: 'Аналитические cookie',
        analyticsDesc: 'Эти cookie помогают нам понять, как посетители используют сервис.',
        advertising: 'Рекламные cookie',
        advertisingDesc: 'Эти cookie используются для показа персонализированной рекламы.',
        alwaysOn: 'Всегда включено',
        save: 'Сохранить настройки',
    },
    'uk': {
        message: 'AI & Poem використовує файли cookie для надання послуги та оптимізації реклами.',
        acceptAll: 'Прийняти всі',
        essentialOnly: 'Лише необхідні',
        settings: 'Налаштування',
        privacyLink: 'Політика конфіденційності',
        settingsTitle: 'Налаштування cookie',
        essential: 'Необхідні cookie',
        essentialDesc: 'Ці cookie необхідні для роботи сервісу, їх не можна вимкнути.',
        analytics: 'Аналітичні cookie',
        analyticsDesc: 'Ці cookie допомагають нам зрозуміти, як відвідувачі користуються сервісом.',
        advertising: 'Рекламні cookie',
        advertisingDesc: 'Ці cookie використовуються для показу персоналізованої реклами.',
        alwaysOn: 'Завжди увімкнено',
        save: 'Зберегти налаштування',
    },
    'tr': {
        message: 'AI & Poem hizmet sunumu ve reklam optimizasyonu için çerezler kullanır.',
        acceptAll: 'Tümünü kabul et',
        essentialOnly: 'Yalnızca gerekli',
        settings: 'Ayarlar',
        privacyLink: 'Gizlilik Politikası',
        settingsTitle: 'Çerez ayarları',
        essential: 'Gerekli çerezler',
        essentialDesc: 'Bu çerezler hizmetin çalışması için gereklidir ve devre dışı bırakılamaz.',
        analytics: 'Analiz çerezleri',
        analyticsDesc: 'Bu çerezler ziyaretçilerin hizmeti nasıl kullandığını anlamamıza yardımcı olur.',
        advertising: 'Reklam çerezleri',
        advertisingDesc: 'Bu çerezler kişiselleştirilmiş reklamlar sunmak için kullanılır.',
        alwaysOn: 'Her zaman açık',
        save: 'Ayarları kaydet',
    },
    'sv': {
        message: 'AI & Poem använder cookies för tjänsten och annonsoptimering.',
        acceptAll: 'Acceptera alla',
        essentialOnly: 'Endast nödvändiga',
        settings: 'Inställningar',
        privacyLink: 'Integritetspolicy',
        settingsTitle: 'Cookie-inställningar',
        essential: 'Nödvändiga cookies',
        essentialDesc: 'Dessa cookies krävs för att tjänsten ska fungera och kan inte inaktiveras.',
        analytics: 'Analyscookies',
        analyticsDesc: 'Dessa cookies hjälper oss att förstå hur besökare använder tjänsten.',
        advertising: 'Reklamcookies',
        advertisingDesc: 'Dessa cookies används för att visa personligt anpassade annonser.',
        alwaysOn: 'Alltid på',
        save: 'Spara inställningar',
    },
    'hi': {
        message: 'AI & Poem सेवा प्रदान और विज्ञापन अनुकूलन के लिए कुकीज़ का उपयोग करता है।',
        acceptAll: 'सभी स्वीकार करें',
        essentialOnly: 'केवल आवश्यक',
        settings: 'सेटिंग्स',
        privacyLink: 'गोपनीयता नीति',
        settingsTitle: 'कुकी सेटिंग्स',
        essential: 'आवश्यक कुकीज़',
        essentialDesc: 'ये कुकीज़ सेवा के संचालन के लिए आवश्यक हैं और इन्हें बंद नहीं किया जा सकता।',
        analytics: 'विश्लेषण कुकीज़',
        analyticsDesc: 'ये कुकीज़ हमें यह समझने में मदद करती हैं कि आगंतुक सेवा का उपयोग कैसे करते हैं।',
        advertising: 'विज्ञापन कुकीज़',
        advertisingDesc: 'ये कुकीज़ वैयक्तिकृत विज्ञापन दिखाने के लिए उपयोग की जाती हैं।',
        alwaysOn: 'हमेशा चालू',
        save: 'सेटिंग्स सहेजें',
    },
    'id': {
        message: 'AI & Poem menggunakan cookie untuk layanan dan optimasi iklan.',
        acceptAll: 'Terima semua',
        essentialOnly: 'Hanya yang penting',
        settings: 'Pengaturan',
        privacyLink: 'Kebijakan Privasi',
        settingsTitle: 'Pengaturan cookie',
        essential: 'Cookie penting',
        essentialDesc: 'Cookie ini diperlukan agar layanan dapat beroperasi dan tidak dapat dinonaktifkan.',
        analytics: 'Cookie analitik',
        analyticsDesc: 'Cookie ini membantu kami memahami bagaimana pengunjung menggunakan layanan.',
        advertising: 'Cookie iklan',
        advertisingDesc: 'Cookie ini digunakan untuk menampilkan iklan yang dipersonalisasi.',
        alwaysOn: 'Selalu aktif',
        save: 'Simpan pengaturan',
    },
    'th': {
        message: 'AI & Poem ใช้คุกกี้เพื่อให้บริการและปรับโฆษณาให้เหมาะสม.',
        acceptAll: 'ยอมรับทั้งหมด',
        essentialOnly: 'เฉพาะที่จำเป็น',
        settings: 'การตั้งค่า',
        privacyLink: 'นโยบายความเป็นส่วนตัว',
        settingsTitle: 'การตั้งค่าคุกกี้',
        essential: 'คุกกี้ที่จำเป็น',
        essentialDesc: 'คุกกี้เหล่านี้จำเป็นต่อการทำงานของบริการ ไม่สามารถปิดใช้งานได้',
        analytics: 'คุกกี้วิเคราะห์',
        analyticsDesc: 'คุกกี้เหล่านี้ช่วยให้เราเข้าใจว่าผู้เข้าชมใช้บริการอย่างไร',
        advertising: 'คุกกี้โฆษณา',
        advertisingDesc: 'คุกกี้เหล่านี้ใช้เพื่อแสดงโฆษณาที่ปรับให้เหมาะกับคุณ',
        alwaysOn: 'เปิดตลอด',
        save: 'บันทึกการตั้งค่า',
    },
    'fi': {
        message: 'AI & Poem käyttää evästeitä palvelun ja mainosten optimointiin.',
        acceptAll: 'Hyväksy kaikki',
        essentialOnly: 'Vain välttämättömät',
        settings: 'Asetukset',
        privacyLink: 'Tietosuojakäytäntö',
        settingsTitle: 'Evästeasetukset',
        essential: 'Välttämättömät evästeet',
        essentialDesc: 'Nämä evästeet ovat välttämättömiä palvelun toiminnalle, eikä niitä voi poistaa käytöstä.',
        analytics: 'Analytiikkaevästeet',
        analyticsDesc: 'Nämä evästeet auttavat meitä ymmärtämään, miten kävijät käyttävät palvelua.',
        advertising: 'Mainosevästeet',
        advertisingDesc: 'Näitä evästeitä käytetään personoitujen mainosten näyttämiseen.',
        alwaysOn: 'Aina käytössä',
        save: 'Tallenna asetukset',
    },
    'bn': {
        message: 'AI & Poem পরিষেবা ও বিজ্ঞাপন উন্নত করতে কুকি ব্যবহার করে।',
        acceptAll: 'সব গ্রহণ করুন',
        essentialOnly: 'শুধু প্রয়োজনীয়',
        settings: 'সেটিংস',
        privacyLink: 'গোপনীয়তা নীতি',
        settingsTitle: 'কুকি সেটিংস',
        essential: 'প্রয়োজনীয় কুকি',
        essentialDesc: 'এই কুকিগুলি পরিষেবা চালানোর জন্য অপরিহার্য, বন্ধ করা যায় না।',
        analytics: 'বিশ্লেষণ কুকি',
        analyticsDesc: 'এই কুকিগুলি দর্শকরা কীভাবে পরিষেবা ব্যবহার করেন তা বুঝতে সাহায্য করে।',
        advertising: 'বিজ্ঞাপন কুকি',
        advertisingDesc: 'এই কুকিগুলি ব্যক্তিগতকৃত বিজ্ঞাপন দেখাতে ব্যবহৃত হয়।',
        alwaysOn: 'সবসময় চালু',
        save: 'সেটিংস সংরক্ষণ করুন',
    },
    'ms': {
        message: 'AI & Poem menggunakan kuki untuk perkhidmatan dan pengoptimuman iklan.',
        acceptAll: 'Terima semua',
        essentialOnly: 'Perlu sahaja',
        settings: 'Tetapan',
        privacyLink: 'Dasar Privasi',
        settingsTitle: 'Tetapan kuki',
        essential: 'Kuki perlu',
        essentialDesc: 'Kuki ini diperlukan untuk operasi perkhidmatan dan tidak boleh dimatikan.',
        analytics: 'Kuki analitik',
        analyticsDesc: 'Kuki ini membantu kami memahami cara pelawat menggunakan perkhidmatan.',
        advertising: 'Kuki iklan',
        advertisingDesc: 'Kuki ini digunakan untuk memaparkan iklan yang diperibadikan.',
        alwaysOn: 'Sentiasa aktif',
        save: 'Simpan tetapan',
    },
    'el': {
        message: 'Το AI & Poem χρησιμοποιεί cookies για την υπηρεσία και τη βελτιστοποίηση διαφημίσεων.',
        acceptAll: 'Αποδοχή όλων',
        essentialOnly: 'Μόνο τα απαραίτητα',
        settings: 'Ρυθμίσεις',
        privacyLink: 'Πολιτική απορρήτου',
        settingsTitle: 'Ρυθμίσεις cookies',
        essential: 'Απαραίτητα cookies',
        essentialDesc: 'Αυτά τα cookies είναι απαραίτητα για τη λειτουργία της υπηρεσίας και δεν μπορούν να απενεργοποιηθούν.',
        analytics: 'Cookies ανάλυσης',
        analyticsDesc: 'Αυτά τα cookies μάς βοηθούν να κατανοήσουμε πώς οι επισκέπτες χρησιμοποιούν την υπηρεσία.',
        advertising: 'Διαφημιστικά cookies',
        advertisingDesc: 'Αυτά τα cookies χρησιμοποιούνται για την προβολή εξατομικευμένων διαφημίσεων.',
        alwaysOn: 'Πάντα ενεργό',
        save: 'Αποθήκευση ρυθμίσεων',
    },
    'vi': {
        message: 'AI & Poem sử dụng cookie để cung cấp dịch vụ và tối ưu hoá quảng cáo.',
        acceptAll: 'Chấp nhận tất cả',
        essentialOnly: 'Chỉ cần thiết',
        settings: 'Cài đặt',
        privacyLink: 'Chính sách bảo mật',
        settingsTitle: 'Cài đặt cookie',
        essential: 'Cookie cần thiết',
        essentialDesc: 'Các cookie này cần thiết cho hoạt động của dịch vụ và không thể tắt.',
        analytics: 'Cookie phân tích',
        analyticsDesc: 'Các cookie này giúp chúng tôi hiểu cách khách truy cập sử dụng dịch vụ.',
        advertising: 'Cookie quảng cáo',
        advertisingDesc: 'Các cookie này được dùng để hiển thị quảng cáo được cá nhân hoá.',
        alwaysOn: 'Luôn bật',
        save: 'Lưu cài đặt',
    },
    'ch': {
        message: 'AI & Poem bruuchet Cookies für d Dienstleistig und d Werbig.',
        acceptAll: 'Alle akzeptieren',
        essentialOnly: 'Nur notwendige',
        settings: 'Einstellungen',
        privacyLink: 'Datenschutzerklärung',
        settingsTitle: 'Cookie-Einstellungen',
        essential: 'Notwendige Cookies',
        essentialDesc: 'Diese Cookies sind für den Betrieb des Dienstes erforderlich und können nicht deaktiviert werden.',
        analytics: 'Analyse-Cookies',
        analyticsDesc: 'Diese Cookies helfen uns zu verstehen, wie Besucher den Dienst nutzen.',
        advertising: 'Werbe-Cookies',
        advertisingDesc: 'Diese Cookies dienen der Bereitstellung personalisierter Werbung.',
        alwaysOn: 'Immer aktiv',
        save: 'Einstellungen speichern',
    },
    'ar': {
        message: 'يستخدم AI & Poem ملفات تعريف الارتباط لتقديم الخدمة وتحسين الإعلانات.',
        acceptAll: 'قبول الكل',
        essentialOnly: 'الضرورية فقط',
        settings: 'الإعدادات',
        privacyLink: 'سياسة الخصوصية',
        settingsTitle: 'إعدادات ملفات تعريف الارتباط',
        essential: 'ملفات تعريف الارتباط الضرورية',
        essentialDesc: 'هذه الملفات ضرورية لتشغيل الخدمة ولا يمكن تعطيلها.',
        analytics: 'ملفات تعريف الارتباط التحليلية',
        analyticsDesc: 'تساعدنا هذه الملفات على فهم كيفية استخدام الزوار للخدمة.',
        advertising: 'ملفات تعريف الارتباط الإعلانية',
        advertisingDesc: 'تُستخدم هذه الملفات لعرض إعلانات مخصصة.',
        alwaysOn: 'مفعّل دائماً',
        save: 'حفظ الإعدادات',
    },
    'mn': {
        message: 'AI & Poem нь үйлчилгээ үзүүлэх болон сурталчилгааг оновчтой болгохын тулд күүки ашигладаг.',
        acceptAll: 'Бүгдийг зөвшөөрөх',
        essentialOnly: 'Зөвхөн шаардлагатай',
        settings: 'Тохиргоо',
        privacyLink: 'Нууцлалын бодлого',
        settingsTitle: 'Күүкийн тохиргоо',
        essential: 'Шаардлагатай күүки',
        essentialDesc: 'Эдгээр күүки нь үйлчилгээний ажиллагаанд зайлшгүй шаардлагатай тул идэвхгүй болгох боломжгүй.',
        analytics: 'Аналитик күүки',
        analyticsDesc: 'Эдгээр күүки нь зочид үйлчилгээг хэрхэн ашиглаж байгааг ойлгоход тусалдаг.',
        advertising: 'Сурталчилгааны күүки',
        advertisingDesc: 'Эдгээр күүки нь хувийн болгосон сурталчилгаа үзүүлэхэд ашиглагддаг.',
        alwaysOn: 'Үргэлж асаалттай',
        save: 'Тохиргоог хадгалах',
    },
    'sw': {
        message: 'AI & Poem hutumia vidakuzi kwa utoaji wa huduma na uboreshaji wa matangazo.',
        acceptAll: 'Kubali zote',
        essentialOnly: 'Muhimu pekee',
        settings: 'Mipangilio',
        privacyLink: 'Sera ya Faragha',
        settingsTitle: 'Mipangilio ya vidakuzi',
        essential: 'Vidakuzi muhimu',
        essentialDesc: 'Vidakuzi hivi vinahitajika ili huduma ifanye kazi na haviwezi kuzimwa.',
        analytics: 'Vidakuzi vya uchambuzi',
        analyticsDesc: 'Vidakuzi hivi hutusaidia kuelewa jinsi wageni wanavyotumia huduma.',
        advertising: 'Vidakuzi vya matangazo',
        advertisingDesc: 'Vidakuzi hivi hutumika kuonyesha matangazo ya kibinafsi.',
        alwaysOn: 'Imewashwa kila wakati',
        save: 'Hifadhi mipangilio',
    },
    'nl': {
        message: 'AI & Poem gebruikt cookies voor dienstverlening en advertentieoptimalisatie.',
        acceptAll: 'Alles accepteren',
        essentialOnly: 'Alleen noodzakelijke',
        settings: 'Instellingen',
        privacyLink: 'Privacybeleid',
        settingsTitle: 'Cookie-instellingen',
        essential: 'Noodzakelijke cookies',
        essentialDesc: 'Deze cookies zijn nodig voor de werking van de dienst en kunnen niet worden uitgeschakeld.',
        analytics: 'Analytische cookies',
        analyticsDesc: 'Deze cookies helpen ons te begrijpen hoe bezoekers de dienst gebruiken.',
        advertising: 'Advertentiecookies',
        advertisingDesc: 'Deze cookies worden gebruikt om gepersonaliseerde advertenties te tonen.',
        alwaysOn: 'Altijd aan',
        save: 'Instellingen opslaan',
    },
    'no': {
        message: 'AI & Poem bruker informasjonskapsler for tjenestelevering og annonseoptimalisering.',
        acceptAll: 'Godta alle',
        essentialOnly: 'Kun nødvendige',
        settings: 'Innstillinger',
        privacyLink: 'Personvernerklæring',
        settingsTitle: 'Innstillinger for informasjonskapsler',
        essential: 'Nødvendige informasjonskapsler',
        essentialDesc: 'Disse informasjonskapslene kreves for at tjenesten skal fungere og kan ikke slås av.',
        analytics: 'Analyse-informasjonskapsler',
        analyticsDesc: 'Disse informasjonskapslene hjelper oss å forstå hvordan besøkende bruker tjenesten.',
        advertising: 'Reklame-informasjonskapsler',
        advertisingDesc: 'Disse informasjonskapslene brukes til å vise personlig tilpassede annonser.',
        alwaysOn: 'Alltid på',
        save: 'Lagre innstillinger',
    },
    'da': {
        message: 'AI & Poem bruger cookies til levering af tjenester og annonceoptimering.',
        acceptAll: 'Accepter alle',
        essentialOnly: 'Kun nødvendige',
        settings: 'Indstillinger',
        privacyLink: 'Privatlivspolitik',
        settingsTitle: 'Cookieindstillinger',
        essential: 'Nødvendige cookies',
        essentialDesc: 'Disse cookies er nødvendige for tjenestens drift og kan ikke slås fra.',
        analytics: 'Analysecookies',
        analyticsDesc: 'Disse cookies hjælper os med at forstå, hvordan besøgende bruger tjenesten.',
        advertising: 'Reklamecookies',
        advertisingDesc: 'Disse cookies bruges til at vise personaliserede annoncer.',
        alwaysOn: 'Altid slået til',
        save: 'Gem indstillinger',
    },
    'fil': {
        message: 'Gumagamit ang AI & Poem ng cookies para sa paghahatid ng serbisyo at pag-optimize ng ad.',
        acceptAll: 'Tanggapin lahat',
        essentialOnly: 'Mahalaga lamang',
        settings: 'Mga Setting',
        privacyLink: 'Patakaran sa Privacy',
        settingsTitle: 'Mga setting ng cookie',
        essential: 'Mahahalagang cookie',
        essentialDesc: 'Kinakailangan ang mga cookie na ito para gumana ang serbisyo at hindi maaaring i-disable.',
        analytics: 'Analytics na cookie',
        analyticsDesc: 'Tumutulong ang mga cookie na ito para maunawaan namin kung paano ginagamit ng mga bisita ang serbisyo.',
        advertising: 'Advertising na cookie',
        advertisingDesc: 'Ginagamit ang mga cookie na ito para magpakita ng personalized na mga ad.',
        alwaysOn: 'Palaging naka-on',
        save: 'I-save ang mga setting',
    },
    'hu': {
        message: 'Az AI & Poem sütiket használ a szolgáltatás nyújtásához és a hirdetések optimalizálásához.',
        acceptAll: 'Összes elfogadása',
        essentialOnly: 'Csak a szükségesek',
        settings: 'Beállítások',
        privacyLink: 'Adatvédelmi irányelvek',
        settingsTitle: 'Sütibeállítások',
        essential: 'Szükséges sütik',
        essentialDesc: 'Ezek a sütik a szolgáltatás működéséhez szükségesek, nem kapcsolhatók ki.',
        analytics: 'Elemzési sütik',
        analyticsDesc: 'Ezek a sütik segítenek megérteni, hogyan használják a látogatók a szolgáltatást.',
        advertising: 'Hirdetési sütik',
        advertisingDesc: 'Ezeket a sütiket személyre szabott hirdetések megjelenítésére használjuk.',
        alwaysOn: 'Mindig bekapcsolva',
        save: 'Beállítások mentése',
    },
};

// 수정: 시 형식 셀렉터 옵션 (페이지 언어별 차등). ko/en은 5종, 그 외는 보편 3종.
const formOptionsMap = {
    'ko':  [{value:'auto',label:'자동'},{value:'free-verse',label:'자유시'},{value:'sijo',label:'시조'},{value:'haiku',label:'하이쿠'},{value:'n-haengsi',label:'N행시'}],
    'en':  [{value:'auto',label:'Auto'},{value:'free-verse',label:'Free verse'},{value:'haiku',label:'Haiku'},{value:'sonnet',label:'Sonnet'},{value:'acrostic',label:'Acrostic'}],
    'ja':  [{value:'auto',label:'自動'},{value:'free-verse',label:'自由詩'},{value:'haiku',label:'俳句'}],
    'zh':  [{value:'auto',label:'自动'},{value:'free-verse',label:'自由诗'},{value:'haiku',label:'俳句'}],
    'es':  [{value:'auto',label:'Automático'},{value:'free-verse',label:'Verso libre'},{value:'haiku',label:'Haiku'}],
    'fr':  [{value:'auto',label:'Automatique'},{value:'free-verse',label:'Vers libre'},{value:'haiku',label:'Haïku'}],
    'ru':  [{value:'auto',label:'Авто'},{value:'free-verse',label:'Верлибр'},{value:'haiku',label:'Хайку'}],
    'it':  [{value:'auto',label:'Automatico'},{value:'free-verse',label:'Verso libero'},{value:'haiku',label:'Haiku'}],
    'de':  [{value:'auto',label:'Automatisch'},{value:'free-verse',label:'Freie Verse'},{value:'haiku',label:'Haiku'}],
    'ms':  [{value:'auto',label:'Auto'},{value:'free-verse',label:'Sajak bebas'},{value:'haiku',label:'Haiku'}],
    'bn':  [{value:'auto',label:'স্বয়ংক্রিয়'},{value:'free-verse',label:'মুক্ত ছন্দ'},{value:'haiku',label:'হাইকু'}],
    'vi':  [{value:'auto',label:'Tự động'},{value:'free-verse',label:'Thơ tự do'},{value:'haiku',label:'Haiku'}],
    'el':  [{value:'auto',label:'Αυτόματο'},{value:'free-verse',label:'Ελεύθερος στίχος'},{value:'haiku',label:'Χαϊκού'}],
    'pt':  [{value:'auto',label:'Automático'},{value:'free-verse',label:'Verso livre'},{value:'haiku',label:'Haiku'}],
    'pl':  [{value:'auto',label:'Auto'},{value:'free-verse',label:'Wiersz wolny'},{value:'haiku',label:'Haiku'}],
    'ch':  [{value:'auto',label:'Automatisch'},{value:'free-verse',label:'Freii Värs'},{value:'haiku',label:'Haiku'}],
    'uk':  [{value:'auto',label:'Авто'},{value:'free-verse',label:'Верлібр'},{value:'haiku',label:'Хайку'}],
    'tr':  [{value:'auto',label:'Otomatik'},{value:'free-verse',label:'Serbest şiir'},{value:'haiku',label:'Haiku'}],
    'sv':  [{value:'auto',label:'Auto'},{value:'free-verse',label:'Fri vers'},{value:'haiku',label:'Haiku'}],
    'hi':  [{value:'auto',label:'स्वचालित'},{value:'free-verse',label:'मुक्त छंद'},{value:'haiku',label:'हाइकू'}],
    'id':  [{value:'auto',label:'Otomatis'},{value:'free-verse',label:'Sajak bebas'},{value:'haiku',label:'Haiku'}],
    'th':  [{value:'auto',label:'อัตโนมัติ'},{value:'free-verse',label:'กลอนเปล่า'},{value:'haiku',label:'ไฮกุ'}],
    'fi':  [{value:'auto',label:'Automaattinen'},{value:'free-verse',label:'Vapaa runo'},{value:'haiku',label:'Haiku'}],
    'ar':  [{value:'auto',label:'تلقائي'},{value:'free-verse',label:'شعر حر'},{value:'haiku',label:'هايكو'}],
    'mn':  [{value:'auto',label:'Автомат'},{value:'free-verse',label:'Чөлөөт шүлэг'},{value:'haiku',label:'Хайку'}],
    'sw':  [{value:'auto',label:'Otomatiki'},{value:'free-verse',label:'Shairi huru'},{value:'haiku',label:'Haiku'}],
    'nl':  [{value:'auto',label:'Automatisch'},{value:'free-verse',label:'Vrije vers'},{value:'haiku',label:'Haiku'}],
    'no':  [{value:'auto',label:'Auto'},{value:'free-verse',label:'Fri vers'},{value:'haiku',label:'Haiku'}],
    'da':  [{value:'auto',label:'Auto'},{value:'free-verse',label:'Fri vers'},{value:'haiku',label:'Haiku'}],
    'fil': [{value:'auto',label:'Awtomatiko'},{value:'free-verse',label:'Malayang taludtod'},{value:'haiku',label:'Haiku'}],
    'hu':  [{value:'auto',label:'Automatikus'},{value:'free-verse',label:'Szabadvers'},{value:'haiku',label:'Haiku'}],
};

// 수정: 시 형식 셀렉터 라벨 (31개 언어)
const formLabelMap = {
    'ko':'시 형식','en':'Poem form','ja':'詩の形式','zh':'诗歌形式','es':'Forma del poema',
    'fr':'Forme du poème','ru':'Форма стихотворения','it':'Forma poetica','de':'Gedichtform',
    'ms':'Bentuk puisi','bn':'কবিতার ধরন','vi':'Thể thơ','el':'Μορφή ποιήματος',
    'pt':'Forma do poema','pl':'Forma wiersza','ch':'Gedichtform','uk':'Форма вірша',
    'tr':'Şiir biçimi','sv':'Diktform','hi':'कविता का रूप','id':'Bentuk puisi',
    'th':'รูปแบบบทกวี','fi':'Runomuoto','ar':'شكل القصيدة','mn':'Шүлгийн хэлбэр',
    'sw':'Aina ya shairi','nl':'Gedichtvorm','no':'Diktform','da':'Digtform',
    'fil':'Anyo ng tula','hu':'Versforma',
};

const POEM_API_URL ='https://oy3rkh5hgszlzgiibdxxmbpxte0mknfg.lambda-url.ap-northeast-2.on.aws';
const TTS_SPEED_STORAGE_KEY = 'aiAndPoemTtsSpeed';
const TTS_SPEEDS = new Set(['0.8', '1', '1.2']);
const TTS_REQUEST_TIMEOUT_MS = 35000;
const serverTtsLanguages = new Set(['ko', 'en']);
const ttsTextMap = {
    ko: {
        play: '시 낭송', pause: '일시 정지', resume: '계속 듣기', stop: '정지', speed: '속도',
        ready: '낭독을 준비했습니다.', loading: 'AI 음성을 준비 중입니다.', playing: 'AI 음성을 재생 중입니다.',
        paused: '낭독을 일시 정지했습니다.', stopped: '낭독을 멈췄습니다.',
        unsupported: '이 기기에 선택한 언어 음성이 없습니다.', error: '음성을 재생하지 못했습니다.',
        fallback: '고품질 음성에 연결하지 못해 기기 음성을 사용합니다.', retry: '기기 음성으로 듣기', ai: 'AI 음성'
    },
    en: {
        play: 'Recite poem', pause: 'Pause', resume: 'Resume', stop: 'Stop', speed: 'Speed',
        ready: 'Narration is ready.', loading: 'Preparing AI voice.', playing: 'Playing AI voice.',
        paused: 'Narration paused.', stopped: 'Narration stopped.',
        unsupported: 'This device has no voice for selected language.', error: 'Could not play voice.',
        fallback: 'High-quality voice unavailable. Using device voice.', retry: 'Use device voice', ai: 'AI voice'
    },
    ja: { play:'詩を朗読', pause:'一時停止', resume:'再開', stop:'停止', speed:'速度', ready:'朗読の準備ができました。', loading:'AI音声を準備中です。', playing:'AI音声を再生中です。', paused:'朗読を一時停止しました。', stopped:'朗読を停止しました。', unsupported:'この端末には選択した言語の音声がありません。', error:'音声を再生できませんでした。', fallback:'高品質音声が使えません。端末音声を使います。', retry:'端末音声で聞く', ai:'AI音声' },
    zh: { play:'朗诵诗歌', pause:'暂停', resume:'继续', stop:'停止', speed:'速度', ready:'朗诵已准备好。', loading:'正在准备 AI 语音。', playing:'正在播放 AI 语音。', paused:'朗诵已暂停。', stopped:'朗诵已停止。', unsupported:'此设备没有所选语言的语音。', error:'无法播放语音。', fallback:'高质量语音不可用，改用设备语音。', retry:'使用设备语音', ai:'AI 语音' },
    es: { play:'Recitar poema', pause:'Pausar', resume:'Reanudar', stop:'Detener', speed:'Velocidad', ready:'Narración preparada.', loading:'Preparando voz de IA.', playing:'Reproduciendo voz de IA.', paused:'Narración pausada.', stopped:'Narración detenida.', unsupported:'Este dispositivo no tiene voz para idioma seleccionado.', error:'No se pudo reproducir voz.', fallback:'Voz de alta calidad no disponible. Se usa voz del dispositivo.', retry:'Usar voz del dispositivo', ai:'Voz de IA' },
    fr: { play:'Réciter poème', pause:'Pause', resume:'Reprendre', stop:'Arrêter', speed:'Vitesse', ready:'Lecture prête.', loading:'Préparation de voix IA.', playing:'Lecture de voix IA.', paused:'Lecture en pause.', stopped:'Lecture arrêtée.', unsupported:'Cet appareil n’a pas de voix pour langue choisie.', error:'Lecture audio impossible.', fallback:'Voix haute qualité indisponible. Voix de l’appareil utilisée.', retry:'Utiliser voix de l’appareil', ai:'Voix IA' },
    ru: { play:'Прочитать стихотворение', pause:'Пауза', resume:'Продолжить', stop:'Остановить', speed:'Скорость', ready:'Чтение готово.', loading:'Подготовка голоса ИИ.', playing:'Воспроизводится голос ИИ.', paused:'Чтение приостановлено.', stopped:'Чтение остановлено.', unsupported:'На устройстве нет голоса выбранного языка.', error:'Не удалось воспроизвести голос.', fallback:'Качественный голос недоступен. Используется голос устройства.', retry:'Использовать голос устройства', ai:'Голос ИИ' },
    it: { play:'Recita poesia', pause:'Pausa', resume:'Riprendi', stop:'Ferma', speed:'Velocità', ready:'Lettura pronta.', loading:'Preparazione voce IA.', playing:'Riproduzione voce IA.', paused:'Lettura in pausa.', stopped:'Lettura fermata.', unsupported:'Dispositivo senza voce per lingua scelta.', error:'Impossibile riprodurre voce.', fallback:'Voce di alta qualità non disponibile. Uso voce dispositivo.', retry:'Usa voce dispositivo', ai:'Voce IA' },
    de: { play:'Gedicht vorlesen', pause:'Pause', resume:'Fortsetzen', stop:'Stopp', speed:'Tempo', ready:'Lesung bereit.', loading:'KI-Stimme wird vorbereitet.', playing:'KI-Stimme wird abgespielt.', paused:'Lesung pausiert.', stopped:'Lesung gestoppt.', unsupported:'Dieses Gerät hat keine Stimme für ausgewählte Sprache.', error:'Stimme konnte nicht abgespielt werden.', fallback:'Hochwertige Stimme nicht verfügbar. Geräte-Stimme wird genutzt.', retry:'Geräte-Stimme nutzen', ai:'KI-Stimme' },
    ms: { play:'Dengar puisi', pause:'Jeda', resume:'Sambung', stop:'Berhenti', speed:'Kelajuan', ready:'Bacaan sedia.', loading:'Menyediakan suara AI.', playing:'Memainkan suara AI.', paused:'Bacaan dijeda.', stopped:'Bacaan dihentikan.', unsupported:'Peranti ini tiada suara untuk bahasa dipilih.', error:'Suara tidak dapat dimainkan.', fallback:'Suara berkualiti tinggi tiada. Guna suara peranti.', retry:'Guna suara peranti', ai:'Suara AI' },
    bn: { play:'কবিতা শুনুন', pause:'বিরতি', resume:'চালিয়ে যান', stop:'বন্ধ করুন', speed:'গতি', ready:'আবৃত্তি প্রস্তুত।', loading:'AI কণ্ঠ প্রস্তুত হচ্ছে।', playing:'AI কণ্ঠ চলছে।', paused:'আবৃত্তি বিরতিতে আছে।', stopped:'আবৃত্তি বন্ধ হয়েছে।', unsupported:'এই যন্ত্রে নির্বাচিত ভাষার কণ্ঠ নেই।', error:'কণ্ঠ চালানো যায়নি।', fallback:'উচ্চমানের কণ্ঠ নেই। যন্ত্রের কণ্ঠ ব্যবহার হচ্ছে।', retry:'যন্ত্রের কণ্ঠ ব্যবহার করুন', ai:'AI কণ্ঠ' },
    vi: { play:'Đọc thơ', pause:'Tạm dừng', resume:'Tiếp tục', stop:'Dừng', speed:'Tốc độ', ready:'Bản đọc đã sẵn sàng.', loading:'Đang chuẩn bị giọng AI.', playing:'Đang phát giọng AI.', paused:'Đã tạm dừng bản đọc.', stopped:'Đã dừng bản đọc.', unsupported:'Thiết bị không có giọng cho ngôn ngữ đã chọn.', error:'Không thể phát giọng.', fallback:'Giọng chất lượng cao không sẵn có. Dùng giọng thiết bị.', retry:'Dùng giọng thiết bị', ai:'Giọng AI' },
    el: { play:'Απαγγελία ποιήματος', pause:'Παύση', resume:'Συνέχεια', stop:'Διακοπή', speed:'Ταχύτητα', ready:'Η απαγγελία είναι έτοιμη.', loading:'Προετοιμασία φωνής AI.', playing:'Αναπαραγωγή φωνής AI.', paused:'Η απαγγελία μπήκε σε παύση.', stopped:'Η απαγγελία σταμάτησε.', unsupported:'Η συσκευή δεν έχει φωνή για επιλεγμένη γλώσσα.', error:'Η φωνή δεν αναπαράχθηκε.', fallback:'Η φωνή υψηλής ποιότητας δεν είναι διαθέσιμη. Χρήση φωνής συσκευής.', retry:'Χρήση φωνής συσκευής', ai:'Φωνή AI' },
    pt: { play:'Ouvir poema', pause:'Pausar', resume:'Retomar', stop:'Parar', speed:'Velocidade', ready:'Leitura pronta.', loading:'A preparar voz de IA.', playing:'A reproduzir voz de IA.', paused:'Leitura em pausa.', stopped:'Leitura parada.', unsupported:'Este dispositivo não tem voz para idioma selecionado.', error:'Não foi possível reproduzir voz.', fallback:'Voz de alta qualidade indisponível. Uso voz do dispositivo.', retry:'Usar voz do dispositivo', ai:'Voz de IA' },
    pl: { play:'Odczytaj wiersz', pause:'Wstrzymaj', resume:'Wznów', stop:'Zatrzymaj', speed:'Prędkość', ready:'Czytanie gotowe.', loading:'Przygotowanie głosu AI.', playing:'Odtwarzanie głosu AI.', paused:'Czytanie wstrzymane.', stopped:'Czytanie zatrzymane.', unsupported:'Urządzenie nie ma głosu dla wybranego języka.', error:'Nie udało się odtworzyć głosu.', fallback:'Głos wysokiej jakości niedostępny. Używany głos urządzenia.', retry:'Użyj głosu urządzenia', ai:'Głos AI' },
    ch: { play:'Gedicht vorläse', pause:'Pause', resume:'Wiitermache', stop:'Stopp', speed:'Tempo', ready:'Vorlesig bereit.', loading:'KI-Stimm wird vorbereitet.', playing:'KI-Stimm lauft.', paused:'Vorlesig pausiert.', stopped:'Vorlesig gstoppt.', unsupported:'Uf däm Grät git es kei Stimm für die gwählti Sprach.', error:'Stimm cha nöd abgspilt werde.', fallback:'Hochwertigi Stimm nöd verfügbar. Grät-Stimm wird bruucht.', retry:'Grät-Stimm nutze', ai:'KI-Stimm' },
    uk: { play:'Прослухати вірш', pause:'Пауза', resume:'Продовжити', stop:'Зупинити', speed:'Швидкість', ready:'Читання готове.', loading:'Підготовка голосу ШІ.', playing:'Відтворюється голос ШІ.', paused:'Читання призупинено.', stopped:'Читання зупинено.', unsupported:'На пристрої немає голосу вибраної мови.', error:'Не вдалося відтворити голос.', fallback:'Якісний голос недоступний. Використовується голос пристрою.', retry:'Використати голос пристрою', ai:'Голос ШІ' },
    tr: { play:'Şiiri oku', pause:'Duraklat', resume:'Sürdür', stop:'Durdur', speed:'Hız', ready:'Okuma hazır.', loading:'Yapay zekâ sesi hazırlanıyor.', playing:'Yapay zekâ sesi çalıyor.', paused:'Okuma duraklatıldı.', stopped:'Okuma durduruldu.', unsupported:'Bu cihazda seçilen dil için ses yok.', error:'Ses oynatılamadı.', fallback:'Yüksek kaliteli ses yok. Cihaz sesi kullanılıyor.', retry:'Cihaz sesini kullan', ai:'Yapay zekâ sesi' },
    sv: { play:'Recitera dikt', pause:'Pausa', resume:'Fortsätt', stop:'Stoppa', speed:'Hastighet', ready:'Uppläsning klar.', loading:'Förbereder AI-röst.', playing:'Spelar AI-röst.', paused:'Uppläsning pausad.', stopped:'Uppläsning stoppad.', unsupported:'Enheten har ingen röst för valt språk.', error:'Kunde inte spela upp röst.', fallback:'Högkvalitativ röst saknas. Enhetens röst används.', retry:'Använd enhetens röst', ai:'AI-röst' },
    hi: { play:'कविता सुनाएँ', pause:'रोकें', resume:'जारी रखें', stop:'बंद करें', speed:'गति', ready:'पाठ तैयार है।', loading:'AI आवाज़ तैयार हो रही है।', playing:'AI आवाज़ चल रही है।', paused:'पाठ रोका गया।', stopped:'पाठ बंद हुआ।', unsupported:'इस डिवाइस में चुनी भाषा की आवाज़ नहीं है।', error:'आवाज़ नहीं चल सकी।', fallback:'उच्च गुणवत्ता की आवाज़ उपलब्ध नहीं है। डिवाइस आवाज़ उपयोग हो रही है।', retry:'डिवाइस आवाज़ उपयोग करें', ai:'AI आवाज़' },
    id: { play:'Bacakan puisi', pause:'Jeda', resume:'Lanjutkan', stop:'Berhenti', speed:'Kecepatan', ready:'Bacaan siap.', loading:'Menyiapkan suara AI.', playing:'Memutar suara AI.', paused:'Bacaan dijeda.', stopped:'Bacaan dihentikan.', unsupported:'Perangkat tidak memiliki suara untuk bahasa dipilih.', error:'Suara tidak dapat diputar.', fallback:'Suara berkualitas tinggi tidak tersedia. Memakai suara perangkat.', retry:'Pakai suara perangkat', ai:'Suara AI' },
    th: { play:'อ่านบทกวี', pause:'หยุดชั่วคราว', resume:'เล่นต่อ', stop:'หยุด', speed:'ความเร็ว', ready:'พร้อมอ่านแล้ว', loading:'กำลังเตรียมเสียง AI', playing:'กำลังเล่นเสียง AI', paused:'หยุดอ่านชั่วคราวแล้ว', stopped:'หยุดอ่านแล้ว', unsupported:'อุปกรณ์นี้ไม่มีเสียงสำหรับภาษาที่เลือก', error:'ไม่สามารถเล่นเสียงได้', fallback:'ไม่มีเสียงคุณภาพสูง จึงใช้เสียงของอุปกรณ์', retry:'ใช้เสียงของอุปกรณ์', ai:'เสียง AI' },
    fi: { play:'Lue runo', pause:'Tauko', resume:'Jatka', stop:'Lopeta', speed:'Nopeus', ready:'Luku on valmis.', loading:'Valmistellaan tekoälyääntä.', playing:'Toistetaan tekoälyääntä.', paused:'Luku keskeytettiin.', stopped:'Luku lopetettiin.', unsupported:'Laitteessa ei ole ääntä valitulle kielelle.', error:'Ääntä ei voitu toistaa.', fallback:'Laadukas ääni ei ole saatavilla. Käytetään laitteen ääntä.', retry:'Käytä laitteen ääntä', ai:'Tekoälyääni' },
    ar: { play:'تلاوة القصيدة', pause:'إيقاف مؤقت', resume:'متابعة', stop:'إيقاف', speed:'السرعة', ready:'التلاوة جاهزة.', loading:'جارٍ تجهيز صوت الذكاء الاصطناعي.', playing:'جارٍ تشغيل صوت الذكاء الاصطناعي.', paused:'تم إيقاف التلاوة مؤقتًا.', stopped:'تم إيقاف التلاوة.', unsupported:'لا يحتوي هذا الجهاز على صوت للغة المختارة.', error:'تعذر تشغيل الصوت.', fallback:'الصوت عالي الجودة غير متاح. سيُستخدم صوت الجهاز.', retry:'استخدم صوت الجهاز', ai:'صوت الذكاء الاصطناعي' },
    mn: { play:'Шүлэг унших', pause:'Түр зогсоох', resume:'Үргэлжлүүлэх', stop:'Зогсоох', speed:'Хурд', ready:'Уншихад бэлэн.', loading:'AI хоолой бэлдэж байна.', playing:'AI хоолой тоглож байна.', paused:'Уншлагыг түр зогсоов.', stopped:'Уншлагыг зогсоов.', unsupported:'Энэ төхөөрөмжид сонгосон хэлний хоолой алга.', error:'Хоолой тоглуулж чадсангүй.', fallback:'Өндөр чанартай хоолой алга. Төхөөрөмжийн хоолойг ашиглана.', retry:'Төхөөрөмжийн хоолойг ашиглах', ai:'AI хоолой' },
    sw: { play:'Soma shairi', pause:'Sitisha', resume:'Endelea', stop:'Acha', speed:'Kasi', ready:'Usomaji uko tayari.', loading:'Inaandaa sauti ya AI.', playing:'Inacheza sauti ya AI.', paused:'Usomaji umesitishwa.', stopped:'Usomaji umesimamishwa.', unsupported:'Kifaa hakina sauti ya lugha iliyochaguliwa.', error:'Sauti haikuweza kuchezwa.', fallback:'Sauti bora haipatikani. Kutumia sauti ya kifaa.', retry:'Tumia sauti ya kifaa', ai:'Sauti ya AI' },
    nl: { play:'Draag gedicht voor', pause:'Pauze', resume:'Doorgaan', stop:'Stoppen', speed:'Snelheid', ready:'Voordracht klaar.', loading:'AI-stem voorbereiden.', playing:'AI-stem wordt afgespeeld.', paused:'Voordracht gepauzeerd.', stopped:'Voordracht gestopt.', unsupported:'Dit apparaat heeft geen stem voor gekozen taal.', error:'Stem kon niet worden afgespeeld.', fallback:'Hoogwaardige stem niet beschikbaar. Apparaatstem wordt gebruikt.', retry:'Gebruik apparaatstem', ai:'AI-stem' },
    no: { play:'Resiter dikt', pause:'Pause', resume:'Fortsett', stop:'Stopp', speed:'Hastighet', ready:'Opplesning klar.', loading:'Forbereder KI-stemme.', playing:'Spiller KI-stemme.', paused:'Opplesning satt på pause.', stopped:'Opplesning stoppet.', unsupported:'Enheten har ingen stemme for valgt språk.', error:'Kunne ikke spille av stemme.', fallback:'Høykvalitetsstemme er ikke tilgjengelig. Enhetsstemme brukes.', retry:'Bruk enhetsstemme', ai:'KI-stemme' },
    da: { play:'Oplæs digt', pause:'Pause', resume:'Fortsæt', stop:'Stop', speed:'Hastighed', ready:'Oplæsning klar.', loading:'Forbereder AI-stemme.', playing:'Afspiller AI-stemme.', paused:'Oplæsning sat på pause.', stopped:'Oplæsning stoppet.', unsupported:'Enheden har ingen stemme for valgt sprog.', error:'Stemmen kunne ikke afspilles.', fallback:'Stemmen i høj kvalitet er ikke tilgængelig. Enhedens stemme bruges.', retry:'Brug enhedens stemme', ai:'AI-stemme' },
    fil: { play:'Bigkasin ang tula', pause:'I-pause', resume:'Ipagpatuloy', stop:'Ihinto', speed:'Bilis', ready:'Handa na ang pagbigkas.', loading:'Inihahanda ang boses ng AI.', playing:'Pinapatugtog ang boses ng AI.', paused:'Naka-pause ang pagbigkas.', stopped:'Huminto ang pagbigkas.', unsupported:'Walang boses para sa napiling wika ang device na ito.', error:'Hindi ma-play ang boses.', fallback:'Walang mataas na kalidad na boses. Boses ng device ang gagamitin.', retry:'Gamitin ang boses ng device', ai:'Boses ng AI' },
    hu: { play:'Vers felolvasása', pause:'Szünet', resume:'Folytatás', stop:'Leállítás', speed:'Sebesség', ready:'Felolvasás kész.', loading:'AI-hang előkészítése.', playing:'AI-hang lejátszása.', paused:'Felolvasás szünetel.', stopped:'Felolvasás leállt.', unsupported:'Az eszközön nincs hang kiválasztott nyelvhez.', error:'A hang nem játszható le.', fallback:'Kiváló minőségű hang nem érhető el. Eszköz hangját használjuk.', retry:'Eszköz hangjának használata', ai:'AI-hang' }
};

function getTtsText(language) {
    return ttsTextMap[language] || ttsTextMap.en;
}

function getStoredTtsSpeed() {
    try {
        const stored = localStorage.getItem(TTS_SPEED_STORAGE_KEY);
        return TTS_SPEEDS.has(stored) ? Number(stored) : 1;
    } catch {
        return 1;
    }
}

function trackTtsEvent(action, details) {
    try {
        const consent = JSON.parse(localStorage.getItem('aiAndPoemCookieConsent'));
        if (!consent || consent.analytics !== true || typeof gtag !== 'function') return;
        gtag('event', `tts_${action}`, details);
    } catch {
        // 동의 값을 읽지 못하면 분석 전송을 생략한다.
    }
}

function splitPoemForSpeech(poem, maxLength = 240) {
    const chunks = [];
    for (const rawLine of poem.split(/\r?\n/)) {
        let line = rawLine.trim();
        while (line.length > maxLength) {
            const windowText = line.slice(0, maxLength + 1);
            const punctuation = Math.max(windowText.lastIndexOf('.'), windowText.lastIndexOf('!'),
                windowText.lastIndexOf('?'), windowText.lastIndexOf('…'), windowText.lastIndexOf('。'));
            const boundary = punctuation > maxLength / 2 ? punctuation + 1 : windowText.lastIndexOf(' ');
            const cut = boundary > 0 ? boundary : maxLength;
            chunks.push(line.slice(0, cut).trim());
            line = line.slice(cut).trim();
        }
        if (line) chunks.push(line);
    }
    return chunks;
}

class PoemTtsController {
    constructor({ button, stopButton, speedSelect, speedLabel, aiNotice, status, language }) {
        this.button = button;
        this.stopButton = stopButton;
        this.speedSelect = speedSelect;
        this.speedLabel = speedLabel;
        this.aiNotice = aiNotice;
        this.status = status;
        this.synthesis = window.speechSynthesis;
        this.supported = Boolean(this.synthesis && window.SpeechSynthesisUtterance);
        this.state = 'idle';
        this.speed = getStoredTtsSpeed();
        this.speedSelect.value = String(this.speed);
        this.run = 0;
        this.poem = '';
        // 시 생성 전에도 버튼 문구를 페이지 언어로 표시한다.
        this.language = language;
        this.ttsToken = null;
        this.queue = [];
        this.queueIndex = 0;
        this.currentSource = null;
        this.audio = null;
        this.audioUrl = null;
        this.serverRequest = null;
        this.fallbackRun = null;
        if (this.supported) {
            const refreshVoices = () => {
                if (this.checkVoiceWait) this.checkVoiceWait();
                if (this.state === 'unsupported' && this.poem && this.selectVoice()) {
                    this.state = 'ready';
                    this.announce('ready');
                    this.updateControls();
                }
            };
            refreshVoices();
            if (typeof this.synthesis.addEventListener === 'function') {
                this.synthesis.addEventListener('voiceschanged', refreshVoices);
            } else {
                this.synthesis.onvoiceschanged = refreshVoices;
            }
        }
        this.updateControls();
    }

    text(key) {
        return getTtsText(this.language)[key];
    }

    announce(key) {
        this.status.textContent = this.text(key);
    }

    updateControls() {
        const hasPoem = Boolean(this.poem);
        const active = this.state === 'playing' || this.state === 'paused' || this.state === 'loading';
        const label = this.state === 'playing' ? this.text('pause') :
            this.state === 'paused' ? this.text('resume') :
            this.state === 'error' && this.hadServerFailure ? this.text('retry') : this.text('play');
        this.button.textContent = `🔊 ${label}`;
        this.button.setAttribute('aria-label', label);
        this.button.setAttribute('aria-pressed', String(this.state === 'playing' || this.state === 'paused'));
        const stopLabel = this.text('stop');
        this.stopButton.textContent = `■ ${stopLabel}`;
        this.stopButton.setAttribute('aria-label', stopLabel);
        this.stopButton.setAttribute('title', stopLabel);
        this.speedLabel.textContent = this.text('speed');
        this.aiNotice.textContent = this.text('ai');
        this.aiNotice.hidden = !((this.ttsToken || this.serverRequest || this.audioUrl) &&
            serverTtsLanguages.has(this.language));
        this.button.disabled = !hasPoem || this.state === 'loading' || this.state === 'unsupported';
        this.stopButton.disabled = !active;
        this.speedSelect.disabled = !hasPoem;
    }

    setPoem(poem, language, ttsToken) {
        this.stop({ announce: false, discard: true });
        this.poem = poem;
        this.language = language;
        this.ttsToken = typeof ttsToken === 'string' ? ttsToken : null;
        this.hadServerFailure = false;
        this.state = 'ready';
        this.announce('ready');
        this.updateControls();
    }

    clear() {
        this.stop({ announce: false, discard: true });
        this.poem = '';
        this.ttsToken = null;
        this.state = 'idle';
        this.status.textContent = '';
        this.updateControls();
    }

    selectVoice() {
        const requested = (languageMap[this.language]?.ttsLang || 'ko-KR').replace('_', '-').toLowerCase();
        const base = requested.split('-')[0];
        const voices = this.synthesis.getVoices();
        return voices.find(voice => voice.lang.replace('_', '-').toLowerCase() === requested) ||
            voices.find(voice => voice.lang.replace('_', '-').toLowerCase().split('-')[0] === base) || null;
    }

    waitForVoice() {
        if (!this.supported || this.selectVoice()) return Promise.resolve();
        return new Promise(resolve => {
            let done = false;
            const finish = () => {
                if (done) return;
                done = true;
                clearTimeout(timer);
                this.cancelVoiceWait = null;
                this.checkVoiceWait = null;
                resolve();
            };
            const timer = setTimeout(finish, 1200);
            this.cancelVoiceWait = finish;
            this.checkVoiceWait = () => { if (this.selectVoice()) finish(); };
            this.checkVoiceWait();
        });
    }

    async toggle() {
        if (this.state === 'loading') return;
        if (this.state === 'playing') return this.pause();
        if (this.state === 'paused') return this.resume();
        return this.start();
    }

    async start() {
        if (!this.poem || this.state === 'loading') return;
        const run = ++this.run;
        this.releaseAudio();
        if (this.supported) this.synthesis.cancel();
        this.state = 'loading';
        this.announce('loading');
        this.updateControls();
        const useServer = (this.audioUrl || this.serverRequest || this.ttsToken) &&
            serverTtsLanguages.has(this.language);
        if (useServer) {
            try {
                await this.startServerAudio(run);
                return;
            } catch {
                return this.fallbackToBrowser(run);
            }
        }
        try {
            await this.startBrowserAudio(run);
        } catch {
            if (run === this.run) this.markError();
        }
    }

    async getServerAudioUrl() {
        if (this.audioUrl) return this.audioUrl;
        if (this.serverRequest) return this.serverRequest.promise;

        const body = JSON.stringify({ poem: this.poem, language: this.language, ttsToken: this.ttsToken });
        // 서버가 이미 소비했을 수 있으므로 같은 토큰으로 다시 요청하지 않는다.
        this.ttsToken = null;
        const request = { controller: new AbortController() };
        this.serverRequest = request;
        request.timer = setTimeout(() => request.controller.abort(), TTS_REQUEST_TIMEOUT_MS);
        request.promise = (async () => {
            try {
                const response = await fetch(`${POEM_API_URL}/synthesize-speech`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json' }, mode: 'cors',
                    signal: request.controller.signal, body
                });
                if (!response.ok) throw new Error('TTS server unavailable');
                const blob = await response.blob();
                if (request.controller.signal.aborted || this.serverRequest !== request) return null;
                if (!blob.size || !blob.type.startsWith('audio/')) throw new Error('Invalid TTS audio');
                this.audioUrl = URL.createObjectURL(blob);
                return this.audioUrl;
            } catch (error) {
                if (this.serverRequest === request) this.hadServerFailure = true;
                throw error;
            } finally {
                clearTimeout(request.timer);
                if (this.serverRequest === request) {
                    this.serverRequest = null;
                    this.updateControls();
                }
            }
        })();
        return request.promise;
    }

    async startServerAudio(run) {
        const url = await this.getServerAudioUrl();
        if (run !== this.run || !url) return;
        const audio = new Audio(url);
        this.audio = audio;
        audio.playbackRate = this.speed;
        audio.preservesPitch = true;
        this.currentSource = 'server';
        audio.onended = () => {
            if (run !== this.run || this.audio !== audio) return;
            this.releaseAudio();
            this.currentSource = null;
            this.state = 'stopped';
            this.announce('stopped');
            this.updateControls();
            trackTtsEvent('complete', { language: this.language, source: 'server', speed: this.speed });
        };
        audio.onerror = () => {
            if (this.audio === audio) this.fallbackToBrowser(run);
        };
        await audio.play();
        if (run !== this.run || this.audio !== audio || this.fallbackRun === run) return;
        this.state = 'playing';
        this.announce('playing');
        this.updateControls();
        trackTtsEvent('play', { language: this.language, source: 'server', speed: this.speed });
    }

    async fallbackToBrowser(run) {
        if (run !== this.run || this.fallbackRun === run) return;
        this.fallbackRun = run;
        this.releaseAudio({ discard: true });
        this.currentSource = null;
        this.ttsToken = null;
        this.hadServerFailure = true;
        this.state = 'loading';
        this.announce('fallback');
        this.updateControls();
        trackTtsEvent('error', { language: this.language, source: 'server', speed: this.speed });
        try {
            await this.startBrowserAudio(run);
        } catch {
            if (run === this.run) this.markError();
        }
    }

    async startBrowserAudio(run) {
        if (!this.supported) return this.markUnsupported();
        await this.waitForVoice();
        if (run !== this.run) return;
        const voice = this.selectVoice();
        if (!voice) return this.markUnsupported();
        this.currentSource = 'browser';
        this.currentVoice = voice;
        this.queue = splitPoemForSpeech(this.poem);
        this.queueIndex = 0;
        if (!this.queue.length) return this.markError();
        // cancel()은 합성 엔진의 일시정지 상태를 해제하지 않는다.
        if (this.synthesis.paused) this.synthesis.resume();
        this.state = 'playing';
        this.announce(this.hadServerFailure ? 'fallback' : 'playing');
        this.updateControls();
        this.speakNext(run);
        trackTtsEvent('play', { language: this.language, source: 'browser', speed: this.speed });
    }

    speakNext(run) {
        if (run !== this.run || this.state !== 'playing') return;
        if (this.queueIndex >= this.queue.length) {
            this.currentSource = null;
            this.state = 'stopped';
            this.announce('stopped');
            this.updateControls();
            trackTtsEvent('complete', { language: this.language, source: 'browser', speed: this.speed });
            return;
        }
        const utterance = new SpeechSynthesisUtterance(this.queue[this.queueIndex]);
        utterance.lang = languageMap[this.language]?.ttsLang || 'ko-KR';
        utterance.voice = this.currentVoice;
        utterance.rate = this.speed;
        utterance.onend = () => {
            if (run !== this.run || this.state !== 'playing') return;
            this.queueIndex += 1;
            this.speakNext(run);
        };
        utterance.onerror = () => {
            if (run !== this.run) return;
            this.markError();
            trackTtsEvent('error', { language: this.language, source: 'browser', speed: this.speed });
        };
        this.synthesis.speak(utterance);
    }

    pause() {
        if (this.currentSource === 'server' && this.audio) this.audio.pause();
        if (this.currentSource === 'browser') this.synthesis.pause();
        this.state = 'paused';
        this.announce('paused');
        this.updateControls();
        trackTtsEvent('pause', { language: this.language, source: this.currentSource, speed: this.speed });
    }

    async resume() {
        const run = this.run;
        if (this.currentSource === 'server' && this.audio) {
            const audio = this.audio;
            this.state = 'loading';
            this.updateControls();
            try {
                await audio.play();
            } catch {
                return this.fallbackToBrowser(run);
            }
            if (run !== this.run || this.audio !== audio || this.fallbackRun === run) return;
        }
        if (this.currentSource === 'browser') this.synthesis.resume();
        this.state = 'playing';
        this.announce(this.currentSource === 'browser' && this.hadServerFailure ? 'fallback' : 'playing');
        this.updateControls();
        trackTtsEvent('resume', { language: this.language, source: this.currentSource, speed: this.speed });
    }

    setSpeed(value) {
        if (!TTS_SPEEDS.has(value)) return;
        this.speed = Number(value);
        try { localStorage.setItem(TTS_SPEED_STORAGE_KEY, value); } catch {}
        if (this.currentSource === 'server' && this.audio) this.audio.playbackRate = this.speed;
        this.updateControls();
        trackTtsEvent('speed', { language: this.language, source: this.currentSource || 'none', speed: this.speed });
    }

    releaseAudio({ discard = false } = {}) {
        if (this.audio) {
            this.audio.onended = null;
            this.audio.onerror = null;
            this.audio.pause();
            this.audio.removeAttribute('src');
            this.audio.load();
        }
        this.audio = null;
        if (discard) {
            if (this.audioUrl) URL.revokeObjectURL(this.audioUrl);
            this.audioUrl = null;
        }
    }

    stop({ announce = true, discard = false } = {}) {
        this.run += 1;
        if (this.cancelVoiceWait) this.cancelVoiceWait();
        if (this.supported) this.synthesis.cancel();
        this.releaseAudio({ discard });
        // 같은 시의 합성은 제한시간 안에 마쳐 캐시한다. 새 시·페이지 종료는 취소한다.
        if (discard) {
            const request = this.serverRequest;
            this.serverRequest = null;
            if (request) {
                clearTimeout(request.timer);
                request.controller.abort();
            }
            this.ttsToken = null;
        }
        this.currentSource = null;
        if (this.poem) {
            this.state = 'stopped';
            if (announce) this.announce('stopped');
        }
        this.updateControls();
        if (announce) trackTtsEvent('stop', { language: this.language, source: 'none', speed: this.speed });
    }

    markUnsupported() {
        this.state = 'unsupported';
        this.status.textContent = this.text('unsupported');
        this.updateControls();
    }

    markError() {
        this.state = 'error';
        this.announce('error');
        this.updateControls();
    }
}

const languageSelect = document.getElementById('language');
const processingVideo = document.getElementById('processing-video');
const topicInput = document.getElementById('topic');
const poemDiv = document.getElementById('poem');
const ttsButton = document.getElementById('tts-button');
const ttsStopButton = document.getElementById('tts-stop-button');
const ttsSpeedSelect = document.getElementById('tts-speed');
const ttsSpeedLabel = document.getElementById('tts-speed-label');
const ttsAiNotice = document.getElementById('tts-ai-notice');
const ttsStatus = document.getElementById('tts-status');

// index 페이지 전용 기능: 필수 요소가 모두 존재할 때만 실행
if (languageSelect && topicInput && poemDiv && ttsButton && ttsStopButton && ttsSpeedSelect &&
    ttsSpeedLabel && ttsAiNotice && ttsStatus) {
const ttsController = new PoemTtsController({
    button: ttsButton, stopButton: ttsStopButton, speedSelect: ttsSpeedSelect,
    speedLabel: ttsSpeedLabel, aiNotice: ttsAiNotice, status: ttsStatus, language: languageSelect.value
});

// 수정: 시 형식 셀렉터 — 페이지 언어에 맞춰 라벨/옵션 채우기
(function populateFormSelector() {
    const formSelect = document.getElementById('poem-form-select');
    const formLabel = document.querySelector('[data-i18n-form-label]');
    if (!formSelect) return;

    const pageLang = (document.documentElement.lang || 'ko').toLowerCase();
    const options = formOptionsMap[pageLang] || formOptionsMap['en'];
    const labelText = formLabelMap[pageLang] || formLabelMap['en'];

    if (formLabel) formLabel.textContent = labelText;
    formSelect.innerHTML = options
        .map(o => `<option value="${o.value}">${o.label}</option>`)
        .join('');
})();

// 수정: N행시 선택 시 토픽 placeholder를 힌트로 변경, 다른 옵션 선택 시 원복
(function attachNHaengsiPlaceholder() {
    const formSelect = document.getElementById('poem-form-select');
    if (!formSelect || !topicInput) return;
    const originalPlaceholder = topicInput.placeholder;
    const hint = '한글 2글자 이상 (예: 사과 → 2행, 강아지 → 3행)';
    formSelect.addEventListener('change', () => {
        topicInput.placeholder = (formSelect.value === 'n-haengsi') ? hint : originalPlaceholder;
    });
})();

// 필수 입력 메시지 다국어 대응
topicInput.addEventListener('invalid', () => {
    const language = languageSelect.value;
    const message = topicRequiredMessage[language] || topicRequiredMessage['ko'];
    topicInput.setCustomValidity(message);
});

topicInput.addEventListener('input', () => {
    topicInput.setCustomValidity('');
});

// 수정: 132줄 switch를 templated redirect로 압축. languageMap 키만 허용 (가드).
document.getElementById('language').addEventListener('change', function() {
    const language = languageSelect.value;
    if (!languageMap[language]) return;
    ttsController.stop({ announce: false });
    location.href = `https://ai-and-poem.art/${language}/`;
});

// 시 작성 버튼 함수
document.getElementById('poem-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const topic = topicInput.value.trim();
    const language = languageSelect.value;
    const submitButton = document.getElementById('poetry-writing-button');
    const errMsg = errorMessage[language] || errorMessage['ko'];
    // 수정: 시 형식 셀렉터 값 — 없거나 미설정이면 'auto' 폴백
    const formSelect = document.getElementById('poem-form-select');
    const form = formSelect && formSelect.value ? formSelect.value : 'auto';

    ttsController.clear();
    poemDiv.textContent = processingMessage[language] || processingMessage['ko'];

    // 비디오 재생
    processingVideo.play();
    // 중복 제출 방지
    submitButton.disabled = true;

    // 요청 타임아웃 설정 (30초)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
        const response = await fetch(`${POEM_API_URL}/generate-poem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // 프론트엔드 CORS — credentials 미사용 (백엔드도 비활성). 인증/세션 도입 시 재활성 + CSRF.
            mode: 'cors',
            signal: controller.signal,
            body: JSON.stringify({
                topic: topic,
                language: language,
                form: form
            })
        });

        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();
            const poem = data.poem;
            poemDiv.textContent = poem;

            ttsController.setPoem(poem, language, data.ttsToken);

            // 비디오 정지
            processingVideo.pause();
        } else {
            try {
                const errorData = await response.json();
                poemDiv.textContent = `${errMsg}: ${errorData.error}`;
            } catch (parseError) {
                poemDiv.textContent = `${errMsg}: ${response.statusText}`;
            }

            // 비디오 정지
            processingVideo.pause();
            ttsController.clear();
        }
    } catch (error) {
        clearTimeout(timeoutId);
        poemDiv.textContent = `${errMsg}: ${error.message}`;

        // 비디오 정지
        processingVideo.pause();
        ttsController.clear();
    } finally {
        // 제출 버튼 복구
        submitButton.disabled = false;
    }
});

ttsButton.addEventListener('click', () => { ttsController.toggle(); });
ttsStopButton.addEventListener('click', () => { ttsController.stop(); });
ttsSpeedSelect.addEventListener('change', () => { ttsController.setSpeed(ttsSpeedSelect.value); });
window.addEventListener('pagehide', () => { ttsController.stop({ announce: false, discard: true }); });

} // end of index 페이지 전용 기능

// 쿠키 동의 배너 (모든 페이지에서 실행)
const pageLang = languageSelect
    ? languageSelect.value
    : (document.documentElement.lang || 'en');
const cookieConsentKey = 'aiAndPoemCookieConsent';

function getPrivacyUrl(lang) {
    return lang === 'ko'
        ? 'https://ai-and-poem.art/privacy.html'
        : `https://ai-and-poem.art/${lang}/privacy.html`;
}

function saveConsent(value) {
    localStorage.setItem(cookieConsentKey, JSON.stringify(value));
    // Consent Mode v2에 선택 즉시 반영 (gtag 함수는 각 HTML head의 스니펫에서 정의됨)
    if (typeof gtag === 'function') {
        gtag('consent', 'update', {
            analytics_storage: value.analytics ? 'granted' : 'denied',
            ad_storage: value.advertising ? 'granted' : 'denied',
            ad_user_data: value.advertising ? 'granted' : 'denied',
            ad_personalization: value.advertising ? 'granted' : 'denied',
        });
    }
}

function dismissBanner(banner) {
    banner.remove();
    document.body.classList.remove('has-cookie-banner');
}

function createSettingsModal(lang, onSave) {
    const t = consentMessageMap[lang] || consentMessageMap['en'];
    const fallback = consentMessageMap['en'];

    const overlay = document.createElement('div');
    overlay.id = 'cookie-settings-overlay';

    const modal = document.createElement('div');
    modal.id = 'cookie-settings-modal';

    const header = document.createElement('div');
    header.className = 'cookie-modal-header';

    const title = document.createElement('h3');
    title.className = 'cookie-modal-title';
    title.textContent = t.settingsTitle || fallback.settingsTitle;

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'cookie-modal-close';
    closeBtn.textContent = '✕';
    closeBtn.onclick = () => overlay.remove();

    header.appendChild(title);
    header.appendChild(closeBtn);

    function createRow(labelText, descText, id, checked, disabled) {
        const row = document.createElement('div');
        row.className = 'cookie-modal-row';

        const info = document.createElement('div');
        info.className = 'cookie-modal-info';

        const label = document.createElement('span');
        label.className = 'cookie-modal-label';
        label.textContent = labelText;

        const desc = document.createElement('span');
        desc.className = 'cookie-modal-desc';
        desc.textContent = descText;

        info.appendChild(label);
        info.appendChild(desc);

        if (disabled) {
            const badge = document.createElement('span');
            badge.className = 'cookie-always-on';
            badge.textContent = t.alwaysOn || fallback.alwaysOn;
            row.appendChild(info);
            row.appendChild(badge);
        } else {
            const toggleLabel = document.createElement('label');
            toggleLabel.className = 'cookie-toggle';

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = id;
            input.checked = checked;

            const slider = document.createElement('span');
            slider.className = 'cookie-toggle-slider';

            toggleLabel.appendChild(input);
            toggleLabel.appendChild(slider);
            row.appendChild(info);
            row.appendChild(toggleLabel);
        }

        return row;
    }

    // GDPR opt-in: 사전 체크된 동의는 무효이므로 기본 꺼짐
    const analyticsChecked = false;
    const advertisingChecked = false;

    const essentialRow = createRow(
        t.essential || fallback.essential,
        t.essentialDesc || fallback.essentialDesc,
        'cookie-essential', true, true
    );
    const analyticsRow = createRow(
        t.analytics || fallback.analytics,
        t.analyticsDesc || fallback.analyticsDesc,
        'cookie-analytics', analyticsChecked, false
    );
    const advertisingRow = createRow(
        t.advertising || fallback.advertising,
        t.advertisingDesc || fallback.advertisingDesc,
        'cookie-advertising', advertisingChecked, false
    );

    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.className = 'cookie-btn cookie-btn-primary cookie-modal-save';
    saveBtn.textContent = t.save || fallback.save;
    saveBtn.onclick = () => {
        const analyticsInput = modal.querySelector('#cookie-analytics');
        const advertisingInput = modal.querySelector('#cookie-advertising');
        onSave({
            essential: true,
            analytics: analyticsInput ? analyticsInput.checked : true,
            advertising: advertisingInput ? advertisingInput.checked : true,
        });
        overlay.remove();
    };

    modal.appendChild(header);
    modal.appendChild(essentialRow);
    modal.appendChild(analyticsRow);
    modal.appendChild(advertisingRow);
    modal.appendChild(saveBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

const existingConsent = localStorage.getItem(cookieConsentKey);
// 구버전 'accepted' 문자열 마이그레이션
if (existingConsent === 'accepted') {
    saveConsent({ essential: true, analytics: true, advertising: true });
    document.body.classList.remove('has-cookie-banner');
} else if (!existingConsent) {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';

    let currentLang = pageLang;

    function getBannerTexts(lang) {
        const t = consentMessageMap[lang] || consentMessageMap['en'];
        const fallback = consentMessageMap['en'];
        return {
            message: t.message || fallback.message,
            acceptAll: t.acceptAll || fallback.acceptAll,
            essentialOnly: t.essentialOnly || fallback.essentialOnly,
            settings: t.settings || fallback.settings,
            privacyLink: t.privacyLink || fallback.privacyLink,
        };
    }

    function renderBanner(lang) {
        const texts = getBannerTexts(lang);
        banner.innerHTML = '';

        const textArea = document.createElement('div');
        textArea.className = 'cookie-banner-text';

        const msgSpan = document.createElement('span');
        msgSpan.textContent = texts.message;

        const privacyA = document.createElement('a');
        privacyA.href = getPrivacyUrl(lang);
        privacyA.className = 'cookie-privacy-link';
        privacyA.textContent = texts.privacyLink;
        privacyA.target = '_blank';
        privacyA.rel = 'noopener noreferrer';

        textArea.appendChild(msgSpan);
        textArea.appendChild(document.createTextNode(' '));
        textArea.appendChild(privacyA);

        const btnGroup = document.createElement('div');
        btnGroup.className = 'cookie-btn-group';

        const settingsBtn = document.createElement('button');
        settingsBtn.type = 'button';
        settingsBtn.className = 'cookie-btn cookie-btn-ghost';
        settingsBtn.textContent = texts.settings;
        settingsBtn.onclick = () => {
            createSettingsModal(currentLang, (choices) => {
                saveConsent(choices);
                dismissBanner(banner);
            });
        };

        const essentialBtn = document.createElement('button');
        essentialBtn.type = 'button';
        essentialBtn.className = 'cookie-btn cookie-btn-secondary';
        essentialBtn.textContent = texts.essentialOnly;
        essentialBtn.onclick = () => {
            saveConsent({ essential: true, analytics: false, advertising: false });
            dismissBanner(banner);
        };

        const acceptAllBtn = document.createElement('button');
        acceptAllBtn.type = 'button';
        acceptAllBtn.className = 'cookie-btn cookie-btn-primary';
        acceptAllBtn.textContent = texts.acceptAll;
        acceptAllBtn.onclick = () => {
            saveConsent({ essential: true, analytics: true, advertising: true });
            dismissBanner(banner);
        };

        btnGroup.appendChild(settingsBtn);
        btnGroup.appendChild(essentialBtn);
        btnGroup.appendChild(acceptAllBtn);

        banner.appendChild(textArea);
        banner.appendChild(btnGroup);
    }

    renderBanner(currentLang);
    document.body.appendChild(banner);
    document.body.classList.add('has-cookie-banner');

    if (languageSelect) {
        languageSelect.addEventListener('change', () => {
            currentLang = languageSelect.value;
            renderBanner(currentLang);
        });
    }
} else {
    document.body.classList.remove('has-cookie-banner');
}
