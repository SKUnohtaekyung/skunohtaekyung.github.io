# PROGRESS — TAEKYUNG WORKS 구현 진행 기록

> 오케스트레이터가 페이즈마다 갱신. 게이트 = ①typecheck+build ②리뷰 보드 6종 병렬 ③critical/major 수정·재검 ④minor 기록.
> 계획 원본: `~/.claude/plans/temporal-snacking-pudding.md` · 권위 문서: design-direction §0.1.

## 상태 보드

| 페이즈 | 내용 | 상태 | 게이트 |
|---|---|---|---|
| P0.5 | 리뷰 보드 6종 + PROGRESS + 자산 규칙 | ✅ 완료 (2026-06-12) | — |
| P1 | 레이아웃 골격 + 라우팅 + Lenis | ✅ 완료 (2026-06-12) | ✅ 6/6 PASS |
| P2 | 디자인 시스템(토큰·폰트·라벨·워드마크) | ✅ 완료 (2026-06-12) | ✅ 6/6 PASS |
| P3 | Hero (r3f + GSAP, person_seated) | ✅ 완료 (2026-06-12) | ✅ PASS (perf 재검 포함) |
| P4 | 시그니처 진입 전환 (§6) | ✅ 완료 (2026-06-12) | ✅ PASS (frontend 재검 포함) |
| P5 | 상세 룸 ×3 (evidence.json) | ✅ 완료 (2026-06-12) | ✅ PASS (a11y·ux 재검 포함) |
| P6 | 생각의 기록 · 그 외 작업 · 블랙 피날레 | ✅ 완료 (2026-06-12) | ✅ PASS (a11y 재검 포함) |
| P7 | 반응형 · a11y · perf 마감 | ✅ 완료 (2026-06-12) | ✅ 6/6 PASS — **전 페이즈 완료** |

## 고정 결정 (Phase 0 모순 해소 + P1 게이트 판정)

- 라벨 = Pretendard 600 대문자 tracking .18–.2em (JetBrains Mono·fonts.json stale)
- PickFit 텍스트·선·점·CTA·플립 = #4D5EFF / 라임 #E3FF5D는 채움·톤만
- Lab 폐지 → '그 외 작업'(흰 바탕) / aboutpm_graphroom 미사용 / 섹션명 "생각의 기록"
- Hero 인물 = person_seated(730,175 / 650×760) — person_isolated bbox placeholder
- 자산은 public/images/로 **복사**(원본·manifest 불변) / WebP 변환 범위 외 → lazy-load
- 객관 게이트 = typecheck + build (lint 스크립트 없음)
- **랜딩 Selected = role 태그 + 한 줄 요약만** (§0.1-2·146행 — problem/my call/impact는 상세 P5 InfoDock 전용, 데이터는 projects.ts에 보존)
- **한글 디스플레이 텍스트 = Pretendard bold** (Avant Garde는 영문 전용 §0.1-6 — 한글 글리프 없음, fallback 방지)
- 컨테이너 = max-w 1200px (design-system §9.1) / 섹션 수직 리듬 = clamp(96px,12vw,180px)
- 워드마크 모바일 하한 40px 임시(스펙 64px는 데스크톱) — P7에서 확정
- 전역 :focus-visible = 2px currentColor outline / 앵커·라우트 전환 시 포커스 이동

## Minor 기록 (리뷰 보드)

- [P1·frontend] ProjectRoom `as ProjectKey` 캐스트 — find()가 사실상 검증, 보류
- [P1·ux] 상세→랜딩 복귀 시 스크롤 위치 복원 → **P4에서 처리**
- [P1·a11y] Key Visual 플레이스홀더(white/60) 라벨 대비 얇음 — P4·P5에서 실제 자산으로 교체되며 해소
- [P1·ui] 네비 텍스트 고정 px — P7 반응형에서 재점검

### 기각된 발견 (근거)
- white/70·white/60 on #0A0A0A 대비 미달 주장 → 실계산 9.8:1 / 6.9:1로 WCAG AA 통과
- Selected md:grid-cols-2 지그재그가 스펙 위반이라는 주장 → §0.1-3 지그재그(비주얼/텍스트 좌우 교차) 스펙 그 자체
- Lenis StrictMode RAF 이중 등록 주장 → React 18+ effect는 run→cleanup→run 순서라 미발생(가드는 방어적으로 추가함)
- [P2·ui critical] `text-room-title` 유틸 미생성 주장 → Tailwind v4 `--text-*` = font-size 네임스페이스, 실측 computed 115.2px(9vw) 적용 확인
- [P2·a11y major] #4D5EFF 대비 미달 주장(3.2~3.5:1) → 실계산 #F8FAFC 위 4.61:1 / #FBFDEA 위 4.67:1로 AA(4.5:1) 통과
- [P3·design critical] EASE_FLIP 누락 주장 → motion.ts 11행에 존재(오독)
- [P3·design major] 오브젝트 0.88→1 톡톡이 scale 1.00~1.02 위반 주장 → 그 범위는 인물 전용(motion_guide), 오브젝트 톡톡은 §5 등장 연출
- [P3·design major] scrollShift가 §8 위반 주장 → motion_guide "스크롤 시 오브젝트만 약하게 이동" 스펙 그 자체(타이포는 DOM, 무관)
- [P3·ui major] 한글 헤드라인 Avant Garde 승격 제안 → §0.1-6 영문 전용 규칙과 충돌(P1 고정 결정 유지)
- [P3·perf major] GSAP 고아 타임라인 주장 → useEffect cleanup의 tl.kill()이 재실행 사이 항상 호출 / webpackChunkName 제안 → Vite 환경 무의미

## 페이즈 로그

### P0.5 (2026-06-12)
- `.claude/agents/` 리뷰어 6종 생성 (frontend/design/ui/ux/a11y/perf — 읽기 전용, 고정 JSON 스키마)
- PROGRESS.md 초기화

### P1 (2026-06-12) — 레이아웃 골격 + 라우팅 + Lenis ✅
- 신규: `src/lib/lenis.ts`(전역 1회 초기화·reduced-motion 비활성·scrollToId 포커스 이동), `src/pages/Landing.tsx`(7섹션), `src/pages/ProjectRoom.tsx`(임시 셸), App 라우터(`/`·`/projects/:key`·잘못된 key→`/`)
- 데이터 보강: projects.ts(anchorId·tagline·tenSecond·problem/myCall/impact 선반영), writing.ts(WRITING_AXES)
- 게이트: typecheck·build 통과(gzip 84KB), 프리뷰 콘솔 무오류, 라우팅·리다이렉트 실측 확인
- 리뷰 1차: a11y 3 critical(포커스) → 수정 / ux major(피날레 서두 문단·Selected 라벨 템플릿) → 수정 / ui major(1200px·한글 폰트 경계·Writing 에디토리얼 행·섹션 리듬) → 수정 / design·perf PASS
- 재검: 6/6 PASS

### P2 (2026-06-12) — 디자인 시스템 + 워드마크 ✅
- index.css: 타입 스케일 --text-*(hero/room-title/h1/h2/h3/body-lg), 모션 duration 5종+easing 4종, 레이아웃·프레임 토큰(:root), Pretendard 전역 자간 -0.02em, panel/soft/line-strong 컬러
- 폰트: ExtraLight(200)·Medium(500) 복사 + @font-face → 5웨이트 완비 (font-display: swap, 미사용 웨이트는 미다운로드)
- 신규: `src/components/Label.tsx`(영/한 라벨, as 다형), `src/components/Wordmark.tsx`(§8.2.1 방식② SVG textLength 등폭 락업, 옵션ⓐ — fs190/54, 자연폭 1075→1000 압축으로 타이트 자간, max-w 820px=실효 156px 상한, h1 aria-label+svg aria-hidden)
- 적용: Landing 라벨 컴포넌트화, ProjectRoom text-room-title 토큰, Avant Garde 디스플레이 자간 -0.04em 통일(NTK·요약 강조·FLOW/AboutPM·Carpe Diem)
- 게이트: typecheck·build 통과(gzip 84.5KB) / 리뷰 frontend·design·ux·perf PASS, ui critical·a11y major는 실측으로 기각(위 기각 목록), design minor 5건(자간) 즉시 수정
- minor 기록: Hero 한글 헤드라인 inline clamp(스케일 토큰 외 크기 — §8.5에 해당 단계 없음, 의도), SVG fontFamily var() 폴백, lineHeight 0.96 하드코딩(토큰 없음)

### P3 (2026-06-12) — Hero (r3f + GSAP) ✅
- 설치: three + @react-three/fiber + @react-three/drei / 자산: hero 레이어 13종+정적 합성 1종 → public/images/hero (3.8MB)
- 신규: `src/data/heroLayers.ts`(manifest 좌표 1:1, person_seated 채택, parallax 4단), `src/lib/motion.ts`(CustomEase 4종 = §16.2 토큰 1:1), `src/components/hero/HeroScene.tsx`(오쏘 r3f, 마우스 parallax 차등 lerp, 인물 scale≤1.02, 톡톡 등장 ease-paper, 스크롤 시 오브젝트만 미세 이동 — scrollY는 passive 리스너 캐시), `HeroVisual.tsx`(reduced-motion=정적 img+alt / 그 외 lazy 씬+role="img"), `Hero.tsx`(워드마크→라벨→헤드라인 2줄→서브라인→비주얼 GSAP stagger)
- Label.tsx: createElement로 다형 타입 수정
- 게이트: typecheck·build 통과 — three는 lazy 청크 분리(881KB/gzip 235), 메인 346KB/gzip 116 / 텍스처 13종 로드 실측 / 리뷰: frontend·a11y·ux PASS, perf 수정 2건(scrollY 캐시·decoding) 후 재검 PASS, design·ui major는 기각(위 목록)
- minor 기록(P7 백로그): px-7 → --section-padding-x 토큰 통일, gap-12 반응형, 46ch 모바일 검증, GPU 텍스처 메모리 모니터링

### P4 (2026-06-12) — 시그니처 진입 전환 (§6) ✅
- 신규: `src/lib/cover.ts`(커버 API 싱글톤) + `CoverOverlay.tsx`(App 상주, clip-path 원확산/페이드, onInterrupt로 Promise 해제 보장), `FlipTitle.tsx`(글자별 2면 카드 rotateX 0→180° 0.52s stagger 30ms 클릭 글자부터, EASE_FLIP, perspective 800, reduced=색만 변경), `signature.ts`(enterRoom: 플립→0.3s→원확산 0.55s→navigate→커버 out 0.4s + catch 폴백 / exitRoom: 총 0.3s 크로스페이드)
- Selected 블록에 큰 디스플레이 제목(FlipTitle) 추가 — §6 "제목 클릭 = 시그니처 진입" 트리거, CTA와 동일 오케스트레이션
- ProjectRoom: 콘텐츠 fade-up 0.4s(data-room-fade stagger) + 돌아가기 버튼(크로스페이드)
- 실측: PULSE 진입(0.5s 시점 원확산 22.6%·톤 #EAF1FB→0.85s 도착·이음새 없음), PickFit 진입(#E9ECFF), 뒤로가기, 콘솔 무에러
- 게이트: typecheck·build 통과(메인 +3.5KB) / design(스펙 수치 1:1 확인, minor: 뒤로가기 in0.15+out0.15=총0.3 해석 기록)·a11y·perf PASS / frontend major 2건(onInterrupt·catch 폴백) 수정 후 재검 PASS
- minor 기록: FlipTitle will-change 글자 수 한계(현재 최대 8자 안전), aria-label 표현 개선 여지

### P5 (2026-06-12) — 상세 룸 ×3 ✅
- 신규: `src/data/rooms.ts`(InfoDock 6필드 = planning §13 인용, 증거 alt/caption = evidence.json desc 기반), `Reveal.tsx`(IO+GSAP 스크롤 리빌, reduced-motion이면 숨김 미생성), `EvidenceFrame.tsx`(프레임 토큰, 호버 기울임 transform만, lazy), ProjectRoom 풀 템플릿(Entrance/MainWall/Evidence 지그재그/InfoDock/NextRoom 순환), signature.ts에 crossfadeToRoom 추가
- 자산: 증거 11종 5.8MB → public/images/evidence/(ASCII 리네임 복사, 원본 불변). room_bg·objectpack은 **미사용 결정**(§8 "장식이 증거를 가리지 않기" — 증거 우선; 필요 시 P7 폴리시 재검)
- **고정 결정 추가: LikeLion 텍스트 ink = #C2410C** (#FF6000은 흰 바탕 2.9:1로 AA 미달 — PickFit 동반색 규칙 준용, #FF6000은 채움·다크배경 전용). LikeLion 입구 문장 담백체 교정
- 게이트: typecheck·build 통과 / 3룸 이미지 전부 로드·순환 실측 / frontend·design PASS, ux critical(구어체)·a11y major(#FF6000 대비)·perf major(MainWall eager) 수정 후 재검 PASS
- minor 기록(P7): 이미지 width/height 미지정 CLS 가능성, Writing 발행 날짜 TBD(velog에서)

### P6 (2026-06-12) — 생각의 기록 · 그 외 작업 · 블랙 피날레 ✅
- 신규: `Finale.tsx`(검은 원확산 0.7s ease-room → 연락처 fade → Carpe Diem 글자 stagger 0.9s/0.08 + 마무리 멘트. 기본 마크업=완성 상태, 숨김은 모션 경로 JS에서만), `Doodle.tsx`(MS Paint 낙서 3종 — 생각의 기록 전용), AboutPM 보라 노드망 액자(lazy, 1.1MB)
- 게이트: typecheck·build / 실측: 원확산 150%·글자 10/10·낙서 3·이미지 로드 / frontend·design PASS
- **기각**: [a11y critical] 검정 레이어가 reduced/no-JS에서 콘텐츠 가림 주장 → relative 콘텐츠도 positioned라 DOM 순서상 위에 페인트. **elementFromPoint 실증: 풀커버 상태에서 링크가 최상위** — 기본 마크업이 곧 §7 완성 상태(검정 배경+흰 글씨)
- **수정**: [a11y major] github 호버 #6E5494 on #0A0A0A 3.34:1 미달 → 다크 배경 호버용 #9D82C4(동일 색상군, 6.06:1) 토큰 추가. velog 9.3:1·email #FF6000 6.5:1은 통과 확인
- minor 기록: email 호버가 likelion 토큰 재사용(시맨틱 — 주석으로 충분), 마무리 줄 white/60(6.9:1 통과)

### P7 (2026-06-12) — 반응형 · a11y · perf 마감 ✅ (전 페이즈 종료)
- 가로 패딩 토큰 통일: `.container-pad`(= --section-padding-x clamp(20,5vw,80)) — Nav·랜딩 전 섹션·Hero·Finale 적용
- 모바일 375px 실측: 가로 오버플로 0px(랜딩·룸), 워드마크 SVG 자동 스케일 335px, FlipTitle·네비 무월경, 증거 그리드 1열 스택, 룸 타이틀 56px 하한
- role 태그 font-medium 통일(§0.1-1 한글 라벨 500)
- **사고 복구**: PowerShell Get/Set-Content 치환이 Landing/Hero/Finale.tsx 한글을 CP949 모지바케로 파괴 → Write 도구로 전량 복원(빌드·렌더 실측 재확인). 교훈: 텍스트 수정은 Edit/Write 도구로만(메모리에 기록)
- 최종 게이트: typecheck·build ✅ / frontend·design(가드레일 전수 0건 위반)·ux·perf PASS
- **기각**: [a11y critical] CoverOverlay GSAP가 reduced-motion 미체크 주장 → §6이 reduced 동작을 정확히 "0.25~0.3s 크로스페이드 + 제목 색만"으로 규정, 구현이 그 스펙 자체(원확산 스킵·opacity 페이드만 — 전정기관 자극 요소 없음, WCAG상 reduce≠none)
- minor 기록(백로그): framer-motion 미사용 의존성(스택 문서에 향후 일반 UI용으로 명시 — 유지), will-change 상시 적용 3곳(글자 수 적어 영향 미미), HeroVisual 정적 이미지 로딩 속성, WebP/AVIF 변환·이미지 치수 속성(범위 외 확정), Selected Key Visual 플레이스홀더(프레임 자산 적용은 후속 폴리시), 모바일 9:16 룸 배경 미생성(자산 부재), ITC Avant Garde 웹 라이선스 — **배포 전 확인 필수**

## 최종 산출물 요약 (2026-06-12)
- 라우트: `/`(7섹션 랜딩) · `/projects/pulse|pickfit|likelion`(룸 템플릿) · 그 외→`/`
- 번들: 메인 363KB(gzip 122) + three lazy 881KB(gzip 235) + css 22KB(gzip 5.2)
- 자산: hero 14파일 3.8MB · evidence 11파일 5.8MB(lazy) · side 1.1MB(lazy) · 폰트 5웨이트
- 시그니처: §6 1:1(플립 0.52s/30ms stagger/클릭 글자부터 + 원확산 0.3→0.85s + 커버 persist + 룸 fade-up 0.4s + 뒤로 0.3s 크로스페이드 + reduced 분기)

### 룸 콘텐츠 개편 2차 (2026-06-12 오후) — 배너·사이즈·콜라주·내러티브 ✅
- **자산 5종 신규 투입**: pulse promo_video(홍보영상 화면)·msa_pipeline·influencer_matching(BM)·adwise_top14_proof(3MB, 압축 후보) + pickfit brand_banner. 원본은 `참고 자료 이미지/pulse/`(멋사 폴더에서 이동)·`픽핏/`에 보관, manifest/evidence.json·ASSET_INDEX.md 정합 갱신(chromakey/contact-sheet 항목 제거 반영)
- **스키마 확장(rooms.ts)**: `evidenceGroups`(라벨 그룹 = 내러티브 흐름), `evidenceGrid: 2|3`(mainWallSize와 분리), `cardStack`(겹침 콜라주)
- **PULSE**: 증거 11장을 사용자 지정 흐름 ①UI/UX→②설계 판단(PPT)→③연구 검증(상장)→④원점(Adwise)으로 그룹화. proofChips = Team Leader/PM/UI·UX/Frontend (영어, 사용자 지시)
- **PickFit**: 룸 대표 = brand_banner(랜딩 미리보기는 PM 리뷰로 recommendation_result 유지 — 시각 레지스터 일치), evidence 3열 + 인사이트 선행→STEP 1~5→디자인시스템
- **LikeLion**: 카드뉴스 5장을 `CardNewsStack` 콜라주로(4:5 비율, 회전 -6~7°, z 1/2/5/3/4, 호버 펴짐+들림+z-50, 모바일 2열 그리드 강등) — "내용 판독"이 아니라 "직접 제작" 증거. 증거 그리드는 세션 사진 5장만
- **전역 축소**: MainWall 1080→820/640→520 + `--room-padding-y-tight`(48~88px). EvidenceFrame large = eager+fetchPriority high(LCP)
- **게이트(각 Phase 4종 병렬: PM·UI·UXW·FE)**: G1 — UXW BLOCK "35위"(추론 수치) 제거·라벨 13.5px·지그재그 translate→margin(GSAP 충돌)·key 인덱스 폴백 / G2 — PM BLOCK 랜딩 배너 미리보기 회귀·인사이트 선행 / G3 — 카드뉴스 실측 1080×1350(4:5) → aspect-square 크롭 수정·호버 z-인상·조직 규모(70+대학/14,000+)를 figcaption에 노출
- **기각(사용자 지시 우선)**: PM의 "그룹 순서 원점부터" 및 "칩 한국어+수상" 제안 — 사용자가 명시한 uiux→ppt→상장→adwise 순서·영어 칩 유지
- minor 백로그: 단일그룹 480px 비례(검증 그룹), tight/기본 패딩 비율, 콜라주-EvidenceFrame 프레임 언어 이원화(의도 주석으로 고정), adwise_top14 3MB 압축, EvidenceFrame width/height 미지정 CLS(기존)
