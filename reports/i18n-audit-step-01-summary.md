# i18n 감사 STEP 01 작업 기록

## 작업 결과

- `scripts/i18n-audit.mjs` 추가.
- `package.json`, `package-lock.json`에 `cheerio` 개발 의존성 및 `test:i18n` 스크립트 추가.
- 전체 언어 및 ch 기준선 보고서 생성.
  - `reports/i18n-audit-baseline-all.md`
  - `reports/i18n-audit-baseline-all.json`
  - `reports/i18n-audit-baseline-ch.md`
  - `reports/i18n-audit-baseline-ch.json`
- C5 테스트 추가. `de-CH` 임시 fixture에서 다음 문장 3개와 언어 option 수를 검증.
  - `Unterstützt über 20 Sprachen.`
  - `In über 32 Sprachen verfügbar.`
  - `Jetzt in 31 Sprachen.`
- A5 검사 보완.
  - header, footer, favicon(`link rel="icon"`), `script.js`를 각각 검사.
  - footer class 또는 내부 링크 `href` 집합이 ko 동등 페이지와 다르면 중간 심각도 `A5 푸터 구조 불일치` 보고.
  - 링크 없는 footer 임시 fixture에서 불일치 검출 테스트 추가.
- 사이트 HTML, JS, CSS, sitemap.xml 수정 없음.

## 터미널 명령과 결과

```sh
node scripts/i18n-audit.mjs --out i18n-audit-baseline-all
```

전체 기준선 생성 완료. 언어별 요약이 콘솔에 출력됐고 Markdown·JSON 보고서가 `reports/`에 생성됨.

```sh
node scripts/i18n-audit.mjs --lang ch --out i18n-audit-baseline-ch
```

ch 기준선 생성 완료.

| 언어 | 높음 | 중간 | 낮음 | 색인 허용 페이지 수 |
| --- | ---: | ---: | ---: | ---: |
| x-default | 10 | 41 | 50 | 9 |
| ch | 55 | 65 | 58 | 0 |

```sh
node -e 'JSON.parse(require("fs").readFileSync("reports/i18n-audit-baseline-ch.json","utf8")); console.log("OK")'
```

출력: `OK`

```sh
grep -n 'A5' reports/i18n-audit-baseline-ch.md
```

결과:

- 높음, header 누락 2건: `frontend/ch/privacy.html`, `frontend/ch/terms.html`.
- 중간, `A5 푸터 구조 불일치` 15건: blog 6건, 일반 페이지 9건.
- favicon 및 `script.js` 누락 A5 항목 없음.

```sh
git status --short
```

커밋 전 출력:

```text
?? package-lock.json
?? package.json
?? reports/
?? scripts/
```

```sh
git add scripts reports package.json package-lock.json
git commit -m "ch STEP 01: i18n 검사 스크립트와 수정 전 기준선"
```

커밋 생성: `5e00a2d ch STEP 01: i18n 검사 스크립트와 수정 전 기준선`

커밋 후 `git status --short` 출력 없음.

## 테스트 결과

```sh
npm run test:i18n
```

```text
tests 4
pass 4
fail 0
```

검증 항목:

- CLI 옵션 및 잘못된 보고서 접두사 처리.
- fixture 감사, `de-CH` 언어 예외, `--lang` 필터, 보고서 생성.
- C5 언어 수 문장 3개 추출 및 option 수 표시.
- 링크 없는 footer의 A5 구조 불일치 검출.
