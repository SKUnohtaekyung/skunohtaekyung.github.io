# portfolio-planning.md

> 개인 포트폴리오 웹사이트 제작을 위한 최종 기획 문서  
> 작성 기준: 현재 대화에서 수집한 프로젝트 정보, 포트폴리오 목표, 디자인 방향, 인터랙션 방향, 공개 범위, 제작 방식 전체 반영  
> 작성일: 2026-06-08  
> 대상: Claude Design → Claude Code → React 기반 실제 구현 및 배포

---

## 0. Document Purpose

이 문서는 노태경의 개인 포트폴리오 웹사이트를 제작하기 위한 기준 문서다.

목표는 단순히 프로젝트를 나열하는 포트폴리오가 아니라, **인터랙티브 스토리형 개인 포트폴리오**를 만드는 것이다. 포트폴리오 안에 AI 챗봇을 넣는 방향이 아니라, **Claude Design과 AI 제작 도구를 활용해 비주얼, 인터랙션, 정보 흐름을 고도화한 포트폴리오**를 목표로 한다.

최종 산출물은 아래 범위를 포함한다.

- 포트폴리오 기획서
- Claude Design 프롬프트
- Claude Code 구현 프롬프트
- 섹션별 카피 초안
- 인터랙션 설계
- 에셋 체크리스트
- 보안 체크리스트
- 구현 및 배포 계획
- 모바일 최적화 기준
- 검증 기준

### 0.1 v2 최종 목차 기준

```md
# portfolio-planning.md

## 0. Document Purpose
## 1. Portfolio Goal
## 2. Personal Positioning
## 3. Core Philosophy
## 4. Target Audience
## 5. Reference Portfolio Analysis
## 6. Decision Log
## 7. Naming Candidates
## 8. Story Concept
## 9. Visual Direction
## 10. Interaction Direction
## 11. Information Architecture
## 12. Section-by-section Content
## 13. Project Case Study Structure
   - PULSE
   - PickFit
   - LikeLion
## 14. Experience
   - Academic Assistant & FLOW
   - Student Council Planning Director
## 15. Lab
   - AboutPM
   - AI Visual Prompt Lab
   - Claude Design / Claude Code Workflow
## 16. Thinking Archive
## 17. Public Links
## 18. Contact
## 19. Asset Checklist
## 20. Security Checklist
## 21. Resume Direction
## 22. Claude Design Prompt
## 23. Claude Code Handoff Prompt
## 24. Claude Work Sequence
## 25. Implementation Plan
## 26. Validation Checklist
## 27. Final Summary
## 28. Excluded Directions
## 29. Next Actions
```

---

## 1. Portfolio Goal

### 1.1 핵심 목표

우선순위는 다음과 같다.

1. **서비스기획/PM 취업**
2. **AI 서비스기획 인턴**
3. **개인 브랜딩**

포트폴리오의 1차 관객은 IT 기업 채용 담당자와 실무 PM/서비스기획자다. 넓게는 스타트업 팀, 교수, 학교 관계자, 협업자, 공모전/프로젝트 심사자도 볼 수 있다. 다만 설계 기준은 “모두에게 무난한 포트폴리오”가 아니라 **IT 기업 채용 관점에서 이 사람이 어떤 문제를 어떻게 풀 줄 아는지 빠르게 이해되는 포트폴리오**로 잡는다.

### 1.2 희망 직무

- 서비스기획/PM
- AI 서비스기획
- UX 기획
- Product Designer 성향 일부
- Frontend 이해도가 있는 PM
- AI와 구현 흐름을 이해하는 Product Builder

### 1.3 지원 회사 방향

- IT 기업 지향
- 구체 기업 유형은 아직 확정 전
- 스타트업, SaaS, AI 서비스 회사, 프로덕트 조직이 있는 기업 모두 가능성 있음
- 메인 포지셔닝은 PM/서비스기획으로 두고, AI/Frontend는 차별화 역량으로 배치

---

## 2. Personal Positioning

### 2.1 핵심 정체성

```text
PM·UX·AI·Frontend를 연결해
복잡한 문제를 실행 가능한 제품 경험으로 설계하는 사람
```

### 2.2 한 문장 설명

```text
복잡한 문제를 바로 기능으로 바꾸지 않고,
사용자의 상황과 결정 흐름을 먼저 정리한 뒤
제품 경험과 실행 가능한 화면으로 연결합니다.
```

### 2.3 핵심 키워드

- Product Planning
- PM
- UX Flow
- AI Workflow
- Frontend Implementation
- Product Documentation
- Education & Operation
- Case Study
- User Decision Flow
- Interactive Storytelling
- Handmade Visual

### 2.4 핵심 메시지

```text
정보를 많이 보여주는 사람이 아니라,
사용자가 결정할 수 있는 흐름을 설계하는 사람.
```

이 메시지는 대표 프로젝트 전체를 관통한다.

- **PULSE**: 외식업 사장님이 리뷰와 고객 데이터를 보고 홍보 실행까지 결정할 수 있게 함
- **PickFit**: 사용자가 많은 상품 속에서 상황에 맞는 코디를 빠르게 결정할 수 있게 함
- **LikeLion Curriculum**: 초보자가 막연한 아이디어를 실제 서비스 기획 단계로 결정할 수 있게 함

---

## 3. Core Philosophy

### 3.1 철학 키워드

사용자가 직접 제시한 개인 문장/철학:

```text
Carpe Diem
```

출처적 의미는 영화 『죽은 시인의 사회』의 “카르페 디엠”에서 가져오되, 포트폴리오에 그대로 던지면 다소 뜰 수 있으므로 PM/UX 맥락으로 재해석한다.

### 3.2 Hero 철학 문장 후보

기존 예시를 그대로 쓰지 않고, 아래 방향으로 새로 다듬는다.

#### 후보 1

```text
Carpe Diem.
지금 마주한 문제를, 사용자가 움직일 수 있는 흐름으로 설계합니다.
```

#### 후보 2

```text
Carpe Diem.
복잡한 순간을 붙잡아, 결정 가능한 경험으로 바꿉니다.
```

#### 후보 3

```text
Carpe Diem.
생각에 머무는 문제를, 실행 가능한 제품 경험으로 옮깁니다.
```

#### 후보 4

```text
Carpe Diem.
오늘의 문제를 놓치지 않고, 움직이는 경험으로 만듭니다.
```

### 3.3 추천

가장 추천하는 방향:

```text
Carpe Diem.
지금 마주한 문제를, 사용자가 움직일 수 있는 흐름으로 설계합니다.
```

이유:

- “Carpe Diem”의 즉시성, 현재성, 실행성이 살아 있음
- PM/UX의 핵심인 사용자 행동 흐름과 연결됨
- 추상적 좌우명에서 끝나지 않고 포트폴리오의 기획 철학으로 작동함

---

## 4. Target Audience

### 4.1 1차 타깃

- IT 기업 채용 담당자
- 서비스기획/PM 실무자
- AI 서비스기획 직무 담당자
- 인턴/신입 PM 채용 담당자

### 4.2 2차 타깃

- 스타트업 팀
- 교수/학교 관계자
- 프로젝트 협업자
- 공모전/졸업작품 평가자
- 동아리 및 커뮤니티 관계자

### 4.3 방문자가 10초 안에 이해해야 하는 것

- 이 사람은 PM/서비스기획자를 지향한다.
- AI와 Frontend를 도구로 다룰 수 있다.
- 단순히 아이디어만 내는 사람이 아니라 화면 흐름과 구현까지 연결한다.
- 프로젝트가 각각 따로 노는 것이 아니라, “결정 가능한 흐름을 설계한다”는 하나의 관점으로 묶인다.
- 비주얼 감각과 문서화/구조화 능력이 함께 있다.

---

## 5. Reference Portfolio Analysis

### 5.1 Reference Sources

1. Awwwards Portfolio
- 수상작 중심 포트폴리오 레퍼런스
- GSAP, Three.js, WebGL, React, Next.js 등 인터랙션 중심 사례 참고
- 사용 목적: 강한 첫인상, 모션, 몰입형 포트폴리오 구조 참고

2. Siteinspire
- 정제된 레이아웃, 타이포그래피, 미니멀 포트폴리오 참고
- 사용 목적: 과하지 않지만 세련된 정보 구조 참고

3. One Page Love
- 원페이지 포트폴리오와 랜딩형 포트폴리오 참고
- 사용 목적: 단일 흐름으로 포트폴리오를 설계하는 방식 참고

4. Lapa Ninja
- 포트폴리오 랜딩페이지와 CTA 구조 참고
- 사용 목적: 명확한 가치 제안, 시각적 쇼케이스, 신뢰 요소, CTA 배치 참고

5. Landbook
- 최신 웹 디자인 갤러리
- 사용 목적: 전체적인 웹 트렌드, 레이아웃, 색감 참고

6. MaxiBestOf
- 포트폴리오 사이트의 HD 스크린샷, 폰트, 디자인 분석 참고
- 사용 목적: 포트폴리오 시각 시스템과 세부 UI 참고

7. Figma Portfolio Examples
- 디자이너/프로덕트 포트폴리오 구조 참고
- 사용 목적: 프로젝트 소개, 케이스스터디, 배경 요약 구조 참고

8. Case Study Club
- UX/PM 포트폴리오 케이스스터디 참고
- 사용 목적: 깊은 케이스스터디, 문제 정의, 역할, 과정, 결과 구조 참고

9. Creative Bloq Portfolio Examples
- 크리에이티브 포트폴리오 참고
- 사용 목적: 창작자 정체성과 작업 세계를 보여주는 방식 참고

10. Muzli Portfolio Websites
- 실험적이고 비주얼이 강한 포트폴리오 참고
- 사용 목적: 개성 있는 Hero, 인터랙션, 스토리텔링 참고

### 5.2 Selected Portfolio References

1. Bruno Simon
- Three.js 기반 3D 게임형 포트폴리오
- 참고점: 인터랙션 자체가 실력 증명이 되는 방식
- 적용 방향: 전체 게임형으로 따라 하지 않고, Hero/Lab에서만 인터랙션 강도 참고

2. Elliott Mangham
- 첫 화면에서 직무, 성과, 신뢰 요소, CTA가 강하게 드러나는 포트폴리오
- 참고점: 첫 화면 5초 안에 이 사람이 어떤 사람인지 알 수 있음
- 적용 방향: Hero에서 이름, 직무, 철학, CTA를 명확히 제시

3. Simon Pan
- UX 케이스스터디의 정석적인 구조
- 참고점: 문제, 역할, 과정, 결과를 깊게 설명
- 적용 방향: PULSE와 PickFit 케이스스터디 구조에 반영

4. Robin Noguier
- 강한 타이포그래피와 유려한 모션
- 참고점: 비주얼 정체성이 명확함
- 적용 방향: Hero 타이포그래피와 스크롤 등장 모션 참고

5. Dion Pieters
- 기술적 인터랙션과 모션이 강한 포트폴리오
- 참고점: 사이트 자체가 기술 역량을 보여줌
- 적용 방향: Lab 섹션에서 실험적 인터랙션 참고

6. Karina Sirqueira
- 동적 추상 도형과 프로젝트 진입 구조
- 참고점: 프로젝트를 시각 오브젝트로 연결하는 방식
- 적용 방향: 프로젝트별 콜라주 오브젝트 설계에 반영

7. Raffi Chilingaryan
- 모바일 홈화면 같은 독특한 인터페이스
- 참고점: 개인의 분야와 인터페이스 구조가 맞아떨어짐
- 적용 방향: 포트폴리오 전체를 하나의 작업 세계처럼 구성

8. Jordan Jenkins
- SaaS/제품 디자인 프로젝트를 큰 비주얼 중심으로 제시
- 참고점: 복잡한 제품을 명확한 화면 중심으로 보여줌
- 적용 방향: PULSE 대시보드, 리뷰 관리, 손님 분석 화면 강조

9. William Bout
- 짧은 bio 후 고품질 작업물 feed 구조
- 참고점: 간결한 소개와 작업물 중심 구성
- 적용 방향: Scroll Intro 이후 Selected Projects로 빠르게 진입

10. Natalie Almosa
- draggable components, moving elements 등 가벼운 놀이형 인터랙션
- 참고점: 인터랙션이 친근함을 만듦
- 적용 방향: 콜라주 오브젝트 hover/drag 느낌 참고

11. Bradley Ziffer
- subtle animation과 interactive elements
- 참고점: 과하지 않은 움직임으로 프로젝트를 소개
- 적용 방향: Case Study 섹션의 절제된 모션 참고

12. Mindy Nguyen
- About과 Portfolio를 한 페이지에 합친 구조
- 참고점: 짧은 소개 후 바로 작업물로 이동
- 적용 방향: Hero → Scroll Intro → Selected Projects 구조에 반영

13. Meiwen See
- 짧은 bio와 대표 작업 중심
- 참고점: 최소한의 설명으로 정체성을 전달
- 적용 방향: About Snapshot의 문장 밀도 조절

14. Moritz Oesterlau
- UX 케이스스터디 구조와 내비게이션이 명확함
- 참고점: 깊은 사례 분석을 읽기 쉽게 구성
- 적용 방향: PULSE/PickFit의 Problem → Insight → Solution → Role → Output → Learning 구조에 반영

15. Lu Yu
- 인터랙션은 훌륭하지만 Hero에서 직무 정체성이 약해질 수 있는 사례
- 참고점: 멋진 문장보다 직무 정체성이 먼저 보여야 함
- 적용 방향: Hero에서 PM/UX/AI/Frontend 정체성을 명확히 노출

16. Daniella Marynova
- 큰 애니메이션을 쓰지만 hover 중심이라 경험을 방해하지 않음
- 참고점: 모션이 정보 탐색을 방해하지 않음
- 적용 방향: Hero와 Lab은 강하게, Case Study는 차분하게 유지

17. La Playa
- 프로젝트별 스크린샷, 클라이언트, 역할, 링크가 명확함
- 참고점: no-nonsense 구조
- 적용 방향: 각 프로젝트에 Role, Output, Link를 명확히 배치

18. Adcker
- Awwwards 수상작 계열의 강한 포트폴리오
- 참고점: 대형 타이포, 이미지 다발, 클릭 유도형 섹션
- 적용 방향: Hero와 Selected Projects의 시각적 임팩트 참고

19. MERSI
- 건축 포트폴리오지만 프리미엄하고 정돈된 분위기
- 참고점: 여백과 시각적 정돈감
- 적용 방향: Case Study 본문 가독성 참고

20. Phantom.Land
- 몰입형 인터랙션 중심 스튜디오 포트폴리오
- 참고점: 브랜딩과 인터랙션을 결합하는 방식
- 적용 방향: 포트폴리오 전체를 하나의 작업 세계처럼 느끼게 하는 방식 참고

### 5.3 Common Patterns

1. 좋은 포트폴리오는 프로젝트를 많이 나열하지 않는다.
- 대표 프로젝트를 적게 고르고 깊게 보여준다.
- 본 포트폴리오도 PULSE, PickFit, LikeLion 3개를 중심으로 구성한다.

2. 첫 화면에서 직무 정체성이 바로 보여야 한다.
- 멋진 문장보다 “이 사람이 무엇을 하는 사람인지”가 먼저 보여야 한다.
- Hero에는 노태경 / Taekyung Noh, PM / UX / AI / Frontend를 명확히 노출한다.

3. 인터랙션은 장식이 아니라 증명이어야 한다.
- Bruno Simon처럼 인터랙션 자체가 역량을 보여줄 수 있지만, 과하면 직무 메시지를 흐린다.
- 본 포트폴리오는 Hero와 Lab에서 강한 인터랙션을 사용하고, Case Study는 읽기 쉽게 유지한다.

4. 케이스스터디는 Problem → Insight → Solution → Role → Output → Learning 구조가 강하다.
- PULSE와 PickFit은 이 구조를 따른다.
- LikeLion은 중간 깊이로 교육 설계/운영 능력을 보여준다.

5. 비주얼 개성과 정보 구조가 함께 있어야 한다.
- 콜라주 비주얼은 첫인상을 만들고, 본문은 PM 문서처럼 정리한다.
- “겉은 콜라주처럼 개성 있게, 속은 PM 문서처럼 정리되게”를 원칙으로 한다.

6. 모바일에서는 인터랙션을 축약해야 한다.
- 데스크탑의 몰입형 스토리를 그대로 옮기지 않는다.
- 모바일은 스토리 축약판과 프로젝트 카드 중심으로 구성한다.

7. AI는 기능보다 작업 방식으로 보여주는 것이 더 적합하다.
- 포트폴리오 내부 AI 챗봇은 제외한다.
- Claude Design / Claude Code / AI Visual Prompt Lab을 통해 AI-assisted production workflow를 보여준다.

---

## 6. Decision Log

### 6.1 포트폴리오 내부 AI 챗봇 기능 제외

초기에는 AI Portfolio Navigator처럼 사이트 내부에서 AI가 답변하는 구조도 검토했다.  
하지만 최종적으로는 포트폴리오 안에 AI 챗봇을 넣지 않기로 했다.

이유:
- 사용자의 의도는 AI 기능 탑재가 아니라 AI를 제작 과정에 활용하는 것
- 내부 AI 챗봇은 포트폴리오의 핵심 메시지를 흐릴 수 있음
- 취업용 포트폴리오에서는 프로젝트와 케이스스터디가 중심이어야 함
- AI 답변 기능보다 Claude Design / Claude Code 기반 제작 과정이 더 자연스럽게 차별점을 보여줌

최종 결정:

```text
AI는 사이트 내부 기능이 아니라 Claude Design / Claude Code / AI Visual Prompt Lab 기반 제작 워크플로우로 활용한다.
```

### 6.2 대표 프로젝트 3개 확정

초기에는 PULSE, WORKCUT AI, LikeLion, 아무거나 말고 등 여러 프로젝트를 검토했다.

최종 대표 프로젝트:

1. PULSE
2. PickFit
3. LikeLion 기획·UX/UI 커리큘럼

제외:
- WORKCUT AI: 아직 구현 전이라 제외
- 아무거나 말고: 이번 포트폴리오에서는 제외
- 2018 드론 대회 / 2021 게임기획 경진대회: 현재 희망 직무와 직접 연결성이 약해 제외

### 6.3 Timeline 섹션 제외

Timeline은 만들지 않는다.

이유:
- 이력 나열형 포트폴리오가 될 위험이 있음
- 사용자의 핵심 강점은 연도별 이력보다 프로젝트별 문제 해결 방식에 있음
- 수상/성과는 각각 관련 프로젝트 안에 연결하는 편이 더 설득력 있음

반영:
- UX 소논문 최우수상 → PULSE 케이스스터디 내부에 연결
- Adwise Top 14% / 2차 예선 → PULSE Origin Project로 연결
- 학과 조교 / FLOW → Experience 섹션에 연결

### 6.4 GIF 중심 구현 제외

사용자는 GIF를 활용한 스크롤/터치 기반 영상형 연출을 원했다.  
방향성은 유지하되, 실제 구현은 GIF 중심으로 하지 않는다.

이유:
- GIF는 용량이 큼
- 화질 저하 가능성이 큼
- 스크롤 프레임 제어가 어려움
- 모바일 성능 저하 가능성 있음

최종 구현 우선순위:

1. CSS transform / Framer Motion
2. Scroll-triggered image sequence
3. WebM / MP4 loop video
4. Lottie
5. GIF는 보조 프리뷰용

---

## 7. Naming Candidates

### 7.1 TAEKYUNG WORKS

가장 안정적인 후보.  
취업용 포트폴리오에 적합하며, 과하게 튀지 않는다.

추천 표기:

```text
TAEKYUNG WORKS
PM · UX · AI · Frontend
```

장점:
- 실무형 포트폴리오에 적합
- 이름 중심이라 개인 브랜딩에 유리
- 프로젝트가 늘어나도 확장 가능

단점:
- 콜라주 무드의 개성은 별도 비주얼에서 보완해야 함

### 7.2 Handmade Product Builder Portfolio

콘셉트 설명용 이름.  
실제 사이트명보다는 내부 기획명으로 적합하다.

의미:
- handmade collage visual
- product builder identity
- PM/UX/AI/Frontend를 연결하는 제작자 정체성

추천 용도:
- 문서 내부 콘셉트명

### 7.3 NOT A PERFECT PORTFOLIO

개성이 강한 이름.  
다만 취업용으로는 다소 위험할 수 있다.

장점:
- 기억에 남음
- 콜라주 무드와 잘 맞음
- 완벽하지 않은 손맛을 강조 가능

단점:
- 채용 담당자에게 가볍게 보일 수 있음
- PM/기획 직무의 신뢰감과 충돌 가능

### 7.4 Recommended Naming

최종 추천:

```text
TAEKYUNG WORKS
```

서브 타이틀:

```text
PM · UX · AI · Frontend
```

내부 콘셉트명:

```text
Handmade Product Builder Portfolio
```

### 7.5 표시 워드마크 갱신 (2026-06-11)

사이트에 **표시되는** 히어로 워드마크는 **`PORTFOLIO` / `NOH TAE KYUNG`** (대문자 ITC Avant Garde 등폭 스택 락업)로 변경한다. 기존 "TAEKYUNG WORKS" **표시**는 폐기하고, 내부 작업 폴더·문서 코드네임으로만 유지한다. 서브 `PM · UX · AI · Frontend`는 유지.

- Avant Garde는 "디자인된 레터링"으로 취급(겹침+notch 근사 또는 커스텀 벡터 레터링). 커스텀 합자는 보유 폰트에 없음(검증).
- 상세 결정: `taekyung-works-design-direction.md` §0.1(7·8) / `taekyung-works-design-system.md` §8.2.1.
- 위 결정들은 프로토타입으로 검증 후 코드 제거 — 스펙은 design-direction §0.1·§8.2.1에 보존.

---

## 8. Story Concept

### 8.1 전체 포트폴리오 유형

```text
인터랙티브 스토리형 개인 포트폴리오
```

### 8.2 이야기 구조

포트폴리오는 단순히 “내가 한 것들”을 나열하지 않는다. 방문자가 스크롤을 내리며 “이 사람이 어떤 문제를 보고, 어떤 방식으로 풀고, 어떤 결과물을 만들었는지” 따라가게 만든다.

```text
Scene 1. 나는 어떤 문제를 보는 사람인가
→ Scene 2. 왜 ‘결정 가능한 흐름’에 관심이 있는가
→ Scene 3. 대표 프로젝트 3개로 증명
→ Scene 4. PULSE: 리뷰/고객 데이터에서 홍보 실행까지
→ Scene 5. PickFit: 선택 피로에서 코디 결정까지
→ Scene 6. LikeLion: 초보자의 막막함에서 기획 흐름까지
→ Scene 7. 운영과 전시 경험
→ Scene 8. 실험과 기록
→ Scene 9. Contact
```

### 8.3 첫 장면에서 주고 싶은 인상

사용자가 선택한 인상:

- 신뢰감
- AI와 개발까지 다룰 줄 아는 사람
- 작업 세계가 궁금한 사람
- 남들과 다르게 문제를 보는 사람

즉, 첫 화면은 단순히 “예쁜 포트폴리오”가 아니라 아래 느낌을 줘야 한다.

```text
이 사람은 개성은 있지만 가볍지 않고,
기획과 구현을 연결할 수 있으며,
문제를 보는 관점이 있다.
```

### 8.4 첫 화면 이후 흐름

확정 흐름:

```text
Hero
→ Scroll Intro
→ Selected Projects
```

Hero에서 이름/직무/철학/콜라주 비주얼을 보여주고, 이어서 짧은 스크롤 자기소개로 세계관을 열어준 뒤, 바로 대표 프로젝트 3개를 보여준다.

---

## 9. Visual Direction

### 9.1 메인 무드

사용자가 제시한 4, 5번째 레퍼런스 이미지의 무드를 메인으로 삼는다.

핵심 특징:

- 손으로 자른 종이 콜라주 느낌
- 거친 실루엣
- 완벽하지 않은 외곽선
- 강한 단색 배경
- 단순한 형태
- 주제 하나를 중앙에 크게 배치
- 약간 이상하고 기억에 남는 분위기
- 디지털스럽기보다 물성 있는 handmade 감각
- 귀엽지만 마냥 유치하지 않은 톤

### 9.2 적용 원칙

```text
겉은 콜라주처럼 개성 있게,
속은 PM 문서처럼 정리되게.
```

### 9.3 균형 기준

너무 예술 포트폴리오처럼 보이면 PM/서비스기획 취업용으로 위험하다. 그래서 아래 원칙을 지킨다.

- Hero와 Lab은 강하게 튀어도 됨
- Case Study 본문은 가독성을 최우선으로 함
- 텍스트를 이미지/애니메이션 안에 숨기지 않음
- 콜라주 비주얼은 정보 전달을 보조하는 역할
- 프로젝트 근거와 역할 설명은 차분하고 명확하게 제시

### 9.4 자화상 방향

확정:

```text
실제 얼굴 원본 노출 X
콜라주 가공본만 사용
```

자화상은 실제 얼굴을 바탕으로 하되, 얼굴을 선명하게 공개하는 방식이 아니라 콜라주 스타일의 실루엣으로 만든다.

추천 형태:

- 얼굴은 단순 실루엣
- 노트북, 포스트잇, 기획 문서, 커서, 말풍선, 노드 같은 오브젝트를 주변에 배치
- 실제 프로필 사진보다 “작업 세계의 캐릭터”처럼 보이게 구성

### 9.5 색상 방향

확정:

```text
Claude Design에서 시안 비교 후 최종 결정
```

다만 프로젝트별 기존 브랜드 컬러는 유지할 수 있다.

#### PickFit 컬러

PickFit PDF 기준:

- `#4D5EFF`
- `#E3FF5D`
- `#12141A`

PickFit은 `ㅍㅍ` 구조, 라임 포인트 컬러, 시옷을 옷걸이 형태로 표현한 브랜드 시스템이 있으므로 해당 섹션에서는 기존 색상과 로고 모티브를 적극 활용한다.

#### PULSE 컬러

기존 대화에서 PULSE 관련 UI는 SaaS/대시보드 톤, 딥 네이비/블루/오렌지 포인트 계열이 자주 사용되었다. 정확한 최종 디자인 시스템은 PULSE 화면 캡처와 기획 문서 확인 후 반영한다.

#### LikeLion 컬러

멋쟁이사자처럼 자체 아이덴티티를 과하게 따라가기보다, 포트폴리오 전체 톤 안에서 사자 아이콘/포스트잇/강의 보드 오브젝트 정도로 연결한다.

---

## 10. Interaction Direction

### 10.1 인터랙션 강도

확정:

```text
Hero와 Lab은 강하게,
Case Study는 차분하게.
```

### 10.2 스크롤 연출 방식

확정:

```text
장면 전환형
오브젝트 움직임형
텍스트 순차 등장형
이미지 시퀀스형
전부 섞어서 사용
```

단, 모든 섹션이 다 움직이면 피로도가 높아진다. 섹션별 강약을 반드시 둔다.

### 10.3 GIF 사용에 대한 판단

사용자는 GIF 파일을 만들어 스크롤이나 터치에 따른 영상처럼 제작하고 싶다고 했다. 방향성은 좋지만, 실제 구현 방식으로 GIF를 메인에 쓰는 것은 비추천한다.

이유:

- 용량이 큼
- 화질 저하가 큼
- 스크롤 프레임 제어가 어려움
- 모바일 성능 저하 가능
- 취업용 포트폴리오에서 로딩 지연은 치명적

### 10.4 추천 구현 방식

우선순위:

```text
1. CSS transform / Framer Motion
2. Scroll-triggered image sequence
3. WebM / MP4 loop video
4. Lottie
5. GIF는 보조 프리뷰용
```

### 10.5 섹션별 인터랙션

#### Hero

- 콜라주 자화상 또는 오브젝트가 약하게 떠 있는 느낌
- 스크롤 시작 시 종이 조각이 분리되거나 모여드는 연출
- 이름과 직무가 순차 등장
- 한 문장 철학은 마지막에 고정적으로 등장
- 오브젝트가 마우스 이동에 따라 아주 약하게 parallax

#### Scroll Intro

- 짧은 문장들이 한 줄씩 등장
- “문제”, “흐름”, “결정”, “실행” 같은 단어가 강조
- 콜라주 조각이 프로젝트 오브젝트로 변환되는 연출 가능

#### Selected Projects

- 3개 카드가 스크롤에 따라 순차 등장
- 각 카드 hover 시 문제/역할/결과 요약 노출
- 카드 배경에 프로젝트별 콜라주 오브젝트 배치
- 모바일에서는 카드형 리스트로 축약

#### PULSE

- 리뷰 말풍선, 고객 데이터, 차트, 홍보 카드가 흩어져 있다가 하나의 흐름으로 모임
- “리뷰 분석 → 페르소나 → 홍보 실행” 흐름을 스크롤로 보여줌
- Adwise 경험에서 PULSE로 확장되는 장면은 timeline 대신 “Origin → Expansion” 카드로 표현

#### PickFit

- 선택지가 많아 복잡한 화면에서 시작
- 상황 선택, 스타일 입력, 추천 결과가 순차적으로 좁혀짐
- PDF의 IA 흐름을 스크롤 스토리로 재구성
- 디자인 시스템 섹션은 색상/로고 모티브/옷걸이 형태를 카드로 보여줌

#### LikeLion

- 초보자의 막막한 아이디어 조각들이 커리큘럼 카드로 정렬되는 연출
- Why → Who → What → MVP → IA → Storyboard → UT 흐름
- 카드뉴스, 강의자료, 세션 사진은 갤러리처럼 구성

#### Lab

- AboutPM의 3D 그래프/노드 감성을 가장 강하게 보여주는 구간
- 오브젝트 hover, 노드 연결, 실험 카드 전환 등 강한 인터랙션 허용
- 단, 핵심 프로젝트 섹션보다 더 눈에 띄어 주객전도되면 안 됨

### 10.6 모바일 방향

확정:

```text
모바일은 스토리 축약판
```

기준:

- 데스크탑의 모든 인터랙션을 그대로 옮기지 않음
- 핵심 장면만 남김
- 긴 스크롤은 허용하되, 무거운 이미지 시퀀스는 줄임
- Project Card 중심으로 재구성
- Hero 콜라주 비주얼은 단순화
- Lab의 강한 인터랙션은 모바일에서 정적 카드 또는 짧은 모션으로 대체 가능

---

## 11. Information Architecture

### 11.1 최종 IA

```text
1. Hero
2. Scroll Intro / Manifesto
3. Selected Projects
4. Case Study 01: PULSE
5. Case Study 02: PickFit
6. Case Study 03: LikeLion Curriculum
7. Experience: Academic Assistant & FLOW Exhibition
8. Lab
9. Thinking Archive
10. Contact
```

### 11.2 타임라인 제외

사용자는 Timeline은 굳이 안 하는 게 좋겠다고 판단했다. 따라서 별도의 Awards & Timeline 섹션은 만들지 않는다.

대신 수상 및 성과는 다음 위치에 연결한다.

- UX 소논문 최우수상 → PULSE 케이스스터디 안에서 강하게 연결
- Adwise 상위 14% / 2차 예선 → PULSE의 Origin Project로 연결
- 학과 조교/FLOW → Experience 섹션에서 연결
- 2018 드론 대회, 2021 게임기획 경진대회 → 제외

---

## 12. Section-by-section Content

### 12.1 Hero

#### 목적

- 첫인상 형성
- 이름/직무/철학 전달
- 콜라주 비주얼로 차별화
- 포트폴리오 전체의 스토리 톤 제시

#### 포함 요소

```text
노태경 / Taekyung Noh
PM / UX / AI / Frontend
Carpe Diem 기반 한 문장 철학
콜라주 스타일 실루엣 자화상
CTA: View Projects / Read Thinking Archive / Contact
```

#### 카피 초안

```text
노태경
Taekyung Noh

PM · UX · AI · Frontend

Carpe Diem.
지금 마주한 문제를,
사용자가 움직일 수 있는 흐름으로 설계합니다.
```

대안:

```text
복잡한 문제를 바로 기능으로 바꾸지 않습니다.
사용자의 상황과 결정 흐름을 먼저 보고,
제품 경험과 실행 가능한 화면으로 연결합니다.
```

### 12.2 Scroll Intro / Manifesto

#### 목적

Hero 이후 바로 프로젝트로 들어가기 전, 포트폴리오의 관점을 짧게 설명한다.

#### 메시지

```text
정보가 많아지는 시대에
중요한 것은 더 많은 화면이 아니라
사용자가 다음 행동을 결정할 수 있는 흐름이라고 생각합니다.
```

#### 구성

- 짧은 문장 3~4개
- 콜라주 오브젝트가 문제 조각에서 흐름으로 정렬되는 연출
- 마지막 문장 후 Selected Projects 등장

#### 카피 초안

```text
정보는 많아졌지만,
결정은 더 어려워졌습니다.

저는 문제를 바로 기능으로 바꾸기보다
사용자의 상황과 막히는 지점을 먼저 봅니다.

그리고 PM, UX, AI, Frontend를 연결해
사용자가 다음 행동을 고를 수 있는 흐름을 설계합니다.
```

### 12.3 Selected Projects

#### 목적

대표 프로젝트 3개를 빠르게 보여주고, 이후 Case Study로 연결한다.

#### 프로젝트 3개

1. PULSE
2. PickFit
3. LikeLion 기획·UX/UI 커리큘럼

#### 카드 구성

각 프로젝트 카드에 아래 정보를 포함한다.

```text
Project Name
One-line Problem
Role
Keywords
CTA
```

#### 카드 초안

##### PULSE

```text
PULSE
외식업 사장님이 리뷰와 고객 데이터를 바탕으로 홍보 실행까지 할 수 있게 돕는 AI 마케팅 비서

Role:
Team Lead / PM / UX Planning / Frontend

Keywords:
Review Data, Persona, Dashboard, AI Marketing, Local Business
```

##### PickFit

```text
PickFit
사용자가 비교보다 결정에 집중하도록 돕는 AI 코디 추천 서비스

Role:
Product Planning / Design System / AI Recommendation / Full-stack Prototype

Keywords:
Decision Fatigue, Fashion UX, GPT API, Recommendation, Trust UX
```

##### LikeLion Curriculum

```text
LikeLion UX/UI Curriculum
초보자가 PM·UX 개념을 실제 프로젝트 흐름으로 이해하도록 설계한 커리큘럼

Role:
Curriculum Planner / Design Track Operator / Session Instructor

Keywords:
Education, UX Planning, MVP, IA, User Flow, Documentation
```

---

## 13. Project Case Study Structure

---

# 13.1 Case Study 01: PULSE

## 13.1.1 기본 정보

```text
프로젝트명:
PULSE

한 줄 소개:
외식업 사장님이 리뷰와 고객 데이터를 바탕으로 홍보 실행까지 할 수 있게 돕는 AI 마케팅 비서

프로젝트 유형:
졸업작품 / 팀 프로젝트

팀 규모:
4명

기간:
2025.09 ~ 2026.08

현재 단계:
배포 바로 전 단계

사용자 목표:
외식업 사장님이 가게 현황, 리뷰, 손님 분석, 홍보 실행을 하나의 흐름에서 이해하고 실행할 수 있게 돕기
```

## 13.1.2 내 역할

사용자 제공 기준:

- 조장
- PM
- UX 기획
- 화면 흐름 설계
- 발표 자료 제작
- 팀 일정 관리
- 프론트 구현
- 전반 구현 기여도 매우 높음

포트폴리오 표현 권장:

```text
팀 리드로 기획, 화면 흐름, 구현, 발표자료, 일정 관리를 담당했습니다.
```

또는:

```text
PM·UX 기획과 프론트 구현 전반을 담당하며,
서비스의 주요 화면 흐름과 팀 일정을 주도했습니다.
```

주의:

```text
“거의 다 내가 함”, “전부 다 내가 구현” 같은 표현은 사용하지 않는다.
팀 프로젝트에서 협업 태도를 낮게 보이게 할 위험이 있다.
```

## 13.1.3 문제 정의

```text
외식업 사장님은 리뷰, 고객 특성, 홍보 콘텐츠, 가게 현황을 따로 관리해야 한다.
데이터는 흩어져 있고, 무엇을 보고 어떤 홍보 행동을 해야 하는지 결정하기 어렵다.
```

## 13.1.4 핵심 인사이트

```text
문제는 정보 부족이 아니라,
정보를 보고 다음 행동으로 이어지는 흐름의 부재다.
```

## 13.1.5 솔루션

```text
PULSE는 리뷰와 고객 데이터를 바탕으로
사장님이 가게 상황을 이해하고,
손님 유형을 파악하고,
홍보 콘텐츠 실행까지 이어갈 수 있게 돕는 AI 마케팅 비서다.
```

## 13.1.6 대표 화면 3개

확정 대표 화면:

1. 대시보드
2. 리뷰 관리
3. 손님 분석

## 13.1.7 전체 기능

기능은 전부 넣는다.

- 대시보드
- 리뷰 관리
- 손님 분석
- 홍보 영상
- 인플루언서 매칭
- 상권 분석

## 13.1.8 스토리 방식

확정:

```text
리뷰 분석 → 페르소나 → 홍보 실행
Adwise 경험 → PULSE로 확장
```

## 13.1.9 UX 소논문 최우수상 연결

주제:

```text
PULSE에서 온라인 리뷰데이터 기반 BERTopic을 사용한 페르소나 도출
```

노출 방식:

- 별도 Timeline은 만들지 않음
- PULSE Case Study 안에서 Research/Validation 블록으로 강하게 연결
- Contact 전 수상 나열식으로 빼지 않음

표현 예시:

```text
온라인 리뷰 데이터를 기반으로 BERTopic을 활용해 손님 페르소나를 도출하는 연구를 진행했고,
이 주제로 사용자 경험(UX) 디자인 소논문 경진대회 최우수상을 받았습니다.
이 경험은 PULSE의 손님 분석과 리뷰 기반 인사이트 설계의 근거가 되었습니다.
```

## 13.1.10 Origin Project: Adwise

Adwise는 대표 프로젝트로 따로 빼지 않고 PULSE의 Origin Project로 연결한다.

### Adwise 정보

- 멋쟁이사자처럼 13기 프론트엔드 아기사자 시절 해커톤 프로젝트
- 상위 14% 달성
- 2차 예선 진출
- AI로 광고 소재를 만들고, 수수료 구조를 비교해 의사결정을 돕는 플랫폼
- 핵심 문구: 복잡한 광고는 AI로 쉽게, 수수료 비교는 차트로 확실하게
- 증빙 사진 보유
- 역할:
  - FE
  - React
  - UI/UX
  - 프론트엔드 구현
  - 화면 흐름 설계 참여
- 주요 기능:
  - AI 광고 제작
  - 수수료 비교
  - 광고 성과 대시보드
  - CPC/CVR/ROAS/ROI 지표 자동 계산
  - 데이터 업로드 후 요약
  - 로딩 화면으로 대기 불안 줄이기

### Adwise 핵심 UX

- 진입 장벽을 낮춤
- 홈에서 한 문장으로 서비스 목적을 끝냄
- 광고는 AI가, 수수료는 차트로 비교
- 확인 → 실행 구조
- 실행 전 요약 모달로 한 번 더 확인
- 로딩 화면으로 대기 불안을 줄임
- 데이터는 업로드 후 자동 요약
- 엑셀/CSV 업로드 후 CPC, CVR, ROAS, ROI 자동 계산
- 플랫폼/월 기준으로 요약해 한눈에 비교

### PULSE로 연결하는 문장

```text
Adwise에서는 광고 제작과 성과 비교를 쉽게 만드는 흐름을 경험했습니다.
하지만 광고를 쉽게 만드는 것만으로는 충분하지 않았습니다.
사용자가 데이터를 보고 다음 행동까지 결정할 수 있어야 한다는 문제의식이
이후 PULSE의 방향으로 이어졌습니다.
```

보강 표현:

```text
Adwise에서는 광고 제작과 성과 비교를 쉽게 만드는 흐름을 경험했다.
하지만 광고를 쉽게 만드는 것만으로는 충분하지 않았다.
사용자는 데이터를 보고 다음 행동까지 결정할 수 있어야 한다.
이 문제의식이 이후 PULSE에서 리뷰, 손님 분석, 홍보 실행을 연결하는 방향으로 확장되었다.
```

## 13.1.11 PULSE 카피 초안

```text
PULSE는 외식업 사장님이 리뷰와 고객 데이터를 바탕으로
홍보 실행까지 이어갈 수 있게 돕는 AI 마케팅 비서입니다.

저는 팀 리드로서 기획, 화면 흐름, 주요 프론트 구현,
발표자료 제작과 일정 관리를 담당했습니다.

리뷰 분석에서 손님 페르소나를 도출하고,
그 인사이트가 홍보 콘텐츠와 가게 운영 판단으로 이어지도록
서비스 흐름을 설계했습니다.
```

## 13.1.12 PULSE 인터랙션 아이디어

- 흩어진 리뷰 말풍선들이 분석 카드로 모임
- 키워드들이 페르소나 카드로 묶임
- 페르소나 카드가 홍보 영상/마케팅 실행 카드로 연결됨
- Adwise 프로젝트 카드가 “Origin”으로 등장 후 PULSE로 확장
- 대시보드 화면은 스크롤에 따라 점진적으로 구성요소가 드러남

## 13.1.13 PULSE 콜라주 오브젝트

- 리뷰 말풍선
- 가게 간판
- 차트
- 확성기
- 릴스 카드
- 손님 페르소나 카드
- 작은 영수증/주문표
- 지도 핀

---

# 13.2 Case Study 02: PickFit

## 13.2.1 기본 정보

```text
프로젝트명:
PickFit / 픽핏

한 줄 소개:
사용자가 비교보다 결정에 집중하도록 돕는 AI 코디 추천 서비스

사용자 제공 한 줄 소개:
상황에 맞는 코디를 추천해 주는 패션 결정 앱

프로젝트 유형:
개인 프로젝트

강조 방향:
디자인 시스템과 기획 의도
AI 추천 구조
```

## 13.2.2 PDF 기반 프로젝트 개요

첨부 PDF 기준 PickFit은 “상황에 맞는 코디를 빠르게 골라주는 패션 결정 앱”이다.

핵심 문제는 **결정 피로(Decision Fatigue)**다.

PDF에서 제시된 문제:

- 상품이 너무 많음
- 리뷰를 직접 다 알아봐야 함
- 코디를 머릿속으로 조합해야 함
- 사이즈/핏 실패가 두려움

## 13.2.3 문제 정의

```text
패션 쇼핑에는 상품과 정보가 너무 많다.
사용자는 직접 검색하고, 리뷰를 비교하고, 코디를 조합하고, 핏 실패를 걱정해야 한다.
결과적으로 쇼핑은 즐거운 선택이 아니라 오래 걸리는 결정 노동이 된다.
```

## 13.2.4 핵심 인사이트

PDF에서 제시한 관점:

```text
쇼핑 UX는 클릭에서 위임으로 이동 중
```

과거 쇼핑 UX:

- 사용자가 직접 검색하고 고름
- 여러 상품과 리뷰를 하나씩 비교
- 화면을 많이 볼수록 결정이 길어짐
- 정보는 많지만 결정은 어려움

AI 시대 쇼핑 UX:

- 원하는 조건만 말하면 추천 시작
- AI가 상품, 리뷰, 조건을 먼저 정리
- 사용자는 비교보다 결정에 집중

## 13.2.5 타깃 사용자

PDF 기준:

```text
결정 피로가 큰 20~30대 사용자
```

특징:

- 모바일 쇼핑에 익숙함
- 출근룩, 데이트룩, 하객룩 등 명확한 상황 존재
- 구경보다 빨리 고르고 싶다는 니즈

## 13.2.6 IA

PDF 기준 Information Architecture:

```text
시작
→ 상황 선택
→ 빠른 인터뷰 시작
→ 빠른 인터뷰
→ 추천 생성 로딩
→ 추천 결과
→ 비교 화면
→ 구매 준비
```

상세 요소:

```text
상황 선택:
출근, 데이트, 여행 등 지금 필요한 상황 선택

빠른 인터뷰:
상황, 예산, 무드, 핏, 체형 고민, 색상, 회피 조건

추천 생성 로딩:
진행 상태 노출
반영/제외 조건 요약

추천 결과:
조건 요약 바
코디 추천

비교 화면:
가격, 무드, 핏, 소재, 리뷰

구매 준비:
선택 코디 요약
상품별 링크아웃

피드백 시트:
좋아요, 별로, 너무 비쌈, 너무 화려함, 너무 기본적임, 내 취향 아님

조건 수정 시트:
예산, 무드, 핏, 색상, 회피 조건
```

## 13.2.7 AI 역할

사용자가 PDF로 첨부한 내용 기준:

- Playwright 기반 화면 크롤링으로 상품 정보 수집
- GPT API를 활용해 사용자의 조건을 분석
- 추천 이유와 코디 생성

포트폴리오 설명:

```text
AI는 사용자의 상황, 예산, 스타일, 색상, 핏 조건을 분석하고,
수집된 상품 정보를 바탕으로 코디와 추천 이유를 생성합니다.
```

## 13.2.8 기술 스택

PDF 기준:

```text
FE:
HTML5
Tailwind CSS
JavaScript

BE:
PHP

DB:
MySQL

AI:
GPT API
```

추가 설명:

```text
Playwright 기반 화면 크롤링으로 상품 정보를 수집하고,
GPT API를 활용해 사용자의 조건을 분석하여 추천 이유와 코디를 생성하는 구조입니다.
```

## 13.2.9 대표 화면

확정 대표 화면:

1. 상황 선택
2. 스타일 입력
3. 추천 결과

별도 강조:

- 디자인 시스템
- AI 추천 구조

## 13.2.10 디자인 시스템

PDF 기준:

- `#4D5EFF`
- `#E3FF5D`
- `#12141A`

브랜드 구조:

- 픽핏의 첫 글자 `ㅍㅍ`를 모티브로 사용
- 포인트의 균형
- 라임 포인트 컬러는 스마트함 표현
- 시옷을 옷걸이 형태로 표현
- 코디를 고르고 정리해주는 픽핏의 역할 표현

포트폴리오 표현:

```text
PickFit은 단순한 추천 앱이 아니라,
‘결정 피로를 줄이는 패션 결정 앱’이라는 문제의식에 맞춰
브랜드 시스템과 UX 흐름을 함께 설계했습니다.

로고는 ‘픽핏’의 초성 구조를 활용하고,
옷걸이 형태의 모티브로 코디를 고르고 정리해주는 서비스의 역할을 표현했습니다.
```

## 13.2.11 PickFit 카피 초안

```text
PickFit은 사용자가 비교보다 결정에 집중하도록 돕는 AI 코디 추천 서비스입니다.

패션 쇼핑에서 사용자는 너무 많은 상품, 리뷰 탐색, 코디 조합, 핏 실패에 대한 불안을 동시에 마주합니다.
PickFit은 상황 선택과 빠른 인터뷰를 통해 조건을 좁히고,
AI가 추천 이유와 코디를 생성해 사용자가 빠르게 선택할 수 있도록 돕습니다.
```

## 13.2.12 PickFit 인터랙션 아이디어

- 수많은 상품 카드가 화면에 흩어짐
- 스크롤 시 상황 선택 카드가 등장하며 선택지를 좁힘
- 예산/스타일/색상 입력 카드가 순차 등장
- 로딩 장면에서 조건이 정리되는 애니메이션
- 추천 결과 카드가 2~3개만 남음
- 디자인 시스템 섹션에서 `ㅍㅍ` 로고 조각이 옷걸이 형태로 변형

## 13.2.13 PickFit 콜라주 오브젝트

- 옷걸이
- 코디 카드
- 태그
- 선택 버튼
- 스마트폰
- 옷 조각
- 리뷰 말풍선
- 가격표

## 13.2.14 PickFit Source Notes

Source:

```text
P!ckFit.pdf 기준 정리
```

PDF 핵심 페이지:

- p.1: 프로젝트 한 줄 소개. 상황에 맞는 코디를 빠르게 골라주는 패션 결정 앱
- p.3: 결정 피로(Decision Fatigue) 정의
- p.4: 패션 쇼핑 문제. 상품 과다, 리뷰 탐색 부담, 코디 조합 부담, 사이즈/핏 실패 불안
- p.5: 쇼핑 UX는 클릭에서 위임으로 이동 중
- p.6: 결정 피로가 큰 20~30대 사용자
- p.7: IA. 상황 선택 → 빠른 인터뷰 → 추천 생성 → 추천 결과 → 비교 화면 → 구매 준비
- p.8: 디자인 시스템. `#4D5EFF`, `#E3FF5D`, `#12141A`, ㅍㅍ 구조, 옷걸이 모티브
- p.9~12: 주요 화면. 상황 선택, 스타일 입력, 코디 추천
- p.13: 기술 스택. HTML5, Tailwind CSS, JavaScript, PHP, MySQL, GPT API
- p.14: AI 구조. Playwright 기반 화면 크롤링, GPT API 조건 분석, 추천 이유와 코디 생성
- p.15: 향후 계획. 서비스 디자인, FE/BE 개발, MySQL 연동, QA

---

# 13.3 Case Study 03: LikeLion 기획·UX/UI Curriculum

> v3 심화: 실제 커리큘럼(20주), 운영진 활동, 강의자료, 조직 맥락을 반영해 "교육·운영 PM" 축의 깊은 케이스스터디로 격상.

## 13.3.1 기본 정보

```text
프로젝트명:
LikeLion 기획·UX/UI 커리큘럼

활동:
성결대학교 멋쟁이사자처럼 14기 기획·디자인 파트 운영진 (기획 파트장)

성장 서사:
13기 프론트엔드 아기사자 → 14기 기획·디자인 파트 운영진(기획 파트장)
(구현을 경험한 사람이 기획을 가르치는 위치로 이동)

기간:
2025.12 ~ 2026.12 (약 1년)

담당 범위(정확히):
기획·디자인 파트 중 '기획'은 노태경이 단독으로 전부 담당
(커리큘럼 설계, 세션 강의, 과제 설계, 운영 정리)
'디자인'은 별도 디자인 운영진이 담당 → 기획 영역만 본인 성과로 표기

조직 맥락:
2013년 시작, 전국 70개 이상 대학, 누적 14,000명 이상 / 98개 참여 대학.
국내 최대 규모 IT 창업동아리.
3개 트랙(기획·디자인 / 프론트엔드 / 백엔드)이 협업해 아이디어를 실제 서비스로 구현.
연간 사이클: 3월 아기사자 모집 → 5월 아이디어톤 → 8월 중앙 해커톤(무박 2일) → 9~12월 권역별 연합·기업 연계 해커톤.

공개 가능 자료(확정):
20주 커리큘럼 / 카드뉴스(소개·모집·운영진 이야기·FAQ) / 강의자료 슬라이드 / 운영 방식 /
세션 직접 강의 사진(얼굴 블러 없이 사용 가능) / 과제 설계 / Figma 운영보드
```

## 13.3.2 깊이

확정:

```text
교육·운영 PM 축의 '깊은' 케이스스터디
```

PULSE와 PickFit이 '제품 PM' 축의 대표 케이스스터디라면, LikeLion은 '교육·운영 PM' 축의 대표 케이스스터디다. 서로 경쟁하지 않고 역량의 다른 면을 증명한다.

```text
- PULSE   : 제품을 0→1로 만든 PM (데이터 → 행동)
- PickFit : AI 제품 감각과 결정 UX를 설계한 PM (선택 → 위임)
- LikeLion: 제품 사고 자체를 '시스템(커리큘럼)'으로 설계하고 운영한 PM (개념 → 결정 가능한 흐름)
```

핵심 리프레임: LikeLion은 "동아리에서 가르쳤다"가 아니라 **"제품 사고 과정을 20주짜리 커리큘럼이라는 제품으로 설계하고, 운영 사이클 안에서 굴렸다"**는 증거다. 예외 설계·상태 설계·AARRR·BM까지 남에게 가르쳤다는 것은, 그 개념을 본인이 소유하고 있다는 가장 강한 증명이다.

## 13.3.3 문제 정의

```text
초보자는 PM/UX/UI 개념을 들어도 실제 프로젝트 흐름으로 연결하지 못한다.
아이디어는 있지만, 문제 정의 → 사용자 이해 → MVP → IA/User Flow → 로직/상태 → 데이터/검증으로
이어지는 구조를 스스로 잡지 못한다.
강의는 많지만, '그래서 다음에 무엇을 해야 하는지'를 알려주는 구조가 드물다.
```

## 13.3.4 핵심 인사이트

```text
교육은 개념을 많이 알려주는 것이 아니라,
'다음 행동을 알 수 있게 만드는 구조'여야 한다.
그래서 커리큘럼 자체를 '결정 가능한 흐름'으로 설계했다.
— 포트폴리오 전체를 관통하는 메시지가 교육 설계에서도 동일하게 작동한다.
```

## 13.3.5 솔루션 — 20주 커리큘럼 아키텍처

막연한 아이디어가 결정 가능한 기획으로 발전하도록, 직접 설계한 20주 커리큘럼을 4개 Phase로 구성했다.

```text
① 기획 뼈대 (1~4주)
   역기획·벤치마킹 / Why·Who·페르소나 / What·MVP·MoSCoW / IA·User Flow·FigJam
   → 문제 정의와 구조 설계의 기본기

② 화면·로직·상태 설계 (5~7주)
   화면설계서 + 로직(Event-Condition-Action, Happy/Unhappy Path, 예외 처리) /
   상태 설계(Empty·Loading·Error·Ideal) / 개인 앱디자인 포트폴리오 1차
   → 성공 경로만이 아니라 실패·예외까지 설계하는 시스템 감각

③ 실전·데이터·비즈니스 (8~16주)
   아이디어톤 / UT·우선순위(RICE·Kano) / 퍼널·AARRR /
   PM을 위한 AI 활용 / 협업·개발 프로세스(Agile vs Waterfall) /
   BM(BMC·Lean Canvas·CAC·LTV·Van Westendorp 가격모델)
   → 데이터·그로스·비즈니스 리터러시까지 확장

④ 회고·재정의 (17~20주)
   해커톤 / 회고·문제 재정의 / 개선 백로그
   → 만든 뒤 검증·개선으로 잇는 루프
```

13주차 "PM을 위한 AI 활용"의 핵심 메시지 — *"AI는 판단을 대신하는 존재가 아니라 사고를 보조하는 도구"* — 는 Hero 철학(*"AI가 90점, 마지막 10점은 내 경험과 판단"*)과 정확히 일치한다. 즉 노태경의 AI 관점은 좌우명이 아니라 **남에게 가르친 검증된 관점**이다. (Lab/Hero와 교차 연결)

## 13.3.6 역할

- 기획·디자인 파트 운영진 (기획 파트장), 2025.12 ~ 2026.12
- **기획 커리큘럼 단독 설계** (20주 전 과정) — 디자인은 별도 운영진 담당
- 세션 직접 강의 (실제 강의 사진 보유)
- 강의자료 슬라이드 제작
- 과제 설계
- 카드뉴스 기획(소개·모집·운영진 이야기·FAQ)
- 겨울방학 운영진 스터디 운영 (세션 준비 + 상호 피드백)
- Figma 운영보드(color system·카드뉴스·아이디어톤 스토리) 관리

표현 주의:

```text
'기획'은 단독이지만 동아리 자체는 팀/조직 활동이다.
디자인·FE·BE 운영진과의 협업 구조를 지우지 않는다.
"내가 다 했다"가 아니라 "기획 영역을 단독으로 책임졌다"로 표기한다.
```

## 13.3.7 보여줄 자료

확정 (보유):

- 20주 커리큘럼 구조 (4-Phase 보드로 시각화)
- 강의자료 슬라이드: MVP(스케이트보드→자동차), IA vs User Flow(건물 안내도 vs 내비게이션), 4~6주차 연결(IA/StoryBoard/State), 에러·상태 설계(Inline→Full-page Error)
- 세션 직접 강의 사진 4장 (여러 주차를 직접 강의한 증거 세트):
    - `세션사진.jpg`  — 그룹 실습 지도 (화면: "실습! Pain Point를 알려주세요") · 2주차 Pain Point
    - `세션사진1.jpg` — "좋은 What과 나쁜 What의 차이" 강의 · 3주차 What·MVP
    - `세션사진2.jpg` — "IA를 보는 관점" 강의 · 4주차 IA
    - `세션사진3.png` — 1:1 멘토링 클로즈업
- 카드뉴스: 소개(1~6), 모집(분야·일정), 운영진 이야기(1~6), FAQ
- Figma 운영보드 캡처 (`카드뉴스_피그마.png`)

추가로 모으면 좋은 자료:

- 강의자료 슬라이드 추가본(페르소나·AARRR·BM 등)
- 과제 설계 자료

## 13.3.8 카피 초안

```text
구현을 먼저 경험한 사람으로서, 이번에는 '제품을 만드는 사고'를 가르치는 자리에 섰습니다.

13기 프론트엔드 아기사자로 시작해, 14기에는 기획 파트장으로서
초보자가 PM·UX 개념을 실제 프로젝트 흐름으로 이해할 수 있도록
20주 커리큘럼을 단독으로 설계하고 직접 강의했습니다.

역기획·페르소나·MVP에서 시작해, 화면 로직과 예외·상태 설계를 거쳐,
퍼널·AARRR·BM, 그리고 해커톤 회고와 문제 재정의까지.
막연한 아이디어가 '결정 가능한 기획'으로 발전하는 순서를 직접 만들었습니다.

가장 깊은 학습은 가르치는 것이라는 걸, 이 과정에서 다시 확인했습니다.
```

압축 버전(카드용):

```text
13기 프론트엔드 아기사자 → 14기 기획 파트장.
제품 사고 과정을 20주 커리큘럼으로 단독 설계하고 직접 가르쳤습니다.
```

## 13.3.9 인터랙션 아이디어

- 막연한 아이디어 포스트잇들이 4개 Phase의 주차별 커리큘럼 카드로 정렬됨
- ① 기획 뼈대 → ② 로직·상태 → ③ 데이터·비즈니스 → ④ 회고 흐름이 스크롤로 이어짐
- 강의자료 슬라이드(MVP·IA·State)가 액자에서 hover 시 확대되며 핵심 한 줄 노출
- 세션 강의 사진은 콜라주 프레임 안에 배치 (실제 강의 증거)
- 카드뉴스와 강의자료는 horizontal gallery로 제공
- 과제 설계는 "학생이 다음에 해야 할 것" 카드로 표현
- 연간 사이클(모집→아이디어톤→해커톤)은 Room 내부 보조 칩으로만 (별도 Timeline 섹션 금지 원칙 유지)

## 13.3.10 콜라주 오브젝트

- 포스트잇
- 강의보드 / 강의 슬라이드 프레임
- 사자 아이콘
- 커리큘럼 카드 (4-Phase)
- 체크리스트
- 마이크/강의 포인터
- 노트북 화면
- 에러/상태 화면 칩 (Inline·Toast·Dialog·Full-page)

---

## 14. Experience

# 14.1 Academic Assistant & FLOW Exhibition

## 14.1.1 기본 정보

```text
역할:
성결대학교 미디어소프트웨어학과 조교

기간:
1년 6개월
```

## 14.1.2 담당 경험

- 졸업작품 전시회 FLOW 기획
- 코엑스 졸업작품 전시회 운영 지원
- 포스터 비주얼 초안 설계
- 학과 사업 관리
- 일정 관리
- 행사/전시 운영
- 학과 업무 지원

## 14.1.3 노출 방향

확정:

```text
행정/운영 경험 + 전시 기획/비주얼 작업 중심
```

## 14.1.4 FLOW: 몰입의 순간, 경험의 탄생

사용자가 제공한 이미지 기준 내용:

- 성결대학교 미디어소프트웨어학과 졸업작품 전시회
- 주제: `FLOW : 몰입의 순간, 경험의 탄생`
- 전시 주제 FLOW를 몰입으로 해석
- 키비주얼 방향 제안
- 3D 오브젝트와 곡선 라인 기반 포스터 레이아웃 초안 구성
- 배너/홍보물로 확장 가능한 톤&무드 가이드 초안 제시

프로젝트:

```text
성결대학교 미디어소프트웨어학과 졸업작품 전시회
```

작업:

```text
졸업작품전시회 ‘FLOW’ 콘셉트를 잡고, 포스터 비주얼 초안을 설계했다.
```

핵심 키워드:

```text
#ConceptDraft
#PosterDirection
#VisualIdentity
```

작업 내용:

- 전시 주제 FLOW를 몰입으로 해석
- 키비주얼 방향 제안
- 3D 오브젝트와 곡선 라인 기반 메인 포스터 레이아웃 초안 구성
- 배너/홍보물로 확장 가능한 톤앤무드 가이드 초안 제시
- 사용 색상과 무드 가이드 초안 정리
- 전시 비주얼의 확장 가능성을 고려한 방향 제안

## 14.1.5 카피 초안

```text
학과 조교로 1년 6개월간 학과 사업과 일정을 관리하며,
졸업작품 전시회 FLOW의 기획과 비주얼 초안 작업에 참여했습니다.

전시 주제를 ‘몰입의 순간과 경험의 흐름’으로 해석하고,
포스터·배너·홍보물로 확장 가능한 키비주얼 방향을 제안했습니다.
```

보강 카피:

```text
졸업작품전시회 FLOW의 콘셉트를 ‘몰입의 순간, 경험의 탄생’으로 해석하고,
3D 오브젝트와 곡선 라인을 활용한 포스터 비주얼 초안을 설계했습니다.
단일 포스터에 그치지 않고, 배너와 홍보물로 확장 가능한 키비주얼 방향을 제안했습니다.
```

## 14.1.6 인터랙션 아이디어

- FLOW의 곡선 라인이 스크롤에 따라 흐르는 듯 이어짐
- 포스터 초안/키비주얼/전시 이미지가 레이어로 쌓임
- 전시 운영 경험은 짧은 카드 형태로 정리
- 학과 업무는 세부 문서보다 역할과 책임 중심으로 축약

# 14.2 Student Council Planning Director

성결대학교 미디어소프트웨어학과 학생회 기획국장으로 활동하며 학과 행사와 운영 기획에 참여했습니다.

기간:

```text
2025.03 ~ 2025.12
```

포트폴리오에서의 의미:

- 학과 단위 행사/운영 기획 경험
- 조교 경험, FLOW 전시 운영, LikeLion 운영과 함께 운영/기획 역량을 보강하는 이력

노출 강도:

```text
대표 프로젝트처럼 깊게 다루지 않고, Experience 섹션 안에서 짧게 정리한다.
```

---

## 15. Lab

### 15.1 목적

Lab은 대표 프로젝트 외에 사용자의 실험성, AI 활용 방식, 인터랙션 관심, 지식 구조화 능력을 보여주는 섹션이다.

단, Lab이 대표 프로젝트보다 더 강하게 튀면 안 된다. Hero와 Lab은 개성을 보여주는 구간이지만, 실력 증명은 PULSE/PickFit/LikeLion이 담당한다.

### 15.2 포함 항목

1. AboutPM
2. AI Visual Prompt Lab
3. Claude Design / Claude Code Workflow

---

# 15.3 AboutPM

## 15.3.1 기본 정보

```text
프로젝트명:
AboutPM

링크:
https://github.com/SKUnohtaekyung/AboutPM

설명:
PM 관련 정보를 Obsidian 3D 그래프에서 영감받아 제작한 프로젝트
```

## 15.3.2 포트폴리오 의미

AboutPM은 단순한 PM 학습 기록이 아니라, PM 지식을 탐색 가능한 인터랙티브 구조로 바꾼 프로젝트다.

카피 초안:

```text
PM 지식을 단순 문서로 쌓는 대신,
노드와 연결 구조로 탐색할 수 있는 인터랙티브 학습 구조를 실험했습니다.
```

## 15.3.3 콜라주 오브젝트

- 노드
- 그래프
- 행성
- 지식 조각
- 연결선
- 작은 문서 카드

---

# 15.4 AI Visual Prompt Lab

## 15.4.1 포함할 수 있는 작업

- 콜라주 스타일 이미지 제작
- 포스터/캐릭터/웹 UI 이미지 프롬프트 실험
- 광고 레퍼런스 이미지 제작
- MS Paint doodle 스타일 이미지 실험
- 브로슈어/카드뉴스/비주얼 방향 프롬프트
- Claude/GPT 이미지 활용 워크플로우

## 15.4.2 포트폴리오 의미

```text
AI를 단순히 결과물 생성 도구로 쓰는 것이 아니라,
스타일 기준, 제약 조건, 무드, 금지 요소를 설계해
원하는 방향의 시각 결과물을 얻는 실험을 진행했습니다.
```

## 15.4.3 카피 초안

```text
AI 이미지 생성에서 중요한 것은 프롬프트를 길게 쓰는 것이 아니라,
무드, 형태, 색, 금지 요소, 사용 맥락을 정확히 설계하는 것이라고 생각합니다.
```

---

# 15.5 Claude Design / Claude Code Workflow

## 15.5.1 방향

사용자는 포트폴리오 내부에 AI 챗봇을 넣는 것이 아니라, Claude Design과 AI를 사용해 포트폴리오 자체를 제작하려고 한다.

따라서 이 섹션은 “AI 기능”이 아니라 “AI-assisted production workflow”로 보여준다.

## 15.5.2 포함할 내용

- Claude Design으로 시안 제작
- Claude Code로 React 구현
- 프로젝트 분석 → 계획 → 구현 → 검증 단계
- 화면/기능 변경 금지 조건 관리
- 프롬프트 기반 작업 지시
- AI 결과물 검증 기준
- 작업을 한 번에 시키지 않고 phase 단위로 나누는 방식

## 15.5.3 카피 초안

```text
AI를 답변 도구가 아니라 작업 파트너로 사용합니다.
기획, 디자인, 구현, 검증을 한 번에 던지기보다
분석 → 계획 → 구현 → 검증 단계로 나누어 결과물을 통제합니다.
```

---

## 16. Thinking Archive

### 16.1 섹션명

확정:

```text
Thinking Archive
```

### 16.2 목적

벨로그는 단순 블로그 링크가 아니라, 사용자가 어떤 관점으로 문제를 보고 기록하는지 보여주는 섹션이다.

### 16.3 링크

```text
https://velog.io/@taek___0/posts
```

### 16.4 대표 글 개수

확정:

```text
6개
```

### 16.5 구성

```text
PM / UX 2개
AI / Workflow 2개
생각 / 조직 / 일하는 방식 2개
```

### 16.6 섹션 카피 초안

```text
기획, AI, 조직, 작업 방식에 대해 기록합니다.
말로만 관심 있다고 하지 않기 위해,
내가 어떤 문제를 보고 어떻게 생각하는지 글로 남깁니다.
```

대안:

```text
생각은 지나가지만 기록은 남습니다.
저는 프로젝트 밖에서도 문제를 보고, 해석하고, 다시 작업 방식으로 연결하는 글을 씁니다.
```

### 16.7 포트폴리오에서 보여줄 방식

- 대표 글 카드 6개
- 카테고리 칩: PM/UX, AI/Workflow, Thinking
- 글 제목, 한 줄 요약, 작성일
- Velog 전체 보기 CTA

---

## 17. Public Links

### 17.1 Main Links

GitHub Main:

```text
https://github.com/SKUnohtaekyung
```

Velog:

```text
https://velog.io/@taek___0/posts
```

### 17.2 Project Links

PULSE GitHub:

```text
https://github.com/SKUnohtaekyung/pulse_FE
```

PULSE Deploy:

```text
https://skunohtaekyung.github.io/pulse_FE/
```

PickFit GitHub:

```text
https://github.com/SKUnohtaekyung/PickFit
```

AboutPM GitHub:

```text
https://github.com/SKUnohtaekyung/AboutPM
```

SKUSKU:

```text
https://sku-sku.com/community/recruit2
```

Adwise GitHub:

```text
확인 필요
```

### 17.3 Link Publishing Rule

GitHub 링크는 보안 점검 이후 공개한다.

확인 전에는 포트폴리오에 링크를 걸지 않는다.  
특히 `.env`, API key, DB password, config 파일, Git history 내 민감 정보 노출 여부를 확인해야 한다.

---

## 18. Contact

### 18.1 포함 정보

공개 범위:

- 실명 공개
- 이메일 공개
- 얼굴 사진은 콜라주 가공본만 사용
- GitHub 공개
- Velog 공개
- Resume PDF는 포트폴리오 제작 후 새로 제작

### 18.2 링크

```text
GitHub:
https://github.com/SKUnohtaekyung

Velog:
https://velog.io/@taek___0/posts

PULSE 배포 링크:
https://skunohtaekyung.github.io/pulse_FE/

SKUSKU 링크:
https://sku-sku.com/community/recruit2

AboutPM:
https://github.com/SKUnohtaekyung/AboutPM
```

### 18.3 CTA 문구

```text
함께 문제를 제품 경험으로 바꿀 팀을 찾고 있습니다.
```

대안:

```text
복잡한 문제를 실행 가능한 흐름으로 바꾸는 일을 하고 싶습니다.
```

### 18.4 Contact 카피 초안

```text
PM, UX, AI, Frontend가 만나는 지점에서
사용자가 실제로 움직일 수 있는 제품 경험을 만들고 싶습니다.

함께 이야기하고 싶다면 편하게 연락 주세요.
```

---

## 19. Asset Checklist

### 19.1 필수 에셋

#### 공통

- 콜라주 스타일 자화상 제작용 얼굴 사진
- 포트폴리오 대표 컬러 시안
- 전체 타이포그래피 시안
- 콜라주 질감/종이 텍스처
- 프로젝트별 오브젝트 이미지
- Resume PDF 신규 제작

#### PULSE

- 대시보드 화면 캡처
- 리뷰 관리 화면 캡처
- 손님 분석 화면 캡처
- 홍보 영상 화면 캡처
- 인플루언서 매칭 화면 캡처
- 상권 분석 화면 캡처
- 발표자료 일부
- 화면 흐름도
- 역할 정리
- 졸업작품 기간/팀 정보
- UX 소논문 수상 증빙
- BERTopic 페르소나 도출 관련 이미지/자료
- Adwise 결과 증빙 사진

#### PickFit

- PDF 자료
- 상황 선택 화면
- 스타일 입력 화면
- 추천 결과 화면
- 비교 화면이 있다면 추가
- 디자인 시스템 이미지
- 로고 이미지
- 컬러 시스템
- AI 구조 설명 이미지
- 기술 스택 정리
- IA 이미지

#### LikeLion

보유 확정(공개 가능):
- 20주 커리큘럼 구조 (커리큘럼.md 전문)
- 강의자료 슬라이드: MVP / IA vs User Flow / 4~6주차 연결 / 에러·상태 설계
- 세션 직접 강의 사진 4장: PainPoint 실습(`세션사진.jpg`) / What 강의(`세션사진1.jpg`) / IA 강의(`세션사진2.jpg`) / 멘토링(`세션사진3.png`) — 얼굴 블러 없이 사용 가능
- 카드뉴스: 소개(1~6), 모집(분야·일정), 운영진 이야기(1~6), FAQ
- Figma 운영보드 캡처(`카드뉴스_피그마.png`)

추가로 모을 것:
- 강의자료 슬라이드 추가본 (페르소나·AARRR·BM 등 대표 주차)
- 과제 설계 자료
- 공개 가능한 수강생 결과물 여부 확인

#### Experience / FLOW

- FLOW 포스터 초안 이미지
- 전시 키비주얼 방향 자료
- 코엑스 전시 관련 사진
- 학과 조교 업무 범위 정리
- 학과 사업/일정 관리 중 공개 가능한 자료

#### Lab

- AboutPM 화면 캡처
- AboutPM GitHub 링크
- AI Visual Prompt 결과물
- Claude Design/Claude Code 작업 흐름 이미지
- 작업 프롬프트 예시
- 프로젝트 분석 → 계획 → 구현 → 검증 흐름 예시

#### Thinking Archive

- Velog 대표 글 6개 선정
- 각 글 한 줄 요약
- 카테고리 분류
- Velog 링크

---

## 20. Security Checklist

### 20.1 공개 전 반드시 확인할 것

사용자는 GitHub 보안 점검을 아직 하지 않았다고 답했다. 포트폴리오 기획 후 진행하기로 했지만, GitHub 링크를 공개하기 전에는 반드시 확인해야 한다.

### 20.2 확인 대상

```text
.env
.env.local
config.php
database.php
API key
OpenAI key
DB password
Kakao key
Firebase key
Supabase key
AWS key
Git history에 남은 키
미완성 코드
불리하게 판단될 수 있는 코드
```

### 20.3 점검 절차

1. 공개할 GitHub 레포 목록 확정
2. 각 레포에서 `.env`, `key`, `password`, `token`, `secret`, `config` 검색
3. 실제 키가 있으면 즉시 폐기 및 재발급
4. Git history에 남은 경우 repo 재생성 또는 history rewrite 검토
5. README 정리
6. 불리한 미완성 코드/테스트 파일 정리
7. 포트폴리오에 연결할 링크만 최종 공개

### 20.4 경고

```text
포트폴리오 공개 전 GitHub 보안 점검은 선택이 아니라 필수다.
링크를 걸기 전에 문단속부터 해야 한다.
```

---

## 21. Resume Direction

### 21.1 Resume 제작 방향

포트폴리오 제작 후, 같은 메시지를 기준으로 이력서 PDF를 새로 제작한다.

이력서 핵심 메시지:

```text
PM·UX·AI·Frontend를 연결해 복잡한 문제를 실행 가능한 제품 경험으로 설계하는 사람.
```

이력서에 들어갈 대표 항목:

1. PULSE
- 졸업작품
- 4인 팀
- 2025.09 ~ 2026.08
- 팀 리드 / PM / UX 기획 / 프론트 구현
- 리뷰 데이터 기반 페르소나와 홍보 실행 흐름

2. PickFit
- 개인 프로젝트
- AI 코디 추천 서비스
- 결정 피로와 쇼핑 UX의 위임화
- 디자인 시스템과 AI 추천 구조

3. LikeLion 기획·UX/UI 커리큘럼
- 1년 담당
- 기획&디자인 운영진
- 커리큘럼, 카드뉴스, 강의자료, 과제 설계, 세션 진행

4. 학과 조교 / FLOW
- 학과 조교 1년 6개월
- 졸업작품 전시회 FLOW 기획/비주얼 초안
- 학과 사업 관리 및 일정 관리

5. UX 소논문 최우수상
- PULSE에서 온라인 리뷰 데이터 기반 BERTopic을 사용한 페르소나 도출

6. Adwise
- LikeLion Hackathon Top 14%
- 2차 예선 진출

7. AboutPM
- PM 지식을 Obsidian 3D 그래프에서 영감받아 인터랙티브하게 구조화한 프로젝트

8. Velog Thinking Archive
- PM, AI, 조직, 작업 방식에 대한 기록

Resume 제작 원칙:

- 프로젝트 나열보다 역할과 문제 해결 구조 중심
- 과장된 수치 사용 금지
- 팀 프로젝트에서 협업 태도를 해치는 표현 금지
- 포트폴리오와 같은 메시지 유지

---

## 22. Claude Design Prompt

아래 프롬프트는 Claude Design에서 1차 시안을 만들기 위한 프롬프트다.

```text
Create an interactive personal portfolio website prototype for Taekyung Noh, a Korean PM / UX planner / AI product planner / frontend-capable product builder.

Goal:
This portfolio is not a static project list. It should feel like an interactive story-driven portfolio, inspired by creative portfolio websites, scroll-based storytelling, and handmade collage visuals.

Important:
Do not create an AI chatbot inside the portfolio.
AI is part of the production workflow, not an in-site feature.
The portfolio itself should be designed with an AI-assisted workflow and should show product thinking, UX structure, frontend implementation, and project storytelling.

Core positioning:
PM·UX·AI·Frontend를 연결해 복잡한 문제를 실행 가능한 제품 경험으로 설계하는 사람.

Core message:
정보를 많이 보여주는 사람이 아니라, 사용자가 결정할 수 있는 흐름을 설계하는 사람.

Hero direction:
Use a handmade paper collage visual style.
The self-portrait should be a simplified silhouette, not a realistic face.
Use rough cut-paper shapes, bold object silhouettes, imperfect edges, and strong visual personality.
Show:
- 노태경 / Taekyung Noh
- PM / UX / AI / Frontend
- Carpe Diem-inspired philosophy
- A short line about designing flows that help users act

Suggested hero copy:
Carpe Diem.
지금 마주한 문제를, 사용자가 움직일 수 있는 흐름으로 설계합니다.

Overall mood:
- Handmade collage + clean product case study
- Strong visual personality, but not childish
- Practical, sharp, and readable
- Hero and Lab can be visually bold
- Case Study sections must remain clean and highly readable

Main sections:
1. Hero
2. Scroll Intro / Manifesto
3. Selected Projects
4. Case Study: PULSE
5. Case Study: PickFit
6. Case Study: LikeLion UX/UI Curriculum
7. Experience: Academic Assistant & FLOW Exhibition
8. Lab
9. Thinking Archive
10. Contact

Selected Projects:
1. PULSE
   외식업 사장님이 리뷰와 고객 데이터를 바탕으로 홍보 실행까지 할 수 있게 돕는 AI 마케팅 비서.
   Role: Team Lead / PM / UX Planning / Frontend
   Key screens: Dashboard, Review Management, Customer Analysis
   Full features: Dashboard, Review Management, Customer Analysis, Promo Video, Influencer Matching, Commercial Area Analysis
   Story: Review analysis → Persona → Promotion execution, expanded from Adwise hackathon experience.

2. PickFit
   사용자가 비교보다 결정에 집중하도록 돕는 AI 코디 추천 서비스.
   Role: Product Planning / Design System / AI Recommendation / Full-stack Prototype
   Key screens: Situation selection, Style input, Recommendation result
   Highlight: Decision fatigue, shopping UX from click to delegation, GPT API recommendation, design system.

3. LikeLion UX/UI Curriculum
   초보자가 PM·UX 개념을 실제 프로젝트 흐름으로 이해하도록 설계한 커리큘럼.
   Role: Curriculum Planner / Design Track Operator / Session Instructor
   Highlight: Curriculum structure, card news, lecture materials, session photos, assignment design.

Visual objects:
PULSE:
review bubbles, restaurant sign, chart, megaphone, reels card, customer persona card.

PickFit:
hanger, outfit card, tag, selection button, smartphone, clothes, price tag.

LikeLion:
post-it notes, lecture board, lion icon, curriculum card, checklist.

AboutPM:
nodes, graph, planets, knowledge fragments.

Interaction direction:
- Strong interaction in Hero and Lab
- Calm and readable Case Study sections
- The portfolio must not feel static
- Use scroll-based scene transitions
- Use object movement as evidence guidance, not decoration
- Use sequential text reveal
- Use image sequences or lightweight video loops
- Avoid heavy GIF as the main implementation method
- Mobile should be a simplified story version
- Use 3D-like motion only for major room transitions
- Inside rooms, use 2.5D parallax, scroll-triggered frame reveal, floating objects, hover expansion, and depth shift
- Every motion should clarify structure, reveal project evidence, or show the flow from problem to product decision

Mobile:
Create a mobile-responsive version.
Simplify heavy interactions.
Keep the core story and project cards clear.
Do not reduce mobile into a completely static card list; keep short reveal and object motion.

Contact:
Include GitHub, Velog, email placeholder, resume placeholder.
Resume will be created after the portfolio direction is finalized.

Deliver:
Create a full homepage prototype with desktop and mobile responsive states.
Include component names and interaction notes for handoff to Claude Code.

Additional direction:
- Use the Reference Portfolio Analysis as inspiration, not as direct copying.
- The site should feel like a handmade interactive story, not a generic SaaS portfolio.
- The portfolio should be visually memorable but still credible for PM / AI product planning jobs.
- Do not overuse 3D or WebGL.
- Do not make static flat sections with only cards and text.
- Do not use decorative motion that hides PM evidence.
- Use collage objects as storytelling devices.
- The first impression should communicate trust, AI/frontend capability, curiosity, and a different way of seeing problems.
- Timeline section should not be created.
- Awards should be connected inside relevant projects, not listed separately.
- Add a Decision Log section in the planning document.
- Use TAEKYUNG WORKS as the recommended site naming direction.
```

---

## 23. Claude Code Handoff Prompt

아래 프롬프트는 Claude Design 시안이 나온 뒤 Claude Code에 구현을 맡길 때 사용한다.

```text
You are building an interactive personal portfolio website based on the approved Claude Design prototype.

Tech direction:
- React + Vite
- TypeScript if appropriate
- Tailwind CSS
- Framer Motion for interaction
- Avoid heavy GIFs for core interactions
- Use CSS transforms, scroll-triggered animation, lightweight image sequences, WebM/MP4 loops, or Lottie where appropriate
- Use 3D-like movement only for major room transitions
- Use 2.5D parallax, scroll-triggered frame reveals, floating object packs, hover/focus expansion, and depth shifts inside rooms
- Must be responsive
- Must be deployable

Important constraints:
1. Do not add an AI chatbot inside the portfolio.
2. AI is only part of the production workflow, not an in-site feature.
3. Preserve the handmade collage visual direction.
4. Preserve clear product case study readability.
5. Hero and Lab can be visually bold.
6. Case Study sections must remain calm and readable.
7. The page must not feel static; every ProjectRoom needs visible but controlled motion.
8. Every motion must clarify structure, reveal evidence, or express the flow from problem to product decision.
9. Mobile should be a simplified story version, but not a completely static card list.
10. Do not expose API keys or private information.
11. Do not include unfinished or unfavorable code links without review.
12. Do not overuse animations.

Site sections:
1. Hero
2. Scroll Intro / Manifesto
3. Selected Projects
4. PULSE Case Study
5. PickFit Case Study
6. LikeLion Curriculum Case Study
7. Experience
8. Lab
9. Thinking Archive
10. Contact

Data structure:
Create structured data files for:
- projects
- case studies
- lab items
- writing posts
- links
- visual object metadata

Recommended components:
- Layout
- Header
- HeroSection
- CollagePortrait
- ScrollIntro
- ProjectCard
- SelectedProjects
- CaseStudySection
- PulseCaseStudy
- PickFitCaseStudy
- LikeLionCaseStudy
- ExperienceSection
- LabSection
- ThinkingArchive
- ContactSection
- AnimatedObject
- ImageSequence
- MobileProjectCard

Implementation priorities:
Phase 1:
Build static layout and content structure.

Phase 2:
Add responsive design and project cards.

Phase 3:
Add scroll-triggered animations.

Phase 4:
Add collage visual objects and lightweight motion.

Phase 5:
Optimize performance and accessibility.

Phase 6:
Security check, link check, final deploy.

Accessibility:
- Respect reduced motion preference.
- Provide readable text contrast.
- Do not rely on animation to communicate essential information.
- Ensure keyboard navigation for main links.
- Optimize image alt text.

Performance:
- Compress images.
- Use WebP/AVIF where possible.
- Lazy-load heavy visuals.
- Avoid large GIF files.
- Keep first load fast.

Final deliverable:
A production-ready portfolio website that can be deployed, with clean code structure and clear comments in Korean explaining important parts.

Additional implementation rules:
1. Do not create a Timeline page or section.
2. Do not add an in-site AI chatbot.
3. Keep awards inside relevant project sections.
4. Use data-driven content files for references, project metadata, links, and writing posts.
5. Create a `references.ts` or `references.json` file if useful for storing portfolio reference notes.
6. Create a `decisionLog.ts` or markdown section if useful.
7. Use optimized assets instead of heavy GIF files.
8. Implement reduced-motion support.
9. Make mobile a simplified story version, not a full duplicate of desktop.
10. Before adding GitHub links, include a TODO comment that security review is required.
```

---

## 24. Claude Work Sequence

### 24.1 Recommended Work Sequence

1. Reference Analysis 반영
- 위 Reference Portfolio Analysis를 Claude Design 프롬프트에 반영한다.
- 단순 복제가 아니라, 각 레퍼런스의 장점만 추출해 적용한다.

2. Visual Mood Board 생성
- 콜라주 자화상
- 프로젝트별 오브젝트
- 종이 질감
- 색상 후보
- Hero 시각 방향
- Lab 시각 방향

3. Hero 3안 생성
- 안정형
- 개성형
- 인터랙션 강한 형
- 이름/직무/철학이 모두 보이는지 비교

4. IA 기반 와이어프레임 생성
- Hero
- Scroll Intro
- Selected Projects
- PULSE
- PickFit
- LikeLion
- Experience
- Lab
- Thinking Archive
- Contact

5. Selected Projects 카드 디자인
- PULSE
- PickFit
- LikeLion
- 각 프로젝트별 오브젝트와 역할/문제/키워드 반영

6. PULSE Case Study 시안
- 리뷰 분석 → 페르소나 → 홍보 실행
- Adwise → PULSE 확장
- UX 소논문 수상 연결
- 대표 화면 3개: 대시보드, 리뷰 관리, 손님 분석

7. PickFit Case Study 시안
- 결정 피로
- 쇼핑 UX의 위임화
- 상황 선택 → 스타일 입력 → 추천 결과
- 디자인 시스템
- AI 구조

8. LikeLion / Experience / Lab 시안
- 커리큘럼 구조
- 카드뉴스/강의자료/세션 사진
- FLOW
- AboutPM
- AI Visual Prompt Lab
- Claude Workflow

9. 모바일 축약판 생성
- 데스크탑의 모든 인터랙션을 그대로 옮기지 않는다.
- 핵심 스토리와 프로젝트 카드 중심으로 축약한다.

10. React 구현용 컴포넌트 분해
- HeroSection
- CollagePortrait
- ScrollIntro
- SelectedProjects
- ProjectCard
- PulseCaseStudy
- PickFitCaseStudy
- LikeLionCaseStudy
- ExperienceSection
- LabSection
- ThinkingArchive
- ContactSection
- AnimatedObject
- ImageSequence

11. Claude Code Handoff
- Claude Design 시안을 기반으로 실제 React 구현을 요청한다.
- 구현은 Phase 단위로 진행한다.

12. 구현 후 QA
- 가독성
- 반응형
- 인터랙션 성능
- 링크
- 보안
- GitHub 민감 정보
- 모바일 사용성
- reduced motion 대응

---

## 25. Implementation Plan

### Phase 1. 자료 정리

- PULSE 화면 캡처 정리
- PickFit PDF 기반 이미지 추출
- LikeLion 자료 정리
- FLOW 이미지 정리
- AboutPM 캡처
- Velog 대표 글 6개 선정
- 얼굴 사진 콜라주 제작용 이미지 선택
- GitHub 보안 점검 대상 레포 목록 작성

### Phase 2. Claude Design 시안 제작

- Hero 시안 2~3개
- 컬러 시안 2~3개
- 프로젝트 카드 시안
- PULSE Case Study 시안
- PickFit Case Study 시안
- Lab 섹션 시안
- 모바일 축약판 시안

### Phase 3. 콘텐츠 확정

- Hero 문장 확정
- 프로젝트별 한 줄 설명 확정
- 역할 표현 확정
- PULSE/Adwise 연결 문장 확정
- UX 소논문 수상 연결 문장 확정
- Thinking Archive 글 6개 확정

### Phase 4. React 구현

- React + Vite 세팅
- Tailwind 세팅
- 기본 레이아웃 구현
- 섹션별 컴포넌트 구현
- 데이터 파일 분리
- 반응형 구현

### Phase 5. 인터랙션 구현

- Hero 콜라주 모션
- Scroll Intro 텍스트 등장
- Project Card hover
- Case Study section reveal
- Lab 인터랙션
- 모바일 축약 애니메이션

### Phase 6. 성능/보안/배포

- 이미지 최적화
- lazy loading
- reduced motion 대응
- GitHub 보안 점검
- 링크 점검
- Vercel 또는 GitHub Pages 배포
- 모바일 실기기 테스트

### Phase 7. 이력서 PDF 제작

포트폴리오 방향이 확정된 뒤 같은 메시지로 이력서 PDF를 새로 제작한다.

---

## 26. Validation Checklist

### 26.1 첫인상 검증

- [ ] 5초 안에 이름과 직무가 보이는가?
- [ ] PM/UX/AI/Frontend 정체성이 보이는가?
- [ ] 콜라주 비주얼이 기억에 남는가?
- [ ] 너무 유치하거나 예술 과제처럼 보이지 않는가?
- [ ] 한 문장 철학이 프로젝트와 연결되는가?

### 26.2 정보 구조 검증

- [ ] 대표 프로젝트 3개가 명확한가?
- [ ] PULSE, PickFit, LikeLion의 역할이 겹치지 않고 구분되는가?
- [ ] 프로젝트가 “결정 가능한 흐름”이라는 메시지로 묶이는가?
- [ ] Adwise가 PULSE의 Origin으로 자연스럽게 연결되는가?
- [ ] UX 소논문 수상이 PULSE의 근거로 연결되는가?

### 26.3 케이스스터디 검증

- [ ] 각 프로젝트에 Problem, Insight, Solution, Role, Output, Learning이 있는가?
- [ ] 역할 표현이 과장되지 않았는가?
- [ ] 팀 프로젝트에서 협업 태도를 해치지 않는가?
- [ ] 성과 수치가 없더라도 산출물과 의사결정이 보이는가?
- [ ] 공개 가능한 자료만 사용했는가?

### 26.4 인터랙션 검증

- [ ] Hero와 Lab은 충분히 개성 있는가?
- [ ] Case Study는 읽기 편한가?
- [ ] 스크롤 인터랙션이 정보 전달을 방해하지 않는가?
- [ ] GIF를 남발하지 않았는가?
- [ ] 모바일에서 스토리가 축약되어 잘 보이는가?
- [ ] reduced motion 대응이 있는가?

### 26.5 취업용 검증

- [ ] 채용 담당자가 이 사람의 직무 방향을 이해할 수 있는가?
- [ ] PM/서비스기획자로서 문제 정의와 구조화 능력이 보이는가?
- [ ] AI 서비스기획자로서 AI를 기능보다 흐름으로 이해하는 점이 보이는가?
- [ ] Frontend 이해도와 구현 경험이 보이는가?
- [ ] 연락/이력서/GitHub/Velog 접근이 쉬운가?

### 26.6 보안 검증

- [ ] 공개 GitHub 레포에 API Key가 없는가?
- [ ] `.env` 파일이 노출되지 않았는가?
- [ ] DB password, token, secret이 없는가?
- [ ] Git history에 민감 정보가 남아 있지 않은가?
- [ ] 미완성/불리한 코드는 정리했는가?

---

## 27. Final Summary

이 포트폴리오의 핵심은 다음 한 문장으로 정리된다.

```text
콜라주 비주얼로 첫인상을 만들고,
스크롤 인터랙션으로 작업 세계에 들어가게 하며,
케이스스터디로 PM·UX·AI·Frontend 역량을 증명하는 포트폴리오.
```

최종 방향:

```text
화려한 포트폴리오가 아니라,
왜 이 사람이 PM/AI 서비스기획자로 설득력 있는지
하나의 이야기로 납득시키는 포트폴리오.
```

---

## 28. Excluded Directions

### 28.1 제외

- 포트폴리오 내부 AI 챗봇 기능
- WORKCUT AI
- 아무거나 말고
- 2018 드론 대회 수상
- 2021 게임기획 경진대회 수상
- 별도 Timeline 섹션
- GIF 중심 구현
- 모든 프로젝트를 같은 깊이로 장황하게 설명하는 방식

### 28.2 주의

- “거의 다 내가 함” 표현 금지
- “AI를 잘 씁니다”만 강조하는 표현 금지
- 프로젝트를 너무 많이 나열하는 방식 금지
- 화려한 인터랙션이 정보 전달을 가리는 구조 금지
- 수치 성과가 없는 상태에서 과장된 성과 문구 금지
- GitHub 보안 점검 전 공개 링크 남발 금지

### 28.3 Must Keep

- 대표 프로젝트는 PULSE, PickFit, LikeLion 3개
- WORKCUT AI 제외
- 아무거나 말고 제외
- AI 챗봇 기능 제외
- Timeline 섹션 제외
- Hero와 Lab은 강하게, Case Study는 차분하게
- 모바일은 스토리 축약판
- Resume PDF는 나중에 새로 제작
- GitHub 보안 점검 전 링크 공개 주의

### 28.4 Must Avoid

- 기존 문서 내용 삭제
- 프로젝트를 너무 많이 나열
- 성과 과장
- “거의 다 내가 함” 같은 표현
- 팀원 기여를 지우는 표현
- GIF 중심 구현
- AI 기능을 억지로 사이트 내부에 넣는 방향
- 취업 포트폴리오로 보기 어려울 정도의 과한 예술성

---

## 29. Next Actions

1. 이 문서 검토
2. PULSE 화면 캡처/기획 문서 추가
3. LikeLion 자료 추가
4. Velog 대표 글 6개 선정
5. 콜라주 자화상 제작
6. Claude Design 1차 시안 제작
7. Claude Code 구현 계획 확정
8. GitHub 보안 점검
9. React 구현 및 배포
10. 포트폴리오 방향에 맞춘 Resume PDF 신규 제작

---

## v2 Update Summary

이번 v2 업데이트에서 추가된 내용:

- Reference Portfolio Analysis
- Decision Log
- Naming Candidates
- Public Links
- Student Council Planning Director
- Adwise 세부 UX 보강
- FLOW 세부 작업 내용 보강
- PickFit PDF 페이지별 근거 정리
- Resume Direction
- Claude Work Sequence
- Claude Design Prompt 보강
- Claude Code Handoff Prompt 보강
