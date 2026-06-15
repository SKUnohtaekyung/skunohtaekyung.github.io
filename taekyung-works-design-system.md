# TAEKYUNG WORKS DESIGN.md

> 개인 포트폴리오 웹사이트 디자인 시스템 최종 초안  
> 목적: Claude Design → Claude Code → React 구현까지 이어지는 재사용 가능한 디자인 기준 문서  
> 버전: v1.0  
> 작성일: 2026-06-08  
> 기준 자료: 현재 대화에서 확정한 포트폴리오 방향, getdesign.md 참고 기업 분석, PickFit/LikeLion/PULSE 디자인 시스템 자료, 타이포그래피 레퍼런스, 룸 기반 인터랙션 방향

---

## 0. 이 문서의 목적

이 문서는 노태경 개인 포트폴리오 웹사이트 `TAEKYUNG WORKS`의 디자인 시스템을 정의한다.

이 포트폴리오는 일반적인 정적 포트폴리오가 아니라, **화이트 갤러리형 인터랙티브 포트폴리오**다. 첫 화면은 강한 타이포그래피와 인터랙션으로 시작하고, 스크롤을 내릴수록 핵심 프로젝트 3개가 각각 다른 “전시 방(Room)”처럼 열리는 구조를 갖는다.

이 문서는 다음 목적을 가진다.

1. Claude Design이 일관된 시각 시스템으로 시안을 만들 수 있게 한다.
2. Claude Code 또는 Codex가 React/Tailwind/Framer Motion 기반으로 구현할 수 있게 한다.
3. 각 프로젝트별 컬러, 타이포, 오브젝트, 룸 구조를 재사용 가능한 시스템으로 만든다.
4. 강한 비주얼과 취업용 포트폴리오의 신뢰감을 동시에 유지한다.
5. 프로젝트를 단순 나열하지 않고, 하나의 공간 이동형 이야기로 경험하게 한다.

---

## 1. 최종 디자인 방향 요약

### 1.1 한 줄 정의

```text
화이트 갤러리형 인터랙티브 포트폴리오 안에서,
강한 영문 타이포가 공간의 간판이 되고,
각 프로젝트는 컬러가 다른 전시 방처럼 펼쳐지며,
직접 제작한 비주얼은 액자와 오브젝트처럼 살아 움직인다.
```

### 1.2 최종 방향

```text
강한 타이포그래피로 시작해서,
스크롤이 내려갈수록 3개의 프로젝트 룸을 통과하고,
각 룸 안에서 액자·오브젝트·패널·움직이는 이미지로 프로젝트를 경험하게 하는 포트폴리오.
```

### 1.3 전체 구조

```text
1. Hero
2. Manifesto
3. Transition Corridor / Gallery Entrance
4. Room 01 — PULSE
5. Room 02 — PickFit
6. Room 03 — LikeLion
7. Experience / FLOW / Academic Assistant
8. Lab / AboutPM / AI Workflow
9. Thinking Archive
10. Contact
```

### 1.4 핵심 메시지

```text
정보를 많이 보여주는 사람이 아니라,
사용자가 결정할 수 있는 흐름을 설계하는 사람.
```

---

## 2. 사용자가 원하는 방향 해석

### 2.1 사용자가 원하는 포트폴리오 경험

사용자가 원하는 것은 단순한 프로젝트 소개 페이지가 아니다.

정리하면 다음과 같다.

- 전체 배경은 `#F8FAFC` 계열의 화이트 베이스
- 첫 화면은 진짜 인터랙션이 느껴지는 강한 Hero
- 메인은 타이포그래픽 형식
- 스크롤을 내릴수록 직접 제작한 이미지와 오브젝트가 적극적으로 등장
- 이미지가 정적인 삽입물이 아니라 실제로 움직이는 것처럼 느껴져야 함
- 핵심 프로젝트 3개는 각 프로젝트에 맞는 색을 가진 독립된 방처럼 구성
- 사용자는 프로젝트 섹션을 읽는 것이 아니라, 공간을 이동하는 느낌을 받아야 함
- 각 방에는 프로젝트를 설명하는 액자, 패널, 오브젝트, 화면 캡처가 있음
- 이 구조는 재사용 가능한 시스템이어야 함
- 3D로 룸이 전환되는 것도 허용
- 단, Case Study 본문은 읽기 쉬워야 함
- 폰트는 메인 영문 타이포에 ITC Avant Garde Gothic을 사용
- 본문은 Pretendard 사용
- 시스템/라벨용 보조 폰트는 별도 지정

### 2.2 사용자가 원하는 공간 비유

```text
화이트 갤러리 안에서
타이포가 간판이 되고,
프로젝트는 각각 하나의 방이 되며,
이미지는 벽에 걸린 작품처럼 등장하지만
스크롤에 반응해 살아 움직이는 포트폴리오.
```

---

## 3. 디자인 판단 기준

이 시스템은 아래 3개 기준을 충족해야 한다.

### 3.1 취업용 신뢰감

- PM/서비스기획 포트폴리오로 보였을 때 신뢰감이 있어야 함
- 정보 구조, 역할, 프로젝트 설명이 명확해야 함
- 과한 예술성 때문에 실무성이 흐려지면 안 됨

### 3.2 개성 있는 첫인상

- 일반적인 SaaS형 포트폴리오처럼 보이면 안 됨
- 타이포그래피와 룸 전환으로 기억에 남아야 함
- 직접 만든 이미지와 오브젝트가 포트폴리오의 개성을 만들어야 함

### 3.3 재사용 가능한 시스템

- PULSE, PickFit, LikeLion 외 다른 프로젝트가 추가되어도 Room Template을 재사용할 수 있어야 함
- 컬러, 타이포, 오브젝트, 액자, 패널, 모션 규칙이 시스템화되어야 함
- Claude Design/Claude Code가 같은 규칙으로 작업할 수 있어야 함

---

## 4. getdesign.md 기반 참고 기업 매핑

이 디자인 시스템은 getdesign.md에서 확인한 여러 기업별 DESIGN.md 패턴 중, 우리 포트폴리오에 맞는 것만 선별해 반영한다.

### 4.1 참고 기업별 역할

```text
Figma:
큰 컬러 블록, 장면 전환, 시각적 리듬

Claude:
읽기 좋은 서사, 따뜻한 에디토리얼 톤, AI/제품 설명의 안정감

Clay:
손맛 있는 오브젝트, 비정형 형태, 친근하지만 세련된 비주얼

Linear:
제품 화면을 증거처럼 보여주는 정밀한 Case Study 구조

Framer:
Hero와 전환 모션의 세련된 인터랙션

Raycast:
작업 도구, command, workflow, Lab 섹션의 어두운 실험성

WIRED:
기술 매거진식 타이포그래피와 Thinking Archive 구성

Notion:
따뜻한 문서형 정보 구조, 커리큘럼과 기록 정리

Vercel:
흑백 정밀감, 개발자 신뢰감, 배포/링크/기술 스택 정리
```

### 4.2 우리 사이트에 적용하는 방식

```text
Base Layout:
Claude + Notion

Story Color Blocks:
Figma

Collage / Object Personality:
Clay

Product Case Study Precision:
Linear + Vercel

Hero / Room Transition Motion:
Framer

Lab / Workflow Feeling:
Raycast

Thinking Archive:
WIRED
```

### 4.3 참고하지 않는 방향

아래 브랜드 톤은 이번 포트폴리오의 메인 방향으로 쓰지 않는다.

```text
Nike / Apple / Tesla:
브랜드 파워 중심이라 개인 PM 포트폴리오에 과함

BMW / Ferrari / Lamborghini:
프리미엄 자동차 톤은 프로젝트 메시지와 거리 있음

Binance / Coinbase / Kraken:
금융/거래 대시보드 느낌이 강해 불필요

SpaceX / xAI:
너무 차갑고 미래주의적이면 콜라주/갤러리 감성과 충돌 가능

일반 SaaS 템플릿:
개성이 죽고 흔한 포트폴리오로 보일 위험 있음
```

---

## 5. Visual Theme & Atmosphere

### 5.1 메인 분위기

```text
White Gallery
Typographic Entrance
Project Rooms
Animated Frames
Product Evidence
Handmade Object Layer
```

### 5.2 디자인 키워드

```text
Clean
Typographic
Interactive
Gallery-like
Room-based
Product-focused
Handmade Object
Readable Case Study
Motion-driven
Systematic
```

### 5.3 한국어 키워드

```text
정돈된
강한 타이포그래피
전시형
공간 이동형
프로젝트 방
움직이는 액자
정보 구조 중심
실험적이지만 신뢰감 있는
```

### 5.4 금지 키워드

```text
유치한
장난감 같은
과한 3D
무거운 GIF
AI 챗봇 같은
읽기 어려운
흔한 SaaS 템플릿
과하게 미래적인
팀 프로젝트를 개인 성과처럼 보이게 하는
```

---

## 6. Brand Principles

### Principle 1. 첫 화면은 기억에 남아야 한다

Hero는 평범한 자기소개 화면이 아니다.  
ITC Avant Garde Gothic 기반의 대형 영문 타이포와 인터랙션으로 포트폴리오의 첫인상을 만든다.

### Principle 2. 프로젝트는 방처럼 경험되어야 한다

PULSE, PickFit, LikeLion은 단순 카드나 섹션이 아니라 각각 다른 Room으로 구성한다.  
색, 오브젝트, 액자, 패널, 모션이 프로젝트마다 다르다.

### Principle 3. 이미지는 액자와 오브젝트처럼 움직인다

직접 제작한 이미지와 프롬프트 이미지, 화면 캡처는 정적으로 붙이지 않는다.  
스크롤, hover, parallax, depth shift를 통해 살아 움직이는 듯한 느낌을 준다.

### Principle 4. Case Study는 반드시 읽혀야 한다

비주얼은 강하게 가져가되, Problem, Insight, Role, Output, Learning 같은 핵심 정보는 읽기 쉬워야 한다.

### Principle 5. Hero와 Lab은 강하게, Case Study는 차분하게

강한 인터랙션은 Hero, Transition Corridor, Lab에 집중한다.  
각 프로젝트 방의 내부 설명은 시각적으로 역동적이어도 정보 구조를 흐리면 안 된다.

### Principle 6. AI는 사이트 내부 기능이 아니라 제작 워크플로우다

포트폴리오 내부에 AI 챗봇을 넣지 않는다.  
AI는 Claude Design, Claude Code, AI Visual Prompt Lab 등 제작 과정과 작업 방식으로 보여준다.

---

## 7. Color System

## 7.1 전체 베이스 컬러

전체 포트폴리오의 기본 배경은 `#F8FAFC` 계열로 확정한다.

```css
--bg-base: #F8FAFC;
--bg-panel: #FFFFFF;
--bg-soft: #F1F5F9;

--text-main: #0F172A;
--text-sub: #475569;
--text-muted: #64748B;

--line-soft: #E2E8F0;
--line-strong: #CBD5E1;
```

### 사용 이유

- 흰색보다 눈이 덜 피곤함
- 프로젝트별 컬러가 잘 받음
- 취업용 포트폴리오로 신뢰감 있음
- 이미지, 액자, 그림자, 3D 룸 전환이 잘 보임
- 타이포그래피가 선명하게 드러남

---

## 7.2 Room 01 — PULSE Color System

### 기준 자료

사용자가 제공한 PULSE 디자인 시스템 텍스트 기준.

핵심 철학:

```text
Modern Professional & Universal Clarity
```

핵심 대상:

```text
20~50대 외식업 사장님
```

3대 원칙:

```text
Smart Trust:
딥 로얄 블루 + 화이트 기반의 신뢰감

Vitality Action:
오렌지는 오직 행동이 필요한 곳에만 사용

Universal Clarity:
명도 대비와 넉넉한 행간으로 가독성 확보
```

### PULSE Room Tokens

```css
--pulse-room-bg: #F5F7FA;
--pulse-room-wall: #EAF1FB;
--pulse-primary: #002B7A;
--pulse-primary-hover: #002B7AE6;
--pulse-primary-sub: #002B7ACC;
--pulse-primary-inactive: #002B7A99;
--pulse-primary-border: #002B7A66;
--pulse-primary-tint: #002B7A1A;
--pulse-primary-stripe: #002B7A0D;

--pulse-action: #FF5A36;
--pulse-action-bg: #FF5A361A;
--pulse-action-hover: #FF5A3633;

--pulse-text-main: #191F28;
--pulse-bg-page: #F5F7FA;
--pulse-bg-card: #FFFFFF;

--pulse-success: #059669;
--pulse-warning: #D97706;
--pulse-error: #DC2626;
```

### PULSE Room 성격

```text
가장 전문적인 방
가장 제품적인 방
가장 PM/서비스기획자다운 방
데이터에서 행동까지 이어지는 공간
```

### PULSE Room 사용 규칙

- 딥 블루는 신뢰와 정보 구조를 담당
- 오렌지는 CTA, 생성, 저장, 실행 같은 행동에만 사용
- 대시보드와 제품 화면은 과한 콜라주보다 정돈된 액자 형태로 제시
- 정보 밀도를 유지하되 박스 중첩은 줄임
- PULSE 제품 자체의 디자인 시스템을 존중함

### PULSE Room 키 비주얼

- 대시보드
- 리뷰 관리
- 손님 분석
- 홍보 영상
- 인플루언서 매칭
- 상권 분석

### PULSE Room 오브젝트

```text
리뷰 말풍선
차트
가게 간판
확성기
릴스 카드
손님 페르소나 카드
지도 핀
데이터 패널
```

---

## 7.3 Room 02 — PickFit Color System

### 기준 자료

사용자가 제공한 PickFit 디자인 시스템 이미지 기준.

핵심 컬러:

```text
#4D5EFF
#E3FF5D
#12141A
```

핵심 모티브:

```text
픽핏의 첫 글자 ‘ㅍㅍ’ 구조
라임 포인트 컬러
시옷을 옷걸이 형태로 표현
코디를 고르고 정리해주는 역할
```

### PickFit Room Tokens

```css
--pickfit-room-bg: #F5F6FF;
--pickfit-room-wall: #E9ECFF;
--pickfit-primary: #4D5EFF;   /* = 기능색(--pickfit-ink): 텍스트·선·마크·플립색. 라임 비가독 대체 (2026-06-11) */
--pickfit-accent: #E3FF5D;    /* 라임 = 채움/룸 톤/포인트로만. 흰 바탕 텍스트·선·점엔 쓰지 않음 */
--pickfit-ink: #4D5EFF;       /* 동반색 별칭 — 흰 바탕 가독 보장 */
--pickfit-field: #FBFDEA;     /* 클릭 전 룸 배경 옅은 라임 톤 (랜딩 Selected) */
--pickfit-text: #12141A;
--pickfit-soft: #4D5EFF14;
--pickfit-frame: #FFFFFF;
```

> ⚠️ 라임 가독성 규칙 (design-direction §0.1·§6): `#E3FF5D`는 흰 바탕에서 텍스트·선·점·플립색으로 쓰면 안 읽힘.
> PickFit의 모든 기능색(텍스트·CTA·점·플립·룸 타이틀)은 `--pickfit-primary #4D5EFF`를 쓰고, 라임은 채움·옅은 룸 톤·포인트로만 한정한다.

### PickFit Room 성격

```text
가장 브랜드성이 강한 방
가장 그래픽이 명확한 방
선택 피로에서 결정으로 이동하는 방
```

### PickFit Room 사용 규칙

- 기존 브랜드 컬러를 유지한다.
- 라임은 스마트함과 포인트 균형을 표현한다.
- 블루는 서비스 정체성과 주요 UI를 담당한다.
- 블랙은 텍스트와 구조를 잡는다.
- 스마트폰 화면과 추천 결과는 가장 큰 액자로 보여준다.

### PickFit Room 키 비주얼

- 상황 선택
- 스타일 입력
- 코디 추천
- 추천 결과
- 디자인 시스템
- AI 추천 구조

### PickFit Room 오브젝트

```text
옷걸이
코디 카드
태그
선택 버튼
스마트폰
가격표
옷 조각
컬러칩
```

---

## 7.4 Room 03 — LikeLion Color System

### 기준 자료

사용자가 제공한 LikeLion 카드뉴스/모집 이미지 및 컬러 시스템 이미지 기준.

주요 컬러:

```text
Main color:
#0060C6
#5BA3FF

Background:
#E6F2FF

Accent:
#FF6000

카드뉴스 썸네일 글씨 색상:
#3755FF

프론트:
#80DAFF

백:
#77DEB6

기획/디자인:
보라 계열 사용 가능
```

### LikeLion Room Tokens

```css
--likelion-room-bg: #F4F8FF;
--likelion-room-wall: #E6F2FF;
--likelion-primary: #0060C6;
--likelion-sub: #5BA3FF;
--likelion-accent: #FF6000;
--likelion-text: #1E293B;

--likelion-cardblue: #3755FF;
--likelion-front: #80DAFF;
--likelion-back: #77DEB6;
--likelion-design: #B89AF4;
```

### LikeLion Room 성격

```text
구조적
교육적
운영형
정리된 시스템
밝지만 가볍지 않은 안내형 공간
```

### LikeLion Room 사용 규칙

- 첨부 이미지의 블루/화이트/오렌지 안내형 톤을 유지한다.
- 포스트잇 옐로우만으로 가지 않는다.
- 교육 자료, 카드뉴스, 세션 사진, 과제 설계를 정돈된 보드처럼 보여준다.
- 운영진/커리큘럼/FAQ 자료는 과하게 장식하지 않고 정보 전달형으로 구성한다.

### LikeLion Room 키 비주얼

- 커리큘럼 구조
- 카드뉴스
- 강의자료
- 세션 사진
- 과제 설계
- 모집/운영 자료
- FAQ

### LikeLion Room 오브젝트

```text
포스트잇
강의보드
사자 아이콘
커리큘럼 카드
체크리스트
FAQ 카드
로켓
말풍선
```

---

## 7.5 Experience / FLOW Color System

### 기준 자료

이전 대화에서 제공된 FLOW 이미지 기준.

핵심:

```text
FLOW: 몰입의 순간, 경험의 탄생
졸업작품 전시회
포스터 비주얼 초안
3D 오브젝트와 곡선 라인
블루 기반 전시 비주얼
```

### FLOW Tokens

```css
--flow-bg: #F8FAFC;
--flow-wall: #EEF4FF;
--flow-primary: #172554;
--flow-blue: #1D4ED8;
--flow-soft-blue: #CFE5FF;
--flow-silver: #D1D5DB;
--flow-text: #111827;
```

### FLOW 성격

```text
전시 기획
비주얼 방향
학과 조교 경험
운영과 시각 커뮤니케이션
```

---

## 7.6 Lab / AboutPM Color System

### Lab Tokens

```css
--lab-bg: #0F1117;
--lab-surface: #181B25;
--lab-text: #F8FAFC;
--lab-muted: #A1A1AA;
--lab-violet: #7C5CFF;
--lab-cyan: #00E5FF;
--lab-lime: #E3FF5D;
--lab-border: #2A2F3A;
```

### Lab 성격

```text
가장 실험적인 공간
AI-assisted workflow
AboutPM
Claude Design / Claude Code
AI Visual Prompt Lab
노드와 그래프
작업 도구 감각
```

### Lab 사용 규칙

- 전체 사이트를 다크로 만들지 않는다.
- Lab 섹션에서만 어두운 실험적 공간을 허용한다.
- Raycast/Framer 느낌을 일부 참고한다.
- AboutPM의 3D 그래프 감성과 잘 연결한다.

---

## 8. Typography System

## 8.1 최종 폰트 구성

```text
Display / English Main:
ITC Avant Garde Gothic

Korean Heading / Body:
Pretendard

Label / System / Metadata:
Pretendard (대문자 스위스 라벨) — 2026-06-11 변경, 기존 JetBrains Mono 대체
JetBrains Mono = 코드/토큰 스니펫 등 진짜 코드성 텍스트에만 선택적
```

---

## 8.2 ITC Avant Garde Gothic 사용 판단

### 결론

```text
ITC Avant Garde Gothic은 사용한다.
단, 디스플레이 전용으로 역할을 제한한다.
표현은 typography_ref(AVANT GARDE·NewJeans) 로고타입 느낌 — 대문자·볼드·자간 타이트(약 -0.04em).
```

### 적합한 이유

- 첨부한 NewJeans/How Sweet 레퍼런스처럼 타이포 자체가 비주얼이 됨
- 기하학적이고 강한 획을 가져 Hero와 Room Title에 적합
- 레트로/포스터/패션/에디토리얼 감성을 줄 수 있음
- 프로젝트 방의 간판형 타이포로 잘 작동함

### 주의할 점

- 본문 가독성에는 적합하지 않음
- 한국어와 직접 섞으면 어색할 수 있음
- 너무 많이 쓰면 패션 포스터처럼 보일 수 있음
- 웹폰트 라이선스와 실제 배포 가능 여부 확인 필요

### 사용처

```text
TAEKYUNG WORKS
PULSE
PICKFIT
LIKELION
LAB
ROOM TITLE
PROJECT TITLE
큰 CTA 타이포
전환 장면의 한 단어 메시지
```

### 사용하지 않는 곳

```text
본문
긴 설명
프로젝트 역할 설명
한국어 문단
카드 설명
캡션
```

---

## 8.2.1 디자인된 레터링 — 워드마크 (2026-06-11)

> 워드마크·핵심 디스플레이는 "폰트로 친 글자"가 아니라 **디자인된 타이포그래피**로 다룬다(레퍼런스 typography_ref_02 = ITC Avant Garde 로고).
> 단, 그 로고의 **커스텀 합자(글자 맞물림)는 보유 폰트에 없음**(검증: 전 ttf가 `kern`만, `liga`/`dlig` 없음 → 합자 자동 불가).

따라서:
- **라이브 근사**: 글자 겹침 + 각 글자에 **배경색 외곽선(notch)** → 같은 색 글자가 뭉개지지 않고 "맞물린 디자인"처럼 보임. 겹침+notch 조절 방식(프로토타입 검증).
- **등폭 락업**: 두 줄을 같은 폭으로 잠그는 스택(AVANT GARDE 식). SVG `textLength`/`lengthAdjust=spacing` (프로토타입 검증).
- **로고급 천장**: 커스텀 벡터 레터링(획 공유·사선 인터록·광학 정렬). 워드마크당 1회 디자인 작업(Figma/Illustrator 또는 손-SVG).
- **적용 범위**: 히어로 워드마크 = `PORTFOLIO` / `NOH TAE KYUNG`. 프로젝트 제목(PULSE 등)은 시그니처 플립 때문에 **라이브 타이트 텍스트 유지**.

---

## 8.3 Pretendard 사용 규칙

### 사용처

```text
한국어 제목
본문
프로젝트 설명
역할
인사이트
배운 점
버튼
일반 UI
```

### 기본 규칙

```css
--font-kr: "Pretendard Variable", "Pretendard", system-ui, sans-serif;
--letter-spacing-kr: -0.02em;
--line-height-heading: 1.4;
--line-height-body: 1.55;
--line-height-long: 1.6;
```

### PULSE 내부 기준 반영

PULSE 디자인 시스템에서는 Pretendard Variable 고정, 전체 letter-spacing `-0.02em`, heading line-height `140%`, 본문 `150~160%`를 사용한다.  
포트폴리오 전체에서도 이 기준을 유지한다.

---

## 8.4 라벨·메타 규칙 (2026-06-11 변경: Pretendard 대문자 스위스 라벨)

> 기존 "라벨 = JetBrains Mono"에서 **변경**. 모노 특유의 코드에디터 인상이 에디토리얼 톤과 안 맞아 교체.
> 근거: 프로토타입 검증 / design-direction §0.1.

### 라벨·메타 = Pretendard

```text
SELECTED PROJECTS / ROOM 01 / PM · UX · AI · FRONTEND / 섹션 키커
역할 태그 / Year / Project Type / Link Label / Metadata
랜딩 Selected = role 태그 + '무엇을 했는지' 한 줄 요약 (라벨 템플릿 폐기 — §0.1-2)
```

규칙:
- 영문 라벨 = Pretendard 600 + 대문자 + letter-spacing .18–.2em (스위스 라벨).
- 한글 라벨 = 대문자 없이 Pretendard 500.
- 더 흐린 라벨(항목 라벨)은 `#94A3B8`, 일반 라벨은 `--text-muted #64748B`.

### JetBrains Mono = 선택적, 코드성에만

- Tech Stack 토큰 · prompt/코드 스니펫 등 '진짜 코드'에만.
- 일반 라벨·메타·역할에는 쓰지 않음 (모노 폐기).

---

## 8.5 Type Scale

```css
--text-hero: clamp(64px, 10vw, 156px);
--text-room-title: clamp(56px, 9vw, 132px);
--text-h1: clamp(44px, 6vw, 88px);
--text-h2: clamp(34px, 4.5vw, 64px);
--text-h3: 28px;
--text-body-lg: 20px;
--text-body: 16px;
--text-small: 14px;
--text-caption: 12px;
```

### Hero

```text
영문 대형 타이포:
ITC Avant Garde Gothic

한국어 철학 문장:
Pretendard Medium/Bold
```

### Room Title

```text
PULSE
PICKFIT
LIKELION
LAB

영문은 ITC Avant Garde Gothic
하단 한국어 설명은 Pretendard
```

### 본문

```text
Pretendard 중심
문단은 3줄 이상 길게 늘리지 않음
Problem / Insight / Role / Output 단위로 나눔
```

---

## 9. Layout System

## 9.1 전체 레이아웃

```css
--page-bg: #F8FAFC;
--container-max: 1200px;
--section-padding-y: clamp(96px, 12vw, 180px);
--section-padding-x: clamp(20px, 5vw, 80px);
--grid-columns: 12;
```

### 기본 원칙

- 전체는 화이트 갤러리
- 각 프로젝트 룸은 full-viewport 또는 near-full-viewport로 구성 가능
- Case Study 정보 패널은 읽기 좋은 폭 유지
- 대형 이미지/화면 캡처는 액자처럼 배치

---

## 9.2 Room Layout

### Room 최소 높이

```css
--room-min-height: 100svh;
--room-padding-x: clamp(24px, 6vw, 96px);
--room-padding-y: clamp(80px, 10vw, 140px);
```

### Room 내부 구조

```text
Room Entrance
Main Wall
Floating Evidence Frames
Info Dock
Motion Layer
Room Exit
```

### 권장 배치

```text
Desktop:
- 왼쪽 또는 중앙: Main Wall
- 오른쪽: Info Dock
- 주변: Floating Evidence Frames
- 배경: Room color / wall texture

Mobile:
- Room Title
- Main Frame
- Info Dock
- Evidence Cards
- Next Room CTA
```

---

## 10. Room Template System

## 10.1 최종 Room Template

```text
1. Room Entrance
2. Main Wall
3. Floating Evidence Frames
4. Info Dock
5. Motion Layer
6. Room Exit
```

---

## 10.2 Room Entrance

### 목적

- 사용자가 새로운 프로젝트 방에 들어왔다는 느낌을 준다.
- 큰 영문 타이포와 프로젝트 컬러로 분위기를 전환한다.

### 구성

```text
Room Index
Large English Title
Korean one-line description
Project role tag
Color transition
```

### 예시

```text
ROOM 01

PULSE
AI MARKETING ASSISTANT

리뷰와 고객 데이터를 홍보 실행으로 연결하는 AI 마케팅 비서
```

---

## 10.3 Main Wall

### 목적

프로젝트를 대표하는 가장 중요한 화면이나 비주얼을 큰 액자로 보여준다.

### 프로젝트별 Main Wall

```text
PULSE:
대시보드

PickFit:
추천 결과 또는 스마트폰 UI

LikeLion:
커리큘럼 구조 또는 대표 카드뉴스/운영 자료
```

### 디자인

- 큰 액자형 프레임
- 약한 그림자
- Room 컬러와 조화
- 필요 시 3D perspective 사용

---

## 10.4 Floating Evidence Frames

### 목적

프로젝트의 보조 근거를 전시물처럼 보여준다.

### 사용 예시

```text
PULSE:
리뷰 관리, 손님 분석, 홍보 영상, 인플루언서 매칭, 상권 분석

PickFit:
상황 선택, 스타일 입력, 디자인 시스템, AI 추천 구조

LikeLion:
카드뉴스, 강의자료, 세션 사진, 과제 설계, FAQ
```

### 모션

- hover 시 살짝 기울어짐
- scroll 시 z축/깊이감 이동
- parallax 적용 가능
- 과한 회전 금지

---

## 10.5 Info Dock

### 목적

감성적인 룸 안에서도 핵심 정보를 읽기 쉽게 고정한다.

### 고정 구조

```text
Problem
Insight
Role
Core Flow
Output
Learning
```

### 규칙

- Info Dock은 모든 프로젝트 룸에서 같은 구조를 사용한다.
- 위치는 프로젝트마다 바뀔 수 있지만 정보 순서는 유지한다.
- 설명은 짧고 명확하게 작성한다.

---

## 10.6 Motion Layer

### 목적

룸이 정적인 섹션처럼 보이지 않고 공간처럼 느껴지게 한다.

### 공통 모션

```text
Frame float
Parallax
Depth shift
Scroll reveal
Type slide
Light rotate
Shadow shift
Image sequence
```

### 금지

```text
본문이 계속 흔들리는 효과
읽기 방해하는 blur
무거운 GIF
자동 재생 사운드
과한 infinite animation
모든 요소가 동시에 움직이는 연출
```

---

## 10.7 Room Exit

### 목적

다음 프로젝트 룸으로 넘어가는 전환을 만든다.

### 추천 방식

- 룸 컬러가 다음 룸 컬러로 전환
- 큰 타이포가 밀리거나 회전하며 사라짐
- 카메라가 복도처럼 이동
- 3D 전환은 룸과 룸 사이에 제한적으로 사용

### 중요 판단

```text
룸 전환 = 3D 허용
룸 내부 = 2D/2.5D 정교한 레이어
```

모든 구간을 3D로 만들면 피로하고 구현 난도가 높다.  
3D는 방 전환의 특수 장면으로 쓰고, 내부는 2.5D 레이어와 프레임 모션 중심으로 유지한다.

---

## 11. Project Room Specifications

# 11.1 Room 01 — PULSE

## 핵심 문장

```text
Data to Action
데이터에서 행동까지.
```

## 프로젝트 한 줄 소개

```text
외식업 사장님이 리뷰와 고객 데이터를 바탕으로 홍보 실행까지 할 수 있게 돕는 AI 마케팅 비서.
```

## 룸 성격

```text
제품적
전문적
신뢰감
데이터 기반
실행 중심
```

## 컬러

```css
--pulse-room-bg: #F5F7FA;
--pulse-room-wall: #EAF1FB;
--pulse-primary: #002B7A;
--pulse-action: #FF5A36;
--pulse-text: #191F28;
```

## Main Wall

```text
대시보드
```

## Floating Frames

```text
리뷰 관리
손님 분석
홍보 영상
인플루언서 매칭
상권 분석
UX 소논문 / BERTopic 페르소나 도출
Adwise Origin
```

## Info Dock 내용

```text
Problem:
외식업 사장님은 리뷰, 손님, 홍보, 가게 현황을 따로 관리해야 한다.

Insight:
문제는 정보 부족이 아니라, 정보를 보고 다음 행동으로 이어지는 흐름의 부재다.

Role:
팀 리드로 기획, 화면 흐름, 구현, 발표자료, 일정 관리를 담당.

Core Flow:
리뷰 분석 → 페르소나 도출 → 홍보 실행

Output:
대시보드, 리뷰 관리, 손님 분석, 홍보 영상, 인플루언서 매칭, 상권 분석

Learning:
좋은 대시보드는 데이터를 많이 보여주는 화면이 아니라, 사용자가 다음 행동을 고를 수 있게 만드는 화면이다.
```

## PULSE 디자인 제약 반영

- PULSE UI 자체에서는 Pretendard Variable 사용
- `#002B7A`는 신뢰와 구조
- `#FF5A36`은 행동
- No Scroll Policy를 프로젝트 설명에 언급 가능
- 박스 남발 금지
- 그림자: `0 4px 20px rgba(0,43,122,0.15)`
- motion은 transform/opacity 중심
- reduced motion 대응 필수

---

# 11.2 Room 02 — PickFit

## 핵심 문장

```text
Decide Faster
비교보다 결정에 집중하게.
```

## 프로젝트 한 줄 소개

```text
상황에 맞는 코디를 추천해 주는 패션 결정 앱.
```

포트폴리오용 강화 문장:

```text
사용자가 비교보다 결정에 집중하도록 돕는 AI 코디 추천 서비스.
```

## 룸 성격

```text
브랜드성
패션
결정 피로
선택 축소
AI 추천
```

## 컬러

```css
--pickfit-room-bg: #F5F6FF;
--pickfit-room-wall: #E9ECFF;
--pickfit-primary: #4D5EFF;
--pickfit-accent: #E3FF5D;
--pickfit-text: #12141A;
```

## Main Wall

```text
추천 결과 화면 또는 스마트폰 UI
```

## Floating Frames

```text
상황 선택
스타일 입력
코디 추천
디자인 시스템
AI 추천 구조
기술 스택
```

## Info Dock 내용

```text
Problem:
패션 쇼핑에는 상품이 너무 많고, 리뷰 탐색과 코디 조합, 사이즈/핏 실패 부담이 크다.

Insight:
쇼핑 UX는 사용자가 직접 비교하는 클릭 중심에서, 조건을 말하면 AI가 정리해주는 위임 중심으로 이동하고 있다.

Role:
개인 프로젝트로 기획, 디자인 시스템, AI 추천 흐름을 설계했다.

Core Flow:
상황 선택 → 스타일 입력 → 추천 생성 → 코디 추천 → 구매 준비

Output:
온보딩, 상황 선택, 스타일 입력, 추천 결과, 디자인 시스템, AI 추천 구조

Learning:
AI 추천에서 중요한 것은 정답처럼 보이는 추천보다, 사용자가 납득할 수 있는 이유와 비교 구조다.
```

## PickFit 브랜드 시스템 반영

- `ㅍㅍ` 구조 유지
- 라임 포인트 컬러 유지
- 시옷의 옷걸이 모티브 유지
- 스마트폰 UI와 추천 결과를 중심으로 보여줌
- 기존 디자인 시스템을 포트폴리오 안에서 독립된 룸 아이덴티티로 보존

---

# 11.3 Room 03 — LikeLion

## 핵심 문장

```text
Teaching Product Thinking
아이디어를 흐름으로 가르치다.
```

## 프로젝트 한 줄 소개

```text
초보자가 PM·UX 개념을 실제 프로젝트 흐름으로 이해하도록 설계한 기획·UX/UI 커리큘럼.
```

## 룸 성격

```text
교육
운영 (운영 PM)
커리큘럼 아키텍처
정리된 시스템
초보자 친화
가르치며 증명하는 깊이
```

## 맥락 (조직 / 위치)

```text
국내 최대 IT 창업동아리(70개+ 대학, 누적 14,000명+)의 성결대 지부.
3개 트랙(기획·디자인 / 프론트엔드 / 백엔드)이 협업.
노태경: 13기 프론트엔드 아기사자 → 14기 기획 파트장(2025.12~2026.12).
'기획' 커리큘럼은 단독 설계, '디자인'은 별도 운영진.
연간 사이클: 모집(3월) → 아이디어톤(5월) → 중앙 해커톤(8월) → 권역별/기업 연계 해커톤(9~12월).
```

## 컬러

```css
--likelion-room-bg: #F4F8FF;
--likelion-room-wall: #E6F2FF;
--likelion-primary: #0060C6;
--likelion-sub: #5BA3FF;
--likelion-accent: #FF6000;
--likelion-text: #1E293B;
```

보조 컬러:

```css
--likelion-cardblue: #3755FF;
--likelion-front: #80DAFF;
--likelion-back: #77DEB6;
--likelion-design: #B89AF4;
```

## Main Wall

```text
20주 커리큘럼 4-Phase 보드
(① 기획 뼈대 → ② 화면·로직·상태 설계 → ③ 데이터·비즈니스 → ④ 회고·재정의)
스크롤 시 막연한 아이디어 포스트잇이 주차별 카드로 정렬되는 연출.
```

## Floating Frames

```text
강의자료 슬라이드: MVP(스케이트보드→자동차), IA vs User Flow(건물 안내도 vs 내비게이션),
                  4~6주차 연결(IA/StoryBoard/State), 에러·상태 설계(Inline→Full-page Error)
세션 직접 강의 사진 4장 (PainPoint 실습 / What 강의 / IA 강의 / 멘토링 — 여러 주차 강의 증거 세트)
카드뉴스 (소개·모집·운영진 이야기·FAQ)
과제 설계
Figma 운영보드
연간 사이클 칩 (모집→아이디어톤→해커톤)
```

증거 우선순위:

```text
1순위(차별화): 직접 만든 강의자료 슬라이드 + 직접 강의하는 사진
2순위: 20주 커리큘럼 4-Phase 구조
3순위: 카드뉴스/운영 산출물
→ '예외·상태 설계', 'AARRR/BM'까지 가르쳤다는 강의자료가 PM 깊이의 핵심 증거.
```

## Info Dock 내용

```text
Problem:
초보자는 PM/UX/UI 개념을 들어도 실제 프로젝트 흐름으로 연결하지 못한다.
강의는 많지만 '다음에 무엇을 할지'를 알려주는 구조가 드물다.

Insight:
교육은 개념을 많이 주는 게 아니라 '다음 행동을 알 수 있게 만드는 구조'여야 한다.
그래서 커리큘럼 자체를 '결정 가능한 흐름'으로 설계했다.

Role:
기획 파트장(2025.12~2026.12). 20주 기획 커리큘럼 단독 설계, 세션 직접 강의,
강의자료·과제 설계, 카드뉴스 기획, 운영진 스터디 운영. (디자인은 별도 운영진)

Core Flow:
① 기획 뼈대(역기획·페르소나·MVP·IA/User Flow)
→ ② 화면·로직·상태 설계(예외 처리·Empty/Loading/Error/Ideal)
→ ③ 데이터·비즈니스(퍼널·AARRR·BM·AI 활용)
→ ④ 해커톤 회고·문제 재정의

Output:
20주 커리큘럼 · 강의자료 슬라이드 · 과제 설계 · 카드뉴스 · Figma 운영보드 · 세션 강의 사진

Learning:
초보자 교육에서는 멋진 개념보다 오개념 없이 따라갈 수 있는 '순서와 과제'가 더 중요하다.
그리고 가장 깊은 학습은 '가르치는 것'이라는 걸 직접 확인했다.
```

## LikeLion 디자인 반영

- 첨부 이미지의 블루/화이트/오렌지 체계 유지
- Pretendard Variable 사용
- 글자 spacing `-2%`, line-height `140%` 기준 참고
- 강의자료 슬라이드는 실제 디자인(블루 톤·3D 오브젝트)이 깔끔하므로 액자에 그대로 전시
- 카드뉴스와 교육 자료는 벽면 갤러리처럼 배치
- 4-Phase 커리큘럼 보드는 정보 구조가 또렷하게 읽히도록 정렬형 레이아웃
- 사자/로켓/말풍선 오브젝트는 보조로만 사용
- 과하게 귀여워지지 않도록 정보 패널은 차분하게 유지
- '교육'으로만 보이지 않게, 운영 PM(커리큘럼을 제품처럼 설계·운영)의 톤을 유지

---

## 12. Experience / FLOW Section

## 핵심 문장

```text
운영과 전시를 설계한 경험.
```

## 포함 내용

```text
성결대학교 미디어소프트웨어학과 조교 1년 6개월
졸업작품 전시회 FLOW 기획
포스터 비주얼 초안
학과 사업 관리
일정 관리
코엑스 전시 운영 지원
학생회 기획국장 경험
```

## 표현 방식

이 섹션은 Room이라기보다 “Archive Wall”처럼 구성한다.

```text
Poster Frame
Operation Card
Visual Direction Board
Timeline이 아닌 Experience Wall
```

## FLOW 카피

```text
졸업작품전시회 FLOW의 콘셉트를 ‘몰입의 순간, 경험의 탄생’으로 해석하고,
3D 오브젝트와 곡선 라인을 활용한 포스터 비주얼 초안을 설계했습니다.
단일 포스터에 그치지 않고, 배너와 홍보물로 확장 가능한 키비주얼 방향을 제안했습니다.
```

---

## 13. Lab / AboutPM / AI Workflow Section

## 핵심 문장

```text
생각과 도구를 실험하는 작업실.
```

## 포함 내용

```text
AboutPM
AI Visual Prompt Lab
Claude Design / Claude Code Workflow
Prompt Engineering
Interactive Knowledge Graph
```

## 디자인 방향

- Lab은 어두운 배경 허용
- 노드, 그래프, 행성, 문서 조각, 프롬프트 카드 사용
- Raycast/Framer 느낌 일부 반영
- 가장 실험적인 섹션
- 단, 대표 프로젝트보다 더 강하게 튀면 안 됨

---

## 14. Thinking Archive Section

## 핵심 문장

```text
생각을 기록으로 남기는 사람.
```

## 포함 내용

```text
Velog 대표 글 6개
PM/UX 2개
AI/Workflow 2개
생각/조직/일하는 방식 2개
```

## 디자인 방향

- WIRED식 기술 매거진 카드
- 흑백 기반
- 얇은 구분선
- 글 제목 중심
- 과한 카드 장식 금지

---

## 15. Component System

## 15.1 Core Components

```text
Navigation
Hero Typography
Gallery Corridor
Room Section
Room Entrance
Main Wall
Gallery Frame
Floating Evidence Frame
Info Dock
Proof Card
Role Badge
Project Tag
CTA Button
Image Sequence
Collage Object
Archive Wall
Lab Node
Thinking Card
Contact Block
Footer
```

---

## 15.2 Gallery Frame

### 목적

프로젝트 이미지, 화면 캡처, 프롬프트 이미지, 카드뉴스를 액자처럼 보여준다.

### 스타일

```css
--frame-bg: #FFFFFF;
--frame-radius: 24px;
--frame-border: 1px solid rgba(15, 23, 42, 0.08);
--frame-shadow: 0 24px 60px rgba(15, 23, 42, 0.10);
```

### 상태

```text
Default:
정돈된 액자

Hover:
살짝 기울어짐
그림자 이동
이미지 내부 미세 확대

Scroll:
z-depth 또는 parallax
```

---

## 15.3 Info Dock

### 목적

각 Room에서 핵심 정보를 안정적으로 읽게 하는 패널.

### 구성

```text
Problem
Insight
Role
Core Flow
Output
Learning
```

### 스타일

```text
화이트/반투명 패널
Room 컬러의 얇은 border
Pretendard 본문
Pretendard 대문자 스위스 라벨 (섹션 라벨 — 2026-06-11, 모노 대체)
```

---

## 15.4 Room CTA

### 예시

```text
View Case Study
Open Project
View GitHub
Read Notes
Next Room
```

### 스타일

- Primary CTA는 각 Room의 primary color 사용
- PULSE의 action CTA는 `#FF5A36`
- PickFit의 CTA는 `#4D5EFF` 또는 `#12141A`
- LikeLion의 CTA는 `#0060C6` 또는 `#FF6000`
- 전체 공통 CTA는 `#0F172A`

---

## 16. Motion & Interaction System

## 16.1 Motion Principle

```text
Motion Goal:
정적인 갤러리가 아니라 살아있는 증거 전시관처럼 느껴져야 한다.
모든 모션은 구조를 명확히 하거나, 증거 이미지를 드러내거나, 문제에서 제품 결정으로 이어지는 흐름을 표현해야 한다.

Hero:
강한 타이포 등장 + 오브젝트 float/parallax

Room Transition:
3D-like movement 허용
단, 룸과 룸 사이의 전환 메타포로만 사용

Room Internal:
2D/2.5D 중심
scroll reveal, frame reveal, depth shift, object float, hover expansion을 사용
실제 UI/자료/사진 프레임이 움직이며 드러나야 함

Case Study Text:
차분하게
본문은 흔들지 않고, 주변 증거 프레임과 오브젝트가 시선을 유도

Lab:
실험적으로

Mobile:
축약
정적 카드 나열이 아니라 짧은 reveal과 object float로 생동감 유지
```

---

## 16.2 Motion Tokens

```css
--motion-fast: 160ms;
--motion-base: 280ms;
--motion-slow: 600ms;
--motion-room: 900ms;
--motion-room-long: 1200ms;

--ease-default: cubic-bezier(0.22, 1, 0.36, 1);
--ease-paper: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-room: cubic-bezier(0.76, 0, 0.24, 1);
```

---

## 16.3 추천 모션

```text
Hero:
대형 타이포 등장
타이포 분해/슬라이드
오브젝트 parallax

Corridor:
3개 룸 프리뷰가 깊이감 있게 등장

Room Transition:
배경 컬러 전환
카메라 z축 이동
타이포가 벽처럼 열림
3D 회전 가능

Room Internal:
Floating Frame
Depth Shift
Scroll Reveal
Image Sequence
Hover Tilt
Shadow Shift
Evidence Frame Reveal
Info Dock Expansion
Subtle Object Float

Lab:
Node hover
Graph line animation
Prompt card reveal
```

---

## 16.4 금지 모션

```text
transition-all 사용 금지
본문 텍스트가 계속 흔들리는 효과 금지
무거운 GIF 중심 구현 금지
무한 루프 glow/shimmer/blur 금지
자동 재생 사운드 금지
모든 요소가 동시에 움직이는 연출 금지
reduced motion 대응 없는 모션 금지
정적인 카드/텍스트 나열만으로 Room을 구성하는 것 금지
증거 이미지보다 장식 오브젝트가 더 눈에 띄는 연출 금지
모션이 PM evidence를 가리는 연출 금지
```

---

## 16.5 GIF 사용 원칙

사용자는 GIF 기반의 영상 같은 효과를 원했지만, 실제 구현에서는 GIF를 메인으로 쓰지 않는다.

### 이유

```text
용량 큼
화질 저하
스크롤 프레임 제어 어려움
모바일 성능 저하
```

### 대체 우선순위

```text
1. CSS transform / Framer Motion
2. Scroll-triggered image sequence
3. WebM / MP4 loop video
4. Lottie
5. GIF는 보조 프리뷰용
```

---

## 17. Responsive System

## 17.1 Desktop

```text
전체 경험:
전시 공간 이동

Hero:
강한 타이포 + 오브젝트

Room:
3D 전환 가능
Main Wall + Floating Frames + Info Dock

Lab:
실험 인터랙션 허용
```

## 17.2 Tablet

```text
Room 내부의 floating frame 수를 줄임
Info Dock을 아래 또는 옆으로 배치
3D 전환은 유지하되 가볍게
```

## 17.3 Mobile

```text
모바일은 스토리 축약판
Room 전환은 컬러 전환 + 카드 이동 중심
무거운 3D/이미지 시퀀스 축소
Main Frame → Info Dock → Evidence Cards 순서
```

### 모바일 원칙

- 데스크탑을 그대로 축소하지 않는다.
- 정보 전달이 우선이다.
- 스크롤은 자연스럽게 유지한다.
- CTA는 항상 접근 가능해야 한다.
- 무거운 오브젝트는 정적 이미지로 대체 가능하다.

---

## 18. Accessibility & Performance Rules

### 18.1 Accessibility

```text
reduced motion 대응 필수
텍스트 대비 확보
이미지 alt text 작성
키보드 접근 가능한 CTA
애니메이션에만 정보 의존 금지
모바일 터치 타깃 44px 이상
```

### 18.2 Performance

```text
이미지 WebP/AVIF 최적화
무거운 GIF 금지
image sequence lazy loading
Room별 asset split
초기 Hero asset 우선 최적화
Lab 3D는 lazy load
스크롤 성능 60fps 목표
```

### 18.3 Security

```text
GitHub 공개 전 .env, API key, DB password 확인
미완성 코드 링크 공개 주의
민감 정보 포함된 화면 캡처 금지
```

---

## 19. Code Token Draft

```ts
export const designTokens = {
  base: {
    bg: "#F8FAFC",
    panel: "#FFFFFF",
    soft: "#F1F5F9",
    text: "#0F172A",
    textSub: "#475569",
    textMuted: "#64748B",
    lineSoft: "#E2E8F0",
    lineStrong: "#CBD5E1",
  },
  rooms: {
    pulse: {
      bg: "#F5F7FA",
      wall: "#EAF1FB",
      primary: "#002B7A",
      action: "#FF5A36",
      text: "#191F28",
      soft: "#002B7A1A",
    },
    pickfit: {
      bg: "#F5F6FF",
      wall: "#E9ECFF",
      primary: "#4D5EFF",
      accent: "#E3FF5D",
      text: "#12141A",
      soft: "#4D5EFF14",
    },
    likelion: {
      bg: "#F4F8FF",
      wall: "#E6F2FF",
      primary: "#0060C6",
      sub: "#5BA3FF",
      accent: "#FF6000",
      text: "#1E293B",
      front: "#80DAFF",
      back: "#77DEB6",
      design: "#B89AF4",
      cardblue: "#3755FF",
    },
    flow: {
      bg: "#F8FAFC",
      wall: "#EEF4FF",
      primary: "#172554",
      blue: "#1D4ED8",
      softBlue: "#CFE5FF",
      silver: "#D1D5DB",
      text: "#111827",
    },
    lab: {
      bg: "#0F1117",
      surface: "#181B25",
      text: "#F8FAFC",
      muted: "#A1A1AA",
      violet: "#7C5CFF",
      cyan: "#00E5FF",
      lime: "#E3FF5D",
      border: "#2A2F3A",
    },
  },
  typography: {
    display: "ITC Avant Garde Gothic",
    korean: "Pretendard Variable",
    mono: "JetBrains Mono",
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "24px",
    xl: "32px",
    room: "40px",
  },
  shadow: {
    frame: "0 24px 60px rgba(15, 23, 42, 0.10)",
    pulse: "0 4px 20px rgba(0, 43, 122, 0.15)",
    soft: "0 12px 40px rgba(15, 23, 42, 0.08)",
  },
  motion: {
    fast: "160ms",
    base: "280ms",
    slow: "600ms",
    room: "900ms",
    roomLong: "1200ms",
    easeDefault: "cubic-bezier(0.22, 1, 0.36, 1)",
    easePaper: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    easeRoom: "cubic-bezier(0.76, 0, 0.24, 1)",
  },
};
```

---

## 20. Tailwind Theme Draft

```js
export default {
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#F8FAFC",
          panel: "#FFFFFF",
          soft: "#F1F5F9",
          text: "#0F172A",
          sub: "#475569",
          muted: "#64748B",
          line: "#E2E8F0",
        },
        pulse: {
          bg: "#F5F7FA",
          wall: "#EAF1FB",
          primary: "#002B7A",
          action: "#FF5A36",
          text: "#191F28",
          soft: "#002B7A1A",
        },
        pickfit: {
          bg: "#F5F6FF",
          wall: "#E9ECFF",
          primary: "#4D5EFF",
          accent: "#E3FF5D",
          text: "#12141A",
          soft: "#4D5EFF14",
        },
        likelion: {
          bg: "#F4F8FF",
          wall: "#E6F2FF",
          primary: "#0060C6",
          sub: "#5BA3FF",
          accent: "#FF6000",
          front: "#80DAFF",
          back: "#77DEB6",
          design: "#B89AF4",
          text: "#1E293B",
        },
        lab: {
          bg: "#0F1117",
          surface: "#181B25",
          text: "#F8FAFC",
          muted: "#A1A1AA",
          violet: "#7C5CFF",
          cyan: "#00E5FF",
          lime: "#E3FF5D",
        },
      },
      fontFamily: {
        display: ["ITC Avant Garde Gothic", "Arial", "sans-serif"],
        sans: ["Pretendard Variable", "Pretendard", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        frame: "24px",
        room: "40px",
      },
      boxShadow: {
        frame: "0 24px 60px rgba(15, 23, 42, 0.10)",
        pulse: "0 4px 20px rgba(0, 43, 122, 0.15)",
      },
    },
  },
};
```

---

## 21. Claude Design Prompt

```text
Create an interactive portfolio design system for TAEKYUNG WORKS.

This is a Korean PM / UX / AI / Frontend portfolio.

Core concept:
A white gallery-like interactive portfolio where strong Avant Garde typography opens the experience, and each main project becomes a different 3D-like room.

Base:
Use #F8FAFC as the global base background.
Use clean white panels and readable case study layouts.

Typography:
Use ITC Avant Garde Gothic for large English display typography only (uppercase, bold, tight tracking ≈ -0.04em — logotype feel).
Use Pretendard for Korean headings, body, UI text, AND labels/metadata/role tags as uppercase Swiss-style labels (letter-spacing .18–.2em). Do NOT use a monospace font for labels (changed 2026-06-11).
Use JetBrains Mono only for genuine code/token snippets, if at all.

Overall structure:
1. Hero
2. Manifesto
3. Transition Corridor
4. Room 01 PULSE
5. Room 02 PickFit
6. Room 03 LikeLion
7. Experience / FLOW
8. Lab / AboutPM / AI Workflow
9. Thinking Archive
10. Contact

Room system:
Each project room must have:
- Room Entrance
- Main Wall
- Floating Evidence Frames
- Info Dock
- Motion Layer
- Room Exit

PULSE Room:
Use #002B7A and #FF5A36.
Tone: Modern Professional & Universal Clarity.
Show dashboard, review management, customer analysis, promo video, influencer matching, area analysis.
The room should feel professional and product-focused.

PickFit Room:
Use #4D5EFF, #E3FF5D, #12141A.
Keep the PickFit brand system.
Use hanger, outfit card, tag, selection button, smartphone objects.
The room should feel like a fashion decision app.

LikeLion Room:
Use #0060C6, #5BA3FF, #E6F2FF, #FF6000.
Use curriculum cards, lecture board, post-its, lion icon, FAQ cards.
The room should feel educational, structured, and operational.

Motion:
Hero and Lab can be strong.
The portfolio must not feel static.
Room transitions can use 3D-like movement only as a transition metaphor.
Room interiors must use 2.5D layered motion: scroll-triggered frame reveals, subtle parallax, floating paper objects, hover expansion, depth shifts, and evidence-image focus.
Case Study information must remain readable.
Every motion must clarify structure, reveal evidence, or express the transition from problem to product decision.
Do not use heavy GIF as the main animation method.
Use image sequence, WebM/MP4, CSS transforms, and Framer Motion instead.

Do not:
- create an in-site AI chatbot
- create a Timeline section
- overuse 3D
- create static flat sections with only cards and text
- use decorative motion that hides PM evidence
- make the site look childish
- sacrifice readability for motion
- use GIF as the main motion technique

Deliver:
A reusable design system and page direction that can be handed off to Claude Code for React implementation.
```

---

## 22. Claude Code Handoff Prompt

```text
You are implementing TAEKYUNG WORKS based on the provided DESIGN.md.

Tech:
- React + Vite
- Tailwind CSS
- Framer Motion
- Optional lightweight 3D only for room transitions
- 2.5D parallax, frame reveal, object float, hover expansion, and scroll-triggered evidence reveals inside rooms
- No heavy GIF-based implementation

Core implementation rules:
1. Global background is #F8FAFC.
2. Use ITC Avant Garde Gothic only for large English display typography.
3. Use Pretendard for Korean body and UI.
4. Use Pretendard uppercase Swiss-style labels for labels/metadata/role tags (NOT monospace — changed 2026-06-11). JetBrains Mono only for genuine code/token snippets.
5. Main projects are implemented as reusable ProjectRoom components.
6. Each ProjectRoom has RoomEntrance, MainWall, FloatingEvidenceFrames, InfoDock, MotionLayer, RoomExit.
7. Room transition may use 3D-like movement.
8. Room internal content must use 2.5D layered motion so it does not feel static.
9. Use scroll-triggered frame reveals for real evidence images.
10. Use subtle object float/parallax for generated object packs.
11. Use hover/focus expansion for FloatingEvidenceFrame and InfoDock.
12. Case Study text must remain readable.
13. Mobile must use a simplified story version, but still include short reveal/object motion.
14. No in-site AI chatbot.
15. No Timeline section.
16. Reduced motion support is required.
17. Do not use transition-all. Animate only transform and opacity where possible.
18. Do not expose API keys or private information in public links or assets.

Components:
- Hero
- Manifesto
- GalleryCorridor
- ProjectRoom
- RoomEntrance
- MainWall
- FloatingEvidenceFrame
- InfoDock
- MotionLayer
- RoomExit
- GalleryFrame
- ProofCard
- ThinkingCard
- LabSection
- Contact

Data:
Create structured data files:
- rooms.ts
- projects.ts
- designTokens.ts
- writings.ts
- links.ts
- assets.ts

Performance:
- Use lazy loading for room assets.
- Use optimized WebP/AVIF images.
- Use video/image sequence only when necessary.
- Avoid heavy GIFs.
- Respect prefers-reduced-motion.
```

---

## 23. 최종 검토 체크리스트

### 방향성 검토

- [ ] 전체 베이스가 `#F8FAFC` 계열로 정의되어 있는가?
- [ ] 핵심 프로젝트 3개가 각각 Room으로 정의되어 있는가?
- [ ] Hero가 타이포그래피 중심으로 정의되어 있는가?
- [ ] ITC Avant Garde Gothic의 사용처가 디스플레이 전용으로 제한되어 있는가?
- [ ] Pretendard가 본문/한국어/UI 폰트로 정의되어 있는가?
- [ ] 라벨/메타/역할이 Pretendard 대문자 스위스 라벨로 정의되어 있는가? (모노 아님 — 2026-06-11)

### 프로젝트별 반영 검토

- [ ] PickFit 컬러 `#4D5EFF`, `#E3FF5D`, `#12141A`가 반영되었는가?
- [ ] PickFit의 `ㅍㅍ`, 라임 포인트, 옷걸이 모티브가 반영되었는가?
- [ ] LikeLion의 `#0060C6`, `#5BA3FF`, `#E6F2FF`, `#FF6000`가 반영되었는가?
- [ ] LikeLion 카드뉴스/커리큘럼/FAQ/세션 사진 방향이 반영되었는가?
- [ ] PULSE의 `#002B7A`, `#FF5A36`, `#F5F7FA`, `#191F28`가 반영되었는가?
- [ ] PULSE의 Modern Professional & Universal Clarity 철학이 반영되었는가?
- [ ] PULSE의 Smart Trust, Vitality Action, Universal Clarity 원칙이 반영되었는가?

### 인터랙션 검토

- [ ] Room 전환에서 3D가 허용된다고 명시했는가?
- [ ] Room 내부는 2D/2.5D 중심이라고 명시했는가?
- [ ] GIF 중심 구현을 금지했는가?
- [ ] image sequence, WebM/MP4, CSS transform, Framer Motion 대안을 제시했는가?
- [ ] reduced motion 대응이 명시되어 있는가?

### 정보 구조 검토

- [ ] Hero → Manifesto → Corridor → PULSE → PickFit → LikeLion → Experience → Lab → Thinking Archive → Contact 흐름이 들어갔는가?
- [ ] Timeline 섹션 제외가 유지되었는가?
- [ ] AI 챗봇 제외가 유지되었는가?
- [ ] Case Study 가독성 원칙이 들어갔는가?
- [ ] 각 Room에 Entrance / Main Wall / Floating Frames / Info Dock / Motion Layer / Exit 구조가 들어갔는가?

---

## 24. 최종 요약

```text
TAEKYUNG WORKS는 화이트 갤러리형 인터랙티브 포트폴리오다.

전체 배경은 #F8FAFC로 깨끗하게 유지하고,
Hero는 ITC Avant Garde Gothic 기반의 강한 타이포그래피로 시작한다.

핵심 프로젝트 3개는 각각 다른 Room으로 구성한다.

PULSE는 딥 블루와 오렌지 기반의 전문적인 제품 룸.
PickFit은 블루와 라임 기반의 패션 결정 앱 룸.
LikeLion은 블루/화이트/오렌지 기반의 교육·운영 룸.

룸 전환은 3D처럼 역동적으로,
룸 내부는 액자와 오브젝트가 움직이는 2.5D 구조로 설계한다.

비주얼은 강하지만,
PM/UX/AI/Frontend 역량을 증명하는 Case Study의 가독성은 절대 희생하지 않는다.
```

---

## 25. 다음 작업

1. 이 DESIGN.md 검토
2. ITC Avant Garde Gothic 웹 사용 라이선스 확인
3. Hero 타이포 모션 방식 확정
4. PULSE / PickFit / LikeLion 룸 와이어프레임 제작
5. Room Template 컴포넌트 구조 설계
6. Claude Design에 1차 시안 요청
7. Claude Code에 React 구현 Phase 1 요청
8. 모바일 축약판 설계
9. 이미지/오브젝트 asset 제작
10. 성능 최적화와 보안 점검
