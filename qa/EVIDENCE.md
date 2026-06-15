# QA 라이브 증거팩 (Wave 0) — 메인 에이전트 직접 캡처

> 이 문서는 메인 에이전트가 dev 서버(`http://localhost:5188`)에 **직접 들어가** 측정한 라이브 사실의 단일 출처입니다.
> 리뷰어는 이 사실 + 소스코드 + 디자인 문서를 근거로 자기 렌즈에서 검수합니다. **추측 금지, 측정·코드 인용만.**
> 캡처 환경: Windows / Chromium dpr=2 / Vite dev. 뷰포트 데스크톱 1440×900, 태블릿 768, 모바일 390.

## A. 게이트 (통과)
- `npm run typecheck` → **PASS** (에러 0)
- `npm run build` → **PASS** (660ms). 번들:
  - `index.css` 35.4 KB (gzip 7.6)
  - `index.js` **547 KB** (gzip 178) — ⚠️ Vite 500KB 경고 대상
  - `HeroScene.js` **881 KB** (gzip 235) — three.js/r3f, **별도 청크로 코드스플릿됨(lazy)** ✓

## B. 콘솔 / 런타임
- 콘솔 에러 **0**, React key 경고 **0**.
- 경고: `THREE.Clock: deprecated, use THREE.Timer` (Hero r3f). 마이너.
- React DevTools 안내(info)는 dev 전용, 무시.

## C. 이미지 무결성 (깨진 것 없음)
- 로컬 `/images/...` **11개 유니크 전부 200**. 한글 파일명 `/images/증명사진.png`도 정상 로드(인코딩 문제 없음).
- velog 외부 CDN 이미지 **21개 전부 `<img>` 렌더 성공**(naturalWidth>0). (fetch()는 CORS로 ERR이지만 표시와 무관 — 거짓음성)
- ⚠️ **perf**: velog 원본 일부가 초대형 — 예: **5712×4284(24MP)**, 1672×941 등. 108×72px 썸네일에 원본을 그대로 다운로드. velog CDN은 리사이즈 안 함.

## D. 반응형 가로 오버플로 (모바일 버그 1건)
| 뷰포트 | 가로 오버플로 | 비고 |
|---|---|---|
| 1440 | **0** | 깨끗. 1200px 컨테이너 중앙정렬(margin 112.5px) |
| 768 | **0** | 음수 인셋 배경이 right:766까지 가지만 `overflow-hidden`이 클립 → 페이지 오버플로 없음 |
| **390** | **~25px** ⚠️ | **SideWorks 섹션**. 범인: `SideWorkBackground`의 `inset-x-[-24px]`(Landing.tsx:592 부근) + `SideImageFrame` 이미지/프레임이 뷰포트 폭 초과(Landing.tsx:621~). 가드레일 "가로 스크롤 금지" 위반 |

## E. 핵심 인터랙션 (전부 동작)
- **시그니처 진입 전환**(§6): PULSE "작업 과정 보기 →" 클릭 → 커버 오버레이 즉시 등장 → 플립/원확산 → **~1.35s에 `/projects/pulse` 진입**. 정상.
- **룸 페이지**(`/projects/pulse`): h2=PULSE, 이미지 15(13 로드, 2 lazy 하단), 가로 오버플로 0, exit 컨트롤 존재. 정상.
- **뒤로가기**: "프로젝트 목록으로" 클릭 → `/` 복귀(크로스페이드). 정상.
- **앵커 스크롤**: 10초 요약/Nav 앵커는 `scrollToId`(Lenis) 사용 — 코드상 존재(Landing.tsx). 클릭 동선 코드 확인 권장.

## F. 키보드 / 포커스 (라이브 1차)
- 스타일시트에 **`:focus-visible` 규칙 존재** ✓ (프로그램 `.focus()`는 focus-visible을 트리거 안 하므로 outline none 보임 — 정상 동작).
- 라우트 전환 시 `<main tabindex=-1>`로 포커스 이동(App.tsx ScrollRestore) ✓.
- 키보드 활성화/탭 순서/포커스 대비의 **충분성은 a11y 리뷰어가 코드(FlipTitle.tsx 등)로 심층 검증**.

## G. 라이브에서 관찰된 마이너 노트 (리뷰어 검증 대상)
1. `document.title`이 랜딩과 룸에서 동일("PORTFOLIO — Noh Tae Kyung…") — 룸별 타이틀 없음(a11y/SEO 마이너).
2. 룸 exit 라벨이 3종으로 제각각: "프로젝트 목록으로" / "← 프로젝트 목록" / "← 프로젝트 목록으로 돌아가기"(ui/ux 일관성).
3. Hero는 `<canvas>`(r3f) + `hero_static.png`(763px, visible) 레이어 합성 — **스크린샷 도구로는 WebGL이 안 잡혀 시각 검증 불가**. Hero 비주얼 품질은 사용자 육안 확인 필요.

---

# 리뷰어 공통 규칙 (반드시 준수)

## 🚫 DO-NOT-FLAG (지적 시 거짓양성 — 감점)
1. **WebP/AVIF 변환** = 범위 외(CLAUDE.md §5). perf는 "대형 PNG/velog 원본"은 *기지 최적화 항목*으로만 언급, 신규 결함으로 올리지 말 것.
2. **PickFit 텍스트/플립 색 `#4D5EFF`(ink, 라임 아님)** = 라임 비가독 회피한 **의도된 결정**(CLAUDE.md §0.1-4, IMPLEMENTATION §4·6). "라임을 써야 한다"고 지적 금지.
3. **모바일 9:16 룸 배경·FLOW 포스터 미생성**, **Resume='준비중' placeholder**, **ITC Avant Garde 웹배포 라이선스 TODO** = 기지(旣知) 항목(IMPLEMENTATION §6). 신규 결함 아님.
4. `data/writing.ts`의 **Temp-Title slug·'아리톤'** = 실제 velog URL/고유명사, **버그 아님**. 수정 제안 금지.
5. **About/소개의 인정(수상·활동) 섹션** = 의도된 신설(드론·게임 옛 수상만 제외). 스코프 위반으로 오인 금지.
6. **3카드 가로 나열 금지·박스 남용 금지·Inter 금지·AI 블루/보라 금지** = 가드레일(§8). 이걸 *위반했는지* 검수하되, 가드레일 자체를 결함이라 부르지 말 것.

## 권위 순서 (충돌 시)
`taekyung-works-design-direction.md`(§0.1 최신·최고) > `portfolio-planning.md` > `taekyung-works-design-system.md` > IMPLEMENTATION.md > 코드.

## 소스 파일 맵
- 라우팅: `src/App.tsx` (`/`, `/projects/:key`)
- 랜딩 7섹션: `src/pages/Landing.tsx` (Nav·Hero·About·TenSecondSummary·SelectedProjects·Writing·SideWorks·Finale)
- 룸: `src/pages/ProjectRoom.tsx` · `src/components/room/*`
- 전환: `src/components/transition/{FlipTitle,CoverOverlay}.tsx` · `src/lib/{signature,cover}.ts`
- Hero: `src/components/hero/{Hero,HeroScene,HeroVisual}.tsx` · `src/data/heroLayers.ts`
- 데이터(확정 카피·토큰): `src/data/{projects,writing,sideWorks,rooms,about,designAssets}.ts`
- 토큰·폰트·전역CSS: `src/index.css` · `public/fonts/*`
- 모션: `src/lib/{motion,lenis}.ts`
- 컴포넌트: `src/components/{Wordmark,Label,Doodle}.tsx` · `about/About.tsx` · `finale/Finale.tsx`
