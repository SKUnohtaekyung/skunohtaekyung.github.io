# 구현 가이드 (Claude Code 진입점)

> 기획·설계는 확정됐고(문서 참조), 이 폴더는 이제 **실제 React 구현**을 시작하는 프로젝트다.
> 이 파일은 "코드를 어디서 어떻게 시작하나"의 안내판. 내용·디자인 결정의 권위는 아래 문서들이다.

## 0. 먼저 읽기 (순서)
1. `CLAUDE.md` — 폴더 안내판
2. `manifest/docs.json` — 문서 카탈로그
3. `taekyung-works-design-direction.md` **§0.1**(2026-06-11 최신 확정) → 본문 — ⭐ 최고 권위
4. `taekyung-works-design-system.md` — 토큰·룸 스펙·**§8.2.1 디자인된 레터링**
5. `portfolio-planning.md` — 콘텐츠·케이스스터디·카피
6. 자산: `manifest/assets.generated.json` · `evidence.json` · `hero_layers.json` · `fonts.json`

## 1. 스택 & 실행
- React + Vite + TypeScript + **Tailwind v4**(`@tailwindcss/vite`, 토큰은 `src/index.css`의 `@theme`).
- 애니메이션: **Framer Motion**(일반 UI) · **GSAP**(진입 전환) · **Lenis**(부드러운 스크롤).
- ⏳ **Hero(react-three-fiber) 착수 시 설치**: `npm i three @react-three/fiber @react-three/drei`.
- 명령: `npm install` → `npm run dev`(5173) / `npm run build` / `npm run typecheck`.

## 2. 폴더 구조
```
index.html · vite.config.ts · tsconfig.json · package.json
src/
  main.tsx · App.tsx(스캐폴드 스모크 — 교체 대상) · index.css(토큰·폰트)
  data/  projects.ts · writing.ts        ← 확정 카피·토큰의 단일 소스
  (추가 예정) components/ · sections/ · hooks/ · lib/
public/fonts/  AvantGardeGothic-{Bold,Demi,Book}.ttf
이미지_생성결과/ · 참고 자료 이미지/ · ITC Avant Garde/ · manifest/   ← 자료(루트 유지)
```
- 자산은 `manifest/` 카탈로그의 path(루트 기준)로 참조. import 또는 선별 복사.
- 대용량 PNG → **WebP/AVIF 변환은 별도 최적화 단계**(범위 외, CLAUDE.md §5).

## 3. 빌드 순서 (design-direction §13 다음 단계)
1. 레이아웃 골격 + 라우팅(`/`, `/projects/:key`) + Lenis.
2. **Hero**(r3f + GSAP) — 워드마크 = `PORTFOLIO`/`NOH TAE KYUNG`(§0.1-7), 헤드라인(§5).
3. 10초 요약 + **Selected Projects** 지그재그(§5) — `data/projects.ts` 사용.
4. **시그니처 진입 전환**(§6) — 정밀 스펙 그대로:
   - 글자 플립: CSS 3D 2면, `rotateX 0→180°`, 0.52s, stagger 30ms(클릭 글자부터), ease `--ease-flip`.
   - 원확산: `clip-path: circle(0→150% at 50% 50%)`, delay ~0.38s, ease `--ease-circle`, 톤=`project.tone`.
   - 커버 persist → RoomEntrance fade-up 0.4s. 뒤로가기=0.3s 크로스페이드. reduced-motion=경량.
   - **PickFit 플립/텍스트색은 `project.ink`(#4D5EFF)** — 라임 비가독(§0.1-4·8.2.1).
5. 프로젝트 상세 룸(RoomEntrance·MainWall·FloatingEvidenceFrames·InfoDock·Exit) + 실제 증거(`evidence.json`).
6. 생각의 기록(`data/writing.ts`) → 그 외 작업(FLOW·AboutPM) → 블랙 피날레(Carpe Diem, §7).

## 4. 타이포 규칙 (design-system §8 / §8.2.1 · direction §0.1)
- **영문 디스플레이 = ITC Avant Garde**(`font-display`), 대문자·볼드·자간 타이트(~-0.04em).
- **워드마크/핵심 디스플레이 = "디자인된 레터링"**: 합자는 폰트에 없음 →
  ① 라이브 근사(글자 겹침 + 배경색 notch 외곽선) ② 등폭 락업(SVG `textLength`) ③ 로고급=커스텀 벡터.
- **한글 전부 = Pretendard**(`font-body`). **라벨·메타 = Pretendard 대문자 스위스 라벨**(.18–.2em) — 모노 폐기.
- 색: `text-ink`/`text-text-sub`/`text-text-muted`/`text-text-faint`/`border-line` (Slate 토큰). 액센트 `pulse`/`pickfit`/`pickfit-ink`/`likelion`.

## 5. 가드레일 (design-direction §8 — AI 슬롭 방지)
- ❌ Inter · ❌ AI 블루/보라 그라데이션(LILA) · ❌ 3카드 가로 나열 · ❌ 박스 남용(→ border/divide/여백).
- ✅ `transform`·`opacity`(+`clip-path`)만 · `min-h-[100dvh]`(h-screen 금지) · 60fps · `prefers-reduced-motion` 필수.

## 6. 남은 확인 (TODO)
- [ ] ITC Avant Garde **웹 배포(@font-face) 라이선스** 확인 (fonts.json / design-system §8.2).
- [ ] PULSE 공개 데이터(매장명·지도·계정) 검토, GitHub 레포 보안 점검(planning §20·26.6).
- [ ] Resume PDF는 포폴 완성 후(Nav는 '준비중' placeholder).
- [ ] 모바일 9:16 룸 배경 / FLOW 포스터 프레임 = 미생성(work-log §8.1).
