# 프론트엔드 비배포 자료

2026-09-27에 `frontend/`에서 옮긴 자료. 기존 하위 경로와 파일 내용을 유지했다. 배포 대상은 프로젝트 루트의 `frontend/`이며, `archive/`는 배포하지 않는다.

| 보관 경로 | 파일 수 | 용도 |
| --- | ---: | --- |
| `frontend/content_*.md` | 6 | 메인·소개·저자 페이지 편집 원고. HTML과 동기화 유지 |
| `frontend/posts/` | 2 | 황진이 시조 미발행 초안과 이미지 원본 |
| `frontend/image/blog/ko/` | 5 | 현재 HTML·CSS·JS에서 참조하지 않는 블로그 이미지 |
| `frontend/`와 하위 폴더의 `.DS_Store` | 6 | macOS 폴더 설정. 사이트 실행과 무관 |

미사용 블로그 이미지:

- `hanyongun-nimui-chimmuk-og.png`
- `hwangjini-dongjitdal-og.png`
- `kimyeongnang-moran-og.png`
- `yiyuksa-gwangya-og.png`
- `yunseondo-ouga-og.png`

`hwangjini-dongjitdal-og.png`는 미발행 초안에서만 참조한다. 초안의 `og_image`는 발행 예정 URL이므로 그대로 보관했다. 발행할 때 이미지를 원래 공개 경로로 복원하고 HTML을 작성해야 한다. 외부 사이트의 직접 링크·접속 기록은 확인하지 않았다.

복원할 파일 경로에서 앞의 `archive/`를 빼면 원래 위치다. 같은 이름의 파일이 이미 있으면 비교 후 복원한다.

`.DS_Store`는 기존 `.gitignore` 규칙에 따라 Git 추적 대상에서 제외된다. Finder 사용 중 다시 생길 수 있으며 배포에는 필요 없다.
