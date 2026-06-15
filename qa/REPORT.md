# 포트폴리오 QA 최종 리포트

> **방법**: 메인 에이전트 라이브 캡처(Wave 0) → 6 전문 리뷰어 병렬(Wave 1) → 6 교차검증(Wave 2) → 메인 종합·중재(Wave 3).
> **모드**: 리포트만(코드 미수정). **게이트**: typecheck PASS · build PASS · 콘솔 에러 0.
> 각 항목은 메인이 실제 코드·문서·라이브로 **재검증**한 결과다. 리뷰어 다수결을 그대로 따르지 않고, 거짓양성·잘못된 수정안을 걸러냈다.

---

## 0. 한눈에 (우선순위)

| # | 등급 | 항목 | 상태 |
|---|---|---|---|
| 1 | 결정됨 | LikeLion 파랑 #0060C6 = **의도된 메인색**(오렌지=서브) — 문서가 철 지남 | ✅ 코드 유지 / 문서 동기화 권장 |
| 2 | **P1** | 모바일 가로 스크롤 — **실제 원인=Nav 메뉴**(SideWorks 아님) | ✅ **수정·검증 완료** |
| 3 | **P1** | Framer 등장모션 reduced-motion 미준수 | ✅ **수정·검증 완료** |
| 4 | P2 | 룸 exit 라벨 3종 불일치 | 미수정(폴리시) |
| 5 | P2 | `document.title` 전 라우트 동일 (WCAG 2.4.2) | 미수정(폴리시) |
| 6 | P2 | HeroScene 익명 scroll 리스너 cleanup 없음 | 미수정(위생) |
| 7 | P2 | Label 자간 0.18em 고정 vs 스펙 .18–.2em | 미수정(확인) |
| D | 디자인 결정 | About 위치 · SelectedBlock 상세도 · SideWorks 헤딩 | 의도 확인 |
| ✗ | 거짓양성 | CoverOverlay RM·PickFit 대비·tone·padding 등 6건 기각 | — |

> **정정 기록(중요)**: Wave 0 EVIDENCE와 6 리뷰어 전원이 모바일 오버플로의 원인을 `SideWorks inset-x-[-24px]`로 지목했으나, **수정 직전 재검증**(clip 안 되는 조상만 필터)에서 실제 원인은 **Nav 메뉴**임이 드러났다. SideWorks 배경은 부모 `overflow-hidden`에 클립돼 페이지 스크롤에 기여하지 않았다. → "고치기 전에 실측"이 잘못된 수정을 막은 사례.

---

> ## ✅ 사용자 결정 반영 (2026-06-14)
> - **LikeLion 색**: 파랑 `#0060C6`가 **의도된 메인 액센트**, 오렌지는 **서브 컬러**. → 코드 변경 없음. 아래 §1은 배경 기록이며, **문서(design-direction §3·§0.1, CLAUDE.md §3, PROGRESS.md §P6)가 철 지난 것**이라 코드에 맞춰 동기화 필요.
> - **P1 2건 수정 완료**: §2(Nav 오버플로)·§3(Framer reduced-motion) — 코드 적용 + 라이브/build 재검증 통과.

## 1. ⚪ (결정됨) LikeLion 액센트 색상 — 파랑이 의도된 메인

**현상**: `src/data/projects.ts:103-104`의 LikeLion `accent`·`ink`가 **파랑 `#0060C6`**, `tone`·`tintSoft`도 파랑계 `#E6F2FF`.

**왜 중요한가** — 이 포폴의 핵심 컨셉이 "**페이지별 액센트 1색** · 3프로젝트 3색 구분"(design-direction §0, §3)인데, 현재 PULSE(딥블루 #002B7A)와 LikeLion(#0060C6)이 **둘 다 파랑** → 색 구분 전략이 약해진다.

**🚩 리뷰어 6명 전원이 "문서대로 `#FF6000`(오렌지)로 고치라"고 했으나 — 그 수정안은 틀렸다.**
직접 `PROGRESS.md:91`을 읽어 확인:
> "**고정 결정: LikeLion 텍스트 ink = `#C2410C`** (#FF6000은 흰 바탕 2.9:1로 **AA 미달** — #FF6000은 채움·다크배경 전용)."

즉 권위 문서의 올바른 값은 **텍스트=`#C2410C`(번트 오렌지, AA 통과), 채움/다크배경=`#FF6000`**. `#FF6000`을 텍스트색(ink)으로 넣으면 **대비 미달 회귀**가 생긴다. (리뷰어 다수결을 그대로 적용했다면 접근성 버그를 새로 심을 뻔함 — 교차검증+문서대조의 핵심 가치.)

**그런데 코드는 파랑** — `#FF6000`도 `#C2410C`도 아니다. 두 가지 해석:
- **(a) 회귀/실수**: 누군가 LikeLion을 파랑으로 바꿔 문서·의도와 어긋남 → 오렌지 복원 필요. 이 경우 올바른 값은 **ink/accent = `#C2410C`** (텍스트), 채움 한정 `#FF6000`, tone/tintSoft = `#FFF5EE`(웜).
- **(b) 의도적 최근 변경**: 파랑으로 가기로 했고 문서를 안 고친 것 → **문서(design-direction §3·§0.1, CLAUDE.md §3, PROGRESS.md)를 코드에 맞춰 갱신**해야 함.

**메인 권고**: (a)일 확률이 높음(두 파랑 충돌 + 어떤 문서도 파랑을 지지하지 않음). 단 **사용자 확인 후** 진행. 복원 시 `#FF6000`이 아니라 **`#C2410C`(텍스트)** 를 쓸 것.
**위치**: `src/data/projects.ts:103-106`, 연관 `src/index.css`(likelion 토큰).

---

## 2. ✅ P1 (수정완료) — 모바일 가로 스크롤

**현상**(라이브 실측): 390px에서 `scrollWidth - clientWidth ≈ 25px`(360px에선 7px). 1440·768은 0.
**실제 원인(정정)**: **Nav 우측 메뉴** — `About/Projects/Writing/Contact/Resume(준비중)` 5항목이 `labelEn`(11.5px 대문자 `tracking-[0.18em]`) + `gap-6`(24px)로 좁은 폭을 초과(390에서 right:415, 360에서 right:367). SideWorks 요소는 부모 `overflow-hidden`에 클립돼 무관.
**가드레일 위반**: design-direction §8 / IMPLEMENTATION §5 "가로 스크롤 금지".
**적용 수정**: `src/pages/Landing.tsx` Nav 메뉴 `gap-6` → **`gap-2 sm:gap-6`**(모바일 8px / 데스크톱 24px).
**검증**: 360/390 overflow **0**, 1440 gap 24px 복원·5항목 유지·회귀 없음. typecheck·build PASS.

---

## 3. ✅ P1 (수정완료) — Framer Motion 등장모션 reduced-motion 미준수

**현상**: 코드 전역에 `MotionConfig`·`useReducedMotion`이 **하나도 없었음**(grep 확인). `Landing.tsx`의 `motion.div whileInView`(SelectedBlock, SideWorks, proofChips), `About.tsx`(PrincipleRow)가 `y/x/scale` 트랜스폼을 prefers-reduced-motion과 무관하게 실행.
**주의**: GSAP 경로(signature·CoverOverlay·FlipTitle·Reveal·ProjectRoom·Finale·HeroVisual)는 `prefersReducedMotion()`로 **이미 정상 가드됨** — 누락은 Framer 진입 모션에 국한.
**적용 수정**: `src/App.tsx` 루트를 **`<MotionConfig reducedMotion="user">`** 로 래핑(전역 1줄 — Framer가 prefers-reduced-motion 시 transform 억제, opacity 유지).
**검증**: typecheck·build PASS. (※ 프리뷰 도구가 prefers-reduced-motion 미디어 에뮬레이션을 지원하지 않아 시각 재현 대신 코드·빌드로 검증 — Framer 공식 동작.)

---

## 4. 🟡 P2 — 폴리시·위생

- **exit 라벨 3종 불일치** (`ProjectRoom.tsx:94 "프로젝트 목록으로" / :201 "← 프로젝트 목록" / :476 "← 프로젝트 목록으로 돌아가기"`). 라이브 확인. 하나로 통일(권장 "← 프로젝트 목록으로"). *기능은 정상 → 미관 일관성이라 P2(리뷰어 P1에서 하향).*
- **`document.title` 전 라우트 동일** (랜딩=룸 "PORTFOLIO — Noh Tae Kyung…"). 라이브 확인. WCAG 2.4.2. `ProjectRoom`에서 라우트별 타이틀 설정. *a11y/SEO 마이너.*
- **HeroScene 익명 scroll 리스너**(`HeroScene.tsx:23-28`) cleanup 없음. 단 **모듈 레벨 1회 등록**이라 "매 마운트 누적 P0 누수"는 **과장** — 실제론 익명이라 제거 불가한 passive 리스너 1개 + 모듈전역 `cachedScrollY`. 위생상 `useEffect`로 옮기고 cleanup 권장. *P0→P2 하향.*
- **Label 자간 `tracking-[0.18em]` 고정** vs 문서 ".18–.2em" 범위(`Label.tsx:14`). 범위 하한이라 위반은 아님 — 큰 라벨에 .2em이 필요한지 의도 확인.

---

## 5. 🔵 디자인 결정(버그 아님 — 의도 확인 필요)

이들은 design-direction **§5 IA**(About 추가 이전 작성)와 현재 코드의 차이로, 결함이 아니라 **결정 사항**이다.

- **About 섹션 위치** (Hero→About→10초요약). §5 IA엔 About이 없음(2026-06-13 신설). 채용자 10초 스캔 흐름상 About을 10초요약 **뒤로** 옮기는 안을 검토할 가치는 있으나, About 자체는 의도된 추가. → 위치만 결정.
- **SelectedBlock에 summary+핵심판단+verification 인라인 노출**. 일부 리뷰어는 "10초 스캔 과부하"라 했으나, **ux 렌즈 자신의 교차검증과 design 렌즈가 기각**("§0.1-2가 닫힌 논증을 케이스스터디로 이관했고 현재가 의도된 이중동선"). → 의도대로 보되, 모바일 블록 높이가 과하면 축약 검토.
- **SideWorks 헤딩 "실험과 확장"** vs §0.1 "명칭 없는 담백('Lab' 해체)". "실험과 확장"은 "Lab"과 다른 재명명일 수 있음. → 헤딩 노출/담백 정도 의도 확인.
- **"SELECTED PROJECTS" 가시 라벨 부재**(h2 sr-only). §5엔 가시 라벨. 미니멀 의도일 수 있음 → 선택.

---

## 6. ✗ 거짓양성 — 기각 (시간 낭비 방지용 기록)

직접 재검증으로 **잘못된 지적임을 확인**한 항목:

- **a11y-1 / frontend "CoverOverlay가 reduced-motion 미체크 (P0)"** → **기각.** `signature.ts:30-38`이 `prefersReducedMotion()`일 때 `coverIn(tone,'fade',0.25)`(크로스페이드)로 분기, 일반은 `'circle'`. 진입 전환은 RM을 **완전 준수**. (리뷰어가 실행부 CoverOverlay만 보고 오케스트레이터를 놓침 — perf 렌즈가 올바로 반박했고 메인이 확정.)
- **a11y-4 "PickFit tintSoft 위 text-muted 대비 2.0:1 (AA 미달)"** → **기각.** 실제 `#64748B` on `#FBFDEA` ≈ **4.8:1, AA 통과**. 2.0:1 수치는 근거 없음.
- **ux-2 "PickFit `tone:#E9ECFF`가 라임 스펙 위반"** → **기각.** `tone`은 §6 **원확산 커버 색**, `tintSoft`(#FBFDEA)가 룸/블록 배경 — 둘 다 의도대로. (design 렌즈가 올바로 반박.)
- **perf-1 "HeroScene 매 마운트 누적 메모리 누수 (P0)"** → **P2로 하향**(모듈 레벨 1회 등록).
- **ui-5 "sectionPad vs roomPad 불일치"** → **기각.** 랜딩/룸 수직 리듬 의도적 분리(design-system §9.1).
- **ux-7 "Contact가 너무 늦게 등장"** · **ux-8 "Finale id=contact 없음"** → **기각.** Contact=피날레 배치가 의도(§7)이고, `Finale.tsx:127`에 `id='contact'` 존재(라이브 앵커 동작 확인).

---

## 7. 라이브 검증으로 통과 확인된 것 (회귀 감시 기준선)

- 시그니처 진입 전환(클릭→커버→플립/원확산→~1.35s 룸) · 뒤로가기 크로스페이드 — 정상
- 3개 룸(pulse/pickfit/likelion) 렌더 · overflow 0 · exit 동작
- 이미지 무결성: 로컬 11 + velog 21 전부 로드(한글 파일명 포함), 깨진 것 0
- 연락처: `ntk9477@naver.com` · GitHub · Velog · Carpe Diem, 외부링크 `rel=noreferrer`
- PickFit ink `#4D5EFF` 사용 / 라임 텍스트 0개(의도된 가독성 결정 준수)
- `min-h-[100dvh]` 사용(h-screen 금지 준수) · transform/opacity/clip-path 모션 준수
- 1440·768 가로 overflow 0 · typecheck/build PASS · 콘솔 에러 0

## 8. 범위 외(기지 항목 — 이번 QA 비대상)
velog/대형 PNG의 WebP·srcset(최적화 단계) · 모바일 9:16 룸 배경·FLOW 포스터 미생성 · Resume placeholder · ITC Avant Garde 웹배포 라이선스 · `index.js` 547KB 코드스플릿 추가 검토.
**+ 스크린샷 한계**: Hero는 WebGL(r3f)이라 자동 스크린샷에 안 잡힘 → **Hero 비주얼 품질만은 사용자 육안 확인 필요**.

---
_근거 원본: `qa/EVIDENCE.md`(라이브) · 워크플로 findings 25 + 교차검증 6렌즈._
