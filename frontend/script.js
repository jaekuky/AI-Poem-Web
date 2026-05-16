
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

// 쿠키 동의 배너 메시지 및 번역 (6개 주요 언어 전체 번역, 나머지는 기존 button 필드 폴백)
const consentMessageMap = {
    'ko': {
        message: 'AI & Poem은 서비스 제공과 광고 최적화를 위해 쿠키를 사용합니다.',
        button: '동의합니다',
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
        button: 'Accept',
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
        button: '同意する',
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
        button: '同意',
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
        button: 'Aceptar',
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
        button: 'Accepter',
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
    'de': { message: 'AI & Poem verwendet Cookies für den Dienst und zur Optimierung von Werbung.', button: 'Akzeptieren' },
    'it': { message: 'AI & Poem utilizza cookie per offrire il servizio e ottimizzare la pubblicità.', button: 'Accetto' },
    'pt': { message: 'AI & Poem utiliza cookies para fornecer o serviço e otimizar anúncios.', button: 'Aceitar' },
    'pl': { message: 'AI & Poem używa plików cookie do świadczenia usług i optymalizacji reklam.', button: 'Akceptuję' },
    'ru': { message: 'AI & Poem использует cookie для работы сервиса и оптимизации рекламы.', button: 'Принять' },
    'uk': { message: 'AI & Poem використовує файли cookie для надання послуги та оптимізації реклами.', button: 'Погоджуюсь' },
    'tr': { message: 'AI & Poem hizmet sunumu ve reklam optimizasyonu için çerezler kullanır.', button: 'Kabul ediyorum' },
    'sv': { message: 'AI & Poem använder cookies för tjänsten och annonsoptimering.', button: 'Acceptera' },
    'hi': { message: 'AI & Poem सेवा प्रदान और विज्ञापन अनुकूलन के लिए कुकीज़ का उपयोग करता है।', button: 'स्वीकार करें' },
    'id': { message: 'AI & Poem menggunakan cookie untuk layanan dan optimasi iklan.', button: 'Setuju' },
    'th': { message: 'AI & Poem ใช้คุกกี้เพื่อให้บริการและปรับโฆษณาให้เหมาะสม.', button: 'ยอมรับ' },
    'fi': { message: 'AI & Poem käyttää evästeitä palvelun ja mainosten optimointiin.', button: 'Hyväksy' },
    'bn': { message: 'AI & Poem পরিষেবা ও বিজ্ঞাপন উন্নত করতে কুকি ব্যবহার করে।', button: 'সম্মতি দিচ্ছি' },
    'ms': { message: 'AI & Poem menggunakan kuki untuk perkhidmatan dan pengoptimuman iklan.', button: 'Setuju' },
    'el': { message: 'Το AI & Poem χρησιμοποιεί cookies για την υπηρεσία και τη βελτιστοποίηση διαφημίσεων.', button: 'Αποδοχή' },
    'vi': { message: 'AI & Poem sử dụng cookie để cung cấp dịch vụ và tối ưu hoá quảng cáo.', button: 'Đồng ý' },
    'ch': { message: 'AI & Poem bruuchet Cookies für d Dienstleistig und d Werbig.', button: 'I versteh' },
    'ar': { message: 'يستخدم AI & Poem ملفات تعريف الارتباط لتقديم الخدمة وتحسين الإعلانات.', button: 'أوافق' },
    'mn': { message: 'AI & Poem нь үйлчилгээ үзүүлэх болон сурталчилгааг оновчтой болгохын тулд күүки ашигладаг.', button: 'Зөвшөөрөх' },
    'sw': { message: 'AI & Poem hutumia vidakuzi kwa utoaji wa huduma na uboreshaji wa matangazo.', button: 'Kubali' },
    'nl': { message: 'AI & Poem gebruikt cookies voor dienstverlening en advertentieoptimalisatie.', button: 'Accepteren' },
    'no': { message: 'AI & Poem bruker informasjonskapsler for tjenestelevering og annonseoptimalisering.', button: 'Aksepter' },
    'da': { message: 'AI & Poem bruger cookies til levering af tjenester og annonceoptimering.', button: 'Accepter' },
    'fil': { message: 'Gumagamit ang AI & Poem ng cookies para sa paghahatid ng serbisyo at pag-optimize ng ad.', button: 'Tanggapin' },
    'hu': { message: 'Az AI & Poem sütiket használ a szolgáltatás nyújtásához és a hirdetések optimalizálásához.', button: 'Elfogad' },
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

const languageSelect = document.getElementById('language');
const processingVideo = document.getElementById('processing-video');
const topicInput = document.getElementById('topic');
const poemDiv = document.getElementById('poem');
const ttsButton = document.getElementById('tts-button');

// index 페이지 전용 기능: 필수 요소가 모두 존재할 때만 실행
if (languageSelect && topicInput && poemDiv && ttsButton) {

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

    poemDiv.textContent = processingMessage[language] || processingMessage['ko'];

    // 비디오 재생
    processingVideo.play();
    // TTS 버튼 비활성화
    ttsButton.disabled = true;
    // 중복 제출 방지
    submitButton.disabled = true;

    // 요청 타임아웃 설정 (30초)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
        const response = await fetch('https://oy3rkh5hgszlzgiibdxxmbpxte0mknfg.lambda-url.ap-northeast-2.on.aws/generate-poem', {
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

            // TTS 버튼 활성화
            ttsButton.disabled = false;

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
        }
    } catch (error) {
        clearTimeout(timeoutId);
        poemDiv.textContent = `${errMsg}: ${error.message}`;

        // 비디오 정지
        processingVideo.pause();
    } finally {
        // 제출 버튼 복구
        submitButton.disabled = false;
    }
});

// TTS 버튼 함수
ttsButton.addEventListener('click', function(event) {
    const language = languageSelect.value;
    const poem = poemDiv.textContent;
    const ttsLang = languageMap[language]?.ttsLang || 'ko-KR';

    const utterance = new SpeechSynthesisUtterance(poem);
    utterance.lang = ttsLang;
    window.speechSynthesis.speak(utterance);
});

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

    const analyticsChecked = true;
    const advertisingChecked = true;

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
