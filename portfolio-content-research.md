# PM/UIUX/FE-dev + AI 포트폴리오 구성 리서치

> 조사일: 2026-06-13 KST  
> 목적: PM, UI/UX, Frontend Development, AI 활용 역량을 한 포트폴리오 안에서 설득력 있게 보여주기 위한 구성 요소 정리  
> 방식: 실제 포트폴리오/개인 사이트 예시 20개를 확인한 뒤, 반복적으로 등장하는 요소만 추려서 적용안으로 정리  
> 주의: 이 문서의 "확인한 사실"은 각 출처 페이지에 표시된 내용만 기반으로 적었다. 개인 경력, 회사, 수치, 직함은 페이지가 바뀌면 달라질 수 있으므로 최종 포트폴리오에 인용할 때는 다시 확인한다.

> ## ⚠️ 2026-06-13 하네스 검증 결과 (이 문서를 우리 포트폴리오에 적용하기 전 필독)
>
> 이 문서를 **PM·UX리서처 2개 채용 렌즈 + 사실 웹검증 + 적대검증(subagent 하네스)**으로 재평가했다. 핵심:
>
> **① 사실:** 20개 예시 + 8개 출처 대부분 정확. 단 **스테일 2건**(8행 Brittany Chiang 직함, 15행 Sarah Drasner 직함 — 본문 반영함), OpenAI 문서 2건 URL이 `developers.openai.com`으로 이동(§12 갱신함), Andrew Couldwell 도메인은 roomfive.net으로 리다이렉트(§12 갱신함). Simon Pan→현 Google, Maggie Appleton→GitHub Next, Jhey→Shopify, Una→Google Chrome, Linus Lee→Thrive Capital 등 소속 변동은 인용 시 재확인 권장.
>
> **② 유용성(가장 중요):** 이 문서가 전제한 "PM/UIUX/FE-dev 넓은 포지셔닝 + AI Workflow 별도 페이지 + Lab 섹션 + 별도 About + 풀 내비"는 최신·최고권위 `taekyung-works-design-direction.md`의 확정 결정(**PM 중심·Lab 해체·AI 흡수·이중동선**)과 충돌하며, 충돌을 뒤집을 채용 근거가 없어 **대부분 '채택 보류'로 판정**됐다.
>   - ❌ **기각:** §4.1 Hero에 FE 승격·영문 last-10% 카피 · §4.2/§6.5 Lab 부활 · §5/§6.4 AI Workflow 별도 페이지 · §6.1 내비 7항목 · §6.7 별도 About 섹션 · §11 Phase3·4(AI페이지·Lab) · §6.2 LinkedIn 추가.
>   - ⚠️ **조건부 채택:** §4.6 검증 가능한 링크(*유일하게 적대검증 통과* — 단 실재·정돈된 산출물만) · §4.4/§7 케이스 템플릿 · §4.7/§5.4 AI 운영 서술(증거 비례·날조 금지) · §5.4 'Not used for' 필드 · §4.5/§6.6 Writing 신규 주제(우선순위 낮음 — 벨로그 아카이브가 9편으로 확장되며 AI 전략·프롬프트 제작기 글을 이미 일부 포함).
>   - 🔧 **내부 QA 도구로만(화면 노출 금지):** §9 증거 체크리스트 · §9.5 금지 목록 · §7.9 정직성 규칙.
>
> 단위별 상세 판정과 "뺄 것/더할 것"은 동반 리포트 참조. 아래 각 섹션 상단의 `[유용성 평가]` 노트도 함께 볼 것.

---

## 1. 결론 요약

좋은 포트폴리오는 "내가 무엇을 할 수 있는가"를 나열하는 문서가 아니라, "복잡한 문제를 어떤 판단으로 제품 경험과 구현물로 바꾸는 사람인가"를 증명하는 구조였다. 특히 PM, UI/UX, FE-dev를 함께 보여줘야 하는 경우에는 단순히 역할을 많이 적는 것보다, 프로젝트마다 `문제 정의 -> 의사결정 -> UX 구조 -> 구현 -> 검증 -> 회고`가 한 흐름으로 이어져야 설득력이 생긴다.

예시 20개에서 반복적으로 나온 공통 요소는 다음이다.

1. 첫 화면에서 역할과 관점이 즉시 드러난다.
2. 프로젝트는 많게 늘어놓지 않고, 대표 작업을 선별한다.
3. 프로젝트 카드에는 결과, 역할, 맥락이 한 줄로 요약된다.
4. 케이스스터디는 완성 화면보다 판단 과정과 근거를 보여준다.
5. 수치, 라이브 데모, 소스 코드, 글, 발표, 실험실 같은 증거가 붙는다.
6. "생각하는 방식"을 보여주는 Writing, Notes, Lab, Garden 섹션이 있다.
7. 디자인과 개발을 같이 하는 사람은 구현 디테일, 접근성, 성능, 디자인 시스템을 증명한다.
8. AI 역량은 "AI를 사용했다"가 아니라 "AI를 어떻게 통제하고 검증했는가"로 보여줘야 한다.

당신에게 가장 잘 맞는 방향은 다음이다.

- 포지셔닝: `PM / UIUX / FE-dev who turns ambiguous problems into usable AI-powered products`
- 핵심 서사: `문제를 제품 흐름으로 바꾸고, AI와 프론트엔드로 실제 경험까지 구현하는 사람`
- 대표 작업: `PULSE`, `PickFit`, `LikeLion`을 메인 3개로 두고, `FLOW`, `AboutPM`, `Adwise`, AI 실험은 Lab 또는 Side Work로 배치
- AI 섹션: 별도 `AI Workflow` 또는 `AI Operating System` 섹션을 만들어 Prompt Engineering, Subagent Orchestration, Harness/Eval Engineering, Human Decision Log를 보여주기

---

## 2. 조사 기준

### 2.1 예시 선정 기준

20개 예시는 한 종류의 포트폴리오만 보지 않았다. 당신의 역할이 PM, UI/UX, FE-dev, AI 활용을 모두 포함하므로 다음 유형을 섞었다.

- 제품 디자이너/UX 포트폴리오: 문제 정의, 결과 지표, 케이스스터디 구조 확인
- 디자인 엔지니어/프론트엔드 개발자 사이트: 구현력, 인터랙션, 오픈소스, 글쓰기 구조 확인
- AI/소프트웨어 연구형 개인 사이트: AI와 연구/실험/글을 포트폴리오화하는 방식 확인
- 전략/리더십형 디자인 사이트: PM 관점, 영향력, 성과 증명 방식 확인

### 2.2 사실 검증 원칙

- 출처 페이지에서 직접 확인한 내용만 "확인한 사실"에 넣었다.
- 수치나 직함은 출처에 표시된 경우에만 적었다.
- 추천안은 출처 사실에서 도출한 적용 아이디어로 분리했다.
- 당신의 실제 프로젝트 성과 수치, 팀 규모, 수상, 배포 여부는 별도 검증 후 넣어야 한다.
- AI 활용 내용은 OpenAI 공식 문서, Codex subagent 문서, 관련 연구 논문을 함께 참고했다.

---

## 3. 예시 20개 분석

| No | 예시 | 확인한 사실 | 공통 패턴으로 추출한 점 |
|---:|---|---|---|
| 1 | [Simon Pan](https://simonpan.com/) | Product Designer로 소개하며 Uber, Amazon Prime Music 등 프로젝트 카드에 역할과 결과 수치를 함께 제시한다. 예: Uber 픽업 경험 재설계에서 driver wait-time, pickup error distance 감소 수치를 표시한다. | 프로젝트 카드 단계에서 이미 `내 역할 + 제품 문제 + 결과`를 보여준다. PM/UIUX 포트폴리오에 특히 강한 형식이다. |
| 2 | [Andrew Couldwell](https://andrewcouldwell.com/) | "designer who codes"라고 소개하며 web design/build, product/system design, VP of Design, author, founder 경험을 한 페이지 안에서 역할별로 묶는다. 클라이언트와 케이스스터디 링크도 있다. | 여러 역할을 가진 사람은 기술 스택 나열보다 `역할 묶음`으로 정리해야 산만하지 않다. |
| 3 | [Femke](https://femke.design/) | "Develop your strategic influence as a Designer"라는 명확한 대상/가치 제안으로 시작한다. 4 million YouTube views, 500+ mentored designers, Design Lead at Gusto 등의 증거를 배치한다. | PM 성향을 보여주려면 디자인 결과물만이 아니라 전략, 영향력, 멘토링, 비즈니스 언어를 함께 보여주는 것이 좋다. |
| 4 | [Rauno Freiberg](https://rauno.me/) | interaction designer로 소개하며 Vercel, Devouring Details, Craft, Projects, Field Notes 링크를 둔다. "Make it fast. Make it beautiful..." 같은 짧은 원칙 문장이 있다. | 짧고 강한 원칙 문장은 포트폴리오 전체의 취향과 판단 기준을 만든다. |
| 5 | [Paco Coursey](https://paco.me/) | Linear의 webmaster로 소개하며 interface, polished software, magical UI details를 강조한다. GitHub 프로젝트, writing, now 섹션이 있다. | 디자인 엔지니어는 `프로젝트 + 글 + 현재 관심사`를 함께 보여주면 전문성이 더 선명해진다. |
| 6 | [Sania Saleh](https://www.saniasaleh.com/) | Work, Lab, About, Contact 구조가 있고, Lab을 "experimentation and process" 공간으로 설명한다. | 완성작만 보여주기보다 실험과 과정 전용 섹션을 두면 성장성과 탐구력이 보인다. |
| 7 | [Maggie Appleton](https://maggieappleton.com/) | visual essays about programming, design, anthropology라고 소개한다. Garden, Essays, Notes, Patterns, Talks, Library 등 지식 아카이브 구조가 있다. 페이지에는 AI & software engineering을 탐구 중이라는 문구도 있다. | PM/UIUX/AI 역량은 글, 패턴, 노트로 축적하면 단발 프로젝트보다 오래 남는 신뢰가 된다. |
| 8 | [Brittany Chiang](https://brittanychiang.com/) | **Senior Frontend Engineer, Accessibility @ Klaviyo**(2026 확인, 전 Upstatement)로 소개하며 accessible, pixel-perfect web experiences를 강조한다. About, Experience, Projects, Writing, Resume, GitHub/LinkedIn 링크가 있고 프로젝트마다 기술 태그를 둔다. | FE-dev 포트폴리오는 접근성, 픽셀 완성도, 기술 태그, 프로젝트 링크, 이력 링크가 명확해야 한다. |
| 9 | [Bruno Simon](https://bruno-simon.com/) | 3D 자동차로 돌아다니는 인터랙티브 포트폴리오다. Behind the scene에서 Three.js, devlogs, GitHub source code, license 등 제작 정보를 공개한다. | 인터랙션 자체가 실력 증거가 될 수 있다. 단, 반드시 기술 설명과 소스/제작 과정이 붙어야 한다. |
| 10 | [Josh W. Comeau](https://www.joshwcomeau.com/) | CSS, React, Animation, JavaScript 등 카테고리별 글과 튜토리얼, 인기 콘텐츠를 정리한다. | 프론트엔드 역량은 "잘 만든 결과물"뿐 아니라 "개념을 설명하는 능력"으로도 증명된다. |
| 11 | [Tania Rascia](https://www.taniarascia.com/) | Software engineer/open-source creator로 소개한다. Blog, Notes, Projects, About 구조가 있고 프로젝트마다 Article, Demo, Source 링크를 제공한다. | 프로젝트는 `설명 글 + 라이브 데모 + 소스 코드` 3종 세트로 두면 검증 가능성이 높아진다. |
| 12 | [Max Böck](https://mxb.dev/) | Front-end developer로 소개하며 writing, notes, about, theme picker, GitHub edit link, RSS를 둔다. | 개인 사이트도 제품처럼 사용성과 유지보수성을 드러낼 수 있다. 테마, RSS, GitHub 링크는 디테일의 증거다. |
| 13 | [Not a Number](https://www.nan.fyi/) | computer science와 web development를 다루는 interactive blog posts 사이트다. SVG, database, Framer Motion, compiler 등 주제별 글이 있다. | 복잡한 기술 개념을 인터랙티브하게 설명하면 FE-dev와 교육/PM 커뮤니케이션 역량이 동시에 보인다. |
| 14 | [Jhey Tompkins](https://www.jhey.dev/) | design engineer로 소개하며 UI demos, experiments, interaction patterns를 강조한다. Shopify, Google Chrome CSS/UI, Vercel 경험도 페이지에 표시된다. | 실험/데모/패턴은 "감각 있는 구현자"라는 포지션을 만든다. |
| 15 | [Sarah Drasner](https://sarah.dev/) | writing, speaking, projects를 주요 메뉴로 둔다. 사이트(sarah.dev)에는 'Area Tech Lead, AI and the Web for Chrome at Google'로 적혀 있으나, 2026년 외부 출처(LinkedIn 등)는 'AI Web Ecosystem(L9) / Director of Engineering, Core Developer Web'으로 확장 표기 — 소속 Google은 확실, Chrome 한정 직함은 변동 가능. | 시니어한 포트폴리오는 작업물뿐 아니라 글쓰기, 발표, 리더십 증거가 함께 있다. |
| 16 | [Una Kravets](https://una.im/) | web developer로 소개하며 Blog, Speaking, About, RSS, CSS Podcast, 최근 CSS 관련 글, 외부 프로젝트 링크를 둔다. | 최신 전문성은 최근 글, 강연, 팟캐스트, 외부 링크로 계속 업데이트된다. |
| 17 | [Hakim El Hattab](https://hakim.se/) | Swedish front-end developer and interface designer로 소개한다. Slides, reveal.js, 인터랙션 실험, 오픈소스 링크, Q&A를 한 페이지에 정리한다. | 개인 프로젝트 아카이브가 많아도, 상단에서 대표 제품과 현재 집중을 먼저 알려주면 덜 산만하다. |
| 18 | [Lynn Fisher](https://lynnandtonic.com/) | Designer for the Web라는 짧은 소개와 About, Work, Thoughts, Archive, RSS, Gifs 메뉴를 둔다. | 매우 짧은 포트폴리오도 정체성과 탐색 경로가 명확하면 기능한다. |
| 19 | [Linus Lee](https://thesephist.com/) | language, knowledge representation, creative work, AI/interfaces 관련 연구와 100개 이상의 side projects를 소개한다. Speaking 목록과 contact가 있다. | AI/연구형 포트폴리오는 "무엇을 만들었는가"보다 "어떤 질문을 오래 탐구하는가"가 중요하다. |
| 20 | [Simon Willison](https://simonwillison.net/) | Weblog에서 TILs, Tools, Projects, Guides, generative-ai, coding-agents 등 태그 기반 아카이브를 운영한다. 최근 글에는 AI-assisted programming과 도구 제작 로그가 보인다. | AI 활용 역량은 완성 결과보다 공개된 작업 로그, 도구, TIL, 실험 기록으로 신뢰가 생긴다. |

---

## 4. 20개 예시에서 공통적으로 나온 핵심 요소

### 4.1 첫 화면: 5초 안에 정체성이 보여야 한다

> **[유용성 평가 — 일부 기각]** '5초 정체성' 원칙은 현 Hero(라벨 "PM · UX · AI · Frontend" + 헤드라인 + 서브)가 이미 충족. 아래 영문 last-10% 카피와 'FE를 헤드라인급으로 승격'은 PM-우선 확정 방향·가드레일 §8과 충돌해 **기각**. FE 신호는 헤드라인이 아니라 케이스의 검증 링크로 보강한다.

공통적으로 좋은 사이트는 첫 화면에서 다음 세 가지를 바로 알 수 있었다.

- 누구인가: PM, Product Designer, Frontend Engineer, Design Engineer 등
- 무엇을 잘하는가: accessible UI, strategic influence, interactive demos, AI interfaces 등
- 어떤 태도로 일하는가: polished software, craft, experimentation, thoughtful products 등

당신의 경우 추천 첫 문장은 다음 방향이 좋다.

```md
PM / UIUX / FE-dev
불확실한 문제를 제품 흐름으로 정리하고, AI와 프론트엔드로 실제 경험까지 구현합니다.
```

더 날카롭게 만들면:

```md
I design the last 10% of AI-powered products:
the judgment, UX flow, and frontend details that make AI usable.
```

한국어 버전:

```md
AI가 답을 만들 수 있게 구조를 짜고,
사람이 믿고 쓸 수 있게 마지막 판단과 경험을 설계합니다.
```

### 4.2 프로젝트는 "많이"보다 "선별"이 중요하다

20개 예시에서 프로젝트를 무작정 많이 펼쳐놓는 방식보다, 대표 작업을 선별하고 나머지는 archive, lab, writing, notes로 분리하는 방식이 더 많았다.

추천 구조:

- Selected Work: 3개
- Lab / Experiments: 2-4개
- Writing / Notes: 계속 쌓을 수 있는 글
- Archive: 필요할 때만 보여주는 보조 작업

당신의 현재 포트폴리오 기준 추천:

- Selected Work 1: PULSE
- Selected Work 2: PickFit
- Selected Work 3: LikeLion
- Lab: AboutPM, FLOW, AI Prompt Lab, Adwise

### 4.3 프로젝트 카드에는 결과와 역할이 들어가야 한다

좋은 프로젝트 카드는 "예쁜 썸네일"보다 `왜 봐야 하는지`를 먼저 알려준다.

프로젝트 카드 필수 요소:

- 프로젝트명
- 제품/서비스 한 줄 설명
- 내 역할
- 핵심 문제
- 핵심 결정
- 결과 또는 현재 상태
- 확인 가능한 링크: demo, GitHub, Figma, 글, 발표, PDF 등

추천 카드 템플릿:

```md
## PULSE
AI marketing assistant for small business owners

Role: PM / UX / FE / Team Lead
Problem: scattered reviews and customer signals did not become daily marketing actions.
Decision: turn data views into an action-first dashboard.
Proof: dashboard UI, AI pipeline diagram, persona/review analysis, prototype/demo.
```

주의: 위 문장은 현재 파일명과 프로젝트명에서 추론한 예시 문장이다. 실제 성과, 팀 규모, 배포 상태는 최종 입력 전 검증해야 한다.

### 4.4 케이스스터디는 "화면 모음"이 아니라 "판단의 기록"이어야 한다

공통적으로 강한 포트폴리오는 결과 화면보다 다음을 더 중요하게 보여준다.

- 왜 이 문제를 선택했는가
- 어떤 사용자를 기준으로 삼았는가
- 어떤 대안을 버렸는가
- 왜 이 UX 흐름이 맞다고 판단했는가
- 구현하면서 어떤 제약이 있었는가
- 결과를 어떻게 검증했는가
- 다음 버전에서 무엇을 바꿀 것인가

특히 PM/UIUX/FE-dev를 같이 보여주려면, 한 프로젝트 안에서 세 관점을 모두 연결해야 한다.

```md
PM: 문제 정의, 가설, 우선순위, 성공 기준
UIUX: 사용자 흐름, IA, 와이어프레임, 디자인 시스템, 접근성
FE-dev: 구조, 컴포넌트, 상태 관리, API/데이터 흐름, 성능, 배포
AI: prompt strategy, subagent workflow, eval/harness, human review
```

### 4.5 글쓰기와 Lab은 신뢰를 만든다

Maggie Appleton, Josh Comeau, Tania Rascia, Simon Willison, Una Kravets, Max Böck 등은 작업물과 함께 글, 노트, 튜토리얼, 실험을 쌓아둔다. 이 구조는 단순히 "성실해 보이는" 효과가 아니라, 사고방식과 학습 속도를 증명한다.

당신에게 추천하는 글/노트 주제:

- PM이 AI를 쓸 때 위임하면 안 되는 판단
- 프롬프트 엔지니어링을 제품 개발에 적용한 방식
- Subagent를 써서 리서치/코드리뷰/QA를 분리한 경험
- Harness engineering: AI 결과를 검증 가능하게 만드는 방법
- PickFit에서 추천 UX를 설계할 때 고려한 결정 피로
- PULSE에서 데이터 화면을 액션 화면으로 바꾸는 과정
- LikeLion 커리큘럼을 문제 해결 흐름으로 재구성한 이유

### 4.6 개발자는 "검증 가능한 링크"가 있어야 한다

> **[유용성 평가 — 조건부 채택 ✅ 유일 통과]** 17개 단위 중 적대검증을 통과한 유일 항목. 단 '실재하고 정돈된 산출물에만' 선별 부착(데모 없으면 데모 칸을 만들지 말 것, 죽은 링크·placeholder 금지, 룸을 FE/소스코드 쇼케이스로 재프레이밍 금지). PULSE는 '배포 직전'이라 라이브 데모 없음에 주의.

FE-dev 포트폴리오에서 반복적으로 보인 강한 증거:

- Live demo
- Source code
- Tech stack
- Article / write-up
- Performance/accessibility note
- Open-source contribution
- Design system/component 설명

가능하면 프로젝트마다 다음 링크를 붙인다.

```md
View Case Study
Live Demo
GitHub
Figma / Prototype
Technical Notes
```

### 4.7 AI 역량은 도구명이 아니라 운영 방식으로 보여줘야 한다

AI를 잘 쓰는 사람처럼 보이려면 `ChatGPT 사용`, `Claude 사용`, `프롬프트 작성 가능`만으로는 부족하다. 오히려 좋은 포트폴리오는 AI를 쓴 흔적을 다음처럼 구조화해야 한다.

- AI에게 맡긴 일과 맡기지 않은 일을 분리
- 프롬프트를 버전 관리하거나 템플릿화
- subagent로 리서치, 구현, 리뷰, QA를 분리
- eval/harness로 결과를 반복 검증
- 실패 사례와 개선 과정을 기록
- 최종 판단은 사람이 했다는 점을 명시

이 방식은 PM, UIUX, FE-dev 정체성과 잘 맞는다. PM은 문제와 책임을 정의하고, UIUX는 사람이 이해할 흐름으로 바꾸고, FE-dev는 검증 가능한 인터페이스로 구현한다. AI는 그 사이의 속도와 탐색 폭을 늘리는 도구로 배치한다.

---

## 5. AI 활용 섹션을 반드시 넣는 방법

> **[유용성 평가 — 별도 페이지/섹션 기각, 케이스 내 흡수만]** AI를 '운영 방식'으로 보이라는 §4.7 원칙은 유효하고, PickFit이 이미 prompt·Skills/subagent·harness·human judgment를 케이스 안에 노출 중이다. 그러나 이를 **별도 'AI Workflow' 페이지/섹션으로 빼는 것은 기각**(design-direction '별도 코너 없이 흡수' 결정과 충돌, 표본 1을 방법론 페이지로 일반화하는 정직성 리스크). 추가로 채택할 가치는 §5.4 'Not used for' 필드와 '채택/폐기 결정로그' 1~2건뿐.

### 5.1 AI 섹션의 이름

추천 이름:

- `AI Workflow`
- `AI Operating System`
- `How I Work With AI`
- `AI-Augmented Product Process`
- `Prompt, Agents, Harness`

가장 포트폴리오 친화적인 이름:

```md
AI Workflow: Prompting, Subagents, Harnesses
```

한국어 이름:

```md
AI를 제품 개발에 쓰는 방식
```

### 5.2 AI 섹션에서 보여줄 4개 축

#### 1. Prompt Engineering

보여줄 내용:

- 목적별 프롬프트 템플릿
- 입력/출력 구조
- 제약 조건
- 실패 사례
- 개선 전후
- 프롬프트를 제품 요구사항, UX 검토, 코드 생성, QA에 어떻게 나눠 쓰는지

출처 근거:

- OpenAI prompt engineering 문서는 developer/user message의 역할, prompt를 코드에 두고 typed inputs, tests, evaluation checks와 함께 관리하는 방식을 설명한다.  
  Source: [OpenAI Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering)
- "Prompts Are Programs Too!" 논문은 prompt-powered software에서 프롬프트 개발이 전통적 프로그래밍과 다른 distinct phenomenon이라고 설명한다.  
  Source: [arXiv:2409.12447](https://arxiv.org/abs/2409.12447)

포트폴리오에 넣을 표현:

```md
프롬프트를 일회성 질문으로 쓰지 않고, 목적/입력/출력/실패 조건을 가진 작은 프로그램처럼 관리합니다.
```

#### 2. Subagent Orchestration

보여줄 내용:

- 어떤 일을 subagent로 분리했는지
- 왜 분리했는지
- 각 subagent의 역할
- 결과를 어떻게 통합했는지
- 병렬 작업의 장단점
- subagent 사용으로 좋아진 점과 조심한 점

출처 근거:

- OpenAI Codex subagents 문서는 specialized agents를 병렬로 실행해 탐색, 테스트, 로그 분석 같은 noisy work를 main thread 밖으로 옮기고 summary를 돌려받는 방식을 설명한다.  
  Source: [OpenAI Codex Subagents concept](https://developers.openai.com/codex/concepts/subagents)
- OpenAI Codex custom subagents 문서는 built-in agent와 custom agent 구성을 설명한다.  
  Source: [OpenAI Codex Subagents](https://developers.openai.com/codex/subagents)

포트폴리오에 넣을 예시:

```md
Subagent workflow example

Researcher: 경쟁 서비스와 사용자 문제 탐색
UX Reviewer: IA, 접근성, 마이크로카피 검토
Frontend Reviewer: 컴포넌트 구조와 상태 흐름 점검
QA Agent: 시나리오별 실패 케이스 수집
Main: 최종 판단, 우선순위 결정, 제품 방향 통합
```

주의:

- subagent가 모든 것을 자동으로 해결했다는 식으로 쓰지 않는다.
- "AI가 만들었다"보다 "내가 어떤 기준으로 나누고 검토했는가"를 보여준다.

#### 3. Harness / Eval Engineering

여기서 "harness engineering"은 AI 결과를 반복 가능하게 테스트하고 비교하기 위한 입력 세트, 평가 기준, 로그, 자동/수동 검토 체계를 만드는 일로 정의하면 좋다.

보여줄 내용:

- 테스트 입력 데이터셋
- 좋은 결과의 기준
- 실패 유형
- 프롬프트 버전별 비교
- 모델/프롬프트 변경 전후 결과
- 사람이 검토한 기준
- UI 결과물의 접근성/성능/동작 검증

출처 근거:

- OpenAI evals 문서는 evals를 model outputs가 지정한 style/content criteria를 만족하는지 테스트하는 방법으로 설명한다.  
  Source: [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals)
- OpenAI agent evals 문서는 traces, graders, datasets, eval runs를 통해 agent workflow 품질을 개선하는 방식을 설명한다.  
  Source: [OpenAI Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals)

포트폴리오에 넣을 표현:

```md
AI 결과를 감으로 채택하지 않고, 대표 입력 세트와 평가 기준을 만들어 프롬프트 변경 전후를 비교했습니다.
```

#### 4. Human Decision Log

AI 활용에서 가장 중요한 부분이다. AI가 낸 결과 중 무엇을 채택했고, 무엇을 버렸으며, 왜 그렇게 판단했는지를 보여준다.

출처 근거:

- Microsoft PM 대상 연구 논문은 GenAI가 PM 업무를 바꾸고 있으며, PM들이 어떤 일을 GenAI에 위임할지 평가하는 framework를 다룬다. 제목 자체가 "Accountability must not be delegated to non-human actors"라는 책임 원칙을 강조한다.  
  Source: [arXiv:2510.02504](https://arxiv.org/abs/2510.02504)

포트폴리오에 넣을 표현:

```md
AI는 탐색과 초안을 넓히는 데 사용했고, 제품 방향, 사용자 기준, 최종 우선순위는 직접 판단했습니다.
```

### 5.3 AI 섹션 화면 구성 추천

```md
AI Workflow

1. Prompting
   - 목적별 프롬프트 템플릿
   - 입력/출력 구조
   - 개선 전후 예시

2. Subagents
   - researcher / reviewer / implementer / QA agent
   - 병렬 탐색 후 main thread에서 통합

3. Harnesses
   - 테스트 입력 세트
   - 평가 루브릭
   - 실패 케이스
   - 회귀 테스트

4. Human Judgment
   - AI가 낸 제안 중 채택/보류/폐기한 결정 로그
   - 최종 책임과 기준
```

### 5.4 AI 활용을 프로젝트마다 넣는 템플릿

각 케이스스터디 마지막에 다음 블록을 넣는다.

```md
## AI Usage

### Used for
- 초기 리서치 질문 확장
- 사용자 시나리오 초안
- 마이크로카피 대안 생성
- 컴포넌트 구조 초안
- QA 체크리스트 생성

### Not used for
- 최종 문제 정의
- 사용자 가치 판단
- 우선순위 결정
- 성과 수치 생성
- 검증되지 않은 주장 작성

### Prompting method
- Role / Context / Task / Constraints / Output schema / Examples

### Subagent workflow
- Research subagent
- UX review subagent
- FE implementation review subagent
- QA subagent

### Harness / evaluation
- 대표 입력 n개
- 성공 기준
- 실패 유형
- 개선 전후 비교

### Human decision
- 채택한 제안
- 버린 제안
- 최종 판단 이유
```

---

## 6. 당신 포트폴리오에 추천하는 전체 정보 구조

### 6.1 메인 내비게이션

> **[유용성 평가 — 기각]** 풀 내비 7/5항목은 현 단일 랜딩 앵커(Projects/Writing/Contact)와 충돌·중복. AI Workflow·Lab·About은 폐기된 섹션이라 가리킬 목적지가 없어 빈 앵커가 된다.

```md
Home
Work
AI Workflow
Lab
Writing
About
Contact
```

너무 많아 보이면 다음처럼 줄인다.

```md
Work
AI
Lab
Writing
Contact
```

### 6.2 Home

목표: 5초 안에 당신의 정체성을 이해시킨다.

포함 요소:

- 이름
- 역할: PM / UIUX / FE-dev
- 한 문장 포지셔닝
- 대표 작업 3개로 이동하는 링크
- AI 활용 정체성 한 줄
- GitHub, LinkedIn, Velog/Blog, Email, Resume

추천 카피:

```md
Noh Taekyung
PM / UIUX / FE-dev

불확실한 문제를 제품 흐름으로 정리하고,
AI와 프론트엔드로 실제 경험까지 구현합니다.
```

보조 카피:

```md
Prompt engineering, subagent workflows, and evaluation harnesses are part of my product-making process.
```

한국어 보조 카피:

```md
프롬프트, 서브에이전트, 평가 하네스를 제품 개발 과정에 녹여 빠르게 탐색하고 엄격하게 검증합니다.
```

### 6.3 Work

목표: PM, UIUX, FE-dev의 교차 역량을 프로젝트로 증명한다.

추천 순서:

1. PULSE
2. PickFit
3. LikeLion

각 카드 구성:

```md
Project name
One-line product description
Role chips
Problem
My decision
Proof links
```

### 6.4 AI Workflow

> **[유용성 평가 — 기각]** '별도 페이지' 신설 기각. 이미 PickFit 케이스에 흡수돼 있고, 새 1차 동선은 10초 스캔을 파편화한다. (§5 평가 노트와 동일)

목표: AI를 단순 사용자가 아니라 "효율적으로 운영하는 사람"으로 보여준다.

섹션:

- Prompt Engineering
- Subagent Orchestration
- Harness / Eval Engineering
- AI-assisted FE workflow
- Human decision log

이 섹션은 별도 페이지로 두는 것을 추천한다. 이유는 AI가 당신의 차별점이기 때문이다. 프로젝트 내부의 보조 설명으로만 넣으면 묻힐 수 있다.

### 6.5 Lab

> **[유용성 평가 — 기각]** Lab 섹션은 design-direction에서 명시 근거('깊이 가중치 + 대표보다 안 튀게')와 함께 **해체** 확정됨(FLOW·AboutPM은 명칭 없는 'side'로 흡수). 부활을 정당화할 근거 없음.

목표: 완성 프로젝트가 아니어도 사고력과 실험성을 보여준다.

넣을 후보:

- AboutPM
- FLOW
- AI Visual Prompt Lab
- Adwise
- Prompt template archive
- UX teardown notes

Lab 카드 템플릿:

```md
Title
Question: 어떤 질문에서 시작했나?
Experiment: 무엇을 만들어 봤나?
Learning: 무엇을 배웠나?
Artifact: 이미지, 데모, 글, 코드 링크
```

### 6.6 Writing

목표: PM과 AI 활용 역량을 글로 증명한다.

추천 글 구조:

- 짧은 글: 800-1200자, 작업 로그/배운 점
- 긴 글: 2000-4000자, 케이스스터디/회고
- TIL: AI 도구, FE 구현, PM 프레임워크 단위 노트

초기 글 5개 추천:

1. AI에게 맡기면 안 되는 PM의 판단
2. 프롬프트를 코드처럼 관리하는 이유
3. Subagent로 포트폴리오 QA를 나눠본 기록
4. PickFit: 추천 UX에서 사용자가 진짜 원하는 것
5. PULSE: 데이터 대시보드를 액션 대시보드로 바꾸기

### 6.7 About

> **[유용성 평가 — 독립 섹션 기각]** 별도 About 섹션 신설 기각(Manifesto/About 독립 섹션 제거 결정과 충돌, 7요소 중 6개가 이미 Hero+ProofStrip+role chips에 분산 구현). 잔여 가치: Resume placeholder→실물 PDF 연결, '좋아하는 문제' 한 문장만 Hero 서브/ProofStrip에 미니 흡수.

목표: 단순 자기소개가 아니라 "어떤 문제를 오래 보고 있는 사람인가"를 보여준다.

포함 요소:

- 3문장 자기소개
- PM/UIUX/FE-dev를 연결하는 개인 관점
- AI 학습/활용 경험
- 좋아하는 문제 유형
- 협업 방식
- 도구/스택
- Resume link

추천 About 문장:

```md
저는 문제를 기능으로 바로 번역하기보다, 사용자가 결정을 내리는 흐름을 먼저 설계합니다. PM 관점으로 문제와 우선순위를 정의하고, UIUX로 사용자의 판단 경로를 만들고, FE-dev로 실제 상호작용까지 구현합니다. 최근에는 prompt engineering, subagent workflow, harness engineering을 공부하며 AI를 빠른 초안 도구가 아니라 검증 가능한 제품 개발 파트너로 다루는 방법을 실험하고 있습니다.
```

---

## 7. 케이스스터디 상세 템플릿

각 대표 프로젝트는 아래 구조를 그대로 적용해도 된다.

### 7.1 상단 요약

```md
# Project Name

One-line: 이 프로젝트는 누구의 어떤 문제를 해결하는가?

Role: PM / UIUX / FE-dev / Team Lead
Period: YYYY.MM - YYYY.MM
Team: 개인 또는 n명
Status: concept / prototype / MVP / launched / in progress
Links: Demo / GitHub / Figma / Presentation / Article
```

주의:

- 기간, 팀원 수, 배포 상태는 반드시 실제와 맞춰 적는다.
- 배포 전이면 launched라고 쓰지 않는다.
- 지표가 없으면 지표처럼 보이게 쓰지 않는다.

### 7.2 10초 요약

```md
Problem:
사용자는 무엇 때문에 막혔는가?

Decision:
나는 어떤 방향을 선택했는가?

Result:
무엇이 만들어졌고, 무엇을 확인했는가?
```

### 7.3 문제 정의

포함할 질문:

- 이 문제는 누구에게 발생했나?
- 기존 방식은 왜 부족했나?
- 사용자는 어떤 결정을 어려워했나?
- 이 문제가 해결되면 무엇이 좋아지나?
- 이 프로젝트에서 해결하지 않기로 한 것은 무엇인가?

PM답게 보이는 문장 구조:

```md
처음 문제는 "기능이 부족하다"가 아니라 "사용자가 다음 행동을 결정하지 못한다"에 가까웠다.
```

### 7.4 사용자와 근거

넣을 수 있는 증거:

- 인터뷰 메모
- 설문
- 리뷰 분석
- 경쟁 서비스 비교
- 사용자 여정
- 페르소나
- 문제 우선순위 표
- 실제 캡처

주의:

- 인터뷰 인원 수가 없으면 지어내지 않는다.
- "많은 사용자가" 같은 표현은 근거가 있을 때만 쓴다.
- 정량 근거가 없으면 "정성 관찰 기준"이라고 명시한다.

### 7.5 PM 의사결정

포함할 내용:

- 목표
- 성공 기준
- 주요 가설
- 우선순위
- 선택한 범위
- 버린 범위
- trade-off

템플릿:

```md
Goal:

Hypothesis:

Success criteria:

Priority decision:

Trade-off:

Why not:
```

### 7.6 UX 설계

포함할 내용:

- IA
- user flow
- wireframe
- prototype
- design system
- microcopy
- empty/loading/error state
- accessibility consideration

추천 블록:

```md
Before:
사용자가 어디에서 막혔는지

Flow decision:
어떤 흐름으로 바꿨는지

Interaction detail:
작은 인터랙션이 어떤 판단을 도왔는지

Design system:
재사용 가능한 규칙을 어떻게 만들었는지
```

### 7.7 FE 구현

포함할 내용:

- stack
- routing
- component structure
- state/data flow
- API/mock data
- animation
- responsive layout
- accessibility
- performance
- testing
- deployment

추천 블록:

```md
Tech stack:

Architecture:

Key components:

Data flow:

Interaction:

Accessibility:

Performance:

Testing:

Deployment:
```

### 7.8 AI 활용

포함할 내용:

- 어떤 단계에서 AI를 썼는지
- 어떤 프롬프트 구조를 썼는지
- subagent를 어떻게 나눴는지
- 검증 하네스를 어떻게 만들었는지
- 어떤 제안은 왜 버렸는지

추천 블록:

```md
AI was useful for:
- divergent research
- UI copy alternatives
- edge-case generation
- code review checklist

I kept human ownership over:
- problem framing
- user value judgment
- prioritization
- final UX direction
- factual claims

Evaluation:
- sample inputs
- success rubric
- failure cases
- regression notes
```

### 7.9 결과와 회고

결과는 반드시 검증된 것만 쓴다.

가능한 표현:

- `Launched to n users` - 실제 수치가 있을 때만
- `Tested with n participants` - 실제 테스트가 있을 때만
- `Prototype completed` - 프로토타입 완성 상태일 때
- `Selected as ...` - 증빙 가능한 수상/선정만
- `Reduced ... by ...` - 실제 측정 수치가 있을 때만

수치가 없을 때 좋은 표현:

```md
Outcome:
프로토타입과 주요 화면 흐름을 완성했고, 다음 검증 단계에서 확인해야 할 가설을 정리했다.

Learning:
처음에는 기능 확장에 집중했지만, 사용자가 실제로 필요로 한 것은 더 많은 선택지가 아니라 더 빠른 결정이었다.
```

---

## 8. 프로젝트별 추천 포지셔닝

이 섹션은 현재 워크스페이스에 보이는 프로젝트명과 이미지 파일명을 참고한 초안이다. 최종 문장에는 실제 기획 의도, 성과, 팀 정보, 배포 상태를 확인해서 반영해야 한다.

### 8.1 PULSE

추천 포지션:

```md
PULSE
리뷰와 고객 데이터를 다음 마케팅 행동으로 바꾸는 AI 마케팅 어시스턴트
```

보여줄 역량:

- PM: 소상공인/마케팅 문제 정의, 데이터 -> 액션 구조화
- UIUX: 대시보드, 계정/지역/리뷰 분석 흐름
- FE-dev: 대시보드 구현, chart/card/table 구조
- AI: 리뷰 분석, persona 도출, 추천/매칭/파이프라인

넣을 증거 후보:

- dashboard 화면
- account profile 화면
- area analysis 화면
- influencer matching 화면
- MSA/AI pipeline 자료
- persona/review analysis 자료
- promo video
- 수상/선정 증빙이 있다면 별도 검증 후 표기

좋은 케이스스터디 제목:

```md
PULSE: 데이터 조회 화면을 마케팅 실행 화면으로 바꾸기
```

### 8.2 PickFit

추천 포지션:

```md
PickFit
선택 피로를 줄이는 AI 코디 추천 경험
```

보여줄 역량:

- PM: 패션 선택 과정의 문제 정의
- UIUX: 상황 선택, 스타일 입력, 추천 결과, 이유 설명 흐름
- FE-dev: 모바일 중심 UI, 상태 전환, 로딩/결과 화면
- AI: 추천 조건 구조화, 프롬프트/응답 포맷, 추천 이유 생성

넣을 증거 후보:

- style input
- situation select
- recommendation result
- outfit items
- AI loading
- design system
- brand banner/logo

좋은 케이스스터디 제목:

```md
PickFit: 더 많은 상품보다 더 빠른 결정을 돕는 추천 UX
```

### 8.3 LikeLion

추천 포지션:

```md
LikeLion
초보자가 PM/UX 사고를 실제 프로젝트 흐름으로 익히도록 만든 교육/운영 설계
```

보여줄 역량:

- PM: 커리큘럼 설계, 운영 목표, 학습자 문제 정의
- UIUX: 카드뉴스, 세션 자료, Figma board, 운영 자료 구조화
- FE-dev: 직접 구현 프로젝트와 연결 가능하다면 별도 증거
- AI: 교육 자료 초안, 피드백 루프, 과제 리뷰 자동화 실험이 있다면 추가

넣을 증거 후보:

- curriculum 문서
- session photo
- Figma board
- recruit cards
- operation/planning/design 자료

좋은 케이스스터디 제목:

```md
LikeLion: 개념 강의가 아니라 프로젝트 사고 흐름을 설계하기
```

### 8.4 Lab / Side Work

#### FLOW

추천 포지션:

```md
FLOW
추상적인 전시 주제를 관람자 경험 언어로 바꾼 비주얼/경험 설계
```

#### AboutPM

추천 포지션:

```md
AboutPM
PM 지식을 3D 관계 그래프로 탐색하게 만든 인터랙티브 지식 구조 실험
```

#### AI Prompt Lab

추천 포지션:

```md
AI Prompt Lab
프롬프트, subagent, eval harness를 제품 개발에 적용한 실험 기록
```

---

## 9. 포트폴리오에 반드시 넣을 증거 체크리스트

### 9.1 PM 증거

- 문제 정의 문서
- 사용자/시장 근거
- 경쟁 서비스 분석
- 우선순위 결정표
- 로드맵 또는 MVP 범위
- 성공 지표
- trade-off 기록
- stakeholder communication 자료
- 회고와 다음 단계

### 9.2 UIUX 증거

- user flow
- IA
- wireframe
- prototype
- screen before/after
- design system
- component states
- empty/loading/error states
- accessibility consideration
- usability test notes
- microcopy rationale

### 9.3 FE-dev 증거

- live demo
- GitHub
- stack
- component architecture
- state/data flow
- API integration 또는 mock data 구조
- responsive behavior
- accessibility result
- performance note
- testing result
- deployment link

### 9.4 AI 활용 증거

- prompt template
- prompt version history
- input/output schema
- sample dataset
- eval rubric
- failure cases
- subagent role map
- trace/log screenshot
- AI suggestion adoption/rejection log
- human review checklist

### 9.5 절대 넣으면 안 되는 것

- 검증되지 않은 성과 수치
- 실제가 아닌 사용자 수
- 근거 없는 "매출 증가", "전환율 개선"
- AI가 만든 더미 화면을 실제 출시 화면처럼 보이게 하는 것
- 공개하면 안 되는 개인정보/기업 정보/비밀 프롬프트
- 팀 작업을 혼자 한 것처럼 보이게 하는 표현
- AI가 한 일을 전부 본인이 직접 한 것처럼 쓰는 표현

---

## 10. 추천 문장 모음

### 10.1 Hero 카피 후보

후보 A:

```md
불확실한 문제를 제품 흐름으로 정리하고,
AI와 프론트엔드로 실제 경험까지 구현합니다.
```

후보 B:

```md
PM의 판단, UX의 흐름, FE의 구현으로
AI 제품이 실제로 쓰이는 순간을 만듭니다.
```

후보 C:

```md
AI가 빠르게 넓히는 가능성 속에서,
사람이 믿고 선택할 수 있는 제품 경험을 설계합니다.
```

### 10.2 About 카피 후보

```md
저는 PM, UIUX, FE-dev의 경계에서 일합니다. 문제를 정의하고, 사용자가 이해할 수 있는 흐름으로 바꾸고, 프론트엔드로 직접 구현해 검증합니다. 최근에는 prompt engineering, subagent workflow, harness engineering을 공부하며 AI를 단순 생산성 도구가 아니라 제품 개발의 탐색, 검토, 검증 시스템으로 다루는 방법을 실험하고 있습니다.
```

### 10.3 AI 섹션 카피 후보

```md
AI를 빠른 초안 생성기로만 쓰지 않습니다. 프롬프트를 구조화하고, subagent로 작업을 분리하고, harness와 eval로 결과를 비교하며, 최종 판단은 사람이 책임지는 방식으로 씁니다.
```

### 10.4 프로젝트 카드 문장 후보

PULSE:

```md
리뷰와 고객 데이터를 "봐야 하는 정보"가 아니라 "오늘 실행할 마케팅 행동"으로 바꾸는 AI 대시보드.
```

PickFit:

```md
더 많은 상품을 보여주는 대신, 상황과 취향을 바탕으로 사용자가 빠르게 결정하도록 돕는 AI 코디 추천 경험.
```

LikeLion:

```md
초보자가 PM/UX 개념을 외우는 대신, 문제 정의부터 결과물까지 프로젝트 흐름으로 익히도록 만든 교육 설계.
```

---

## 11. 우선순위 액션 플랜

> **[유용성 평가 — 부분 기각]** Phase 3(AI Workflow 페이지)·Phase 4(Lab)는 확정 흡수·해체 결정과 충돌하고 이미 그 방향으로 구현돼 전제가 낡음. Phase 1(사실검증)·Phase 2(케이스 심화)·Phase 5(최종 검증 체크리스트)는 유효.

### Phase 1. 사실 검증

각 프로젝트별로 아래 항목을 채운다.

```md
Project:
Role:
Period:
Team:
Status:
Live link:
GitHub:
Figma:
Verified metrics:
Verified awards:
Can disclose:
Cannot disclose:
```

### Phase 2. 대표 프로젝트 3개 케이스스터디 작성

우선순위:

1. PULSE
2. PickFit
3. LikeLion

각 프로젝트는 다음 분량을 목표로 한다.

- 상단 요약: 1 screen
- 문제/판단/결과: 2-3 screens
- UX/FE/AI 상세: 3-5 screens
- 회고/다음 단계: 1 screen

### Phase 3. AI Workflow 페이지 작성

최소 구성:

```md
1. Prompting
2. Subagents
3. Harnesses
4. Human Judgment
```

필수 증거:

- 프롬프트 예시 2개
- subagent role map 1개
- eval/harness 표 1개
- AI 제안 채택/폐기 decision log 1개

### Phase 4. Lab / Writing 정리

Lab:

- AboutPM
- FLOW
- AI Prompt Lab

Writing:

- AI 활용 회고 1개
- 제품/UX 판단 글 1개
- FE 구현 글 1개

### Phase 5. 최종 검증

체크리스트:

- 첫 화면에서 5초 안에 역할이 보이는가?
- 각 프로젝트에 역할, 문제, 판단, 결과가 있는가?
- 수치와 수상은 증빙 가능한가?
- AI 사용 범위와 사람의 최종 판단이 구분되어 있는가?
- 라이브 데모/소스/글/Figma 중 최소 1개 증거가 붙어 있는가?
- 모바일에서 텍스트가 잘리지 않는가?
- About/Contact/Resume 접근이 쉬운가?

---

## 12. 출처 모음

### 12.1 포트폴리오/개인 사이트 예시 20개

1. [Simon Pan](https://simonpan.com/)
2. [Andrew Couldwell](https://andrewcouldwell.com/) (현재 roomfive.net으로 301 리다이렉트)
3. [Femke](https://femke.design/)
4. [Rauno Freiberg](https://rauno.me/)
5. [Paco Coursey](https://paco.me/)
6. [Sania Saleh](https://www.saniasaleh.com/)
7. [Maggie Appleton](https://maggieappleton.com/)
8. [Brittany Chiang](https://brittanychiang.com/)
9. [Bruno Simon](https://bruno-simon.com/)
10. [Josh W. Comeau](https://www.joshwcomeau.com/)
11. [Tania Rascia](https://www.taniarascia.com/)
12. [Max Böck](https://mxb.dev/)
13. [Not a Number](https://www.nan.fyi/)
14. [Jhey Tompkins](https://www.jhey.dev/)
15. [Sarah Drasner](https://sarah.dev/)
16. [Una Kravets](https://una.im/)
17. [Hakim El Hattab](https://hakim.se/)
18. [Lynn Fisher](https://lynnandtonic.com/)
19. [Linus Lee](https://thesephist.com/)
20. [Simon Willison](https://simonwillison.net/)

### 12.2 AI 활용/검증 참고 출처

- [OpenAI Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering)
- [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals)
- [OpenAI Codex Subagents concept](https://developers.openai.com/codex/concepts/subagents)
- [OpenAI Codex Subagents](https://developers.openai.com/codex/subagents)
- [OpenAI Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals)
- [Prompts Are Programs Too! Understanding How Developers Build Software Containing Prompts](https://arxiv.org/abs/2409.12447)
- [Product Manager Practices for Delegating Work to Generative AI](https://arxiv.org/abs/2510.02504)
- [FullFront: Benchmarking MLLMs Across the Full Front-End Engineering Workflow](https://arxiv.org/abs/2505.17399)

---

## 13. 마지막 정리

당신의 포트폴리오는 "PM도 하고, UIUX도 하고, FE도 하고, AI도 써요"라고 말하면 약해진다. 대신 이렇게 보여줘야 한다.

```md
나는 문제를 정의한다.
사용자가 결정할 수 있는 흐름으로 바꾼다.
프론트엔드로 실제 경험을 만든다.
AI를 탐색과 검증의 시스템으로 사용한다.
마지막 판단과 책임은 내가 가진다.
```

이 서사를 기준으로 하면, 포트폴리오의 모든 섹션은 다음 역할을 가진다.

- Home: 정체성
- Work: 증거
- AI Workflow: 차별점
- Lab: 탐구력
- Writing: 사고력
- About: 사람과 방향성
- Contact: 다음 행동

가장 중요한 것은 검증 가능한 증거다. 수치가 없으면 수치처럼 쓰지 않고, 배포 전이면 배포된 것처럼 쓰지 않는다. 대신 문제를 어떻게 보고, 어떤 판단을 했고, 어떤 결과물을 만들었는지를 정확하게 보여준다. 그 정확함 자체가 PM/UIUX/FE-dev 포트폴리오의 신뢰가 된다.
