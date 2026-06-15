# TAEKYUNG WORKS — 포트폴리오 작업 폴더 (AI 에이전트 진입점)

> 이 폴더는 노태경(PM 지망)의 **인터랙티브 포트폴리오 웹사이트** 제작용 자료 모음입니다.
> **상태: 구현 착수 — React(Vite + TS + Tailwind v4) 스캐폴드 완료 (2026-06-11).** 구현 진입점은 `IMPLEMENTATION.md`. 기획/디자인 문서 + 이미지 자산 + `src/` 코드 존재.
> 이 문서는 폴더의 **안내판**입니다. 자료를 일일이 열지 말고, 아래 순서로 읽고 `manifest/`의 카탈로그를 참조하세요.

---

## 0. 여기서 시작 (읽는 순서)

0. **`IMPLEMENTATION.md`** — 구현 진입점(스택·폴더·빌드 순서·실행). **코드 작업이면 이걸 먼저.**
1. **`manifest/docs.json`** — 모든 문서의 역할·요약·읽는 순서·권위/staleness. (제일 먼저)
2. **`taekyung-works-design-direction.md`** — ⭐ 최신·최고 권위. 구성·비주얼·인터랙션·엔딩 모든 결정. 충돌 시 이 문서를 따른다.
3. **`portfolio-planning.md`** — 콘텐츠·케이스스터디·카피(무엇을·왜).
4. **`taekyung-works-design-system.md`** — 컬러 토큰·타이포·룸 스펙·모션 토큰.
5. 필요 시: `portfolio-work-log-and-next-plan.md`(⚠️ 일부 철 지남, '제작 이력'으로만), 커리큘럼/이미지 프롬프트 md.

## 1. 이미지·자산을 찾을 땐 → `manifest/` 카탈로그

| 파일 | 내용 |
|------|------|
| `manifest/docs.json` | 문서 7개 (역할·읽는순서·권위) |
| `manifest/assets.generated.json` | AI 생성 자산 25 (룸 배경·전환·프레임·Hero·오브젝트팩) — path·용도·비율·투명·설명 |
| `manifest/evidence.json` | 실제 증거 57 (PULSE/PickFit 화면·발표자료·로고, 멋사 카드뉴스·세션사진, FLOW·AboutPM·Adwise·상장) — path·화면·분류·삽입위치 |
| `manifest/fonts.json` | ITC Avant Garde 20종 (weight·역할) + 본문/라벨 폰트 안내 |
| `manifest/hero_layers.json` | Hero 자화상 레이어 18종 + 좌표 원본·모션 가이드·bbox 이슈 |

> 각 항목의 `desc`는 **사람이 이미지를 직접 열어 확인한 내용**입니다(지어내기 없음). 이미지를 다시 열지 않고 이 설명을 신뢰해도 됩니다.

## 2. 폴더 맵

```
.                          기획/디자인 md 4개 + CLAUDE.md
manifest/                  ⭐ 카탈로그 5개 (위 표)
이미지_생성결과/            AI 생성 자산 16 + hero_layers/(18+manifest) + object_packs/(9)  → assets.generated.json, hero_layers.json
참고 자료 이미지/           실제 증거 (pulse·픽핏·멋쟁이사자처럼·adwise·flow·논문 상장·AboutPM_3d)  → evidence.json
이미지_래퍼런스/            생성 입력: collage_ref_01~11, typography_ref_01~02, image.md, imgeprompt.md
ITC Avant Garde/           디스플레이 폰트 ttf 20 + 프리뷰  → fonts.json
```

## 3. 프로젝트 한눈에 (자세한 건 design-direction.md)

- **목표:** PM/서비스기획 취업. 채용자 10초 스캔 + 개성/완성도 동시(이중 동선).
- **포맷:** 하이브리드 — 랜딩(빠른 길) + 프로젝트 상세 페이지(느린 길/몰입 룸).
- **내러티브 척추:** "AI가 90점을 만드는 시대. 나는 그 90점을 더 잘 뽑아내고, 마지막 10점을 직접 해본 경험으로 채웁니다." (출처: 본인 벨로그)
- **Hero 헤드라인(압축):** "AI가 답을 만드는 시대에, 저는 마지막 판단을 설계합니다."
- **대표 3 프로젝트 + 액센트색:** PULSE(딥블루 #002B7A, 데이터→실행) / PickFit(라임 #E3FF5D, 선택→결정) / LikeLion(오렌지 #FF6000, 개념→흐름).
- **비주얼 위계:** 미니멀 타이포(보스) + 종이 콜라주(액센트) + MS Paint 낙서(벨로그 전용). 흰 골격 + 페이지별 액센트 1색.
- **시그니처 전환:** 프로젝트 제목 클릭 → CSS 3D 글자 플립(검정→액센트) + 배경 원확산(그 프로젝트 연한 톤) → 상세 진입. (~0.9s)
- **벨로그('생각의 기록')** 강조 / **FLOW·AboutPM**은 명칭 없는 담백한 '그 외 작업'('Lab' 섹션 해체).
- **엔딩:** 블랙 피날레 — 검정 전환 → 연락처(github·velog·email, 호버 시 브랜드색) → "Carpe Diem" + 마무리 한 줄.
- **연락처 이메일:** ntk9477@naver.com.

## 4. 구현 스택 (구현 착수 시)

- React + Vite + Tailwind + TypeScript + **Framer Motion**(일반 UI).
- **Hero: react-three-fiber(Three.js) + GSAP**. **진입 전환: CSS 3D + GSAP**(WebGL 텍스트는 폰트 충실도 손실). **Lenis** 부드러운 스크롤.
- 가드레일(design-direction §8): Inter 금지, AI 블루/보라(LILA) 금지, 3카드 가로 나열 금지, 박스 남용 금지, transform/opacity만, min-h-[100dvh], reduced-motion 필수.

## 5. 경로·파일명 규칙 (중요)

- 모든 카탈로그 path는 **이 폴더(루트) 기준 상대경로**.
- **2026-06-09 리네임:** `참고 자료 이미지/`의 암호성 이름(스크린샷·Frame·image·MacBook 등)을 **내용 기반 이름**으로 변경. `이미지_래퍼런스/` 해시는 `collage_ref_NN`/`typography_ref_NN`로.
- **유지(리네임 안 함):** `이미지_생성결과/`(이미 내용과 일치) · `hero_layers/` · `멋쟁이사자처럼/` 한글 카드명 · `ITC Avant Garde/` 폰트.
- 자산을 옮기거나 다시 이름 바꾸면 **반드시 `manifest/`와 문서 참조를 함께 갱신**할 것. (현재 문서 참조와 정합 상태)
- 범위 외(별도 작업): 대용량 PNG의 WebP/AVIF 변환, 이미지 alt 확정.

---

_생성: 2026-06-09 · 폴더 총 148개 파일(자료 142 + 인덱스 6: manifest 5 + CLAUDE.md) / 약 101MB._
