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

## 한글 AI 티 제거 규칙 (im-not-ai 기반)

한글 텍스트 생성·수정 시 자동 적용. 세부 처방은 아래 카테고리별로 확인.

### 5대 철칙
1. 의미 불변 — 사실·주장·수치·고유명사·직접인용 100% 보존
2. 근거 기반 — 탐지된 span에만 수정. 탐지 없는 구간 건드리지 않음
3. 장르 유지 — 칼럼을 에세이로, 리포트를 블로그로 바꾸지 않음
4. 과윤문 금지 — 변경률 30% 경고, 50% 강제 중단
5. 문체 불변 — 원문 문체(격식체·평어체·구어체)를 그대로 유지.
   격식체 입력 → 격식체 출력. 평어체 입력 → 평어체 출력.
   요청에서 별도 지정 시 지정 문체 우선.

### A. 번역투 [S1 즉시 제거]
- "~에 대해(서)" → 목적격 조사로 직결 ("AI 규제를 논의해야 한다")
- "~를 통해" → "~로" / "~해서" / "~함으로써"
- "~에 있어서" → "~에서" 또는 삭제
- "가지고 있다" → 형용사형 ("경쟁력이 강하다")
- "~되어진다" → "~된다" 또는 능동형
- "~에 의해" 피동 → 행위자를 주어로 ("AI가 만든" ← "AI에 의해 생성된")
- "~할 수 있다" 남발 → 확정형 ("높인다", "줄인다")

### B. 영어 인용·용어 과다 [S2]
- 번역 가능한 영어를 한국어로 ("framework 활용" → "체계 활용")
- 괄호 병기는 첫 등장 1회만, 이후 한국어만

### C. 구조적 AI 패턴 [S1~S2]
- "첫째·둘째·셋째" 기계적 열거 → 산문으로 녹이거나 어휘 변주
- 이모지 남발 (에세이·리포트류) → 전량 제거
- 매 섹션 헤딩 직후 "이 섹션에서는 ~" 안내문 → 삭제

### D. AI 특유 관용구 [S1 즉시 삭제]
- "결론적으로", "요약하면", "정리하자면" → 삭제
- "시사하는 바가 크다", "주목할 만하다" → 삭제
- "혁신적인", "획기적인", "전례 없는" → 구체 표현으로 대체
- "~할 때입니다 / 시점입니다" 결말 공식 → 구체 동사 단언으로

### E. 리듬 균일성 [S2]
- 모든 문장이 30~50자 → 단문(10~15자) 1~2개를 문단마다 삽입
- 동일 종결어미 반복 → "~다" / "~았다" / 명사형 종결 혼용

### F. 과도한 수식 [S2]
- "매우", "정말", "대단히" → 대부분 삭제, 수치·사례로 대체
- 동의어 이중 수식 ("중요하고 핵심적인") → 하나만

### G. Hedging 남용 [S2]
- "~할 수 있을 것으로 보인다" → 단언 가능한 곳은 단언
- 이중 완곡 ("있을 수 있다") → 하나만

### H. 접속사 남발 [S2]
- 문두 "또한·따라서·즉·나아가" → 70% 이상 제거
- "이는 ~을 의미한다" 반복 → 앞 문장에 합치거나 삭제

### I. 형식명사 과다 [S2]
- "~한 것이다" 종결 → "~다"로 직결
- "~할 필요가 있다" → "~해야 한다"
- "~라는 것이다" → "~다"

### J. 시각 장식 남용 [S2]
- 과도한 **볼드** → 본문에서 거의 제거
- 대시(—) 남용 → 쉼표 또는 별도 문장으로
