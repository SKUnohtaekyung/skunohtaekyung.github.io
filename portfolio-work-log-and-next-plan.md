# TAEKYUNG WORKS 작업 기록 및 향후 계획

작성일: 2026-06-08  
작업 범위: 포트폴리오 기획 문서 보강, PM 관점 모션 전략 정리, 레퍼런스 분석, 이미지 에셋 제작, Hero 레이어 분리

---

## 1. 현재 목표

TAEKYUNG WORKS는 단순 프로젝트 나열형 포트폴리오가 아니라, PM / UX / AI / Frontend 역량을 하나의 인터랙티브 전시 경험으로 보여주는 개인 포트폴리오다.

핵심 방향은 다음과 같다.

- Hero는 강한 타이포그래피와 콜라주 비주얼로 첫인상을 만든다.
- 대표 프로젝트는 각각 다른 Room처럼 구성한다.
- 실제 프로젝트 화면, 자료, 사진은 증거 이미지로 사용한다.
- 생성 이미지는 배경, 전환, 프레임, 오브젝트, 분위기 연출에 사용한다.
- 과한 3D가 아니라 2.5D 레이어, parallax, frame reveal, object float를 사용한다.
- 포트폴리오는 정적 카드 나열이 아니라 "살아있는 증거 전시관"처럼 느껴져야 한다.

---

## 2. 사용자 결정 사항

지금까지 확정된 주요 결정은 다음과 같다.

- 목표 직무: PM
- 공개 일정: 기간 없음
- 포트폴리오 형식: Room 전환까지 포함한 인터랙티브 버전
- Hero 방향: 타이포그래피 우선, 콜라주 비주얼 혼합
- GitHub 공개: 일단 보류
- 연락처: `ntk9477@naver.com`
- 폰트: ITC Avant Garde 파일 보유
- 멋쟁이사자처럼 세션 사진: 얼굴 블러 없이 사용 가능
- 핵심 철학 문장:
  `AI가 90점에 가까운 결과를 내도록 질문하고 구조화합니다. 마지막 10점은 제 경험과 판단으로 채웁니다.`

---

## 3. PM 관점에서 정리한 포트폴리오 전략

### 3.1 포트폴리오의 제품 목표

채용자가 짧은 시간 안에 다음 인상을 받도록 한다.

> 이 사람은 AI 결과물을 그대로 쓰는 사람이 아니라, 문제를 질문하고 구조화하고 판단해서 실행 가능한 제품 경험으로 바꾸는 PM이다.

### 3.2 프로젝트별 역할

PULSE:
- 1번 메인 케이스스터디
- 문제 정의, 타깃 사용자, 대시보드, 상권 분석, BERTopic/LLM 기반 페르소나 흐름, 홍보 실행까지 연결되는 PM 역량 증거

PickFit:
- 2번 제품 감각/AI UX 케이스스터디
- 쇼핑 UX가 클릭에서 위임으로 이동한다는 문제의식과 AI 추천 플로우를 보여줌

LikeLion:
- 교육/커뮤니티 운영 PM 케이스스터디
- 커리큘럼, 카드뉴스, 강의자료, 세션 사진, 모집/FAQ 자료를 통해 운영 규모와 교육 설계를 증명

FLOW:
- 경험 기획/전시 컨셉 케이스
- Creator's Flow와 User's Flow를 구분한 전시 경험 설계 역량을 보여줌

Lab / AboutPM:
- AI-assisted workflow와 PM 지식 구조화 실험을 보여주는 구간
- 단, 대표 프로젝트보다 더 튀지 않도록 조절

---

## 4. 수정한 문서

### 4.1 `taekyung-works-design-system.md`

수정 목적:
- Claude Design이 "과한 3D 금지"를 "거의 움직이지 않음"으로 해석하지 않도록 모션 원칙을 재정의

핵심 변경:
- `Motion Goal` 추가
- "정적인 갤러리"가 아니라 "살아있는 증거 전시관"으로 정의
- Room 내부에는 `scroll reveal`, `frame reveal`, `depth shift`, `object float`, `hover expansion`을 사용하도록 명시
- "정적인 카드/텍스트 나열만으로 Room 구성 금지" 추가
- "증거 이미지보다 장식 오브젝트가 더 눈에 띄는 연출 금지" 추가
- Claude Design / Claude Code 프롬프트에 `The portfolio must not feel static` 반영

주요 위치:
- Motion Goal: `taekyung-works-design-system.md:1570`
- 정적 Room 금지: `taekyung-works-design-system.md:1662`
- Claude Design motion 지시문: `taekyung-works-design-system.md:2002`
- Claude Code 구현 규칙: `taekyung-works-design-system.md:2047`

### 4.2 `portfolio-planning.md`

수정 목적:
- 향후 Claude Design / Claude Code 작업에서 인터랙션 방향이 정적으로 축소되지 않도록 보강

핵심 변경:
- `The portfolio must not feel static` 추가
- 3D-like motion은 주요 Room 전환에만 사용하도록 명시
- Room 내부는 `2.5D parallax`, `scroll-triggered frame reveal`, `floating objects`, `hover/focus expansion`, `depth shift` 중심으로 지시
- 모바일도 완전 정적 카드 리스트로 축소하지 말고 짧은 reveal과 object motion을 유지하도록 명시

주요 위치:
- Interaction direction: `portfolio-planning.md:2253`
- Claude Code motion 지시문: `portfolio-planning.md:2310`
- 정적 페이지 금지: `portfolio-planning.md:2321`

---

## 5. 분석한 참고 자료

### 5.1 `이미지_래퍼런스`

내용:
- `image.md`
- `imgeprompt.md`
- 종이 콜라주 이미지 11개
- Avant Garde / NewJeans 참고 이미지 2개

도출한 스타일 원칙:
- 밝고 희망찬 화이트 갤러리
- 손으로 자른 듯한 종이 콜라주
- 강한 색면, 불완전한 가장자리
- 2.5D 깊이감은 허용하되 과한 3D 렌더링은 지양
- 생성 이미지 내부에는 텍스트, 로고, 가짜 UI 문구를 넣지 않음
- 실제 프로젝트 화면과 사진은 증거 자료로 사용

### 5.2 `참고 자료 이미지`

분석한 프로젝트별 자료:

PULSE:
- 랜딩 페이지
- 대시보드
- 계정 도달 상세
- 상권 분석 화면
- 계정/프로필 화면
- 타깃 페르소나 발표자료
- MSA/AI 파이프라인 발표자료
- 리뷰 데이터 -> BERTopic -> 페르소나/여정지도 발표자료
- 문제 정의 슬라이드

PickFit:
- 모바일 앱 화면
- 추천 결과 화면
- 구성 아이템 화면
- 문제 정의 슬라이드
- 쇼핑 UX 변화 슬라이드
- 디자인 시스템 슬라이드
- 흐름 설명 슬라이드

LikeLion:
- 소개 카드뉴스
- 모집 카드뉴스
- FAQ
- 운영진 이야기
- 겨울방학 스터디
- 세션 사진
- Figma 보드 전체 캡처

FLOW:
- 졸업전시회 컨셉 이미지
- FLOW 포스터/배너 이미지
- Creator's Flow / User's Flow 개념

---

## 6. 생성한 이미지 에셋

작업용 에셋 저장 위치:

`C:\Users\miso\Desktop\포트폴리오\이미지_생성결과`

원본 생성 파일 위치:

`C:\Users\miso\.codex\generated_images\019ea638-03c6-7381-8e3c-885e296c8736`

원본은 삭제하지 않았고, 프로젝트 폴더에는 작업용 복사본을 저장했다.

### 6.1 1차 핵심 배경 에셋

- `hero_objectscene_16x9_v1.png`
  - Hero 보조 오브젝트 씬
  - 좌측 타이포 여백 확보

- `corridor_gallery_16x9_v1.png`
  - Hero 이후 프로젝트 Room으로 진입하는 Gallery Corridor
  - 세 개의 프로젝트 입구를 암시

- `pulse_room_bg_16x9_v1.png`
  - PULSE Room 배경
  - 대시보드/분석 화면 삽입용 프레임 포함

- `pickfit_room_bg_16x9_v1.png`
  - PickFit Room 배경
  - 스마트폰/패션 태그/옷걸이 모티프 포함

- `likelion_room_bg_16x9_v1.png`
  - LikeLion Room 배경
  - 교육 스튜디오/카드뉴스/세션 자료 느낌

- `flow_wall_16x9_v1.png`
  - FLOW 전시 아카이브 월
  - 큰 포스터 프레임 포함

- `aboutpm_graphroom_16x9_v1.png`
  - Lab / AboutPM Graph Room
  - 다크하지만 희망적인 지식 그래프 분위기

검수 시트:
- `_contact_sheet.png`

### 6.2 전환 / 프레임 보강 에셋

- `transition_pulse_to_pickfit_16x9_v1.png`
  - PULSE에서 PickFit으로 넘어가는 Room 전환
  - deep blue / orange에서 violet-blue / lime으로 전환

- `transition_pickfit_to_likelion_16x9_v1.png`
  - PickFit에서 LikeLion으로 넘어가는 Room 전환
  - fashion-tech room에서 educational studio로 전환

- `pickfit_phoneframe_16x9_v1.png`
  - PickFit 앱 화면을 넣을 세로 프레임 쇼케이스
  - 실제 스마트폰 화면을 끼워 넣기 좋은 구조

- `pulse_mainwall_frame_16x9_v1.png`
  - PULSE 대시보드 캡처를 넣을 메인 월 프레임

- `likelion_photoframe_16x9_v1.png`
  - LikeLion 세션 사진/커리큘럼 자료를 넣을 프레임 월
  - 얼굴 블러 없이 실제 사진 삽입 가능

검수 시트:
- `_additional_assets_contact.png`

### 6.3 투명 오브젝트팩

저장 위치:

`C:\Users\miso\Desktop\포트폴리오\이미지_생성결과\object_packs`

생성 방식:
- gpt-image-2 기본 이미지 생성
- 마젠타 크로마키 배경 사용
- `remove_chroma_key.py`로 투명 PNG 변환
- 크로마키 원본도 함께 보관

완료한 파일:

- `pulse_objectpack_transparent_v1.png`
  - 리뷰 버블, 차트, 페르소나 카드, 지도핀, 마케팅 액션 카드 등

- `pickfit_objectpack_transparent_v1.png`
  - 옷걸이, 옷 카드, 태그, 스마트폰, 색상 칩 등

- `likelion_objectpack_transparent_v1.png`
  - 포스트잇, 강의 보드, 체크리스트, FAQ 카드, 프레임 등

- `common_floating_paperpack_transparent_v1.png`
  - 전체 사이트 공통 종이 조각, 화살표, 탭, 프레임 코너 등

검수 시트:
- `object_packs\_object_packs_contact.png`

### 6.4 Hero 자화상

사용자가 제공한 사진을 기반으로 Hero용 콜라주 자화상을 생성했다.

완료한 파일:

- `hero_selfportrait_16x9_v1.png`
  - 원본 생성본

- `hero_selfportrait_16x9_v1_clean.png`
  - 오른쪽 아래 생성 흔적을 제거하기 위해 가장자리를 살짝 크롭한 클린 버전
  - Hero 메인 이미지로 추천

특징:
- 좌측 타이포 여백 확보
- 인물은 오른쪽 중심
- 검은 머리, 검은 안경, 데님 셔츠 인상 유지
- 주변에 PM/UX/AI/Frontend 작업 오브젝트 배치

### 6.5 Hero 레이어 분리

저장 위치:

`C:\Users\miso\Desktop\포트폴리오\이미지_생성결과\hero_layers`

목적:
- Hero 이미지를 한 장의 정적 이미지로 쓰지 않고, 개별 레이어를 마우스/스크롤에 반응시켜 움직이게 하기 위함

완료한 파일:

- `hero_layers_manifest.json`
  - 원본 캔버스 크기와 각 레이어 좌표/크기 정보

- `hero_base_offwhite.png`
  - #F8FAFC에 가까운 기본 배경

- `person_isolated.png`
  - 가장 추천하는 깔끔한 인물 단독 레이어
  - 마젠타 크로마키 생성 후 투명 처리

- `person_seated.png`
  - 원본 Hero 구성에 가까운 인물+주변 클러스터 레이어
  - 주변 카드 일부가 같이 포함되어 있어 원본 재현용에 적합

- `laptop_right.png`
- `code_panel_right.png`
- `cursor_arrow.png`
- `top_chart_card.png`
- `top_blank_frame.png`
- `top_wireframe_card.png`
- `middle_flow_card.png`
- `orange_blue_notes.png`
- `bottom_chart_strip.png`
- `bottom_image_card.png`
- `bottom_info_card.png`
- `right_diagram_card.png`

검수 파일:
- `_hero_layers_contact.png`
- `_hero_layers_composite_preview.png`

레이어 사용 권장:
- 인물은 `person_isolated.png` 사용 권장
- 원본과 비슷한 밀도가 필요하면 `person_seated.png` 사용
- 커서, 노트, 카드, 차트 레이어는 마우스/스크롤에 더 크게 반응
- 인물 레이어는 거의 고정 또는 아주 약한 parallax

---

## 7. 구현 방향

### 7.1 Hero 구현

추천 방식:
- 배경은 `hero_base_offwhite.png`
- 인물은 `person_isolated.png`
- 주변 오브젝트는 `hero_layers_manifest.json` 좌표 기반으로 absolute 배치
- 좌측에는 HTML/CSS 타이포그래피 배치

모션 원칙:
- 사람: 거의 고정, scale 1.00-1.02 정도
- 커서/노트/작은 카드: 마우스에 빠르게 반응
- 큰 카드/노트북: 천천히 반응
- 스크롤 시 오브젝트가 아주 살짝 위/옆으로 이동
- reduced motion에서는 정지

예상 컴포넌트:
- `HeroSection`
- `HeroLayeredVisual`
- `HeroParallaxLayer`

### 7.2 Room 전환 구현

사용 에셋:
- `corridor_gallery_16x9_v1.png`
- `transition_pulse_to_pickfit_16x9_v1.png`
- `transition_pickfit_to_likelion_16x9_v1.png`

모션:
- Room 전환에만 3D-like movement 허용
- 내부 섹션은 2.5D 중심
- transition 이미지는 스크롤 진행도에 따라 scale, opacity, x/y, slight rotate를 적용

### 7.3 Project Room 구현

공통 구조:
- `RoomEntrance`
- `MainWall`
- `FloatingEvidenceFrames`
- `InfoDock`
- `MotionLayer`
- `RoomExit`

PULSE:
- 배경: `pulse_room_bg_16x9_v1.png`
- 메인 프레임: `pulse_mainwall_frame_16x9_v1.png`
- 오브젝트팩: `pulse_objectpack_transparent_v1.png`
- 실제 증거: 대시보드, 상권 분석, BERTopic/페르소나 자료

PickFit:
- 배경: `pickfit_room_bg_16x9_v1.png`
- 앱 프레임: `pickfit_phoneframe_16x9_v1.png`
- 오브젝트팩: `pickfit_objectpack_transparent_v1.png`
- 실제 증거: 상황 선택, 조건 입력, 추천 결과, 구성 아이템, 디자인 시스템

LikeLion:
- 배경: `likelion_room_bg_16x9_v1.png`
- 사진 프레임: `likelion_photoframe_16x9_v1.png`
- 오브젝트팩: `likelion_objectpack_transparent_v1.png`
- 실제 증거: 카드뉴스, 강의자료, 세션 사진, Figma 보드

FLOW:
- 배경: `flow_wall_16x9_v1.png`
- 별도 FLOW poster frame은 생성 실패했지만, 현재 FLOW wall 내부의 큰 포스터 프레임으로 대체 가능

Lab:
- 배경: `aboutpm_graphroom_16x9_v1.png`
- 공통 오브젝트팩과 prompt workflow 오브젝트를 추가하면 좋음

---

## 8. 남은 이슈 및 주의사항

### 8.1 이미지 에셋 관련

- Hero 레이어는 완전한 원본 PSD 분리가 아니라 생성 이미지 기반 수동 crop + 투명 처리 방식이다.
- 흰 카드와 흰 배경이 맞닿는 일부 레이어는 가장자리에 약간의 노이즈가 있을 수 있다.
- 구현 시 레이어 사이에 너무 큰 이동값을 주면 crop 경계가 보일 수 있으므로 작게 움직여야 한다.
- `person_isolated.png`는 별도 생성된 인물 레이어라 원본 Hero 속 인물과 완전히 동일하지는 않지만, 구현용으로는 더 깔끔하다.
- 모바일 9:16 Room Background Set은 생성 서버 오류로 아직 제작하지 못했다.
- FLOW Poster Frame Mockup은 서버 오류로 별도 제작하지 못했다.

### 8.2 공개/보안 관련

- GitHub 공개는 아직 보류 상태.
- PULSE의 매장명, 지도, 계정, 데이터 출처는 공개 전 확인 필요.
- LikeLion 세션 사진은 얼굴 블러 없이 사용 가능하다고 결정됨.
- 폰트 파일은 보유 중이나, 웹 배포 라이선스는 별도 확인 필요.

### 8.3 PM 스토리 관련 추가 질문

PULSE:
- 직접 결정한 PM 업무 범위
- 가장 어려웠던 의사결정 3개
- 버린 대안과 이유
- 성공 지표/KPI
- 공개 가능한 데이터 범위

PickFit:
- 실제 구현인지, 고도화 프로토타입인지, 기획/디자인 중심인지
- 추천 로직이 실제 AI/LLM 기반인지, 규칙 기반인지, 화면 설계 가정인지

LikeLion:
- 커리큘럼 세션 리스트
- 카드뉴스/강의자료/운영에서 직접 한 역할과 공동 작업 구분

FLOW:
- 컨셉 기획, 비주얼 디자인, 전시 동선, 홍보물 제작 중 담당 범위

---

## 9. 향후 계획

### Phase 1. 에셋 정리 및 최적화

우선순위:
1. 생성 이미지 파일명 최종 확정
2. 실제 프로젝트 스크린샷을 Room별로 분류
3. 대용량 PNG를 WebP/AVIF로 변환
4. 이미지 alt text 초안 작성
5. `assets.ts`에 쓸 메타데이터 정리

예상 산출물:
- `assets.ts`
- `projects.ts`
- `rooms.ts`
- 최적화 이미지 폴더

### Phase 2. Hero 레이어 인터랙션 프로토타입

목표:
- Hero가 정적 이미지처럼 보이지 않도록 레이어별 parallax 구현

구현 작업:
- `hero_layers_manifest.json` 기반으로 레이어 absolute 배치
- 마우스 위치 기반 x/y 이동
- 스크롤 progress 기반 scale/opacity 이동
- reduced motion 대응
- 모바일에서는 레이어 수를 줄이고 정리된 구도로 축약

### Phase 3. Room Template 구현

목표:
- PULSE / PickFit / LikeLion을 같은 구조로 구현하되 색과 증거가 다르게 보이게 함

구현 작업:
- `ProjectRoom` 컴포넌트
- `RoomEntrance`
- `MainWall`
- `FloatingEvidenceFrame`
- `InfoDock`
- `MotionLayer`
- `RoomExit`

### Phase 4. 실제 증거 이미지 삽입

PULSE:
- 대시보드
- 상권 분석
- 계정 도달 상세
- 계정/프로필
- 문제 정의 슬라이드
- 타깃 페르소나 슬라이드
- BERTopic/LLM 페르소나 흐름
- MSA/AI 파이프라인

PickFit:
- 상황 선택
- 조건 입력
- AI 로딩
- 추천 결과
- 구성 아이템
- 디자인 시스템
- 쇼핑 UX 문제/시장 슬라이드

LikeLion:
- 카드뉴스
- 모집 FAQ
- 세션 사진
- Figma 보드
- 커리큘럼/강의자료

FLOW:
- FLOW 포스터/컨셉 이미지

### Phase 5. Claude Design 재시안

목표:
- 정적 카드 나열을 피하고, "살아있는 증거 전시관" 원칙이 반영된 디자인 시안 확보

Claude Design에 줄 핵심 지시:
- The portfolio must not feel static.
- 3D-like movement is only for room transitions.
- Room interiors must use 2.5D layered motion.
- Every motion must clarify structure, reveal evidence, or express the flow from problem to product decision.
- Do not create static flat sections with only cards and text.

### Phase 6. Claude Code / Codex 구현

구현 스택:
- React + Vite
- Tailwind CSS
- Framer Motion
- 필요 시 TypeScript

우선 구현:
1. Hero layered visual
2. Gallery Corridor
3. ProjectRoom template
4. PULSE Room
5. PickFit Room
6. LikeLion Room
7. FLOW / Experience
8. Lab
9. Thinking Archive
10. Contact

### Phase 7. 검수

검수 항목:
- Hero가 충분히 강한가
- Room 전환이 살아있는가
- Case Study 본문이 읽히는가
- 실제 증거 이미지가 장식보다 우선하는가
- 모바일에서 텍스트/이미지가 겹치지 않는가
- reduced motion 대응이 있는가
- 이미지 용량이 과하지 않은가
- 공개하면 안 되는 정보가 없는가

### Phase 8. Resume PDF 제작

포트폴리오 방향이 확정된 뒤 같은 메시지를 기준으로 이력서 PDF를 새로 제작한다.

핵심 메시지:
- AI를 활용해 결과를 만드는 사람이 아니라, AI 결과를 질문/구조화/검토하고 마지막 판단을 더하는 PM
- PM / UX / AI / Frontend를 연결하는 실행형 제품 기획자

---

## 10. 다음에 바로 할 일

1. 실제 프로젝트 스크린샷을 `PULSE`, `PickFit`, `LikeLion`, `FLOW`별로 최종 선별한다.
2. Hero 레이어를 실제 React 컴포넌트로 배치한다.
3. `person_isolated.png` 기준으로 Hero 비주얼을 다시 구성한다.
4. Room 전환 이미지 2개를 스크롤 구간에 배치한다.
5. PULSE 메인 월에 실제 대시보드 캡처를 삽입한다.
6. PickFit 프레임에 실제 앱 화면을 삽입한다.
7. LikeLion 프레임에 세션 사진과 카드뉴스를 삽입한다.
8. Claude Design에 수정된 모션 원칙과 생성 에셋을 반영해 재시안을 요청한다.

