# i18n audit report

- 검사 루트: `/Users/jaekukryu/conductor/workspaces/AI-Poem-Web/boston/frontend`
- 언어 option 수: 31
- 검사 언어: ch

## 언어별 요약

| 언어 | 높음 | 중간 | 낮음 | 색인 허용 페이지 수 |
| --- | ---: | ---: | ---: | ---: |
| x-default | 10 | 41 | 50 | 9 |
| ch | 55 | 65 | 58 | 0 |

## 항목별 상세

| 파일:행 | 검사 코드 | 심각도 | 발견 내용 | 수정 제안 |
| --- | --- | --- | --- | --- |
| frontend/blog/ch/article-1.html:91 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ch/ 경로로 바꾸기. |
| frontend/blog/ch/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ch/ 경로로 바꾸기. |
| frontend/blog/ch/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ch/ 경로로 바꾸기. |
| frontend/blog/ch/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ch/ 경로로 바꾸기. |
| frontend/blog/ch/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ch/ 경로로 바꾸기. |
| frontend/blog/ch/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion"와 대상 h1 "Die Prinzipien, wie KI Gedichte schreibt: Die Begegnung von Technologie und Emotion" 불일치: blog/ch/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ch/index.html:106 | C3 | 높음 | 기사 링크 텍스트 "5 Tipps für gutes Schreiben: Kreativität mit KI"와 대상 h1 "5 Tipps für gutes Dichten: Kreativität mit KI" 불일치: blog/ch/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ch/index.html:118 | C3 | 높음 | 기사 링크 텍스트 "Inspiration aus den Schreibtechniken berühmter Dichter"와 대상 h1 "Inspiration aus den Schreibweisen berühmter Dichter" 불일치: blog/ch/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ch/index.html:131 | C3 | 높음 | 기사 링크 텍스트 "Die Zukunft des KI-Gedichtgenerators: Wird er Autoren ersetzen?"와 대상 h1 "Die Zukunft des AI Gedichtgenerators: Wird er die Schriftsteller ersetzen?" 불일치: blog/ch/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ch/index.html:143 | C3 | 높음 | 기사 링크 텍스트 "Berührende Reden und Briefe in 10 Sekunden mit KI erstellen"와 대상 h1 "Berührende Reden und Briefe, in 10 Sekunden mit AI erstellen" 불일치: blog/ch/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ch/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ch/author.html:1 | A3 | 높음 | 같은 ch 페이지에서 연결되지 않는 페이지: ch/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ch/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ch/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ch/faq.html:1 | A3 | 높음 | 같은 ch 페이지에서 연결되지 않는 페이지: ch/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ch/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ch/gallery.html:1 | A3 | 높음 | 같은 ch 페이지에서 연결되지 않는 페이지: ch/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ch/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ch/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Wie schnäll macht AI & Poem es Gedicht?", JSON-LD 질문="Wie schnäll macht AI & Poem es Gedicht?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ch/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Cha ich s Gedicht kommerziell bruuche?", JSON-LD 질문="Cha ich s Gedicht kommerziell bruuche?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ch/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Macht s Tool d Vorlesig automatisch?", JSON-LD 질문="Macht s Tool d Vorlesig automatisch?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ch/index.html:284 | C3 | 높음 | 기사 링크 텍스트 "Blog"와 대상 h1 "Die Prinzipien, wie KI Gedichte schreibt: Die Begegnung von Technologie und Emotion" 불일치: blog/ch/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ch/index.html:284 | C3 | 높음 | 기사 링크 텍스트 "Prinzipien und Zukunft von KI-Gedichtgeneratoren"와 대상 h1 "Die Prinzipien, wie KI Gedichte schreibt: Die Begegnung von Technologie und Emotion" 불일치: blog/ch/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ch/index.html:324 | C3 | 높음 | 기사 링크 텍스트 "Wie man berührende Hochzeitsreden schreibt"와 대상 h1 "5 Tipps für gutes Dichten: Kreativität mit KI" 불일치: blog/ch/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ch/index.html:330 | C3 | 높음 | 기사 링크 텍스트 "Sammlung emotionaler Zitate, die in sozialen Netzwerken beliebt sind"와 대상 h1 "Inspiration aus den Schreibweisen berühmter Dichter" 불일치: blog/ch/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ch/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ch/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ch/use-cases.html:1 | A3 | 높음 | 같은 ch 페이지에서 연결되지 않는 페이지: ch/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ch/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/faq.html:27 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="회원가입이나 로그인이 필요한가요?", JSON-LD 질문="회원가입이나 로그인이 필요한가요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/faq.html:37 | C4 | 높음 | FAQ 4 화면과 JSON-LD 불일치. 화면 질문="어떤 언어를 지원하나요?", JSON-LD 질문="어떤 언어를 지원하나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/faq.html:42 | C4 | 높음 | FAQ 5 화면과 JSON-LD 불일치. 화면 질문="음성 낭독 기능은 어떻게 사용하나요?", JSON-LD 질문="음성 낭독 기능은 어떻게 사용하나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/faq.html:47 | C4 | 높음 | FAQ 6 화면과 JSON-LD 불일치. 화면 질문="어떤 주제로도 시를 만들 수 있나요?", JSON-LD 질문="어떤 주제로도 시를 만들 수 있나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/faq.html:62 | C4 | 높음 | FAQ 9 화면과 JSON-LD 불일치. 화면 질문="AI가 시를 어떻게 만드나요?", JSON-LD 질문="AI가 시를 어떻게 만드나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/faq.html:67 | C4 | 높음 | FAQ 10 화면과 JSON-LD 불일치. 화면 질문="매번 다른 시가 나오나요?", JSON-LD 질문="매번 다른 시가 나오나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/faq.html:72 | C4 | 높음 | FAQ 11 화면과 JSON-LD 불일치. 화면 질문="AI 시와 사람이 쓴 시는 어떻게 다른가요?", JSON-LD 질문="AI 시와 사람이 쓴 시는 어떻게 다른가요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/faq.html:82 | C4 | 높음 | FAQ 13 화면과 JSON-LD 불일치. 화면 질문="AI 시의 저작권은 누구에게 있나요?", JSON-LD 질문="AI 시의 저작권은 누구에게 있나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/faq.html:87 | C4 | 높음 | FAQ 14 화면과 JSON-LD 불일치. 화면 질문="교육 목적으로 활용할 수 있나요?", JSON-LD 질문="교육 목적으로 활용할 수 있나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/faq.html:92 | C4 | 높음 | FAQ 15 화면과 JSON-LD 불일치. 화면 질문="치유나 감정 표현에도 시를 활용할 수 있나요?", JSON-LD 질문="치유나 감정 표현에도 시를 활용할 수 있나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | ch/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | ch/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | ch/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | ch/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | ch/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | ch/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | ch/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | ch/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | ch/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | ch/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | ch/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | ch/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | ch/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | ch/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | ch/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | ch/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | ch/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | ch/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | ch/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | ch/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | ch/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | ch/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | ch/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | ch/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | ch/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | ch/gallery-4.html에 대응 페이지 추가. |
| frontend/404.html:91 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:91 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:91 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:97 | C2 | 중간 | 같은 언어 href about.html의 링크 텍스트 2종류: 서비스 소개 / 소개 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:97 | C2 | 중간 | 같은 언어 href about.html의 링크 텍스트 2종류: 서비스 소개 / 소개 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:99 | C2 | 중간 | 같은 언어 href gallery.html의 링크 텍스트 3종류: 갤러리 / 시 갤러리 / 갤러리 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:99 | C2 | 중간 | 같은 언어 href gallery.html의 링크 텍스트 3종류: 갤러리 / 시 갤러리 / 갤러리 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:100 | C2 | 중간 | 같은 언어 href faq.html의 링크 텍스트 3종류: FAQ / 자주 묻는 질문 / FAQ 전체 보기 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:100 | C2 | 중간 | 같은 언어 href faq.html의 링크 텍스트 3종류: FAQ / 자주 묻는 질문 / FAQ 전체 보기 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:101 | C2 | 중간 | 같은 언어 href contact.html의 링크 텍스트 2종류: 문의하기 / 문의 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:154 | C2 | 중간 | 같은 언어 href author.html의 링크 텍스트 3종류: 저자 / 저자 소개 / 저자 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/404.html:156 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/about.html:71 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/about.html:79 | C2 | 중간 | 같은 언어 href author.html의 링크 텍스트 3종류: 저자 / 저자 소개 / 저자 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/about.html:79 | C2 | 중간 | 같은 언어 href author.html의 링크 텍스트 3종류: 저자 / 저자 소개 / 저자 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/about.html:115 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 한국어, 영어, 일본어, 중국어, 프랑스어 등 31개 언어를 지원하여 글로벌 사용자들이 모국어로 시를 즐깁니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/about.html:143 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/author.html:11 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/author.html:120 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem은 31개 언어를 지원하는 다국어 시 생성 서비스입니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/author.html:150 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ch/article-1.html:72 | C2 | 중간 | 같은 언어 href ch/index.html의 링크 텍스트 4종류: AI & Poem / ← Zurück zur Hauptseite / KI & Gedicht / Heim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ch/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/ch/index.html의 링크 텍스트 2종류: ← Zurück zur Liste / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ch/article-1.html:91 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ch/article-1.html:163 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ch/article-1.html:164 | C2 | 중간 | 같은 언어 href ch/privacy.html의 링크 텍스트 4종류: Datenschutzrichtlinie / Datenschutzbestimmungen / Datenschutz / Datenschutzerklärung | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ch/article-1.html:171 | C2 | 중간 | 같은 언어 href ch/terms.html의 링크 텍스트 2종류: Nutzungsbedingungen / Nutzigsbedingige | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ch/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ch/article-2.html:150 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ch/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ch/article-3.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ch/article-3.html:155 | C2 | 중간 | 같은 언어 href ch/privacy.html의 링크 텍스트 4종류: Datenschutzrichtlinie / Datenschutzbestimmungen / Datenschutz / Datenschutzerklärung | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ch/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ch/article-4.html:140 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ch/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ch/article-5.html:137 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ch/index.html:1 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI & Poem Blog | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ch/index.html:72 | C2 | 중간 | 같은 언어 href ch/index.html의 링크 텍스트 4종류: AI & Poem / ← Zurück zur Hauptseite / KI & Gedicht / Heim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ch/index.html:93 | C2 | 중간 | 같은 언어 href blog/ch/article-1.html의 링크 텍스트 3종류: Wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion / Blog / Prinzipien und Zukunft von KI-Gedichtgeneratoren | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ch/index.html:106 | C2 | 중간 | 같은 언어 href blog/ch/article-2.html의 링크 텍스트 2종류: 5 Tipps für gutes Schreiben: Kreativität mit KI / Wie man berührende Hochzeitsreden schreibt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ch/index.html:118 | C2 | 중간 | 같은 언어 href blog/ch/article-3.html의 링크 텍스트 2종류: Inspiration aus den Schreibtechniken berühmter Dichter / Sammlung emotionaler Zitate, die in sozialen Netzwerken beliebt sind | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ch/index.html:158 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ch/about.html:10 | C2 | 중간 | 같은 언어 href ch/about.html의 링크 텍스트 2종류: Um / Über uns | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/about.html:65 | C2 | 중간 | 같은 언어 href ch/index.html의 링크 텍스트 4종류: AI & Poem / ← Zurück zur Hauptseite / KI & Gedicht / Heim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/about.html:65 | C2 | 중간 | 같은 언어 href ch/index.html의 링크 텍스트 4종류: AI & Poem / ← Zurück zur Hauptseite / KI & Gedicht / Heim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/about.html:72 | C2 | 중간 | 같은 언어 href blog/ch/index.html의 링크 텍스트 2종류: ← Zurück zur Liste / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Wir unterstützen 31 Sprachen, darunter Koreanisch, Englisch, Japanisch, Chinesisch und Französisch, sodass Benutzer weltweit Gedichte in ihrer Muttersprache genießen können. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ch/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ch/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ch/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ch/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ch/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Wir unterstützen 31 Sprachen, darunter Schweizerdeutsch, Deutsch, Englisch, Koreanisch, Japanisch, Chinesisch, Spanisch und Französisch. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ch/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ch/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ch/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/ch/index.html:1 | D3 | 중간 | 알려진 미번역 문자열 "Service Overview" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ch/index.html:166 | C2 | 중간 | 같은 언어 href ch/about.html의 링크 텍스트 2종류: Um / Über uns | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ch/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ch/index.html:235 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/ch/index.html:236 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ch/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/index.html:242 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/index.html:242 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ch/index.html:253 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Mit Unterstützung von 31 Sprachen, darunter Koreanisch, Englisch und Französisch, können Sie Texte für verschiedene Zwecke wie Hochzeitsreden, Liebesbriefe und emotionale SNS-Bildunterschriften in nur 10 Sekunden fertigstellen. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ch/index.html:284 | C2 | 중간 | 같은 언어 href blog/ch/article-1.html의 링크 텍스트 3종류: Wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion / Blog / Prinzipien und Zukunft von KI-Gedichtgeneratoren | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/index.html:284 | C2 | 중간 | 같은 언어 href blog/ch/article-1.html의 링크 텍스트 3종류: Wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion / Blog / Prinzipien und Zukunft von KI-Gedichtgeneratoren | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/index.html:324 | C2 | 중간 | 같은 언어 href blog/ch/article-2.html의 링크 텍스트 2종류: 5 Tipps für gutes Schreiben: Kreativität mit KI / Wie man berührende Hochzeitsreden schreibt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/index.html:330 | C2 | 중간 | 같은 언어 href blog/ch/article-3.html의 링크 텍스트 2종류: Inspiration aus den Schreibtechniken berühmter Dichter / Sammlung emotionaler Zitate, die in sozialen Netzwerken beliebt sind | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/index.html:337 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ch/index.html:346 | C2 | 중간 | 같은 언어 href ch/privacy.html의 링크 텍스트 4종류: Datenschutzrichtlinie / Datenschutzbestimmungen / Datenschutz / Datenschutzerklärung | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/index.html:348 | C2 | 중간 | 같은 언어 href ch/terms.html의 링크 텍스트 2종류: Nutzungsbedingungen / Nutzigsbedingige | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ch/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ch/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ch/terms.html:110 | C2 | 중간 | 같은 언어 href ch/privacy.html의 링크 텍스트 4종류: Datenschutzrichtlinie / Datenschutzbestimmungen / Datenschutz / Datenschutzerklärung | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ch/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ch/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/contact.html:151 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/faq.html:207 | C2 | 중간 | 같은 언어 href gallery.html의 링크 텍스트 3종류: 갤러리 / 시 갤러리 / 갤러리 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/faq.html:209 | C2 | 중간 | 같은 언어 href contact.html의 링크 텍스트 2종류: 문의하기 / 문의 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/faq.html:245 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어를 포함해 31개 언어를 지원합니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/faq.html:245 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시 쓰기 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/faq.html:330 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/gallery.html:139 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/index.html:175 | C2 | 중간 | 같은 언어 href faq.html의 링크 텍스트 3종류: FAQ / 자주 묻는 질문 / FAQ 전체 보기 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/index.html:225 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/index.html:241 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/index.html:242 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/index.html:248 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/index.html:358 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/privacy.html:10 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/privacy.html:103 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/privacy.html:208 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/terms.html:167 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/use-cases.html:88 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/use-cases.html:109 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 한국어, 영어, 일본어, 중국어, 프랑스어 등 31개 언어를 지원하니 전 세계 어디서든 모국어로 시를 즐기게 됩니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/use-cases.html:177 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/404.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/404.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/404.html:33 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/404.html:38 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/404.html:42 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/about.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/about.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/about.html:71 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/about.html:90 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/about.html:92 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/author.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/author.html:84 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/author.html:105 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/author.html:110 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/author.html:120 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/author.html:123 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/ch/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ch/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ch/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ch/article-1.html:10 | E3 | 낮음 | de-CH 페이지에 ß 포함. | 스위스 독일어 표기에 맞게 ss 사용. |
| frontend/blog/ch/article-1.html:104 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: Im Kern der Fähigkeit von KI, Gedichte zu schreiben, steht das **große Sprachmodell (Large Language Model, LLM)**. Modelle wie GPT haben Milliarden von Sätzen und Textdaten gelernt. In diesem Prozess lernt die KI nicht nur, Wörter zu memorieren, sondern auch die probabilistischen Beziehungen zwischen Wörtern, den Kontext und die Nuancen. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/ch/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ch/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ch/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ch/article-2.html:94 | E3 | 낮음 | de-CH 페이지에 ß 포함. | 스위스 독일어 표기에 맞게 ss 사용. |
| frontend/blog/ch/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ch/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ch/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ch/article-3.html:10 | E3 | 낮음 | de-CH 페이지에 ß 포함. | 스위스 독일어 표기에 맞게 ss 사용. |
| frontend/blog/ch/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ch/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ch/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ch/article-4.html:110 | E3 | 낮음 | de-CH 페이지에 ß 포함. | 스위스 독일어 표기에 맞게 ss 사용. |
| frontend/blog/ch/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ch/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ch/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ch/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ch/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ch/index.html:100 | E3 | 낮음 | de-CH 페이지에 ß 포함. | 스위스 독일어 표기에 맞게 ss 사용. |
| frontend/ch/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ch/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ch/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ch/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ch/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ch/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ch/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ch/about.html:82 | E3 | 낮음 | de-CH 페이지에 ß 포함. | 스위스 독일어 표기에 맞게 ss 사용. |
| frontend/ch/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: n.Er | 문장부호 뒤에 공백 추가. |
| frontend/ch/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ch/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ch/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ch/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ch/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ch/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ch/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ch/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ch/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ch/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ch/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ch/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ch/index.html:1 | F1 | 낮음 | 한글 HTML 주석 50개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ch/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ch/index.html:243 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ch/index.html:249 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ch/index.html:278 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ch/index.html:320 | E3 | 낮음 | de-CH 페이지에 ß 포함. | 스위스 독일어 표기에 맞게 ss 사용. |
| frontend/ch/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ch/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ch/privacy.html:118 | E3 | 낮음 | de-CH 페이지에 ß 포함. | 스위스 독일어 표기에 맞게 ss 사용. |
| frontend/ch/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ch/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ch/terms.html:89 | E3 | 낮음 | de-CH 페이지에 ß 포함. | 스위스 독일어 표기에 맞게 ss 사용. |
| frontend/ch/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ch/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/contact.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/contact.html:90 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/faq.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:199 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:217 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:224 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:295 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/gallery.html:84 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/index.html:1 | F1 | 낮음 | 한글 HTML 주석 25개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/index.html:249 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/privacy.html:76 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/terms.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/use-cases.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:109 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:115 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:122 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |

## 공통 문제

공통 문제 없음.
