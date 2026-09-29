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

## 서버 음성

한국어·영어 서버 음성 공급자는 OpenAI로 선택했다. 모델은 `gpt-4o-mini-tts`,
한국어 음성은 `marin`, 영어 음성은 `cedar`, 출력은 MP3다.
2026-09-26 벤치마크 전체 평균은 OpenAI 2.5점, AWS Polly 2.25점이었다.
다른 29개 언어와 서버 음성 미설정·실패 시에는 브라우저 TTS를 사용한다.
모델·음성·출력 형식은 [OpenAI 음성 API](https://developers.openai.com/api/reference/resources/audio/subresources/speech/methods/create) 기준이다.

서버 음성을 켜려면 `backend/.env.example`의 아래 값을 배포 환경에 설정한다.

```text
OPENAI_API_KEY=<OpenAI API 키>
TTS_ENABLED_LANGS=ko,en
TTS_PROVIDER=openai
TTS_TOKEN_SECRET=<충분히 긴 무작위 비밀값>
TTS_NONCE_TABLE=<DynamoDB 테이블 이름>
AWS_REGION=ap-northeast-2
```

공급자 기본값은 `openai`다. 활성 언어·API 키·토큰 비밀값·테이블 이름이 없으면 서버 음성은 비활성이다.
`.env.example`은 예제이며 실제 `.env`나 Lambda 환경변수를 자동으로 설정하지 않는다.
`TTS_NONCE_TABLE`은 실제 DynamoDB 테이블 이름이어야 한다. 파티션 키는 문자열 `jti`,
TTL 속성은 숫자 `expiresAt`다. Lambda 역할에는 해당 테이블의 `dynamodb:PutItem` 권한이 필요하다.
OpenAI 운영 경로에는 Polly 권한이 필요 없다. 테이블은 nonce와 만료만 저장한다.
서버는 시 원문과 MP3를 저장하지 않는다.

`/generate-poem`은 기존 `poem` 필드를 유지한다. 서버 TTS가 켜진 `ko`·`en` 응답에는 10분짜리
일회용 `ttsToken`이 추가된다. `POST /synthesize-speech`는 아래 본문을 받고 `audio/mpeg`와
`Cache-Control: no-store`를 반환한다. Lambda 핸들러는 `audio/mpeg`를 Base64로 인코딩해
바이너리 손상을 막는다. JSON 성공·오류 응답은 텍스트로 유지한다.

```json
{
  "poem": "생성된 시 원문",
  "language": "ko",
  "ttsToken": "서명 토큰"
}
```

토큰은 시 해시·언어·만료·nonce를 묶어 서명한다. 위조·만료·재사용 요청은 거절한다.
합성을 시작한 토큰은 성공·실패 여부와 관계없이 다시 사용하지 않는다.
같은 시의 MP3는 페이지 메모리에 보관하고 완료·정지 후에도 재사용한다.
합성 중 정지는 자동 재생만 멈춘다. 진행 중 요청은 35초 제한 안에서 마쳐 캐시하고,
그 전에 다시 재생하면 같은 요청을 기다린다. 새 시 생성·페이지 종료 때는 요청을 취소하고 Blob URL을 해제한다.
브라우저 요청 취소가 이미 시작한 서버 합성까지 취소하지는 않는다.
실패·시간 초과 때는 기기 음성으로 한 번만 전환하며, 기기 음성이 나중에 준비되면 재생 버튼을 복구한다.

회귀 테스트는 `npm test`로 실행한다. Lambda 바이너리 전달, 한국어·영어 OpenAI 요청,
반복 재생, 합성 중 정지·재시작, 요청 취소·시간 초과, 중복 오류, 음성 목록 지연을 검사한다.
테스트는 모의 응답을 사용하며 실제 OpenAI·AWS 요청을 보내지 않는다.

## TTS 비교 재실행

비교 스크립트는 한국어 3편·영어 2편을 AWS Polly·OpenAI에서 각각 합성한다.
`backend` 디렉터리에서 `npm run evaluate:tts`로 실행한다. 실제 합성 비용이 발생하며
`OPENAI_API_KEY`와 AWS 자격 증명이 필요하다. 운영 공급자 설정은 자동으로 변경하지 않는다.
출력은 저장소 루트의 `.context/tts-benchmark/<실행시각>/`에 저장한다.
`scorecard.json`의 발음·행간 쉼·자연스러움·시 정서를 각 5점으로 평가한 뒤
`provider-map.private.json`을 확인한다.
`npm run evaluate:tts -- --score ../.context/tts-benchmark/<실행시각>`으로 결과를 계산한다.
스크립트는 평균 차이가 0.25점 이상이면 높은 공급자를, 미만이면 AWS Polly를 선택한다.

## 배포 확인

Lambda 제한시간은 시조 처리 예산 25초, OpenAI TTS 제한 30초 외에 DynamoDB 기록·응답 처리 시간도 포함하도록 설정한다.
브라우저 대기 제한은 시 생성 30초, 서버 음성 35초다. TTS 환경변수·테이블·권한은 배포 환경에서 별도로 확인한다.
백엔드를 먼저 배포하고 한국어·시조 요청의 성공·실패 응답을 확인한 뒤 한국어 안내문을 배포한다.
서버 로그의 시도 횟수·처리시간·음절 수와 `SIJO_VALIDATION_FAILED`·`SIJO_TIMEOUT` 빈도를 확인한다.
로그에는 사용자 주제와 시 원문을 남기지 않는다.

기준 출처: [한국민족문화대백과사전 평시조](https://encykorea.aks.ac.kr/Article/E0059915).
API 구조: [OpenAI 구조화 출력](https://developers.openai.com/api/docs/guides/structured-outputs).
모델 기능·단가: [GPT-5 mini](https://developers.openai.com/api/docs/models/gpt-5-mini).
