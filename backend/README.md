# 한국어 시조 검증

`language: "ko"`, `form: "sijo"` 요청은 장별 네 음보를 생성한 뒤 서버에서 검사한다.
초장·중장은 `3·4·3(4)·4`, 종장은 `3·5·4·3`을 적용한다.
이는 서비스의 생성 기준이며, 전통 시조의 모든 변형을 판별하는 규칙은 아니다.

모델 응답은 `chojang`, `jungjang`, `jongjang` 객체로 받는다.
각 장의 `first`, `second`, `third`, `fourth` 문자열에 위치별 음절 수를 제한하는 JSON Schema를 적용한다.
배열 대신 이름이 있는 필드를 써서 각 음보에 다른 음절 수를 지정한다. 서버에서도 같은 기준으로 다시 센다.

한국어 시조는 `gpt-5-mini`의 `reasoning_effort: "low"`를 사용한다.
`gpt-4o-mini`와 `gpt-4.1-mini`의 실제 평가에서는 음절 수를 맞추면서 단어나 어미를 잘라 낸 출력이 반복되었다.
추론 모델로 이 문제를 줄였으며, 다른 형식은 기존 `gpt-4o-mini`를 유지한다.
시조는 추론 토큰 비용과 대기시간이 추가된다. 호출당 출력·추론 토큰 합계는 4,096개로 제한한다.

NFC 정규화 후 완성형 한글을 세고 공백·탭과 `.,!?'"·…`는 제외한다.
숫자·외국 문자·미완성 자모·줄바꿈을 포함한 음보는 반려한다.
문법, 자연스러운 음보 경계, 시상의 전환은 별도 품질 검토 대상이다.

생성은 최대 세 번, 전체 25초로 제한한다. 거절·콘텐츠 필터 응답은 재시도하지 않는다.
성공 응답은 기존 `{ "poem": "세 행의 시" }` 형식이다.
검증 실패는 HTTP 502와 `SIJO_VALIDATION_FAILED`, 거절은 HTTP 502와 `SIJO_REFUSED`,
시간 초과는 HTTP 504와 `SIJO_TIMEOUT` 코드를 반환한다. 오류 응답에는 한국어 `error` 메시지가 포함된다.

## 검사

Node.js 22에서 `backend` 디렉터리 기준으로 실행한다.

```sh
npm test
```

단위·HTTP·화면 핸들러 테스트는 실제 API 키나 외부 요청을 사용하지 않는다.

```sh
npm run evaluate:sijo
```

평가 명령은 환경 변수 또는 `backend/.env`의 `OPENAI_API_KEY`로 실제 API를 호출하며 사용량이 발생한다.
겨울밤·그리움·도시를 각각 세 번 평가하고, 후보 통과율·최종 성공률·처리시간·시를 JSON으로 출력한다.
주제별 반복 횟수는 `npm run evaluate:sijo -- 1`처럼 지정한다.
출력한 시는 음보 경계·문법·주제 적합성을 직접 검토한다.

## 배포 확인

Lambda 제한시간은 25초 처리 예산보다 긴 최소 30초인지 확인한다. 브라우저 대기 제한은 30초다.
백엔드를 먼저 배포하고 한국어·시조 요청의 성공·실패 응답을 확인한 뒤 한국어 안내문을 배포한다.
서버 로그의 시도 횟수·처리시간·음절 수와 `SIJO_VALIDATION_FAILED`·`SIJO_TIMEOUT` 빈도를 확인한다.
로그에는 사용자 주제와 시 원문을 남기지 않는다.

기준 출처: [한국민족문화대백과사전 평시조](https://encykorea.aks.ac.kr/Article/E0059915).
API 구조: [OpenAI 구조화 출력](https://developers.openai.com/api/docs/guides/structured-outputs).
모델 기능·단가: [GPT-5 mini](https://developers.openai.com/api/docs/models/gpt-5-mini).
