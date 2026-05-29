# AI & Poem 프로젝트 — Claude 작업 가이드

## Language
- Always respond in Korean (한국어) regardless of the language of the codebase or file content.
- Plans, explanations, and all communication must be in Korean.

## 라이브 환경
- 운영 URL — `https://ai-and-poem.art/` (root = ko 메인), `/ko/`, `/en/`
- 프론트엔드 — Cloudflare Pages, 정적 HTML, 빌드 단계 없음 (edit-then-deploy)
- 백엔드 — `backend/index.js` 단일 파일, AWS Lambda (`serverless-http` 래핑)

## Multi-file invariant (편집 시 반드시 동기화)
- **한국어 메인 본문 3-way 동기화** — `frontend/index.html` · `frontend/ko/index.html` · `frontend/content_ko_main.md`
- **영어 메인 본문 2-way 동기화** — `frontend/en/index.html` · `frontend/content_en_main.md`
- **공통 UI 변경 시 31개 언어 HTML 일괄 편집** — `frontend/<lang>/index.html` 각 파일 (lang = ko/en/ja/zh/es/fr/...)
- **시 형식 추가 시** — `backend/index.js`의 `ALLOWED_FORMS`·`FORM_PROMPTS` + `frontend/script.js`의 `formOptionsMap` 동시 갱신
- **새 언어 기능 추가 시** — `frontend/script.js`의 5개 맵 모두 갱신 (`languageMap`, `processingMessage`, `errorMessage`, `consentMessageMap`, `formOptionsMap`)

## 커밋 컨벤션
- 메시지 형식 — `<X.Y> <한국어 설명>` (예: `5.1 시 형식 셀렉터 추가`)
- 현재 시리즈 — `5.x`. `git log --oneline -5`로 다음 마이너 번호 확인
- PR base 브랜치 — `jaekuky/analyze-project` (master 아님)

## 정책 준수 (수익화 핵심)
- AdSense 거부 사유 대응 — `ko`/`en`만 색인, 나머지 26개 언어는 noindex (4.9에서 정리)
- `backend/index.js`의 `DISALLOWED_KEYWORDS`는 다국어 금칙어, 신규 추가 시 같은 카테고리로 모든 언어에 보강
- CORS 허용 — `ai-and-poem-jaekuky.pages.dev`, `ai-and-poem.art` 만 (`backend/index.js:11`)

## 검증
- 라이브 변경 확인 — Chrome으로 `ai-and-poem.art` 열고 `document.body.innerText` 검사
- 정적 HTML 인덱싱 검증(Search Console 대체) — `fetch(url).then(r=>r.text())`로 raw HTML 회수해 섹션 ID·헤딩 존재 확인
- 모바일 검증 — `resize_window`로 375~390px 리사이즈 후 `scrollWidth === clientWidth` 확인 (1차 호출 시 적용 안 될 수 있음, 재호출 필요)
