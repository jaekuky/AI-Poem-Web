# i18n audit report

- 검사 루트: `/Users/jaekukryu/conductor/workspaces/AI-Poem-Web/boston/frontend`
- 언어 option 수: 31
- 검사 언어: ar, bn, ch, da, de, el, en, es, fi, fil, fr, hi, hu, id, it, ja, ko, mn, ms, nl, no, pl, pt, ru, sv, sw, th, tr, uk, vi, zh

## 언어별 요약

| 언어 | 높음 | 중간 | 낮음 | 색인 허용 페이지 수 |
| --- | ---: | ---: | ---: | ---: |
| x-default | 10 | 41 | 50 | 9 |
| ar | 47 | 60 | 42 | 0 |
| bn | 54 | 60 | 47 | 0 |
| ch | 55 | 65 | 58 | 0 |
| da | 50 | 73 | 59 | 0 |
| de | 55 | 61 | 47 | 0 |
| el | 53 | 66 | 48 | 0 |
| en | 48 | 160 | 100 | 24 |
| es | 52 | 188 | 103 | 0 |
| fi | 55 | 69 | 47 | 0 |
| fil | 49 | 69 | 50 | 0 |
| fr | 51 | 188 | 102 | 0 |
| hi | 50 | 55 | 33 | 0 |
| hu | 53 | 75 | 58 | 0 |
| id | 58 | 60 | 49 | 0 |
| it | 54 | 67 | 45 | 0 |
| ja | 47 | 173 | 99 | 0 |
| ko | 192 | 211 | 128 | 40 |
| mn | 47 | 60 | 42 | 0 |
| ms | 58 | 64 | 49 | 0 |
| nl | 53 | 74 | 58 | 0 |
| no | 53 | 74 | 58 | 0 |
| pl | 55 | 64 | 44 | 0 |
| pt | 54 | 66 | 45 | 0 |
| ru | 55 | 65 | 44 | 0 |
| sv | 54 | 65 | 49 | 0 |
| sw | 47 | 59 | 48 | 0 |
| th | 54 | 63 | 43 | 0 |
| tr | 54 | 67 | 44 | 0 |
| uk | 55 | 65 | 46 | 0 |
| vi | 54 | 62 | 49 | 0 |
| zh | 63 | 188 | 100 | 0 |

## 항목별 상세

| 파일:행 | 검사 코드 | 심각도 | 발견 내용 | 수정 제안 |
| --- | --- | --- | --- | --- |
| frontend/ar/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "منظمة العفو الدولية وقصيدة". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ar/author.html:1 | A3 | 높음 | 같은 ar 페이지에서 연결되지 않는 페이지: ar/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ar/author.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "منظمة العفو الدولية وقصيدة". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ar/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "منظمة العفو الدولية وقصيدة". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ar/faq.html:1 | A3 | 높음 | 같은 ar 페이지에서 연결되지 않는 페이지: ar/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ar/faq.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "منظمة العفو الدولية وقصيدة". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ar/gallery.html:1 | A3 | 높음 | 같은 ar 페이지에서 연결되지 않는 페이지: ar/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ar/gallery.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "منظمة العفو الدولية وقصيدة". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ar/index.html:278 | C3 | 높음 | 기사 링크 텍스트 "مدونة"와 대상 h1 "مبدأ كتابة الذكاء الاصطناعي للشعر: لقاء التكنولوجيا والعاطفة" 불일치: blog/ar/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ar/index.html:278 | C3 | 높음 | 기사 링크 텍스트 "مبادئ ومستقبل مولدات القصائد بالذكاء الاصطناعي"와 대상 h1 "مبدأ كتابة الذكاء الاصطناعي للشعر: لقاء التكنولوجيا والعاطفة" 불일치: blog/ar/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ar/index.html:318 | C3 | 높음 | 기사 링크 텍스트 "كيفية كتابة خطابات زفاف مؤثرة"와 대상 h1 "5 نصائح لكتابة شعر رائع: الإبداع مع الذكاء الاصطناعي" 불일치: blog/ar/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ar/index.html:322 | C3 | 높음 | 기사 링크 텍스트 "مجموعة من الاقتباسات العاطفية الشائعة على SNS"와 대상 h1 "إلهام من حرفة الشعراء المشهورين" 불일치: blog/ar/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ar/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ar/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ar/use-cases.html:1 | A3 | 높음 | 같은 ar 페이지에서 연결되지 않는 페이지: ar/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ar/use-cases.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "منظمة العفو الدولية وقصيدة". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/ar/article-1.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ar/ 경로로 바꾸기. |
| frontend/blog/ar/article-2.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ar/ 경로로 바꾸기. |
| frontend/blog/ar/article-3.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ar/ 경로로 바꾸기. |
| frontend/blog/ar/article-4.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ar/ 경로로 바꾸기. |
| frontend/blog/ar/article-5.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ar/ 경로로 바꾸기. |
| frontend/blog/bn/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /bn/ 경로로 바꾸기. |
| frontend/blog/bn/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /bn/ 경로로 바꾸기. |
| frontend/blog/bn/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /bn/ 경로로 바꾸기. |
| frontend/blog/bn/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /bn/ 경로로 바꾸기. |
| frontend/blog/bn/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /bn/ 경로로 바꾸기. |
| frontend/blog/bn/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "AI কিভাবে কবিতা লেখে: প্রযুক্তি এবং অনুভূতির মিলন"와 대상 h1 "এআই দ্বারা কবিতা লেখার নীতি: প্রযুক্তি এবং অনুভূতির মিলন" 불일치: blog/bn/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/bn/index.html:115 | C3 | 높음 | 기사 링크 텍스트 "প্রখ্যাত কবিদের লেখার পদ্ধতি থেকে অনুপ্রেরণা গ্রহণ"와 대상 h1 "প্রখ্যাত কবিদের লেখার কৌশল থেকে অনুপ্রেরণা" 불일치: blog/bn/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/bn/index.html:126 | C3 | 높음 | 기사 링크 텍스트 "AI কবিতা তৈরি করার ভবিষ্যৎ: লেখককে প্রতিস্থাপন করবে?"와 대상 h1 "AI কবিতা সৃষ্টির ভবিষ্যৎ: লেখককে প্রতিস্থাপন করবে কি?" 불일치: blog/bn/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/bn/index.html:137 | C3 | 높음 | 기사 링크 텍스트 "আবেগপূর্ণ বক্তৃতা এবং চিঠি, AI দ্বারা ১০ সেকেন্ডে সম্পন্ন করুন"와 대상 h1 "আবেগময় বক্তৃতা এবং চিঠি, AI দিয়ে 10 সেকেন্ডে সম্পন্ন করুন" 불일치: blog/bn/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
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
| frontend/blog/da/article-1.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /da/ 경로로 바꾸기. |
| frontend/blog/da/article-2.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /da/ 경로로 바꾸기. |
| frontend/blog/da/article-3.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /da/ 경로로 바꾸기. |
| frontend/blog/da/article-4.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /da/ 경로로 바꾸기. |
| frontend/blog/da/article-5.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /da/ 경로로 바꾸기. |
| frontend/blog/da/index.html:128 | C3 | 높음 | 기사 링크 텍스트 "Fremtiden for AI-digtgeneratorer: Vil de erstatte forfattere?"와 대상 h1 "Fremtiden for AI-digtgeneratorer" 불일치: blog/da/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/da/index.html:138 | C3 | 높음 | 기사 링크 텍스트 "Skab rørende taler og breve på 10 sekunder med AI"와 대상 h1 "Skab rørende taler og breve med AI" 불일치: blog/da/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/de/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /de/ 경로로 바꾸기. |
| frontend/blog/de/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /de/ 경로로 바꾸기. |
| frontend/blog/de/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /de/ 경로로 바꾸기. |
| frontend/blog/de/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /de/ 경로로 바꾸기. |
| frontend/blog/de/article-5.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/de/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /de/ 경로로 바꾸기. |
| frontend/blog/de/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion"와 대상 h1 "Die Prinzipien, wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion" 불일치: blog/de/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/de/index.html:106 | C3 | 높음 | 기사 링크 텍스트 "5 Tipps für gutes Schreiben: Kreatives Arbeiten mit KI"와 대상 h1 "5 Tipps für das Schreiben von Gedichten: Kreativität mit KI" 불일치: blog/de/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/de/index.html:131 | C3 | 높음 | 기사 링크 텍스트 "Die Zukunft des KI-Poesie-Generators: Wird er Schriftsteller ersetzen?"와 대상 h1 "Die Zukunft des AI-Poesie-Generators: Wird er die Schriftsteller ersetzen?" 불일치: blog/de/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/de/index.html:143 | C3 | 높음 | 기사 링크 텍스트 "Rührende Ansprachen und Briefe in 10 Sekunden mit KI erstellen"와 대상 h1 "Beeindruckende Reden und Briefe, in 10 Sekunden mit KI erstellen" 불일치: blog/de/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/el/article-1.html:91 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /el/ 경로로 바꾸기. |
| frontend/blog/el/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /el/ 경로로 바꾸기. |
| frontend/blog/el/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /el/ 경로로 바꾸기. |
| frontend/blog/el/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /el/ 경로로 바꾸기. |
| frontend/blog/el/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /el/ 경로로 바꾸기. |
| frontend/blog/el/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Η αρχή που γράφει ποιήματα AI: Η συνάντηση τεχνολογίας και συναισθήματος"와 대상 h1 "Η αρχή της δημιουργίας ποιημάτων από την AI: Η συνάντηση της τεχνολογίας και της ευαισθησίας" 불일치: blog/el/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/el/index.html:106 | C3 | 높음 | 기사 링크 텍스트 "5 συμβουλές για να γράφετε καλά ποιήματα: Δημιουργία με AI"와 대상 h1 "5 Συμβουλές για να γράφετε ποιήματα: Δημιουργία με AI" 불일치: blog/el/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/el/index.html:143 | C3 | 높음 | 기사 링크 텍스트 "Συγκινητικοί χαιρετισμοί και γράμματα, ολοκληρώστε τα σε 10 δευτερόλεπτα με AI"와 대상 h1 "Συγκινητικοί χαιρετισμοί και επιστολές, ολοκληρώστε σε 10 δευτερόλεπτα με AI" 불일치: blog/el/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/en/article-1.html:98 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/article-10.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/article-2.html:98 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/article-3.html:98 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/article-4.html:98 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/article-5.html:98 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/article-6.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/article-7.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/article-8.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/article-9.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /en/ 경로로 바꾸기. |
| frontend/blog/en/index.html:115 | C3 | 높음 | 기사 링크 텍스트 "5 Tips for Writing Great Poetry: Creating with AI"와 대상 h1 "5 Tips for Writing Poetry Well: Creating with AI" 불일치: blog/en/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/en/index.html:126 | C3 | 높음 | 기사 링크 텍스트 "Inspiration from the Craft of Famous Poets"와 대상 h1 "Inspiration from the Techniques of Famous Poets" 불일치: blog/en/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/en/index.html:149 | C3 | 높음 | 기사 링크 텍스트 "Create Touching Speeches and Letters in 10 Seconds with AI"와 대상 h1 "Creating Touching Speeches and Letters in 10 Seconds with AI" 불일치: blog/en/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/en/index.html:171 | C3 | 높음 | 기사 링크 텍스트 "Writing Poetry in 31 Languages: The Secret of Multilingual AI Poetry"와 대상 h1 "Writing Poetry in 31 Languages: The Secrets of AI Multilingual Poetry" 불일치: blog/en/article-7.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/en/index.html:191 | C3 | 높음 | 기사 링크 텍스트 "The AI Poet in the Classroom: Educational Applications of AI Poetry Generators"와 대상 h1 "AI Poets in the Classroom: Educational Applications of AI Poetry Generators" 불일치: blog/en/article-9.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/en/index.html:201 | C3 | 높음 | 기사 링크 텍스트 "Who Owns the Poem AI Wrote?: Copyright and Ethics"와 대상 h1 "Who Owns AI-Written Poetry? Copyright and Ethical Issues" 불일치: blog/en/article-10.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/es/article-1.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/article-10.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/article-2.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/article-3.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/article-4.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/article-5.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/article-6.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/article-7.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/article-8.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/article-9.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /es/ 경로로 바꾸기. |
| frontend/blog/es/index.html:94 | C3 | 높음 | 기사 링크 텍스트 "El principio de la escritura de poesía por IA: el encuentro de la tecnología y la emoción"와 대상 h1 "El principio de cómo la IA escribe poesía: el encuentro entre tecnología y emoción" 불일치: blog/es/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/es/index.html:107 | C3 | 높음 | 기사 링크 텍스트 "5 consejos para escribir buena poesía: creación junto a la IA"와 대상 h1 "5 consejos para escribir poesía: Creación con IA" 불일치: blog/es/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/es/index.html:120 | C3 | 높음 | 기사 링크 텍스트 "Inspiración a partir de las técnicas de poetas famosos"와 대상 h1 "Inspiración a través de las técnicas de poetas famosos" 불일치: blog/es/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/es/index.html:132 | C3 | 높음 | 기사 링크 텍스트 "El futuro del generador de poesía AI: ¿reemplazará a los escritores?"와 대상 h1 "El futuro del generador de poesía AI: ¿sustituirá a los escritores?" 불일치: blog/es/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/es/index.html:144 | C3 | 높음 | 기사 링크 텍스트 "Crear discursos emotivos y cartas en 10 segundos con IA"와 대상 h1 "Crear discursos y cartas conmovedoras en 10 segundos con IA" 불일치: blog/es/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fi/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fi/ 경로로 바꾸기. |
| frontend/blog/fi/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fi/ 경로로 바꾸기. |
| frontend/blog/fi/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fi/ 경로로 바꾸기. |
| frontend/blog/fi/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fi/ 경로로 바꾸기. |
| frontend/blog/fi/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fi/ 경로로 바꾸기. |
| frontend/blog/fi/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Kuinka tekoäly kirjoittaa runoja: teknologian ja tunteiden kohtaaminen"와 대상 h1 "AI:n runouden kirjoittamisen periaate: teknologian ja tunteiden kohtaaminen" 불일치: blog/fi/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fi/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "5 vinkkiä hyvän runon kirjoittamiseen: luovuus tekoälyn kanssa"와 대상 h1 "Viisi vinkkiä hyvän runon kirjoittamiseen: Luominen AI:n kanssa" 불일치: blog/fi/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fi/index.html:118 | C3 | 높음 | 기사 링크 텍스트 "Inspiraatiota kuuluisilta runoilijoilta"와 대상 h1 "Inspiraatiota oppimalla kuuluisilta runoilijoilta" 불일치: blog/fi/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fi/index.html:129 | C3 | 높음 | 기사 링크 텍스트 "Tekoälyrunojen generaattorin tulevaisuus: korvaako se kirjailijat?"와 대상 h1 "AI-runouden generaattorin tulevaisuus: Korvataanko kirjailijat?" 불일치: blog/fi/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fi/index.html:141 | C3 | 높음 | 기사 링크 텍스트 "Liikuttavat puheet ja kirjeet, valmiiksi 10 sekunnissa tekoälyn avulla"와 대상 h1 "Liikuttavat puheet ja kirjeet, valmiiksi 10 sekunnissa AI:lla" 불일치: blog/fi/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fil/article-1.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fil/ 경로로 바꾸기. |
| frontend/blog/fil/article-2.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fil/ 경로로 바꾸기. |
| frontend/blog/fil/article-3.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fil/ 경로로 바꾸기. |
| frontend/blog/fil/article-4.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fil/ 경로로 바꾸기. |
| frontend/blog/fil/article-5.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fil/ 경로로 바꾸기. |
| frontend/blog/fil/index.html:92 | C3 | 높음 | 기사 링크 텍스트 "Ang prinsipyo ng AI na pagsulat ng tula: Ang pagtatagpo ng teknolohiya at emosyon"와 대상 h1 "Ang prinsipyo ng AI na pagsulat ng tula" 불일치: blog/fil/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fil/index.html:102 | C3 | 높음 | 기사 링크 텍스트 "5 tip para sa pagsulat ng magagandang tula: Paglikha gamit ang AI"와 대상 h1 "5 tip para sa pagsulat ng magagandang tula" 불일치: blog/fil/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fil/index.html:112 | C3 | 높음 | 기사 링크 텍스트 "Inspirasyon mula sa sining ng mga tanyag na makata"와 대상 h1 "Inspirasyon mula sa mga tanyag na makata" 불일치: blog/fil/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fil/index.html:122 | C3 | 높음 | 기사 링크 텍스트 "Ang hinaharap ng mga AI poem generator: Papalitan ba nila ang mga manunulat?"와 대상 h1 "Ang hinaharap ng mga AI poem generator" 불일치: blog/fil/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fil/index.html:132 | C3 | 높음 | 기사 링크 텍스트 "Gumawa ng nakakaantig na mga talumpati at liham sa loob ng 10 segundo gamit ang AI"와 대상 h1 "Nakakaantig na mga talumpati gamit ang AI" 불일치: blog/fil/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fr/article-1.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/article-10.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/article-2.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/article-3.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/article-4.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/article-5.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/article-6.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/article-7.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/article-8.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/article-9.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /fr/ 경로로 바꾸기. |
| frontend/blog/fr/index.html:107 | C3 | 높음 | 기사 링크 텍스트 "5 conseils pour bien écrire de la poésie : création avec l'IA"와 대상 h1 "5 conseils pour bien écrire des poèmes : Création avec l'IA" 불일치: blog/fr/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fr/index.html:120 | C3 | 높음 | 기사 링크 텍스트 "S'inspirer des méthodes des poètes célèbres"와 대상 h1 "Inspiration tirée des méthodes des poètes célèbres" 불일치: blog/fr/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fr/index.html:131 | C3 | 높음 | 기사 링크 텍스트 "L'avenir des générateurs de poésie IA : vont-ils remplacer les écrivains ?"와 대상 h1 "Le futur des générateurs de poésie AI : vont-ils remplacer les écrivains ?" 불일치: blog/fr/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/fr/index.html:143 | C3 | 높음 | 기사 링크 텍스트 "Créer des discours et lettres émouvants en 10 secondes avec l'IA"와 대상 h1 "Créer des discours et des lettres émouvants en 10 secondes avec l'IA" 불일치: blog/fr/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/hi/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hi/ 경로로 바꾸기. |
| frontend/blog/hi/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hi/ 경로로 바꾸기. |
| frontend/blog/hi/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hi/ 경로로 바꾸기. |
| frontend/blog/hi/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hi/ 경로로 바꾸기. |
| frontend/blog/hi/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hi/ 경로로 바꾸기. |
| frontend/blog/hi/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "अच्छी कविता लिखने के 5 टिप्स: AI के साथ रचनात्मकता"와 대상 h1 "कविता लिखने के 5 बेहतरीन टिप्स: AI के साथ रचना" 불일치: blog/hi/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/hi/index.html:116 | C3 | 높음 | 기사 링크 텍스트 "प्रसिद्ध कवियों की लेखन शैली से प्रेरणा लेना"와 대상 h1 "प्रसिद्ध कवियों की लेखन कला से प्रेरणा" 불일치: blog/hi/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/hi/index.html:127 | C3 | 높음 | 기사 링크 텍스트 "AI कविता निर्माणकर्ता का भविष्य: क्या लेखक को प्रतिस्थापित करेगा?"와 대상 h1 "AI कविता जनरेटर का भविष्य: क्या यह लेखकों को प्रतिस्थापित करेगा?" 불일치: blog/hi/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/hi/index.html:139 | C3 | 높음 | 기사 링크 텍스트 "भावनात्मक भाषण और पत्र, AI से 10 सेकंड में तैयार करें"와 대상 h1 "भावनात्मक भाषण और पत्र, AI से 10 सेकंड में पूरा करें" 불일치: blog/hi/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/hu/article-1.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hu/ 경로로 바꾸기. |
| frontend/blog/hu/article-2.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hu/ 경로로 바꾸기. |
| frontend/blog/hu/article-3.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hu/ 경로로 바꾸기. |
| frontend/blog/hu/article-4.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hu/ 경로로 바꾸기. |
| frontend/blog/hu/article-5.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /hu/ 경로로 바꾸기. |
| frontend/blog/hu/index.html:98 | C3 | 높음 | 기사 링크 텍스트 "Az AI versírás elve: A technológia és az érzelem találkozása"와 대상 h1 "Az AI versírás elve" 불일치: blog/hu/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/hu/index.html:108 | C3 | 높음 | 기사 링크 텍스트 "5 tipp nagyszerű versek írásához: Alkotás AI-val"와 대상 h1 "5 tipp nagyszerű versek írásához" 불일치: blog/hu/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/hu/index.html:118 | C3 | 높음 | 기사 링크 텍스트 "Inspiráció híres költők mesterségéből"와 대상 h1 "Inspiráció híres költőktől" 불일치: blog/hu/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/hu/index.html:128 | C3 | 높음 | 기사 링크 텍스트 "Az AI versgenerátorok jövője: Helyettesítik az írókat?"와 대상 h1 "Az AI versgenerátorok jövője" 불일치: blog/hu/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/hu/index.html:138 | C3 | 높음 | 기사 링크 텍스트 "Készítsen megható beszédeket és leveleket 10 másodperc alatt AI-val"와 대상 h1 "Megható beszédek AI-val" 불일치: blog/hu/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/id/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /id/ 경로로 바꾸기. |
| frontend/blog/id/article-2.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/id/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /id/ 경로로 바꾸기. |
| frontend/blog/id/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /id/ 경로로 바꾸기. |
| frontend/blog/id/article-4.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/id/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /id/ 경로로 바꾸기. |
| frontend/blog/id/article-5.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/id/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /id/ 경로로 바꾸기. |
| frontend/blog/id/index.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/id/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "5 Tips Menulis Puisi dengan Baik: Kreativitas Bersama AI"와 대상 h1 "5 Tips Menulis Puisi yang Baik: Kreativitas Bersama AI" 불일치: blog/id/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/id/index.html:118 | C3 | 높음 | 기사 링크 텍스트 "Inspirasi dari Gaya Penulisan Penyair Terkenal"와 대상 h1 "Inspirasi dari Teknik Penyair Terkenal" 불일치: blog/id/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/id/index.html:129 | C3 | 높음 | 기사 링크 텍스트 "Masa Depan Generator Puisi AI: Apakah Akan Menggantikan Penulis?"와 대상 h1 "Masa Depan Generator Puisi AI: Akankah Menggantikan Penulis?" 불일치: blog/id/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/id/index.html:141 | C3 | 높음 | 기사 링크 텍스트 "Menyelesaikan Ucapan dan Surat yang Mengharukan dalam 10 Detik dengan AI"와 대상 h1 "Menyusun Ucapan dan Surat yang Mengharukan dalam 10 Detik dengan AI" 불일치: blog/id/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/it/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /it/ 경로로 바꾸기. |
| frontend/blog/it/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /it/ 경로로 바꾸기. |
| frontend/blog/it/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /it/ 경로로 바꾸기. |
| frontend/blog/it/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /it/ 경로로 바꾸기. |
| frontend/blog/it/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /it/ 경로로 바꾸기. |
| frontend/blog/it/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Il principio per cui l'AI scrive poesie: l'incontro tra tecnologia ed emozione"와 대상 h1 "Il principio per cui l'AI scrive poesia: l'incontro tra tecnologia e sensibilità" 불일치: blog/it/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/it/index.html:106 | C3 | 높음 | 기사 링크 텍스트 "5 consigli per scrivere bene poesie: creazione con l'AI"와 대상 h1 "5 consigli per scrivere poesie: Creazione con l'AI" 불일치: blog/it/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/it/index.html:119 | C3 | 높음 | 기사 링크 텍스트 "Ispirazione dalle tecniche dei poeti famosi"와 대상 h1 "Ispirazione dai metodi dei poeti famosi" 불일치: blog/it/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/it/index.html:130 | C3 | 높음 | 기사 링크 텍스트 "Il futuro dei generatori di poesie AI: sostituiranno gli scrittori?"와 대상 h1 "Il futuro del generatore di poesie AI: sostituirà gli scrittori?" 불일치: blog/it/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ja/article-1.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/article-10.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/article-2.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/article-3.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/article-4.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/article-5.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/article-6.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/article-7.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/article-8.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/article-9.html:88 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ja/ 경로로 바꾸기. |
| frontend/blog/ja/index.html:150 | C3 | 높음 | 기사 링크 텍스트 "AI詩と感情の癒し：書くセラピーの新しい可能性"와 대상 h1 "AI詩と感情の癒し：ライティングセラピーの新しい可能性" 불일치: blog/ja/article-6.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:336 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:337 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:338 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:341 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:342 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:343 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:344 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:212 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:213 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:214 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:217 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:218 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:219 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:220 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-1.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-10.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-2.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-3.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-4.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-5.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-6.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-7.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-8.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/article-9.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:322 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:323 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:324 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:327 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:328 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:329 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-birthday-bilingual.html:330 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:290 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:291 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:292 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:295 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:296 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:297 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-hwangap-tribute.html:298 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:268 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:269 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:270 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:273 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:274 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:275 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/case-wedding-toast.html:276 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:213 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:214 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:215 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:218 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:219 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:220 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:221 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:76 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:76 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:76 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:376 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:377 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:378 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:381 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:382 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:383 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:384 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/index.html:385 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/isang-ogamdo.html:93 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/jeongjiyong-hyangsu.html:93 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/kimsowol-jindallaekkot.html:93 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:223 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:224 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:225 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:228 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:229 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:230 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:231 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:92 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:270 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:271 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:272 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:275 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:276 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:277 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poems-for-tts-reading.html:278 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:212 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:213 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:214 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:217 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:218 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:219 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/poetry-recitation-revival.html:220 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:304 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:305 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:306 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:309 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:310 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:311 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/sijo-meter-for-ai.html:312 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:64 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /index.html | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:233 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:234 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:235 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:238 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:239 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:240 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/tts-vs-human-recitation.html:241 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:5 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: / | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:91 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:91 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:91 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:302 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /gallery | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:303 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /faq | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:304 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /use-cases | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:307 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /about | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:308 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /privacy | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:309 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /terms | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:310 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /contact | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/ko/yoondongju-seosi.html:93 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ko/ 경로로 바꾸기. |
| frontend/blog/mn/article-1.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /mn/ 경로로 바꾸기. |
| frontend/blog/mn/article-2.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /mn/ 경로로 바꾸기. |
| frontend/blog/mn/article-3.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /mn/ 경로로 바꾸기. |
| frontend/blog/mn/article-4.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /mn/ 경로로 바꾸기. |
| frontend/blog/mn/article-5.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /mn/ 경로로 바꾸기. |
| frontend/blog/ms/article-1.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puem". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/ms/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ms/ 경로로 바꾸기. |
| frontend/blog/ms/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ms/ 경로로 바꾸기. |
| frontend/blog/ms/article-3.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/ms/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ms/ 경로로 바꾸기. |
| frontend/blog/ms/article-4.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/ms/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ms/ 경로로 바꾸기. |
| frontend/blog/ms/article-5.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/ms/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ms/ 경로로 바꾸기. |
| frontend/blog/ms/index.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/blog/ms/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "5 Tip Menulis Puisi yang Baik: Kreativiti Bersama AI"와 대상 h1 "5 Tips Menulis Puisi dengan Baik: Kreativiti Bersama AI" 불일치: blog/ms/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ms/index.html:117 | C3 | 높음 | 기사 링크 텍스트 "Inspirasi dari Cara Penulisan Penyair Terkenal"와 대상 h1 "Inspirasi dari Teknik Penulisan Penyair Terkenal" 불일치: blog/ms/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ms/index.html:128 | C3 | 높음 | 기사 링크 텍스트 "Masa Depan Pencipta Puisi AI: Adakah Ia Akan Menggantikan Penulis?"와 대상 h1 "Masa Depan Generator Puisi AI: Adakah Ia Akan Menggantikan Penulis?" 불일치: blog/ms/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/nl/article-1.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /nl/ 경로로 바꾸기. |
| frontend/blog/nl/article-2.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /nl/ 경로로 바꾸기. |
| frontend/blog/nl/article-3.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /nl/ 경로로 바꾸기. |
| frontend/blog/nl/article-4.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /nl/ 경로로 바꾸기. |
| frontend/blog/nl/article-5.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /nl/ 경로로 바꾸기. |
| frontend/blog/nl/index.html:98 | C3 | 높음 | 기사 링크 텍스트 "Het principe van AI die poëzie schrijft: De ontmoeting van technologie en emotie"와 대상 h1 "Het principe van AI die poëzie schrijft" 불일치: blog/nl/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/nl/index.html:108 | C3 | 높음 | 기사 링크 텍스트 "5 tips voor het schrijven van geweldige poëzie"와 대상 h1 "5 tips voor geweldige poëzie" 불일치: blog/nl/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/nl/index.html:118 | C3 | 높음 | 기사 링크 텍스트 "Inspiratie uit het ambacht van beroemde dichters"와 대상 h1 "Inspiratie van beroemde dichters" 불일치: blog/nl/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/nl/index.html:128 | C3 | 높음 | 기사 링크 텍스트 "De toekomst van AI-poëziegeneratoren"와 대상 h1 "De toekomst van AI-poëzie" 불일치: blog/nl/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/nl/index.html:138 | C3 | 높음 | 기사 링크 텍스트 "Maak ontroerende toespraken en brieven in 10 seconden"와 대상 h1 "Ontroerende toespraken met AI" 불일치: blog/nl/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/no/article-1.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /no/ 경로로 바꾸기. |
| frontend/blog/no/article-2.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /no/ 경로로 바꾸기. |
| frontend/blog/no/article-3.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /no/ 경로로 바꾸기. |
| frontend/blog/no/article-4.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /no/ 경로로 바꾸기. |
| frontend/blog/no/article-5.html:94 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /no/ 경로로 바꾸기. |
| frontend/blog/no/index.html:98 | C3 | 높음 | 기사 링크 텍스트 "Prinsippet bak AI-poesi: Møtet mellom teknologi og følelser"와 대상 h1 "Prinsippet bak AI-poesi" 불일치: blog/no/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/no/index.html:108 | C3 | 높음 | 기사 링크 텍스트 "5 tips for å skrive gode dikt: Skaping med AI"와 대상 h1 "5 tips for å skrive gode dikt" 불일치: blog/no/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/no/index.html:118 | C3 | 높음 | 기사 링크 텍스트 "Inspirasjon fra kjente dikteres håndverk"와 대상 h1 "Inspirasjon fra kjente diktere" 불일치: blog/no/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/no/index.html:128 | C3 | 높음 | 기사 링크 텍스트 "Fremtiden for AI-diktgeneratorer"와 대상 h1 "Fremtiden for AI-poesi" 불일치: blog/no/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/no/index.html:138 | C3 | 높음 | 기사 링크 텍스트 "Lag rørende taler og brev på 10 sekunder"와 대상 h1 "Rørende taler med AI" 불일치: blog/no/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/pl/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pl/ 경로로 바꾸기. |
| frontend/blog/pl/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pl/ 경로로 바꾸기. |
| frontend/blog/pl/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pl/ 경로로 바꾸기. |
| frontend/blog/pl/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pl/ 경로로 바꾸기. |
| frontend/blog/pl/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pl/ 경로로 바꾸기. |
| frontend/blog/pl/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Jak AI pisze wiersze: Spotkanie technologii i emocji"와 대상 h1 "Jak AI pisze wiersze: spotkanie technologii i emocji" 불일치: blog/pl/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/pl/index.html:104 | C3 | 높음 | 기사 링크 텍스트 "5 wskazówek do pisania dobrych wierszy: Twórczość z AI"와 대상 h1 "5 wskazówek, jak dobrze pisać wiersze: Tworzenie z AI" 불일치: blog/pl/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/pl/index.html:117 | C3 | 높음 | 기사 링크 텍스트 "Inspiracje z warsztatu znanych poetów"와 대상 h1 "Inspiracje z technik wielkich poetów" 불일치: blog/pl/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/pl/index.html:128 | C3 | 높음 | 기사 링크 텍스트 "Przyszłość generatorów wierszy AI: Czy zastąpią pisarzy?"와 대상 h1 "Przyszłość generatora wierszy AI: Czy zastąpi pisarzy?" 불일치: blog/pl/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/pl/index.html:140 | C3 | 높음 | 기사 링크 텍스트 "Tworzenie wzruszających przemówień i listów w 10 sekund z AI"와 대상 h1 "Wzruszające przemówienia i listy, stwórz w 10 sekund z AI" 불일치: blog/pl/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/pt/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pt/ 경로로 바꾸기. |
| frontend/blog/pt/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pt/ 경로로 바꾸기. |
| frontend/blog/pt/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pt/ 경로로 바꾸기. |
| frontend/blog/pt/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pt/ 경로로 바꾸기. |
| frontend/blog/pt/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /pt/ 경로로 바꾸기. |
| frontend/blog/pt/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "O Princípio da Escrita de Poesia pela IA: O Encontro da Tecnologia e da Emoção"와 대상 h1 "O Princípio da Criação Poética pela IA: A Convergência da Tecnologia e da Emoção" 불일치: blog/pt/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/pt/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "5 Dicas para Escrever Boas Poesias: Criando com a IA"와 대상 h1 "5 Dicas para Escrever Poemas: Criação com AI" 불일치: blog/pt/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/pt/index.html:129 | C3 | 높음 | 기사 링크 텍스트 "O Futuro dos Geradores de Poesia em IA: Substituirão os Escritores?"와 대상 h1 "O Futuro do Gerador de Poesia AI: Substituirá os Escritores?" 불일치: blog/pt/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/pt/index.html:141 | C3 | 높음 | 기사 링크 텍스트 "Crie Discursos e Cartas Emocionantes em 10 Segundos com IA"와 대상 h1 "Como criar discursos e cartas emocionantes em 10 segundos com IA" 불일치: blog/pt/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ru/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ru/ 경로로 바꾸기. |
| frontend/blog/ru/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ru/ 경로로 바꾸기. |
| frontend/blog/ru/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ru/ 경로로 바꾸기. |
| frontend/blog/ru/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ru/ 경로로 바꾸기. |
| frontend/blog/ru/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ru/ 경로로 바꾸기. |
| frontend/blog/ru/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Принципы написания стихов AI: встреча технологий и эмоций"와 대상 h1 "Принципы написания стихов ИИ: встреча технологий и эмоций" 불일치: blog/ru/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ru/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "5 советов по написанию хороших стихов: творчество с AI"와 대상 h1 "5 советов по написанию стихов: творчество с AI" 불일치: blog/ru/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ru/index.html:118 | C3 | 높음 | 기사 링크 텍스트 "Вдохновение из методов известных поэтов"와 대상 h1 "Вдохновение от мастерства известных поэтов" 불일치: blog/ru/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ru/index.html:129 | C3 | 높음 | 기사 링크 텍스트 "Будущее генераторов AI стихов: заменят ли они писателей?"와 대상 h1 "Будущее генератора поэзии ИИ: заменит ли он писателей?" 불일치: blog/ru/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/ru/index.html:141 | C3 | 높음 | 기사 링크 텍스트 "Создание трогательных речей и писем с помощью AI за 10 секунд"와 대상 h1 "Трогательные поздравления и письма, созданные за 10 секунд с помощью ИИ" 불일치: blog/ru/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/sv/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sv/ 경로로 바꾸기. |
| frontend/blog/sv/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sv/ 경로로 바꾸기. |
| frontend/blog/sv/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sv/ 경로로 바꾸기. |
| frontend/blog/sv/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sv/ 경로로 바꾸기. |
| frontend/blog/sv/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sv/ 경로로 바꾸기. |
| frontend/blog/sv/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Principerna bakom AI:s skrivande av poesi: Mötet mellan teknik och känsla"와 대상 h1 "AI:s principer för att skriva poesi: Mötet mellan teknik och känsla" 불일치: blog/sv/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/sv/index.html:117 | C3 | 높음 | 기사 링크 텍스트 "Inspiration från kända poeters skrivmetoder"와 대상 h1 "Inspiration från berömda poeters skrivkonst" 불일치: blog/sv/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/sv/index.html:128 | C3 | 높음 | 기사 링크 텍스트 "Framtiden för AI-poesiskapare: Kommer de att ersätta författare?"와 대상 h1 "AI:s framtid för poesigenerering: Kommer det att ersätta författare?" 불일치: blog/sv/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/sv/index.html:140 | C3 | 높음 | 기사 링크 텍스트 "Skapa rörande tal och brev på 10 sekunder med AI"와 대상 h1 "Rörande tal och brev, skapa på 10 sekunder med AI" 불일치: blog/sv/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/sw/article-1.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sw/ 경로로 바꾸기. |
| frontend/blog/sw/article-2.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sw/ 경로로 바꾸기. |
| frontend/blog/sw/article-3.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sw/ 경로로 바꾸기. |
| frontend/blog/sw/article-4.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sw/ 경로로 바꾸기. |
| frontend/blog/sw/article-5.html:95 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /sw/ 경로로 바꾸기. |
| frontend/blog/th/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /th/ 경로로 바꾸기. |
| frontend/blog/th/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /th/ 경로로 바꾸기. |
| frontend/blog/th/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /th/ 경로로 바꾸기. |
| frontend/blog/th/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /th/ 경로로 바꾸기. |
| frontend/blog/th/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /th/ 경로로 바꾸기. |
| frontend/blog/th/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "หลักการที่ AI เขียนบทกวี: การพบกันของเทคโนโลยีและอารมณ์"와 대상 h1 "หลักการที่ AI เขียนบทกวี: การพบกันระหว่างเทคโนโลยีและอารมณ์" 불일치: blog/th/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/th/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "5 เคล็ดลับในการเขียนบทกวีที่ดี: การสร้างสรรค์ร่วมกับ AI"와 대상 h1 "5 เคล็ดลับในการเขียนบทกวีให้ดี: การสร้างสรรค์ร่วมกับ AI" 불일치: blog/th/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/th/index.html:118 | C3 | 높음 | 기사 링크 텍스트 "แรงบันดาลใจจากวิธีการเขียนของกวีชื่อดัง"와 대상 h1 "แรงบันดาลใจจากการเรียนรู้เทคนิคของกวีชื่อดัง" 불일치: blog/th/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/th/index.html:141 | C3 | 높음 | 기사 링크 텍스트 "สร้างคำพูดและจดหมายที่ประทับใจด้วย AI ใน 10 วินาที"와 대상 h1 "คำปราศรัยและจดหมายที่ประทับใจ สร้างด้วย AI ใน 10 วินาที" 불일치: blog/th/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/tr/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /tr/ 경로로 바꾸기. |
| frontend/blog/tr/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /tr/ 경로로 바꾸기. |
| frontend/blog/tr/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /tr/ 경로로 바꾸기. |
| frontend/blog/tr/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /tr/ 경로로 바꾸기. |
| frontend/blog/tr/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /tr/ 경로로 바꾸기. |
| frontend/blog/tr/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Yapay Zeka Şiir Yazma Prensibi: Teknoloji ve Duyguların Buluşması"와 대상 h1 "Yapay Zeka'nın Şiir Yazma Prensibi: Teknoloji ve Duygu Buluşması" 불일치: blog/tr/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/tr/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "İyi Şiir Yazmanın 5 İpucu: AI ile Yaratıcılık"와 대상 h1 "Şiir Yazmanın 5 İpucu: AI ile Yaratıcılık" 불일치: blog/tr/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/tr/index.html:127 | C3 | 높음 | 기사 링크 텍스트 "AI Şiir Üreticisinin Geleceği: Yazarları Yerine Geçirecek Mi?"와 대상 h1 "AI Şiir Üreticisinin Geleceği: Yazarları Yerine Geçirecek mi?" 불일치: blog/tr/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/tr/index.html:139 | C3 | 높음 | 기사 링크 텍스트 "Duygusal Konuşmalar ve Mektupları, AI ile 10 Saniyede Tamamlayın"와 대상 h1 "Dokunaklı Konuşmalar ve Mektuplar, AI ile 10 Saniyede Tamamlayın" 불일치: blog/tr/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/uk/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /uk/ 경로로 바꾸기. |
| frontend/blog/uk/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /uk/ 경로로 바꾸기. |
| frontend/blog/uk/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /uk/ 경로로 바꾸기. |
| frontend/blog/uk/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /uk/ 경로로 바꾸기. |
| frontend/blog/uk/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /uk/ 경로로 바꾸기. |
| frontend/blog/uk/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Принципи написання віршів AI: зустріч технології та емоцій"와 대상 h1 "Принципи написання віршів штучним інтелектом: зустріч технологій та емоцій" 불일치: blog/uk/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/uk/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "5 порад для написання віршів: творчість з AI"와 대상 h1 "5 порад для написання віршів: Творчість з AI" 불일치: blog/uk/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/uk/index.html:117 | C3 | 높음 | 기사 링크 텍스트 "Натхнення з методів відомих поетів"와 대상 h1 "Натхнення з майстерності відомих поетів" 불일치: blog/uk/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/uk/index.html:128 | C3 | 높음 | 기사 링크 텍스트 "Майбутнє генератора AI віршів: чи замінить він авторів?"와 대상 h1 "Майбутнє генератора поезії AI: чи замінить він письменників?" 불일치: blog/uk/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/uk/index.html:140 | C3 | 높음 | 기사 링크 텍스트 "Емоційні промови та листи, готові за 10 секунд з AI"와 대상 h1 "Зворушливі привітання та листи, створені за 10 секунд за допомогою AI" 불일치: blog/uk/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/vi/article-1.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /vi/ 경로로 바꾸기. |
| frontend/blog/vi/article-2.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /vi/ 경로로 바꾸기. |
| frontend/blog/vi/article-3.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /vi/ 경로로 바꾸기. |
| frontend/blog/vi/article-4.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /vi/ 경로로 바꾸기. |
| frontend/blog/vi/article-5.html:90 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /vi/ 경로로 바꾸기. |
| frontend/blog/vi/index.html:93 | C3 | 높음 | 기사 링크 텍스트 "Nguyên lý AI viết thơ: Gặp gỡ giữa công nghệ và cảm xúc"와 대상 h1 "Nguyên lý AI viết thơ: Cuộc gặp gỡ giữa công nghệ và cảm xúc" 불일치: blog/vi/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/vi/index.html:105 | C3 | 높음 | 기사 링크 텍스트 "5 mẹo để viết thơ hay: Sáng tạo cùng AI"와 대상 h1 "5 mẹo viết thơ hay: Sáng tạo cùng AI" 불일치: blog/vi/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/vi/index.html:116 | C3 | 높음 | 기사 링크 텍스트 "Cảm hứng từ cách viết của các nhà thơ nổi tiếng"와 대상 h1 "Cảm hứng từ cách viết của những nhà thơ nổi tiếng" 불일치: blog/vi/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/vi/index.html:127 | C3 | 높음 | 기사 링크 텍스트 "Tương lai của máy tạo thơ AI: Liệu có thay thế được nhà văn?"와 대상 h1 "Tương lai của máy tạo thơ AI: Liệu có thay thế được các nhà văn?" 불일치: blog/vi/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/zh/article-1.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-1.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/article-10.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-10.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/article-2.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-2.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/article-3.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-3.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/article-4.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-4.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/article-5.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-5.html:89 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/article-6.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-6.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/article-7.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-7.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/article-8.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-8.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/article-9.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/article-9.html:82 | A2 | 높음 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /zh/ 경로로 바꾸기. |
| frontend/blog/zh/index.html:2 | B1 | 높음 | html lang="zh-cn"가 폴더 코드 zh와 맞지 않음. | html lang를 zh로 고치기. |
| frontend/blog/zh/index.html:94 | C3 | 높음 | 기사 링크 텍스트 "AI写诗的原理：技术与情感的结合"와 대상 h1 "AI写诗的原理：技术与情感的交汇" 불일치: blog/zh/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/zh/index.html:104 | C3 | 높음 | 기사 링크 텍스트 "写好诗的五个技巧：与AI一起创作"와 대상 h1 "写好诗的五个技巧：与AI共同创作" 불일치: blog/zh/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/zh/index.html:114 | C3 | 높음 | 기사 링크 텍스트 "从著名诗人的创作中汲取灵感"와 대상 h1 "从著名诗人的创作方法中汲取灵感" 불일치: blog/zh/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/zh/index.html:124 | C3 | 높음 | 기사 링크 텍스트 "AI诗歌生成器的未来：会取代作家吗？"와 대상 h1 "AI诗生成器的未来：会取代作家吗？" 불일치: blog/zh/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/blog/zh/index.html:134 | C3 | 높음 | 기사 링크 텍스트 "感人的祝词和信件，AI10秒完成"와 대상 h1 "感人的祝词和信件，10秒钟用AI完成" 불일치: blog/zh/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/bn/about.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "এআই এবং কবিতা". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/bn/author.html:1 | A3 | 높음 | 같은 bn 페이지에서 연결되지 않는 페이지: bn/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/bn/author.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & কবিতা". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/bn/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "এআই এবং কবিতা". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/bn/faq.html:1 | A3 | 높음 | 같은 bn 페이지에서 연결되지 않는 페이지: bn/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/bn/faq.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & কবিতা". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/bn/gallery.html:1 | A3 | 높음 | 같은 bn 페이지에서 연결되지 않는 페이지: bn/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/bn/gallery.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & কবিতা". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/bn/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="AI & Poem কত দ্রুত কবিতা তৈরি করে?", JSON-LD 질문="AI & Poem কত দ্রুত কবিতা তৈরি করে?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/bn/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="তৈরি হওয়া কবিতা কি ব্যবসায়িক কাজে ব্যবহার করা যাবে?", JSON-LD 질문="তৈরি হওয়া কবিতা কি ব্যবসায়িক কাজে ব্যবহার করা যাবে?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/bn/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="টুল কি স্বয়ংক্রিয়ভাবে ভয়েস তৈরি করে?", JSON-LD 질문="টুল কি স্বয়ংক্রিয়ভাবে ভয়েস তৈরি করে?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/bn/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "ব্লগ"와 대상 h1 "এআই দ্বারা কবিতা লেখার নীতি: প্রযুক্তি এবং অনুভূতির মিলন" 불일치: blog/bn/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/bn/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "AI কবিতা জেনারেটরের নীতি এবং ভবিষ্যৎ"와 대상 h1 "এআই দ্বারা কবিতা লেখার নীতি: প্রযুক্তি এবং অনুভূতির মিলন" 불일치: blog/bn/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/bn/index.html:320 | C3 | 높음 | 기사 링크 텍스트 "কীভাবে স্পর্শকাতর বিবাহের বক্তৃতা লিখবেন"와 대상 h1 "কবিতা লেখার ৫টি টিপস: AI এর সাথে সৃজনশীলতা" 불일치: blog/bn/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/bn/index.html:325 | C3 | 높음 | 기사 링크 텍스트 "SNS-এ জনপ্রিয় আবেগপূর্ণ উদ্ধৃতির সংগ্রহ"와 대상 h1 "প্রখ্যাত কবিদের লেখার কৌশল থেকে অনুপ্রেরণা" 불일치: blog/bn/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/bn/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/bn/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/bn/use-cases.html:1 | A3 | 높음 | 같은 bn 페이지에서 연결되지 않는 페이지: bn/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/bn/use-cases.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & কবিতা". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
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
| frontend/da/author.html:1 | A3 | 높음 | 같은 da 페이지에서 연결되지 않는 페이지: da/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/da/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Digt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/da/faq.html:1 | A3 | 높음 | 같은 da 페이지에서 연결되지 않는 페이지: da/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/da/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Digt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/da/gallery.html:1 | A3 | 높음 | 같은 da 페이지에서 연결되지 않는 페이지: da/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/da/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Digt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/da/index.html:1 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Hvor hurtigt skaber AI & Poem et digt?", JSON-LD 질문="How quickly does AI & Poem create a poem?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/da/index.html:319 | C3 | 높음 | 기사 링크 텍스트 "Blog"와 대상 h1 "Princippet bag AI-poesi: Mødet mellem teknologi og følelser" 불일치: blog/da/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/da/index.html:319 | C3 | 높음 | 기사 링크 텍스트 "Principper og Fremtid for AI Digtgeneratorer"와 대상 h1 "Princippet bag AI-poesi: Mødet mellem teknologi og følelser" 불일치: blog/da/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/da/index.html:345 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Kan jeg bruge det genererede digt kommercielt?", JSON-LD 질문="Can I use the generated poem commercially?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/da/index.html:350 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Opretter værktøjet oplæsning automatisk?", JSON-LD 질문="Does the tool create narration automatically?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/da/index.html:365 | C3 | 높음 | 기사 링크 텍스트 "Sådan skriver du rørende bryllupstaler"와 대상 h1 "5 tips til at skrive gode digte: Skabelse med AI" 불일치: blog/da/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/da/index.html:369 | C3 | 높음 | 기사 링크 텍스트 "Samling af Følelsesladede Citater Populære på SNS"와 대상 h1 "Inspiration fra berømte digteres håndværk" 불일치: blog/da/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/da/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/da/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/da/use-cases.html:1 | A3 | 높음 | 같은 da 페이지에서 연결되지 않는 페이지: da/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/da/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Digt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/de/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/de/author.html:1 | A3 | 높음 | 같은 de 페이지에서 연결되지 않는 페이지: de/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/de/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/de/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/de/faq.html:1 | A3 | 높음 | 같은 de 페이지에서 연결되지 않는 페이지: de/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/de/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/de/gallery.html:1 | A3 | 높음 | 같은 de 페이지에서 연결되지 않는 페이지: de/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/de/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/de/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Wie schnell erstellt AI & Poem ein Gedicht?", JSON-LD 질문="Wie schnell erstellt AI & Poem ein Gedicht?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/de/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Darf ich das generierte Gedicht kommerziell nutzen?", JSON-LD 질문="Darf ich das generierte Gedicht kommerziell nutzen?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/de/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Erzeugt das Tool die Vorlesung automatisch?", JSON-LD 질문="Erzeugt das Tool die Vorlesung automatisch?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/de/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Blog"와 대상 h1 "Die Prinzipien, wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion" 불일치: blog/de/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/de/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Prinzipien und Zukunft von KI-Gedichtgeneratoren"와 대상 h1 "Die Prinzipien, wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion" 불일치: blog/de/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/de/index.html:323 | C3 | 높음 | 기사 링크 텍스트 "Wie man berührende Hochzeitsreden schreibt"와 대상 h1 "5 Tipps für das Schreiben von Gedichten: Kreativität mit KI" 불일치: blog/de/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/de/index.html:327 | C3 | 높음 | 기사 링크 텍스트 "Sammlung emotionaler Zitate, die in sozialen Netzwerken beliebt sind"와 대상 h1 "Inspiration aus den Schreibtechniken berühmter Dichter" 불일치: blog/de/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/de/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/de/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/de/use-cases.html:1 | A3 | 높음 | 같은 de 페이지에서 연결되지 않는 페이지: de/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/de/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "KI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/el/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Ποίημα". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/el/author.html:1 | A3 | 높음 | 같은 el 페이지에서 연결되지 않는 페이지: el/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/el/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Ποίημα". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/el/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Ποίημα". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/el/faq.html:1 | A3 | 높음 | 같은 el 페이지에서 연결되지 않는 페이지: el/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/el/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Ποίημα". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/el/gallery.html:1 | A3 | 높음 | 같은 el 페이지에서 연결되지 않는 페이지: el/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/el/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Ποίημα". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/el/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Πόσο γρήγορα δημιουργεί ποίημα το AI & Poem;", JSON-LD 질문="Πόσο γρήγορα δημιουργεί ποίημα το AI & Poem;". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/el/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Μπορώ να χρησιμοποιήσω εμπορικά το παραγόμενο ποίημα;", JSON-LD 질문="Μπορώ να χρησιμοποιήσω εμπορικά το παραγόμενο ποίημα;". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/el/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Η αφήγηση δημιουργείται αυτόματα;", JSON-LD 질문="Η αφήγηση δημιουργείται αυτόματα;". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/el/index.html:284 | C3 | 높음 | 기사 링크 텍스트 "Ιστολόγιο"와 대상 h1 "Η αρχή της δημιουργίας ποιημάτων από την AI: Η συνάντηση της τεχνολογίας και της ευαισθησίας" 불일치: blog/el/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/el/index.html:284 | C3 | 높음 | 기사 링크 텍스트 "Αρχές και Μέλλον των Γεννητριών Ποιημάτων AI"와 대상 h1 "Η αρχή της δημιουργίας ποιημάτων από την AI: Η συνάντηση της τεχνολογίας και της ευαισθησίας" 불일치: blog/el/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/el/index.html:325 | C3 | 높음 | 기사 링크 텍스트 "Πώς να γράψετε συγκινητικές ομιλίες γάμου"와 대상 h1 "5 Συμβουλές για να γράφετε ποιήματα: Δημιουργία με AI" 불일치: blog/el/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/el/index.html:331 | C3 | 높음 | 기사 링크 텍스트 "Συλλογή συναισθηματικών αποφθεγμάτων δημοφιλών στα SNS"와 대상 h1 "Έμπνευση από τις τεχνικές διάσημων ποιητών" 불일치: blog/el/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/el/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/el/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/el/use-cases.html:1 | A3 | 높음 | 같은 el 페이지에서 연결되지 않는 페이지: el/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/el/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Ποίημα". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/en/404.html:1 | A3 | 높음 | 같은 en 페이지에서 연결되지 않는 페이지: en/404.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/en/faq.html:43 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="How long does it take to generate a poem?", JSON-LD 질문="How long does it take to generate a poem?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/faq.html:48 | C4 | 높음 | FAQ 4 화면과 JSON-LD 불일치. 화면 질문="What languages are supported?", JSON-LD 질문="What languages are supported?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/faq.html:53 | C4 | 높음 | FAQ 5 화면과 JSON-LD 불일치. 화면 질문="How do I use the voice narration feature?", JSON-LD 질문="How do I use the voice narration feature?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/faq.html:68 | C4 | 높음 | FAQ 8 화면과 JSON-LD 불일치. 화면 질문="Can I save or share the generated poem?", JSON-LD 질문="Can I save or share the generated poem?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/faq.html:73 | C4 | 높음 | FAQ 9 화면과 JSON-LD 불일치. 화면 질문="How does AI create poetry?", JSON-LD 질문="How does AI create poetry?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/faq.html:78 | C4 | 높음 | FAQ 10 화면과 JSON-LD 불일치. 화면 질문="Is every generated poem unique?", JSON-LD 질문="Is every generated poem unique?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/faq.html:83 | C4 | 높음 | FAQ 11 화면과 JSON-LD 불일치. 화면 질문="How does AI poetry compare to human-written poetry?", JSON-LD 질문="How does AI poetry compare to human-written poetry?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/faq.html:93 | C4 | 높음 | FAQ 13 화면과 JSON-LD 불일치. 화면 질문="Who owns the copyright of AI-generated poems?", JSON-LD 질문="Who owns the copyright of AI-generated poems?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/faq.html:98 | C4 | 높음 | FAQ 14 화면과 JSON-LD 불일치. 화면 질문="Can it be used for educational purposes?", JSON-LD 질문="Can it be used for educational purposes?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/faq.html:103 | C4 | 높음 | FAQ 15 화면과 JSON-LD 불일치. 화면 질문="Can AI poetry be used for emotional healing?", JSON-LD 질문="Can AI poetry be used for emotional healing?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/en/index.html:335 | C3 | 높음 | 기사 링크 텍스트 "Principles and Future of AI Poem Generators"와 대상 h1 "The Principle of AI Writing Poetry: The Meeting of Technology and Emotion" 불일치: blog/en/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/en/index.html:339 | C3 | 높음 | 기사 링크 텍스트 "How to Write Touching Wedding Speeches"와 대상 h1 "5 Tips for Writing Poetry Well: Creating with AI" 불일치: blog/en/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/en/index.html:343 | C3 | 높음 | 기사 링크 텍스트 "Collection of Emotional Quotes Popular on SNS"와 대상 h1 "Inspiration from the Techniques of Famous Poets" 불일치: blog/en/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/en/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/en/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/es/404.html:1 | A3 | 높음 | 같은 es 페이지에서 연결되지 않는 페이지: es/404.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/es/404.html:7 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA y poema". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/es/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA y poema". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/es/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA y poema". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/es/faq.html:40 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="¿Cuánto tarda en generarse un poema?", JSON-LD 질문="¿Cuánto tarda en generarse un poema?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:45 | C4 | 높음 | FAQ 4 화면과 JSON-LD 불일치. 화면 질문="¿Qué idiomas están disponibles?", JSON-LD 질문="¿Qué idiomas están disponibles?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:50 | C4 | 높음 | FAQ 5 화면과 JSON-LD 불일치. 화면 질문="¿Cómo se usa la función de narración de voz?", JSON-LD 질문="¿Cómo se usa la función de narración de voz?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:55 | C4 | 높음 | FAQ 6 화면과 JSON-LD 불일치. 화면 질문="¿Puedo crear un poema sobre cualquier tema?", JSON-LD 질문="¿Puedo crear un poema sobre cualquier tema?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:65 | C4 | 높음 | FAQ 8 화면과 JSON-LD 불일치. 화면 질문="¿Puedo guardar o compartir el poema generado?", JSON-LD 질문="¿Puedo guardar o compartir el poema generado?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:70 | C4 | 높음 | FAQ 9 화면과 JSON-LD 불일치. 화면 질문="¿Cómo crea poesía la IA?", JSON-LD 질문="¿Cómo crea poesía la IA?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:75 | C4 | 높음 | FAQ 10 화면과 JSON-LD 불일치. 화면 질문="¿Cada poema generado es único?", JSON-LD 질문="¿Cada poema generado es único?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:80 | C4 | 높음 | FAQ 11 화면과 JSON-LD 불일치. 화면 질문="¿Cómo se compara la poesía de IA con la poesía humana?", JSON-LD 질문="¿Cómo se compara la poesía de IA con la poesía humana?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:90 | C4 | 높음 | FAQ 13 화면과 JSON-LD 불일치. 화면 질문="¿Quién posee los derechos de autor de los poemas generados por IA?", JSON-LD 질문="¿Quién posee los derechos de autor de los poemas generados por IA?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:95 | C4 | 높음 | FAQ 14 화면과 JSON-LD 불일치. 화면 질문="¿Se puede usar con fines educativos?", JSON-LD 질문="¿Se puede usar con fines educativos?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/faq.html:100 | C4 | 높음 | FAQ 15 화면과 JSON-LD 불일치. 화면 질문="¿La poesía de IA puede usarse para la sanación emocional?", JSON-LD 질문="¿La poesía de IA puede usarse para la sanación emocional?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/es/index.html:250 | C3 | 높음 | 기사 링크 텍스트 "blog"와 대상 h1 "El principio de cómo la IA escribe poesía: el encuentro entre tecnología y emoción" 불일치: blog/es/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/es/index.html:250 | C3 | 높음 | 기사 링크 텍스트 "Principios y futuro de los generadores de poemas con IA"와 대상 h1 "El principio de cómo la IA escribe poesía: el encuentro entre tecnología y emoción" 불일치: blog/es/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/es/index.html:279 | C3 | 높음 | 기사 링크 텍스트 "Cómo escribir discursos de boda conmovedores"와 대상 h1 "5 consejos para escribir poesía: Creación con IA" 불일치: blog/es/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/es/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Colección de citas emocionales populares en redes sociales"와 대상 h1 "Inspiración a través de las técnicas de poetas famosos" 불일치: blog/es/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/es/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/es/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
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
| frontend/fi/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & runo". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/fi/author.html:1 | A3 | 높음 | 같은 fi 페이지에서 연결되지 않는 페이지: fi/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/fi/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Runo". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/fi/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & runo". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/fi/faq.html:1 | A3 | 높음 | 같은 fi 페이지에서 연결되지 않는 페이지: fi/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/fi/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Runo". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/fi/gallery.html:1 | A3 | 높음 | 같은 fi 페이지에서 연결되지 않는 페이지: fi/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/fi/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Runo". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/fi/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Kuinka nopeasti AI & Poem luo runon?", JSON-LD 질문="Kuinka nopeasti AI & Poem luo runon?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fi/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Voinko käyttää luotua runoa kaupallisesti?", JSON-LD 질문="Voinko käyttää luotua runoa kaupallisesti?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fi/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Tuottaako työkalu ääneenluvun automaattisesti?", JSON-LD 질문="Tuottaako työkalu ääneenluvun automaattisesti?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fi/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "Blogi"와 대상 h1 "AI:n runouden kirjoittamisen periaate: teknologian ja tunteiden kohtaaminen" 불일치: blog/fi/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fi/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "AI-runogeneraattoreiden periaatteet ja tulevaisuus"와 대상 h1 "AI:n runouden kirjoittamisen periaate: teknologian ja tunteiden kohtaaminen" 불일치: blog/fi/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fi/index.html:321 | C3 | 높음 | 기사 링크 텍스트 "Kuinka kirjoittaa koskettavia hääpuheita"와 대상 h1 "Viisi vinkkiä hyvän runon kirjoittamiseen: Luominen AI:n kanssa" 불일치: blog/fi/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fi/index.html:327 | C3 | 높음 | 기사 링크 텍스트 "Kokoelma tunteellisia lainauksia, jotka ovat suosittuja somessa"와 대상 h1 "Inspiraatiota oppimalla kuuluisilta runoilijoilta" 불일치: blog/fi/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fi/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/fi/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/fi/use-cases.html:1 | A3 | 높음 | 같은 fi 페이지에서 연결되지 않는 페이지: fi/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/fi/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Runo". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/fil/index.html:1 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Gaano kabilis gumawa ng tula ang AI & Poem?", JSON-LD 질문="How quickly does AI & Poem create a poem?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fil/index.html:321 | C3 | 높음 | 기사 링크 텍스트 "Blog"와 대상 h1 "Ang prinsipyo ng AI na pagsulat ng tula" 불일치: blog/fil/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fil/index.html:321 | C3 | 높음 | 기사 링크 텍스트 "Mga Prinsipyo at Hinaharap ng mga AI Poem Generator"와 대상 h1 "Ang prinsipyo ng AI na pagsulat ng tula" 불일치: blog/fil/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fil/index.html:349 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Maaari ko bang gamitin ang nabuong tula sa komersyo?", JSON-LD 질문="Can I use the generated poem commercially?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fil/index.html:355 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Awtomatiko bang gumagawa ng pagsasalaysay ang tool?", JSON-LD 질문="Does the tool create narration automatically?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fil/index.html:372 | C3 | 높음 | 기사 링크 텍스트 "Paano Sumulat ng Nakakaantig na Talumpati sa Kasal"와 대상 h1 "5 tip para sa pagsulat ng magagandang tula" 불일치: blog/fil/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fil/index.html:377 | C3 | 높음 | 기사 링크 텍스트 "Koleksyon ng mga Emosyonal na quotes na sikat sa SNS"와 대상 h1 "Inspirasyon mula sa mga tanyag na makata" 불일치: blog/fil/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fil/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/fil/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/fr/404.html:1 | A3 | 높음 | 같은 fr 페이지에서 연결되지 않는 페이지: fr/404.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/fr/404.html:7 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA et poème". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/fr/about.html:68 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA et poème". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/fr/contact.html:7 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA et poème". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/fr/faq.html:40 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Combien de temps faut-il pour générer un poème ?", JSON-LD 질문="Combien de temps faut-il pour générer un poème ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:45 | C4 | 높음 | FAQ 4 화면과 JSON-LD 불일치. 화면 질문="Quelles langues sont prises en charge ?", JSON-LD 질문="Quelles langues sont prises en charge ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:50 | C4 | 높음 | FAQ 5 화면과 JSON-LD 불일치. 화면 질문="Comment utiliser la fonction de narration vocale ?", JSON-LD 질문="Comment utiliser la fonction de narration vocale ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:55 | C4 | 높음 | FAQ 6 화면과 JSON-LD 불일치. 화면 질문="Puis-je créer un poème sur n'importe quel sujet ?", JSON-LD 질문="Puis-je créer un poème sur n'importe quel sujet ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:65 | C4 | 높음 | FAQ 8 화면과 JSON-LD 불일치. 화면 질문="Puis-je enregistrer ou partager le poème généré ?", JSON-LD 질문="Puis-je enregistrer ou partager le poème généré ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:70 | C4 | 높음 | FAQ 9 화면과 JSON-LD 불일치. 화면 질문="Comment l'IA crée-t-elle de la poésie ?", JSON-LD 질문="Comment l'IA crée-t-elle de la poésie ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:75 | C4 | 높음 | FAQ 10 화면과 JSON-LD 불일치. 화면 질문="Chaque poème généré est-il unique ?", JSON-LD 질문="Chaque poème généré est-il unique ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:80 | C4 | 높음 | FAQ 11 화면과 JSON-LD 불일치. 화면 질문="Comment la poésie IA se compare-t-elle à la poésie humaine ?", JSON-LD 질문="Comment la poésie IA se compare-t-elle à la poésie humaine ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:90 | C4 | 높음 | FAQ 13 화면과 JSON-LD 불일치. 화면 질문="À qui appartiennent les droits d'auteur des poèmes générés par IA ?", JSON-LD 질문="À qui appartiennent les droits d'auteur des poèmes générés par IA ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:95 | C4 | 높음 | FAQ 14 화면과 JSON-LD 불일치. 화면 질문="Peut-on l'utiliser à des fins éducatives ?", JSON-LD 질문="Peut-on l'utiliser à des fins éducatives ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/faq.html:100 | C4 | 높음 | FAQ 15 화면과 JSON-LD 불일치. 화면 질문="La poésie IA peut-elle être utilisée pour la guérison émotionnelle ?", JSON-LD 질문="La poésie IA peut-elle être utilisée pour la guérison émotionnelle ?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/fr/index.html:253 | C3 | 높음 | 기사 링크 텍스트 "blog"와 대상 h1 "Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion" 불일치: blog/fr/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fr/index.html:253 | C3 | 높음 | 기사 링크 텍스트 "Principes et avenir des générateurs de poèmes IA"와 대상 h1 "Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion" 불일치: blog/fr/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fr/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "Comment écrire des discours de mariage touchants"와 대상 h1 "5 conseils pour bien écrire des poèmes : Création avec l'IA" 불일치: blog/fr/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fr/index.html:288 | C3 | 높음 | 기사 링크 텍스트 "Collection de citations émotionnelles populaires sur les réseaux sociaux"와 대상 h1 "Inspiration tirée des méthodes des poètes célèbres" 불일치: blog/fr/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/fr/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/fr/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/hi/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "ऐ और कविता". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/hi/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "ऐ और कविता". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/hi/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="AI & Poem कितनी जल्दी कविता बनाता है?", JSON-LD 질문="AI & Poem कितनी जल्दी कविता बनाता है?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/hi/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="क्या बनाई गई कविता का व्यावसायिक उपयोग किया जा सकता है?", JSON-LD 질문="क्या बनाई गई कविता का व्यावसायिक उपयोग किया जा सकता है?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/hi/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="क्या टूल ऑटोमेटिक रूप से आवाज़ बनाता है?", JSON-LD 질문="क्या टूल ऑटोमेटिक रूप से आवाज़ बनाता है?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/hi/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "ब्लॉग"와 대상 h1 "AI द्वारा कविता लिखने का सिद्धांत: तकनीक और भावना की मुलाकात" 불일치: blog/hi/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/hi/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "AI कविता जनरेटर के सिद्धांत और भविष्य"와 대상 h1 "AI द्वारा कविता लिखने का सिद्धांत: तकनीक और भावना की मुलाकात" 불일치: blog/hi/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/hi/index.html:321 | C3 | 높음 | 기사 링크 텍스트 "दिल को छू लेने वाले शादी के भाषण कैसे लिखें"와 대상 h1 "कविता लिखने के 5 बेहतरीन टिप्स: AI के साथ रचना" 불일치: blog/hi/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/hi/index.html:327 | C3 | 높음 | 기사 링크 텍스트 "SNS पर लोकप्रिय भावनात्मक उद्धरणों का संग्रह"와 대상 h1 "प्रसिद्ध कवियों की लेखन कला से प्रेरणा" 불일치: blog/hi/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/hi/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/hi/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/hu/author.html:1 | A3 | 높음 | 같은 hu 페이지에서 연결되지 않는 페이지: hu/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/hu/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Vers". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/hu/faq.html:1 | A3 | 높음 | 같은 hu 페이지에서 연결되지 않는 페이지: hu/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/hu/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Vers". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/hu/gallery.html:1 | A3 | 높음 | 같은 hu 페이지에서 연결되지 않는 페이지: hu/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/hu/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Vers". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/hu/index.html:1 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Milyen gyorsan készít verset az AI & Poem?", JSON-LD 질문="How quickly does AI & Poem create a poem?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/hu/index.html:317 | C3 | 높음 | 기사 링크 텍스트 "Blogunkat"와 대상 h1 "Az AI versírás elve" 불일치: blog/hu/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/hu/index.html:317 | C3 | 높음 | 기사 링크 텍스트 "Az AI Versgenerátorok Alapelvei és Jövője"와 대상 h1 "Az AI versírás elve" 불일치: blog/hu/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/hu/index.html:343 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Használhatom a generált verset kereskedelmi célokra?", JSON-LD 질문="Can I use the generated poem commercially?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/hu/index.html:349 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Az eszköz automatikusan létrehoz narrációt?", JSON-LD 질문="Does the tool create narration automatically?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/hu/index.html:366 | C3 | 높음 | 기사 링크 텍스트 "Hogyan írjunk megható esküvői beszédeket"와 대상 h1 "5 tipp nagyszerű versek írásához" 불일치: blog/hu/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/hu/index.html:370 | C3 | 높음 | 기사 링크 텍스트 "Érzelmes Idézetek Gyűjteménye, Amelyek Népszerűek az SNS-en"와 대상 h1 "Inspiráció híres költőktől" 불일치: blog/hu/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/hu/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/hu/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/hu/use-cases.html:1 | A3 | 높음 | 같은 hu 페이지에서 연결되지 않는 페이지: hu/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/hu/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Vers". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/id/about.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/id/author.html:1 | A3 | 높음 | 같은 id 페이지에서 연결되지 않는 페이지: id/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/id/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/id/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/id/faq.html:1 | A3 | 높음 | 같은 id 페이지에서 연결되지 않는 페이지: id/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/id/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/id/gallery.html:1 | A3 | 높음 | 같은 id 페이지에서 연결되지 않는 페이지: id/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/id/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/id/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Seberapa cepat AI & Poem membuat puisi?", JSON-LD 질문="Seberapa cepat AI & Poem membuat puisi?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/id/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Apakah saya boleh menggunakan puisi yang dibuat untuk tujuan komersial?", JSON-LD 질문="Apakah saya boleh menggunakan puisi yang dibuat untuk tujuan komersial?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/id/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Apakah alat ini otomatis membuat narasi?", JSON-LD 질문="Apakah alat ini otomatis membuat narasi?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/id/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Blog"와 대상 h1 "Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi" 불일치: blog/id/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/id/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Prinsip dan Masa Depan Generator Puisi AI"와 대상 h1 "Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi" 불일치: blog/id/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/id/index.html:323 | C3 | 높음 | 기사 링크 텍스트 "Cara Menulis Pidato Pernikahan yang Menyentuh"와 대상 h1 "5 Tips Menulis Puisi yang Baik: Kreativitas Bersama AI" 불일치: blog/id/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/id/index.html:329 | C3 | 높음 | 기사 링크 텍스트 "Kumpulan Kutipan Emosional Populer di SNS"와 대상 h1 "Inspirasi dari Teknik Penyair Terkenal" 불일치: blog/id/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/id/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/id/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/id/use-cases.html:1 | A3 | 높음 | 같은 id 페이지에서 연결되지 않는 페이지: id/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/id/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/it/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA e poesia". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/it/author.html:1 | A3 | 높음 | 같은 it 페이지에서 연결되지 않는 페이지: it/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/it/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Poesia". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/it/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA e poesia". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/it/faq.html:1 | A3 | 높음 | 같은 it 페이지에서 연결되지 않는 페이지: it/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/it/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Poesia". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/it/gallery.html:1 | A3 | 높음 | 같은 it 페이지에서 연결되지 않는 페이지: it/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/it/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Poesia". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/it/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Quanto velocemente AI & Poem crea una poesia?", JSON-LD 질문="Quanto velocemente AI & Poem crea una poesia?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/it/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Posso usare commercialmente la poesia generata?", JSON-LD 질문="Posso usare commercialmente la poesia generata?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/it/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Lo strumento genera automaticamente la narrazione?", JSON-LD 질문="Lo strumento genera automaticamente la narrazione?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/it/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "blog"와 대상 h1 "Il principio per cui l'AI scrive poesia: l'incontro tra tecnologia e sensibilità" 불일치: blog/it/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/it/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Principi e futuro dei generatori di poesie AI"와 대상 h1 "Il principio per cui l'AI scrive poesia: l'incontro tra tecnologia e sensibilità" 불일치: blog/it/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/it/index.html:323 | C3 | 높음 | 기사 링크 텍스트 "Come scrivere discorsi di matrimonio toccanti"와 대상 h1 "5 consigli per scrivere poesie: Creazione con l'AI" 불일치: blog/it/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/it/index.html:328 | C3 | 높음 | 기사 링크 텍스트 "Raccolta di citazioni emotive popolari sui social network"와 대상 h1 "Ispirazione dai metodi dei poeti famosi" 불일치: blog/it/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/it/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/it/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/it/use-cases.html:1 | A3 | 높음 | 같은 it 페이지에서 연결되지 않는 페이지: it/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/it/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Poesia". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ja/404.html:1 | A3 | 높음 | 같은 ja 페이지에서 연결되지 않는 페이지: ja/404.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ja/404.html:7 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AIと詩". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ja/about.html:67 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AIと詩". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ja/contact.html:7 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AIと詩". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ja/faq.html:40 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="詩の生成にどのくらい時間がかかりますか？", JSON-LD 질문="詩の生成にどのくらい時間がかかりますか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/faq.html:45 | C4 | 높음 | FAQ 4 화면과 JSON-LD 불일치. 화면 질문="どの言語に対応していますか？", JSON-LD 질문="どの言語に対応していますか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/faq.html:50 | C4 | 높음 | FAQ 5 화면과 JSON-LD 불일치. 화면 질문="音声朗読機能はどのように使いますか？", JSON-LD 질문="音声朗読機能はどのように使いますか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/faq.html:65 | C4 | 높음 | FAQ 8 화면과 JSON-LD 불일치. 화면 질문="生成した詩を保存・共有できますか？", JSON-LD 질문="生成した詩を保存・共有できますか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/faq.html:70 | C4 | 높음 | FAQ 9 화면과 JSON-LD 불일치. 화면 질문="AIはどのように詩を作るのですか？", JSON-LD 질문="AIはどのように詩を作るのですか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/faq.html:75 | C4 | 높음 | FAQ 10 화면과 JSON-LD 불일치. 화면 질문="毎回違う詩が生成されますか？", JSON-LD 질문="毎回違う詩が生成されますか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/faq.html:80 | C4 | 높음 | FAQ 11 화면과 JSON-LD 불일치. 화면 질문="AI詩と人間が書いた詩はどう違いますか？", JSON-LD 질문="AI詩と人間が書いた詩はどう違いますか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/faq.html:90 | C4 | 높음 | FAQ 13 화면과 JSON-LD 불일치. 화면 질문="AI生成詩の著作権は誰にありますか？", JSON-LD 질문="AI生成詩の著作権は誰にありますか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/faq.html:95 | C4 | 높음 | FAQ 14 화면과 JSON-LD 불일치. 화면 질문="教育目的で活用できますか？", JSON-LD 질문="教育目的で活用できますか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/faq.html:100 | C4 | 높음 | FAQ 15 화면과 JSON-LD 불일치. 화면 질문="癒しや感情表現にも活用できますか？", JSON-LD 질문="癒しや感情表現にも活用できますか？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ja/index.html:249 | C3 | 높음 | 기사 링크 텍스트 "ブログ"와 대상 h1 "AIが詩を書く仕組み：技術と感性の出会い" 불일치: blog/ja/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ja/index.html:249 | C3 | 높음 | 기사 링크 텍스트 "AI詩ジェネレーターの原理と未来"와 대상 h1 "AIが詩を書く仕組み：技術と感性の出会い" 불일치: blog/ja/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ja/index.html:275 | C3 | 높음 | 기사 링크 텍스트 "感動的な結婚式のスピーチを書く方法"와 대상 h1 "詩を上手に書く5つのヒント：AIと共に創る" 불일치: blog/ja/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ja/index.html:279 | C3 | 높음 | 기사 링크 텍스트 "SNSで人気のある感情的な引用集"와 대상 h1 "有名詩人たちの作法から学ぶインスピレーション" 불일치: blog/ja/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ja/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ja/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ko/404.html:1 | A3 | 높음 | 같은 ko 페이지에서 연결되지 않는 페이지: ko/404.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ko/faq.html:38 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="회원가입이나 로그인이 필요한가요?", JSON-LD 질문="회원가입이나 로그인이 필요한가요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:48 | C4 | 높음 | FAQ 4 화면과 JSON-LD 불일치. 화면 질문="어떤 언어를 지원하나요?", JSON-LD 질문="어떤 언어를 지원하나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:53 | C4 | 높음 | FAQ 5 화면과 JSON-LD 불일치. 화면 질문="음성 낭독 기능은 어떻게 사용하나요?", JSON-LD 질문="음성 낭독 기능은 어떻게 사용하나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:58 | C4 | 높음 | FAQ 6 화면과 JSON-LD 불일치. 화면 질문="어떤 주제로도 시를 만들 수 있나요?", JSON-LD 질문="어떤 주제로도 시를 만들 수 있나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:68 | C4 | 높음 | FAQ 8 화면과 JSON-LD 불일치. 화면 질문="생성된 시를 저장하거나 공유할 수 있나요?", JSON-LD 질문="생성된 시를 저장하거나 공유할 수 있나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:73 | C4 | 높음 | FAQ 9 화면과 JSON-LD 불일치. 화면 질문="AI가 시를 어떻게 만드나요?", JSON-LD 질문="AI가 시를 어떻게 만드나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:78 | C4 | 높음 | FAQ 10 화면과 JSON-LD 불일치. 화면 질문="매번 다른 시가 나오나요?", JSON-LD 질문="매번 다른 시가 나오나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:83 | C4 | 높음 | FAQ 11 화면과 JSON-LD 불일치. 화면 질문="AI 시와 사람이 쓴 시는 어떻게 다른가요?", JSON-LD 질문="AI 시와 사람이 쓴 시는 어떻게 다른가요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:93 | C4 | 높음 | FAQ 13 화면과 JSON-LD 불일치. 화면 질문="AI 시의 저작권은 누구에게 있나요?", JSON-LD 질문="AI 시의 저작권은 누구에게 있나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:98 | C4 | 높음 | FAQ 14 화면과 JSON-LD 불일치. 화면 질문="교육 목적으로 활용할 수 있나요?", JSON-LD 질문="교육 목적으로 활용할 수 있나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/faq.html:103 | C4 | 높음 | FAQ 15 화면과 JSON-LD 불일치. 화면 질문="치유나 감정 표현에도 시를 활용할 수 있나요?", JSON-LD 질문="치유나 감정 표현에도 시를 활용할 수 있나요?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | ar/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | ar/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | ar/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | ar/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | ar/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | ar/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | ar/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | ar/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | ar/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | ar/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | ar/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | ar/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | ar/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | ar/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | ar/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | ar/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | ar/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | ar/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | ar/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | ar/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | ar/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | ar/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | ar/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | ar/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | ar/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | ar/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | bn/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | bn/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | bn/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | bn/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | bn/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | bn/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | bn/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | bn/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | bn/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | bn/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | bn/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | bn/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | bn/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | bn/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | bn/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | bn/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | bn/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | bn/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | bn/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | bn/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | bn/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | bn/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | bn/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | bn/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | bn/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | bn/gallery-4.html에 대응 페이지 추가. |
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
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | da/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | da/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | da/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | da/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | da/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | da/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | da/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | da/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | da/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | da/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | da/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | da/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | da/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | da/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | da/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | da/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | da/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | da/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | da/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | da/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | da/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | da/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | da/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | da/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | da/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | da/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | de/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | de/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | de/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | de/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | de/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | de/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | de/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | de/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | de/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | de/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | de/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | de/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | de/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | de/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | de/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | de/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | de/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | de/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | de/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | de/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | de/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | de/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | de/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | de/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | de/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | de/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | el/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | el/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | el/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | el/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | el/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | el/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | el/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | el/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | el/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | el/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | el/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | el/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | el/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | el/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | el/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | el/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | el/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | el/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | el/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | el/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | el/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | el/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | el/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | el/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | el/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | el/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | en/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | en/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | en/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | en/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | en/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | en/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | en/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | en/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | en/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | en/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | en/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | en/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | en/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | en/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | en/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | en/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | es/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | es/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | es/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | es/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | es/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | es/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | es/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | es/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | es/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | es/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | es/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | es/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | es/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | es/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | es/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | es/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | fi/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | fi/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | fi/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | fi/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | fi/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | fi/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | fi/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | fi/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | fi/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | fi/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | fi/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | fi/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | fi/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | fi/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | fi/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | fi/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | fi/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | fi/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | fi/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | fi/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | fi/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | fi/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | fi/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | fi/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | fi/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | fi/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | fil/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | fil/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | fil/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | fil/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | fil/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | fil/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | fil/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | fil/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | fil/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | fil/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | fil/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | fil/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | fil/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | fil/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | fil/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | fil/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | fil/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | fil/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | fil/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | fil/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | fil/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | fil/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: author.html | fil/author.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: faq.html | fil/faq.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | fil/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | fil/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | fil/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | fil/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery.html | fil/gallery.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: use-cases.html | fil/use-cases.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | fr/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | fr/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | fr/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | fr/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | fr/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | fr/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | fr/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | fr/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | fr/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | fr/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | fr/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | fr/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | fr/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | fr/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | fr/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | fr/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | hi/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | hi/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | hi/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | hi/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | hi/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | hi/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | hi/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | hi/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | hi/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | hi/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | hi/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | hi/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | hi/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | hi/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | hi/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | hi/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | hi/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | hi/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | hi/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | hi/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | hi/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | hi/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: author.html | hi/author.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: faq.html | hi/faq.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | hi/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | hi/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | hi/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | hi/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery.html | hi/gallery.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: use-cases.html | hi/use-cases.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | hu/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | hu/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | hu/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | hu/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | hu/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | hu/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | hu/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | hu/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | hu/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | hu/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | hu/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | hu/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | hu/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | hu/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | hu/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | hu/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | hu/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | hu/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | hu/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | hu/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | hu/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | hu/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | hu/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | hu/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | hu/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | hu/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | id/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | id/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | id/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | id/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | id/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | id/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | id/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | id/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | id/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | id/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | id/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | id/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | id/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | id/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | id/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | id/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | id/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | id/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | id/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | id/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | id/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | id/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | id/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | id/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | id/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | id/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | it/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | it/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | it/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | it/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | it/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | it/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | it/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | it/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | it/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | it/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | it/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | it/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | it/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | it/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | it/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | it/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | it/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | it/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | it/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | it/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | it/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | it/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | it/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | it/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | it/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | it/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | ja/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | ja/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | ja/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | ja/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | ja/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | ja/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | ja/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | ja/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | ja/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | ja/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | ja/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | ja/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | ja/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | ja/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | ja/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | ja/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | mn/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | mn/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | mn/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | mn/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | mn/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | mn/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | mn/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | mn/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | mn/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | mn/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | mn/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | mn/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | mn/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | mn/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | mn/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | mn/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | mn/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | mn/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | mn/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | mn/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | mn/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | mn/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | mn/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | mn/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | mn/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | mn/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | ms/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | ms/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | ms/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | ms/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | ms/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | ms/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | ms/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | ms/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | ms/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | ms/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | ms/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | ms/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | ms/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | ms/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | ms/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | ms/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | ms/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | ms/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | ms/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | ms/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | ms/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | ms/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | ms/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | ms/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | ms/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | ms/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | nl/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | nl/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | nl/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | nl/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | nl/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | nl/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | nl/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | nl/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | nl/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | nl/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | nl/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | nl/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | nl/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | nl/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | nl/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | nl/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | nl/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | nl/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | nl/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | nl/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | nl/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | nl/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | nl/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | nl/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | nl/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | nl/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | no/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | no/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | no/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | no/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | no/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | no/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | no/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | no/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | no/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | no/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | no/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | no/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | no/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | no/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | no/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | no/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | no/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | no/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | no/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | no/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | no/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | no/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | no/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | no/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | no/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | no/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | pl/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | pl/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | pl/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | pl/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | pl/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | pl/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | pl/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | pl/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | pl/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | pl/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | pl/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | pl/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | pl/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | pl/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | pl/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | pl/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | pl/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | pl/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | pl/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | pl/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | pl/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | pl/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | pl/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | pl/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | pl/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | pl/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | pt/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | pt/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | pt/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | pt/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | pt/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | pt/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | pt/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | pt/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | pt/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | pt/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | pt/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | pt/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | pt/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | pt/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | pt/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | pt/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | pt/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | pt/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | pt/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | pt/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | pt/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | pt/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | pt/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | pt/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | pt/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | pt/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | ru/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | ru/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | ru/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | ru/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | ru/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | ru/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | ru/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | ru/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | ru/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | ru/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | ru/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | ru/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | ru/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | ru/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | ru/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | ru/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | ru/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | ru/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | ru/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | ru/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | ru/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | ru/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | ru/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | ru/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | ru/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | ru/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | sv/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | sv/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | sv/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | sv/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | sv/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | sv/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | sv/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | sv/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | sv/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | sv/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | sv/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | sv/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | sv/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | sv/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | sv/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | sv/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | sv/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | sv/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | sv/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | sv/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | sv/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | sv/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | sv/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | sv/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | sv/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | sv/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | sw/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | sw/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | sw/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | sw/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | sw/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | sw/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | sw/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | sw/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | sw/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | sw/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | sw/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | sw/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | sw/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | sw/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | sw/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | sw/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | sw/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | sw/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | sw/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | sw/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | sw/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | sw/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | sw/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | sw/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | sw/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | sw/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | th/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | th/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | th/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | th/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | th/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | th/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | th/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | th/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | th/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | th/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | th/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | th/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | th/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | th/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | th/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | th/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | th/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | th/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | th/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | th/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | th/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | th/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | th/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | th/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | th/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | th/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | tr/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | tr/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | tr/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | tr/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | tr/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | tr/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | tr/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | tr/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | tr/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | tr/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | tr/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | tr/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | tr/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | tr/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | tr/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | tr/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | tr/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | tr/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | tr/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | tr/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | tr/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | tr/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | tr/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | tr/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | tr/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | tr/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | uk/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | uk/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | uk/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | uk/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | uk/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | uk/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | uk/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | uk/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | uk/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | uk/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | uk/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | uk/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | uk/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | uk/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | uk/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | uk/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | uk/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | uk/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | uk/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | uk/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | uk/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | uk/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | uk/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | uk/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | uk/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | uk/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | vi/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | vi/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-10.html | vi/article-10.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-6.html | vi/article-6.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-7.html | vi/article-7.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-8.html | vi/article-8.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/article-9.html | vi/article-9.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | vi/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | vi/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | vi/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | vi/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | vi/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | vi/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | vi/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | vi/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | vi/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | vi/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | vi/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | vi/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | vi/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | vi/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: 404.html | vi/404.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-1.html | vi/gallery-1.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-2.html | vi/gallery-2.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-3.html | vi/gallery-3.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: gallery-4.html | vi/gallery-4.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | zh/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | zh/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | zh/case-birthday-bilingual.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | zh/case-hwangap-tribute.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/case-wedding-toast.html | zh/case-wedding-toast.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | zh/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/isang-ogamdo.html | zh/isang-ogamdo.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | zh/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | zh/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | zh/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | zh/poems-for-tts-reading.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | zh/poetry-recitation-revival.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | zh/sijo-meter-for-ai.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | zh/tts-vs-human-recitation.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | zh/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| frontend/ko/index.html:1 | A4 | 높음 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | zh/yoondongju-seosi.html에 대응 페이지 추가. |
| frontend/ko/index.html:329 | C3 | 높음 | 기사 링크 텍스트 "AI 시 생성기의 원리와 미래"와 대상 h1 "AI가 시를 쓰는 원리: 기술과 감성의 만남" 불일치: blog/ko/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ko/index.html:333 | C3 | 높음 | 기사 링크 텍스트 "감동적인 결혼식 축사 쓰는 법"와 대상 h1 "시를 잘 쓰는 5가지 팁: AI와 함께하는 창작" 불일치: blog/ko/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ko/index.html:337 | C3 | 높음 | 기사 링크 텍스트 "SNS에서 인기 있는 감성 글귀 모음"와 대상 h1 "유명 시인들의 작법에서 배우는 영감" 불일치: blog/ko/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/mn/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI ба шүлэг". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/mn/author.html:1 | A3 | 높음 | 같은 mn 페이지에서 연결되지 않는 페이지: mn/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/mn/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Шүлэг". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/mn/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI ба шүлэг". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/mn/faq.html:1 | A3 | 높음 | 같은 mn 페이지에서 연결되지 않는 페이지: mn/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/mn/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Шүлэг". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/mn/gallery.html:1 | A3 | 높음 | 같은 mn 페이지에서 연결되지 않는 페이지: mn/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/mn/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Шүлэг". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/mn/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Блог"와 대상 h1 "AI шүлэг бичих зарчим: Технологи ба сэтгэл хөдлөлийн уулзалт" 불일치: blog/mn/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/mn/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "AI шүлэг үүсгэгчийн зарчим ба ирээдүй"와 대상 h1 "AI шүлэг бичих зарчим: Технологи ба сэтгэл хөдлөлийн уулзалт" 불일치: blog/mn/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/mn/index.html:325 | C3 | 높음 | 기사 링크 텍스트 "Сэтгэл хөдөлгөм хуримын үг хэрхэн бичих вэ"와 대상 h1 "Гайхалтай шүлэг бичих 5 зөвлөгөө: AI-тай хамтран бүтээх" 불일치: blog/mn/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/mn/index.html:331 | C3 | 높음 | 기사 링크 텍스트 "SNS дээр алдартай сэтгэл хөдлөлийн ишлэлүүдийн цуглуулга"와 대상 h1 "Алдартай яруу найрагчдын ур чадвараас авах урам зориг" 불일치: blog/mn/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/mn/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/mn/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/mn/use-cases.html:1 | A3 | 높음 | 같은 mn 페이지에서 연결되지 않는 페이지: mn/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/mn/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Шүлэг". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ms/about.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ms/author.html:1 | A3 | 높음 | 같은 ms 페이지에서 연결되지 않는 페이지: ms/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ms/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ms/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ms/faq.html:1 | A3 | 높음 | 같은 ms 페이지에서 연결되지 않는 페이지: ms/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ms/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ms/gallery.html:1 | A3 | 높음 | 같은 ms 페이지에서 연결되지 않는 페이지: ms/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ms/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ms/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Seberapa pantas AI & Poem menjana puisi?", JSON-LD 질문="Seberapa pantas AI & Poem menjana puisi?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ms/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Bolehkah saya menggunakan puisi yang dijana untuk tujuan komersial?", JSON-LD 질문="Bolehkah saya menggunakan puisi yang dijana untuk tujuan komersial?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ms/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Adakah alat ini menjana narasi secara automatik?", JSON-LD 질문="Adakah alat ini menjana narasi secara automatik?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ms/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Blog"와 대상 h1 "Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi" 불일치: blog/ms/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ms/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Prinsip dan Masa Depan Penjana Puisi AI"와 대상 h1 "Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi" 불일치: blog/ms/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ms/index.html:323 | C3 | 높음 | 기사 링크 텍스트 "Cara Menulis Ucapan Perkahwinan yang Menyentuh Hati"와 대상 h1 "5 Tips Menulis Puisi dengan Baik: Kreativiti Bersama AI" 불일치: blog/ms/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ms/index.html:329 | C3 | 높음 | 기사 링크 텍스트 "Koleksi Petikan Emosi Popular di SNS"와 대상 h1 "Inspirasi dari Teknik Penulisan Penyair Terkenal" 불일치: blog/ms/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ms/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ms/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ms/use-cases.html:1 | A3 | 높음 | 같은 ms 페이지에서 연결되지 않는 페이지: ms/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ms/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Puisi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/nl/author.html:1 | A3 | 높음 | 같은 nl 페이지에서 연결되지 않는 페이지: nl/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/nl/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/nl/faq.html:1 | A3 | 높음 | 같은 nl 페이지에서 연결되지 않는 페이지: nl/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/nl/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/nl/gallery.html:1 | A3 | 높음 | 같은 nl 페이지에서 연결되지 않는 페이지: nl/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/nl/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/nl/index.html:1 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Hoe snel maakt AI & Poem een gedicht?", JSON-LD 질문="How quickly does AI & Poem create a poem?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/nl/index.html:320 | C3 | 높음 | 기사 링크 텍스트 "Blog"와 대상 h1 "Het principe van AI die poëzie schrijft" 불일치: blog/nl/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/nl/index.html:320 | C3 | 높음 | 기사 링크 텍스트 "Principes en Toekomst van AI Gedicht Generatoren"와 대상 h1 "Het principe van AI die poëzie schrijft" 불일치: blog/nl/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/nl/index.html:346 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Kan ik het gegenereerde gedicht commercieel gebruiken?", JSON-LD 질문="Can I use the generated poem commercially?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/nl/index.html:352 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Maakt de tool automatisch vertelling?", JSON-LD 질문="Does the tool create narration automatically?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/nl/index.html:368 | C3 | 높음 | 기사 링크 텍스트 "Hoe schrijft u ontroerende bruiloftstoespraken"와 대상 h1 "5 tips voor geweldige poëzie" 불일치: blog/nl/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/nl/index.html:372 | C3 | 높음 | 기사 링크 텍스트 "Verzameling van Emotionele Citaten Populair op SNS"와 대상 h1 "Inspiratie van beroemde dichters" 불일치: blog/nl/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/nl/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/nl/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/nl/use-cases.html:1 | A3 | 높음 | 같은 nl 페이지에서 연결되지 않는 페이지: nl/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/nl/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Gedicht". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/no/author.html:1 | A3 | 높음 | 같은 no 페이지에서 연결되지 않는 페이지: no/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/no/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/no/faq.html:1 | A3 | 높음 | 같은 no 페이지에서 연결되지 않는 페이지: no/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/no/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/no/gallery.html:1 | A3 | 높음 | 같은 no 페이지에서 연결되지 않는 페이지: no/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/no/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/no/index.html:1 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Hvor raskt lager AI & Poem et dikt?", JSON-LD 질문="How quickly does AI & Poem create a poem?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/no/index.html:317 | C3 | 높음 | 기사 링크 텍스트 "Blogg"와 대상 h1 "Prinsippet bak AI-poesi" 불일치: blog/no/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/no/index.html:317 | C3 | 높음 | 기사 링크 텍스트 "Prinsipper og Fremtid for AI Diktgeneratorer"와 대상 h1 "Prinsippet bak AI-poesi" 불일치: blog/no/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/no/index.html:343 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Kan jeg bruke det genererte diktet kommersielt?", JSON-LD 질문="Can I use the generated poem commercially?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/no/index.html:348 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Lager verktøyet fortelling automatisk?", JSON-LD 질문="Does the tool create narration automatically?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/no/index.html:363 | C3 | 높음 | 기사 링크 텍스트 "Hvordan skrive rørende bryllupstaler"와 대상 h1 "5 tips for å skrive gode dikt" 불일치: blog/no/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/no/index.html:367 | C3 | 높음 | 기사 링크 텍스트 "Samling av Emosjonelle Sitater Populære på SNS"와 대상 h1 "Inspirasjon fra kjente diktere" 불일치: blog/no/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/no/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/no/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/no/use-cases.html:1 | A3 | 높음 | 같은 no 페이지에서 연결되지 않는 페이지: no/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/no/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pl/about.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI i wiersz". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pl/author.html:1 | A3 | 높음 | 같은 pl 페이지에서 연결되지 않는 페이지: pl/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/pl/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Wiersz". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pl/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI i wiersz". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pl/faq.html:1 | A3 | 높음 | 같은 pl 페이지에서 연결되지 않는 페이지: pl/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/pl/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Wiersz". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pl/gallery.html:1 | A3 | 높음 | 같은 pl 페이지에서 연결되지 않는 페이지: pl/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/pl/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Wiersz". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pl/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Jak szybko AI & Poem tworzy wiersz?", JSON-LD 질문="Jak szybko AI & Poem tworzy wiersz?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/pl/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Czy mogę komercyjnie używać wygenerowanego wiersza?", JSON-LD 질문="Czy mogę komercyjnie używać wygenerowanego wiersza?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/pl/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Czy narzędzie automatycznie tworzy narrację?", JSON-LD 질문="Czy narzędzie automatycznie tworzy narrację?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/pl/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "blogu"와 대상 h1 "Jak AI pisze wiersze: spotkanie technologii i emocji" 불일치: blog/pl/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/pl/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "Zasady i przyszłość generatorów wierszy AI"와 대상 h1 "Jak AI pisze wiersze: spotkanie technologii i emocji" 불일치: blog/pl/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/pl/index.html:321 | C3 | 높음 | 기사 링크 텍스트 "Jak pisać wzruszające przemówienia ślubne"와 대상 h1 "5 wskazówek, jak dobrze pisać wiersze: Tworzenie z AI" 불일치: blog/pl/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/pl/index.html:325 | C3 | 높음 | 기사 링크 텍스트 "Zbiór emocjonalnych cytatów popularnych w mediach społecznościowych"와 대상 h1 "Inspiracje z technik wielkich poetów" 불일치: blog/pl/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/pl/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/pl/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/pl/use-cases.html:1 | A3 | 높음 | 같은 pl 페이지에서 연결되지 않는 페이지: pl/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/pl/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Wiersz". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pt/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA e poema". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pt/author.html:1 | A3 | 높음 | 같은 pt 페이지에서 연결되지 않는 페이지: pt/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/pt/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Poema". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pt/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "IA e poema". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pt/faq.html:1 | A3 | 높음 | 같은 pt 페이지에서 연결되지 않는 페이지: pt/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/pt/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Poema". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pt/gallery.html:1 | A3 | 높음 | 같은 pt 페이지에서 연결되지 않는 페이지: pt/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/pt/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Poema". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/pt/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Com que rapidez o AI & Poem cria um poema?", JSON-LD 질문="Com que rapidez o AI & Poem cria um poema?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/pt/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Posso usar comercialmente o poema gerado?", JSON-LD 질문="Posso usar comercialmente o poema gerado?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/pt/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="A ferramenta gera a narração automaticamente?", JSON-LD 질문="A ferramenta gera a narração automaticamente?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/pt/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "blog"와 대상 h1 "O Princípio da Criação Poética pela IA: A Convergência da Tecnologia e da Emoção" 불일치: blog/pt/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/pt/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "Princípios e Futuro dos Geradores de Poemas AI"와 대상 h1 "O Princípio da Criação Poética pela IA: A Convergência da Tecnologia e da Emoção" 불일치: blog/pt/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/pt/index.html:322 | C3 | 높음 | 기사 링크 텍스트 "Como escrever discursos de casamento tocantes"와 대상 h1 "5 Dicas para Escrever Poemas: Criação com AI" 불일치: blog/pt/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/pt/index.html:327 | C3 | 높음 | 기사 링크 텍스트 "Coleção de citações emocionais populares nas redes sociais"와 대상 h1 "Inspiração Aprendida com os Métodos de Poetas Famosos" 불일치: blog/pt/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/pt/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/pt/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/pt/use-cases.html:1 | A3 | 높음 | 같은 pt 페이지에서 연결되지 않는 페이지: pt/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/pt/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Poema". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ru/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "ИИ и поэма". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ru/author.html:1 | A3 | 높음 | 같은 ru 페이지에서 연결되지 않는 페이지: ru/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ru/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Стихи". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ru/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "ИИ и поэма". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ru/faq.html:1 | A3 | 높음 | 같은 ru 페이지에서 연결되지 않는 페이지: ru/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ru/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Стихи". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ru/gallery.html:1 | A3 | 높음 | 같은 ru 페이지에서 연결되지 않는 페이지: ru/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ru/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Стихи". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/ru/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Как быстро AI & Poem создает стихотворение?", JSON-LD 질문="Как быстро AI & Poem создает стихотворение?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ru/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Можно ли использовать созданный стих коммерчески?", JSON-LD 질문="Можно ли использовать созданный стих коммерчески?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ru/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Инструмент автоматически создает озвучку?", JSON-LD 질문="Инструмент автоматически создает озвучку?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/ru/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "блоге"와 대상 h1 "Принципы написания стихов ИИ: встреча технологий и эмоций" 불일치: blog/ru/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ru/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "Принципы и будущее генераторов стихов ИИ"와 대상 h1 "Принципы написания стихов ИИ: встреча технологий и эмоций" 불일치: blog/ru/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ru/index.html:319 | C3 | 높음 | 기사 링크 텍스트 "Как написать трогательную свадебную речь"와 대상 h1 "5 советов по написанию стихов: творчество с AI" 불일치: blog/ru/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ru/index.html:323 | C3 | 높음 | 기사 링크 텍스트 "Коллекция эмоциональных цитат, популярных в социальных сетях"와 대상 h1 "Вдохновение от мастерства известных поэтов" 불일치: blog/ru/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/ru/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ru/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/ru/use-cases.html:1 | A3 | 높음 | 같은 ru 페이지에서 연결되지 않는 페이지: ru/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/ru/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Стихи". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sv/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sv/author.html:1 | A3 | 높음 | 같은 sv 페이지에서 연결되지 않는 페이지: sv/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/sv/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sv/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sv/faq.html:1 | A3 | 높음 | 같은 sv 페이지에서 연결되지 않는 페이지: sv/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/sv/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sv/gallery.html:1 | A3 | 높음 | 같은 sv 페이지에서 연결되지 않는 페이지: sv/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/sv/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sv/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Hur snabbt skapar AI & Poem en dikt?", JSON-LD 질문="Hur snabbt skapar AI & Poem en dikt?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/sv/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Kan jag använda den skapade dikten kommersiellt?", JSON-LD 질문="Kan jag använda den skapade dikten kommersiellt?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/sv/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Skapar verktyget uppläsningen automatiskt?", JSON-LD 질문="Skapar verktyget uppläsningen automatiskt?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/sv/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "Blogg"와 대상 h1 "AI:s principer för att skriva poesi: Mötet mellan teknik och känsla" 불일치: blog/sv/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/sv/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "Principer och framtid för AI-diktgeneratorer"와 대상 h1 "AI:s principer för att skriva poesi: Mötet mellan teknik och känsla" 불일치: blog/sv/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/sv/index.html:319 | C3 | 높음 | 기사 링크 텍스트 "Hur man skriver rörande bröllopstal"와 대상 h1 "5 tips för att skriva bra poesi: Skapande med AI" 불일치: blog/sv/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/sv/index.html:324 | C3 | 높음 | 기사 링크 텍스트 "Samling av känslomässiga citat populära på sociala medier"와 대상 h1 "Inspiration från berömda poeters skrivkonst" 불일치: blog/sv/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/sv/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/sv/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/sv/use-cases.html:1 | A3 | 높음 | 같은 sv 페이지에서 연결되지 않는 페이지: sv/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/sv/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Dikt". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sw/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "Ai & shairi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sw/author.html:1 | A3 | 높음 | 같은 sw 페이지에서 연결되지 않는 페이지: sw/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/sw/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Shairi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sw/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "Ai & shairi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sw/faq.html:1 | A3 | 높음 | 같은 sw 페이지에서 연결되지 않는 페이지: sw/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/sw/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Shairi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sw/gallery.html:1 | A3 | 높음 | 같은 sw 페이지에서 연결되지 않는 페이지: sw/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/sw/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Shairi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/sw/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "Blogu"와 대상 h1 "Kanuni ya AI Kuandika Mashairi: Mkutano wa Teknolojia na Hisia" 불일치: blog/sw/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/sw/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "Kanuni na Mustakabali wa Jenereta za Mashairi ya AI"와 대상 h1 "Kanuni ya AI Kuandika Mashairi: Mkutano wa Teknolojia na Hisia" 불일치: blog/sw/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/sw/index.html:326 | C3 | 높음 | 기사 링크 텍스트 "Jinsi ya Kuandika Hotuba za Harusi Zinazogusa"와 대상 h1 "Vidokezo 5 vya Kuandika Mashairi Bora: Kuunda na AI" 불일치: blog/sw/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/sw/index.html:332 | C3 | 높음 | 기사 링크 텍스트 "Mkusanyiko wa Nukuu za Hisia Maarufu kwenye SNS"와 대상 h1 "Msukumo kutoka kwa Ufundi wa Washairi Maarufu" 불일치: blog/sw/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/sw/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/sw/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/sw/use-cases.html:1 | A3 | 높음 | 같은 sw 페이지에서 연결되지 않는 페이지: sw/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/sw/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Shairi". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/th/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI และบทกวี". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/th/author.html:1 | A3 | 높음 | 같은 th 페이지에서 연결되지 않는 페이지: th/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/th/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & บทกวี". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/th/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI และบทกวี". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/th/faq.html:1 | A3 | 높음 | 같은 th 페이지에서 연결되지 않는 페이지: th/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/th/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & บทกวี". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/th/gallery.html:1 | A3 | 높음 | 같은 th 페이지에서 연결되지 않는 페이지: th/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/th/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & บทกวี". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/th/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="AI & Poem ใช้เวลาสร้างบทกวีนานแค่ไหน?", JSON-LD 질문="AI & Poem ใช้เวลาสร้างบทกวีนานแค่ไหน?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/th/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="ใช้บทกวีที่สร้างเพื่อการพาณิชย์ได้ไหม?", JSON-LD 질문="ใช้บทกวีที่สร้างเพื่อการพาณิชย์ได้ไหม?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/th/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="เครื่องมือนี้สร้างเสียงอ่านให้อัตโนมัติหรือไม่?", JSON-LD 질문="เครื่องมือนี้สร้างเสียงอ่านให้อัตโนมัติหรือไม่?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/th/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "บล็อก"와 대상 h1 "หลักการที่ AI เขียนบทกวี: การพบกันระหว่างเทคโนโลยีและอารมณ์" 불일치: blog/th/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/th/index.html:281 | C3 | 높음 | 기사 링크 텍스트 "หลักการและอนาคตของเครื่องกำเนิดบทกวี AI"와 대상 h1 "หลักการที่ AI เขียนบทกวี: การพบกันระหว่างเทคโนโลยีและอารมณ์" 불일치: blog/th/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/th/index.html:319 | C3 | 높음 | 기사 링크 텍스트 "วิธีเขียนสุนทรพจน์งานแต่งงานที่น่าประทับใจ"와 대상 h1 "5 เคล็ดลับในการเขียนบทกวีให้ดี: การสร้างสรรค์ร่วมกับ AI" 불일치: blog/th/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/th/index.html:324 | C3 | 높음 | 기사 링크 텍스트 "รวมคำคมโดนใจยอดนิยมบน SNS"와 대상 h1 "แรงบันดาลใจจากการเรียนรู้เทคนิคของกวีชื่อดัง" 불일치: blog/th/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/th/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/th/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/th/use-cases.html:1 | A3 | 높음 | 같은 th 페이지에서 연결되지 않는 페이지: th/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/th/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & บทกวี". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/tr/about.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "Yapay Zeka ve Şiir". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/tr/author.html:1 | A3 | 높음 | 같은 tr 페이지에서 연결되지 않는 페이지: tr/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/tr/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Şiir". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/tr/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "Yapay Zeka ve Şiir". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/tr/faq.html:1 | A3 | 높음 | 같은 tr 페이지에서 연결되지 않는 페이지: tr/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/tr/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Şiir". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/tr/gallery.html:1 | A3 | 높음 | 같은 tr 페이지에서 연결되지 않는 페이지: tr/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/tr/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Şiir". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/tr/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="AI & Poem bir şiiri ne kadar hızlı oluşturur?", JSON-LD 질문="AI & Poem bir şiiri ne kadar hızlı oluşturur?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/tr/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Oluşturulan şiiri ticari amaçla kullanabilir miyim?", JSON-LD 질문="Oluşturulan şiiri ticari amaçla kullanabilir miyim?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/tr/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Araç seslendirmeyi otomatik mi üretir?", JSON-LD 질문="Araç seslendirmeyi otomatik mi üretir?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/tr/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "Blog"와 대상 h1 "Yapay Zeka'nın Şiir Yazma Prensibi: Teknoloji ve Duygu Buluşması" 불일치: blog/tr/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/tr/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "Yapay Zeka Şiir Oluşturucularının İlkeleri ve Geleceği"와 대상 h1 "Yapay Zeka'nın Şiir Yazma Prensibi: Teknoloji ve Duygu Buluşması" 불일치: blog/tr/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/tr/index.html:324 | C3 | 높음 | 기사 링크 텍스트 "Dokunaklı Düğün Konuşmaları Nasıl Yazılır"와 대상 h1 "Şiir Yazmanın 5 İpucu: AI ile Yaratıcılık" 불일치: blog/tr/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/tr/index.html:330 | C3 | 높음 | 기사 링크 텍스트 "Sosyal Medyada Popüler Duygusal Sözler Koleksiyonu"와 대상 h1 "Ünlü Şairlerin Yazım Tarzlarından İlham Almak" 불일치: blog/tr/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/tr/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/tr/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/tr/use-cases.html:1 | A3 | 높음 | 같은 tr 페이지에서 연결되지 않는 페이지: tr/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/tr/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Şiir". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/uk/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "ШІ та вірш". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/uk/author.html:1 | A3 | 높음 | 같은 uk 페이지에서 연결되지 않는 페이지: uk/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/uk/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Вірш". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/uk/contact.html:85 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "ШІ та вірш". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/uk/faq.html:1 | A3 | 높음 | 같은 uk 페이지에서 연결되지 않는 페이지: uk/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/uk/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Вірш". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/uk/gallery.html:1 | A3 | 높음 | 같은 uk 페이지에서 연결되지 않는 페이지: uk/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/uk/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Вірш". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/uk/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="Як швидко AI & Poem створює вірш?", JSON-LD 질문="Як швидко AI & Poem створює вірш?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/uk/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Чи можу я комерційно використовувати згенерований вірш?", JSON-LD 질문="Чи можу я комерційно використовувати згенерований вірш?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/uk/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Чи генерує інструмент озвучення автоматично?", JSON-LD 질문="Чи генерує інструмент озвучення автоматично?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/uk/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Блог"와 대상 h1 "Принципи написання віршів штучним інтелектом: зустріч технологій та емоцій" 불일치: blog/uk/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/uk/index.html:283 | C3 | 높음 | 기사 링크 텍스트 "Принципи та майбутнє генераторів віршів ШІ"와 대상 h1 "Принципи написання віршів штучним інтелектом: зустріч технологій та емоцій" 불일치: blog/uk/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/uk/index.html:322 | C3 | 높음 | 기사 링크 텍스트 "Як написати зворушливу весільну промову"와 대상 h1 "5 порад для написання віршів: Творчість з AI" 불일치: blog/uk/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/uk/index.html:327 | C3 | 높음 | 기사 링크 텍스트 "Колекція емоційних цитат, популярних у соціальних мережах"와 대상 h1 "Натхнення з майстерності відомих поетів" 불일치: blog/uk/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/uk/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/uk/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/uk/use-cases.html:1 | A3 | 높음 | 같은 uk 페이지에서 연결되지 않는 페이지: uk/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/uk/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Вірш". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/vi/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Thơ". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/vi/author.html:1 | A3 | 높음 | 같은 vi 페이지에서 연결되지 않는 페이지: vi/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/vi/author.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Thơ". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/vi/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Thơ". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/vi/faq.html:1 | A3 | 높음 | 같은 vi 페이지에서 연결되지 않는 페이지: vi/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/vi/faq.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Thơ". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/vi/gallery.html:1 | A3 | 높음 | 같은 vi 페이지에서 연결되지 않는 페이지: vi/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/vi/gallery.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Thơ". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/vi/index.html:86 | C4 | 높음 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="AI & Poem tạo thơ nhanh thế nào?", JSON-LD 질문="AI & Poem tạo thơ nhanh thế nào?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/vi/index.html:94 | C4 | 높음 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="Tôi có thể dùng bài thơ được tạo cho mục đích thương mại không?", JSON-LD 질문="Tôi có thể dùng bài thơ được tạo cho mục đích thương mại không?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/vi/index.html:102 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="Công cụ có tự động tạo giọng đọc không?", JSON-LD 질문="Công cụ có tự động tạo giọng đọc không?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/vi/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "Blog"와 대상 h1 "Nguyên lý AI viết thơ: Cuộc gặp gỡ giữa công nghệ và cảm xúc" 불일치: blog/vi/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/vi/index.html:282 | C3 | 높음 | 기사 링크 텍스트 "Nguyên tắc và Tương lai của Trình tạo thơ AI"와 대상 h1 "Nguyên lý AI viết thơ: Cuộc gặp gỡ giữa công nghệ và cảm xúc" 불일치: blog/vi/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/vi/index.html:322 | C3 | 높음 | 기사 링크 텍스트 "Cách viết bài phát biểu đám cưới cảm động"와 대상 h1 "5 mẹo viết thơ hay: Sáng tạo cùng AI" 불일치: blog/vi/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/vi/index.html:328 | C3 | 높음 | 기사 링크 텍스트 "Bộ sưu tập những câu trích dẫn cảm xúc phổ biến trên mạng xã hội"와 대상 h1 "Cảm hứng từ cách viết của những nhà thơ nổi tiếng" 불일치: blog/vi/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/vi/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/vi/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/vi/use-cases.html:1 | A3 | 높음 | 같은 vi 페이지에서 연결되지 않는 페이지: vi/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/vi/use-cases.html:1 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "AI & Thơ". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/zh/404.html:1 | A3 | 높음 | 같은 zh 페이지에서 연결되지 않는 페이지: zh/404.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| frontend/zh/404.html:7 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "人工智能与诗歌". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/zh/about.html:65 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "人工智能与诗歌". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/zh/contact.html:6 | C1 | 높음 | 헤더 로고 h1 텍스트가 "AI & Poem"이 아님: "人工智能与诗歌". | 사이트 헤더 로고 h1 텍스트를 AI & Poem으로 통일. |
| frontend/zh/faq.html:40 | C4 | 높음 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="生成一首诗需要多长时间？", JSON-LD 질문="生成一首诗需要多长时间？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:45 | C4 | 높음 | FAQ 4 화면과 JSON-LD 불일치. 화면 질문="支持哪些语言？", JSON-LD 질문="支持哪些语言？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:50 | C4 | 높음 | FAQ 5 화면과 JSON-LD 불일치. 화면 질문="如何使用语音朗读功能？", JSON-LD 질문="如何使用语音朗读功能？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:55 | C4 | 높음 | FAQ 6 화면과 JSON-LD 불일치. 화면 질문="可以用任何主题创作诗歌吗？", JSON-LD 질문="可以用任何主题创作诗歌吗？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:65 | C4 | 높음 | FAQ 8 화면과 JSON-LD 불일치. 화면 질문="可以保存或分享生成的诗歌吗？", JSON-LD 질문="可以保存或分享生成的诗歌吗？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:70 | C4 | 높음 | FAQ 9 화면과 JSON-LD 불일치. 화면 질문="AI是如何创作诗歌的？", JSON-LD 질문="AI是如何创作诗歌的？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:75 | C4 | 높음 | FAQ 10 화면과 JSON-LD 불일치. 화면 질문="每次生成的诗歌都是独一无二的吗？", JSON-LD 질문="每次生成的诗歌都是独一无二的吗？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:80 | C4 | 높음 | FAQ 11 화면과 JSON-LD 불일치. 화면 질문="AI诗歌与人类写的诗歌有何不同？", JSON-LD 질문="AI诗歌与人类写的诗歌有何不同？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:90 | C4 | 높음 | FAQ 13 화면과 JSON-LD 불일치. 화면 질문="AI生成诗歌的版权归谁？", JSON-LD 질문="AI生成诗歌的版权归谁？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:95 | C4 | 높음 | FAQ 14 화면과 JSON-LD 불일치. 화면 질문="可以用于教育目的吗？", JSON-LD 질문="可以用于教育目的吗？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/faq.html:100 | C4 | 높음 | FAQ 15 화면과 JSON-LD 불일치. 화면 질문="AI诗歌可以用于情感疗愈吗？", JSON-LD 질문="AI诗歌可以用于情感疗愈吗？". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| frontend/zh/index.html:243 | C3 | 높음 | 기사 링크 텍스트 "博客"와 대상 h1 "AI写诗的原理：技术与情感的交汇" 불일치: blog/zh/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/zh/index.html:243 | C3 | 높음 | 기사 링크 텍스트 "AI 诗歌生成器的原理与未来"와 대상 h1 "AI写诗的原理：技术与情感的交汇" 불일치: blog/zh/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/zh/index.html:269 | C3 | 높음 | 기사 링크 텍스트 "如何撰写感人的婚礼致辞"와 대상 h1 "写好诗的五个技巧：与AI共同创作" 불일치: blog/zh/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/zh/index.html:273 | C3 | 높음 | 기사 링크 텍스트 "社交媒体上流行的情感语录合集"와 대상 h1 "从著名诗人的创作方法中汲取灵感" 불일치: blog/zh/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| frontend/zh/privacy.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| frontend/zh/terms.html:1 | A5 | 높음 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
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
| frontend/ar/about.html:10 | C2 | 중간 | 같은 언어 href ar/about.html의 링크 텍스트 3종류: عن / معلومات عنا / عن الخدمة | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/about.html:65 | C2 | 중간 | 같은 언어 href ar/index.html의 링크 텍스트 4종류: منظمة العفو الدولية وقصيدة / بيت / AI & Poem / ← العودة إلى الرئيسية | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/about.html:65 | C2 | 중간 | 같은 언어 href ar/index.html의 링크 텍스트 4종류: منظمة العفو الدولية وقصيدة / بيت / AI & Poem / ← العودة إلى الرئيسية | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/about.html:72 | C2 | 중간 | 같은 언어 href blog/ar/index.html의 링크 텍스트 3종류: مدونة / المدونة / ← العودة إلى القائمة | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/about.html:73 | C2 | 중간 | 같은 언어 href ar/contact.html의 링크 텍스트 2종류: اتصال / اتصل بنا | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: نحن ندعم 31 لغة بما في ذلك الكورية والإنجليزية واليابانية والصينية والفرنسية، مما يسمح للمستخدمين العالميين بالاستمتاع بالشعر بلغتهم الأم. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ar/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ar/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ar/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ar/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ar/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: ندعم 31 لغة بما في ذلك العربية والإنجليزية والكورية واليابانية والصينية والإسبانية والفرنسية. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ar/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ar/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ar/index.html:166 | C2 | 중간 | 같은 언어 href ar/about.html의 링크 텍스트 3종류: عن / معلومات عنا / عن الخدمة | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/index.html:166 | C2 | 중간 | 같은 언어 href ar/about.html의 링크 텍스트 3종류: عن / معلومات عنا / عن الخدمة | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/index.html:167 | C2 | 중간 | 같은 언어 href ar/contact.html의 링크 텍스트 2종류: اتصال / اتصل بنا | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/index.html:168 | C2 | 중간 | 같은 언어 href blog/ar/index.html의 링크 텍스트 3종류: مدونة / المدونة / ← العودة إلى القائمة | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ar/index.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/index.html:217 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ar/index.html:233 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/ar/index.html:234 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ar/index.html:236 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/index.html:240 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ar/index.html:250 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: بفضل دعم 31 لغة بما في ذلك الكورية والإنجليزية والفرنسية، يمكنك إكمال الكتابات لأغراض مختلفة مثل خطابات الزفاف ورسائل الحب وتعليقات SNS العاطفية في 10 ثوانٍ فقط. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ar/index.html:278 | C2 | 중간 | 같은 언어 href blog/ar/article-1.html의 링크 텍스트 3종류: مدونة / مبادئ ومستقبل مولدات القصائد بالذكاء الاصطناعي / مبدأ كتابة الذكاء الاصطناعي للشعر: لقاء التكنولوجيا والعاطفة | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/index.html:278 | C2 | 중간 | 같은 언어 href blog/ar/article-1.html의 링크 텍스트 3종류: مدونة / مبادئ ومستقبل مولدات القصائد بالذكاء الاصطناعي / مبدأ كتابة الذكاء الاصطناعي للشعر: لقاء التكنولوجيا والعاطفة | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/index.html:318 | C2 | 중간 | 같은 언어 href blog/ar/article-2.html의 링크 텍스트 2종류: كيفية كتابة خطابات زفاف مؤثرة / 5 نصائح لكتابة شعر رائع: الإبداع مع الذكاء الاصطناعي | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/index.html:322 | C2 | 중간 | 같은 언어 href blog/ar/article-3.html의 링크 텍스트 2종류: مجموعة من الاقتباسات العاطفية الشائعة على SNS / إلهام من حرفة الشعراء المشهورين | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ar/index.html:328 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ar/privacy.html:65 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/privacy.html:89 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ar/privacy.html:109 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/privacy.html:124 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ar/privacy.html:166 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ar/terms.html:136 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ar/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/author.html:11 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/author.html:120 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem은 31개 언어를 지원하는 다국어 시 생성 서비스입니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/author.html:150 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ar/article-1.html:70 | C2 | 중간 | 같은 언어 href ar/index.html의 링크 텍스트 4종류: منظمة العفو الدولية وقصيدة / بيت / AI & Poem / ← العودة إلى الرئيسية | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ar/article-1.html:70 | C2 | 중간 | 같은 언어 href blog/ar/index.html의 링크 텍스트 3종류: مدونة / المدونة / ← العودة إلى القائمة | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ar/article-1.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ar/article-1.html:130 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ar/article-2.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ar/article-2.html:131 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ar/article-3.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ar/article-3.html:126 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ar/article-4.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ar/article-4.html:127 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ar/article-5.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ar/article-5.html:125 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ar/index.html:72 | C2 | 중간 | 같은 언어 href ar/index.html의 링크 텍스트 4종류: منظمة العفو الدولية وقصيدة / بيت / AI & Poem / ← العودة إلى الرئيسية | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ar/index.html:93 | C2 | 중간 | 같은 언어 href blog/ar/article-1.html의 링크 텍스트 3종류: مدونة / مبادئ ومستقبل مولدات القصائد بالذكاء الاصطناعي / مبدأ كتابة الذكاء الاصطناعي للشعر: لقاء التكنولوجيا والعاطفة | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ar/index.html:105 | C2 | 중간 | 같은 언어 href blog/ar/article-2.html의 링크 텍스트 2종류: كيفية كتابة خطابات زفاف مؤثرة / 5 نصائح لكتابة شعر رائع: الإبداع مع الذكاء الاصطناعي | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ar/index.html:116 | C2 | 중간 | 같은 언어 href blog/ar/article-3.html의 링크 텍스트 2종류: مجموعة من الاقتباسات العاطفية الشائعة على SNS / إلهام من حرفة الشعراء المشهورين | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ar/index.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/bn/article-1.html:72 | C2 | 중간 | 같은 언어 href bn/index.html의 링크 텍스트 6종류: AI & Poem / ← প্রধান পৃষ্ঠায় ফিরে যান / এআই এবং কবিতা / বাড়ি | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/bn/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/bn/index.html의 링크 텍스트 2종류: ← তালিকায় ফিরে যান / ব্লগ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/bn/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/bn/article-1.html:157 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/bn/article-1.html:165 | C2 | 중간 | 같은 언어 href bn/terms.html의 링크 텍스트 5종류: শর্তাবলী / ব্যবহার শর্তাবলী / পরিষেবার শর্তাবলী / সেবার শর্তাবলী | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/bn/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/bn/article-2.html:144 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/bn/article-2.html:152 | C2 | 중간 | 같은 언어 href bn/terms.html의 링크 텍스트 5종류: শর্তাবলী / ব্যবহার শর্তাবলী / পরিষেবার শর্তাবলী / সেবার শর্তাবলী | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/bn/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/bn/article-3.html:152 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/bn/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/bn/article-4.html:134 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/bn/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/bn/article-5.html:133 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/bn/index.html:72 | C2 | 중간 | 같은 언어 href bn/index.html의 링크 텍스트 6종류: AI & Poem / ← প্রধান পৃষ্ঠায় ফিরে যান / এআই এবং কবিতা / বাড়ি | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/bn/index.html:93 | C2 | 중간 | 같은 언어 href blog/bn/article-1.html의 링크 텍스트 3종류: AI কিভাবে কবিতা লেখে: প্রযুক্তি এবং অনুভূতির মিলন / ব্লগ / AI কবিতা জেনারেটরের নীতি এবং ভবিষ্যৎ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/bn/index.html:104 | C2 | 중간 | 같은 언어 href blog/bn/article-2.html의 링크 텍스트 2종류: কবিতা লেখার ৫টি টিপস: AI এর সাথে সৃজনশীলতা / কীভাবে স্পর্শকাতর বিবাহের বক্তৃতা লিখবেন | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/bn/index.html:115 | C2 | 중간 | 같은 언어 href blog/bn/article-3.html의 링크 텍스트 2종류: প্রখ্যাত কবিদের লেখার পদ্ধতি থেকে অনুপ্রেরণা গ্রহণ / SNS-এ জনপ্রিয় আবেগপূর্ণ উদ্ধৃতির সংগ্রহ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/bn/index.html:152 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
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
| frontend/blog/da/article-1.html:76 | C2 | 중간 | 같은 언어 href da/index.html의 링크 텍스트 4종류: AI & Poem / ← Tilbage til Forsiden / Hjem / AI & Digt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/da/article-1.html:76 | C2 | 중간 | 같은 언어 href blog/da/index.html의 링크 텍스트 2종류: ← Tilbage til listen / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/da/article-1.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/da/article-1.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/da/article-1.html:103 | C2 | 중간 | 같은 언어 href da/privacy.html의 링크 텍스트 3종류: Privacy Policy / Privatlivspolitik / privatlivspolitik | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/da/article-1.html:109 | C2 | 중간 | 같은 언어 href da/terms.html의 링크 텍스트 3종류: Terms of Service / Servicevilkår / Betingelser for brug | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/da/article-2.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/da/article-2.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/da/article-3.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/da/article-3.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/da/article-4.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/da/article-4.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/da/article-5.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/da/article-5.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/da/index.html:8 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI & Poem Blog | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/da/index.html:76 | C2 | 중간 | 같은 언어 href da/index.html의 링크 텍스트 4종류: AI & Poem / ← Tilbage til Forsiden / Hjem / AI & Digt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/da/index.html:98 | C2 | 중간 | 같은 언어 href blog/da/article-1.html의 링크 텍스트 3종류: Princippet bag AI-poesi: Mødet mellem teknologi og følelser / Blog / Principper og Fremtid for AI Digtgeneratorer | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/da/index.html:108 | C2 | 중간 | 같은 언어 href blog/da/article-2.html의 링크 텍스트 2종류: 5 tips til at skrive gode digte: Skabelse med AI / Sådan skriver du rørende bryllupstaler | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/da/index.html:118 | C2 | 중간 | 같은 언어 href blog/da/article-3.html의 링크 텍스트 2종류: Inspiration fra berømte digteres håndværk / Samling af Følelsesladede Citater Populære på SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/da/index.html:151 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/de/article-1.html:72 | C2 | 중간 | 같은 언어 href de/index.html의 링크 텍스트 4종류: AI & Poem / KI & Gedicht / ← Zurück zur Hauptseite / Heim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/de/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/de/index.html의 링크 텍스트 2종류: ← Zurück zur Liste / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/de/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/de/article-1.html:161 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/de/article-1.html:162 | C2 | 중간 | 같은 언어 href de/privacy.html의 링크 텍스트 3종류: Datenschutzrichtlinie / Datenschutzbestimmungen / Datenschutzerklärung | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/de/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/de/article-2.html:150 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/de/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/de/article-3.html:156 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/de/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/de/article-4.html:139 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/de/article-5.html:72 | C2 | 중간 | 같은 언어 href de/index.html의 링크 텍스트 4종류: AI & Poem / KI & Gedicht / ← Zurück zur Hauptseite / Heim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/de/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/de/article-5.html:137 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/de/article-5.html:138 | C2 | 중간 | 같은 언어 href de/privacy.html의 링크 텍스트 3종류: Datenschutzrichtlinie / Datenschutzbestimmungen / Datenschutzerklärung | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/de/index.html:1 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI & Poem Blog | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/de/index.html:72 | C2 | 중간 | 같은 언어 href de/index.html의 링크 텍스트 4종류: AI & Poem / KI & Gedicht / ← Zurück zur Hauptseite / Heim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/de/index.html:93 | C2 | 중간 | 같은 언어 href blog/de/article-1.html의 링크 텍스트 3종류: Wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion / Blog / Prinzipien und Zukunft von KI-Gedichtgeneratoren | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/de/index.html:106 | C2 | 중간 | 같은 언어 href blog/de/article-2.html의 링크 텍스트 2종류: 5 Tipps für gutes Schreiben: Kreatives Arbeiten mit KI / Wie man berührende Hochzeitsreden schreibt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/de/index.html:119 | C2 | 중간 | 같은 언어 href blog/de/article-3.html의 링크 텍스트 2종류: Inspiration aus den Schreibtechniken berühmter Dichter / Sammlung emotionaler Zitate, die in sozialen Netzwerken beliebt sind | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/de/index.html:158 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/el/article-1.html:72 | C2 | 중간 | 같은 언어 href el/index.html의 링크 텍스트 5종류: AI & Poem / ← Επιστροφή στην αρχική σελίδα / AI & Ποίημα / Σπίτι | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/el/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/el/index.html의 링크 텍스트 2종류: ← Επιστροφή στη λίστα / Ιστολόγιο | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/el/article-1.html:91 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/el/article-1.html:166 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/el/article-1.html:167 | C2 | 중간 | 같은 언어 href el/privacy.html의 링크 텍스트 2종류: Πολιτική απορρήτου / Πολιτική Απορρήτου | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/el/article-1.html:174 | C2 | 중간 | 같은 언어 href el/terms.html의 링크 텍스트 3종류: Όροι χρήσης / Όροι Παροχής Υπηρεσιών / Όροι Χρήσης | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/el/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/el/article-2.html:150 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/el/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/el/article-3.html:155 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/el/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/el/article-4.html:140 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/el/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/el/article-5.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/el/index.html:72 | C2 | 중간 | 같은 언어 href el/index.html의 링크 텍스트 5종류: AI & Poem / ← Επιστροφή στην αρχική σελίδα / AI & Ποίημα / Σπίτι | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/el/index.html:93 | C2 | 중간 | 같은 언어 href blog/el/article-1.html의 링크 텍스트 3종류: Η αρχή που γράφει ποιήματα AI: Η συνάντηση τεχνολογίας και συναισθήματος / Ιστολόγιο / Αρχές και Μέλλον των Γεννητριών Ποιημάτων AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/el/index.html:106 | C2 | 중간 | 같은 언어 href blog/el/article-2.html의 링크 텍스트 2종류: 5 συμβουλές για να γράφετε καλά ποιήματα: Δημιουργία με AI / Πώς να γράψετε συγκινητικές ομιλίες γάμου | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/el/index.html:119 | C2 | 중간 | 같은 언어 href blog/el/article-3.html의 링크 텍스트 2종류: Έμπνευση από τις τεχνικές διάσημων ποιητών / Συλλογή συναισθηματικών αποφθεγμάτων δημοφιλών στα SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/el/index.html:159 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-1.html:126 | C2 | 중간 | 같은 언어 href en/index.html의 링크 텍스트 7종류: AI & Poem / ← Back to Main / Generate an AI Poem → / Back to Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:126 | C2 | 중간 | 같은 언어 href blog/en/index.html의 링크 텍스트 3종류: ← Back to the list / Blog / ← Back to List | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:126 | C2 | 중간 | 같은 언어 href blog/en/index.html의 링크 텍스트 3종류: ← Back to the list / Blog / ← Back to List | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:238 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-1.html:240 | C2 | 중간 | 같은 언어 href en/author.html의 링크 텍스트 4종류: View full profile → / Author / author page / Learn more about the author → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:240 | C2 | 중간 | 같은 언어 href en/author.html의 링크 텍스트 4종류: View full profile → / Author / author page / Learn more about the author → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:246 | C2 | 중간 | 같은 언어 href blog/en/article-3.html의 링크 텍스트 4종류: Learning from Famous Poets: Inspiration from Their Craft / Inspiration from the Craft of Famous Poets / Writing Like a Poet: Creative Techniques in the AI Era / Collection of Emotional Quotes Popular on SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:247 | C2 | 중간 | 같은 언어 href blog/en/article-8.html의 링크 텍스트 2종류: The Day Computers Started Writing Poetry: A History of AI Poetry / The Day Computers Started Writing Poetry | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:248 | C2 | 중간 | 같은 언어 href blog/en/article-10.html의 링크 텍스트 3종류: Who Owns AI-Written Poetry: Copyright and Ethical Issues / Who Owns the Poem AI Wrote?: Copyright and Ethics / Who Owns AI-Written Poetry? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:255 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-1.html:258 | C2 | 중간 | 같은 언어 href en/gallery.html의 링크 텍스트 2종류: Gallery / ← Back to Gallery | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:259 | C2 | 중간 | 같은 언어 href en/faq.html의 링크 텍스트 3종류: FAQ / Frequently Asked Questions / View All FAQs → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:264 | C2 | 중간 | 같은 언어 href en/privacy.html의 링크 텍스트 2종류: Privacy / Privacy Policy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:266 | C2 | 중간 | 같은 언어 href en/contact.html의 링크 텍스트 3종류: Contact / contact / Contact us. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-1.html:269 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/article-10.html:113 | C2 | 중간 | 같은 언어 href blog/en/index.html의 링크 텍스트 3종류: ← Back to the list / Blog / ← Back to List | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-10.html:148 | C2 | 중간 | 같은 언어 href blog/en/article-4.html의 링크 텍스트 2종류: The Future of AI Poetry Generators: Will They Replace Writers? / The Future of AI Poetry: Where Technology Meets Emotion | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-10.html:162 | C2 | 중간 | 같은 언어 href blog/en/article-6.html의 링크 텍스트 3종류: AI Poetry and Emotional Healing / AI Poetry and Emotional Healing: New Possibilities in Writing Therapy / AI Poetry and Emotional Healing: A New Tool for Literary Therapy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-10.html:173 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-10.html:181 | C2 | 중간 | 같은 언어 href blog/en/article-1.html의 링크 텍스트 6종류: How AI Writes Poetry: The Meeting of Technology and Emotion / The Principle of AI Writing Poetry / The Principle of AI Writing Poetry: The Meeting of Technology and Emotion / The Principles and Future of AI Poem Generators | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-10.html:183 | C2 | 중간 | 같은 언어 href blog/en/article-9.html의 링크 텍스트 3종류: AI Poets in the Classroom: Educational Applications of AI Poetry Generators / The AI Poet in the Classroom: Educational Applications of AI Poetry Generators / AI Poets in the Classroom | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-10.html:188 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-10.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-10.html:202 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/article-2.html:220 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-2.html:237 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-2.html:251 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/article-3.html:219 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-3.html:227 | C2 | 중간 | 같은 언어 href blog/en/article-2.html의 링크 텍스트 5종류: 5 Tips for Writing Better Poetry with AI / 5 Tips for Writing Great Poetry / 5 Tips for Writing Great Poetry: Creating with AI / 7 Tips for Creating Moving AI Poems | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-3.html:228 | C2 | 중간 | 같은 언어 href blog/en/article-7.html의 링크 텍스트 3종류: Writing Poetry in 31 Languages: The Secrets of AI Multilingual Poetry / Writing Poetry in 31 Languages / Writing Poetry in 31 Languages: The Secret of Multilingual AI Poetry | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-3.html:228 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Writing Poetry in 31 Languages: The Secrets of AI Multilingual Poetry | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-3.html:236 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-3.html:250 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/article-4.html:199 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-4.html:216 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-4.html:230 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/article-5.html:211 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-5.html:220 | C2 | 중간 | 같은 언어 href blog/en/article-6.html의 링크 텍스트 3종류: AI Poetry and Emotional Healing / AI Poetry and Emotional Healing: New Possibilities in Writing Therapy / AI Poetry and Emotional Healing: A New Tool for Literary Therapy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-5.html:221 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Writing Poetry in 31 Languages: The Secrets of AI Multilingual Poetry | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-5.html:228 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-5.html:242 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/article-6.html:133 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Beginning in the late 1980s, his research showed that participants who wrote about traumatic or stressful experiences for 15-20 minutes over 3-4 consecutive days demonstrated improved immune function, fewer hospital visits, and greater overall psychological well-being. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-6.html:140 | C2 | 중간 | 같은 언어 href blog/en/article-1.html의 링크 텍스트 6종류: How AI Writes Poetry: The Meeting of Technology and Emotion / The Principle of AI Writing Poetry / The Principle of AI Writing Poetry: The Meeting of Technology and Emotion / The Principles and Future of AI Poem Generators | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-6.html:152 | C2 | 중간 | 같은 언어 href blog/en/article-2.html의 링크 텍스트 5종류: 5 Tips for Writing Better Poetry with AI / 5 Tips for Writing Great Poetry / 5 Tips for Writing Great Poetry: Creating with AI / 7 Tips for Creating Moving AI Poems | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-6.html:163 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-6.html:172 | C2 | 중간 | 같은 언어 href blog/en/article-5.html의 링크 텍스트 3종류: Create Heartfelt Speeches and Letters with AI in 10 Seconds / Create Touching Speeches and Letters in 10 Seconds with AI / Writing Special Speeches and Letters with AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-6.html:178 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-6.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-6.html:192 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: This realization was what drove me to commit to supporting 31 languages. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Optimizing these prompts for each of 31 languages was the most time-consuming and experiment-intensive part of developing the service. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem seeks to realize this spirit in the digital age through support for 31 languages. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-7.html:7 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Writing Poetry in 31 Languages: The Secrets of AI Multilingual Poetry | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-7.html:138 | C2 | 중간 | 같은 언어 href blog/en/article-3.html의 링크 텍스트 4종류: Learning from Famous Poets: Inspiration from Their Craft / Inspiration from the Craft of Famous Poets / Writing Like a Poet: Creative Techniques in the AI Era / Collection of Emotional Quotes Popular on SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-7.html:138 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Generating poetry in 31 languages is a fundamentally different challenge from translation. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-7.html:179 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Beyond structural differences, each language carries distinct emotional vocabularies that shape how feelings are poeticized. Korean has concepts like "jeong" (정) — a deep, accumulated affection — that have no direct English equivalent. Japanese "mono no aware" (物の哀れ) captures the bittersweet awareness of impermanence. Portuguese "saudade" describes a profound longing for something absent. When AI generates poetry in these languages, it draws on these culturally specific emotional frameworks, producing poems that resonate differently depending on the language chosen. Users who experiment with multiple languages often report discovering entirely new emotional dimensions and expressive possibilities they couldn't access in their mother tongue alone. | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-7.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-7.html:205 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-7.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-7.html:219 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/article-8.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: We designed custom prompts for each of 31 languages, reflecting their respective poetic traditions, and implemented content filtering for safety. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-8.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: For AI & Poem, this meant designing custom prompts for each of our 31 supported languages — prompts that incorporate each language's poetic traditions, rhythmic systems, and cultural contexts. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-8.html:146 | D3 | 중간 | 작성자 줄에 "by " 표기 발견. | 페이지 언어의 작성자 표기로 번역. |
| frontend/blog/en/article-8.html:159 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-8.html:168 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Writing Poetry in 31 Languages: The Secrets of AI Multilingual Poetry | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-8.html:174 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-8.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-8.html:188 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/article-9.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: , AI & Poem supports 31 languages, making it applicable to diverse foreign language classrooms. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-9.html:145 | C2 | 중간 | 같은 언어 href blog/en/article-7.html의 링크 텍스트 3종류: Writing Poetry in 31 Languages: The Secrets of AI Multilingual Poetry / Writing Poetry in 31 Languages / Writing Poetry in 31 Languages: The Secret of Multilingual AI Poetry | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/article-9.html:145 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Writing Poetry in 31 Languages | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-9.html:159 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Development 1 (20 min): Individual Creation | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-9.html:162 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Development 2 (20 min): AI Collaboration | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-9.html:165 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Development 3 (20 min): Sharing and Feedback | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/article-9.html:191 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/en/article-9.html:206 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-9.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/article-9.html:220 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/en/index.html:82 | C2 | 중간 | 같은 언어 href en/index.html의 링크 텍스트 7종류: AI & Poem / ← Back to Main / Generate an AI Poem → / Back to Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/index.html:103 | C2 | 중간 | 같은 언어 href blog/en/article-1.html의 링크 텍스트 6종류: How AI Writes Poetry: The Meeting of Technology and Emotion / The Principle of AI Writing Poetry / The Principle of AI Writing Poetry: The Meeting of Technology and Emotion / The Principles and Future of AI Poem Generators | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/index.html:115 | C2 | 중간 | 같은 언어 href blog/en/article-2.html의 링크 텍스트 5종류: 5 Tips for Writing Better Poetry with AI / 5 Tips for Writing Great Poetry / 5 Tips for Writing Great Poetry: Creating with AI / 7 Tips for Creating Moving AI Poems | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/index.html:149 | C2 | 중간 | 같은 언어 href blog/en/article-5.html의 링크 텍스트 3종류: Create Heartfelt Speeches and Letters with AI in 10 Seconds / Create Touching Speeches and Letters in 10 Seconds with AI / Writing Special Speeches and Letters with AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/index.html:171 | C2 | 중간 | 같은 언어 href blog/en/article-7.html의 링크 텍스트 3종류: Writing Poetry in 31 Languages: The Secrets of AI Multilingual Poetry / Writing Poetry in 31 Languages / Writing Poetry in 31 Languages: The Secret of Multilingual AI Poetry | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/index.html:172 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Writing Poetry in 31 Languages: The Secret of Multilingual AI Poetry | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/index.html:176 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Discover how AI creates poetry in 31 languages and the differences between poetic traditions. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/en/index.html:191 | C2 | 중간 | 같은 언어 href blog/en/article-9.html의 링크 텍스트 3종류: AI Poets in the Classroom: Educational Applications of AI Poetry Generators / The AI Poet in the Classroom: Educational Applications of AI Poetry Generators / AI Poets in the Classroom | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/index.html:201 | C2 | 중간 | 같은 언어 href blog/en/article-10.html의 링크 텍스트 3종류: Who Owns AI-Written Poetry: Copyright and Ethical Issues / Who Owns the Poem AI Wrote?: Copyright and Ethics / Who Owns AI-Written Poetry? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/en/index.html:214 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/en/index.html:228 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/es/article-1.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-1.html:117 | C2 | 중간 | 같은 언어 href es/index.html의 링크 텍스트 8종류: AI & Poem / ← Volver a la página principal / IA y poema / Crear un poema con IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-1.html:117 | C2 | 중간 | 같은 언어 href blog/es/index.html의 링크 텍스트 2종류: ← Volver a la lista / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-1.html:232 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-1.html:232 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-1.html:234 | C2 | 중간 | 같은 언어 href es/author.html의 링크 텍스트 4종류: Ver perfil completo → / Sobre el autor / Más sobre el autor → / Sobre el Autor | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-1.html:240 | C2 | 중간 | 같은 언어 href blog/es/article-3.html의 링크 텍스트 5종류: Aprendiendo de poetas famosos: Inspiración desde su oficio / Inspiración desde los métodos de poetas famosos / Inspiración a partir de las técnicas de poetas famosos / Poesía IA vs. poesía humana: ¿puede la IA escribir poemas auténticos? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-1.html:241 | C2 | 중간 | 같은 언어 href blog/es/article-8.html의 링크 텍스트 3종류: El día que las computadoras empezaron a escribir poesía: Historia de la poesía IA / El día que la computadora empezó a escribir poesía: historia de la poesía con IA / El día que la computadora empezó a escribir poesía | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-1.html:242 | C2 | 중간 | 같은 언어 href blog/es/article-10.html의 링크 텍스트 3종류: ¿De quién es la poesía escrita por IA?: Cuestiones de derechos de autor y ética / ¿De quién es el poema que escribió la IA?: derechos de autor y ética / ¿De quién es el poema que escribió la IA? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-1.html:249 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/article-1.html:250 | C2 | 중간 | 같은 언어 href es/privacy.html의 링크 텍스트 2종류: Política de privacidad / Política de Privacidad | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-1.html:257 | C2 | 중간 | 같은 언어 href es/terms.html의 링크 텍스트 3종류: Términos de uso / Términos de servicio / Términos de Servicio | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-10.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-10.html:137 | C2 | 중간 | 같은 언어 href blog/es/article-4.html의 링크 텍스트 4종류: El futuro del generador de poesía con IA: ¿reemplazará a los escritores? / El futuro de los generadores de poesía IA: ¿Reemplazarán a los escritores? / El futuro del generador de poesía AI: ¿reemplazará a los escritores? / Poesía IA en la educación: guía práctica para el aula | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-10.html:149 | C2 | 중간 | 같은 언어 href blog/es/article-6.html의 링크 텍스트 4종류: Poesía IA y sanación emocional / Poesía IA y sanación emocional: Nuevas posibilidades en la terapia de escritura / Poesía IA y sanación emocional: nuevas posibilidades en la escritura terapéutica / Poesía IA y sanación emocional: una nueva herramienta de terapia literaria | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-10.html:160 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-10.html:160 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-10.html:168 | C2 | 중간 | 같은 언어 href blog/es/article-1.html의 링크 텍스트 7종류: Cómo la IA escribe poesía: El encuentro entre tecnología y emoción / El principio de la escritura poética con IA / El principio de la escritura de poesía por IA: el encuentro de la tecnología y la emoción / Principios y futuro del generador de poemas con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-10.html:170 | C2 | 중간 | 같은 언어 href blog/es/article-9.html의 링크 텍스트 3종류: Poetas IA en el aula: Aplicaciones educativas de los generadores de poesía IA / El poeta IA en el aula: uso educativo de los generadores de poesía con IA / El poeta IA en el aula | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-10.html:175 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-10.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/article-10.html:178 | C2 | 중간 | 같은 언어 href es/terms.html의 링크 텍스트 3종류: Términos de uso / Términos de servicio / Términos de Servicio | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-2.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-2.html:216 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-2.html:216 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-2.html:233 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/article-3.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-3.html:217 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-3.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-3.html:225 | C2 | 중간 | 같은 언어 href blog/es/article-2.html의 링크 텍스트 5종류: 5 consejos para escribir mejor poesía con IA / 5 consejos para escribir buena poesía / 5 consejos para escribir buena poesía: creación junto a la IA / 7 consejos para crear poemas IA conmovedores | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-3.html:226 | C2 | 중간 | 같은 언어 href blog/es/article-7.html의 링크 텍스트 3종류: Escribir poesía en 31 idiomas: Los secretos de la poesía multilingüe con IA / Escribir poesía en 31 idiomas / Escribir poesía en 31 idiomas: el secreto de la creación poética multilingüe con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-3.html:226 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Escribir poesía en 31 idiomas: Los secretos de la poesía multilingüe con IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-3.html:234 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/article-4.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-4.html:199 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-4.html:199 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-4.html:216 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/article-5.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-5.html:203 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-5.html:203 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-5.html:212 | C2 | 중간 | 같은 언어 href blog/es/article-6.html의 링크 텍스트 4종류: Poesía IA y sanación emocional / Poesía IA y sanación emocional: Nuevas posibilidades en la terapia de escritura / Poesía IA y sanación emocional: nuevas posibilidades en la escritura terapéutica / Poesía IA y sanación emocional: una nueva herramienta de terapia literaria | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-5.html:213 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Escribir poesía en 31 idiomas: Los secretos de la poesía multilingüe con IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-5.html:220 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/article-6.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-6.html:123 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: A partir de finales de la década de 1980, su investigación demostró que los participantes que escribieron sobre experiencias traumáticas o estresantes durante 15-20 minutos a lo largo de 3-4 días consecutivos mostraron mejoras en la función inmunológica, menos visitas al hospital y mayor bienestar psicológico general. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-6.html:123 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: James Pennebaker | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-6.html:130 | C2 | 중간 | 같은 언어 href blog/es/article-1.html의 링크 텍스트 7종류: Cómo la IA escribe poesía: El encuentro entre tecnología y emoción / El principio de la escritura poética con IA / El principio de la escritura de poesía por IA: el encuentro de la tecnología y la emoción / Principios y futuro del generador de poemas con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-6.html:141 | C2 | 중간 | 같은 언어 href blog/es/article-2.html의 링크 텍스트 5종류: 5 consejos para escribir mejor poesía con IA / 5 consejos para escribir buena poesía / 5 consejos para escribir buena poesía: creación junto a la IA / 7 consejos para crear poemas IA conmovedores | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-6.html:152 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-6.html:152 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-6.html:160 | C2 | 중간 | 같은 언어 href blog/es/article-4.html의 링크 텍스트 4종류: El futuro del generador de poesía con IA: ¿reemplazará a los escritores? / El futuro de los generadores de poesía IA: ¿Reemplazarán a los escritores? / El futuro del generador de poesía AI: ¿reemplazará a los escritores? / Poesía IA en la educación: guía práctica para el aula | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-6.html:161 | C2 | 중간 | 같은 언어 href blog/es/article-5.html의 링크 텍스트 3종류: Crea discursos y cartas emotivas con IA en 10 segundos / Crear discursos emotivos y cartas en 10 segundos con IA / Escribir discursos y cartas especiales con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-6.html:167 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-6.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: El mismo género de "poesía", pero con expectativas de forma y sensibilidad tan diferentes según el idioma — este descubrimiento me impulsó a decidir dar soporte a 31 idiomas. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Optimizar estos prompts para 31 idiomas fue la parte del desarrollo del servicio que más tiempo y experimentación requirió. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem, a través del soporte de 31 idiomas, busca materializar este espíritu en la era digital. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-7.html:7 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Escribir poesía en 31 idiomas: el secreto de la creación poética multilingüe con IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-7.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-7.html:128 | C2 | 중간 | 같은 언어 href blog/es/article-3.html의 링크 텍스트 5종류: Aprendiendo de poetas famosos: Inspiración desde su oficio / Inspiración desde los métodos de poetas famosos / Inspiración a partir de las técnicas de poetas famosos / Poesía IA vs. poesía humana: ¿puede la IA escribir poemas auténticos? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-7.html:128 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Generar poesía en 31 idiomas es un desafío completamente diferente a la simple traducción. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 창가에 기대어 보는 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 달이 흘린 말들이 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 마루 위에 고여 있다 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 손대면 흩어질 것 같아 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 숨을 멈추고 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 그 고요에 잠긴다 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-7.html:152 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Upon the silent lake the moonlight falls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-7.html:153 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: A silver thread through darkness softly spun, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-7.html:154 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: It whispers secrets through the ancient walls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-7.html:155 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Of all the quiet deeds the night has done. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-7.html:167 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-7.html:167 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-7.html:182 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-7.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/article-8.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Para AI & Poem, esto significó diseñar prompts personalizados para cada uno de los 31 idiomas soportados, incorporando las tradiciones poéticas, los sistemas rítmicos y los contextos culturales de cada lengua. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-8.html:8 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Christopher Strachey | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-8.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-8.html:147 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-8.html:147 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-8.html:156 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Escribir poesía en 31 idiomas: Los secretos de la poesía multilingüe con IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-8.html:162 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-8.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/article-9.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: , AI & Poem soporta 31 idiomas, por lo que puede utilizarse en diversas clases de idiomas. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-9.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-9.html:134 | C2 | 중간 | 같은 언어 href blog/es/article-7.html의 링크 텍스트 3종류: Escribir poesía en 31 idiomas: Los secretos de la poesía multilingüe con IA / Escribir poesía en 31 idiomas / Escribir poesía en 31 idiomas: el secreto de la creación poética multilingüe con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/article-9.html:134 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Escribir poesía en 31 idiomas | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-9.html:145 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Desarrollo 1 (20 min): | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-9.html:146 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Desarrollo 2 (20 min): | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-9.html:147 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Desarrollo 3 (20 min): | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/article-9.html:170 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/es/article-9.html:170 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/es/article-9.html:185 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-9.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/es/index.html:73 | C2 | 중간 | 같은 언어 href es/index.html의 링크 텍스트 8종류: AI & Poem / ← Volver a la página principal / IA y poema / Crear un poema con IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:94 | C2 | 중간 | 같은 언어 href blog/es/article-1.html의 링크 텍스트 7종류: Cómo la IA escribe poesía: El encuentro entre tecnología y emoción / El principio de la escritura poética con IA / El principio de la escritura de poesía por IA: el encuentro de la tecnología y la emoción / Principios y futuro del generador de poemas con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:107 | C2 | 중간 | 같은 언어 href blog/es/article-2.html의 링크 텍스트 5종류: 5 consejos para escribir mejor poesía con IA / 5 consejos para escribir buena poesía / 5 consejos para escribir buena poesía: creación junto a la IA / 7 consejos para crear poemas IA conmovedores | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:120 | C2 | 중간 | 같은 언어 href blog/es/article-3.html의 링크 텍스트 5종류: Aprendiendo de poetas famosos: Inspiración desde su oficio / Inspiración desde los métodos de poetas famosos / Inspiración a partir de las técnicas de poetas famosos / Poesía IA vs. poesía humana: ¿puede la IA escribir poemas auténticos? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:132 | C2 | 중간 | 같은 언어 href blog/es/article-4.html의 링크 텍스트 4종류: El futuro del generador de poesía con IA: ¿reemplazará a los escritores? / El futuro de los generadores de poesía IA: ¿Reemplazarán a los escritores? / El futuro del generador de poesía AI: ¿reemplazará a los escritores? / Poesía IA en la educación: guía práctica para el aula | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:144 | C2 | 중간 | 같은 언어 href blog/es/article-5.html의 링크 텍스트 3종류: Crea discursos y cartas emotivas con IA en 10 segundos / Crear discursos emotivos y cartas en 10 segundos con IA / Escribir discursos y cartas especiales con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:156 | C2 | 중간 | 같은 언어 href blog/es/article-6.html의 링크 텍스트 4종류: Poesía IA y sanación emocional / Poesía IA y sanación emocional: Nuevas posibilidades en la terapia de escritura / Poesía IA y sanación emocional: nuevas posibilidades en la escritura terapéutica / Poesía IA y sanación emocional: una nueva herramienta de terapia literaria | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:166 | C2 | 중간 | 같은 언어 href blog/es/article-7.html의 링크 텍스트 3종류: Escribir poesía en 31 idiomas: Los secretos de la poesía multilingüe con IA / Escribir poesía en 31 idiomas / Escribir poesía en 31 idiomas: el secreto de la creación poética multilingüe con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:167 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Escribir poesía en 31 idiomas: el secreto de la creación poética multilingüe con IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/index.html:171 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Descubra cómo la IA crea poesía en 31 idiomas y las diferencias entre las tradiciones poéticas de cada lengua. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/es/index.html:176 | C2 | 중간 | 같은 언어 href blog/es/article-8.html의 링크 텍스트 3종류: El día que las computadoras empezaron a escribir poesía: Historia de la poesía IA / El día que la computadora empezó a escribir poesía: historia de la poesía con IA / El día que la computadora empezó a escribir poesía | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:186 | C2 | 중간 | 같은 언어 href blog/es/article-9.html의 링크 텍스트 3종류: Poetas IA en el aula: Aplicaciones educativas de los generadores de poesía IA / El poeta IA en el aula: uso educativo de los generadores de poesía con IA / El poeta IA en el aula | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:196 | C2 | 중간 | 같은 언어 href blog/es/article-10.html의 링크 텍스트 3종류: ¿De quién es la poesía escrita por IA?: Cuestiones de derechos de autor y ética / ¿De quién es el poema que escribió la IA?: derechos de autor y ética / ¿De quién es el poema que escribió la IA? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/es/index.html:209 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fi/article-1.html:72 | C2 | 중간 | 같은 언어 href fi/index.html의 링크 텍스트 6종류: AI & Poem / ← Palaa pääsivulle / AI & runo / Kotiin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fi/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/fi/index.html의 링크 텍스트 3종류: ← Palaa luetteloon / ← Takaisin luetteloon / Blogi | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fi/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fi/article-1.html:160 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fi/article-1.html:161 | C2 | 중간 | 같은 언어 href fi/privacy.html의 링크 텍스트 3종류: Tietosuojakäytäntö / Tietosuojaseloste / tietosuojaselostettamme | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fi/article-1.html:168 | C2 | 중간 | 같은 언어 href fi/terms.html의 링크 텍스트 2종류: Käyttöehdot / Palveluehdot | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fi/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fi/article-2.html:149 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fi/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fi/article-3.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fi/article-4.html:72 | C2 | 중간 | 같은 언어 href blog/fi/index.html의 링크 텍스트 3종류: ← Palaa luetteloon / ← Takaisin luetteloon / Blogi | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fi/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fi/article-4.html:135 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fi/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fi/article-5.html:134 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fi/index.html:72 | C2 | 중간 | 같은 언어 href fi/index.html의 링크 텍스트 6종류: AI & Poem / ← Palaa pääsivulle / AI & runo / Kotiin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fi/index.html:93 | C2 | 중간 | 같은 언어 href blog/fi/article-1.html의 링크 텍스트 3종류: Kuinka tekoäly kirjoittaa runoja: teknologian ja tunteiden kohtaaminen / Blogi / AI-runogeneraattoreiden periaatteet ja tulevaisuus | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fi/index.html:105 | C2 | 중간 | 같은 언어 href blog/fi/article-2.html의 링크 텍스트 2종류: 5 vinkkiä hyvän runon kirjoittamiseen: luovuus tekoälyn kanssa / Kuinka kirjoittaa koskettavia hääpuheita | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fi/index.html:118 | C2 | 중간 | 같은 언어 href blog/fi/article-3.html의 링크 텍스트 2종류: Inspiraatiota kuuluisilta runoilijoilta / Kokoelma tunteellisia lainauksia, jotka ovat suosittuja somessa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fi/index.html:156 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fil/article-1.html:70 | C2 | 중간 | 같은 언어 href fil/index.html의 링크 텍스트 4종류: AI & Poem / ← Bumalik sa pangunahing pahina / Tahanan / Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fil/article-1.html:70 | C2 | 중간 | 같은 언어 href blog/fil/index.html의 링크 텍스트 2종류: ← Bumalik sa listahan / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fil/article-1.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fil/article-1.html:96 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fil/article-1.html:97 | C2 | 중간 | 같은 언어 href fil/privacy.html의 링크 텍스트 2종류: Privacy Policy / Patakaran sa Privacy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fil/article-1.html:103 | C2 | 중간 | 같은 언어 href fil/terms.html의 링크 텍스트 3종류: Terms of Service / Mga Tuntunin ng Serbisyo / Mga Tuntunin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fil/article-2.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fil/article-2.html:96 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fil/article-3.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fil/article-3.html:96 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fil/article-4.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fil/article-4.html:96 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fil/article-5.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fil/article-5.html:96 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fil/index.html:8 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI & Poem Blog | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fil/index.html:70 | C2 | 중간 | 같은 언어 href fil/index.html의 링크 텍스트 4종류: AI & Poem / ← Bumalik sa pangunahing pahina / Tahanan / Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fil/index.html:92 | C2 | 중간 | 같은 언어 href blog/fil/article-1.html의 링크 텍스트 3종류: Ang prinsipyo ng AI na pagsulat ng tula: Ang pagtatagpo ng teknolohiya at emosyon / Blog / Mga Prinsipyo at Hinaharap ng mga AI Poem Generator | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fil/index.html:102 | C2 | 중간 | 같은 언어 href blog/fil/article-2.html의 링크 텍스트 2종류: 5 tip para sa pagsulat ng magagandang tula: Paglikha gamit ang AI / Paano Sumulat ng Nakakaantig na Talumpati sa Kasal | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fil/index.html:112 | C2 | 중간 | 같은 언어 href blog/fil/article-3.html의 링크 텍스트 2종류: Inspirasyon mula sa sining ng mga tanyag na makata / Koleksyon ng mga Emosyonal na quotes na sikat sa SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fil/index.html:145 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-1.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-1.html:117 | C2 | 중간 | 같은 언어 href fr/index.html의 링크 텍스트 8종류: AI & Poem / ← Retour à la page principale / IA et poème / Générer un poème IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-1.html:117 | C2 | 중간 | 같은 언어 href blog/fr/index.html의 링크 텍스트 2종류: ← Retour à la liste / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-1.html:233 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-1.html:233 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-1.html:235 | C2 | 중간 | 같은 언어 href fr/author.html의 링크 텍스트 4종류: Voir le profil complet → / À propos de l'auteur / L'auteur / En savoir plus sur l'auteur → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-1.html:241 | C2 | 중간 | 같은 언어 href blog/fr/article-3.html의 링크 텍스트 5종류: S'inspirer des grands poètes : Leçons de leur art / L'inspiration à travers les méthodes des poètes célèbres / S'inspirer des méthodes des poètes célèbres / Poésie IA pour chaque occasion | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-1.html:242 | C2 | 중간 | 같은 언어 href blog/fr/article-8.html의 링크 텍스트 3종류: Le jour où les ordinateurs ont commencé à écrire de la poésie : Histoire de la poésie IA / Le jour où l'ordinateur a commencé à écrire de la poésie : histoire de la poésie IA / Le jour où l'ordinateur a commencé à écrire de la poésie | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-1.html:243 | C2 | 중간 | 같은 언어 href blog/fr/article-10.html의 링크 텍스트 3종류: À qui appartient la poésie écrite par l'IA : Questions de droits d'auteur et d'éthique / À qui appartient le poème écrit par l'IA ? : droits d'auteur et éthique / À qui appartient le poème écrit par l'IA ? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-1.html:250 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-1.html:251 | C2 | 중간 | 같은 언어 href fr/privacy.html의 링크 텍스트 3종류: Politique de confidentialité / Confidentialité / politique de confidentialité | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-10.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-10.html:137 | C2 | 중간 | 같은 언어 href blog/fr/article-4.html의 링크 텍스트 4종류: L'avenir du générateur de poésie IA : remplacera-t-il les écrivains ? / L'avenir des générateurs de poésie IA : Remplaceront-ils les écrivains ? / L'avenir des générateurs de poésie IA : vont-ils remplacer les écrivains ? / Poésie IA vs poésie humaine : comparaison honnête | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-10.html:149 | C2 | 중간 | 같은 언어 href blog/fr/article-6.html의 링크 텍스트 3종류: Poésie IA et guérison émotionnelle / Poésie IA et guérison émotionnelle : Nouvelles possibilités en thérapie par l'écriture / Poésie IA et guérison émotionnelle : nouvelles possibilités de l'écriture thérapeutique | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-10.html:160 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-10.html:160 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-10.html:168 | C2 | 중간 | 같은 언어 href blog/fr/article-1.html의 링크 텍스트 8종류: Comment l'IA écrit de la poésie : La rencontre entre technologie et émotion / Le principe de l'écriture poétique par l'IA / Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion / Principes et avenir du générateur de poèmes IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-10.html:170 | C2 | 중간 | 같은 언어 href blog/fr/article-9.html의 링크 텍스트 3종류: Poètes IA en classe : Applications éducatives des générateurs de poésie IA / Le poète IA en classe : utilisation éducative des générateurs de poésie IA / Le poète IA en classe | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-10.html:175 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-10.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-2.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-2.html:218 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-2.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-2.html:235 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-3.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-3.html:221 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-3.html:221 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-3.html:229 | C2 | 중간 | 같은 언어 href blog/fr/article-2.html의 링크 텍스트 5종류: 5 conseils pour mieux écrire de la poésie avec l'IA / 5 conseils pour écrire de bons poèmes / 5 conseils pour bien écrire de la poésie : création avec l'IA / 7 conseils pour créer des poèmes IA émouvants | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-3.html:230 | C2 | 중간 | 같은 언어 href blog/fr/article-7.html의 링크 텍스트 3종류: Écrire de la poésie en 31 langues : Les secrets de la poésie multilingue par IA / Écrire de la poésie en 31 langues / Écrire de la poésie en 31 langues : le secret de la création poétique multilingue par IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-3.html:230 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Écrire de la poésie en 31 langues : Les secrets de la poésie multilingue par IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-3.html:238 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-4.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-4.html:200 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-4.html:200 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-4.html:217 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-5.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-5.html:203 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-5.html:203 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-5.html:212 | C2 | 중간 | 같은 언어 href blog/fr/article-6.html의 링크 텍스트 3종류: Poésie IA et guérison émotionnelle / Poésie IA et guérison émotionnelle : Nouvelles possibilités en thérapie par l'écriture / Poésie IA et guérison émotionnelle : nouvelles possibilités de l'écriture thérapeutique | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-5.html:213 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Écrire de la poésie en 31 langues : Les secrets de la poésie multilingue par IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-5.html:220 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-6.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-6.html:123 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Dès la fin des années 1980, ses recherches ont montré que les participants qui écrivaient sur des expériences traumatisantes ou stressantes pendant 15 à 20 minutes sur 3 à 4 jours consécutifs présentaient une amélioration de la fonction immunitaire, moins de visites à l'hôpital et un plus grand bien-être psychologique général. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-6.html:123 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: James Pennebaker | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-6.html:130 | C2 | 중간 | 같은 언어 href blog/fr/article-1.html의 링크 텍스트 8종류: Comment l'IA écrit de la poésie : La rencontre entre technologie et émotion / Le principe de l'écriture poétique par l'IA / Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion / Principes et avenir du générateur de poèmes IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-6.html:141 | C2 | 중간 | 같은 언어 href blog/fr/article-2.html의 링크 텍스트 5종류: 5 conseils pour mieux écrire de la poésie avec l'IA / 5 conseils pour écrire de bons poèmes / 5 conseils pour bien écrire de la poésie : création avec l'IA / 7 conseils pour créer des poèmes IA émouvants | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-6.html:152 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-6.html:152 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-6.html:160 | C2 | 중간 | 같은 언어 href blog/fr/article-4.html의 링크 텍스트 4종류: L'avenir du générateur de poésie IA : remplacera-t-il les écrivains ? / L'avenir des générateurs de poésie IA : Remplaceront-ils les écrivains ? / L'avenir des générateurs de poésie IA : vont-ils remplacer les écrivains ? / Poésie IA vs poésie humaine : comparaison honnête | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-6.html:161 | C2 | 중간 | 같은 언어 href blog/fr/article-5.html의 링크 텍스트 3종류: Créez des discours et lettres émouvants avec l'IA en 10 secondes / Créer des discours et lettres émouvants en 10 secondes avec l'IA / Écrire des discours et lettres spéciales avec l'IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-6.html:167 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-6.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Le même genre de « poésie », mais avec des attentes de forme et de sensibilité si différentes selon la langue — cette prise de conscience m'a poussé à décider de prendre en charge 31 langues. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Optimiser ces prompts pour 31 langues a été la partie du développement du service qui a demandé le plus de temps et d'expérimentation. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem, à travers la prise en charge de 31 langues, cherche à concrétiser cet esprit à l'ère numérique. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-7.html:7 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Écrire de la poésie en 31 langues : le secret de la création poétique multilingue par IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-7.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-7.html:128 | C2 | 중간 | 같은 언어 href blog/fr/article-3.html의 링크 텍스트 5종류: S'inspirer des grands poètes : Leçons de leur art / L'inspiration à travers les méthodes des poètes célèbres / S'inspirer des méthodes des poètes célèbres / Poésie IA pour chaque occasion | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-7.html:128 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Générer de la poésie en 31 langues est un défi totalement différent de la simple traduction. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 창가에 기대어 보는 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 달이 흘린 말들이 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 마루 위에 고여 있다 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 손대면 흩어질 것 같아 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 숨을 멈추고 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 그 고요에 잠긴다 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-7.html:152 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Upon the silent lake the moonlight falls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-7.html:153 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: A silver thread through darkness softly spun, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-7.html:154 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: It whispers secrets through the ancient walls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-7.html:155 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Of all the quiet deeds the night has done. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-7.html:167 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-7.html:167 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-7.html:182 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-7.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-8.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Pour AI & Poem, cela a signifié concevoir des prompts personnalisés pour chacune des 31 langues prises en charge, intégrant les traditions poétiques, les systèmes rythmiques et les contextes culturels de chaque langue. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-8.html:8 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Christopher Strachey | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-8.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-8.html:147 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-8.html:147 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-8.html:156 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Écrire de la poésie en 31 langues : Les secrets de la poésie multilingue par IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-8.html:162 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-8.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/article-9.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: , AI & Poem prend en charge 31 langues, ce qui permet de l'utiliser dans des cours de langues variés. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-9.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-9.html:134 | C2 | 중간 | 같은 언어 href blog/fr/article-7.html의 링크 텍스트 3종류: Écrire de la poésie en 31 langues : Les secrets de la poésie multilingue par IA / Écrire de la poésie en 31 langues / Écrire de la poésie en 31 langues : le secret de la création poétique multilingue par IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/article-9.html:134 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Écrire de la poésie en 31 langues | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-9.html:145 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Développement 1 (20 min) : | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-9.html:146 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Développement 2 (20 min) : | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-9.html:147 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Développement 3 (20 min) : | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/article-9.html:170 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/fr/article-9.html:170 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/fr/article-9.html:185 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-9.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/fr/index.html:73 | C2 | 중간 | 같은 언어 href fr/index.html의 링크 텍스트 8종류: AI & Poem / ← Retour à la page principale / IA et poème / Générer un poème IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:94 | C2 | 중간 | 같은 언어 href blog/fr/article-1.html의 링크 텍스트 8종류: Comment l'IA écrit de la poésie : La rencontre entre technologie et émotion / Le principe de l'écriture poétique par l'IA / Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion / Principes et avenir du générateur de poèmes IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:107 | C2 | 중간 | 같은 언어 href blog/fr/article-2.html의 링크 텍스트 5종류: 5 conseils pour mieux écrire de la poésie avec l'IA / 5 conseils pour écrire de bons poèmes / 5 conseils pour bien écrire de la poésie : création avec l'IA / 7 conseils pour créer des poèmes IA émouvants | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:120 | C2 | 중간 | 같은 언어 href blog/fr/article-3.html의 링크 텍스트 5종류: S'inspirer des grands poètes : Leçons de leur art / L'inspiration à travers les méthodes des poètes célèbres / S'inspirer des méthodes des poètes célèbres / Poésie IA pour chaque occasion | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:131 | C2 | 중간 | 같은 언어 href blog/fr/article-4.html의 링크 텍스트 4종류: L'avenir du générateur de poésie IA : remplacera-t-il les écrivains ? / L'avenir des générateurs de poésie IA : Remplaceront-ils les écrivains ? / L'avenir des générateurs de poésie IA : vont-ils remplacer les écrivains ? / Poésie IA vs poésie humaine : comparaison honnête | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:143 | C2 | 중간 | 같은 언어 href blog/fr/article-5.html의 링크 텍스트 3종류: Créez des discours et lettres émouvants avec l'IA en 10 secondes / Créer des discours et lettres émouvants en 10 secondes avec l'IA / Écrire des discours et lettres spéciales avec l'IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:155 | C2 | 중간 | 같은 언어 href blog/fr/article-6.html의 링크 텍스트 3종류: Poésie IA et guérison émotionnelle / Poésie IA et guérison émotionnelle : Nouvelles possibilités en thérapie par l'écriture / Poésie IA et guérison émotionnelle : nouvelles possibilités de l'écriture thérapeutique | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:165 | C2 | 중간 | 같은 언어 href blog/fr/article-7.html의 링크 텍스트 3종류: Écrire de la poésie en 31 langues : Les secrets de la poésie multilingue par IA / Écrire de la poésie en 31 langues / Écrire de la poésie en 31 langues : le secret de la création poétique multilingue par IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:166 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Écrire de la poésie en 31 langues : le secret de la création poétique multilingue par IA | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/index.html:170 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Découvrez comment l'IA crée de la poésie en 31 langues et les différences entre les traditions poétiques de chaque langue. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/fr/index.html:175 | C2 | 중간 | 같은 언어 href blog/fr/article-8.html의 링크 텍스트 3종류: Le jour où les ordinateurs ont commencé à écrire de la poésie : Histoire de la poésie IA / Le jour où l'ordinateur a commencé à écrire de la poésie : histoire de la poésie IA / Le jour où l'ordinateur a commencé à écrire de la poésie | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:185 | C2 | 중간 | 같은 언어 href blog/fr/article-9.html의 링크 텍스트 3종류: Poètes IA en classe : Applications éducatives des générateurs de poésie IA / Le poète IA en classe : utilisation éducative des générateurs de poésie IA / Le poète IA en classe | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:195 | C2 | 중간 | 같은 언어 href blog/fr/article-10.html의 링크 텍스트 3종류: À qui appartient la poésie écrite par l'IA : Questions de droits d'auteur et d'éthique / À qui appartient le poème écrit par l'IA ? : droits d'auteur et éthique / À qui appartient le poème écrit par l'IA ? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/fr/index.html:208 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hi/article-1.html:72 | C2 | 중간 | 같은 언어 href hi/index.html의 링크 텍스트 4종류: AI & Poem / ← मुख्य पृष्ठ पर वापस जाएँ / ऐ और कविता / घर | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hi/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/hi/index.html의 링크 텍스트 3종류: ← सूची में वापस जाएं / ← सूची में वापस जाएँ / ब्लॉग | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hi/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hi/article-1.html:160 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hi/article-1.html:168 | C2 | 중간 | 같은 언어 href hi/terms.html의 링크 텍스트 2종류: उपयोग की शर्तें / सेवा की शर्तें | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hi/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hi/article-2.html:145 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hi/article-3.html:72 | C2 | 중간 | 같은 언어 href blog/hi/index.html의 링크 텍스트 3종류: ← सूची में वापस जाएं / ← सूची में वापस जाएँ / ब्लॉग | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hi/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hi/article-3.html:151 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hi/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hi/article-4.html:135 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hi/article-4.html:143 | C2 | 중간 | 같은 언어 href hi/terms.html의 링크 텍스트 2종류: उपयोग की शर्तें / सेवा की शर्तें | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hi/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hi/article-5.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hi/index.html:72 | C2 | 중간 | 같은 언어 href hi/index.html의 링크 텍스트 4종류: AI & Poem / ← मुख्य पृष्ठ पर वापस जाएँ / ऐ और कविता / घर | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hi/index.html:93 | C2 | 중간 | 같은 언어 href blog/hi/article-1.html의 링크 텍스트 3종류: AI द्वारा कविता लिखने का सिद्धांत: तकनीक और भावना की मुलाकात / ब्लॉग / AI कविता जनरेटर के सिद्धांत और भविष्य | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hi/index.html:105 | C2 | 중간 | 같은 언어 href blog/hi/article-2.html의 링크 텍스트 2종류: अच्छी कविता लिखने के 5 टिप्स: AI के साथ रचनात्मकता / दिल को छू लेने वाले शादी के भाषण कैसे लिखें | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hi/index.html:116 | C2 | 중간 | 같은 언어 href blog/hi/article-3.html의 링크 텍스트 2종류: प्रसिद्ध कवियों की लेखन शैली से प्रेरणा लेना / SNS पर लोकप्रिय भावनात्मक उद्धरणों का संग्रह | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hi/index.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hu/article-1.html:76 | C2 | 중간 | 같은 언어 href hu/index.html의 링크 텍스트 5종류: AI & Poem / ← Vissza a főoldalra / Kezdőlap / AI & Vers | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hu/article-1.html:76 | C2 | 중간 | 같은 언어 href blog/hu/index.html의 링크 텍스트 2종류: ← Vissza a listához / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hu/article-1.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hu/article-1.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hu/article-1.html:103 | C2 | 중간 | 같은 언어 href hu/privacy.html의 링크 텍스트 4종류: Privacy Policy / Adatvédelmi irányelvek / Adatvédelem / Adatvédelmi tájékoztatónk | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hu/article-1.html:109 | C2 | 중간 | 같은 언어 href hu/terms.html의 링크 텍스트 4종류: Terms of Service / Szolgáltatási feltételek / Felhasználási feltételek / Feltételek | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hu/article-2.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hu/article-2.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hu/article-3.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hu/article-3.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hu/article-4.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hu/article-4.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hu/article-5.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hu/article-5.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/hu/index.html:8 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI & Poem Blog | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/hu/index.html:76 | C2 | 중간 | 같은 언어 href hu/index.html의 링크 텍스트 5종류: AI & Poem / ← Vissza a főoldalra / Kezdőlap / AI & Vers | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hu/index.html:98 | C2 | 중간 | 같은 언어 href blog/hu/article-1.html의 링크 텍스트 3종류: Az AI versírás elve: A technológia és az érzelem találkozása / Blogunkat / Az AI Versgenerátorok Alapelvei és Jövője | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hu/index.html:108 | C2 | 중간 | 같은 언어 href blog/hu/article-2.html의 링크 텍스트 2종류: 5 tipp nagyszerű versek írásához: Alkotás AI-val / Hogyan írjunk megható esküvői beszédeket | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hu/index.html:118 | C2 | 중간 | 같은 언어 href blog/hu/article-3.html의 링크 텍스트 2종류: Inspiráció híres költők mesterségéből / Érzelmes Idézetek Gyűjteménye, Amelyek Népszerűek az SNS-en | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/hu/index.html:151 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/id/article-1.html:72 | C2 | 중간 | 같은 언어 href id/index.html의 링크 텍스트 5종류: AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama / Rumah | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/id/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/id/index.html의 링크 텍스트 3종류: ← Kembali ke Daftar / blog / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/id/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/id/article-1.html:162 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/id/article-1.html:170 | C2 | 중간 | 같은 언어 href id/terms.html의 링크 텍스트 3종류: Syarat dan Ketentuan / Ketentuan Layanan / Syarat Penggunaan | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/id/article-2.html:72 | C2 | 중간 | 같은 언어 href id/index.html의 링크 텍스트 5종류: AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama / Rumah | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/id/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/id/article-2.html:150 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/id/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/id/article-3.html:157 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/id/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/id/article-4.html:137 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/id/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/id/article-5.html:137 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/id/index.html:72 | C2 | 중간 | 같은 언어 href id/index.html의 링크 텍스트 5종류: AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama / Rumah | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/id/index.html:93 | C2 | 중간 | 같은 언어 href blog/id/article-1.html의 링크 텍스트 3종류: Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi / Blog / Prinsip dan Masa Depan Generator Puisi AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/id/index.html:105 | C2 | 중간 | 같은 언어 href blog/id/article-2.html의 링크 텍스트 2종류: 5 Tips Menulis Puisi dengan Baik: Kreativitas Bersama AI / Cara Menulis Pidato Pernikahan yang Menyentuh | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/id/index.html:118 | C2 | 중간 | 같은 언어 href blog/id/article-3.html의 링크 텍스트 2종류: Inspirasi dari Gaya Penulisan Penyair Terkenal / Kumpulan Kutipan Emosional Populer di SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/id/index.html:156 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/it/article-1.html:72 | C2 | 중간 | 같은 언어 href it/index.html의 링크 텍스트 6종류: AI & Poem / ← Torna alla home / IA e poesia / Casa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/it/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/it/index.html의 링크 텍스트 2종류: ← Torna all'elenco / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/it/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/it/article-1.html:160 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/it/article-1.html:161 | C2 | 중간 | 같은 언어 href it/privacy.html의 링크 텍스트 3종류: Informativa sulla privacy / politica sulla riservatezza / Informativa sulla Privacy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/it/article-1.html:168 | C2 | 중간 | 같은 언어 href it/terms.html의 링크 텍스트 4종류: Termini di servizio / Termini di utilizzo / Termini di Servizio / Condizioni di servizio | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/it/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/it/article-2.html:148 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/it/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/it/article-3.html:156 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/it/article-3.html:164 | C2 | 중간 | 같은 언어 href it/terms.html의 링크 텍스트 4종류: Termini di servizio / Termini di utilizzo / Termini di Servizio / Condizioni di servizio | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/it/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/it/article-4.html:139 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/it/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/it/article-5.html:138 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/it/index.html:72 | C2 | 중간 | 같은 언어 href it/index.html의 링크 텍스트 6종류: AI & Poem / ← Torna alla home / IA e poesia / Casa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/it/index.html:93 | C2 | 중간 | 같은 언어 href blog/it/article-1.html의 링크 텍스트 3종류: Il principio per cui l'AI scrive poesie: l'incontro tra tecnologia ed emozione / blog / Principi e futuro dei generatori di poesie AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/it/index.html:106 | C2 | 중간 | 같은 언어 href blog/it/article-2.html의 링크 텍스트 2종류: 5 consigli per scrivere bene poesie: creazione con l'AI / Come scrivere discorsi di matrimonio toccanti | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/it/index.html:119 | C2 | 중간 | 같은 언어 href blog/it/article-3.html의 링크 텍스트 2종류: Ispirazione dalle tecniche dei poeti famosi / Raccolta di citazioni emotive popolari sui social network | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/it/index.html:157 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-1.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-1.html:123 | C2 | 중간 | 같은 언어 href ja/index.html의 링크 텍스트 8종류: AI & Poem / ← トップページに戻る / AIと詩 / AIで詩を生成する → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-1.html:123 | C2 | 중간 | 같은 언어 href blog/ja/index.html의 링크 텍스트 2종류: ← 一覧に戻る / ブログ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-1.html:138 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 著者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-1.html:221 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-1.html:221 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-1.html:223 | C2 | 중간 | 같은 언어 href ja/author.html의 링크 텍스트 4종류: 著者プロフィールを見る → / 著者について / 著者紹介 / 著者紹介をもっと見る → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-1.html:229 | C2 | 중간 | 같은 언어 href blog/ja/article-3.html의 링크 텍스트 6종류: 有名詩人の作法から学ぶインスピレーション / 有名な詩人の作法から学ぶインスピレーション / 有名詩人たちの作法から学ぶインスピレーション / AIが書いた詩の文学的価値を考える | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-1.html:230 | C2 | 중간 | 같은 언어 href blog/ja/article-8.html의 링크 텍스트 2종류: コンピュータが詩を書き始めた日：AI詩の歴史 / コンピュータが詩を書き始めた日 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-1.html:231 | C2 | 중간 | 같은 언어 href blog/ja/article-10.html의 링크 텍스트 3종류: AIが書いた詩、誰のものか：著作権と倫理の争点 / AIが書いた詩は誰のもの？：著作権と倫理の争点 / AIが書いた詩は誰のもの？ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-1.html:238 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-10.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-10.html:143 | C2 | 중간 | 같은 언어 href blog/ja/article-4.html의 링크 텍스트 3종류: AI詩生成器の未来：作家を代替するか？ / AI詩生成器の未来：作家に取って代わるのか？ / 教育現場でのAI詩の活用法 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-10.html:155 | C2 | 중간 | 같은 언어 href blog/ja/article-6.html의 링크 텍스트 4종류: AI詩と感情の癒し / AI詩と感情の癒し：ライティングセラピーの新たな可能性 / AI詩と感情の癒し：書くセラピーの新しい可能性 / AI詩と感情の癒し：文学療法の新しいツール | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-10.html:166 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-10.html:166 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-10.html:174 | C2 | 중간 | 같은 언어 href blog/ja/article-1.html의 링크 텍스트 7종류: AIが詩を書く仕組み：技術と感性の出会い / AIが詩を書く原理 / AIが詩を書く原理：技術と感性の出会い / AI詩ジェネレーターの原理と未来 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-10.html:176 | C2 | 중간 | 같은 언어 href blog/ja/article-9.html의 링크 텍스트 2종류: 教室で出会ったAI詩人：AI詩生成器の教育的活用 / 教室で出会ったAI詩人 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-10.html:181 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-10.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-2.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-2.html:138 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 著者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-2.html:206 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-2.html:206 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-2.html:223 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-3.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-3.html:138 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 著者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-3.html:208 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-3.html:208 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-3.html:216 | C2 | 중간 | 같은 언어 href blog/ja/article-2.html의 링크 텍스트 5종류: 詩をうまく書く5つのコツ：AIと一緒に創作 / 詩を上手に書く5つのコツ / 詩を上手に書く5つのヒント：AIと共に創る / 感動的なAI詩を作る7つのコツ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-3.html:217 | C2 | 중간 | 같은 언어 href blog/ja/article-7.html의 링크 텍스트 2종류: 31言語で詩を書く：AI多言語詩創作の秘密 / 31言語で詩を書く | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-3.html:217 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31言語で詩を書く：AI多言語詩創作の秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-3.html:225 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-4.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-4.html:138 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 著者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-4.html:191 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-4.html:191 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-4.html:208 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-5.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-5.html:138 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 著者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-5.html:198 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-5.html:198 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-5.html:207 | C2 | 중간 | 같은 언어 href blog/ja/article-6.html의 링크 텍스트 4종류: AI詩と感情の癒し / AI詩と感情の癒し：ライティングセラピーの新たな可能性 / AI詩と感情の癒し：書くセラピーの新しい可能性 / AI詩と感情の癒し：文学療法の新しいツール | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-5.html:208 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31言語で詩を書く：AI多言語詩創作の秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-5.html:215 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-6.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-6.html:129 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 教授の研究で体系的に検証されました。1980年代後半から始まった彼の研究によると、トラウマやストレス体験について15〜20分間、3〜4日連続で書いた参加者は、免疫機能の向上、病院訪問回数の減少、全般的な心理的幸福感の増加を示しました。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-6.html:135 | C2 | 중간 | 같은 언어 href blog/ja/article-1.html의 링크 텍스트 7종류: AIが詩を書く仕組み：技術と感性の出会い / AIが詩を書く原理 / AIが詩を書く原理：技術と感性の出会い / AI詩ジェネレーターの原理と未来 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-6.html:147 | C2 | 중간 | 같은 언어 href blog/ja/article-2.html의 링크 텍스트 5종류: 詩をうまく書く5つのコツ：AIと一緒に創作 / 詩を上手に書く5つのコツ / 詩を上手に書く5つのヒント：AIと共に創る / 感動的なAI詩を作る7つのコツ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-6.html:158 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-6.html:158 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-6.html:166 | C2 | 중간 | 같은 언어 href blog/ja/article-4.html의 링크 텍스트 3종류: AI詩生成器の未来：作家を代替するか？ / AI詩生成器の未来：作家に取って代わるのか？ / 教育現場でのAI詩の活用法 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-6.html:167 | C2 | 중간 | 같은 언어 href blog/ja/article-5.html의 링크 텍스트 3종류: 感動的な祝辞と手紙、AIで10秒で完成 / 感動的なスピーチと手紙、AIで10秒で完成させる / AIで特別な祝辞と手紙を書く | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-6.html:173 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-6.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poemを最初に作った時、韓国語の詩生成器ひとつで十分だと思っていました。しかしサービスを運営するうちに、世界中のさまざまな国からアクセスが来ていることに気づき驚きました。日本のユーザーは俳句を求め、フランスからはアレクサンドラン形式の詩を期待され、スペイン語圏のユーザーはパブロ・ネルーダ風の情熱的な詩を望みました。同じ「詩」というジャンルなのに、言語ごとに期待される形式と感性がこれほど異なるという気づきが、31言語対応を決心するきっかけとなりました。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poemでは、これをさらに精緻にするために言語別にカスタムプロンプトを設計しました。単に「詩を書け」ではなく、その言語の詩的伝統と美学的期待に合った指針をプロンプトに含めています。31言語それぞれについてこのプロンプトを最適化する作業は、サービス開発で最も時間と実験を要した部分でした。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: も、詩が言語と文化の多様性を保存し祝う最も強力な芸術形式だからです。AI & Poemは31言語対応を通じて、この精神をデジタル時代に実現しようとしています。どの言語であれ、あなたの感情と考えは詩になる資格があります。慣れた母語から始めて、時には見知らぬ言語の詩的世界も探検してみてください。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-7.html:7 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31言語で詩を書く：AI多言語詩創作の秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-7.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-7.html:134 | C2 | 중간 | 같은 언어 href blog/ja/article-3.html의 링크 텍스트 6종류: 有名詩人の作法から学ぶインスピレーション / 有名な詩人の作法から学ぶインスピレーション / 有名詩人たちの作法から学ぶインスピレーション / AIが書いた詩の文学的価値を考える | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-7.html:134 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31言語で詩を生成することは、単純な翻訳とは全く異なる挑戦です。詩を翻訳すると原作の韻律とリズムが失われるからです。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-7.html:158 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Upon the silent lake the moonlight falls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-7.html:159 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: A silver thread through darkness softly spun, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-7.html:160 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: It whispers secrets through the ancient walls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-7.html:161 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Of all the quiet deeds the night has done. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-7.html:173 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-7.html:173 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-7.html:188 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-7.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-8.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-8.html:134 | C2 | 중간 | 같은 언어 href blog/ja/article-1.html의 링크 텍스트 7종류: AIが詩を書く仕組み：技術と感性の出会い / AIが詩を書く原理 / AIが詩を書く原理：技術と感性の出会い / AI詩ジェネレーターの原理と未来 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-8.html:150 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-8.html:150 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-8.html:159 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31言語で詩を書く：AI多言語詩創作の秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-8.html:165 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-8.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/article-9.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: で取り上げたように、AI & Poemは31言語を支援するので多様な外国語の授業に活用できます。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-9.html:88 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-9.html:140 | C2 | 중간 | 같은 언어 href blog/ja/article-7.html의 링크 텍스트 2종류: 31言語で詩を書く：AI多言語詩創作の秘密 / 31言語で詩を書く | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/article-9.html:140 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31言語で詩を書く | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-9.html:151 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 展開1（20分）： | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-9.html:152 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 展開2（20分）： | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-9.html:153 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 展開3（20分）： | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/article-9.html:176 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/ja/article-9.html:176 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ja/article-9.html:191 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-9.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ja/index.html:79 | C2 | 중간 | 같은 언어 href ja/index.html의 링크 텍스트 8종류: AI & Poem / ← トップページに戻る / AIと詩 / AIで詩を生成する → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/index.html:110 | C2 | 중간 | 같은 언어 href blog/ja/article-2.html의 링크 텍스트 5종류: 詩をうまく書く5つのコツ：AIと一緒に創作 / 詩を上手に書く5つのコツ / 詩を上手に書く5つのヒント：AIと共に創る / 感動的なAI詩を作る7つのコツ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/index.html:120 | C2 | 중간 | 같은 언어 href blog/ja/article-3.html의 링크 텍스트 6종류: 有名詩人の作法から学ぶインスピレーション / 有名な詩人の作法から学ぶインスピレーション / 有名詩人たちの作法から学ぶインスピレーション / AIが書いた詩の文学的価値を考える | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/index.html:140 | C2 | 중간 | 같은 언어 href blog/ja/article-5.html의 링크 텍스트 3종류: 感動的な祝辞と手紙、AIで10秒で完成 / 感動的なスピーチと手紙、AIで10秒で完成させる / AIで特別な祝辞と手紙を書く | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/index.html:150 | C2 | 중간 | 같은 언어 href blog/ja/article-6.html의 링크 텍스트 4종류: AI詩と感情の癒し / AI詩と感情の癒し：ライティングセラピーの新たな可能性 / AI詩と感情の癒し：書くセラピーの新しい可能性 / AI詩と感情の癒し：文学療法の新しいツール | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/index.html:161 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31言語で詩を書く：AI多言語詩創作の秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/index.html:165 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AIが31言語で詩を創作する原理と各言語の詩的伝統の違いを探ります。俳句とソネットの区別から多言語詩生成の技術的挑戦まで。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ja/index.html:190 | C2 | 중간 | 같은 언어 href blog/ja/article-10.html의 링크 텍스트 3종류: AIが書いた詩、誰のものか：著作権と倫理の争点 / AIが書いた詩は誰のもの？：著作権と倫理の争点 / AIが書いた詩は誰のもの？ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ja/index.html:203 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:8 | C2 | 중간 | 같은 언어 href blog/ko/index.html의 링크 텍스트 3종류: ← 목록으로 돌아가기 / 블로그 / 목록으로 돌아가기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:8 | C2 | 중간 | 같은 언어 href blog/ko/index.html의 링크 텍스트 3종류: ← 목록으로 돌아가기 / 블로그 / 목록으로 돌아가기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:309 | C2 | 중간 | 같은 언어 href blog/ko/isang-ogamdo.html의 링크 텍스트 3종류: 이상 「오감도」 / 이상 「오감도 시제1호」 전문과 해설: AI 시대에 다시 읽는 낯섦의 시학 / 「오감도」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:309 | C2 | 중간 | 같은 언어 href blog/ko/isang-ogamdo.html의 링크 텍스트 3종류: 이상 「오감도」 / 이상 「오감도 시제1호」 전문과 해설: AI 시대에 다시 읽는 낯섦의 시학 / 「오감도」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:309 | C2 | 중간 | 같은 언어 href blog/ko/jeongjiyong-hyangsu.html의 링크 텍스트 3종류: 정지용 「향수」 / 정지용 「향수」 전문과 해설: AI 시대에 다시 읽는 고향의 그리움 / 정지용의 「향수」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:309 | C2 | 중간 | 같은 언어 href blog/ko/jeongjiyong-hyangsu.html의 링크 텍스트 3종류: 정지용 「향수」 / 정지용 「향수」 전문과 해설: AI 시대에 다시 읽는 고향의 그리움 / 정지용의 「향수」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:309 | C2 | 중간 | 같은 언어 href blog/ko/kimsowol-jindallaekkot.html의 링크 텍스트 3종류: 김소월 「진달래꽃」 / 김소월 「진달래꽃」 전문과 해설: AI 시대에 다시 읽는 이별의 정한 / 김소월의 「진달래꽃」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:309 | C2 | 중간 | 같은 언어 href blog/ko/kimsowol-jindallaekkot.html의 링크 텍스트 3종류: 김소월 「진달래꽃」 / 김소월 「진달래꽃」 전문과 해설: AI 시대에 다시 읽는 이별의 정한 / 김소월의 「진달래꽃」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:347 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:70 | C2 | 중간 | 같은 언어 href blog/ko/index.html의 링크 텍스트 3종류: ← 목록으로 돌아가기 / 블로그 / 목록으로 돌아가기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:172 | C2 | 중간 | 같은 언어 href blog/ko/yoondongju-seosi.html의 링크 텍스트 4종류: 윤동주 「서시」 / 윤동주 「서시」 전문과 해설 / 윤동주 「서시」 전문과 해설: AI 시대에 다시 읽는 부끄러움의 윤리 / 윤동주의 「서시」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:172 | C2 | 중간 | 같은 언어 href blog/ko/yoondongju-seosi.html의 링크 텍스트 4종류: 윤동주 「서시」 / 윤동주 「서시」 전문과 해설 / 윤동주 「서시」 전문과 해설: AI 시대에 다시 읽는 부끄러움의 윤리 / 윤동주의 「서시」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:176 | C2 | 중간 | 같은 언어 href blog/ko/llm-korean-sijo-meter.html의 링크 텍스트 5종류: 한국어 시조의 음보별 서버 검산과 보정 / LLM은 왜 한국어 시조의 율격을 못 맞출까: 토큰화가 음절을 가리는 문제 / 음보별 서버 검산과 보정 / 한국어 시조의 음절 검증과 한계 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:176 | C2 | 중간 | 같은 언어 href blog/ko/llm-korean-sijo-meter.html의 링크 텍스트 5종류: 한국어 시조의 음보별 서버 검산과 보정 / LLM은 왜 한국어 시조의 율격을 못 맞출까: 토큰화가 음절을 가리는 문제 / 음보별 서버 검산과 보정 / 한국어 시조의 음절 검증과 한계 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:176 | C2 | 중간 | 같은 언어 href blog/ko/tts-vs-human-recitation.html의 링크 텍스트 3종류: TTS의 평탄한 운율 / TTS 음성 낭독과 사람의 시 낭독의 차이 — 무엇이 빠지고, 무엇이 더해지는가 / TTS 음성 낭독과 사람의 시 낭독의 차이 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:176 | C2 | 중간 | 같은 언어 href blog/ko/tts-vs-human-recitation.html의 링크 텍스트 3종류: TTS의 평탄한 운율 / TTS 음성 낭독과 사람의 시 낭독의 차이 — 무엇이 빠지고, 무엇이 더해지는가 / TTS 음성 낭독과 사람의 시 낭독의 차이 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:223 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-1.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem은 31개 언어를 지원하기 때문에, 사용자의 언어 설정에 따라 처리 파이프라인이 달라집니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-1.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem이 지원하는 31개 언어 각각에 맞는 음성으로 말입니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-1.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-1.html:120 | C2 | 중간 | 같은 언어 href ko/index.html의 링크 텍스트 6종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:215 | C2 | 중간 | 같은 언어 href blog/ko/article-2.html의 링크 텍스트 4종류: 시를 잘 쓰는 5가지 팁 / 시를 잘 쓰는 5가지 팁: AI와 함께하는 창작 / 감동적인 AI 시를 만드는 7가지 팁 / 감동적인 결혼식 축사 쓰는 법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:335 | C2 | 중간 | 같은 언어 href blog/ko/article-4.html의 링크 텍스트 2종류: AI 시 생성기의 미래: 작가를 대체할까? / AI 시의 미래: 기술과 감성의 만남 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:344 | C2 | 중간 | 같은 언어 href ko/author.html의 링크 텍스트 5종류: 저자 프로필 보기 → / 저자 / 저자 소개 / 저자 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:344 | C2 | 중간 | 같은 언어 href ko/author.html의 링크 텍스트 5종류: 저자 프로필 보기 → / 저자 / 저자 소개 / 저자 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:350 | C2 | 중간 | 같은 언어 href blog/ko/article-3.html의 링크 텍스트 3종류: 유명 시인들의 작법에서 배우는 영감 / 시인처럼 쓰는 법: AI 시대의 창작 기법 / SNS에서 인기 있는 감성 글귀 모음 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:351 | C2 | 중간 | 같은 언어 href blog/ko/article-8.html의 링크 텍스트 2종류: 컴퓨터가 시를 쓰기 시작한 날: AI 시의 역사 / 컴퓨터가 시를 쓰기 시작한 날 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:352 | C2 | 중간 | 같은 언어 href blog/ko/article-10.html의 링크 텍스트 2종류: AI가 쓴 시, 누구의 것인가: 저작권과 윤리의 쟁점 / AI가 쓴 시는 누구의 것인가 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:362 | C2 | 중간 | 같은 언어 href ko/gallery.html의 링크 텍스트 3종류: 갤러리 / 갤러리 페이지 / ← 갤러리로 돌아가기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:363 | C2 | 중간 | 같은 언어 href ko/faq.html의 링크 텍스트 3종류: FAQ / 자주 묻는 질문 / FAQ 전체 보기 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:367 | C2 | 중간 | 같은 언어 href ko/about.html의 링크 텍스트 2종류: 소개 / 서비스 소개 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:370 | C2 | 중간 | 같은 언어 href ko/contact.html의 링크 텍스트 2종류: 문의하기 / 문의 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-1.html:373 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-1.html:373 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-10.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-10.html:232 | C2 | 중간 | 같은 언어 href blog/ko/article-6.html의 링크 텍스트 3종류: AI 시와 감정 치유 / AI 시와 감정 치유: 글쓰기 테라피의 새로운 가능성 / AI 시와 감정 치유: 문학 치료의 새로운 도구 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-10.html:263 | C2 | 중간 | 같은 언어 href blog/ko/article-1.html의 링크 텍스트 4종류: AI가 시를 쓰는 원리: 기술과 감성의 만남 / AI가 시를 쓰는 원리 / AI 시 생성기의 원리와 미래 / AI 시 생성기의 원리와 활용법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-10.html:265 | C2 | 중간 | 같은 언어 href blog/ko/article-9.html의 링크 텍스트 2종류: 교실에서 만난 AI 시인: AI 시 생성기의 교육적 활용 / 교실에서 만난 AI 시인 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-10.html:286 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-10.html:286 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-2.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-2.html:233 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-2.html:233 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-3.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-3.html:218 | C2 | 중간 | 같은 언어 href blog/ko/article-2.html의 링크 텍스트 4종류: 시를 잘 쓰는 5가지 팁 / 시를 잘 쓰는 5가지 팁: AI와 함께하는 창작 / 감동적인 AI 시를 만드는 7가지 팁 / 감동적인 결혼식 축사 쓰는 법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-3.html:219 | C2 | 중간 | 같은 언어 href blog/ko/article-7.html의 링크 텍스트 3종류: 31개 언어로 시를 쓰다: AI 다국어 시 창작의 비밀 / 31개 언어로 시를 쓰다 / 31개 언어로 시 쓰기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-3.html:219 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시를 쓰다: AI 다국어 시 창작의 비밀 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-3.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-3.html:241 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-4.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-4.html:223 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-4.html:223 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-5.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-5.html:207 | C2 | 중간 | 같은 언어 href blog/ko/article-6.html의 링크 텍스트 3종류: AI 시와 감정 치유 / AI 시와 감정 치유: 글쓰기 테라피의 새로운 가능성 / AI 시와 감정 치유: 문학 치료의 새로운 도구 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-5.html:208 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시를 쓰다: AI 다국어 시 창작의 비밀 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-5.html:229 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-5.html:229 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-6.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-6.html:160 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 1980년대 후반부터 시작된 그의 연구에 따르면, 트라우마나 스트레스 경험에 대해 15~20분씩 3~4일 연속으로 글을 쓴 참가자들은 면역 기능 향상, 병원 방문 횟수 감소, 전반적인 심리적 안녕감 증가를 보였습니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-6.html:179 | C2 | 중간 | 같은 언어 href blog/ko/article-1.html의 링크 텍스트 4종류: AI가 시를 쓰는 원리: 기술과 감성의 만남 / AI가 시를 쓰는 원리 / AI 시 생성기의 원리와 미래 / AI 시 생성기의 원리와 활용법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-6.html:239 | C2 | 중간 | 같은 언어 href blog/ko/article-5.html의 링크 텍스트 2종류: 감동적인 축사와 편지, AI로 10초 만에 완성하기 / AI로 특별한 축사와 편지 쓰기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-6.html:261 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-6.html:261 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 같은 '시'라는 장르인데, 언어마다 기대하는 형식과 감성이 이토록 다르다는 것을 깨닫게 된 것이 31개 언어 지원을 결심한 계기였습니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어에 맞춰 이 프롬프트를 최적화하는 작업은 서비스 개발에서 가장 많은 시간과 실험이 필요한 부분이었습니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어 모두에 동일한 품질의 시를 생성하기는 쉽지 않습니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem은 31개 언어 지원을 통해 이 정신을 디지털 시대에 실현하고자 합니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-7.html:8 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시를 쓰다: AI 다국어 시 창작의 비밀 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-7.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-7.html:176 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시를 생성하는 것은 단순한 번역과는 완전히 다른 도전입니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-7.html:245 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Upon the silent lake the moonlight falls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-7.html:246 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: A silver thread through darkness softly spun, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-7.html:247 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: It whispers secrets through the ancient walls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-7.html:248 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Of all the quiet deeds the night has done. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-7.html:308 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-7.html:308 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-8.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어에 대해 각각의 시적 전통을 반영한 맞춤 프롬프트를 설계하고, 콘텐츠 필터링으로 안전성을 확보했습니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-8.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem에서도 31개 언어 각각에 대해 해당 언어의 시적 전통, 운율 체계, 문화적 맥락을 반영한 전용 프롬프트를 설계하고 반복 실험을 통해 최적화했습니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-8.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-8.html:233 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시를 쓰다: AI 다국어 시 창작의 비밀 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-8.html:255 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-8.html:255 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/article-9.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 에서 다루었듯이, AI & Poem은 31개 언어를 지원하므로 다양한 외국어 수업에 활용할 수 있습니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-9.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-9.html:188 | C2 | 중간 | 같은 언어 href blog/ko/article-7.html의 링크 텍스트 3종류: 31개 언어로 시를 쓰다: AI 다국어 시 창작의 비밀 / 31개 언어로 시를 쓰다 / 31개 언어로 시 쓰기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/article-9.html:188 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시를 쓰다 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-9.html:220 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 전개 1 (20분): 개인 창작 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-9.html:227 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 전개 2 (20분): AI 협업 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-9.html:234 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 전개 3 (20분): 공유와 피드백 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/article-9.html:323 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/article-9.html:323 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/case-birthday-bilingual.html:312 | C2 | 중간 | 같은 언어 href blog/ko/ai-poem-prompt-patterns.html의 링크 텍스트 2종류: AI에게 좋은 시를 만들게 하는 5가지 프롬프트 패턴 / 프롬프트 패턴 5가지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/case-birthday-bilingual.html:333 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/case-hwangap-tribute.html:301 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/case-wedding-toast.html:279 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:178 | C2 | 중간 | 같은 언어 href blog/ko/llm-korean-sijo-meter.html의 링크 텍스트 5종류: 한국어 시조의 음보별 서버 검산과 보정 / LLM은 왜 한국어 시조의 율격을 못 맞출까: 토큰화가 음절을 가리는 문제 / 음보별 서버 검산과 보정 / 한국어 시조의 음절 검증과 한계 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:178 | C2 | 중간 | 같은 언어 href blog/ko/llm-korean-sijo-meter.html의 링크 텍스트 5종류: 한국어 시조의 음보별 서버 검산과 보정 / LLM은 왜 한국어 시조의 율격을 못 맞출까: 토큰화가 음절을 가리는 문제 / 음보별 서버 검산과 보정 / 한국어 시조의 음절 검증과 한계 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:178 | C2 | 중간 | 같은 언어 href blog/ko/ai-poetry-simplicity-preference.html의 링크 텍스트 4종류: 단순성 선호 / AI 시의 단순성 선호 / AI 시는 왜 평이한가 — Nature 2024 연구로 본 단순성 선호 가설 / AI 시는 왜 평이한가 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:178 | C2 | 중간 | 같은 언어 href blog/ko/ai-poetry-simplicity-preference.html의 링크 텍스트 4종류: 단순성 선호 / AI 시의 단순성 선호 / AI 시는 왜 평이한가 — Nature 2024 연구로 본 단순성 선호 가설 / AI 시는 왜 평이한가 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:224 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/index.html:158 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시를 쓰다: AI 다국어 시 창작의 비밀 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/index.html:162 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI가 31개 언어로 시를 창작하는 원리와 각 언어의 시적 전통 차이를 탐구합니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/index.html:197 | C2 | 중간 | 같은 언어 href blog/ko/yoondongju-seosi.html의 링크 텍스트 4종류: 윤동주 「서시」 / 윤동주 「서시」 전문과 해설 / 윤동주 「서시」 전문과 해설: AI 시대에 다시 읽는 부끄러움의 윤리 / 윤동주의 「서시」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/index.html:282 | C2 | 중간 | 같은 언어 href blog/ko/sijo-meter-for-ai.html의 링크 텍스트 2종류: 한국어 시조의 율격을 AI에게 맞게 설명하는 방법 / 시조 율격을 AI에게 맞게 설명하는 법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/index.html:304 | C2 | 중간 | 같은 언어 href blog/ko/ai-poetry-simplicity-preference.html의 링크 텍스트 4종류: 단순성 선호 / AI 시의 단순성 선호 / AI 시는 왜 평이한가 — Nature 2024 연구로 본 단순성 선호 가설 / AI 시는 왜 평이한가 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/index.html:387 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ko/index.html:387 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/isang-ogamdo.html:233 | C2 | 중간 | 같은 언어 href blog/ko/jeongjiyong-hyangsu.html의 링크 텍스트 3종류: 정지용 「향수」 / 정지용 「향수」 전문과 해설: AI 시대에 다시 읽는 고향의 그리움 / 정지용의 「향수」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/isang-ogamdo.html:233 | C2 | 중간 | 같은 언어 href blog/ko/kimsowol-jindallaekkot.html의 링크 텍스트 3종류: 김소월 「진달래꽃」 / 김소월 「진달래꽃」 전문과 해설: AI 시대에 다시 읽는 이별의 정한 / 김소월의 「진달래꽃」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/isang-ogamdo.html:233 | C2 | 중간 | 같은 언어 href blog/ko/yoondongju-seosi.html의 링크 텍스트 4종류: 윤동주 「서시」 / 윤동주 「서시」 전문과 해설 / 윤동주 「서시」 전문과 해설: AI 시대에 다시 읽는 부끄러움의 윤리 / 윤동주의 「서시」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/isang-ogamdo.html:285 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/jeongjiyong-hyangsu.html:290 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/kimsowol-jindallaekkot.html:272 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/llm-korean-sijo-meter.html:196 | C2 | 중간 | 같은 언어 href blog/ko/sijo-meter-for-ai.html의 링크 텍스트 2종류: 한국어 시조의 율격을 AI에게 맞게 설명하는 방법 / 시조 율격을 AI에게 맞게 설명하는 법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/llm-korean-sijo-meter.html:234 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/poems-for-tts-reading.html:240 | C2 | 중간 | 같은 언어 href blog/ko/isang-ogamdo.html의 링크 텍스트 3종류: 이상 「오감도」 / 이상 「오감도 시제1호」 전문과 해설: AI 시대에 다시 읽는 낯섦의 시학 / 「오감도」 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/poems-for-tts-reading.html:281 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/poetry-recitation-revival.html:169 | C2 | 중간 | 같은 언어 href blog/ko/ai-poetry-simplicity-preference.html의 링크 텍스트 4종류: 단순성 선호 / AI 시의 단순성 선호 / AI 시는 왜 평이한가 — Nature 2024 연구로 본 단순성 선호 가설 / AI 시는 왜 평이한가 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/poetry-recitation-revival.html:176 | C2 | 중간 | 같은 언어 href blog/ko/tts-vs-human-recitation.html의 링크 텍스트 3종류: TTS의 평탄한 운율 / TTS 음성 낭독과 사람의 시 낭독의 차이 — 무엇이 빠지고, 무엇이 더해지는가 / TTS 음성 낭독과 사람의 시 낭독의 차이 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/poetry-recitation-revival.html:223 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/sijo-meter-for-ai.html:277 | C2 | 중간 | 같은 언어 href blog/ko/llm-korean-sijo-meter.html의 링크 텍스트 5종류: 한국어 시조의 음보별 서버 검산과 보정 / LLM은 왜 한국어 시조의 율격을 못 맞출까: 토큰화가 음절을 가리는 문제 / 음보별 서버 검산과 보정 / 한국어 시조의 음절 검증과 한계 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/sijo-meter-for-ai.html:277 | C2 | 중간 | 같은 언어 href blog/ko/ai-poem-prompt-patterns.html의 링크 텍스트 2종류: AI에게 좋은 시를 만들게 하는 5가지 프롬프트 패턴 / 프롬프트 패턴 5가지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ko/sijo-meter-for-ai.html:315 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/tts-vs-human-recitation.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem의 TTS는 31개 언어로 생성한 시를 빠르게 미리 듣는 기능입니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/tts-vs-human-recitation.html:244 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/wedding-speech-poem-tips.html:191 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 낭독은 1~2분, 12~20행으로 맞춰라 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/wedding-speech-poem-tips.html:194 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 12행에서 20행 사이, 소리 내어 1분 30초를 넘기지 않는 길이가 적당합니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/wedding-speech-poem-tips.html:313 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/ko/yoondongju-seosi.html:153 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 1941년 11월 20일에 쓴 것으로 알려진, 단 아홉 행의 짧은 시입니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/ko/yoondongju-seosi.html:266 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/blog/mn/article-1.html:76 | C2 | 중간 | 같은 언어 href mn/index.html의 링크 텍스트 6종류: AI & Poem / ← Үндсэн хуудас руу буцах / AI ба шүлэг / Гэр | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/mn/article-1.html:76 | C2 | 중간 | 같은 언어 href blog/mn/index.html의 링크 텍스트 3종류: ← Жагсаалт руу буцах / Багана / Блог | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/mn/article-1.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/mn/article-1.html:137 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/mn/article-2.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/mn/article-2.html:140 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/mn/article-3.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/mn/article-3.html:134 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/mn/article-4.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/mn/article-4.html:133 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/mn/article-5.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/mn/article-5.html:133 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/mn/index.html:78 | C2 | 중간 | 같은 언어 href mn/index.html의 링크 텍스트 6종류: AI & Poem / ← Үндсэн хуудас руу буцах / AI ба шүлэг / Гэр | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/mn/index.html:99 | C2 | 중간 | 같은 언어 href blog/mn/article-1.html의 링크 텍스트 3종류: AI шүлэг бичих зарчим: Технологи ба сэтгэл хөдлөлийн уулзалт / Блог / AI шүлэг үүсгэгчийн зарчим ба ирээдүй | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/mn/index.html:111 | C2 | 중간 | 같은 언어 href blog/mn/article-2.html의 링크 텍스트 2종류: Гайхалтай шүлэг бичих 5 зөвлөгөө: AI-тай хамтран бүтээх / Сэтгэл хөдөлгөм хуримын үг хэрхэн бичих вэ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/mn/index.html:124 | C2 | 중간 | 같은 언어 href blog/mn/article-3.html의 링크 텍스트 2종류: Алдартай яруу найрагчдын ур чадвараас авах урам зориг / SNS дээр алдартай сэтгэл хөдлөлийн ишлэлүүдийн цуглуулга | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/mn/index.html:163 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ms/article-1.html:72 | C2 | 중간 | 같은 언어 href ms/index.html의 링크 텍스트 6종류: AI & Puem / AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/ms/index.html의 링크 텍스트 2종류: ← Kembali ke Senarai / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ms/article-1.html:161 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ms/article-1.html:162 | C2 | 중간 | 같은 언어 href ms/privacy.html의 링크 텍스트 2종류: Dasar Privasi / Dasar Pemprosesan Data Peribadi | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/article-1.html:169 | C2 | 중간 | 같은 언어 href ms/terms.html의 링크 텍스트 3종류: Terma dan Syarat / Syarat Perkhidmatan / Syarat Penggunaan | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/article-2.html:72 | C2 | 중간 | 같은 언어 href ms/index.html의 링크 텍스트 6종류: AI & Puem / AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ms/article-2.html:149 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ms/article-3.html:72 | C2 | 중간 | 같은 언어 href ms/index.html의 링크 텍스트 6종류: AI & Puem / AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ms/article-3.html:155 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ms/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ms/article-4.html:139 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ms/article-4.html:140 | C2 | 중간 | 같은 언어 href ms/privacy.html의 링크 텍스트 2종류: Dasar Privasi / Dasar Pemprosesan Data Peribadi | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ms/article-5.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ms/index.html:72 | C2 | 중간 | 같은 언어 href ms/index.html의 링크 텍스트 6종류: AI & Puem / AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/index.html:93 | C2 | 중간 | 같은 언어 href blog/ms/article-1.html의 링크 텍스트 3종류: Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi / Blog / Prinsip dan Masa Depan Penjana Puisi AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/index.html:105 | C2 | 중간 | 같은 언어 href blog/ms/article-2.html의 링크 텍스트 2종류: 5 Tip Menulis Puisi yang Baik: Kreativiti Bersama AI / Cara Menulis Ucapan Perkahwinan yang Menyentuh Hati | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/index.html:117 | C2 | 중간 | 같은 언어 href blog/ms/article-3.html의 링크 텍스트 2종류: Inspirasi dari Cara Penulisan Penyair Terkenal / Koleksi Petikan Emosi Popular di SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ms/index.html:155 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/nl/article-1.html:76 | C2 | 중간 | 같은 언어 href nl/index.html의 링크 텍스트 4종류: AI & Poem / ← Terug naar Home / Home / AI & Gedicht | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/nl/article-1.html:76 | C2 | 중간 | 같은 언어 href blog/nl/index.html의 링크 텍스트 2종류: ← Terug naar lijst / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/nl/article-1.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/nl/article-1.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/nl/article-1.html:103 | C2 | 중간 | 같은 언어 href nl/privacy.html의 링크 텍스트 4종류: Privacy Policy / Privacybeleid / Privacy / privacybeleid | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/nl/article-1.html:109 | C2 | 중간 | 같은 언어 href nl/terms.html의 링크 텍스트 3종류: Terms of Service / Servicevoorwaarden / Voorwaarden | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/nl/article-2.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/nl/article-2.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/nl/article-3.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/nl/article-3.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/nl/article-4.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/nl/article-4.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/nl/article-5.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/nl/article-5.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/nl/index.html:8 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI & Poem Blog | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/nl/index.html:76 | C2 | 중간 | 같은 언어 href nl/index.html의 링크 텍스트 4종류: AI & Poem / ← Terug naar Home / Home / AI & Gedicht | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/nl/index.html:98 | C2 | 중간 | 같은 언어 href blog/nl/article-1.html의 링크 텍스트 3종류: Het principe van AI die poëzie schrijft: De ontmoeting van technologie en emotie / Blog / Principes en Toekomst van AI Gedicht Generatoren | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/nl/index.html:108 | C2 | 중간 | 같은 언어 href blog/nl/article-2.html의 링크 텍스트 2종류: 5 tips voor het schrijven van geweldige poëzie / Hoe schrijft u ontroerende bruiloftstoespraken | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/nl/index.html:118 | C2 | 중간 | 같은 언어 href blog/nl/article-3.html의 링크 텍스트 2종류: Inspiratie uit het ambacht van beroemde dichters / Verzameling van Emotionele Citaten Populair op SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/nl/index.html:151 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/no/article-1.html:76 | C2 | 중간 | 같은 언어 href no/index.html의 링크 텍스트 4종류: AI & Poem / ← Tilbake til forsiden / Hjem / AI & Dikt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/no/article-1.html:76 | C2 | 중간 | 같은 언어 href blog/no/index.html의 링크 텍스트 2종류: ← Tilbake til listen / Blogg | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/no/article-1.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/no/article-1.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/no/article-1.html:103 | C2 | 중간 | 같은 언어 href no/privacy.html의 링크 텍스트 5종류: Privacy Policy / Personvernerklæring / Personvernregler / Personvern | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/no/article-1.html:109 | C2 | 중간 | 같은 언어 href no/terms.html의 링크 텍스트 4종류: Terms of Service / Vilkår for bruk / Tjenestevilkår / Vilkår | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/no/article-2.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/no/article-2.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/no/article-3.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/no/article-3.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/no/article-4.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/no/article-4.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/no/article-5.html:94 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/no/article-5.html:102 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/no/index.html:76 | C2 | 중간 | 같은 언어 href no/index.html의 링크 텍스트 4종류: AI & Poem / ← Tilbake til forsiden / Hjem / AI & Dikt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/no/index.html:98 | C2 | 중간 | 같은 언어 href blog/no/article-1.html의 링크 텍스트 3종류: Prinsippet bak AI-poesi: Møtet mellom teknologi og følelser / Blogg / Prinsipper og Fremtid for AI Diktgeneratorer | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/no/index.html:108 | C2 | 중간 | 같은 언어 href blog/no/article-2.html의 링크 텍스트 2종류: 5 tips for å skrive gode dikt: Skaping med AI / Hvordan skrive rørende bryllupstaler | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/no/index.html:118 | C2 | 중간 | 같은 언어 href blog/no/article-3.html의 링크 텍스트 2종류: Inspirasjon fra kjente dikteres håndverk / Samling av Emosjonelle Sitater Populære på SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/no/index.html:151 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pl/article-1.html:72 | C2 | 중간 | 같은 언어 href pl/index.html의 링크 텍스트 6종류: AI & Poem / ← Wróć do strony głównej / AI i wiersz / Dom | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pl/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/pl/index.html의 링크 텍스트 4종류: ← Wróć do listy / ← Powrót do listy / Bloga / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pl/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pl/article-1.html:158 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pl/article-1.html:166 | C2 | 중간 | 같은 언어 href pl/terms.html의 링크 텍스트 3종류: Warunki korzystania / Warunki świadczenia usług / Regulamin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pl/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pl/article-2.html:149 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pl/article-3.html:72 | C2 | 중간 | 같은 언어 href blog/pl/index.html의 링크 텍스트 4종류: ← Wróć do listy / ← Powrót do listy / Bloga / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pl/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pl/article-3.html:153 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pl/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pl/article-4.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pl/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pl/article-5.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pl/index.html:72 | C2 | 중간 | 같은 언어 href pl/index.html의 링크 텍스트 6종류: AI & Poem / ← Wróć do strony głównej / AI i wiersz / Dom | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pl/index.html:93 | C2 | 중간 | 같은 언어 href blog/pl/article-1.html의 링크 텍스트 3종류: Jak AI pisze wiersze: Spotkanie technologii i emocji / blogu / Zasady i przyszłość generatorów wierszy AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pl/index.html:104 | C2 | 중간 | 같은 언어 href blog/pl/article-2.html의 링크 텍스트 2종류: 5 wskazówek do pisania dobrych wierszy: Twórczość z AI / Jak pisać wzruszające przemówienia ślubne | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pl/index.html:117 | C2 | 중간 | 같은 언어 href blog/pl/article-3.html의 링크 텍스트 2종류: Inspiracje z warsztatu znanych poetów / Zbiór emocjonalnych cytatów popularnych w mediach społecznościowych | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pl/index.html:155 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pt/article-1.html:72 | C2 | 중간 | 같은 언어 href pt/index.html의 링크 텍스트 6종류: AI & Poem / ← Voltar para a Página Principal / IA e poema / Lar | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/pt/index.html의 링크 텍스트 4종류: ← Voltar à lista / ← Voltar para a lista / Blogue / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pt/article-1.html:162 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pt/article-1.html:163 | C2 | 중간 | 같은 언어 href pt/privacy.html의 링크 텍스트 3종류: Política de Privacidade / Política de privacidade / política de Privacidade | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/article-1.html:170 | C2 | 중간 | 같은 언어 href pt/terms.html의 링크 텍스트 4종류: Termos de Uso / Termos de uso / Termos de Serviço / Termos de utilização | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/article-2.html:72 | C2 | 중간 | 같은 언어 href blog/pt/index.html의 링크 텍스트 4종류: ← Voltar à lista / ← Voltar para a lista / Blogue / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pt/article-2.html:147 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pt/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pt/article-3.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pt/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pt/article-4.html:137 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pt/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/pt/article-5.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/pt/article-5.html:137 | C2 | 중간 | 같은 언어 href pt/privacy.html의 링크 텍스트 3종류: Política de Privacidade / Política de privacidade / política de Privacidade | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/article-5.html:144 | C2 | 중간 | 같은 언어 href pt/terms.html의 링크 텍스트 4종류: Termos de Uso / Termos de uso / Termos de Serviço / Termos de utilização | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/index.html:72 | C2 | 중간 | 같은 언어 href pt/index.html의 링크 텍스트 6종류: AI & Poem / ← Voltar para a Página Principal / IA e poema / Lar | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/index.html:93 | C2 | 중간 | 같은 언어 href blog/pt/article-1.html의 링크 텍스트 3종류: O Princípio da Escrita de Poesia pela IA: O Encontro da Tecnologia e da Emoção / blog / Princípios e Futuro dos Geradores de Poemas AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/index.html:105 | C2 | 중간 | 같은 언어 href blog/pt/article-2.html의 링크 텍스트 2종류: 5 Dicas para Escrever Boas Poesias: Criando com a IA / Como escrever discursos de casamento tocantes | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/index.html:117 | C2 | 중간 | 같은 언어 href blog/pt/article-3.html의 링크 텍스트 2종류: Inspiração Aprendida com os Métodos de Poetas Famosos / Coleção de citações emocionais populares nas redes sociais | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/pt/index.html:156 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ru/article-1.html:72 | C2 | 중간 | 같은 언어 href ru/index.html의 링크 텍스트 6종류: AI & Poem / ← Вернуться на главную / ИИ и поэма / Дом | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ru/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/ru/index.html의 링크 텍스트 2종류: ← Вернуться к списку / Блог | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ru/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ru/article-1.html:160 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ru/article-1.html:161 | C2 | 중간 | 같은 언어 href ru/privacy.html의 링크 텍스트 2종류: Политика конфиденциальности / политика конфиденциальности | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ru/article-1.html:168 | C2 | 중간 | 같은 언어 href ru/terms.html의 링크 텍스트 2종류: Условия использования / Условия предоставления услуг | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ru/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ru/article-2.html:149 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ru/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ru/article-3.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ru/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ru/article-4.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ru/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/ru/article-5.html:137 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/ru/index.html:72 | C2 | 중간 | 같은 언어 href ru/index.html의 링크 텍스트 6종류: AI & Poem / ← Вернуться на главную / ИИ и поэма / Дом | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ru/index.html:93 | C2 | 중간 | 같은 언어 href blog/ru/article-1.html의 링크 텍스트 3종류: Принципы написания стихов AI: встреча технологий и эмоций / блоге / Принципы и будущее генераторов стихов ИИ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ru/index.html:105 | C2 | 중간 | 같은 언어 href blog/ru/article-2.html의 링크 텍스트 2종류: 5 советов по написанию хороших стихов: творчество с AI / Как написать трогательную свадебную речь | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ru/index.html:118 | C2 | 중간 | 같은 언어 href blog/ru/article-3.html의 링크 텍스트 2종류: Вдохновение из методов известных поэтов / Коллекция эмоциональных цитат, популярных в социальных сетях | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/ru/index.html:156 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sv/article-1.html:72 | C2 | 중간 | 같은 언어 href sv/index.html의 링크 텍스트 5종류: AI & Poem / ← Återgå till huvudsidan / AI & dikt / Hem | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sv/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/sv/index.html의 링크 텍스트 3종류: ← Tillbaka till listan / ← Återgå till listan / Blogg | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sv/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sv/article-1.html:158 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sv/article-1.html:159 | C2 | 중간 | 같은 언어 href sv/privacy.html의 링크 텍스트 3종류: Integritetspolicy / Sekretesspolicy / integritetspolicy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sv/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sv/article-2.html:146 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sv/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sv/article-3.html:153 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sv/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sv/article-4.html:140 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sv/article-5.html:72 | C2 | 중간 | 같은 언어 href blog/sv/index.html의 링크 텍스트 3종류: ← Tillbaka till listan / ← Återgå till listan / Blogg | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sv/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sv/article-5.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sv/index.html:72 | C2 | 중간 | 같은 언어 href sv/index.html의 링크 텍스트 5종류: AI & Poem / ← Återgå till huvudsidan / AI & dikt / Hem | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sv/index.html:93 | C2 | 중간 | 같은 언어 href blog/sv/article-1.html의 링크 텍스트 3종류: Principerna bakom AI:s skrivande av poesi: Mötet mellan teknik och känsla / Blogg / Principer och framtid för AI-diktgeneratorer | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sv/index.html:105 | C2 | 중간 | 같은 언어 href blog/sv/article-2.html의 링크 텍스트 2종류: 5 tips för att skriva bra poesi: Skapande med AI / Hur man skriver rörande bröllopstal | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sv/index.html:117 | C2 | 중간 | 같은 언어 href blog/sv/article-3.html의 링크 텍스트 2종류: Inspiration från kända poeters skrivmetoder / Samling av känslomässiga citat populära på sociala medier | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sv/index.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sw/article-1.html:76 | C2 | 중간 | 같은 언어 href sw/index.html의 링크 텍스트 5종류: AI & Poem / ← Rudi kwa Kuu / Ai & shairi / Nyumbani | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sw/article-1.html:76 | C2 | 중간 | 같은 언어 href blog/sw/index.html의 링크 텍스트 3종류: ← Rudi kwenye Orodha / Blogi / Blogu | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sw/article-1.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sw/article-1.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sw/article-1.html:137 | C2 | 중간 | 같은 언어 href sw/privacy.html의 링크 텍스트 3종류: Sera ya Faragha / Sera ya faragha / Sera yetu ya Faragha | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sw/article-2.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sw/article-2.html:140 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sw/article-3.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sw/article-3.html:134 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sw/article-4.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sw/article-4.html:134 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sw/article-5.html:95 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/sw/article-5.html:132 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/sw/index.html:78 | C2 | 중간 | 같은 언어 href sw/index.html의 링크 텍스트 5종류: AI & Poem / ← Rudi kwa Kuu / Ai & shairi / Nyumbani | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sw/index.html:99 | C2 | 중간 | 같은 언어 href blog/sw/article-1.html의 링크 텍스트 3종류: Kanuni ya AI Kuandika Mashairi: Mkutano wa Teknolojia na Hisia / Blogu / Kanuni na Mustakabali wa Jenereta za Mashairi ya AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sw/index.html:111 | C2 | 중간 | 같은 언어 href blog/sw/article-2.html의 링크 텍스트 2종류: Vidokezo 5 vya Kuandika Mashairi Bora: Kuunda na AI / Jinsi ya Kuandika Hotuba za Harusi Zinazogusa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sw/index.html:122 | C2 | 중간 | 같은 언어 href blog/sw/article-3.html의 링크 텍스트 2종류: Msukumo kutoka kwa Ufundi wa Washairi Maarufu / Mkusanyiko wa Nukuu za Hisia Maarufu kwenye SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/sw/index.html:160 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/th/article-1.html:72 | C2 | 중간 | 같은 언어 href th/index.html의 링크 텍스트 6종류: AI & Poem / ← กลับสู่หน้าหลัก / AI และบทกวี / บ้าน | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/th/index.html의 링크 텍스트 3종류: ← กลับไปที่รายการ / ← กลับไปยังรายการ / บล็อก | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/th/article-1.html:157 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/th/article-1.html:165 | C2 | 중간 | 같은 언어 href th/terms.html의 링크 텍스트 5종류: ข้อกำหนดและเงื่อนไข / ข้อกำหนดในการให้บริการ / ข้อกำหนดการใช้งาน / ข้อกำหนดการใช้บริการ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/article-2.html:72 | C2 | 중간 | 같은 언어 href blog/th/index.html의 링크 텍스트 3종류: ← กลับไปที่รายการ / ← กลับไปยังรายการ / บล็อก | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/th/article-2.html:145 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/th/article-2.html:153 | C2 | 중간 | 같은 언어 href th/terms.html의 링크 텍스트 5종류: ข้อกำหนดและเงื่อนไข / ข้อกำหนดในการให้บริการ / ข้อกำหนดการใช้งาน / ข้อกำหนดการใช้บริการ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/th/article-3.html:153 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/th/article-3.html:161 | C2 | 중간 | 같은 언어 href th/terms.html의 링크 텍스트 5종류: ข้อกำหนดและเงื่อนไข / ข้อกำหนดในการให้บริการ / ข้อกำหนดการใช้งาน / ข้อกำหนดการใช้บริการ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/th/article-4.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/th/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/th/article-5.html:135 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/th/index.html:72 | C2 | 중간 | 같은 언어 href th/index.html의 링크 텍스트 6종류: AI & Poem / ← กลับสู่หน้าหลัก / AI และบทกวี / บ้าน | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/index.html:93 | C2 | 중간 | 같은 언어 href blog/th/article-1.html의 링크 텍스트 3종류: หลักการที่ AI เขียนบทกวี: การพบกันของเทคโนโลยีและอารมณ์ / บล็อก / หลักการและอนาคตของเครื่องกำเนิดบทกวี AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/index.html:105 | C2 | 중간 | 같은 언어 href blog/th/article-2.html의 링크 텍스트 2종류: 5 เคล็ดลับในการเขียนบทกวีที่ดี: การสร้างสรรค์ร่วมกับ AI / วิธีเขียนสุนทรพจน์งานแต่งงานที่น่าประทับใจ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/index.html:118 | C2 | 중간 | 같은 언어 href blog/th/article-3.html의 링크 텍스트 2종류: แรงบันดาลใจจากวิธีการเขียนของกวีชื่อดัง / รวมคำคมโดนใจยอดนิยมบน SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/th/index.html:155 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/tr/article-1.html:72 | C2 | 중간 | 같은 언어 href tr/index.html의 링크 텍스트 6종류: AI & Poem / ← Ana Sayfaya Dön / Yapay Zeka ve Şiir / Ev | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/tr/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/tr/index.html의 링크 텍스트 3종류: ← Listeye geri dön / ← Listeye Geri Dön / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/tr/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/tr/article-1.html:160 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/tr/article-1.html:161 | C2 | 중간 | 같은 언어 href tr/privacy.html의 링크 텍스트 3종류: Gizlilik Politikası / Gizlilik politikası / Gizlilik Politikamız | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/tr/article-1.html:168 | C2 | 중간 | 같은 언어 href tr/terms.html의 링크 텍스트 3종류: Kullanım Şartları / Hizmet Şartları / Kullanım şartları | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/tr/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/tr/article-2.html:147 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/tr/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/tr/article-3.html:155 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/tr/article-4.html:72 | C2 | 중간 | 같은 언어 href blog/tr/index.html의 링크 텍스트 3종류: ← Listeye geri dön / ← Listeye Geri Dön / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/tr/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/tr/article-4.html:138 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/tr/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/tr/article-5.html:136 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/tr/index.html:1 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI & Poem Blog | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/tr/index.html:72 | C2 | 중간 | 같은 언어 href tr/index.html의 링크 텍스트 6종류: AI & Poem / ← Ana Sayfaya Dön / Yapay Zeka ve Şiir / Ev | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/tr/index.html:93 | C2 | 중간 | 같은 언어 href blog/tr/article-1.html의 링크 텍스트 3종류: Yapay Zeka Şiir Yazma Prensibi: Teknoloji ve Duyguların Buluşması / Blog / Yapay Zeka Şiir Oluşturucularının İlkeleri ve Geleceği | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/tr/index.html:105 | C2 | 중간 | 같은 언어 href blog/tr/article-2.html의 링크 텍스트 2종류: İyi Şiir Yazmanın 5 İpucu: AI ile Yaratıcılık / Dokunaklı Düğün Konuşmaları Nasıl Yazılır | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/tr/index.html:116 | C2 | 중간 | 같은 언어 href blog/tr/article-3.html의 링크 텍스트 2종류: Ünlü Şairlerin Yazım Tarzlarından İlham Almak / Sosyal Medyada Popüler Duygusal Sözler Koleksiyonu | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/tr/index.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/uk/article-1.html:72 | C2 | 중간 | 같은 언어 href uk/index.html의 링크 텍스트 6종류: AI & Poem / ← Повернутися на головну / ШІ та вірш / додому | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/uk/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/uk/index.html의 링크 텍스트 2종류: ← Повернутися до списку / Блог | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/uk/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/uk/article-1.html:158 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/uk/article-1.html:166 | C2 | 중간 | 같은 언어 href uk/terms.html의 링크 텍스트 3종류: Умови використання / Умови обслуговування / Умови користування | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/uk/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/uk/article-2.html:145 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/uk/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/uk/article-3.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/uk/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/uk/article-4.html:137 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/uk/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/uk/article-5.html:135 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/uk/index.html:72 | C2 | 중간 | 같은 언어 href uk/index.html의 링크 텍스트 6종류: AI & Poem / ← Повернутися на головну / ШІ та вірш / додому | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/uk/index.html:93 | C2 | 중간 | 같은 언어 href blog/uk/article-1.html의 링크 텍스트 3종류: Принципи написання віршів AI: зустріч технології та емоцій / Блог / Принципи та майбутнє генераторів віршів ШІ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/uk/index.html:105 | C2 | 중간 | 같은 언어 href blog/uk/article-2.html의 링크 텍스트 2종류: 5 порад для написання віршів: творчість з AI / Як написати зворушливу весільну промову | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/uk/index.html:117 | C2 | 중간 | 같은 언어 href blog/uk/article-3.html의 링크 텍스트 2종류: Натхнення з методів відомих поетів / Колекція емоційних цитат, популярних у соціальних мережах | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/uk/index.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/vi/article-1.html:72 | C2 | 중간 | 같은 언어 href vi/index.html의 링크 텍스트 4종류: AI & Poem / ← Quay lại trang chính / AI & Thơ / Trang chủ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/vi/article-1.html:72 | C2 | 중간 | 같은 언어 href blog/vi/index.html의 링크 텍스트 2종류: ← Quay lại danh sách / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/vi/article-1.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/vi/article-1.html:158 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/vi/article-1.html:159 | C2 | 중간 | 같은 언어 href vi/privacy.html의 링크 텍스트 3종류: Chính sách bảo mật thông tin / Chính sách bảo mật / Chính sách quyền riêng tư | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/vi/article-1.html:166 | C2 | 중간 | 같은 언어 href vi/terms.html의 링크 텍스트 2종류: Điều khoản sử dụng / Điều khoản dịch vụ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/vi/article-2.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/vi/article-2.html:146 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/vi/article-2.html:147 | C2 | 중간 | 같은 언어 href vi/privacy.html의 링크 텍스트 3종류: Chính sách bảo mật thông tin / Chính sách bảo mật / Chính sách quyền riêng tư | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/vi/article-3.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/vi/article-3.html:155 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/vi/article-4.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/vi/article-4.html:137 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/vi/article-5.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/vi/article-5.html:134 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/vi/index.html:72 | C2 | 중간 | 같은 언어 href vi/index.html의 링크 텍스트 4종류: AI & Poem / ← Quay lại trang chính / AI & Thơ / Trang chủ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/vi/index.html:93 | C2 | 중간 | 같은 언어 href blog/vi/article-1.html의 링크 텍스트 3종류: Nguyên lý AI viết thơ: Gặp gỡ giữa công nghệ và cảm xúc / Blog / Nguyên tắc và Tương lai của Trình tạo thơ AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/vi/index.html:105 | C2 | 중간 | 같은 언어 href blog/vi/article-2.html의 링크 텍스트 2종류: 5 mẹo để viết thơ hay: Sáng tạo cùng AI / Cách viết bài phát biểu đám cưới cảm động | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/vi/index.html:116 | C2 | 중간 | 같은 언어 href blog/vi/article-3.html의 링크 텍스트 2종류: Cảm hứng từ cách viết của các nhà thơ nổi tiếng / Bộ sưu tập những câu trích dẫn cảm xúc phổ biến trên mạng xã hội | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/vi/index.html:154 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-1.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-1.html:117 | C2 | 중간 | 같은 언어 href zh/index.html의 링크 텍스트 8종류: AI & Poem / ← 返回主页 / 人工智能与诗歌 / 生成 AI 诗歌 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-1.html:117 | C2 | 중간 | 같은 언어 href blog/zh/index.html의 링크 텍스트 2종류: ← 返回列表 / 博客 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-1.html:132 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 作者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-1.html:215 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-1.html:215 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-1.html:217 | C2 | 중간 | 같은 언어 href zh/author.html의 링크 텍스트 4종류: 查看作者简介 → / 关于作者 / 了解更多关于作者 → / 作者介绍 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-1.html:223 | C2 | 중간 | 같은 언어 href blog/zh/article-3.html의 링크 텍스트 5종류: 从著名诗人的创作方法中汲取灵感 / 从著名诗人的写作方法中汲取灵感 / 从著名诗人的创作中汲取灵感 / AI诗歌在教育中的应用 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-1.html:224 | C2 | 중간 | 같은 언어 href blog/zh/article-8.html의 링크 텍스트 2종류: 计算机开始写诗的那一天：AI诗歌的历史 / 计算机开始写诗的那一天 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-1.html:225 | C2 | 중간 | 같은 언어 href blog/zh/article-10.html의 링크 텍스트 3종류: AI写的诗，属于谁：版权与伦理的争议 / AI写的诗属于谁？：版权与伦理的争议 / AI写的诗属于谁？ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-1.html:232 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-1.html:240 | C2 | 중간 | 같은 언어 href zh/terms.html의 링크 텍스트 2종류: 服务条款 / 使用条款 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-10.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-10.html:137 | C2 | 중간 | 같은 언어 href blog/zh/article-4.html의 링크 텍스트 2종류: AI诗歌生成器的未来：会取代作家吗？ / AI诗歌的版权与伦理问题 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-10.html:149 | C2 | 중간 | 같은 언어 href blog/zh/article-6.html의 링크 텍스트 4종류: AI诗歌与情感疗愈 / AI诗歌与情感治愈：写作疗法的新可能性 / AI诗歌与情感疗愈：书写疗法的新可能 / AI诗歌与情感治愈：文学疗愈的新工具 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-10.html:160 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-10.html:160 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-10.html:168 | C2 | 중간 | 같은 언어 href blog/zh/article-1.html의 링크 텍스트 8종류: AI如何写诗：技术与感性的相遇 / AI写诗的原理 / AI写诗的原理：技术与感性的相遇 / AI写诗的原理：技术与情感的结合 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-10.html:170 | C2 | 중간 | 같은 언어 href blog/zh/article-9.html의 링크 텍스트 3종류: 教室里的AI诗人：AI诗歌生成器的教育应用 / 课堂上遇见的AI诗人：AI诗歌生成器的教育应用 / 课堂上遇见的AI诗人 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-10.html:175 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-10.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-10.html:178 | C2 | 중간 | 같은 언어 href zh/terms.html의 링크 텍스트 2종류: 服务条款 / 使用条款 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-2.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-2.html:132 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 作者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-2.html:202 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-2.html:202 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-2.html:219 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-3.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-3.html:132 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 作者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-3.html:205 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-3.html:205 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-3.html:213 | C2 | 중간 | 같은 언어 href blog/zh/article-2.html의 링크 텍스트 5종류: 写好诗的5个技巧：与AI一起创作 / 写好诗的5个技巧 / 写好诗的五个技巧：与AI一起创作 / 创作感人AI诗歌的7个技巧 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-3.html:214 | C2 | 중간 | 같은 언어 href blog/zh/article-7.html의 링크 텍스트 2종류: 用31种语言写诗：AI多语言诗歌创作的秘密 / 用31种语言写诗 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-3.html:214 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 用31种语言写诗：AI多语言诗歌创作的秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-3.html:222 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-4.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-4.html:132 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 作者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-4.html:185 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-4.html:185 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-4.html:202 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-5.html:89 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-5.html:132 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 作者: Ryu Jae-kuk（류재국） | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-5.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-5.html:190 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-5.html:199 | C2 | 중간 | 같은 언어 href blog/zh/article-6.html의 링크 텍스트 4종류: AI诗歌与情感疗愈 / AI诗歌与情感治愈：写作疗法的新可能性 / AI诗歌与情感疗愈：书写疗法的新可能 / AI诗歌与情感治愈：文学疗愈的新工具 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-5.html:200 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 用31种语言写诗：AI多语言诗歌创作的秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-5.html:207 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-6.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-6.html:123 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 教授的研究系统验证。从1980年代后期开始的研究表明，连续3-4天每天写15-20分钟关于创伤或压力经历的参与者，表现出免疫功能改善、就医次数减少和整体心理幸福感提升。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-6.html:129 | C2 | 중간 | 같은 언어 href blog/zh/article-1.html의 링크 텍스트 8종류: AI如何写诗：技术与感性的相遇 / AI写诗的原理 / AI写诗的原理：技术与感性的相遇 / AI写诗的原理：技术与情感的结合 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-6.html:140 | C2 | 중간 | 같은 언어 href blog/zh/article-2.html의 링크 텍스트 5종류: 写好诗的5个技巧：与AI一起创作 / 写好诗的5个技巧 / 写好诗的五个技巧：与AI一起创作 / 创作感人AI诗歌的7个技巧 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-6.html:151 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-6.html:151 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-6.html:160 | C2 | 중간 | 같은 언어 href blog/zh/article-5.html의 링크 텍스트 3종류: 感人的祝词和信件，AI 10秒完成 / 感人的祝词和信件，AI10秒完成 / 用AI撰写特别的祝词与书信 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-6.html:166 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-6.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 最初创建AI & Poem时，我以为只要一个韩语诗歌生成器就够了。然而在运营过程中，我惊讶地发现来自世界各地不同国家的访问流量。日本用户要求俳句，法国用户期待亚历山大体诗歌，西班牙语用户则希望得到巴勃罗·聂鲁达风格的热情诗歌。同样是"诗"这个体裁，不同语言对形式和感性的期待竟如此不同——这个发现促使我决定支持31种语言。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 在AI & Poem中，我们通过为每种语言设计定制提示词来进一步精确化。不是简单地"写一首诗"，而是在提示词中融入符合该语言诗歌传统和美学期望的指引。为31种语言分别优化提示词是服务开发中最耗时、最需要反复实验的部分。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-7.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: ，正是因为诗歌是保存和庆祝语言与文化多样性的最有力的艺术形式。AI & Poem通过支持31种语言，致力于在数字时代实现这一精神。无论使用何种语言，您的情感和思想都值得化为诗歌。从熟悉的母语开始，偶尔也不妨探索陌生语言的诗意世界吧。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-7.html:7 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 用31种语言写诗：AI多语言诗歌创作的秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-7.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-7.html:128 | C2 | 중간 | 같은 언어 href blog/zh/article-3.html의 링크 텍스트 5종류: 从著名诗人的创作方法中汲取灵感 / 从著名诗人的写作方法中汲取灵感 / 从著名诗人的创作中汲取灵感 / AI诗歌在教育中的应用 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-7.html:128 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 用31种语言生成诗歌与简单的翻译完全不同。翻译诗歌会丢失原作的韵律和节奏。正如 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 창가에 기대어 보는 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 달이 흘린 말들이 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 마루 위에 고여 있다 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 손대면 흩어질 것 같아 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 숨을 멈추고 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-7.html:141 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 그 고요에 잠긴다 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-7.html:152 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Upon the silent lake the moonlight falls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-7.html:153 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: A silver thread through darkness softly spun, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-7.html:154 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: It whispers secrets through the ancient walls, | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-7.html:155 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Of all the quiet deeds the night has done. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-7.html:167 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-7.html:167 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-7.html:182 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-7.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-8.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-8.html:128 | C2 | 중간 | 같은 언어 href blog/zh/article-1.html의 링크 텍스트 8종류: AI如何写诗：技术与感性的相遇 / AI写诗的原理 / AI写诗的原理：技术与感性的相遇 / AI写诗的原理：技术与情感的结合 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-8.html:144 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-8.html:144 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-8.html:153 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 用31种语言写诗：AI多语言诗歌创作的秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-8.html:159 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-8.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/article-9.html:1 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 中所介绍的，AI & Poem支持31种语言，可以在多种外语课堂中加以利用。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-9.html:82 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-9.html:134 | C2 | 중간 | 같은 언어 href blog/zh/article-7.html의 링크 텍스트 2종류: 用31种语言写诗：AI多语言诗歌创作的秘密 / 用31种语言写诗 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/article-9.html:134 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 用31种语言写诗 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-9.html:145 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 展开1（20分钟）： | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-9.html:146 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 展开2（20分钟）： | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-9.html:147 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 展开3（20分钟）： | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/article-9.html:170 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/blog/zh/article-9.html:170 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/blog/zh/article-9.html:185 | A5 | 중간 | A5 푸터 구조 불일치: blog/article-9.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/blog/zh/index.html:73 | C2 | 중간 | 같은 언어 href zh/index.html의 링크 텍스트 8종류: AI & Poem / ← 返回主页 / 人工智能与诗歌 / 生成 AI 诗歌 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/index.html:94 | C2 | 중간 | 같은 언어 href blog/zh/article-1.html의 링크 텍스트 8종류: AI如何写诗：技术与感性的相遇 / AI写诗的原理 / AI写诗的原理：技术与感性的相遇 / AI写诗的原理：技术与情感的结合 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/index.html:104 | C2 | 중간 | 같은 언어 href blog/zh/article-2.html의 링크 텍스트 5종류: 写好诗的5个技巧：与AI一起创作 / 写好诗的5个技巧 / 写好诗的五个技巧：与AI一起创作 / 创作感人AI诗歌的7个技巧 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/index.html:114 | C2 | 중간 | 같은 언어 href blog/zh/article-3.html의 링크 텍스트 5종류: 从著名诗人的创作方法中汲取灵感 / 从著名诗人的写作方法中汲取灵感 / 从著名诗人的创作中汲取灵感 / AI诗歌在教育中的应用 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/index.html:134 | C2 | 중간 | 같은 언어 href blog/zh/article-5.html의 링크 텍스트 3종류: 感人的祝词和信件，AI 10秒完成 / 感人的祝词和信件，AI10秒完成 / 用AI撰写特别的祝词与书信 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/index.html:144 | C2 | 중간 | 같은 언어 href blog/zh/article-6.html의 링크 텍스트 4종류: AI诗歌与情感疗愈 / AI诗歌与情感治愈：写作疗法的新可能性 / AI诗歌与情感疗愈：书写疗法的新可能 / AI诗歌与情感治愈：文学疗愈的新工具 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/index.html:155 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 用31种语言写诗：AI多语言诗歌创作的秘密 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/index.html:159 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 探索AI如何用31种语言创作诗歌，以及各语言诗歌传统的差异。从俳句与十四行诗的区别到多语言诗歌生成的技术挑战。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/blog/zh/index.html:174 | C2 | 중간 | 같은 언어 href blog/zh/article-9.html의 링크 텍스트 3종류: 教室里的AI诗人：AI诗歌生成器的教育应用 / 课堂上遇见的AI诗人：AI诗歌生成器的教育应用 / 课堂上遇见的AI诗人 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/index.html:184 | C2 | 중간 | 같은 언어 href blog/zh/article-10.html의 링크 텍스트 3종류: AI写的诗，属于谁：版权与伦理的争议 / AI写的诗属于谁？：版权与伦理的争议 / AI写的诗属于谁？ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/blog/zh/index.html:197 | A5 | 중간 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/bn/about.html:65 | C2 | 중간 | 같은 언어 href bn/index.html의 링크 텍스트 6종류: AI & Poem / ← প্রধান পৃষ্ঠায় ফিরে যান / এআই এবং কবিতা / বাড়ি | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/about.html:65 | C2 | 중간 | 같은 언어 href bn/index.html의 링크 텍스트 6종류: AI & Poem / ← প্রধান পৃষ্ঠায় ফিরে যান / এআই এবং কবিতা / বাড়ি | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/about.html:72 | C2 | 중간 | 같은 언어 href blog/bn/index.html의 링크 텍스트 2종류: ← তালিকায় ফিরে যান / ব্লগ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: আমরা কোরিয়ান, ইংরেজি, জাপানি, চাইনিজ এবং ফ্রেঞ্চ সহ 31টি ভাষা সমর্থন করি, যা বিশ্বব্যাপী ব্যবহারকারীদের তাদের স্থানীয় ভাষায় কবিতা উপভোগ করতে দেয়। | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/bn/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/bn/about.html:115 | C2 | 중간 | 같은 언어 href bn/terms.html의 링크 텍스트 5종류: শর্তাবলী / ব্যবহার শর্তাবলী / পরিষেবার শর্তাবলী / সেবার শর্তাবলী | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/author.html:65 | C2 | 중간 | 같은 언어 href bn/index.html의 링크 텍스트 6종류: AI & Poem / ← প্রধান পৃষ্ঠায় ফিরে যান / এআই এবং কবিতা / বাড়ি | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/author.html:65 | C2 | 중간 | 같은 언어 href bn/index.html의 링크 텍스트 6종류: AI & Poem / ← প্রধান পৃষ্ঠায় ফিরে যান / এআই এবং কবিতা / বাড়ি | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/bn/author.html:95 | C2 | 중간 | 같은 언어 href bn/terms.html의 링크 텍스트 5종류: শর্তাবলী / ব্যবহার শর্তাবলী / পরিষেবার শর্তাবলী / সেবার শর্তাবলী | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/bn/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/bn/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/bn/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/bn/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/bn/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/bn/index.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/index.html:217 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/bn/index.html:234 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/bn/index.html:235 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/bn/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/index.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/bn/index.html:282 | C2 | 중간 | 같은 언어 href blog/bn/article-1.html의 링크 텍스트 3종류: AI কিভাবে কবিতা লেখে: প্রযুক্তি এবং অনুভূতির মিলন / ব্লগ / AI কবিতা জেনারেটরের নীতি এবং ভবিষ্যৎ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/index.html:282 | C2 | 중간 | 같은 언어 href blog/bn/article-1.html의 링크 텍스트 3종류: AI কিভাবে কবিতা লেখে: প্রযুক্তি এবং অনুভূতির মিলন / ব্লগ / AI কবিতা জেনারেটরের নীতি এবং ভবিষ্যৎ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/index.html:320 | C2 | 중간 | 같은 언어 href blog/bn/article-2.html의 링크 텍스트 2종류: কবিতা লেখার ৫টি টিপস: AI এর সাথে সৃজনশীলতা / কীভাবে স্পর্শকাতর বিবাহের বক্তৃতা লিখবেন | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/index.html:325 | C2 | 중간 | 같은 언어 href blog/bn/article-3.html의 링크 텍스트 2종류: প্রখ্যাত কবিদের লেখার পদ্ধতি থেকে অনুপ্রেরণা গ্রহণ / SNS-এ জনপ্রিয় আবেগপূর্ণ উদ্ধৃতির সংগ্রহ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/index.html:332 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/bn/index.html:343 | C2 | 중간 | 같은 언어 href bn/terms.html의 링크 텍스트 5종류: শর্তাবলী / ব্যবহার শর্তাবলী / পরিষেবার শর্তাবলী / সেবার শর্তাবলী | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/bn/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/bn/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/bn/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/bn/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/bn/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
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
| frontend/da/about.html:10 | C2 | 중간 | 같은 언어 href da/about.html의 링크 텍스트 3종류: Om os / Om / Om tjenesten | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/about.html:65 | C2 | 중간 | 같은 언어 href da/index.html의 링크 텍스트 4종류: AI & Poem / ← Tilbage til Forsiden / Hjem / AI & Digt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/about.html:73 | C2 | 중간 | 같은 언어 href blog/da/index.html의 링크 텍스트 2종류: ← Tilbage til listen / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/about.html:74 | C2 | 중간 | 같은 언어 href da/contact.html의 링크 텍스트 3종류: Kontakt / Contact / Kontakt os | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/about.html:84 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Our Mission | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/about.html:86 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: "Everyone can be a poet." | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/about.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Technical Features | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/about.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1. Large Language Model (LLM) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/about.html:96 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 2. Multilingual Support | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: We support 31 languages including Korean, English, Japanese, Chinese, and French, allowing global users to enjoy poetry in their native language. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/da/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/da/about.html:113 | C2 | 중간 | 같은 언어 href da/privacy.html의 링크 텍스트 3종류: Privacy Policy / Privatlivspolitik / privatlivspolitik | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/about.html:115 | C2 | 중간 | 같은 언어 href da/terms.html의 링크 텍스트 3종류: Terms of Service / Servicevilkår / Betingelser for brug | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/author.html:65 | C2 | 중간 | 같은 언어 href da/index.html의 링크 텍스트 4종류: AI & Poem / ← Tilbage til Forsiden / Hjem / AI & Digt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/da/author.html:87 | C2 | 중간 | 같은 언어 href da/about.html의 링크 텍스트 3종류: Om os / Om / Om tjenesten | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/contact.html:10 | C2 | 중간 | 같은 언어 href da/contact.html의 링크 텍스트 3종류: Kontakt / Contact / Kontakt os | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/da/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/da/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Vi understøtter 31 sprog, herunder dansk, engelsk, koreansk, japansk, kinesisk, spansk og fransk. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/da/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/da/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/da/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/da/index.html:202 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/da/index.html:230 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/index.html:230 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/da/index.html:246 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/da/index.html:247 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/da/index.html:249 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/index.html:250 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/index.html:251 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/index.html:253 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/index.html:253 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/da/index.html:265 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Med understøttelse af 31 sprog, herunder koreansk, engelsk og fransk, kan du færdiggøre tekster til forskellige formål såsom bryllupstaler, kærlighedsbreve og følelsesladede tekster til sociale medier på bare 10 sekunder. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/da/index.html:319 | C2 | 중간 | 같은 언어 href blog/da/article-1.html의 링크 텍스트 3종류: Princippet bag AI-poesi: Mødet mellem teknologi og følelser / Blog / Principper og Fremtid for AI Digtgeneratorer | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/index.html:319 | C2 | 중간 | 같은 언어 href blog/da/article-1.html의 링크 텍스트 3종류: Princippet bag AI-poesi: Mødet mellem teknologi og følelser / Blog / Principper og Fremtid for AI Digtgeneratorer | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/index.html:365 | C2 | 중간 | 같은 언어 href blog/da/article-2.html의 링크 텍스트 2종류: 5 tips til at skrive gode digte: Skabelse med AI / Sådan skriver du rørende bryllupstaler | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/index.html:369 | C2 | 중간 | 같은 언어 href blog/da/article-3.html의 링크 텍스트 2종류: Inspiration fra berømte digteres håndværk / Samling af Følelsesladede Citater Populære på SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/index.html:374 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/da/privacy.html:60 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/privacy.html:83 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/da/privacy.html:103 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/privacy.html:118 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/da/privacy.html:159 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/da/privacy.html:160 | C2 | 중간 | 같은 언어 href da/about.html의 링크 텍스트 3종류: Om os / Om / Om tjenesten | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/privacy.html:164 | C2 | 중간 | 같은 언어 href da/contact.html의 링크 텍스트 3종류: Kontakt / Contact / Kontakt os | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/privacy.html:168 | C2 | 중간 | 같은 언어 href da/terms.html의 링크 텍스트 3종류: Terms of Service / Servicevilkår / Betingelser for brug | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/terms.html:109 | C2 | 중간 | 같은 언어 href da/privacy.html의 링크 텍스트 3종류: Privacy Policy / Privatlivspolitik / privatlivspolitik | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/da/terms.html:129 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/da/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/de/about.html:10 | C2 | 중간 | 같은 언어 href de/about.html의 링크 텍스트 2종류: Um / Über uns | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/de/about.html:65 | C2 | 중간 | 같은 언어 href de/index.html의 링크 텍스트 4종류: AI & Poem / KI & Gedicht / ← Zurück zur Hauptseite / Heim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/de/about.html:72 | C2 | 중간 | 같은 언어 href blog/de/index.html의 링크 텍스트 2종류: ← Zurück zur Liste / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/de/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Wir unterstützen 31 Sprachen, darunter Koreanisch, Englisch, Japanisch, Chinesisch und Französisch, sodass Benutzer weltweit Gedichte in ihrer Muttersprache genießen können. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/de/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/de/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/de/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/de/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/de/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Wir unterstützen 31 Sprachen, darunter Deutsch, Englisch, Koreanisch, Japanisch, Chinesisch, Spanisch und Französisch. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/de/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/de/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/de/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/de/index.html:166 | C2 | 중간 | 같은 언어 href de/about.html의 링크 텍스트 2종류: Um / Über uns | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/de/index.html:189 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/de/index.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/index.html:217 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/de/index.html:234 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/de/index.html:235 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/de/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/index.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/de/index.html:252 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Mit Unterstützung von 31 Sprachen, darunter Koreanisch, Englisch und Französisch, können Sie Texte für verschiedene Zwecke wie Hochzeitsreden, Liebesbriefe und emotionale SNS-Bildunterschriften in nur 10 Sekunden fertigstellen. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/de/index.html:283 | C2 | 중간 | 같은 언어 href blog/de/article-1.html의 링크 텍스트 3종류: Wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion / Blog / Prinzipien und Zukunft von KI-Gedichtgeneratoren | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/de/index.html:283 | C2 | 중간 | 같은 언어 href blog/de/article-1.html의 링크 텍스트 3종류: Wie KI Gedichte schreibt: Die Begegnung von Technik und Emotion / Blog / Prinzipien und Zukunft von KI-Gedichtgeneratoren | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/de/index.html:323 | C2 | 중간 | 같은 언어 href blog/de/article-2.html의 링크 텍스트 2종류: 5 Tipps für gutes Schreiben: Kreatives Arbeiten mit KI / Wie man berührende Hochzeitsreden schreibt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/de/index.html:327 | C2 | 중간 | 같은 언어 href blog/de/article-3.html의 링크 텍스트 2종류: Inspiration aus den Schreibtechniken berühmter Dichter / Sammlung emotionaler Zitate, die in sozialen Netzwerken beliebt sind | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/de/index.html:334 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/de/index.html:343 | C2 | 중간 | 같은 언어 href de/privacy.html의 링크 텍스트 3종류: Datenschutzrichtlinie / Datenschutzbestimmungen / Datenschutzerklärung | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/de/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/de/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/de/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/de/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/de/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/el/about.html:10 | C2 | 중간 | 같은 언어 href el/about.html의 링크 텍스트 2종류: Για / Σχετικά | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/about.html:65 | C2 | 중간 | 같은 언어 href el/index.html의 링크 텍스트 5종류: AI & Poem / ← Επιστροφή στην αρχική σελίδα / AI & Ποίημα / Σπίτι | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/about.html:65 | C2 | 중간 | 같은 언어 href el/index.html의 링크 텍스트 5종류: AI & Poem / ← Επιστροφή στην αρχική σελίδα / AI & Ποίημα / Σπίτι | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/about.html:72 | C2 | 중간 | 같은 언어 href blog/el/index.html의 링크 텍스트 2종류: ← Επιστροφή στη λίστα / Ιστολόγιο | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/about.html:73 | C2 | 중간 | 같은 언어 href el/contact.html의 링크 텍스트 2종류: Επαφή / Επικοινωνία | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/about.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1. Large Language Model (LLM) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Υποστηρίζουμε 31 γλώσσες, συμπεριλαμβανομένων των κορεατικών, αγγλικών, ιαπωνικών, κινέζικων και γαλλικών, επιτρέποντας στους παγκόσμιους χρήστες να απολαμβάνουν ποίηση στη μητρική τους γλώσσα. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/el/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/el/about.html:113 | C2 | 중간 | 같은 언어 href el/privacy.html의 링크 텍스트 2종류: Πολιτική απορρήτου / Πολιτική Απορρήτου | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/about.html:115 | C2 | 중간 | 같은 언어 href el/terms.html의 링크 텍스트 3종류: Όροι χρήσης / Όροι Παροχής Υπηρεσιών / Όροι Χρήσης | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/author.html:65 | C2 | 중간 | 같은 언어 href el/index.html의 링크 텍스트 5종류: AI & Poem / ← Επιστροφή στην αρχική σελίδα / AI & Ποίημα / Σπίτι | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/author.html:73 | C2 | 중간 | 같은 언어 href el/contact.html의 링크 텍스트 2종류: Επαφή / Επικοινωνία | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/el/author.html:87 | C2 | 중간 | 같은 언어 href el/about.html의 링크 텍스트 2종류: Για / Σχετικά | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/author.html:95 | C2 | 중간 | 같은 언어 href el/terms.html의 링크 텍스트 3종류: Όροι χρήσης / Όροι Παροχής Υπηρεσιών / Όροι Χρήσης | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/el/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/el/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Υποστηρίζουμε 31 γλώσσες. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/el/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/el/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/el/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/el/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/el/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/el/index.html:235 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/el/index.html:236 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/el/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/index.html:242 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/index.html:242 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/el/index.html:253 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Υποστηρίζοντας 31 γλώσσες, συμπεριλαμβανομένων των Κορεατικών, Αγγλικών και Γαλλικών, μπορείτε να ολοκληρώσετε κείμενα για διάφορους σκοπούς, όπως ομιλίες γάμου, ερωτικά γράμματα και συναισθηματικές λεζάντες SNS σε μόλις 10 δευτερόλεπτα. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/el/index.html:284 | C2 | 중간 | 같은 언어 href blog/el/article-1.html의 링크 텍스트 3종류: Η αρχή που γράφει ποιήματα AI: Η συνάντηση τεχνολογίας και συναισθήματος / Ιστολόγιο / Αρχές και Μέλλον των Γεννητριών Ποιημάτων AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/index.html:284 | C2 | 중간 | 같은 언어 href blog/el/article-1.html의 링크 텍스트 3종류: Η αρχή που γράφει ποιήματα AI: Η συνάντηση τεχνολογίας και συναισθήματος / Ιστολόγιο / Αρχές και Μέλλον των Γεννητριών Ποιημάτων AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/index.html:325 | C2 | 중간 | 같은 언어 href blog/el/article-2.html의 링크 텍스트 2종류: 5 συμβουλές για να γράφετε καλά ποιήματα: Δημιουργία με AI / Πώς να γράψετε συγκινητικές ομιλίες γάμου | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/index.html:331 | C2 | 중간 | 같은 언어 href blog/el/article-3.html의 링크 텍스트 2종류: Έμπνευση από τις τεχνικές διάσημων ποιητών / Συλλογή συναισθηματικών αποφθεγμάτων δημοφιλών στα SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/el/index.html:338 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/el/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/el/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/el/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/el/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/el/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/404.html:79 | C2 | 중간 | 같은 언어 href en/index.html의 링크 텍스트 7종류: AI & Poem / ← Back to Main / Generate an AI Poem → / Back to Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/404.html:79 | C2 | 중간 | 같은 언어 href en/index.html의 링크 텍스트 7종류: AI & Poem / ← Back to Main / Generate an AI Poem → / Back to Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/404.html:88 | C2 | 중간 | 같은 언어 href en/faq.html의 링크 텍스트 3종류: FAQ / Frequently Asked Questions / View All FAQs → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/404.html:116 | C2 | 중간 | 같은 언어 href blog/en/article-1.html의 링크 텍스트 6종류: How AI Writes Poetry: The Meeting of Technology and Emotion / The Principle of AI Writing Poetry / The Principle of AI Writing Poetry: The Meeting of Technology and Emotion / The Principles and Future of AI Poem Generators | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/404.html:120 | C2 | 중간 | 같은 언어 href en/gallery-1.html의 링크 텍스트 2종류: Poems of Love and Farewell / Poems of Love & Farewell From the trembling of first love to the maturity of letting go, seven poems trace the emotional arc of love with literary commentary. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/404.html:130 | A5 | 중간 | A5 푸터 구조 불일치: 404.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/404.html:144 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/about.html:68 | C2 | 중간 | 같은 언어 href en/index.html의 링크 텍스트 7종류: AI & Poem / ← Back to Main / Generate an AI Poem → / Back to Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/about.html:76 | C2 | 중간 | 같은 언어 href en/author.html의 링크 텍스트 4종류: View full profile → / Author / author page / Learn more about the author → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/about.html:104 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: We support 31 languages — including Korean, English, Japanese, Chinese, and French — so global users can enjoy poetry in their native language. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/en/about.html:116 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/about.html:130 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/author.html:39 | D1 | 중간 | 비한국어 JSON-LD $.jobTitle에 한글 포함: 개발자 / AI 시 도구 운영자 | JSON-LD 문자열을 페이지 언어로 번역. |
| frontend/en/author.html:40 | D1 | 중간 | 비한국어 JSON-LD $.description에 한글 포함: 한국 시문학과 AI 도구를 결합한 ai-and-poem.art 운영자 | JSON-LD 문자열을 페이지 언어로 번역. |
| frontend/en/author.html:96 | C2 | 중간 | 같은 언어 href en/contact.html의 링크 텍스트 3종류: Contact / contact / Contact us. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/author.html:120 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem is a multilingual poetry generation service supporting 31 languages, with careful prompt design that honors each language's poetic tradition and cultural context. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/en/author.html:136 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/author.html:150 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/contact.html:135 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/contact.html:149 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/faq.html:64 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/faq.html:210 | C2 | 중간 | 같은 언어 href en/contact.html의 링크 텍스트 3종류: Contact / contact / Contact us. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/faq.html:246 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: We support 31 languages including English, Korean, Japanese, Chinese, Spanish, and French. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/en/faq.html:246 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Writing Poetry in 31 Languages | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/en/faq.html:276 | C2 | 중간 | 같은 언어 href blog/en/article-1.html의 링크 텍스트 6종류: How AI Writes Poetry: The Meeting of Technology and Emotion / The Principle of AI Writing Poetry / The Principle of AI Writing Poetry: The Meeting of Technology and Emotion / The Principles and Future of AI Poem Generators | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/faq.html:286 | C2 | 중간 | 같은 언어 href blog/en/article-8.html의 링크 텍스트 2종류: The Day Computers Started Writing Poetry: A History of AI Poetry / The Day Computers Started Writing Poetry | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/faq.html:301 | C2 | 중간 | 같은 언어 href blog/en/article-10.html의 링크 텍스트 3종류: Who Owns AI-Written Poetry: Copyright and Ethical Issues / Who Owns the Poem AI Wrote?: Copyright and Ethics / Who Owns AI-Written Poetry? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/faq.html:306 | C2 | 중간 | 같은 언어 href blog/en/article-9.html의 링크 텍스트 3종류: AI Poets in the Classroom: Educational Applications of AI Poetry Generators / The AI Poet in the Classroom: Educational Applications of AI Poetry Generators / AI Poets in the Classroom | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/faq.html:317 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/faq.html:331 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/gallery-1.html:69 | C2 | 중간 | 같은 언어 href en/author.html의 링크 텍스트 4종류: View full profile → / Author / author page / Learn more about the author → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery-1.html:91 | C2 | 중간 | 같은 언어 href en/gallery.html의 링크 텍스트 2종류: Gallery / ← Back to Gallery | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery-1.html:116 | C2 | 중간 | 같은 언어 href en/index.html의 링크 텍스트 7종류: AI & Poem / ← Back to Main / Generate an AI Poem → / Back to Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery-1.html:331 | C2 | 중간 | 같은 언어 href blog/en/article-2.html의 링크 텍스트 5종류: 5 Tips for Writing Better Poetry with AI / 5 Tips for Writing Great Poetry / 5 Tips for Writing Great Poetry: Creating with AI / 7 Tips for Creating Moving AI Poems | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery-1.html:332 | C2 | 중간 | 같은 언어 href blog/en/article-5.html의 링크 텍스트 3종류: Create Heartfelt Speeches and Letters with AI in 10 Seconds / Create Touching Speeches and Letters in 10 Seconds with AI / Writing Special Speeches and Letters with AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery-1.html:333 | C2 | 중간 | 같은 언어 href blog/en/article-6.html의 링크 텍스트 3종류: AI Poetry and Emotional Healing / AI Poetry and Emotional Healing: New Possibilities in Writing Therapy / AI Poetry and Emotional Healing: A New Tool for Literary Therapy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery-1.html:344 | A5 | 중간 | A5 푸터 구조 불일치: gallery-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/gallery-1.html:358 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/gallery-2.html:335 | C2 | 중간 | 같은 언어 href blog/en/article-1.html의 링크 텍스트 6종류: How AI Writes Poetry: The Meeting of Technology and Emotion / The Principle of AI Writing Poetry / The Principle of AI Writing Poetry: The Meeting of Technology and Emotion / The Principles and Future of AI Poem Generators | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery-2.html:336 | C2 | 중간 | 같은 언어 href blog/en/article-3.html의 링크 텍스트 4종류: Learning from Famous Poets: Inspiration from Their Craft / Inspiration from the Craft of Famous Poets / Writing Like a Poet: Creative Techniques in the AI Era / Collection of Emotional Quotes Popular on SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery-2.html:347 | A5 | 중간 | A5 푸터 구조 불일치: gallery-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/gallery-2.html:361 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/gallery-3.html:250 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/gallery-3.html:349 | C2 | 중간 | 같은 언어 href blog/en/article-4.html의 링크 텍스트 2종류: The Future of AI Poetry Generators: Will They Replace Writers? / The Future of AI Poetry: Where Technology Meets Emotion | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery-3.html:360 | A5 | 중간 | A5 푸터 구조 불일치: gallery-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/gallery-3.html:374 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/gallery-4.html:366 | A5 | 중간 | A5 푸터 구조 불일치: gallery-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/gallery-4.html:380 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/gallery.html:126 | C2 | 중간 | 같은 언어 href en/gallery-1.html의 링크 텍스트 2종류: Poems of Love and Farewell / Poems of Love & Farewell From the trembling of first love to the maturity of letting go, seven poems trace the emotional arc of love with literary commentary. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/gallery.html:146 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/gallery.html:160 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/en/index.html:181 | C2 | 중간 | 같은 언어 href en/faq.html의 링크 텍스트 3종류: FAQ / Frequently Asked Questions / View All FAQs → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/index.html:204 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/en/index.html:231 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/index.html:231 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/index.html:247 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/en/index.html:248 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/index.html:254 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/index.html:339 | C2 | 중간 | 같은 언어 href blog/en/article-2.html의 링크 텍스트 5종류: 5 Tips for Writing Better Poetry with AI / 5 Tips for Writing Great Poetry / 5 Tips for Writing Great Poetry: Creating with AI / 7 Tips for Creating Moving AI Poems | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/index.html:343 | C2 | 중간 | 같은 언어 href blog/en/article-3.html의 링크 텍스트 4종류: Learning from Famous Poets: Inspiration from Their Craft / Inspiration from the Craft of Famous Poets / Writing Like a Poet: Creative Techniques in the AI Era / Collection of Emotional Quotes Popular on SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/index.html:348 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/index.html:362 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/privacy.html:81 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/privacy.html:101 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/privacy.html:175 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/terms.html:101 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/terms.html:114 | C2 | 중간 | 같은 언어 href en/privacy.html의 링크 텍스트 2종류: Privacy / Privacy Policy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/terms.html:135 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/terms.html:149 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/en/use-cases.html:88 | C2 | 중간 | 같은 언어 href en/index.html의 링크 텍스트 7종류: AI & Poem / ← Back to Main / Generate an AI Poem → / Back to Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/en/use-cases.html:109 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Supporting 31 languages — including English, Korean, Japanese, Chinese, French, and Spanish — AI & Poem makes poetry accessible to people around the world in their native language. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/en/use-cases.html:161 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/en/use-cases.html:175 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/es/404.html:76 | C2 | 중간 | 같은 언어 href es/index.html의 링크 텍스트 8종류: AI & Poem / ← Volver a la página principal / IA y poema / Crear un poema con IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:76 | C2 | 중간 | 같은 언어 href es/index.html의 링크 텍스트 8종류: AI & Poem / ← Volver a la página principal / IA y poema / Crear un poema con IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:76 | C2 | 중간 | 같은 언어 href es/index.html의 링크 텍스트 8종류: AI & Poem / ← Volver a la página principal / IA y poema / Crear un poema con IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:83 | C2 | 중간 | 같은 언어 href blog/es/index.html의 링크 텍스트 2종류: ← Volver a la lista / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:84 | C2 | 중간 | 같은 언어 href es/gallery.html의 링크 텍스트 2종류: Galería / ← Volver a la Galería | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:85 | C2 | 중간 | 같은 언어 href es/faq.html의 링크 텍스트 3종류: FAQ / Preguntas frecuentes / Ver todas las FAQ → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:85 | C2 | 중간 | 같은 언어 href es/faq.html의 링크 텍스트 3종류: FAQ / Preguntas frecuentes / Ver todas las FAQ → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:86 | C2 | 중간 | 같은 언어 href es/contact.html의 링크 텍스트 2종류: Contacto / Contáctanos. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:113 | C2 | 중간 | 같은 언어 href blog/es/article-1.html의 링크 텍스트 7종류: Cómo la IA escribe poesía: El encuentro entre tecnología y emoción / El principio de la escritura poética con IA / El principio de la escritura de poesía por IA: el encuentro de la tecnología y la emoción / Principios y futuro del generador de poemas con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:117 | C2 | 중간 | 같은 언어 href es/gallery-1.html의 링크 텍스트 2종류: Poemas de amor y despedida / Poemas de Amor y Despedida Desde el temblor del primer amor hasta la madurez del desapego, siete poemas que recorren el viaje emocional del amor con comentarios literarios. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:127 | A5 | 중간 | A5 푸터 구조 불일치: 404.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/404.html:138 | C2 | 중간 | 같은 언어 href es/author.html의 링크 텍스트 4종류: Ver perfil completo → / Sobre el autor / Más sobre el autor → / Sobre el Autor | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/404.html:140 | C2 | 중간 | 같은 언어 href es/use-cases.html의 링크 텍스트 2종류: Casos de uso / Casos de Uso | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/about.html:65 | C2 | 중간 | 같은 언어 href es/index.html의 링크 텍스트 8종류: AI & Poem / ← Volver a la página principal / IA y poema / Crear un poema con IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/about.html:99 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Admitimos 31 idiomas, incluidos coreano, inglés, japonés, chino y francés, lo que permite a los usuarios de todo el mundo disfrutar de la poesía en su idioma nativo. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/es/about.html:108 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/author.html:28 | D1 | 중간 | 비한국어 JSON-LD $.alternateName에 한글 포함: 류재국 | JSON-LD 문자열을 페이지 언어로 번역. |
| frontend/es/author.html:109 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem es un servicio multilingüe de generación de poesía que admite 31 idiomas, con una profunda atención al diseño de prompts que considera las tradiciones poéticas y los contextos culturales de cada lengua. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/es/author.html:119 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/contact.html:134 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/contact.html:148 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/contact.html:148 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/es/faq.html:207 | C2 | 중간 | 같은 언어 href es/contact.html의 링크 텍스트 2종류: Contacto / Contáctanos. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/faq.html:243 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Admitimos 31 idiomas, incluyendo español, inglés, japonés, chino, coreano y francés. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/es/faq.html:243 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Escribir poesía en 31 idiomas | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/es/faq.html:283 | C2 | 중간 | 같은 언어 href blog/es/article-8.html의 링크 텍스트 3종류: El día que las computadoras empezaron a escribir poesía: Historia de la poesía IA / El día que la computadora empezó a escribir poesía: historia de la poesía con IA / El día que la computadora empezó a escribir poesía | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/faq.html:298 | C2 | 중간 | 같은 언어 href blog/es/article-10.html의 링크 텍스트 3종류: ¿De quién es la poesía escrita por IA?: Cuestiones de derechos de autor y ética / ¿De quién es el poema que escribió la IA?: derechos de autor y ética / ¿De quién es el poema que escribió la IA? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/faq.html:303 | C2 | 중간 | 같은 언어 href blog/es/article-9.html의 링크 텍스트 3종류: Poetas IA en el aula: Aplicaciones educativas de los generadores de poesía IA / El poeta IA en el aula: uso educativo de los generadores de poesía con IA / El poeta IA en el aula | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/faq.html:314 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/gallery-1.html:66 | C2 | 중간 | 같은 언어 href es/author.html의 링크 텍스트 4종류: Ver perfil completo → / Sobre el autor / Más sobre el autor → / Sobre el Autor | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-1.html:66 | C2 | 중간 | 같은 언어 href es/author.html의 링크 텍스트 4종류: Ver perfil completo → / Sobre el autor / Más sobre el autor → / Sobre el Autor | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-1.html:88 | C2 | 중간 | 같은 언어 href es/gallery.html의 링크 텍스트 2종류: Galería / ← Volver a la Galería | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-1.html:113 | C2 | 중간 | 같은 언어 href es/index.html의 링크 텍스트 8종류: AI & Poem / ← Volver a la página principal / IA y poema / Crear un poema con IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-1.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 9 de abril de 2026 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/es/gallery-1.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/es/gallery-1.html:334 | C2 | 중간 | 같은 언어 href blog/es/article-2.html의 링크 텍스트 5종류: 5 consejos para escribir mejor poesía con IA / 5 consejos para escribir buena poesía / 5 consejos para escribir buena poesía: creación junto a la IA / 7 consejos para crear poemas IA conmovedores | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-1.html:335 | C2 | 중간 | 같은 언어 href blog/es/article-5.html의 링크 텍스트 3종류: Crea discursos y cartas emotivas con IA en 10 segundos / Crear discursos emotivos y cartas en 10 segundos con IA / Escribir discursos y cartas especiales con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-1.html:336 | C2 | 중간 | 같은 언어 href blog/es/article-6.html의 링크 텍스트 4종류: Poesía IA y sanación emocional / Poesía IA y sanación emocional: Nuevas posibilidades en la terapia de escritura / Poesía IA y sanación emocional: nuevas posibilidades en la escritura terapéutica / Poesía IA y sanación emocional: una nueva herramienta de terapia literaria | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-1.html:347 | A5 | 중간 | A5 푸터 구조 불일치: gallery-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/gallery-1.html:354 | C2 | 중간 | 같은 언어 href es/use-cases.html의 링크 텍스트 2종류: Casos de uso / Casos de Uso | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-1.html:355 | C2 | 중간 | 같은 언어 href es/privacy.html의 링크 텍스트 2종류: Política de privacidad / Política de Privacidad | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-1.html:356 | C2 | 중간 | 같은 언어 href es/terms.html의 링크 텍스트 3종류: Términos de uso / Términos de servicio / Términos de Servicio | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-2.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 9 de abril de 2026 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/es/gallery-2.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/es/gallery-2.html:372 | C2 | 중간 | 같은 언어 href blog/es/article-1.html의 링크 텍스트 7종류: Cómo la IA escribe poesía: El encuentro entre tecnología y emoción / El principio de la escritura poética con IA / El principio de la escritura de poesía por IA: el encuentro de la tecnología y la emoción / Principios y futuro del generador de poemas con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-2.html:373 | C2 | 중간 | 같은 언어 href blog/es/article-3.html의 링크 텍스트 5종류: Aprendiendo de poetas famosos: Inspiración desde su oficio / Inspiración desde los métodos de poetas famosos / Inspiración a partir de las técnicas de poetas famosos / Poesía IA vs. poesía humana: ¿puede la IA escribir poemas auténticos? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-2.html:384 | A5 | 중간 | A5 푸터 구조 불일치: gallery-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/gallery-3.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 9 de abril de 2026 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/es/gallery-3.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/es/gallery-3.html:396 | C2 | 중간 | 같은 언어 href blog/es/article-4.html의 링크 텍스트 4종류: El futuro del generador de poesía con IA: ¿reemplazará a los escritores? / El futuro de los generadores de poesía IA: ¿Reemplazarán a los escritores? / El futuro del generador de poesía AI: ¿reemplazará a los escritores? / Poesía IA en la educación: guía práctica para el aula | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery-3.html:407 | A5 | 중간 | A5 푸터 구조 불일치: gallery-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/gallery-4.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 9 de abril de 2026 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/es/gallery-4.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/es/gallery-4.html:403 | A5 | 중간 | A5 푸터 구조 불일치: gallery-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/gallery.html:123 | C2 | 중간 | 같은 언어 href es/gallery-1.html의 링크 텍스트 2종류: Poemas de amor y despedida / Poemas de Amor y Despedida Desde el temblor del primer amor hasta la madurez del desapego, siete poemas que recorren el viaje emocional del amor con comentarios literarios. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/gallery.html:143 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/es/index.html:137 | C2 | 중간 | 같은 언어 href es/faq.html의 링크 텍스트 3종류: FAQ / Preguntas frecuentes / Ver todas las FAQ → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/index.html:160 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/es/index.html:187 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/index.html:187 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/es/index.html:203 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/es/index.html:204 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/es/index.html:206 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/index.html:207 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/index.html:208 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/index.html:210 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/index.html:210 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/es/index.html:220 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Con soporte para 31 idiomas, incluidos coreano, inglés y francés, puedes completar escritos para diversos fines, como discursos de boda, cartas de amor y subtítulos emocionales para redes sociales en solo 10 segundos. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/es/index.html:250 | C2 | 중간 | 같은 언어 href blog/es/article-1.html의 링크 텍스트 7종류: Cómo la IA escribe poesía: El encuentro entre tecnología y emoción / El principio de la escritura poética con IA / El principio de la escritura de poesía por IA: el encuentro de la tecnología y la emoción / Principios y futuro del generador de poemas con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/index.html:250 | C2 | 중간 | 같은 언어 href blog/es/article-1.html의 링크 텍스트 7종류: Cómo la IA escribe poesía: El encuentro entre tecnología y emoción / El principio de la escritura poética con IA / El principio de la escritura de poesía por IA: el encuentro de la tecnología y la emoción / Principios y futuro del generador de poemas con IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/index.html:279 | C2 | 중간 | 같은 언어 href blog/es/article-2.html의 링크 텍스트 5종류: 5 consejos para escribir mejor poesía con IA / 5 consejos para escribir buena poesía / 5 consejos para escribir buena poesía: creación junto a la IA / 7 consejos para crear poemas IA conmovedores | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/index.html:283 | C2 | 중간 | 같은 언어 href blog/es/article-3.html의 링크 텍스트 5종류: Aprendiendo de poetas famosos: Inspiración desde su oficio / Inspiración desde los métodos de poetas famosos / Inspiración a partir de las técnicas de poetas famosos / Poesía IA vs. poesía humana: ¿puede la IA escribir poemas auténticos? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/index.html:289 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/privacy.html:85 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/es/privacy.html:105 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/privacy.html:120 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/es/privacy.html:162 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/terms.html:132 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/es/use-cases.html:85 | C2 | 중간 | 같은 언어 href es/index.html의 링크 텍스트 8종류: AI & Poem / ← Volver a la página principal / IA y poema / Crear un poema con IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/es/use-cases.html:106 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Con soporte para 31 idiomas, incluyendo español, inglés, japonés, chino y francés, AI & Poem hace que la poesía sea accesible para personas de todo el mundo en su lengua materna. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/es/use-cases.html:158 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/faq.html:207 | C2 | 중간 | 같은 언어 href gallery.html의 링크 텍스트 3종류: 갤러리 / 시 갤러리 / 갤러리 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/faq.html:209 | C2 | 중간 | 같은 언어 href contact.html의 링크 텍스트 2종류: 문의하기 / 문의 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/faq.html:245 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어를 포함해 31개 언어를 지원합니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/faq.html:245 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시 쓰기 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/faq.html:330 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fi/about.html:10 | C2 | 중간 | 같은 언어 href fi/about.html의 링크 텍스트 3종류: Noin / Tietoja / Tietoa meistä | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/about.html:65 | C2 | 중간 | 같은 언어 href fi/index.html의 링크 텍스트 6종류: AI & Poem / ← Palaa pääsivulle / AI & runo / Kotiin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/about.html:65 | C2 | 중간 | 같은 언어 href fi/index.html의 링크 텍스트 6종류: AI & Poem / ← Palaa pääsivulle / AI & runo / Kotiin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/about.html:72 | C2 | 중간 | 같은 언어 href blog/fi/index.html의 링크 텍스트 3종류: ← Palaa luetteloon / ← Takaisin luetteloon / Blogi | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/about.html:73 | C2 | 중간 | 같은 언어 href fi/contact.html의 링크 텍스트 2종류: Ota yhteyttä / Yhteystiedot | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/about.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1. Large Language Model (LLM) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Tuemme yli 20:tä kieltä, mukaan lukien koreaa, englantia, japania, kiinaa ja ranskaa, jolloin maailmanlaajuiset käyttäjät voivat nauttia runoudesta äidinkielellään. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fi/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fi/about.html:115 | C2 | 중간 | 같은 언어 href fi/terms.html의 링크 텍스트 2종류: Käyttöehdot / Palveluehdot | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/author.html:65 | C2 | 중간 | 같은 언어 href fi/index.html의 링크 텍스트 6종류: AI & Poem / ← Palaa pääsivulle / AI & runo / Kotiin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/author.html:65 | C2 | 중간 | 같은 언어 href fi/index.html의 링크 텍스트 6종류: AI & Poem / ← Palaa pääsivulle / AI & runo / Kotiin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/author.html:73 | C2 | 중간 | 같은 언어 href fi/contact.html의 링크 텍스트 2종류: Ota yhteyttä / Yhteystiedot | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fi/author.html:87 | C2 | 중간 | 같은 언어 href fi/about.html의 링크 텍스트 3종류: Noin / Tietoja / Tietoa meistä | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fi/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fi/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Tuemme 31 kieltä, mukaan lukien suomi, englanti ja korea. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fi/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fi/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fi/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/fi/index.html:166 | C2 | 중간 | 같은 언어 href fi/about.html의 링크 텍스트 3종류: Noin / Tietoja / Tietoa meistä | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/index.html:189 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fi/index.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/index.html:217 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fi/index.html:234 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/fi/index.html:235 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fi/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/index.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fi/index.html:251 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Tukemalla 31 kieltä, mukaan lukien korea, englanti ja ranska, voit viimeistellä kirjoitukset eri tarkoituksiin, kuten hääpuheisiin, rakkauskirjeisiin ja tunteellisiin SNS-kuvateksteihin vain 10 sekunnissa. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fi/index.html:282 | C2 | 중간 | 같은 언어 href blog/fi/article-1.html의 링크 텍스트 3종류: Kuinka tekoäly kirjoittaa runoja: teknologian ja tunteiden kohtaaminen / Blogi / AI-runogeneraattoreiden periaatteet ja tulevaisuus | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/index.html:282 | C2 | 중간 | 같은 언어 href blog/fi/article-1.html의 링크 텍스트 3종류: Kuinka tekoäly kirjoittaa runoja: teknologian ja tunteiden kohtaaminen / Blogi / AI-runogeneraattoreiden periaatteet ja tulevaisuus | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/index.html:321 | C2 | 중간 | 같은 언어 href blog/fi/article-2.html의 링크 텍스트 2종류: 5 vinkkiä hyvän runon kirjoittamiseen: luovuus tekoälyn kanssa / Kuinka kirjoittaa koskettavia hääpuheita | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/index.html:327 | C2 | 중간 | 같은 언어 href blog/fi/article-3.html의 링크 텍스트 2종류: Inspiraatiota kuuluisilta runoilijoilta / Kokoelma tunteellisia lainauksia, jotka ovat suosittuja somessa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/index.html:334 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fi/index.html:343 | C2 | 중간 | 같은 언어 href fi/privacy.html의 링크 텍스트 3종류: Tietosuojakäytäntö / Tietosuojaseloste / tietosuojaselostettamme | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/privacy.html:85 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fi/privacy.html:105 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/privacy.html:120 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fi/privacy.html:162 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fi/terms.html:111 | C2 | 중간 | 같은 언어 href fi/privacy.html의 링크 텍스트 3종류: Tietosuojakäytäntö / Tietosuojaseloste / tietosuojaselostettamme | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fi/terms.html:132 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fi/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fil/about.html:10 | C2 | 중간 | 같은 언어 href fil/about.html의 링크 텍스트 2종류: Tungkol sa Amin / Tungkol sa Serbisyo | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/about.html:65 | C2 | 중간 | 같은 언어 href fil/index.html의 링크 텍스트 4종류: AI & Poem / ← Bumalik sa pangunahing pahina / Tahanan / Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/about.html:73 | C2 | 중간 | 같은 언어 href blog/fil/index.html의 링크 텍스트 2종류: ← Bumalik sa listahan / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/about.html:74 | C2 | 중간 | 같은 언어 href fil/contact.html의 링크 텍스트 2종류: Makipag-ugnayan / Contact | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/about.html:84 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Our Mission | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/about.html:86 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: "Everyone can be a poet." | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/about.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Technical Features | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/about.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1. Large Language Model (LLM) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/about.html:96 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 2. Multilingual Support | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: We support 31 languages including Korean, English, Japanese, Chinese, and French, allowing global users to enjoy poetry in their native language. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fil/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fil/about.html:113 | C2 | 중간 | 같은 언어 href fil/privacy.html의 링크 텍스트 2종류: Privacy Policy / Patakaran sa Privacy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/about.html:115 | C2 | 중간 | 같은 언어 href fil/terms.html의 링크 텍스트 3종류: Terms of Service / Mga Tuntunin ng Serbisyo / Mga Tuntunin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/contact.html:10 | C2 | 중간 | 같은 언어 href fil/contact.html의 링크 텍스트 2종류: Makipag-ugnayan / Contact | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/contact.html:85 | C2 | 중간 | 같은 언어 href fil/index.html의 링크 텍스트 4종류: AI & Poem / ← Bumalik sa pangunahing pahina / Tahanan / Home | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/contact.html:106 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Email Inquiry | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/contact.html:126 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Tech blog — | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fil/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fil/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/fil/index.html:202 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fil/index.html:230 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/index.html:230 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fil/index.html:246 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/fil/index.html:247 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fil/index.html:249 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/index.html:250 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/index.html:251 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/index.html:253 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/index.html:253 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fil/index.html:266 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Sumusuporta sa 31 wika kabilang ang Korean, English, at French, maaari mong kumpletuhin ang mga sulatin para sa iba't ibang layunin tulad ng mga talumpati sa kasal, mga liham ng pag-ibig, at emosyonal na mga caption sa SNS sa loob lamang ng 10 segundo. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fil/index.html:321 | C2 | 중간 | 같은 언어 href blog/fil/article-1.html의 링크 텍스트 3종류: Ang prinsipyo ng AI na pagsulat ng tula: Ang pagtatagpo ng teknolohiya at emosyon / Blog / Mga Prinsipyo at Hinaharap ng mga AI Poem Generator | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/index.html:321 | C2 | 중간 | 같은 언어 href blog/fil/article-1.html의 링크 텍스트 3종류: Ang prinsipyo ng AI na pagsulat ng tula: Ang pagtatagpo ng teknolohiya at emosyon / Blog / Mga Prinsipyo at Hinaharap ng mga AI Poem Generator | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/index.html:372 | C2 | 중간 | 같은 언어 href blog/fil/article-2.html의 링크 텍스트 2종류: 5 tip para sa pagsulat ng magagandang tula: Paglikha gamit ang AI / Paano Sumulat ng Nakakaantig na Talumpati sa Kasal | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/index.html:377 | C2 | 중간 | 같은 언어 href blog/fil/article-3.html의 링크 텍스트 2종류: Inspirasyon mula sa sining ng mga tanyag na makata / Koleksyon ng mga Emosyonal na quotes na sikat sa SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/index.html:383 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fil/privacy.html:60 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/privacy.html:83 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fil/privacy.html:103 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ), Google AdSense (publisher ID | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/privacy.html:103 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/privacy.html:118 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/privacy.html:159 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fil/privacy.html:160 | C2 | 중간 | 같은 언어 href fil/about.html의 링크 텍스트 2종류: Tungkol sa Amin / Tungkol sa Serbisyo | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/privacy.html:168 | C2 | 중간 | 같은 언어 href fil/terms.html의 링크 텍스트 3종류: Terms of Service / Mga Tuntunin ng Serbisyo / Mga Tuntunin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fil/terms.html:108 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 7. Privacy | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fil/terms.html:129 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/404.html:76 | C2 | 중간 | 같은 언어 href fr/index.html의 링크 텍스트 8종류: AI & Poem / ← Retour à la page principale / IA et poème / Générer un poème IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:76 | C2 | 중간 | 같은 언어 href fr/index.html의 링크 텍스트 8종류: AI & Poem / ← Retour à la page principale / IA et poème / Générer un poème IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:76 | C2 | 중간 | 같은 언어 href fr/index.html의 링크 텍스트 8종류: AI & Poem / ← Retour à la page principale / IA et poème / Générer un poème IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:83 | C2 | 중간 | 같은 언어 href blog/fr/index.html의 링크 텍스트 2종류: ← Retour à la liste / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:84 | C2 | 중간 | 같은 언어 href fr/gallery.html의 링크 텍스트 2종류: Galerie / ← Retour à la Galerie | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:85 | C2 | 중간 | 같은 언어 href fr/faq.html의 링크 텍스트 3종류: FAQ / Questions fréquentes / Voir toutes les FAQ → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:85 | C2 | 중간 | 같은 언어 href fr/faq.html의 링크 텍스트 3종류: FAQ / Questions fréquentes / Voir toutes les FAQ → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:86 | C2 | 중간 | 같은 언어 href fr/contact.html의 링크 텍스트 2종류: Contact / Contactez-nous. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:113 | C2 | 중간 | 같은 언어 href blog/fr/article-1.html의 링크 텍스트 8종류: Comment l'IA écrit de la poésie : La rencontre entre technologie et émotion / Le principe de l'écriture poétique par l'IA / Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion / Principes et avenir du générateur de poèmes IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:117 | C2 | 중간 | 같은 언어 href fr/gallery-1.html의 링크 텍스트 2종류: Poèmes d'amour et d'adieu / Poèmes d'Amour et d'Adieu Du frémissement du premier amour à la sagesse du lâcher-prise, découvrez 7 poèmes qui parcourent le voyage émotionnel de l'amour, accompagnés de commentaires littéraires. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:127 | A5 | 중간 | A5 푸터 구조 불일치: 404.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/404.html:138 | C2 | 중간 | 같은 언어 href fr/author.html의 링크 텍스트 4종류: Voir le profil complet → / À propos de l'auteur / L'auteur / En savoir plus sur l'auteur → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/404.html:140 | C2 | 중간 | 같은 언어 href fr/use-cases.html의 링크 텍스트 2종류: Cas d'utilisation / Cas d'usage | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/about.html:68 | C2 | 중간 | 같은 언어 href fr/index.html의 링크 텍스트 8종류: AI & Poem / ← Retour à la page principale / IA et poème / Générer un poème IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/about.html:106 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Nous prenons en charge 31 langues, dont le coréen, l'anglais, le japonais, le chinois et le français, permettant aux utilisateurs du monde entier de profiter de la poésie dans leur langue maternelle. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fr/about.html:118 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/author.html:28 | D1 | 중간 | 비한국어 JSON-LD $.alternateName에 한글 포함: 류재국 | JSON-LD 문자열을 페이지 언어로 번역. |
| frontend/fr/author.html:109 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem est un service multilingue de génération de poésie prenant en charge 31 langues, avec une attention particulière à la conception de prompts qui tient compte des traditions poétiques et des contextes culturels de chaque langue. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fr/author.html:119 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/contact.html:38 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/contact.html:136 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/contact.html:150 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/contact.html:150 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fr/faq.html:207 | C2 | 중간 | 같은 언어 href fr/contact.html의 링크 텍스트 2종류: Contact / Contactez-nous. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/faq.html:243 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Nous prenons en charge 31 langues, dont le français, l'anglais, le japonais, le chinois, le coréen et l'espagnol. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fr/faq.html:243 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Écrire de la poésie en 31 langues | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fr/faq.html:273 | C2 | 중간 | 같은 언어 href blog/fr/article-1.html의 링크 텍스트 8종류: Comment l'IA écrit de la poésie : La rencontre entre technologie et émotion / Le principe de l'écriture poétique par l'IA / Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion / Principes et avenir du générateur de poèmes IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/faq.html:283 | C2 | 중간 | 같은 언어 href blog/fr/article-8.html의 링크 텍스트 3종류: Le jour où les ordinateurs ont commencé à écrire de la poésie : Histoire de la poésie IA / Le jour où l'ordinateur a commencé à écrire de la poésie : histoire de la poésie IA / Le jour où l'ordinateur a commencé à écrire de la poésie | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/faq.html:298 | C2 | 중간 | 같은 언어 href blog/fr/article-10.html의 링크 텍스트 3종류: À qui appartient la poésie écrite par l'IA : Questions de droits d'auteur et d'éthique / À qui appartient le poème écrit par l'IA ? : droits d'auteur et éthique / À qui appartient le poème écrit par l'IA ? | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/faq.html:303 | C2 | 중간 | 같은 언어 href blog/fr/article-9.html의 링크 텍스트 3종류: Poètes IA en classe : Applications éducatives des générateurs de poésie IA / Le poète IA en classe : utilisation éducative des générateurs de poésie IA / Le poète IA en classe | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/faq.html:314 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/faq.html:320 | C2 | 중간 | 같은 언어 href fr/author.html의 링크 텍스트 4종류: Voir le profil complet → / À propos de l'auteur / L'auteur / En savoir plus sur l'auteur → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/faq.html:321 | C2 | 중간 | 같은 언어 href fr/use-cases.html의 링크 텍스트 2종류: Cas d'utilisation / Cas d'usage | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/faq.html:322 | C2 | 중간 | 같은 언어 href fr/privacy.html의 링크 텍스트 3종류: Politique de confidentialité / Confidentialité / politique de confidentialité | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery-1.html:66 | C2 | 중간 | 같은 언어 href fr/author.html의 링크 텍스트 4종류: Voir le profil complet → / À propos de l'auteur / L'auteur / En savoir plus sur l'auteur → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery-1.html:88 | C2 | 중간 | 같은 언어 href fr/gallery.html의 링크 텍스트 2종류: Galerie / ← Retour à la Galerie | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery-1.html:113 | C2 | 중간 | 같은 언어 href fr/index.html의 링크 텍스트 8종류: AI & Poem / ← Retour à la page principale / IA et poème / Générer un poème IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery-1.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 9 avril 2026 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fr/gallery-1.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fr/gallery-1.html:333 | C2 | 중간 | 같은 언어 href blog/fr/article-2.html의 링크 텍스트 5종류: 5 conseils pour mieux écrire de la poésie avec l'IA / 5 conseils pour écrire de bons poèmes / 5 conseils pour bien écrire de la poésie : création avec l'IA / 7 conseils pour créer des poèmes IA émouvants | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery-1.html:334 | C2 | 중간 | 같은 언어 href blog/fr/article-5.html의 링크 텍스트 3종류: Créez des discours et lettres émouvants avec l'IA en 10 secondes / Créer des discours et lettres émouvants en 10 secondes avec l'IA / Écrire des discours et lettres spéciales avec l'IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery-1.html:346 | A5 | 중간 | A5 푸터 구조 불일치: gallery-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/gallery-2.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 9 avril 2026 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fr/gallery-2.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fr/gallery-2.html:345 | C2 | 중간 | 같은 언어 href blog/fr/article-1.html의 링크 텍스트 8종류: Comment l'IA écrit de la poésie : La rencontre entre technologie et émotion / Le principe de l'écriture poétique par l'IA / Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion / Principes et avenir du générateur de poèmes IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery-2.html:346 | C2 | 중간 | 같은 언어 href blog/fr/article-3.html의 링크 텍스트 5종류: S'inspirer des grands poètes : Leçons de leur art / L'inspiration à travers les méthodes des poètes célèbres / S'inspirer des méthodes des poètes célèbres / Poésie IA pour chaque occasion | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery-2.html:357 | A5 | 중간 | A5 푸터 구조 불일치: gallery-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/gallery-3.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 9 avril 2026 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fr/gallery-3.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fr/gallery-3.html:350 | C2 | 중간 | 같은 언어 href blog/fr/article-4.html의 링크 텍스트 4종류: L'avenir du générateur de poésie IA : remplacera-t-il les écrivains ? / L'avenir des générateurs de poésie IA : Remplaceront-ils les écrivains ? / L'avenir des générateurs de poésie IA : vont-ils remplacer les écrivains ? / Poésie IA vs poésie humaine : comparaison honnête | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery-3.html:361 | A5 | 중간 | A5 푸터 구조 불일치: gallery-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/gallery-4.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 9 avril 2026 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fr/gallery-4.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fr/gallery-4.html:372 | A5 | 중간 | A5 푸터 구조 불일치: gallery-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/gallery.html:123 | C2 | 중간 | 같은 언어 href fr/gallery-1.html의 링크 텍스트 2종류: Poèmes d'amour et d'adieu / Poèmes d'Amour et d'Adieu Du frémissement du premier amour à la sagesse du lâcher-prise, découvrez 7 poèmes qui parcourent le voyage émotionnel de l'amour, accompagnés de commentaires littéraires. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/gallery.html:143 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/fr/index.html:137 | C2 | 중간 | 같은 언어 href fr/faq.html의 링크 텍스트 3종류: FAQ / Questions fréquentes / Voir toutes les FAQ → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/index.html:160 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/fr/index.html:188 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/index.html:188 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fr/index.html:205 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/fr/index.html:206 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fr/index.html:208 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/index.html:209 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/index.html:210 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/index.html:212 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/index.html:212 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fr/index.html:222 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Prenant en charge 31 langues, dont le coréen, l'anglais et le français, vous pouvez rédiger des écrits pour divers objectifs tels que des discours de mariage, des lettres d'amour et des légendes SNS émotionnelles en seulement 10 secondes. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fr/index.html:253 | C2 | 중간 | 같은 언어 href blog/fr/article-1.html의 링크 텍스트 8종류: Comment l'IA écrit de la poésie : La rencontre entre technologie et émotion / Le principe de l'écriture poétique par l'IA / Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion / Principes et avenir du générateur de poèmes IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/index.html:253 | C2 | 중간 | 같은 언어 href blog/fr/article-1.html의 링크 텍스트 8종류: Comment l'IA écrit de la poésie : La rencontre entre technologie et émotion / Le principe de l'écriture poétique par l'IA / Le principe de l'écriture poétique par l'IA : la rencontre de la technologie et de l'émotion / Principes et avenir du générateur de poèmes IA | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/index.html:282 | C2 | 중간 | 같은 언어 href blog/fr/article-2.html의 링크 텍스트 5종류: 5 conseils pour mieux écrire de la poésie avec l'IA / 5 conseils pour écrire de bons poèmes / 5 conseils pour bien écrire de la poésie : création avec l'IA / 7 conseils pour créer des poèmes IA émouvants | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/index.html:288 | C2 | 중간 | 같은 언어 href blog/fr/article-3.html의 링크 텍스트 5종류: S'inspirer des grands poètes : Leçons de leur art / L'inspiration à travers les méthodes des poètes célèbres / S'inspirer des méthodes des poètes célèbres / Poésie IA pour chaque occasion | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/index.html:295 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/privacy.html:85 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/fr/privacy.html:105 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/privacy.html:120 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/privacy.html:158 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 12. Contact | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/privacy.html:162 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/terms.html:111 | C2 | 중간 | 같은 언어 href fr/privacy.html의 링크 텍스트 3종류: Politique de confidentialité / Confidentialité / politique de confidentialité | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/terms.html:128 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 13. Contact | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/fr/terms.html:132 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/fr/use-cases.html:85 | C2 | 중간 | 같은 언어 href fr/index.html의 링크 텍스트 8종류: AI & Poem / ← Retour à la page principale / IA et poème / Générer un poème IA → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/fr/use-cases.html:106 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Avec la prise en charge de 31 langues, dont le français, l'anglais, le japonais, le chinois et l'espagnol, AI & Poem rend la poésie accessible aux gens du monde entier dans leur langue maternelle. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/fr/use-cases.html:158 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/gallery.html:139 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hi/about.html:65 | C2 | 중간 | 같은 언어 href hi/index.html의 링크 텍스트 4종류: AI & Poem / ← मुख्य पृष्ठ पर वापस जाएँ / ऐ और कविता / घर | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hi/about.html:65 | C2 | 중간 | 같은 언어 href hi/index.html의 링크 텍스트 4종류: AI & Poem / ← मुख्य पृष्ठ पर वापस जाएँ / ऐ और कविता / घर | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hi/about.html:72 | C2 | 중간 | 같은 언어 href blog/hi/index.html의 링크 텍스트 3종류: ← सूची में वापस जाएं / ← सूची में वापस जाएँ / ब्लॉग | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hi/about.html:73 | C2 | 중간 | 같은 언어 href hi/contact.html의 링크 텍스트 2종류: संपर्क / संपर्क करें | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hi/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: हम कोरियाई, अंग्रेजी, जापानी, चीनी और फ्रेंच सहित 31 भाषाओं का समर्थन करते हैं, जिससे वैश्विक उपयोगकर्ता अपनी मूल भाषा में कविता का आनंद ले सकते हैं। | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/hi/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hi/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hi/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hi/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/hi/index.html:167 | C2 | 중간 | 같은 언어 href hi/contact.html의 링크 텍스트 2종류: संपर्क / संपर्क करें | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hi/index.html:189 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/hi/index.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/index.html:217 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hi/index.html:233 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/hi/index.html:234 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hi/index.html:236 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/index.html:240 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hi/index.html:250 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: कोरियाई, अंग्रेजी और फ्रेंच सहित 31 भाषाओं का समर्थन करते हुए, आप शादी के भाषण, प्रेम पत्र और भावनात्मक SNS कैप्शन जैसे विभिन्न उद्देश्यों के लिए लेखन को केवल 10 सेकंड में पूरा कर सकते हैं। | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/hi/index.html:281 | C2 | 중간 | 같은 언어 href blog/hi/article-1.html의 링크 텍스트 3종류: AI द्वारा कविता लिखने का सिद्धांत: तकनीक और भावना की मुलाकात / ब्लॉग / AI कविता जनरेटर के सिद्धांत और भविष्य | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hi/index.html:281 | C2 | 중간 | 같은 언어 href blog/hi/article-1.html의 링크 텍스트 3종류: AI द्वारा कविता लिखने का सिद्धांत: तकनीक और भावना की मुलाकात / ब्लॉग / AI कविता जनरेटर के सिद्धांत और भविष्य | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hi/index.html:321 | C2 | 중간 | 같은 언어 href blog/hi/article-2.html의 링크 텍스트 2종류: अच्छी कविता लिखने के 5 टिप्स: AI के साथ रचनात्मकता / दिल को छू लेने वाले शादी के भाषण कैसे लिखें | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hi/index.html:327 | C2 | 중간 | 같은 언어 href blog/hi/article-3.html의 링크 텍스트 2종류: प्रसिद्ध कवियों की लेखन शैली से प्रेरणा लेना / SNS पर लोकप्रिय भावनात्मक उद्धरणों का संग्रह | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hi/index.html:334 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hi/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/privacy.html:85 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hi/privacy.html:105 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/privacy.html:120 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hi/privacy.html:162 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hi/terms.html:132 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hu/about.html:10 | C2 | 중간 | 같은 언어 href hu/about.html의 링크 텍스트 2종류: Rólunk / A szolgáltatásról | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/about.html:65 | C2 | 중간 | 같은 언어 href hu/index.html의 링크 텍스트 5종류: AI & Poem / ← Vissza a főoldalra / Kezdőlap / AI & Vers | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/about.html:73 | C2 | 중간 | 같은 언어 href blog/hu/index.html의 링크 텍스트 2종류: ← Vissza a listához / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/about.html:74 | C2 | 중간 | 같은 언어 href hu/contact.html의 링크 텍스트 2종류: Kapcsolat / Contact | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/about.html:84 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Our Mission | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/about.html:86 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: "Everyone can be a poet." | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/about.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Technical Features | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/about.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1. Large Language Model (LLM) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/about.html:96 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 2. Multilingual Support | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: We support 31 languages including Korean, English, Japanese, Chinese, and French, allowing global users to enjoy poetry in their native language. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/hu/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hu/about.html:113 | C2 | 중간 | 같은 언어 href hu/privacy.html의 링크 텍스트 4종류: Privacy Policy / Adatvédelmi irányelvek / Adatvédelem / Adatvédelmi tájékoztatónk | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/about.html:115 | C2 | 중간 | 같은 언어 href hu/terms.html의 링크 텍스트 4종류: Terms of Service / Szolgáltatási feltételek / Felhasználási feltételek / Feltételek | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/author.html:65 | C2 | 중간 | 같은 언어 href hu/index.html의 링크 텍스트 5종류: AI & Poem / ← Vissza a főoldalra / Kezdőlap / AI & Vers | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/author.html:65 | C2 | 중간 | 같은 언어 href hu/index.html의 링크 텍스트 5종류: AI & Poem / ← Vissza a főoldalra / Kezdőlap / AI & Vers | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hu/author.html:95 | C2 | 중간 | 같은 언어 href hu/terms.html의 링크 텍스트 4종류: Terms of Service / Szolgáltatási feltételek / Felhasználási feltételek / Feltételek | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/contact.html:10 | C2 | 중간 | 같은 언어 href hu/contact.html의 링크 텍스트 2종류: Kapcsolat / Contact | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/contact.html:126 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Tech blog — | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hu/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hu/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31 nyelvet támogatunk, beleértve a magyart. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/hu/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hu/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hu/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/hu/index.html:202 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/hu/index.html:230 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/index.html:230 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hu/index.html:246 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/hu/index.html:247 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hu/index.html:249 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/index.html:250 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/index.html:251 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/index.html:253 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/index.html:253 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hu/index.html:265 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31 nyelvet támogat, beleértve a koreait, az angolt és a franciát, így különféle célokra, például esküvői beszédekre, szerelmes levelekre és érzelmes SNS feliratokra készíthet írásokat mindössze 10 másodperc alatt. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/hu/index.html:317 | C2 | 중간 | 같은 언어 href blog/hu/article-1.html의 링크 텍스트 3종류: Az AI versírás elve: A technológia és az érzelem találkozása / Blogunkat / Az AI Versgenerátorok Alapelvei és Jövője | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/index.html:317 | C2 | 중간 | 같은 언어 href blog/hu/article-1.html의 링크 텍스트 3종류: Az AI versírás elve: A technológia és az érzelem találkozása / Blogunkat / Az AI Versgenerátorok Alapelvei és Jövője | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/index.html:366 | C2 | 중간 | 같은 언어 href blog/hu/article-2.html의 링크 텍스트 2종류: 5 tipp nagyszerű versek írásához: Alkotás AI-val / Hogyan írjunk megható esküvői beszédeket | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/index.html:370 | C2 | 중간 | 같은 언어 href blog/hu/article-3.html의 링크 텍스트 2종류: Inspiráció híres költők mesterségéből / Érzelmes Idézetek Gyűjteménye, Amelyek Népszerűek az SNS-en | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/index.html:376 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hu/privacy.html:9 | C2 | 중간 | 같은 언어 href hu/privacy.html의 링크 텍스트 4종류: Privacy Policy / Adatvédelmi irányelvek / Adatvédelem / Adatvédelmi tájékoztatónk | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/privacy.html:60 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/privacy.html:83 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/hu/privacy.html:103 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/privacy.html:118 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/hu/privacy.html:159 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hu/privacy.html:160 | C2 | 중간 | 같은 언어 href hu/about.html의 링크 텍스트 2종류: Rólunk / A szolgáltatásról | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/privacy.html:168 | C2 | 중간 | 같은 언어 href hu/terms.html의 링크 텍스트 4종류: Terms of Service / Szolgáltatási feltételek / Felhasználási feltételek / Feltételek | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/terms.html:109 | C2 | 중간 | 같은 언어 href hu/privacy.html의 링크 텍스트 4종류: Privacy Policy / Adatvédelmi irányelvek / Adatvédelem / Adatvédelmi tájékoztatónk | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/hu/terms.html:129 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/hu/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/id/about.html:65 | C2 | 중간 | 같은 언어 href id/index.html의 링크 텍스트 5종류: AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama / Rumah | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/about.html:72 | C2 | 중간 | 같은 언어 href blog/id/index.html의 링크 텍스트 3종류: ← Kembali ke Daftar / blog / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Kami mendukung 31 bahasa termasuk Korea, Inggris, Jepang, China, dan Prancis, memungkinkan pengguna global menikmati puisi dalam bahasa ibu mereka. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/id/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/id/about.html:115 | C2 | 중간 | 같은 언어 href id/terms.html의 링크 텍스트 3종류: Syarat dan Ketentuan / Ketentuan Layanan / Syarat Penggunaan | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/author.html:65 | C2 | 중간 | 같은 언어 href id/index.html의 링크 텍스트 5종류: AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama / Rumah | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/author.html:72 | C2 | 중간 | 같은 언어 href blog/id/index.html의 링크 텍스트 3종류: ← Kembali ke Daftar / blog / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/id/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/id/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/id/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Kami mendukung 31 bahasa termasuk Bahasa Indonesia. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/id/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/id/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/id/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/id/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/id/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/id/index.html:235 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/id/index.html:236 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/id/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/index.html:242 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/index.html:242 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/id/index.html:252 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Mendukung 31 bahasa termasuk Korea, Inggris, dan Prancis, Anda dapat menyelesaikan tulisan untuk berbagai tujuan seperti pidato pernikahan, surat cinta, dan keterangan SNS emosional hanya dalam 10 detik. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/id/index.html:283 | C2 | 중간 | 같은 언어 href blog/id/article-1.html의 링크 텍스트 3종류: Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi / Blog / Prinsip dan Masa Depan Generator Puisi AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/index.html:283 | C2 | 중간 | 같은 언어 href blog/id/article-1.html의 링크 텍스트 3종류: Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi / Blog / Prinsip dan Masa Depan Generator Puisi AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/index.html:323 | C2 | 중간 | 같은 언어 href blog/id/article-2.html의 링크 텍스트 2종류: 5 Tips Menulis Puisi dengan Baik: Kreativitas Bersama AI / Cara Menulis Pidato Pernikahan yang Menyentuh | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/index.html:329 | C2 | 중간 | 같은 언어 href blog/id/article-3.html의 링크 텍스트 2종류: Inspirasi dari Gaya Penulisan Penyair Terkenal / Kumpulan Kutipan Emosional Populer di SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/index.html:335 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/id/index.html:346 | C2 | 중간 | 같은 언어 href id/terms.html의 링크 텍스트 3종류: Syarat dan Ketentuan / Ketentuan Layanan / Syarat Penggunaan | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/id/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/privacy.html:85 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/id/privacy.html:105 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/privacy.html:120 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/id/privacy.html:162 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/id/terms.html:132 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/id/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/index.html:175 | C2 | 중간 | 같은 언어 href faq.html의 링크 텍스트 3종류: FAQ / 자주 묻는 질문 / FAQ 전체 보기 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/index.html:225 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/index.html:241 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/index.html:242 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/index.html:248 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/index.html:358 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/it/about.html:10 | C2 | 중간 | 같은 언어 href it/about.html의 링크 텍스트 2종류: Di / Chi siamo | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/about.html:65 | C2 | 중간 | 같은 언어 href it/index.html의 링크 텍스트 6종류: AI & Poem / ← Torna alla home / IA e poesia / Casa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/about.html:65 | C2 | 중간 | 같은 언어 href it/index.html의 링크 텍스트 6종류: AI & Poem / ← Torna alla home / IA e poesia / Casa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/about.html:72 | C2 | 중간 | 같은 언어 href blog/it/index.html의 링크 텍스트 2종류: ← Torna all'elenco / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Supportiamo 31 lingue tra cui coreano, inglese, giapponese, cinese e francese, consentendo agli utenti di tutto il mondo di godersi la poesia nella loro lingua madre. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/it/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/it/about.html:113 | C2 | 중간 | 같은 언어 href it/privacy.html의 링크 텍스트 3종류: Informativa sulla privacy / politica sulla riservatezza / Informativa sulla Privacy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/author.html:65 | C2 | 중간 | 같은 언어 href it/index.html의 링크 텍스트 6종류: AI & Poem / ← Torna alla home / IA e poesia / Casa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/author.html:65 | C2 | 중간 | 같은 언어 href it/index.html의 링크 텍스트 6종류: AI & Poem / ← Torna alla home / IA e poesia / Casa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/it/author.html:87 | C2 | 중간 | 같은 언어 href it/about.html의 링크 텍스트 2종류: Di / Chi siamo | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/author.html:93 | C2 | 중간 | 같은 언어 href it/privacy.html의 링크 텍스트 3종류: Informativa sulla privacy / politica sulla riservatezza / Informativa sulla Privacy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/author.html:95 | C2 | 중간 | 같은 언어 href it/terms.html의 링크 텍스트 4종류: Termini di servizio / Termini di utilizzo / Termini di Servizio / Condizioni di servizio | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/it/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/it/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Supportiamo 31 lingue, tra cui italiano, inglese e coreano. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/it/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/it/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/it/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/it/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/it/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/it/index.html:235 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/it/index.html:236 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/it/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/index.html:242 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/index.html:242 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/it/index.html:252 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Supportando 31 lingue tra cui coreano, inglese e francese, puoi completare scritti per vari scopi come discorsi di matrimonio, lettere d'amore e didascalie emotive per i social network in soli 10 secondi. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/it/index.html:283 | C2 | 중간 | 같은 언어 href blog/it/article-1.html의 링크 텍스트 3종류: Il principio per cui l'AI scrive poesie: l'incontro tra tecnologia ed emozione / blog / Principi e futuro dei generatori di poesie AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/index.html:283 | C2 | 중간 | 같은 언어 href blog/it/article-1.html의 링크 텍스트 3종류: Il principio per cui l'AI scrive poesie: l'incontro tra tecnologia ed emozione / blog / Principi e futuro dei generatori di poesie AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/index.html:323 | C2 | 중간 | 같은 언어 href blog/it/article-2.html의 링크 텍스트 2종류: 5 consigli per scrivere bene poesie: creazione con l'AI / Come scrivere discorsi di matrimonio toccanti | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/index.html:328 | C2 | 중간 | 같은 언어 href blog/it/article-3.html의 링크 텍스트 2종류: Ispirazione dalle tecniche dei poeti famosi / Raccolta di citazioni emotive popolari sui social network | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/index.html:334 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/it/index.html:345 | C2 | 중간 | 같은 언어 href it/terms.html의 링크 텍스트 4종류: Termini di servizio / Termini di utilizzo / Termini di Servizio / Condizioni di servizio | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/it/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/it/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/it/terms.html:109 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 7. Privacy | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/it/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/it/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/404.html:76 | C2 | 중간 | 같은 언어 href ja/index.html의 링크 텍스트 8종류: AI & Poem / ← トップページに戻る / AIと詩 / AIで詩を生成する → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/404.html:76 | C2 | 중간 | 같은 언어 href ja/index.html의 링크 텍스트 8종류: AI & Poem / ← トップページに戻る / AIと詩 / AIで詩を生成する → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/404.html:76 | C2 | 중간 | 같은 언어 href ja/index.html의 링크 텍스트 8종류: AI & Poem / ← トップページに戻る / AIと詩 / AIで詩を生成する → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/404.html:83 | C2 | 중간 | 같은 언어 href blog/ja/index.html의 링크 텍스트 2종류: ← 一覧に戻る / ブログ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/404.html:84 | C2 | 중간 | 같은 언어 href ja/gallery.html의 링크 텍스트 2종류: ギャラリー / ← ギャラリーに戻る | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/404.html:85 | C2 | 중간 | 같은 언어 href ja/faq.html의 링크 텍스트 3종류: FAQ / よくある質問 / FAQ一覧を見る → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/404.html:85 | C2 | 중간 | 같은 언어 href ja/faq.html의 링크 텍스트 3종류: FAQ / よくある質問 / FAQ一覧を見る → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/404.html:113 | C2 | 중간 | 같은 언어 href blog/ja/article-1.html의 링크 텍스트 7종류: AIが詩を書く仕組み：技術と感性の出会い / AIが詩を書く原理 / AIが詩を書く原理：技術と感性の出会い / AI詩ジェネレーターの原理と未来 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/404.html:117 | C2 | 중간 | 같은 언어 href ja/gallery-1.html의 링크 텍스트 2종류: 愛と別れの詩 / 愛と別れの詩 初恋のときめきから別れの成熟まで、愛の感情の旅を綴った詩と文学的解説をお届けします。 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/404.html:127 | A5 | 중간 | A5 푸터 구조 불일치: 404.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/404.html:138 | C2 | 중간 | 같은 언어 href ja/author.html의 링크 텍스트 4종류: 著者プロフィールを見る → / 著者について / 著者紹介 / 著者紹介をもっと見る → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/about.html:67 | C2 | 중간 | 같은 언어 href ja/index.html의 링크 텍스트 8종류: AI & Poem / ← トップページに戻る / AIと詩 / AIで詩を生成する → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/about.html:101 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 韓国語、英語、日本語、中国語、フランス語など31言語に対応しており、世界中のユーザーが母国語で詩を楽しむことができます。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ja/about.html:110 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/author.html:28 | D1 | 중간 | 비한국어 JSON-LD $.alternateName에 한글 포함: 류재국 | JSON-LD 문자열을 페이지 언어로 번역. |
| frontend/ja/author.html:103 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk（류재국）は、AI & Poemサービスの企画者兼開発者です。人工知能技術と文学を融合し、言語と国境を超えた詩的コミュニケーションの場を創り上げています。 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/author.html:109 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poemは31言語に対応した多言語詩生成サービスであり、各言語の詩的伝統と文化的文脈を考慮したプロンプト設計に深い関心を寄せています。トランスフォーマーアーキテクチャに基づく詩の生成、TTS（テキスト音声変換）統合、コンテンツ安全性フィルタリングなど、技術的完成度を継続的に高めています。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ja/author.html:119 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/contact.html:38 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/contact.html:136 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/contact.html:150 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/contact.html:150 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ja/faq.html:243 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 日本語、英語、韓国語、中国語、スペイン語、フランス語など31言語に対応しています。多言語詩創作の秘密は | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ja/faq.html:243 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31言語で詩を書く | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ja/faq.html:273 | C2 | 중간 | 같은 언어 href blog/ja/article-1.html의 링크 텍스트 7종류: AIが詩を書く仕組み：技術と感性の出会い / AIが詩を書く原理 / AIが詩を書く原理：技術と感性の出会い / AI詩ジェネレーターの原理と未来 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/faq.html:283 | C2 | 중간 | 같은 언어 href blog/ja/article-8.html의 링크 텍스트 2종류: コンピュータが詩を書き始めた日：AI詩の歴史 / コンピュータが詩を書き始めた日 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/faq.html:298 | C2 | 중간 | 같은 언어 href blog/ja/article-10.html의 링크 텍스트 3종류: AIが書いた詩、誰のものか：著作権と倫理の争点 / AIが書いた詩は誰のもの？：著作権と倫理の争点 / AIが書いた詩は誰のもの？ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/faq.html:303 | C2 | 중간 | 같은 언어 href blog/ja/article-9.html의 링크 텍스트 2종류: 教室で出会ったAI詩人：AI詩生成器の教育的活用 / 教室で出会ったAI詩人 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/faq.html:314 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/faq.html:320 | C2 | 중간 | 같은 언어 href ja/author.html의 링크 텍스트 4종류: 著者プロフィールを見る → / 著者について / 著者紹介 / 著者紹介をもっと見る → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-1.html:59 | C2 | 중간 | 같은 언어 href ja/author.html의 링크 텍스트 4종류: 著者プロフィールを見る → / 著者について / 著者紹介 / 著者紹介をもっと見る → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-1.html:80 | C2 | 중간 | 같은 언어 href ja/gallery.html의 링크 텍스트 2종류: ギャラリー / ← ギャラリーに戻る | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-1.html:105 | C2 | 중간 | 같은 언어 href ja/index.html의 링크 텍스트 8종류: AI & Poem / ← トップページに戻る / AIと詩 / AIで詩を生成する → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-1.html:123 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 2026年4月9日 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/gallery-1.html:123 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/gallery-1.html:323 | C2 | 중간 | 같은 언어 href blog/ja/article-2.html의 링크 텍스트 5종류: 詩をうまく書く5つのコツ：AIと一緒に創作 / 詩を上手に書く5つのコツ / 詩を上手に書く5つのヒント：AIと共に創る / 感動的なAI詩を作る7つのコツ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-1.html:324 | C2 | 중간 | 같은 언어 href blog/ja/article-5.html의 링크 텍스트 3종류: 感動的な祝辞と手紙、AIで10秒で完成 / 感動的なスピーチと手紙、AIで10秒で完成させる / AIで特別な祝辞と手紙を書く | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-1.html:325 | C2 | 중간 | 같은 언어 href blog/ja/article-6.html의 링크 텍스트 4종류: AI詩と感情の癒し / AI詩と感情の癒し：ライティングセラピーの新たな可能性 / AI詩と感情の癒し：書くセラピーの新しい可能性 / AI詩と感情の癒し：文学療法の新しいツール | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-1.html:336 | A5 | 중간 | A5 푸터 구조 불일치: gallery-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/gallery-2.html:123 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 2026年4月9日 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/gallery-2.html:123 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/gallery-2.html:375 | C2 | 중간 | 같은 언어 href blog/ja/article-1.html의 링크 텍스트 7종류: AIが詩を書く仕組み：技術と感性の出会い / AIが詩を書く原理 / AIが詩を書く原理：技術と感性の出会い / AI詩ジェネレーターの原理と未来 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-2.html:376 | C2 | 중간 | 같은 언어 href blog/ja/article-3.html의 링크 텍스트 6종류: 有名詩人の作法から学ぶインスピレーション / 有名な詩人の作法から学ぶインスピレーション / 有名詩人たちの作法から学ぶインスピレーション / AIが書いた詩の文学的価値を考える | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-2.html:387 | A5 | 중간 | A5 푸터 구조 불일치: gallery-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/gallery-3.html:123 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 2026年4月9日 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/gallery-3.html:123 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/gallery-3.html:393 | C2 | 중간 | 같은 언어 href blog/ja/article-4.html의 링크 텍스트 3종류: AI詩生成器の未来：作家を代替するか？ / AI詩生成器の未来：作家に取って代わるのか？ / 教育現場でのAI詩の活用法 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-3.html:404 | A5 | 중간 | A5 푸터 구조 불일치: gallery-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/gallery-4.html:123 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 2026年4月9日 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/gallery-4.html:123 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/gallery-4.html:379 | C2 | 중간 | 같은 언어 href blog/ja/article-3.html의 링크 텍스트 6종류: 有名詩人の作法から学ぶインスピレーション / 有名な詩人の作法から学ぶインスピレーション / 有名詩人たちの作法から学ぶインスピレーション / AIが書いた詩の文学的価値を考える | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery-4.html:390 | A5 | 중간 | A5 푸터 구조 불일치: gallery-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/gallery.html:123 | C2 | 중간 | 같은 언어 href ja/gallery-1.html의 링크 텍스트 2종류: 愛と別れの詩 / 愛と別れの詩 初恋のときめきから別れの成熟まで、愛の感情の旅を綴った詩と文学的解説をお届けします。 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/gallery.html:143 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/ja/index.html:140 | C2 | 중간 | 같은 언어 href ja/faq.html의 링크 텍스트 3종류: FAQ / よくある質問 / FAQ一覧を見る → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/index.html:163 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ja/index.html:190 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/index.html:190 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ja/index.html:206 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/ja/index.html:207 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ja/index.html:209 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/index.html:210 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/index.html:211 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/index.html:213 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/index.html:213 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ja/index.html:223 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 韓国語、英語、フランス語を含む31言語をサポートしており、結婚式のスピーチ、ラブレター、感情的なSNSのキャプションなど、さまざまな目的の文章をわずか10秒で完成させることができます。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ja/index.html:249 | C2 | 중간 | 같은 언어 href blog/ja/article-1.html의 링크 텍스트 7종류: AIが詩を書く仕組み：技術と感性の出会い / AIが詩を書く原理 / AIが詩を書く原理：技術と感性の出会い / AI詩ジェネレーターの原理と未来 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/index.html:275 | C2 | 중간 | 같은 언어 href blog/ja/article-2.html의 링크 텍스트 5종류: 詩をうまく書く5つのコツ：AIと一緒に創作 / 詩を上手に書く5つのコツ / 詩を上手に書く5つのヒント：AIと共に創る / 感動的なAI詩を作る7つのコツ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/index.html:279 | C2 | 중간 | 같은 언어 href blog/ja/article-3.html의 링크 텍스트 6종류: 有名詩人の作法から学ぶインスピレーション / 有名な詩人の作法から学ぶインスピレーション / 有名詩人たちの作法から学ぶインスピレーション / AIが書いた詩の文学的価値を考える | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/index.html:284 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/privacy.html:85 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ja/privacy.html:105 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/privacy.html:120 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ja/privacy.html:162 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/terms.html:132 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ja/use-cases.html:85 | C2 | 중간 | 같은 언어 href ja/index.html의 링크 텍스트 8종류: AI & Poem / ← トップページに戻る / AIと詩 / AIで詩を生成する → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ja/use-cases.html:106 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 日本語、英語、韓国語、中国語、フランス語など31言語に対応しているため、世界中どこからでも母国語で詩を楽しめます。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ja/use-cases.html:158 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ko/404.html:79 | C2 | 중간 | 같은 언어 href ko/index.html의 링크 텍스트 6종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/404.html:79 | C2 | 중간 | 같은 언어 href ko/index.html의 링크 텍스트 6종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/404.html:85 | C2 | 중간 | 같은 언어 href ko/about.html의 링크 텍스트 2종류: 소개 / 서비스 소개 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/404.html:88 | C2 | 중간 | 같은 언어 href ko/faq.html의 링크 텍스트 3종류: FAQ / 자주 묻는 질문 / FAQ 전체 보기 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/404.html:116 | C2 | 중간 | 같은 언어 href blog/ko/article-1.html의 링크 텍스트 4종류: AI가 시를 쓰는 원리: 기술과 감성의 만남 / AI가 시를 쓰는 원리 / AI 시 생성기의 원리와 미래 / AI 시 생성기의 원리와 활용법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/404.html:120 | C2 | 중간 | 같은 언어 href ko/gallery-1.html의 링크 텍스트 2종류: 시 갤러리 / 사랑과 이별의 시 첫사랑의 떨림에서 이별을 받아들이는 자리까지, 사랑이 지나는 감정의 길을 7편의 시와 해설로 따라갑니다. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/404.html:144 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/404.html:144 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/about.html:68 | C2 | 중간 | 같은 언어 href ko/index.html의 링크 텍스트 6종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/about.html:76 | C2 | 중간 | 같은 언어 href ko/author.html의 링크 텍스트 5종류: 저자 프로필 보기 → / 저자 / 저자 소개 / 저자 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/about.html:76 | C2 | 중간 | 같은 언어 href ko/author.html의 링크 텍스트 5종류: 저자 프로필 보기 → / 저자 / 저자 소개 / 저자 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/about.html:112 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 한국어, 영어, 일본어, 중국어, 프랑스어 등 31개 언어를 지원하여 글로벌 사용자들이 모국어로 시를 즐깁니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ko/about.html:140 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/about.html:140 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/author.html:8 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ai-and-poem.art | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/author.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/author.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/author.html:120 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem은 31개 언어를 지원하는 다국어 시 생성 서비스입니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ko/author.html:150 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/author.html:150 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/contact.html:39 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/contact.html:40 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/contact.html:149 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/contact.html:149 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/faq.html:208 | C2 | 중간 | 같은 언어 href ko/gallery.html의 링크 텍스트 3종류: 갤러리 / 갤러리 페이지 / ← 갤러리로 돌아가기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/faq.html:210 | C2 | 중간 | 같은 언어 href ko/contact.html의 링크 텍스트 2종류: 문의하기 / 문의 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/faq.html:246 | C2 | 중간 | 같은 언어 href blog/ko/article-7.html의 링크 텍스트 3종류: 31개 언어로 시를 쓰다: AI 다국어 시 창작의 비밀 / 31개 언어로 시를 쓰다 / 31개 언어로 시 쓰기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/faq.html:246 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어를 포함해 31개 언어를 지원합니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ko/faq.html:246 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 31개 언어로 시 쓰기 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ko/faq.html:286 | C2 | 중간 | 같은 언어 href blog/ko/article-8.html의 링크 텍스트 2종류: 컴퓨터가 시를 쓰기 시작한 날: AI 시의 역사 / 컴퓨터가 시를 쓰기 시작한 날 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/faq.html:301 | C2 | 중간 | 같은 언어 href blog/ko/article-10.html의 링크 텍스트 2종류: AI가 쓴 시, 누구의 것인가: 저작권과 윤리의 쟁점 / AI가 쓴 시는 누구의 것인가 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/faq.html:306 | C2 | 중간 | 같은 언어 href blog/ko/article-9.html의 링크 텍스트 2종류: 교실에서 만난 AI 시인: AI 시 생성기의 교육적 활용 / 교실에서 만난 AI 시인 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/faq.html:331 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/faq.html:331 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/gallery-1.html:69 | C2 | 중간 | 같은 언어 href ko/author.html의 링크 텍스트 5종류: 저자 프로필 보기 → / 저자 / 저자 소개 / 저자 페이지 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery-1.html:91 | C2 | 중간 | 같은 언어 href ko/gallery.html의 링크 텍스트 3종류: 갤러리 / 갤러리 페이지 / ← 갤러리로 돌아가기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery-1.html:116 | C2 | 중간 | 같은 언어 href ko/index.html의 링크 텍스트 6종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery-1.html:336 | C2 | 중간 | 같은 언어 href blog/ko/article-2.html의 링크 텍스트 4종류: 시를 잘 쓰는 5가지 팁 / 시를 잘 쓰는 5가지 팁: AI와 함께하는 창작 / 감동적인 AI 시를 만드는 7가지 팁 / 감동적인 결혼식 축사 쓰는 법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery-1.html:337 | C2 | 중간 | 같은 언어 href blog/ko/article-5.html의 링크 텍스트 2종류: 감동적인 축사와 편지, AI로 10초 만에 완성하기 / AI로 특별한 축사와 편지 쓰기 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery-1.html:338 | C2 | 중간 | 같은 언어 href blog/ko/article-6.html의 링크 텍스트 3종류: AI 시와 감정 치유 / AI 시와 감정 치유: 글쓰기 테라피의 새로운 가능성 / AI 시와 감정 치유: 문학 치료의 새로운 도구 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery-1.html:363 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/gallery-1.html:363 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/gallery-2.html:338 | C2 | 중간 | 같은 언어 href blog/ko/article-1.html의 링크 텍스트 4종류: AI가 시를 쓰는 원리: 기술과 감성의 만남 / AI가 시를 쓰는 원리 / AI 시 생성기의 원리와 미래 / AI 시 생성기의 원리와 활용법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery-2.html:339 | C2 | 중간 | 같은 언어 href blog/ko/article-3.html의 링크 텍스트 3종류: 유명 시인들의 작법에서 배우는 영감 / 시인처럼 쓰는 법: AI 시대의 창작 기법 / SNS에서 인기 있는 감성 글귀 모음 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery-2.html:364 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/gallery-2.html:364 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/gallery-3.html:346 | C2 | 중간 | 같은 언어 href blog/ko/article-4.html의 링크 텍스트 2종류: AI 시 생성기의 미래: 작가를 대체할까? / AI 시의 미래: 기술과 감성의 만남 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery-3.html:371 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/gallery-3.html:371 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/gallery-4.html:377 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/gallery-4.html:377 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/gallery.html:126 | C2 | 중간 | 같은 언어 href ko/gallery-1.html의 링크 텍스트 2종류: 시 갤러리 / 사랑과 이별의 시 첫사랑의 떨림에서 이별을 받아들이는 자리까지, 사랑이 지나는 감정의 길을 7편의 시와 해설로 따라갑니다. | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/gallery.html:160 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/gallery.html:160 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/ko/index.html:174 | C2 | 중간 | 같은 언어 href ko/faq.html의 링크 텍스트 3종류: FAQ / 자주 묻는 질문 / FAQ 전체 보기 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/index.html:224 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/index.html:224 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/index.html:240 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/ko/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/index.html:243 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/index.html:244 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/index.html:245 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/index.html:247 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/index.html:247 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/index.html:333 | C2 | 중간 | 같은 언어 href blog/ko/article-2.html의 링크 텍스트 4종류: 시를 잘 쓰는 5가지 팁 / 시를 잘 쓰는 5가지 팁: AI와 함께하는 창작 / 감동적인 AI 시를 만드는 7가지 팁 / 감동적인 결혼식 축사 쓰는 법 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/index.html:337 | C2 | 중간 | 같은 언어 href blog/ko/article-3.html의 링크 텍스트 3종류: 유명 시인들의 작법에서 배우는 영감 / 시인처럼 쓰는 법: AI 시대의 창작 기법 / SNS에서 인기 있는 감성 글귀 모음 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/index.html:356 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/index.html:356 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/privacy.html:103 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/privacy.html:123 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/privacy.html:138 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/privacy.html:208 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/privacy.html:208 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/terms.html:169 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/terms.html:169 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ko/use-cases.html:88 | C2 | 중간 | 같은 언어 href ko/index.html의 링크 텍스트 6종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ko/use-cases.html:109 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 한국어, 영어, 일본어, 중국어, 프랑스어 등 31개 언어를 지원하니 전 세계 어디서든 모국어로 시를 즐기게 됩니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ko/use-cases.html:177 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ko/use-cases.html:177 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/mn/about.html:10 | C2 | 중간 | 같은 언어 href mn/about.html의 링크 텍스트 2종류: Тухай / Бидний тухай | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/about.html:65 | C2 | 중간 | 같은 언어 href mn/index.html의 링크 텍스트 6종류: AI & Poem / ← Үндсэн хуудас руу буцах / AI ба шүлэг / Гэр | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/about.html:65 | C2 | 중간 | 같은 언어 href mn/index.html의 링크 텍스트 6종류: AI & Poem / ← Үндсэн хуудас руу буцах / AI ба шүлэг / Гэр | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/about.html:72 | C2 | 중간 | 같은 언어 href blog/mn/index.html의 링크 텍스트 3종류: ← Жагсаалт руу буцах / Багана / Блог | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/about.html:73 | C2 | 중간 | 같은 언어 href mn/contact.html의 링크 텍스트 2종류: Харилцах / Холбоо барих | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/mn/author.html:65 | C2 | 중간 | 같은 언어 href mn/index.html의 링크 텍스트 6종류: AI & Poem / ← Үндсэн хуудас руу буцах / AI ба шүлэг / Гэр | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/author.html:65 | C2 | 중간 | 같은 언어 href mn/index.html의 링크 텍스트 6종류: AI & Poem / ← Үндсэн хуудас руу буцах / AI ба шүлэг / Гэр | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/author.html:72 | C2 | 중간 | 같은 언어 href blog/mn/index.html의 링크 텍스트 3종류: ← Жагсаалт руу буцах / Багана / Блог | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/author.html:73 | C2 | 중간 | 같은 언어 href mn/contact.html의 링크 텍스트 2종류: Харилцах / Холбоо барих | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/mn/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/mn/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/mn/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Монгол, англи зэрэг 31 хэлийг дэмждэг. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/mn/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/mn/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/mn/index.html:166 | C2 | 중간 | 같은 언어 href mn/about.html의 링크 텍스트 2종류: Тухай / Бидний тухай | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/mn/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/mn/index.html:235 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/mn/index.html:236 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/mn/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/index.html:242 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/index.html:242 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/mn/index.html:252 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Солонгос, Англи, Франц зэрэг 31 хэлийг дэмждэг тул та хуримын үг, хайрын захидал, сэтгэл хөдлөлийн SNS тайлбар зэрэг янз бүрийн зорилгоор бичвэрүүдийг ердөө 10 секундын дотор дуусгах боломжтой. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/mn/index.html:283 | C2 | 중간 | 같은 언어 href blog/mn/article-1.html의 링크 텍스트 3종류: AI шүлэг бичих зарчим: Технологи ба сэтгэл хөдлөлийн уулзалт / Блог / AI шүлэг үүсгэгчийн зарчим ба ирээдүй | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/index.html:283 | C2 | 중간 | 같은 언어 href blog/mn/article-1.html의 링크 텍스트 3종류: AI шүлэг бичих зарчим: Технологи ба сэтгэл хөдлөлийн уулзалт / Блог / AI шүлэг үүсгэгчийн зарчим ба ирээдүй | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/index.html:325 | C2 | 중간 | 같은 언어 href blog/mn/article-2.html의 링크 텍스트 2종류: Гайхалтай шүлэг бичих 5 зөвлөгөө: AI-тай хамтран бүтээх / Сэтгэл хөдөлгөм хуримын үг хэрхэн бичих вэ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/index.html:331 | C2 | 중간 | 같은 언어 href blog/mn/article-3.html의 링크 텍스트 2종류: Алдартай яруу найрагчдын ур чадвараас авах урам зориг / SNS дээр алдартай сэтгэл хөдлөлийн ишлэлүүдийн цуглуулга | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/mn/index.html:338 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/mn/privacy.html:65 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/privacy.html:89 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/mn/privacy.html:109 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/privacy.html:124 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/mn/privacy.html:166 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/mn/terms.html:133 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/mn/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ms/about.html:10 | C2 | 중간 | 같은 언어 href ms/about.html의 링크 텍스트 2종류: Mengenai / Tentang | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/about.html:65 | C2 | 중간 | 같은 언어 href ms/index.html의 링크 텍스트 6종류: AI & Puem / AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/about.html:72 | C2 | 중간 | 같은 언어 href blog/ms/index.html의 링크 텍스트 2종류: ← Kembali ke Senarai / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Kami menyokong 31 bahasa termasuk Korea, Inggeris, Jepun, Cina, dan Perancis, yang membolehkan pengguna global menikmati puisi dalam bahasa ibunda mereka. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ms/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ms/about.html:115 | C2 | 중간 | 같은 언어 href ms/terms.html의 링크 텍스트 3종류: Terma dan Syarat / Syarat Perkhidmatan / Syarat Penggunaan | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/author.html:65 | C2 | 중간 | 같은 언어 href ms/index.html의 링크 텍스트 6종류: AI & Puem / AI & Poem / AI & Puisi / ← Kembali ke Halaman Utama | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ms/author.html:87 | C2 | 중간 | 같은 언어 href ms/about.html의 링크 텍스트 2종류: Mengenai / Tentang | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ms/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ms/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Kami menyokong 31 bahasa termasuk Bahasa Melayu. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ms/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ms/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ms/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/ms/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ms/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ms/index.html:235 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/ms/index.html:236 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ms/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/index.html:242 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/index.html:242 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ms/index.html:252 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Menyokong 31 bahasa termasuk Korea, Inggeris dan Perancis, anda boleh melengkapkan penulisan untuk pelbagai tujuan seperti ucapan perkahwinan, surat cinta dan kapsyen SNS emosi dalam masa 10 saat sahaja. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ms/index.html:283 | C2 | 중간 | 같은 언어 href blog/ms/article-1.html의 링크 텍스트 3종류: Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi / Blog / Prinsip dan Masa Depan Penjana Puisi AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/index.html:283 | C2 | 중간 | 같은 언어 href blog/ms/article-1.html의 링크 텍스트 3종류: Prinsip AI Menulis Puisi: Pertemuan Teknologi dan Emosi / Blog / Prinsip dan Masa Depan Penjana Puisi AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/index.html:323 | C2 | 중간 | 같은 언어 href blog/ms/article-2.html의 링크 텍스트 2종류: 5 Tip Menulis Puisi yang Baik: Kreativiti Bersama AI / Cara Menulis Ucapan Perkahwinan yang Menyentuh Hati | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/index.html:329 | C2 | 중간 | 같은 언어 href blog/ms/article-3.html의 링크 텍스트 2종류: Inspirasi dari Cara Penulisan Penyair Terkenal / Koleksi Petikan Emosi Popular di SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/index.html:335 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ms/index.html:346 | C2 | 중간 | 같은 언어 href ms/terms.html의 링크 텍스트 3종류: Terma dan Syarat / Syarat Perkhidmatan / Syarat Penggunaan | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ms/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ms/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ms/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ms/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ms/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/nl/about.html:10 | C2 | 중간 | 같은 언어 href nl/about.html의 링크 텍스트 3종류: Over ons / Over / Over de dienst | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/about.html:65 | C2 | 중간 | 같은 언어 href nl/index.html의 링크 텍스트 4종류: AI & Poem / ← Terug naar Home / Home / AI & Gedicht | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/about.html:73 | C2 | 중간 | 같은 언어 href blog/nl/index.html의 링크 텍스트 2종류: ← Terug naar lijst / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/about.html:84 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Our Mission | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/about.html:86 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: "Everyone can be a poet." | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/about.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Technical Features | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/about.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1. Large Language Model (LLM) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/about.html:96 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 2. Multilingual Support | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: We support 31 languages including Korean, English, Japanese, Chinese, and French, allowing global users to enjoy poetry in their native language. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/nl/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/nl/about.html:113 | C2 | 중간 | 같은 언어 href nl/privacy.html의 링크 텍스트 4종류: Privacy Policy / Privacybeleid / Privacy / privacybeleid | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/about.html:115 | C2 | 중간 | 같은 언어 href nl/terms.html의 링크 텍스트 3종류: Terms of Service / Servicevoorwaarden / Voorwaarden | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/author.html:65 | C2 | 중간 | 같은 언어 href nl/index.html의 링크 텍스트 4종류: AI & Poem / ← Terug naar Home / Home / AI & Gedicht | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/nl/author.html:87 | C2 | 중간 | 같은 언어 href nl/about.html의 링크 텍스트 3종류: Over ons / Over / Over de dienst | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/nl/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/nl/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: We ondersteunen 31 talen, waaronder Nederlands. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/nl/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/nl/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/nl/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/nl/index.html:202 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/nl/index.html:230 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/index.html:230 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/nl/index.html:246 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/nl/index.html:247 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/nl/index.html:249 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/index.html:250 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/index.html:251 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/index.html:253 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/index.html:253 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/nl/index.html:265 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Met ondersteuning voor 31 talen, waaronder Koreaans, Engels en Frans, kunt u teksten voor diverse doeleinden voltooien, zoals bruiloftstoespraken, liefdesbrieven en emotionele SNS-onderschriften in slechts 10 seconden. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/nl/index.html:320 | C2 | 중간 | 같은 언어 href blog/nl/article-1.html의 링크 텍스트 3종류: Het principe van AI die poëzie schrijft: De ontmoeting van technologie en emotie / Blog / Principes en Toekomst van AI Gedicht Generatoren | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/index.html:320 | C2 | 중간 | 같은 언어 href blog/nl/article-1.html의 링크 텍스트 3종류: Het principe van AI die poëzie schrijft: De ontmoeting van technologie en emotie / Blog / Principes en Toekomst van AI Gedicht Generatoren | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/index.html:368 | C2 | 중간 | 같은 언어 href blog/nl/article-2.html의 링크 텍스트 2종류: 5 tips voor het schrijven van geweldige poëzie / Hoe schrijft u ontroerende bruiloftstoespraken | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/index.html:372 | C2 | 중간 | 같은 언어 href blog/nl/article-3.html의 링크 텍스트 2종류: Inspiratie uit het ambacht van beroemde dichters / Verzameling van Emotionele Citaten Populair op SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/index.html:377 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/nl/privacy.html:9 | C2 | 중간 | 같은 언어 href nl/privacy.html의 링크 텍스트 4종류: Privacy Policy / Privacybeleid / Privacy / privacybeleid | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/privacy.html:60 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/privacy.html:83 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/nl/privacy.html:103 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/privacy.html:118 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/privacy.html:156 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 12. Contact | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/privacy.html:159 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/nl/privacy.html:160 | C2 | 중간 | 같은 언어 href nl/about.html의 링크 텍스트 3종류: Over ons / Over / Over de dienst | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/privacy.html:168 | C2 | 중간 | 같은 언어 href nl/terms.html의 링크 텍스트 3종류: Terms of Service / Servicevoorwaarden / Voorwaarden | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/terms.html:108 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 7. Privacy | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/terms.html:109 | C2 | 중간 | 같은 언어 href nl/privacy.html의 링크 텍스트 4종류: Privacy Policy / Privacybeleid / Privacy / privacybeleid | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/nl/terms.html:126 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 13. Contact | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/nl/terms.html:129 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/nl/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/no/about.html:10 | C2 | 중간 | 같은 언어 href no/about.html의 링크 텍스트 3종류: Om oss / Om / Om tjenesten | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/about.html:65 | C2 | 중간 | 같은 언어 href no/index.html의 링크 텍스트 4종류: AI & Poem / ← Tilbake til forsiden / Hjem / AI & Dikt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/about.html:73 | C2 | 중간 | 같은 언어 href blog/no/index.html의 링크 텍스트 2종류: ← Tilbake til listen / Blogg | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/about.html:74 | C2 | 중간 | 같은 언어 href no/contact.html의 링크 텍스트 2종류: Kontakt / Contact | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/about.html:84 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Our Mission | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/about.html:86 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: "Everyone can be a poet." | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/about.html:90 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Technical Features | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/about.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1. Large Language Model (LLM) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/about.html:96 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 2. Multilingual Support | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: We support 31 languages including Korean, English, Japanese, Chinese, and French, allowing global users to enjoy poetry in their native language. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/no/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/no/about.html:113 | C2 | 중간 | 같은 언어 href no/privacy.html의 링크 텍스트 5종류: Privacy Policy / Personvernerklæring / Personvernregler / Personvern | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/about.html:115 | C2 | 중간 | 같은 언어 href no/terms.html의 링크 텍스트 4종류: Terms of Service / Vilkår for bruk / Tjenestevilkår / Vilkår | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/author.html:65 | C2 | 중간 | 같은 언어 href no/index.html의 링크 텍스트 4종류: AI & Poem / ← Tilbake til forsiden / Hjem / AI & Dikt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/no/author.html:87 | C2 | 중간 | 같은 언어 href no/about.html의 링크 텍스트 3종류: Om oss / Om / Om tjenesten | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/author.html:93 | C2 | 중간 | 같은 언어 href no/privacy.html의 링크 텍스트 5종류: Privacy Policy / Personvernerklæring / Personvernregler / Personvern | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/author.html:95 | C2 | 중간 | 같은 언어 href no/terms.html의 링크 텍스트 4종류: Terms of Service / Vilkår for bruk / Tjenestevilkår / Vilkår | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/contact.html:10 | C2 | 중간 | 같은 언어 href no/contact.html의 링크 텍스트 2종류: Kontakt / Contact | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/no/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/no/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Vi støtter 31 språk, inkludert norsk. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/no/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/no/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/no/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/no/index.html:202 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/no/index.html:230 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/index.html:230 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/no/index.html:246 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/no/index.html:247 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/no/index.html:249 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/index.html:250 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/index.html:251 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/index.html:253 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/index.html:253 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/no/index.html:265 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Støtter 31 språk, inkludert koreansk, engelsk og fransk, du kan fullføre tekster for ulike formål som bryllupstaler, kjærlighetsbrev og emosjonelle SNS-tekster på bare 10 sekunder. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/no/index.html:317 | C2 | 중간 | 같은 언어 href blog/no/article-1.html의 링크 텍스트 3종류: Prinsippet bak AI-poesi: Møtet mellom teknologi og følelser / Blogg / Prinsipper og Fremtid for AI Diktgeneratorer | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/index.html:317 | C2 | 중간 | 같은 언어 href blog/no/article-1.html의 링크 텍스트 3종류: Prinsippet bak AI-poesi: Møtet mellom teknologi og følelser / Blogg / Prinsipper og Fremtid for AI Diktgeneratorer | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/index.html:363 | C2 | 중간 | 같은 언어 href blog/no/article-2.html의 링크 텍스트 2종류: 5 tips for å skrive gode dikt: Skaping med AI / Hvordan skrive rørende bryllupstaler | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/index.html:367 | C2 | 중간 | 같은 언어 href blog/no/article-3.html의 링크 텍스트 2종류: Inspirasjon fra kjente dikteres håndverk / Samling av Emosjonelle Sitater Populære på SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/index.html:372 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/no/privacy.html:9 | C2 | 중간 | 같은 언어 href no/privacy.html의 링크 텍스트 5종류: Privacy Policy / Personvernerklæring / Personvernregler / Personvern | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/privacy.html:60 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/privacy.html:83 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/no/privacy.html:103 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/privacy.html:118 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/no/privacy.html:159 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/no/privacy.html:160 | C2 | 중간 | 같은 언어 href no/about.html의 링크 텍스트 3종류: Om oss / Om / Om tjenesten | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/privacy.html:168 | C2 | 중간 | 같은 언어 href no/terms.html의 링크 텍스트 4종류: Terms of Service / Vilkår for bruk / Tjenestevilkår / Vilkår | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/terms.html:109 | C2 | 중간 | 같은 언어 href no/privacy.html의 링크 텍스트 5종류: Privacy Policy / Personvernerklæring / Personvernregler / Personvern | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/no/terms.html:129 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/no/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pl/about.html:10 | C2 | 중간 | 같은 언어 href pl/about.html의 링크 텍스트 2종류: O / O nas | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/about.html:65 | C2 | 중간 | 같은 언어 href pl/index.html의 링크 텍스트 6종류: AI & Poem / ← Wróć do strony głównej / AI i wiersz / Dom | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/about.html:65 | C2 | 중간 | 같은 언어 href pl/index.html의 링크 텍스트 6종류: AI & Poem / ← Wróć do strony głównej / AI i wiersz / Dom | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/about.html:72 | C2 | 중간 | 같은 언어 href blog/pl/index.html의 링크 텍스트 4종류: ← Wróć do listy / ← Powrót do listy / Bloga / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Obsługujemy 31 języków, w tym koreański, angielski, japoński, chiński i francuski, dzięki czemu użytkownicy na całym świecie mogą cieszyć się poezją w swoim ojczystym języku. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/pl/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pl/about.html:115 | C2 | 중간 | 같은 언어 href pl/terms.html의 링크 텍스트 3종류: Warunki korzystania / Warunki świadczenia usług / Regulamin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/author.html:65 | C2 | 중간 | 같은 언어 href pl/index.html의 링크 텍스트 6종류: AI & Poem / ← Wróć do strony głównej / AI i wiersz / Dom | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/author.html:65 | C2 | 중간 | 같은 언어 href pl/index.html의 링크 텍스트 6종류: AI & Poem / ← Wróć do strony głównej / AI i wiersz / Dom | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/author.html:72 | C2 | 중간 | 같은 언어 href blog/pl/index.html의 링크 텍스트 4종류: ← Wróć do listy / ← Powrót do listy / Bloga / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pl/author.html:87 | C2 | 중간 | 같은 언어 href pl/about.html의 링크 텍스트 2종류: O / O nas | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/author.html:95 | C2 | 중간 | 같은 언어 href pl/terms.html의 링크 텍스트 3종류: Warunki korzystania / Warunki świadczenia usług / Regulamin | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pl/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pl/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Obsługujemy 31 języków, w tym polski. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/pl/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pl/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pl/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/pl/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/pl/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pl/index.html:234 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/pl/index.html:235 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pl/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/index.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pl/index.html:251 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Obsługując 31 języków, w tym koreański, angielski i francuski, możesz ukończyć teksty do różnych celów, takich jak przemówienia ślubne, listy miłosne i emocjonalne podpisy w mediach społecznościowych w zaledwie 10 sekund. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/pl/index.html:281 | C2 | 중간 | 같은 언어 href blog/pl/article-1.html의 링크 텍스트 3종류: Jak AI pisze wiersze: Spotkanie technologii i emocji / blogu / Zasady i przyszłość generatorów wierszy AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/index.html:281 | C2 | 중간 | 같은 언어 href blog/pl/article-1.html의 링크 텍스트 3종류: Jak AI pisze wiersze: Spotkanie technologii i emocji / blogu / Zasady i przyszłość generatorów wierszy AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/index.html:321 | C2 | 중간 | 같은 언어 href blog/pl/article-2.html의 링크 텍스트 2종류: 5 wskazówek do pisania dobrych wierszy: Twórczość z AI / Jak pisać wzruszające przemówienia ślubne | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/index.html:325 | C2 | 중간 | 같은 언어 href blog/pl/article-3.html의 링크 텍스트 2종류: Inspiracje z warsztatu znanych poetów / Zbiór emocjonalnych cytatów popularnych w mediach społecznościowych | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pl/index.html:332 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pl/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pl/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pl/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pl/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pl/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/privacy.html:10 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/privacy.html:103 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/privacy.html:208 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pt/about.html:65 | C2 | 중간 | 같은 언어 href pt/index.html의 링크 텍스트 6종류: AI & Poem / ← Voltar para a Página Principal / IA e poema / Lar | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/about.html:65 | C2 | 중간 | 같은 언어 href pt/index.html의 링크 텍스트 6종류: AI & Poem / ← Voltar para a Página Principal / IA e poema / Lar | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/about.html:72 | C2 | 중간 | 같은 언어 href blog/pt/index.html의 링크 텍스트 4종류: ← Voltar à lista / ← Voltar para a lista / Blogue / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Oferecemos suporte a 31 idiomas, incluindo coreano, inglês, japonês, chinês e francês, permitindo que usuários globais desfrutem de poesia em seu idioma nativo. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/pt/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pt/about.html:113 | C2 | 중간 | 같은 언어 href pt/privacy.html의 링크 텍스트 3종류: Política de Privacidade / Política de privacidade / política de Privacidade | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/about.html:115 | C2 | 중간 | 같은 언어 href pt/terms.html의 링크 텍스트 4종류: Termos de Uso / Termos de uso / Termos de Serviço / Termos de utilização | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/author.html:65 | C2 | 중간 | 같은 언어 href pt/index.html의 링크 텍스트 6종류: AI & Poem / ← Voltar para a Página Principal / IA e poema / Lar | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/author.html:65 | C2 | 중간 | 같은 언어 href pt/index.html의 링크 텍스트 6종류: AI & Poem / ← Voltar para a Página Principal / IA e poema / Lar | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/author.html:72 | C2 | 중간 | 같은 언어 href blog/pt/index.html의 링크 텍스트 4종류: ← Voltar à lista / ← Voltar para a lista / Blogue / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pt/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pt/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pt/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Suportamos 31 idiomas, incluindo português. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/pt/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pt/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pt/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/pt/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/pt/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pt/index.html:234 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/pt/index.html:235 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pt/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/index.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pt/index.html:251 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Com suporte a 31 idiomas, incluindo coreano, inglês e francês, você pode concluir textos para vários fins, como discursos de casamento, cartas de amor e legendas emocionais para redes sociais em apenas 10 segundos. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/pt/index.html:281 | C2 | 중간 | 같은 언어 href blog/pt/article-1.html의 링크 텍스트 3종류: O Princípio da Escrita de Poesia pela IA: O Encontro da Tecnologia e da Emoção / blog / Princípios e Futuro dos Geradores de Poemas AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/index.html:281 | C2 | 중간 | 같은 언어 href blog/pt/article-1.html의 링크 텍스트 3종류: O Princípio da Escrita de Poesia pela IA: O Encontro da Tecnologia e da Emoção / blog / Princípios e Futuro dos Geradores de Poemas AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/index.html:322 | C2 | 중간 | 같은 언어 href blog/pt/article-2.html의 링크 텍스트 2종류: 5 Dicas para Escrever Boas Poesias: Criando com a IA / Como escrever discursos de casamento tocantes | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/index.html:327 | C2 | 중간 | 같은 언어 href blog/pt/article-3.html의 링크 텍스트 2종류: Inspiração Aprendida com os Métodos de Poetas Famosos / Coleção de citações emocionais populares nas redes sociais | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/index.html:333 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pt/index.html:344 | C2 | 중간 | 같은 언어 href pt/terms.html의 링크 텍스트 4종류: Termos de Uso / Termos de uso / Termos de Serviço / Termos de utilização | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/pt/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/pt/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/pt/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pt/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/pt/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ru/about.html:10 | C2 | 중간 | 같은 언어 href ru/about.html의 링크 텍스트 2종류: О / О нас | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/about.html:65 | C2 | 중간 | 같은 언어 href ru/index.html의 링크 텍스트 6종류: AI & Poem / ← Вернуться на главную / ИИ и поэма / Дом | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/about.html:65 | C2 | 중간 | 같은 언어 href ru/index.html의 링크 텍스트 6종류: AI & Poem / ← Вернуться на главную / ИИ и поэма / Дом | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/about.html:72 | C2 | 중간 | 같은 언어 href blog/ru/index.html의 링크 텍스트 2종류: ← Вернуться к списку / Блог | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/about.html:73 | C2 | 중간 | 같은 언어 href ru/contact.html의 링크 텍스트 2종류: Контакт / Контакты | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Мы поддерживаем 31 язык, включая корейский, английский, японский, китайский и французский, что позволяет пользователям со всего мира наслаждаться поэзией на их родном языке. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ru/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ru/about.html:113 | C2 | 중간 | 같은 언어 href ru/privacy.html의 링크 텍스트 2종류: Политика конфиденциальности / политика конфиденциальности | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/author.html:65 | C2 | 중간 | 같은 언어 href ru/index.html의 링크 텍스트 6종류: AI & Poem / ← Вернуться на главную / ИИ и поэма / Дом | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/author.html:65 | C2 | 중간 | 같은 언어 href ru/index.html의 링크 텍스트 6종류: AI & Poem / ← Вернуться на главную / ИИ и поэма / Дом | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ru/author.html:87 | C2 | 중간 | 같은 언어 href ru/about.html의 링크 텍스트 2종류: О / О нас | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ru/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ru/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Мы поддерживаем 31 язык, включая русский. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ru/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ru/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ru/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/ru/index.html:167 | C2 | 중간 | 같은 언어 href ru/contact.html의 링크 텍스트 2종류: Контакт / Контакты | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/ru/index.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/index.html:217 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ru/index.html:234 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/ru/index.html:235 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ru/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/index.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ru/index.html:251 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Поддерживая 31 язык, включая корейский, английский и французский, вы можете создавать тексты для различных целей, таких как свадебные речи, любовные письма и эмоциональные подписи в социальных сетях, всего за 10 секунд. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/ru/index.html:281 | C2 | 중간 | 같은 언어 href blog/ru/article-1.html의 링크 텍스트 3종류: Принципы написания стихов AI: встреча технологий и эмоций / блоге / Принципы и будущее генераторов стихов ИИ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/index.html:281 | C2 | 중간 | 같은 언어 href blog/ru/article-1.html의 링크 텍스트 3종류: Принципы написания стихов AI: встреча технологий и эмоций / блоге / Принципы и будущее генераторов стихов ИИ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/index.html:319 | C2 | 중간 | 같은 언어 href blog/ru/article-2.html의 링크 텍스트 2종류: 5 советов по написанию хороших стихов: творчество с AI / Как написать трогательную свадебную речь | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/index.html:323 | C2 | 중간 | 같은 언어 href blog/ru/article-3.html의 링크 텍스트 2종류: Вдохновение из методов известных поэтов / Коллекция эмоциональных цитат, популярных в социальных сетях | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/index.html:330 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ru/index.html:341 | C2 | 중간 | 같은 언어 href ru/terms.html의 링크 텍스트 2종류: Условия использования / Условия предоставления услуг | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/ru/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/ru/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/ru/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ru/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/ru/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sv/about.html:10 | C2 | 중간 | 같은 언어 href sv/about.html의 링크 텍스트 2종류: Om / Om oss | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/about.html:65 | C2 | 중간 | 같은 언어 href sv/index.html의 링크 텍스트 5종류: AI & Poem / ← Återgå till huvudsidan / AI & dikt / Hem | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/about.html:65 | C2 | 중간 | 같은 언어 href sv/index.html의 링크 텍스트 5종류: AI & Poem / ← Återgå till huvudsidan / AI & dikt / Hem | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/about.html:72 | C2 | 중간 | 같은 언어 href blog/sv/index.html의 링크 텍스트 3종류: ← Tillbaka till listan / ← Återgå till listan / Blogg | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/about.html:73 | C2 | 중간 | 같은 언어 href sv/contact.html의 링크 텍스트 2종류: Kontakta / Kontakt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/about.html:92 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1. Large Language Model (LLM) | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Vi stöder 31 språk inklusive koreanska, engelska, japanska, kinesiska och franska, vilket gör att globala användare kan njuta av poesi på sitt modersmål. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/sv/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sv/about.html:113 | C2 | 중간 | 같은 언어 href sv/privacy.html의 링크 텍스트 3종류: Integritetspolicy / Sekretesspolicy / integritetspolicy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/author.html:65 | C2 | 중간 | 같은 언어 href sv/index.html의 링크 텍스트 5종류: AI & Poem / ← Återgå till huvudsidan / AI & dikt / Hem | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/author.html:73 | C2 | 중간 | 같은 언어 href sv/contact.html의 링크 텍스트 2종류: Kontakta / Kontakt | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sv/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sv/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sv/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Vi stöder 31 språk, inklusive svenska. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/sv/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sv/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sv/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/sv/index.html:166 | C2 | 중간 | 같은 언어 href sv/about.html의 링크 텍스트 2종류: Om / Om oss | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/sv/index.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/index.html:217 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sv/index.html:233 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/sv/index.html:234 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sv/index.html:236 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/index.html:240 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sv/index.html:250 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Med stöd för 31 språk inklusive koreanska, engelska och franska kan du slutföra texter för olika ändamål som bröllopstal, kärleksbrev och känslomässiga bildtexter på sociala medier på bara 10 sekunder. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/sv/index.html:281 | C2 | 중간 | 같은 언어 href blog/sv/article-1.html의 링크 텍스트 3종류: Principerna bakom AI:s skrivande av poesi: Mötet mellan teknik och känsla / Blogg / Principer och framtid för AI-diktgeneratorer | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/index.html:281 | C2 | 중간 | 같은 언어 href blog/sv/article-1.html의 링크 텍스트 3종류: Principerna bakom AI:s skrivande av poesi: Mötet mellan teknik och känsla / Blogg / Principer och framtid för AI-diktgeneratorer | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/index.html:319 | C2 | 중간 | 같은 언어 href blog/sv/article-2.html의 링크 텍스트 2종류: 5 tips för att skriva bra poesi: Skapande med AI / Hur man skriver rörande bröllopstal | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/index.html:324 | C2 | 중간 | 같은 언어 href blog/sv/article-3.html의 링크 텍스트 2종류: Inspiration från kända poeters skrivmetoder / Samling av känslomässiga citat populära på sociala medier | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/index.html:331 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sv/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/privacy.html:85 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sv/privacy.html:105 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/privacy.html:120 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sv/privacy.html:162 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sv/terms.html:111 | C2 | 중간 | 같은 언어 href sv/privacy.html의 링크 텍스트 3종류: Integritetspolicy / Sekretesspolicy / integritetspolicy | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sv/terms.html:132 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sv/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sw/about.html:65 | C2 | 중간 | 같은 언어 href sw/index.html의 링크 텍스트 5종류: AI & Poem / ← Rudi kwa Kuu / Ai & shairi / Nyumbani | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/about.html:65 | C2 | 중간 | 같은 언어 href sw/index.html의 링크 텍스트 5종류: AI & Poem / ← Rudi kwa Kuu / Ai & shairi / Nyumbani | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/about.html:72 | C2 | 중간 | 같은 언어 href blog/sw/index.html의 링크 텍스트 3종류: ← Rudi kwenye Orodha / Blogi / Blogu | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Tunasaidia lugha 31 pamoja na Kikorea, Kiingereza, Kijapani, Kichina, na Kifaransa, tukiruhusu watumiaji wa ulimwengu kufurahiya ushairi katika lugha yao ya asili. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/sw/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sw/about.html:113 | C2 | 중간 | 같은 언어 href sw/privacy.html의 링크 텍스트 3종류: Sera ya Faragha / Sera ya faragha / Sera yetu ya Faragha | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/author.html:65 | C2 | 중간 | 같은 언어 href sw/index.html의 링크 텍스트 5종류: AI & Poem / ← Rudi kwa Kuu / Ai & shairi / Nyumbani | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/author.html:72 | C2 | 중간 | 같은 언어 href blog/sw/index.html의 링크 텍스트 3종류: ← Rudi kwenye Orodha / Blogi / Blogu | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sw/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sw/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sw/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Tunasaidia lugha 31 ikiwa ni pamoja na Kiswahili. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/sw/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sw/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sw/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/sw/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sw/index.html:234 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/sw/index.html:235 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sw/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/index.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sw/index.html:251 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Ikisaidia lugha 31 zikiwemo Kikorea, Kiingereza na Kifaransa, unaweza kukamilisha maandishi kwa madhumuni mbalimbali kama vile hotuba za harusi, barua za mapenzi na maelezo ya hisia ya SNS kwa sekunde 10 tu. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/sw/index.html:282 | C2 | 중간 | 같은 언어 href blog/sw/article-1.html의 링크 텍스트 3종류: Kanuni ya AI Kuandika Mashairi: Mkutano wa Teknolojia na Hisia / Blogu / Kanuni na Mustakabali wa Jenereta za Mashairi ya AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/index.html:282 | C2 | 중간 | 같은 언어 href blog/sw/article-1.html의 링크 텍스트 3종류: Kanuni ya AI Kuandika Mashairi: Mkutano wa Teknolojia na Hisia / Blogu / Kanuni na Mustakabali wa Jenereta za Mashairi ya AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/index.html:326 | C2 | 중간 | 같은 언어 href blog/sw/article-2.html의 링크 텍스트 2종류: Vidokezo 5 vya Kuandika Mashairi Bora: Kuunda na AI / Jinsi ya Kuandika Hotuba za Harusi Zinazogusa | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/index.html:332 | C2 | 중간 | 같은 언어 href blog/sw/article-3.html의 링크 텍스트 2종류: Msukumo kutoka kwa Ufundi wa Washairi Maarufu / Mkusanyiko wa Nukuu za Hisia Maarufu kwenye SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/index.html:339 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sw/privacy.html:65 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/privacy.html:89 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/sw/privacy.html:109 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/privacy.html:124 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/sw/privacy.html:166 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sw/terms.html:115 | C2 | 중간 | 같은 언어 href sw/privacy.html의 링크 텍스트 3종류: Sera ya Faragha / Sera ya faragha / Sera yetu ya Faragha | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/sw/terms.html:136 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/sw/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/terms.html:167 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/th/about.html:65 | C2 | 중간 | 같은 언어 href th/index.html의 링크 텍스트 6종류: AI & Poem / ← กลับสู่หน้าหลัก / AI และบทกวี / บ้าน | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/about.html:65 | C2 | 중간 | 같은 언어 href th/index.html의 링크 텍스트 6종류: AI & Poem / ← กลับสู่หน้าหลัก / AI และบทกวี / บ้าน | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/about.html:72 | C2 | 중간 | 같은 언어 href blog/th/index.html의 링크 텍스트 3종류: ← กลับไปที่รายการ / ← กลับไปยังรายการ / บล็อก | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: เรารองรับ 31 ภาษา รวมถึงภาษาเกาหลี อังกฤษ ญี่ปุ่น จีน และฝรั่งเศส ทำให้ผู้ใช้ทั่วโลกเพลิดเพลินกับบทกวีในภาษาแม่ของตน | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/th/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/th/author.html:65 | C2 | 중간 | 같은 언어 href th/index.html의 링크 텍스트 6종류: AI & Poem / ← กลับสู่หน้าหลัก / AI และบทกวี / บ้าน | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/author.html:65 | C2 | 중간 | 같은 언어 href th/index.html의 링크 텍스트 6종류: AI & Poem / ← กลับสู่หน้าหลัก / AI และบทกวี / บ้าน | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/th/author.html:95 | C2 | 중간 | 같은 언어 href th/terms.html의 링크 텍스트 5종류: ข้อกำหนดและเงื่อนไข / ข้อกำหนดในการให้บริการ / ข้อกำหนดการใช้งาน / ข้อกำหนดการใช้บริการ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/th/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/th/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: รองรับ 31 ภาษา รวมถึงภาษาไทย | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/th/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/th/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/th/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/th/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/th/index.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/index.html:217 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/th/index.html:233 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/th/index.html:234 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/th/index.html:236 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/index.html:240 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/th/index.html:250 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: รองรับ 31 ภาษา รวมถึงเกาหลี อังกฤษ และฝรั่งเศส คุณสามารถเขียนงานเขียนเพื่อวัตถุประสงค์ต่างๆ เช่น สุนทรพจน์งานแต่งงาน จดหมายรัก และคำบรรยาย SNS ที่เต็มไปด้วยอารมณ์ได้ในเวลาเพียง 10 วินาที | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/th/index.html:281 | C2 | 중간 | 같은 언어 href blog/th/article-1.html의 링크 텍스트 3종류: หลักการที่ AI เขียนบทกวี: การพบกันของเทคโนโลยีและอารมณ์ / บล็อก / หลักการและอนาคตของเครื่องกำเนิดบทกวี AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/index.html:281 | C2 | 중간 | 같은 언어 href blog/th/article-1.html의 링크 텍스트 3종류: หลักการที่ AI เขียนบทกวี: การพบกันของเทคโนโลยีและอารมณ์ / บล็อก / หลักการและอนาคตของเครื่องกำเนิดบทกวี AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/index.html:319 | C2 | 중간 | 같은 언어 href blog/th/article-2.html의 링크 텍스트 2종류: 5 เคล็ดลับในการเขียนบทกวีที่ดี: การสร้างสรรค์ร่วมกับ AI / วิธีเขียนสุนทรพจน์งานแต่งงานที่น่าประทับใจ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/index.html:324 | C2 | 중간 | 같은 언어 href blog/th/article-3.html의 링크 텍스트 2종류: แรงบันดาลใจจากวิธีการเขียนของกวีชื่อดัง / รวมคำคมโดนใจยอดนิยมบน SNS | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/index.html:329 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/th/index.html:340 | C2 | 중간 | 같은 언어 href th/terms.html의 링크 텍스트 5종류: ข้อกำหนดและเงื่อนไข / ข้อกำหนดในการให้บริการ / ข้อกำหนดการใช้งาน / ข้อกำหนดการใช้บริการ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/th/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/privacy.html:85 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/th/privacy.html:105 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/privacy.html:120 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/th/privacy.html:162 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/th/terms.html:132 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/th/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/tr/about.html:65 | C2 | 중간 | 같은 언어 href tr/index.html의 링크 텍스트 6종류: AI & Poem / ← Ana Sayfaya Dön / Yapay Zeka ve Şiir / Ev | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/about.html:65 | C2 | 중간 | 같은 언어 href tr/index.html의 링크 텍스트 6종류: AI & Poem / ← Ana Sayfaya Dön / Yapay Zeka ve Şiir / Ev | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/about.html:72 | C2 | 중간 | 같은 언어 href blog/tr/index.html의 링크 텍스트 3종류: ← Listeye geri dön / ← Listeye Geri Dön / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/about.html:73 | C2 | 중간 | 같은 언어 href tr/contact.html의 링크 텍스트 2종류: Temas etmek / İletişim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Korece, İngilizce, Japonca, Çince ve Fransızca dahil olmak üzere 31 dili destekliyoruz ve küresel kullanıcıların kendi ana dillerinde şiirin keyfini çıkarmasına olanak sağlıyoruz. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/tr/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/tr/about.html:115 | C2 | 중간 | 같은 언어 href tr/terms.html의 링크 텍스트 3종류: Kullanım Şartları / Hizmet Şartları / Kullanım şartları | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/author.html:65 | C2 | 중간 | 같은 언어 href tr/index.html의 링크 텍스트 6종류: AI & Poem / ← Ana Sayfaya Dön / Yapay Zeka ve Şiir / Ev | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/author.html:65 | C2 | 중간 | 같은 언어 href tr/index.html의 링크 텍스트 6종류: AI & Poem / ← Ana Sayfaya Dön / Yapay Zeka ve Şiir / Ev | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/author.html:73 | C2 | 중간 | 같은 언어 href tr/contact.html의 링크 텍스트 2종류: Temas etmek / İletişim | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/tr/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/tr/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/tr/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Türkçe dahil 31 dili destekliyoruz. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/tr/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/tr/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/tr/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/tr/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/tr/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/tr/index.html:234 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/tr/index.html:235 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/tr/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/index.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/tr/index.html:251 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Korece, İngilizce ve Fransızca dahil olmak üzere 31 dili destekleyerek, düğün konuşmaları, aşk mektupları ve duygusal sosyal medya başlıkları gibi çeşitli amaçlar için yazılarınızı sadece 10 saniyede tamamlayabilirsiniz. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/tr/index.html:282 | C2 | 중간 | 같은 언어 href blog/tr/article-1.html의 링크 텍스트 3종류: Yapay Zeka Şiir Yazma Prensibi: Teknoloji ve Duyguların Buluşması / Blog / Yapay Zeka Şiir Oluşturucularının İlkeleri ve Geleceği | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/index.html:282 | C2 | 중간 | 같은 언어 href blog/tr/article-1.html의 링크 텍스트 3종류: Yapay Zeka Şiir Yazma Prensibi: Teknoloji ve Duyguların Buluşması / Blog / Yapay Zeka Şiir Oluşturucularının İlkeleri ve Geleceği | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/index.html:324 | C2 | 중간 | 같은 언어 href blog/tr/article-2.html의 링크 텍스트 2종류: İyi Şiir Yazmanın 5 İpucu: AI ile Yaratıcılık / Dokunaklı Düğün Konuşmaları Nasıl Yazılır | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/index.html:330 | C2 | 중간 | 같은 언어 href blog/tr/article-3.html의 링크 텍스트 2종류: Ünlü Şairlerin Yazım Tarzlarından İlham Almak / Sosyal Medyada Popüler Duygusal Sözler Koleksiyonu | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/index.html:336 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/tr/index.html:345 | C2 | 중간 | 같은 언어 href tr/privacy.html의 링크 텍스트 3종류: Gizlilik Politikası / Gizlilik politikası / Gizlilik Politikamız | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/index.html:347 | C2 | 중간 | 같은 언어 href tr/terms.html의 링크 텍스트 3종류: Kullanım Şartları / Hizmet Şartları / Kullanım şartları | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/tr/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/tr/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/tr/terms.html:110 | C2 | 중간 | 같은 언어 href tr/privacy.html의 링크 텍스트 3종류: Gizlilik Politikası / Gizlilik politikası / Gizlilik Politikamız | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/tr/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/tr/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/uk/about.html:10 | C2 | 중간 | 같은 언어 href uk/about.html의 링크 텍스트 2종류: про / Про нас | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/about.html:65 | C2 | 중간 | 같은 언어 href uk/index.html의 링크 텍스트 6종류: AI & Poem / ← Повернутися на головну / ШІ та вірш / додому | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/about.html:65 | C2 | 중간 | 같은 언어 href uk/index.html의 링크 텍스트 6종류: AI & Poem / ← Повернутися на головну / ШІ та вірш / додому | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/about.html:72 | C2 | 중간 | 같은 언어 href blog/uk/index.html의 링크 텍스트 2종류: ← Повернутися до списку / Блог | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/about.html:73 | C2 | 중간 | 같은 언어 href uk/contact.html의 링크 텍스트 3종류: контакт / Контакт / Контакти | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Ми підтримуємо 31 мову, включаючи корейську, англійську, японську, китайську та французьку, що дозволяє користувачам у всьому світі насолоджуватися поезією рідною мовою. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/uk/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/uk/about.html:115 | C2 | 중간 | 같은 언어 href uk/terms.html의 링크 텍스트 3종류: Умови використання / Умови обслуговування / Умови користування | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/author.html:65 | C2 | 중간 | 같은 언어 href uk/index.html의 링크 텍스트 6종류: AI & Poem / ← Повернутися на головну / ШІ та вірш / додому | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/author.html:65 | C2 | 중간 | 같은 언어 href uk/index.html의 링크 텍스트 6종류: AI & Poem / ← Повернутися на головну / ШІ та вірш / додому | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/author.html:73 | C2 | 중간 | 같은 언어 href uk/contact.html의 링크 텍스트 3종류: контакт / Контакт / Контакти | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/uk/author.html:87 | C2 | 중간 | 같은 언어 href uk/about.html의 링크 텍스트 2종류: про / Про нас | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/uk/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/uk/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Ми підтримуємо 31 мову, включаючи українську. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/uk/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/uk/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/uk/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/uk/index.html:167 | C2 | 중간 | 같은 언어 href uk/contact.html의 링크 텍스트 3종류: контакт / Контакт / Контакти | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/uk/index.html:218 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/index.html:218 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/uk/index.html:235 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/uk/index.html:236 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/uk/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/index.html:240 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/index.html:242 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/index.html:242 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/uk/index.html:252 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Підтримуючи 31 мову, включаючи корейську, англійську та французьку, ви можете створювати тексти для різних цілей, таких як весільні промови, любовні листи та емоційні підписи в соціальних мережах, всього за 10 секунд. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/uk/index.html:283 | C2 | 중간 | 같은 언어 href blog/uk/article-1.html의 링크 텍스트 3종류: Принципи написання віршів AI: зустріч технології та емоцій / Блог / Принципи та майбутнє генераторів віршів ШІ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/index.html:283 | C2 | 중간 | 같은 언어 href blog/uk/article-1.html의 링크 텍스트 3종류: Принципи написання віршів AI: зустріч технології та емоцій / Блог / Принципи та майбутнє генераторів віршів ШІ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/index.html:322 | C2 | 중간 | 같은 언어 href blog/uk/article-2.html의 링크 텍스트 2종류: 5 порад для написання віршів: творчість з AI / Як написати зворушливу весільну промову | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/index.html:327 | C2 | 중간 | 같은 언어 href blog/uk/article-3.html의 링크 텍스트 2종류: Натхнення з методів відомих поетів / Колекція емоційних цитат, популярних у соціальних мережах | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/index.html:334 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/uk/index.html:345 | C2 | 중간 | 같은 언어 href uk/terms.html의 링크 텍스트 3종류: Умови використання / Умови обслуговування / Умови користування | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/uk/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/uk/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/uk/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/uk/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/uk/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/use-cases.html:88 | C2 | 중간 | 같은 언어 href index.html의 링크 텍스트 7종류: AI & Poem / AI 시 생성하러 가기 → / 홈으로 돌아가기 / 홈 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/use-cases.html:109 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 한국어, 영어, 일본어, 중국어, 프랑스어 등 31개 언어를 지원하니 전 세계 어디서든 모국어로 시를 즐기게 됩니다. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/use-cases.html:177 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/vi/about.html:10 | C2 | 중간 | 같은 언어 href vi/about.html의 링크 텍스트 2종류: Về / Giới thiệu | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/about.html:65 | C2 | 중간 | 같은 언어 href vi/index.html의 링크 텍스트 4종류: AI & Poem / ← Quay lại trang chính / AI & Thơ / Trang chủ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/about.html:65 | C2 | 중간 | 같은 언어 href vi/index.html의 링크 텍스트 4종류: AI & Poem / ← Quay lại trang chính / AI & Thơ / Trang chủ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/about.html:72 | C2 | 중간 | 같은 언어 href blog/vi/index.html의 링크 텍스트 2종류: ← Quay lại danh sách / Blog | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/about.html:97 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Chúng tôi hỗ trợ 31 ngôn ngữ bao gồm tiếng Hàn, tiếng Anh, tiếng Nhật, tiếng Trung và tiếng Pháp, cho phép người dùng toàn cầu thưởng thức thơ bằng ngôn ngữ mẹ đẻ của họ. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/vi/about.html:106 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/vi/about.html:115 | C2 | 중간 | 같은 언어 href vi/terms.html의 링크 텍스트 2종류: Điều khoản sử dụng / Điều khoản dịch vụ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/author.html:86 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/vi/author.html:87 | C2 | 중간 | 같은 언어 href vi/about.html의 링크 텍스트 2종류: Về / Giới thiệu | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/contact.html:132 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/vi/contact.html:142 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/contact.html:142 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/vi/faq.html:95 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Chúng tôi hỗ trợ 31 ngôn ngữ bao gồm tiếng Việt. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/vi/faq.html:104 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/vi/gallery.html:85 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/vi/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/vi/index.html:190 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/vi/index.html:217 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/index.html:217 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/vi/index.html:234 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/vi/index.html:235 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/vi/index.html:237 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/index.html:238 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/index.html:239 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/index.html:241 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/index.html:241 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/vi/index.html:251 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: Hỗ trợ 31 ngôn ngữ bao gồm tiếng Hàn, tiếng Anh và tiếng Pháp, bạn có thể hoàn thành các bài viết cho nhiều mục đích khác nhau như bài phát biểu đám cưới, thư tình và chú thích cảm xúc trên mạng xã hội chỉ trong 10 giây. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/vi/index.html:282 | C2 | 중간 | 같은 언어 href blog/vi/article-1.html의 링크 텍스트 3종류: Nguyên lý AI viết thơ: Gặp gỡ giữa công nghệ và cảm xúc / Blog / Nguyên tắc và Tương lai của Trình tạo thơ AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/index.html:282 | C2 | 중간 | 같은 언어 href blog/vi/article-1.html의 링크 텍스트 3종류: Nguyên lý AI viết thơ: Gặp gỡ giữa công nghệ và cảm xúc / Blog / Nguyên tắc và Tương lai của Trình tạo thơ AI | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/index.html:322 | C2 | 중간 | 같은 언어 href blog/vi/article-2.html의 링크 텍스트 2종류: 5 mẹo để viết thơ hay: Sáng tạo cùng AI / Cách viết bài phát biểu đám cưới cảm động | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/index.html:328 | C2 | 중간 | 같은 언어 href blog/vi/article-3.html의 링크 텍스트 2종류: Cảm hứng từ cách viết của các nhà thơ nổi tiếng / Bộ sưu tập những câu trích dẫn cảm xúc phổ biến trên mạng xã hội | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/index.html:335 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/vi/index.html:344 | C2 | 중간 | 같은 언어 href vi/privacy.html의 링크 텍스트 3종류: Chính sách bảo mật thông tin / Chính sách bảo mật / Chính sách quyền riêng tư | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/vi/privacy.html:61 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/privacy.html:84 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/vi/privacy.html:104 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/privacy.html:119 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/vi/privacy.html:161 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/vi/terms.html:131 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/vi/use-cases.html:90 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/404.html:76 | C2 | 중간 | 같은 언어 href zh/index.html의 링크 텍스트 8종류: AI & Poem / ← 返回主页 / 人工智能与诗歌 / 生成 AI 诗歌 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:76 | C2 | 중간 | 같은 언어 href zh/index.html의 링크 텍스트 8종류: AI & Poem / ← 返回主页 / 人工智能与诗歌 / 生成 AI 诗歌 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:76 | C2 | 중간 | 같은 언어 href zh/index.html의 링크 텍스트 8종류: AI & Poem / ← 返回主页 / 人工智能与诗歌 / 生成 AI 诗歌 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:82 | C2 | 중간 | 같은 언어 href zh/about.html의 링크 텍스트 2종류: 服务介绍 / 关于 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:83 | C2 | 중간 | 같은 언어 href blog/zh/index.html의 링크 텍스트 2종류: ← 返回列表 / 博客 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:84 | C2 | 중간 | 같은 언어 href zh/gallery.html의 링크 텍스트 2종류: 画廊 / ← 返回画廊 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:85 | C2 | 중간 | 같은 언어 href zh/faq.html의 링크 텍스트 3종류: FAQ / 常见问题 / 查看全部FAQ → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:85 | C2 | 중간 | 같은 언어 href zh/faq.html의 링크 텍스트 3종류: FAQ / 常见问题 / 查看全部FAQ → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:86 | C2 | 중간 | 같은 언어 href zh/contact.html의 링크 텍스트 2종류: 联系我们 / 联系我们。 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:113 | C2 | 중간 | 같은 언어 href blog/zh/article-1.html의 링크 텍스트 8종류: AI如何写诗：技术与感性的相遇 / AI写诗的原理 / AI写诗的原理：技术与感性的相遇 / AI写诗的原理：技术与情感的结合 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:117 | C2 | 중간 | 같은 언어 href zh/gallery-1.html의 링크 텍스트 2종류: 爱与离别之诗 / 爱与离别之诗 从初恋的悸动到离别的成熟，七首诗歌带您走过爱情的完整旅程，附有深入的文学解析。 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/404.html:127 | A5 | 중간 | A5 푸터 구조 불일치: 404.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/404.html:138 | C2 | 중간 | 같은 언어 href zh/author.html의 링크 텍스트 4종류: 查看作者简介 → / 关于作者 / 了解更多关于作者 → / 作者介绍 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/about.html:65 | C2 | 중간 | 같은 언어 href zh/index.html의 링크 텍스트 8종류: AI & Poem / ← 返回主页 / 人工智能与诗歌 / 生成 AI 诗歌 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/about.html:99 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 支持韩语、英语、日语、汉语、法语等31种语言，让全球用户用母语欣赏诗歌。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/zh/about.html:108 | A5 | 중간 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/author.html:28 | D1 | 중간 | 비한국어 JSON-LD $.alternateName에 한글 포함: 류재국 | JSON-LD 문자열을 페이지 언어로 번역. |
| frontend/zh/author.html:103 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk（류재국）是AI & Poem服务的策划人兼开发者。他将人工智能技术与文学相结合，打造一个超越语言和国界的诗意交流平台。 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/author.html:109 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: AI & Poem是一项支持31种语言的多语言诗歌生成服务，深入关注考虑各语言诗歌传统和文化背景的提示词设计。该服务通过基于Transformer架构的诗歌生成、TTS（文本转语音）集成和内容安全过滤等方面，持续提升技术完善度。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/zh/author.html:119 | A5 | 중간 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/contact.html:36 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/contact.html:37 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/contact.html:134 | A5 | 중간 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/contact.html:148 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/contact.html:148 | D3 | 중간 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/zh/faq.html:207 | C2 | 중간 | 같은 언어 href zh/contact.html의 링크 텍스트 2종류: 联系我们 / 联系我们。 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/faq.html:243 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 我们支持31种语言，包括中文、英语、日语、韩语、西班牙语和法语。想了解多语言诗歌创作的秘诀？请阅读 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/zh/faq.html:243 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 用31种语言写诗 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/zh/faq.html:273 | C2 | 중간 | 같은 언어 href blog/zh/article-1.html의 링크 텍스트 8종류: AI如何写诗：技术与感性的相遇 / AI写诗的原理 / AI写诗的原理：技术与感性的相遇 / AI写诗的原理：技术与情感的结合 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/faq.html:283 | C2 | 중간 | 같은 언어 href blog/zh/article-8.html의 링크 텍스트 2종류: 计算机开始写诗的那一天：AI诗歌的历史 / 计算机开始写诗的那一天 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/faq.html:298 | C2 | 중간 | 같은 언어 href blog/zh/article-10.html의 링크 텍스트 3종류: AI写的诗，属于谁：版权与伦理的争议 / AI写的诗属于谁？：版权与伦理的争议 / AI写的诗属于谁？ | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/faq.html:303 | C2 | 중간 | 같은 언어 href blog/zh/article-9.html의 링크 텍스트 3종류: 教室里的AI诗人：AI诗歌生成器的教育应用 / 课堂上遇见的AI诗人：AI诗歌生成器的教育应用 / 课堂上遇见的AI诗人 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/faq.html:314 | A5 | 중간 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/faq.html:315 | C2 | 중간 | 같은 언어 href zh/about.html의 링크 텍스트 2종류: 服务介绍 / 关于 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-1.html:66 | C2 | 중간 | 같은 언어 href zh/author.html의 링크 텍스트 4종류: 查看作者简介 → / 关于作者 / 了解更多关于作者 → / 作者介绍 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-1.html:66 | C2 | 중간 | 같은 언어 href zh/author.html의 링크 텍스트 4종류: 查看作者简介 → / 关于作者 / 了解更多关于作者 → / 作者介绍 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-1.html:88 | C2 | 중간 | 같은 언어 href zh/gallery.html의 링크 텍스트 2종류: 画廊 / ← 返回画廊 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-1.html:113 | C2 | 중간 | 같은 언어 href zh/index.html의 링크 텍스트 8종류: AI & Poem / ← 返回主页 / 人工智能与诗歌 / 生成 AI 诗歌 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-1.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 2026年4月9日 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/gallery-1.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/gallery-1.html:332 | C2 | 중간 | 같은 언어 href blog/zh/article-2.html의 링크 텍스트 5종류: 写好诗的5个技巧：与AI一起创作 / 写好诗的5个技巧 / 写好诗的五个技巧：与AI一起创作 / 创作感人AI诗歌的7个技巧 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-1.html:333 | C2 | 중간 | 같은 언어 href blog/zh/article-5.html의 링크 텍스트 3종류: 感人的祝词和信件，AI 10秒完成 / 感人的祝词和信件，AI10秒完成 / 用AI撰写特别的祝词与书信 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-1.html:334 | C2 | 중간 | 같은 언어 href blog/zh/article-6.html의 링크 텍스트 4종류: AI诗歌与情感疗愈 / AI诗歌与情感治愈：写作疗法的新可能性 / AI诗歌与情感疗愈：书写疗法的新可能 / AI诗歌与情感治愈：文学疗愈的新工具 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-1.html:345 | A5 | 중간 | A5 푸터 구조 불일치: gallery-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/gallery-2.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 2026年4月9日 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/gallery-2.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/gallery-2.html:314 | C2 | 중간 | 같은 언어 href blog/zh/article-1.html의 링크 텍스트 8종류: AI如何写诗：技术与感性的相遇 / AI写诗的原理 / AI写诗的原理：技术与感性的相遇 / AI写诗的原理：技术与情感的结合 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-2.html:315 | C2 | 중간 | 같은 언어 href blog/zh/article-3.html의 링크 텍스트 5종류: 从著名诗人的创作方法中汲取灵感 / 从著名诗人的写作方法中汲取灵感 / 从著名诗人的创作中汲取灵感 / AI诗歌在教育中的应用 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-2.html:326 | A5 | 중간 | A5 푸터 구조 불일치: gallery-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/gallery-3.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 2026年4月9日 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/gallery-3.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/gallery-3.html:338 | C2 | 중간 | 같은 언어 href blog/zh/article-4.html의 링크 텍스트 2종류: AI诗歌生成器的未来：会取代作家吗？ / AI诗歌的版权与伦理问题 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery-3.html:349 | A5 | 중간 | A5 푸터 구조 불일치: gallery-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/gallery-4.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) \| 2026年4月9日 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/gallery-4.html:131 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: Ryu Jae-kuk (류재국) | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/gallery-4.html:368 | A5 | 중간 | A5 푸터 구조 불일치: gallery-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/gallery.html:123 | C2 | 중간 | 같은 언어 href zh/gallery-1.html의 링크 텍스트 2종류: 爱与离别之诗 / 爱与离别之诗 从初恋的悸动到离别的成熟，七首诗歌带您走过爱情的完整旅程，附有深入的文学解析。 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/gallery.html:143 | A5 | 중간 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/index.html:1 | C4 | 중간 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| frontend/zh/index.html:54 | B2 | 중간 | JSON-LD inLanguage "zh-CN"와 html lang "zh" 불일치. | JSON-LD inLanguage을 html lang과 같은 BCP 47 코드로 고치기. |
| frontend/zh/index.html:54 | B2 | 중간 | JSON-LD inLanguage "zh-CN"와 html lang "zh" 불일치. | JSON-LD inLanguage을 html lang과 같은 BCP 47 코드로 고치기. |
| frontend/zh/index.html:137 | C2 | 중간 | 같은 언어 href zh/faq.html의 링크 텍스트 3종류: FAQ / 常见问题 / 查看全部FAQ → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/index.html:160 | D1 | 중간 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| frontend/zh/index.html:187 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/index.html:187 | D3 | 중간 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/zh/index.html:203 | D3 | 중간 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| frontend/zh/index.html:204 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/zh/index.html:206 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/index.html:207 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/index.html:208 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/index.html:210 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/index.html:210 | D3 | 중간 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/zh/index.html:218 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 支持包括韩语、英语和法语在内的 31 种语言，您可以在短短 10 秒内完成各种用途的写作，如婚礼致辞、情书和情感社交媒体配文。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/zh/index.html:243 | C2 | 중간 | 같은 언어 href blog/zh/article-1.html의 링크 텍스트 8종류: AI如何写诗：技术与感性的相遇 / AI写诗的原理 / AI写诗的原理：技术与感性的相遇 / AI写诗的原理：技术与情感的结合 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/index.html:269 | C2 | 중간 | 같은 언어 href blog/zh/article-2.html의 링크 텍스트 5종류: 写好诗的5个技巧：与AI一起创作 / 写好诗的5个技巧 / 写好诗的五个技巧：与AI一起创作 / 创作感人AI诗歌的7个技巧 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/index.html:273 | C2 | 중간 | 같은 언어 href blog/zh/article-3.html의 링크 텍스트 5종류: 从著名诗人的创作方法中汲取灵感 / 从著名诗人的写作方法中汲取灵感 / 从著名诗人的创作中汲取灵感 / AI诗歌在教育中的应用 | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/index.html:278 | A5 | 중간 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/privacy.html:62 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/privacy.html:85 | D3 | 중간 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| frontend/zh/privacy.html:105 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/privacy.html:120 | D2 | 중간 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| frontend/zh/privacy.html:162 | A5 | 중간 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/terms.html:132 | A5 | 중간 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| frontend/zh/use-cases.html:29 | B2 | 중간 | JSON-LD inLanguage "zh-CN"와 html lang "zh" 불일치. | JSON-LD inLanguage을 html lang과 같은 BCP 47 코드로 고치기. |
| frontend/zh/use-cases.html:85 | C2 | 중간 | 같은 언어 href zh/index.html의 링크 텍스트 8종류: AI & Poem / ← 返回主页 / 人工智能与诗歌 / 生成 AI 诗歌 → | 같은 대상 링크의 번역 텍스트를 하나로 통일. |
| frontend/zh/use-cases.html:106 | C5 | 중간 | 수동 확인, 지원 언어 수 31개. 화면 문장: 支持中文、英语、日语、韩语、法语等31种语言，让全世界的用户都能用母语享受诗歌之美。 | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| frontend/zh/use-cases.html:158 | A5 | 중간 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
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
| frontend/ar/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ar/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ar/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ar/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ar/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ar/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ar/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ar/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ar/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ar/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ar/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ar/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ar/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ar/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ar/index.html:1 | F1 | 낮음 | 한글 HTML 주석 41개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ar/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ar/index.html:241 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ar/index.html:247 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ar/index.html:274 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ar/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ar/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ar/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ar/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ar/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ar/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/author.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/author.html:84 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/author.html:105 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/author.html:110 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/author.html:120 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/author.html:123 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/ar/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ar/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ar/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ar/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ar/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ar/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ar/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ar/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ar/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ar/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ar/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ar/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ar/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ar/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ar/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ar/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ar/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/bn/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/bn/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/bn/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/bn/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: এআই এর কবিতা লেখার ক্ষমতার মূল ভিত্তি হল **বৃহৎ ভাষা মডেল (Large Language Model, LLM)**। GPT এর মতো মডেলগুলি কয়েকশো কোটি বাক্য এবং টেক্সট ডেটা শিখেছে। এই প্রক্রিয়ায় এআই কেবল শব্দ মনে রাখে না, বরং শব্দ এবং শব্দের মধ্যে সম্ভাব্য সম্পর্ক, প্রেক্ষাপট, এবং সূক্ষ্মতা শিখে। | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/bn/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/bn/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/bn/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/bn/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/bn/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/bn/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/bn/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/bn/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/bn/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/bn/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/bn/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/bn/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/bn/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/bn/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
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
| frontend/blog/da/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/da/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/da/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/da/article-1.html:96 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/da/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/da/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/da/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/da/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/da/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/da/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/da/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/da/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/da/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/da/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/da/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/da/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/da/index.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/da/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/da/index.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/de/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/de/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/de/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/de/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: Im Kern der Fähigkeit von KI, Gedichte zu schreiben, steht das **große Sprachmodell (Large Language Model, LLM)**. Modelle wie GPT haben Milliarden von Sätzen und Textdaten gelernt. In diesem Prozess lernt die KI nicht nur, Wörter zu memorieren, sondern auch die probabilistischen Beziehungen zwischen Wörtern, den Kontext und die Nuancen. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/de/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/de/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/de/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/de/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/de/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/de/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/de/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/de/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/de/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/de/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/de/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/de/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/de/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/de/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/el/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/el/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/el/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/el/article-1.html:104 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: Η ικανότητα της AI να γράφει ποιήματα βασίζεται στα **μεγάλα γλωσσικά μοντέλα (Large Language Model, LLM)**. Μοντέλα όπως το GPT έχουν εκπαιδευτεί με δισεκατομμύρια προτάσεις και δεδομένα κειμένου. Σε αυτή τη διαδικασία, η AI δεν απλώς απομνημονεύει λέξεις, αλλά μαθαίνει τις πιθανές σχέσεις μεταξύ λέξεων, το πλαίσιο και τις αποχρώσεις. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/el/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/el/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/el/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/el/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/el/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/el/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/el/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/el/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/el/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/el/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/el/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/el/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/el/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/el/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-1.html:160 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: At the core of AI's ability to write poetry is the **Large Language Model (LLM)**. Models like GPT have been trained on billions of sentences and text data. In this process, AI learns not just to memorize words, but to understand the probabilistic relationships between words, context, and nuance. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/en/article-10.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-10.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-6.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-6.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-7.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-7.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-8.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-8.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/article-9.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/article-9.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/en/index.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/en/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/article-1.html:152 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: En el corazón de la capacidad de la IA para escribir poesía se encuentran los **modelos de lenguaje de gran tamaño (Large Language Model, LLM)**. Modelos como GPT han aprendido de miles de millones de oraciones y datos textuales. En este proceso, la IA no solo memoriza palabras, sino que aprende las relaciones probabilísticas entre palabras, el contexto y los matices. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/es/article-10.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-10.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-10.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/article-6.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-6.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-6.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/article-7.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-7.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-7.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/article-8.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-8.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-8.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/article-9.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/article-9.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/es/article-9.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/es/index.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/es/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fi/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fi/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fi/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fi/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: AI:n kyky kirjoittaa runoja perustuu **suurille kielimalleille (Large Language Model, LLM)**. Mallit kuten GPT ovat oppineet yli kymmeniä miljardeja lauseita ja tekstidataa. Tässä prosessissa AI ei vain muista sanoja, vaan oppii sanojen välisiä todennäköisiä suhteita, kontekstia ja vivahteita. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/fi/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fi/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fi/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fi/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fi/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fi/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fi/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fi/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fi/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fi/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fi/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fi/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fi/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fi/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fil/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fil/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fil/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fil/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fil/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fil/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fil/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fil/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fil/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fil/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fil/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fil/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fil/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fil/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fil/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fil/index.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fil/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fil/index.html:82 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/fr/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/article-1.html:153 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: Au cœur de la capacité de l'IA à écrire de la poésie se trouve le **modèle de langage de grande taille (Large Language Model, LLM)**. Des modèles comme GPT ont été formés sur des milliards de phrases et de données textuelles. Dans ce processus, l'IA n'apprend pas seulement à mémoriser des mots, mais aussi les relations probabilistes entre les mots, le contexte et les nuances. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/fr/article-10.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-10.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-10.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/article-6.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-6.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-6.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/article-7.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-7.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-7.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/article-8.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-8.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-8.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/article-9.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/article-9.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/fr/article-9.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/fr/index.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/fr/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hi/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hi/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hi/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hi/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: AI की कविता लिखने की क्षमता के मूल में **विशाल भाषा मॉडल (Large Language Model, LLM)** है। GPT जैसे मॉडल ने अरबों वाक्यों और पाठ डेटा का अध्ययन किया है। इस प्रक्रिया में AI केवल शब्दों को याद नहीं करता, बल्कि शब्दों के बीच के संभावित संबंध, संदर्भ, और बारीकियों को भी सीखता है। | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/hi/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hi/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hi/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hi/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hi/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hi/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hi/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hi/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hi/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hi/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hi/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hi/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hi/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hi/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hu/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hu/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hu/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hu/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hu/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hu/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hu/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hu/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hu/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hu/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hu/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hu/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hu/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hu/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hu/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/hu/index.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/hu/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/hu/index.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/id/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/id/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/id/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/id/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: Inti dari kemampuan AI menulis puisi terletak pada **model bahasa besar (Large Language Model, LLM)**. Model seperti GPT telah mempelajari miliaran kalimat dan data teks. Dalam proses ini, AI tidak hanya menghafal kata-kata, tetapi juga mempelajari hubungan probabilistik antara kata, konteks, dan nuansa. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/id/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/id/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/id/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/id/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/id/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/id/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/id/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/id/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/id/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/id/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/id/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/id/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/id/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/id/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/it/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/it/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/it/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/it/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: Al centro della capacità dell'AI di scrivere poesia c'è il **modello linguistico di grandi dimensioni (Large Language Model, LLM)**. Modelli come GPT hanno appreso miliardi di frasi e dati testuali. In questo processo, l'AI non si limita a memorizzare parole, ma apprende le relazioni probabilistiche tra le parole, il contesto e le sfumature. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/it/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/it/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/it/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/it/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/it/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/it/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/it/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/it/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/it/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/it/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/it/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/it/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/it/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/it/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/article-1.html:155 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: AIが詩を書く能力の核心には**大規模言語モデル(Large Language Model, LLM)**があります。GPTのようなモデルは、数十億以上の文章とテキストデータを学習しました。この過程でAIは単に単語を暗記するのではなく、単語と単語の間の確率的関係、文脈、そしてニュアンスを学びます。 | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/ja/article-10.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-10.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-10.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/article-6.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-6.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-6.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/article-7.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-7.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-7.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/article-8.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-8.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-8.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/article-9.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/article-9.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ja/article-9.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ja/index.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ja/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:1 | F1 | 낮음 | 한글 HTML 주석 13개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/ai-poem-prompt-patterns.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/ai-poetry-simplicity-preference.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 13개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-10.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-10.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-6.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-6.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-7.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-7.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-8.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-8.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/article-9.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/article-9.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/case-birthday-bilingual.html:1 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/ko/case-birthday-bilingual.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/case-birthday-bilingual.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/case-hwangap-tribute.html:1 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/ko/case-hwangap-tribute.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/case-hwangap-tribute.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/case-hwangap-tribute.html:180 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: **부모님 환갑** | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/ko/case-hwangap-tribute.html:253 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: 첫 줄의 '**부모님 환갑**'처럼 별표가 붙은 제목을 뗐습니다. 도구가 가끔 제목에 마크다운 기호를 달아 주는데, 낭독지와 식순지에는 군더더기라 지웠습니다. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/ko/case-wedding-toast.html:1 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/ko/case-wedding-toast.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/case-wedding-toast.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/hanja-tokenizer-conflict.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/index.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/isang-ogamdo.html:1 | F1 | 낮음 | 한글 HTML 주석 12개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/isang-ogamdo.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/jeongjiyong-hyangsu.html:1 | F1 | 낮음 | 한글 HTML 주석 12개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/jeongjiyong-hyangsu.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/kimsowol-jindallaekkot.html:1 | F1 | 낮음 | 한글 HTML 주석 12개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/kimsowol-jindallaekkot.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/llm-korean-sijo-meter.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/llm-korean-sijo-meter.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/poems-for-tts-reading.html:1 | F1 | 낮음 | 한글 HTML 주석 15개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/poems-for-tts-reading.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/poetry-recitation-revival.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/poetry-recitation-revival.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/sijo-meter-for-ai.html:1 | F1 | 낮음 | 한글 HTML 주석 11개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/sijo-meter-for-ai.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/tts-vs-human-recitation.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/tts-vs-human-recitation.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/wedding-speech-poem-tips.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/wedding-speech-poem-tips.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ko/yoondongju-seosi.html:1 | F1 | 낮음 | 한글 HTML 주석 12개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ko/yoondongju-seosi.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/mn/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/mn/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/mn/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/mn/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/mn/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/mn/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/mn/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/mn/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/mn/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/mn/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/mn/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/mn/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/mn/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/mn/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/mn/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/mn/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/mn/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ms/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ms/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ms/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ms/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: Inti kemampuan AI untuk menulis puisi adalah **Model Bahasa Besar (Large Language Model, LLM)**. Model seperti GPT telah dilatih dengan berbilion-bilion ayat dan data teks. Dalam proses ini, AI tidak hanya menghafal kata-kata, tetapi juga mempelajari hubungan probabilistik antara kata, konteks, dan nuansa. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/ms/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ms/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ms/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ms/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ms/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ms/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ms/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ms/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ms/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ms/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ms/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ms/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ms/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ms/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/nl/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/nl/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/nl/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/nl/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/nl/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/nl/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/nl/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/nl/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/nl/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/nl/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/nl/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/nl/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/nl/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/nl/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/nl/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/nl/index.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/nl/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/nl/index.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/no/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/no/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/no/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/no/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/no/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/no/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/no/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/no/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/no/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/no/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/no/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/no/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/no/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/no/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/no/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/no/index.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/no/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/no/index.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/blog/pl/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pl/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pl/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pl/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: Kluczem do zdolności AI do pisania wierszy jest **duży model językowy (Large Language Model, LLM)**. Modele takie jak GPT uczą się z miliardów zdań i danych tekstowych. W tym procesie AI nie tylko zapamiętuje słowa, ale także uczy się probabilistycznych relacji między słowami, kontekstu i niuansów. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/pl/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pl/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pl/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pl/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pl/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pl/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pl/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pl/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pl/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pl/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pl/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pl/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pl/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pl/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pt/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pt/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pt/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pt/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: No cerne da capacidade da IA de escrever poesia está o **Grande Modelo de Linguagem (Large Language Model, LLM)**. Modelos como o GPT foram treinados com bilhões de frases e dados textuais. Nesse processo, a IA não apenas memoriza palavras, mas aprende as relações probabilísticas entre palavras, o contexto e as nuances. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/pt/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pt/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pt/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pt/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pt/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pt/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pt/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pt/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pt/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pt/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pt/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/pt/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/pt/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/pt/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ru/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ru/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ru/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ru/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: В основе способности ИИ писать стихи лежит **большая языковая модель (Large Language Model, LLM)**. Модели, такие как GPT, обучены на миллиардах предложений и текстовых данных. В этом процессе ИИ не просто запоминает слова, но и изучает вероятностные связи между словами, контекст и нюансы. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/ru/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ru/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ru/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ru/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ru/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ru/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ru/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ru/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ru/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ru/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ru/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/ru/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/ru/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/ru/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sv/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sv/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sv/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sv/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: I kärnan av AIs förmåga att skriva poesi finns **stora språkmodeller (Large Language Model, LLM)**. Modeller som GPT har lärt sig från miljarder meningar och textdata. Under denna process lär sig AI inte bara att memorera ord, utan också de probabilistiska relationerna mellan ord, kontext och nyanser. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/sv/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sv/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sv/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sv/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sv/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sv/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sv/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sv/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sv/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sv/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sv/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sv/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sv/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sv/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sw/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sw/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sw/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sw/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sw/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sw/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sw/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sw/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sw/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sw/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sw/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sw/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sw/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sw/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/sw/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/sw/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/sw/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/th/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/th/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/th/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/th/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: หัวใจของความสามารถในการเขียนบทกวีของ AI คือ **โมเดลภาษาใหญ่ (Large Language Model, LLM)** โมเดลเช่น GPT ได้เรียนรู้จากประโยคและข้อมูลข้อความมากมายหลายพันล้านประโยค ในกระบวนการนี้ AI ไม่ได้เพียงแค่จดจำคำ แต่ยังเรียนรู้ความสัมพันธ์ทางสถิติระหว่างคำ ความหมายในบริบท และนัยยะต่าง ๆ | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/th/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/th/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/th/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/th/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/th/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/th/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/th/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/th/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/th/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/th/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/th/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/th/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/th/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/th/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/tr/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/tr/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/tr/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/tr/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: AI'nın şiir yazma yeteneğinin temelinde **büyük dil modeli (Large Language Model, LLM)** bulunmaktadır. GPT gibi modeller, milyarlarca cümle ve metin verisi üzerinde eğitim almıştır. Bu süreçte AI, sadece kelimeleri ezberlemekle kalmaz, kelimeler arasındaki olasılık ilişkilerini, bağlamı ve nüansları öğrenir. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/tr/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/tr/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/tr/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/tr/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/tr/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/tr/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/tr/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/tr/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/tr/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/tr/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/tr/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/tr/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/tr/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/tr/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/uk/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/uk/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/uk/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/uk/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: В основі здатності ШІ писати вірші лежить **велика мовна модель (Large Language Model, LLM)**. Моделі, такі як GPT, навчені на мільярдах речень та текстових даних. У цьому процесі ШІ не просто запам'ятовує слова, а вивчає ймовірнісні зв'язки між словами, контекст та нюанси. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/uk/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/uk/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/uk/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/uk/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/uk/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/uk/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/uk/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/uk/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/uk/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/uk/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/uk/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/uk/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/uk/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/uk/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/vi/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/vi/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/vi/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/vi/article-1.html:102 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: Trái tim của khả năng viết thơ của AI nằm ở **mô hình ngôn ngữ lớn (Large Language Model, LLM)**. Các mô hình như GPT đã học hàng tỷ câu và dữ liệu văn bản. Trong quá trình này, AI không chỉ ghi nhớ từ ngữ, mà còn học các mối quan hệ xác suất giữa các từ, ngữ cảnh và sắc thái. | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/vi/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/vi/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/vi/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/vi/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/vi/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/vi/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/vi/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/vi/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/vi/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/vi/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/vi/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/vi/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/vi/index.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/vi/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-1.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/article-1.html:149 | E1 | 낮음 | 화면 텍스트에 마크다운 잔여 기호: AI写诗能力的核心在于**大型语言模型(Large Language Model, LLM)**。像GPT这样的模型已经学习了数十亿个句子和文本数据。在这个过程中，AI不仅仅是记忆单词，而是学习单词之间的概率关系、上下文和细微差别。 | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| frontend/blog/zh/article-10.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-10.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-10.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/article-2.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/article-3.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/article-4.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/article-5.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-5.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-5.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/article-6.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-6.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-6.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/article-7.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-7.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-7.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/article-8.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-8.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-8.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/article-9.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/article-9.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/blog/zh/article-9.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/blog/zh/index.html:1 | F1 | 낮음 | 한글 HTML 주석 7개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/blog/zh/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/bn/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/bn/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/bn/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/bn/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/author.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/bn/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/bn/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/bn/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/bn/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/bn/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/faq.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/bn/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/bn/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/gallery.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/bn/index.html:1 | F1 | 낮음 | 한글 HTML 주석 44개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/bn/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/index.html:242 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/bn/index.html:248 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/bn/index.html:276 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/bn/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/bn/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/bn/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/bn/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/bn/use-cases.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
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
| frontend/da/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/da/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/da/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/da/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/da/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/da/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/da/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/da/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/da/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/da/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/da/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/da/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/da/index.html:1 | F1 | 낮음 | 한글 HTML 주석 30개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/da/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/da/index.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/index.html:34 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/index.html:47 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/index.html:254 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/da/index.html:260 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/index.html:261 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/index.html:312 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/da/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/da/privacy.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/privacy.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/privacy.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/da/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/da/terms.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/terms.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/terms.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/da/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/da/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/de/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/de/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/de/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/de/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/de/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/de/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: n.Er | 문장부호 뒤에 공백 추가. |
| frontend/de/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/de/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/de/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/de/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/de/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/de/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/de/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/de/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/de/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/de/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/de/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/de/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/de/index.html:1 | F1 | 낮음 | 한글 HTML 주석 47개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/de/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/de/index.html:242 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/de/index.html:248 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/de/index.html:277 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/de/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/de/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/de/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/de/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/de/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/de/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/el/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/el/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/el/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/el/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/el/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/el/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/el/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/el/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/el/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/el/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/el/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/el/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/el/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/el/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/el/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/el/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/el/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/el/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/el/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/el/index.html:1 | F1 | 낮음 | 한글 HTML 주석 44개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/el/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/el/index.html:243 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/el/index.html:249 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/el/index.html:278 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/el/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/el/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/el/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/el/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/el/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/el/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/404.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/404.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/404.html:21 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/404.html:26 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/404.html:30 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/about.html:68 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/about.html:69 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/about.html:87 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/about.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/author.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/author.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/author.html:84 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/author.html:105 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/en/author.html:110 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/author.html:120 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/author.html:123 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/contact.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/faq.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/faq.html:200 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/faq.html:218 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/faq.html:225 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/faq.html:270 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/faq.html:290 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/faq.html:296 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/gallery-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/gallery-1.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-1.html:133 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-1.html:324 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/gallery-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/gallery-2.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-2.html:133 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-2.html:328 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/gallery-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/gallery-3.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-3.html:133 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-3.html:341 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/gallery-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/gallery-4.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-4.html:133 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery-4.html:347 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/gallery.html:105 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery.html:127 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery.html:131 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery.html:135 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/gallery.html:139 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/index.html:1 | F1 | 낮음 | 한글 HTML 주석 21개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/index.html:255 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/en/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/en/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/en/use-cases.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/use-cases.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/use-cases.html:109 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/use-cases.html:111 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/use-cases.html:114 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/use-cases.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/use-cases.html:120 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/en/use-cases.html:133 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/404.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/404.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/404.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/es/404.html:23 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/about.html:83 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/about.html:103 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: o.Ex | 문장부호 뒤에 공백 추가. |
| frontend/es/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/author.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/author.html:82 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/author.html:103 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/author.html:109 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/author.html:112 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/contact.html:114 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/es/contact.html:114 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/es/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/faq.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/faq.html:197 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/faq.html:215 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/faq.html:222 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/faq.html:293 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/gallery-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/gallery-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/gallery-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/es/gallery-1.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/gallery-1.html:327 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/gallery-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/gallery-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/gallery-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/es/gallery-2.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/gallery-2.html:365 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/gallery-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/gallery-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/gallery-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/es/gallery-3.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/gallery-3.html:388 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/gallery-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/gallery-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/gallery-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/es/gallery-4.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/gallery-4.html:384 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/gallery.html:102 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/index.html:1 | F1 | 낮음 | 한글 HTML 주석 34개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/index.html:211 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/es/index.html:217 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/index.html:245 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/es/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/es/use-cases.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/use-cases.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/use-cases.html:106 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/use-cases.html:108 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/use-cases.html:111 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/use-cases.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/use-cases.html:117 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/es/use-cases.html:130 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 5개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/faq.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:199 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:217 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:224 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/faq.html:295 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fi/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fi/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fi/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fi/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fi/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fi/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: a.Ko | 문장부호 뒤에 공백 추가. |
| frontend/fi/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fi/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fi/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fi/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fi/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fi/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fi/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/fi/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/fi/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fi/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fi/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fi/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fi/index.html:1 | F1 | 낮음 | 한글 HTML 주석 40개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fi/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fi/index.html:242 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/fi/index.html:248 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fi/index.html:276 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fi/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fi/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fi/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fi/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fi/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fi/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fil/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fil/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fil/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fil/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fil/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/fil/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/fil/index.html:1 | F1 | 낮음 | 한글 HTML 주석 30개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fil/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fil/index.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/index.html:34 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/index.html:47 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/index.html:254 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/fil/index.html:260 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/index.html:261 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/index.html:314 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fil/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fil/privacy.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/privacy.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/privacy.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fil/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fil/terms.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/terms.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fil/terms.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/404.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/404.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/404.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/fr/404.html:23 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/about.html:9 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/about.html:86 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/author.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/author.html:82 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/author.html:103 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/author.html:109 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/author.html:112 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/contact.html:1 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/fr/contact.html:1 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/fr/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/contact.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/faq.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/faq.html:197 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/faq.html:215 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/faq.html:222 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/faq.html:293 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/gallery-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/gallery-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/gallery-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/fr/gallery-1.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/gallery-1.html:326 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/gallery-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/gallery-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/gallery-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/fr/gallery-2.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/gallery-2.html:338 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/gallery-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/gallery-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/gallery-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/fr/gallery-3.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/gallery-3.html:342 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/gallery-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/gallery-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/gallery-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/fr/gallery-4.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/gallery-4.html:353 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/gallery.html:102 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/index.html:1 | F1 | 낮음 | 한글 HTML 주석 34개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/index.html:213 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/fr/index.html:219 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/index.html:247 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/fr/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/fr/use-cases.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/use-cases.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/use-cases.html:106 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/use-cases.html:108 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/use-cases.html:111 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/use-cases.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/use-cases.html:117 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/fr/use-cases.html:130 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/gallery.html:84 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hi/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hi/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hi/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hi/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hi/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/hi/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/hi/index.html:1 | F1 | 낮음 | 한글 HTML 주석 44개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hi/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hi/index.html:241 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/hi/index.html:247 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hi/index.html:275 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hi/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hi/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hi/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hi/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hu/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hu/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hu/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hu/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hu/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hu/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hu/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/hu/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/hu/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hu/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hu/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hu/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hu/index.html:1 | F1 | 낮음 | 한글 HTML 주석 30개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hu/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hu/index.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/index.html:34 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/index.html:47 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/index.html:254 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/hu/index.html:260 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/index.html:261 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/index.html:311 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hu/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hu/privacy.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/privacy.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/privacy.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hu/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/hu/terms.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/terms.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/terms.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/hu/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/hu/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/id/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/id/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/id/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/id/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/id/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/id/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/id/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/id/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: n.Ra | 문장부호 뒤에 공백 추가. |
| frontend/id/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/id/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/id/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/id/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/id/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/id/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/id/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/id/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/id/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/id/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/id/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/id/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/id/index.html:1 | F1 | 낮음 | 한글 HTML 주석 47개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/id/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/id/index.html:243 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/id/index.html:249 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/id/index.html:277 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/id/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/id/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/id/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/id/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/id/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/id/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/index.html:1 | F1 | 낮음 | 한글 HTML 주석 25개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/index.html:249 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/it/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/it/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/it/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/it/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/it/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: a.Vi | 문장부호 뒤에 공백 추가. |
| frontend/it/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/it/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/it/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/it/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/it/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/it/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/it/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/it/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/it/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/it/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/it/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/it/index.html:1 | F1 | 낮음 | 한글 HTML 주석 44개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/it/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/it/index.html:243 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/it/index.html:249 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/it/index.html:277 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/it/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/it/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/it/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/it/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/it/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/it/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/404.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/404.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/404.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/ja/404.html:23 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/about.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/author.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/author.html:82 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/author.html:103 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/author.html:109 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/author.html:112 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/contact.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/contact.html:116 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ja/contact.html:116 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ja/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/faq.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/faq.html:197 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/faq.html:215 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/faq.html:222 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/faq.html:293 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/gallery-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/gallery-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/gallery-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/ja/gallery-1.html:105 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/gallery-1.html:316 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/gallery-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/gallery-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/gallery-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/ja/gallery-2.html:105 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/gallery-2.html:368 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/gallery-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/gallery-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/gallery-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/ja/gallery-3.html:105 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/gallery-3.html:385 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/gallery-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/gallery-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/gallery-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/ja/gallery-4.html:105 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/gallery-4.html:371 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/gallery.html:102 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/index.html:1 | F1 | 낮음 | 한글 HTML 주석 34개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/index.html:214 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ja/index.html:220 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/index.html:247 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ja/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ja/use-cases.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/use-cases.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/use-cases.html:106 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/use-cases.html:111 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/use-cases.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ja/use-cases.html:117 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/404.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/404.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/404.html:21 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/404.html:26 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/404.html:30 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/about.html:68 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/about.html:87 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/about.html:89 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/author.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/author.html:84 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/author.html:105 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ko/author.html:110 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/author.html:120 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/author.html:123 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/contact.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 6개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/faq.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/faq.html:200 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/faq.html:218 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/faq.html:225 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/faq.html:296 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/gallery-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/gallery-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/gallery-1.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/gallery-1.html:328 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/gallery-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/gallery-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/gallery-2.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/gallery-2.html:331 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/gallery-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/gallery-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/gallery-3.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/gallery-3.html:338 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/gallery-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/gallery-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/gallery-4.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/gallery-4.html:344 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/gallery.html:105 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/index.html:1 | F1 | 낮음 | 한글 HTML 주석 24개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/index.html:248 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ko/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/privacy.html:76 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/terms.html:10 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/terms.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/terms.html:24 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/terms.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ko/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ko/use-cases.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/use-cases.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/use-cases.html:109 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/use-cases.html:115 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/use-cases.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ko/use-cases.html:122 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/mn/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/mn/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/mn/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/mn/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/mn/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/mn/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/mn/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/mn/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/mn/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/mn/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/mn/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/mn/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/mn/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/mn/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/mn/index.html:1 | F1 | 낮음 | 한글 HTML 주석 41개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/mn/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/mn/index.html:243 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/mn/index.html:249 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/mn/index.html:277 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/mn/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/mn/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/mn/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/mn/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/mn/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/mn/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ms/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ms/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ms/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ms/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ms/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ms/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ms/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ms/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: n.Me | 문장부호 뒤에 공백 추가. |
| frontend/ms/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ms/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ms/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ms/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ms/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ms/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ms/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ms/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ms/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ms/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ms/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ms/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ms/index.html:1 | F1 | 낮음 | 한글 HTML 주석 47개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ms/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ms/index.html:243 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ms/index.html:249 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ms/index.html:277 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ms/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ms/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ms/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ms/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ms/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ms/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/nl/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/nl/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/nl/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/nl/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/nl/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/nl/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/nl/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/nl/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/nl/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/nl/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/nl/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/nl/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/nl/index.html:1 | F1 | 낮음 | 한글 HTML 주석 30개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/nl/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/nl/index.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/index.html:34 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/index.html:47 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/index.html:254 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/nl/index.html:260 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/index.html:261 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/index.html:313 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/nl/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/nl/privacy.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/privacy.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/privacy.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/nl/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/nl/terms.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/terms.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/terms.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/nl/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/nl/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/no/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/no/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/no/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/no/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/no/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/no/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/no/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/no/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/no/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/no/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/no/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/no/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/no/index.html:1 | F1 | 낮음 | 한글 HTML 주석 30개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/no/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/no/index.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/index.html:34 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/index.html:47 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/index.html:254 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/no/index.html:260 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/index.html:261 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/index.html:311 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/no/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/no/privacy.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/privacy.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/privacy.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/no/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/no/terms.html:8 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/terms.html:12 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/terms.html:18 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/no/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/no/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pl/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pl/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pl/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pl/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pl/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: a.Po | 문장부호 뒤에 공백 추가. |
| frontend/pl/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pl/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pl/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pl/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pl/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/pl/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/pl/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pl/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pl/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pl/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pl/index.html:1 | F1 | 낮음 | 한글 HTML 주석 44개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pl/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pl/index.html:242 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/pl/index.html:248 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pl/index.html:276 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pl/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pl/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pl/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pl/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pl/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pl/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/privacy.html:76 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pt/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pt/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pt/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pt/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pt/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: o.Ex | 문장부호 뒤에 공백 추가. |
| frontend/pt/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pt/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pt/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pt/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pt/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pt/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/pt/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/pt/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pt/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pt/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pt/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pt/index.html:1 | F1 | 낮음 | 한글 HTML 주석 44개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pt/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pt/index.html:242 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/pt/index.html:248 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pt/index.html:276 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/pt/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pt/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pt/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pt/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/pt/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/pt/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ru/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ru/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ru/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ru/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ru/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ru/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ru/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ru/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ru/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ru/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ru/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ru/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ru/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ru/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ru/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ru/index.html:1 | F1 | 낮음 | 한글 HTML 주석 41개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ru/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ru/index.html:242 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/ru/index.html:248 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ru/index.html:276 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/ru/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ru/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ru/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ru/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/ru/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/ru/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sv/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sv/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sv/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sv/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sv/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sv/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sv/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sv/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: n.Up | 문장부호 뒤에 공백 추가. |
| frontend/sv/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sv/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sv/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sv/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sv/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sv/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sv/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/sv/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/sv/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sv/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sv/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sv/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sv/index.html:1 | F1 | 낮음 | 한글 HTML 주석 41개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sv/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sv/index.html:241 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/sv/index.html:247 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sv/index.html:275 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sv/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sv/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sv/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sv/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sv/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sv/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sw/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sw/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sw/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sw/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sw/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sw/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sw/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sw/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: a.Uz | 문장부호 뒤에 공백 추가. |
| frontend/sw/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sw/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sw/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sw/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sw/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sw/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sw/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/sw/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/sw/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sw/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sw/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sw/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sw/index.html:1 | F1 | 낮음 | 한글 HTML 주석 41개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sw/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sw/index.html:242 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/sw/index.html:248 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sw/index.html:277 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/sw/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sw/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sw/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sw/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/sw/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/sw/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/terms.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/th/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/th/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/th/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/th/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/th/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/th/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/th/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/th/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/th/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/th/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/th/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/th/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/th/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/th/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/th/index.html:1 | F1 | 낮음 | 한글 HTML 주석 41개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/th/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/th/index.html:241 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/th/index.html:247 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/th/index.html:275 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/th/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/th/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/th/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 4개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/th/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/th/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/th/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/tr/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/tr/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/tr/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/tr/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/tr/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/tr/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/tr/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/tr/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/tr/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/tr/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/tr/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/tr/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/tr/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/tr/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/tr/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/tr/index.html:1 | F1 | 낮음 | 한글 HTML 주석 47개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/tr/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/tr/index.html:242 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/tr/index.html:248 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/tr/index.html:276 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/tr/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/tr/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/tr/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/tr/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/tr/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/tr/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/uk/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/uk/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/uk/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/uk/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/uk/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/uk/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/uk/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/uk/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/uk/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/uk/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/uk/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/uk/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/uk/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/uk/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/uk/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/uk/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/uk/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/uk/index.html:1 | F1 | 낮음 | 한글 HTML 주석 41개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/uk/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/uk/index.html:243 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/uk/index.html:249 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/uk/index.html:277 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/uk/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/uk/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/uk/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/uk/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/uk/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/uk/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/use-cases.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:88 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:109 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:115 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:116 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/use-cases.html:122 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/vi/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/vi/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/about.html:65 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/about.html:66 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/about.html:80 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/about.html:81 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/about.html:101 | E2 | 낮음 | 라틴 문자 문장부호 뒤 공백 누락: a.Tr | 문장부호 뒤에 공백 추가. |
| frontend/vi/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/vi/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/vi/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/vi/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/vi/contact.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/contact.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/vi/contact.html:112 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/vi/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/vi/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/vi/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/vi/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/vi/index.html:1 | F1 | 낮음 | 한글 HTML 주석 47개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/vi/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/vi/index.html:242 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/vi/index.html:248 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/index.html:276 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/vi/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/vi/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/vi/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/vi/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/vi/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/vi/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/404.html:1 | F1 | 낮음 | 한글 HTML 주석 1개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/404.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/404.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/zh/404.html:23 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/about.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/about.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/about.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/about.html:83 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/author.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/author.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/author.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/author.html:82 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/author.html:103 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/author.html:109 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/author.html:112 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/contact.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/contact.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/contact.html:114 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/zh/contact.html:114 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/zh/faq.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/faq.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/faq.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/faq.html:197 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/faq.html:215 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/faq.html:222 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/faq.html:293 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/gallery-1.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/gallery-1.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/gallery-1.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/zh/gallery-1.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/gallery-1.html:325 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/gallery-2.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/gallery-2.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/gallery-2.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/zh/gallery-2.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/gallery-2.html:307 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/gallery-3.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/gallery-3.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/gallery-3.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/zh/gallery-3.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/gallery-3.html:330 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/gallery-4.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/gallery-4.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/gallery-4.html:1 | F3 | 낮음 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
| frontend/zh/gallery-4.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/gallery-4.html:349 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/gallery.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/gallery.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/gallery.html:102 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/index.html:1 | F1 | 낮음 | 한글 HTML 주석 34개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/index.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/index.html:211 | E5 | 낮음 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| frontend/zh/index.html:217 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/index.html:241 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/privacy.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/privacy.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/terms.html:1 | F1 | 낮음 | 한글 HTML 주석 3개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/terms.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/use-cases.html:1 | F1 | 낮음 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| frontend/zh/use-cases.html:1 | F2 | 낮음 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| frontend/zh/use-cases.html:7 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/use-cases.html:85 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/use-cases.html:106 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/use-cases.html:111 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/use-cases.html:113 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/use-cases.html:117 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| frontend/zh/use-cases.html:130 | E4 | 낮음 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |

## 공통 문제

| 검사 코드 | 영향 언어 수 | 발견 내용 | 수정 제안 |
| --- | ---: | --- | --- |
| A2 | 31 | 언어 페이지의 루트 절대 링크가 x-default 페이지로 이동: /author | 상대 경로 또는 /ar/ 경로로 바꾸기. |
| A3 | 23 | 같은 ar 페이지에서 연결되지 않는 페이지: ar/author.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| A3 | 23 | 같은 ar 페이지에서 연결되지 않는 페이지: ar/faq.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| A3 | 23 | 같은 ar 페이지에서 연결되지 않는 페이지: ar/gallery.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| A3 | 23 | 같은 ar 페이지에서 연결되지 않는 페이지: ar/use-cases.html | 언어별 메인, 내비게이션, 블로그 목록 중 적절한 곳에서 링크 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/ai-poem-prompt-patterns.html | ar/ai-poem-prompt-patterns.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/ai-poetry-simplicity-preference.html | ar/ai-poetry-simplicity-preference.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/case-birthday-bilingual.html | ar/case-birthday-bilingual.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/case-hwangap-tribute.html | ar/case-hwangap-tribute.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/case-wedding-toast.html | ar/case-wedding-toast.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/hanja-tokenizer-conflict.html | ar/hanja-tokenizer-conflict.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/isang-ogamdo.html | ar/isang-ogamdo.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/jeongjiyong-hyangsu.html | ar/jeongjiyong-hyangsu.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/kimsowol-jindallaekkot.html | ar/kimsowol-jindallaekkot.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/llm-korean-sijo-meter.html | ar/llm-korean-sijo-meter.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/poems-for-tts-reading.html | ar/poems-for-tts-reading.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/poetry-recitation-revival.html | ar/poetry-recitation-revival.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/sijo-meter-for-ai.html | ar/sijo-meter-for-ai.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/tts-vs-human-recitation.html | ar/tts-vs-human-recitation.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/wedding-speech-poem-tips.html | ar/wedding-speech-poem-tips.html에 대응 페이지 추가. |
| A4 | 30 | ko 기준 누락 페이지: blog/yoondongju-seosi.html | ar/yoondongju-seosi.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: blog/article-10.html | ar/article-10.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: blog/article-6.html | ar/article-6.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: blog/article-7.html | ar/article-7.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: blog/article-8.html | ar/article-8.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: blog/article-9.html | ar/article-9.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: 404.html | ar/404.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: gallery-1.html | ar/gallery-1.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: gallery-2.html | ar/gallery-2.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: gallery-3.html | ar/gallery-3.html에 대응 페이지 추가. |
| A4 | 25 | ko 기준 누락 페이지: gallery-4.html | ar/gallery-4.html에 대응 페이지 추가. |
| A5 | 30 | A5 푸터 구조 불일치: blog/article-1.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | A5 푸터 구조 불일치: blog/article-2.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | A5 푸터 구조 불일치: blog/article-3.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | A5 푸터 구조 불일치: blog/article-4.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | A5 푸터 구조 불일치: blog/article-5.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | A5 푸터 구조 불일치: blog/index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | A5 푸터 구조 불일치: about.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | A5 푸터 구조 불일치: contact.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | A5 푸터 구조 불일치: index.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | ko 동등 페이지에는 있으나 없는 header: privacy.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| A5 | 30 | A5 푸터 구조 불일치: privacy.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 30 | ko 동등 페이지에는 있으나 없는 header: terms.html | ko 페이지의 header 구조를 이 페이지에 동기화. |
| A5 | 30 | A5 푸터 구조 불일치: terms.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 28 | A5 푸터 구조 불일치: author.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 28 | A5 푸터 구조 불일치: faq.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 28 | A5 푸터 구조 불일치: gallery.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| A5 | 28 | A5 푸터 구조 불일치: use-cases.html (class 또는 링크 href 집합이 ko와 다름). | ko 동등 페이지의 footer class와 링크 href 집합을 맞추기. |
| C3 | 31 | 기사 링크 텍스트 "مدونة"와 대상 h1 "مبدأ كتابة الذكاء الاصطناعي للشعر: لقاء التكنولوجيا والعاطفة" 불일치: blog/ar/article-1.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| C3 | 31 | 기사 링크 텍스트 "كيفية كتابة خطابات زفاف مؤثرة"와 대상 h1 "5 نصائح لكتابة شعر رائع: الإبداع مع الذكاء الاصطناعي" 불일치: blog/ar/article-2.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| C3 | 31 | 기사 링크 텍스트 "مجموعة من الاقتباسات العاطفية الشائعة على SNS"와 대상 h1 "إلهام من حرفة الشعراء المشهورين" 불일치: blog/ar/article-3.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| C3 | 23 | 기사 링크 텍스트 "AI কবিতা তৈরি করার ভবিষ্যৎ: লেখককে প্রতিস্থাপন করবে?"와 대상 h1 "AI কবিতা সৃষ্টির ভবিষ্যৎ: লেখককে প্রতিস্থাপন করবে কি?" 불일치: blog/bn/article-4.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| C3 | 23 | 기사 링크 텍스트 "আবেগপূর্ণ বক্তৃতা এবং চিঠি, AI দ্বারা ১০ সেকেন্ডে সম্পন্ন করুন"와 대상 h1 "আবেগময় বক্তৃতা এবং চিঠি, AI দিয়ে 10 সেকেন্ডে সম্পন্ন করুন" 불일치: blog/bn/article-5.html | 메인 미리보기·블로그 목록 제목을 기사 h1과 맞추기. |
| C4 | 28 | CreativeWork text와 화면 pre 내용이 일치하지 않음. | CreativeWork text를 화면에 보이는 시 전문과 동기화. |
| C4 | 27 | FAQ 3 화면과 JSON-LD 불일치. 화면 질문="টুল কি স্বয়ংক্রিয়ভাবে ভয়েস তৈরি করে?", JSON-LD 질문="টুল কি স্বয়ংক্রিয়ভাবে ভয়েস তৈরি করে?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| C4 | 23 | FAQ 2 화면과 JSON-LD 불일치. 화면 질문="তৈরি হওয়া কবিতা কি ব্যবসায়িক কাজে ব্যবহার করা যাবে?", JSON-LD 질문="তৈরি হওয়া কবিতা কি ব্যবসায়িক কাজে ব্যবহার করা যাবে?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| C4 | 22 | FAQ 1 화면과 JSON-LD 불일치. 화면 질문="AI & Poem কত দ্রুত কবিতা তৈরি করে?", JSON-LD 질문="AI & Poem কত দ্রুত কবিতা তৈরি করে?". | summary·답변과 FAQPage mainEntity를 같은 문구로 동기화. |
| C5 | 31 | 수동 확인, 지원 언어 수 31개. 화면 문장: نحن ندعم 31 لغة بما في ذلك الكورية والإنجليزية واليابانية والصينية والفرنسية، مما يسمح للمستخدمين العالميين بالاستمتاع بالشعر بلغتهم الأم. | 표기 숫자가 실제 option 수 31와 맞는지 확인. |
| D1 | 30 | 비한국어 화면 텍스트에 한글 포함: 한국어 | 페이지 언어로 번역하거나 의도한 고유명사인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: velog.io/@jaekuk2/posts | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: facebook.com/jaekuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: © 2026 ai-and-poem.art. All rights reserved. | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: Poem form | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: 0.8× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.0× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: 1.2× | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: AI voice | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: G-1CVHJYZWNC | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: ca-pub-7349192768683799 | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: aboutads.info | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D2 | 30 | 동명 en 페이지와 같은 2단어 이상 텍스트: Ryu Jae-kuk | 페이지 언어로 번역하거나 공통 고정 문구인지 확인. |
| D3 | 31 | 알려진 미번역 문자열 "All rights reserved" 발견. | 페이지 언어에 맞는 문구로 번역. |
| D3 | 31 | 알려진 미번역 문자열 "Poem form" 발견. | 페이지 언어에 맞는 문구로 번역. |
| D3 | 31 | 알려진 미번역 문자열 "Speed" 발견. | 페이지 언어에 맞는 문구로 번역. |
| D3 | 31 | 알려진 미번역 문자열 "AI voice" 발견. | 페이지 언어에 맞는 문구로 번역. |
| D3 | 31 | 알려진 미번역 속성 aria-label="Stop" 발견. | 페이지 언어에 맞는 aria-label로 번역. |
| E1 | 23 | 화면 텍스트에 마크다운 잔여 기호: এআই এর কবিতা লেখার ক্ষমতার মূল ভিত্তি হল **বৃহৎ ভাষা মডেল (Large Language Model, LLM)**। GPT এর মতো মডেলগুলি কয়েকশো কোটি বাক্য এবং টেক্সট ডেটা শিখেছে। এই প্রক্রিয়ায় এআই কেবল শব্দ মনে রাখে না, বরং শব্দ এবং শব্দের মধ্যে সম্ভাব্য সম্পর্ক, প্রেক্ষাপট, এবং সূক্ষ্মতা শিখে। | 마크다운 기호를 HTML 서식 또는 일반 텍스트로 교체. |
| E4 | 31 | HTML 본문 또는 속성에 이스케이프되지 않은 & 포함. | &를 &amp;로 이스케이프. |
| E5 | 31 | 빈 p 요소 발견. | 빈 p 제거 또는 필요한 내용 추가. |
| F1 | 31 | 한글 HTML 주석 2개. | 배포 HTML에서 필요 없는 편집 주석 제거. |
| F2 | 31 | function gtag 선언 2개. | gtag 초기화 선언을 하나로 합치기. |
| F3 | 29 | 페이지 h1 2개. | 문서 주제를 나타내는 h1 하나만 유지. |
