# portfolio-image-prompts.md

> TAEKYUNG WORKS 포트폴리오 이미지 프롬프트 최종본
> 목적: Hero, Project Room, Transition, Lab, Archive에 필요한 이미지 에셋 제작
> 생성 도구: ChatGPT 이미지 생성 기준
> 스타일: 밝고 희망찬 화이트 갤러리 + 종이 콜라주 + 2.5D 인터랙티브 룸
> 주의: 이미지 안에 텍스트, 로고, 가짜 UI 문구를 넣지 않는다. 모든 텍스트는 HTML/CSS로 구현한다.

---

## 0. 전체 이미지 제작 방향

### 0.1 최종 비주얼 콘셉트

```text
화이트 갤러리형 인터랙티브 포트폴리오 안에서,
강한 타이포그래피가 공간의 간판이 되고,
각 프로젝트는 컬러가 다른 전시 방처럼 펼쳐지며,
직접 제작한 이미지와 오브젝트는 액자처럼 배치되고 스크롤에 따라 살아 움직인다.
```

### 0.2 확정 방향

* Hero는 **타이포 + 콜라주 자화상 반반**
* 자화상은 **얼굴은 작게, 오브젝트 중심**
* 프로젝트 룸 전환은 **실제로 방이 회전하거나 이동하는 듯한 3D감**
* 방 구조는 프로젝트마다 다르게 구성
* 이미지 스타일은 **종이 콜라주 + 2.5D 혼합**
* 손맛은 있지만 너무 삐뚤거나 조잡하지 않게
* 전체 분위기는 **밝고 희망차게**
* 무표정, 우울한 표정, 어두운 분위기 금지
* 실제 프로젝트 화면, 목업, 사진은 증거 자료로 사용
* 생성 이미지는 방 배경, 오브젝트, 액자, 전환 장면, 분위기 연출에 사용

---

## 1. 모든 프롬프트 공통 규칙

### 1.1 공통 스타일 문장

아래 문장은 대부분의 프롬프트에 공통으로 붙인다.

```text
Style:
bright and hopeful mood, clean white gallery, paper cut collage mixed with 2.5D digital depth, handmade but controlled edges, optimistic energy, premium interactive portfolio atmosphere, soft but clear shadows, high-resolution, editorial composition, spacious layout.
```

### 1.2 공통 금지 조건

```text
Avoid:
readable text,
fake UI labels,
logos,
watermarks,
gloomy mood,
sad or emotionless faces,
blank stare,
dark depressing lighting,
messy low-quality collage,
childish craft style,
overly glossy 3D,
cheap stock illustration look,
busy background,
cluttered composition.
```

### 1.3 중요한 제작 원칙

```text
1. 이미지 안에 글자를 넣지 않는다.
2. 프로젝트명, 설명, CTA, 타이틀은 HTML/CSS 실제 텍스트로 구현한다.
3. 실제 프로젝트 UI 화면은 실제 캡처나 목업을 사용한다.
4. 생성 이미지는 배경, 프레임, 오브젝트, 전환 장면 중심으로 만든다.
5. 각 이미지는 나중에 움직일 수 있도록 레이어형으로 생각한다.
6. 16:9, 9:16, 1:1, 투명 PNG 오브젝트 세트를 모두 준비한다.
```

---

## 2. 이미지 에셋 우선순위

### 2.1 1차 제작 필수 에셋

```text
1. Hero 콜라주 자화상
2. Hero 오브젝트 씬
3. White Gallery Corridor
4. PULSE Room Background
5. PickFit Room Background
6. LikeLion Room Background
7. PULSE Object Pack
8. PickFit Object Pack
9. LikeLion Object Pack
10. AboutPM Graph Room
```

### 2.2 2차 제작 에셋

```text
11. PULSE Main Wall Frame
12. PULSE Data-to-Action Transition
13. PickFit Smartphone Frame Scene
14. PickFit Choice-to-Recommendation Transition
15. LikeLion Curriculum Wall
16. LikeLion Session Photo Frame Scene
17. FLOW Exhibition Wall
18. FLOW Poster Frame Mockup
```

### 2.3 3차 보조 에셋

```text
19. Room Transition Portal A
20. Room Transition Portal B
21. Common Floating Paper Pack
22. Prompt Workflow Object Pack
23. Editorial Writing Background
24. Article Card Object Pack
25. Mobile Room Background Set
```

---

## 3. Hero 이미지 프롬프트

---

### 3.1 Hero 콜라주 자화상

#### 용도

* 첫 화면 메인 비주얼
* 얼굴은 작게, 오브젝트 중심
* 밝고 희망찬 분위기
* 타이포그래피와 반반 배치

#### 권장 비율

* 16:9
* 1:1
* 9:16

#### 프롬프트

```text
Create a hero visual for an interactive personal portfolio website.

Show a stylized collage-based self-portrait of a young Korean male creative product planner. Keep the face relatively small and simplified, with a bright, calm, confident, and hopeful expression. Do not make the person look sad, emotionless, tired, or gloomy.

The composition should focus more on the surrounding work objects than on the face. Surround the figure with floating paper-cut and 2.5D objects representing PM, UX, AI workflow, and frontend development: a laptop, sticky notes, wireframe cards, cursor arrow, prompt cards, small chart cards, a code panel, and project frames.

The overall mood should feel like a clean white gallery mixed with editorial typography culture. The composition must leave a strong empty area for large website typography. Use a premium off-white base close to #F8FAFC.

Style:
bright and hopeful mood, clean white gallery, paper cut collage mixed with 2.5D digital depth, handmade but controlled edges, optimistic energy, soft but clear shadows, high-resolution, editorial portfolio composition.

No readable text, no logos, no fake UI labels, no gloomy expression.
```

---

### 3.2 Hero 오브젝트 씬

#### 용도

* 자화상 보조 이미지
* Hero 타이포 옆 배치
* 얼굴 없이도 사용 가능

#### 권장 비율

* 16:9
* 1:1

#### 프롬프트

```text
Create a typographic hero support image for a personal portfolio website.

Build a clean white gallery scene filled with floating collage and 2.5D objects representing product planning, UX, AI workflow, and frontend making: laptop, sticky notes, cursor pointer, prompt cards, wireframe frame, chart card, small code panel, and hanging gallery frames.

The scene should feel bright, hopeful, energetic, and professional. It should suggest that ideas are being organized into clear product experiences. The composition should feel spacious and premium, with a lot of breathing room for large typography. Use an off-white background close to #F8FAFC with blue, black, lime, and subtle orange accents.

Style:
paper cut collage + 2.5D mixed media, bright interactive portfolio visual, handmade but controlled edges, soft shadows, optimistic and clean.

No readable text, no logos.
```

---

## 4. Gallery Corridor / Room Transition 프롬프트

---

### 4.1 White Gallery Corridor

#### 용도

* Hero 이후 프로젝트 룸으로 진입하는 구간
* 3개의 프로젝트 방 입구 암시

#### 권장 비율

* 16:9
* 9:16

#### 프롬프트

```text
Create a minimal white gallery corridor scene for an interactive portfolio website.

Show a clean perspective hallway with three different project room entrances visible in the distance. Each entrance should feel distinct but subtle: one professional deep-blue room, one bright fashion-tech blue-lime room, and one educational blue-white-orange room.

The scene should feel bright, hopeful, and inviting, like entering a creative exhibition of product work. The whole environment should use a #F8FAFC off-white base with soft architectural shadows, clear depth, and a modern gallery atmosphere.

Style:
white gallery interior, paper collage details mixed with clean 2.5D digital depth, elegant, spacious, optimistic interactive storytelling mood.

No text, no logos, no people.
```

---

### 4.2 Room Transition Portal A

#### 용도

* PULSE에서 PickFit으로 넘어가는 전환

#### 권장 비율

* 16:9
* 9:16

#### 프롬프트

```text
Create a dynamic room transition visual for an interactive portfolio website.

Show layered gallery frames and paper-collage panels rotating slightly in perspective, as if the viewer is moving from one project room into another. The scene should feel like a real room transition with 3D depth and motion.

Use a clean white gallery base with deep blue elements gradually shifting into violet-blue and lime. The feeling should be energetic, bright, and hopeful, not dark or heavy.

Style:
paper cut collage mixed with 2.5D spatial depth, bright premium interactive portfolio, soft shadows, elegant motion-like composition.

No readable text, no logos.
```

---

### 4.3 Room Transition Portal B

#### 용도

* PickFit에서 LikeLion으로 넘어가는 전환

#### 권장 비율

* 16:9
* 9:16

#### 프롬프트

```text
Create a second dynamic room transition visual for an interactive portfolio website.

Show a gallery-like spatial transition where floating frames, paper cards, and curved room panels guide the viewer from a fashion-tech room into a structured educational room. Use a white gallery base with violet-blue and lime accents gradually shifting into pale blue, strong blue, and orange.

The composition should feel like moving through a 3D exhibition environment. Make it bright, optimistic, clean, and readable.

Style:
paper cut collage + 2.5D room transition, premium interactive storytelling, soft but visible depth and shadows.

No readable text, no logos.
```

---

## 5. PULSE Room 이미지 프롬프트

---

### 5.1 PULSE Room Background

#### 용도

* PULSE 프로젝트 방 배경
* 전문적이고 제품 중심의 공간

#### 권장 비율

* 16:9
* 9:16

#### 프롬프트

```text
Create a project room background for PULSE, an AI marketing assistant for restaurant owners.

The room should feel highly professional, product-focused, trustworthy, and optimistic. Use a clean white and pale blue gallery space with deep royal blue as the main identity color and small orange highlights only for action points. The environment should contain empty exhibition wall areas where real UI screenshots can later be placed.

Include subtle floating abstract review bubbles, chart shapes, customer persona cards, and marketing action objects as supporting visual elements. The mood should feel like data becoming useful action for small business owners.

Colors:
#F5F7FA, #EAF1FB, #002B7A, #FF5A36, #191F28.

Style:
modern product exhibition room, bright white gallery, paper cut collage mixed with 2.5D digital depth, clear composition, premium SaaS mood, hopeful and action-oriented.

No readable text, no logos, no fake UI text.
```

---

### 5.2 PULSE Main Wall Frame

#### 용도

* PULSE 대시보드 화면을 넣을 메인 액자

#### 권장 비율

* 16:9
* 1:1

#### 프롬프트

```text
Create a large exhibition frame scene for the PULSE project.

Show one dominant floating gallery frame intended to hold a dashboard screenshot, with a clean white structure, deep royal blue side accents, and a very small orange action highlight. Around it, place a few abstract review bubbles, chart bars, persona cards, and marketing action shapes.

The center frame should remain blank or visually neutral so a real dashboard screenshot can be inserted later. The overall feeling should be professional, bright, clear, and hopeful.

Style:
professional product display, white gallery, paper collage + 2.5D mixed style, soft shadows, premium clean SaaS exhibition.

No readable text, no logos.
```

---

### 5.3 PULSE Object Pack

#### 용도

* PULSE 룸에 떠다니는 오브젝트
* 투명 PNG 에셋으로 분리 가능하게 제작

#### 권장 비율

* 1:1
* Transparent background

#### 프롬프트

```text
Create a transparent object pack for the PULSE project.

Include separate floating objects representing:
review bubbles,
bar charts,
line charts,
customer persona cards,
a megaphone,
a restaurant sign,
a reels or short-video card,
a map pin,
data cards,
marketing action cards.

Use colors:
#002B7A, pale blue, white, #FF5A36 as a small accent.

The objects should feel professional, bright, useful, and optimistic. They should look like pieces of a product story about turning data into action.

Style:
paper cut collage mixed with clean 2.5D objects, handmade but controlled edges, professional and product-focused.

No readable text, no logos.
```

---

### 5.4 PULSE Data-to-Action Transition

#### 용도

* 리뷰 분석에서 홍보 실행으로 이어지는 장면

#### 권장 비율

* 16:9
* 9:16

#### 프롬프트

```text
Create an abstract storytelling image for the PULSE case study showing data turning into action.

Start with scattered review bubbles, chart fragments, and customer data cards, and visually transform them into a clear marketing action card or execution-oriented object. The scene should communicate analysis becoming a helpful next step.

Use a clean white background with deep blue information elements and a small orange action highlight. The feeling should be bright, hopeful, and practical, as if confusing data is becoming clear guidance.

Style:
paper collage + 2.5D, scroll-storytelling visual, premium product case study mood.

No readable text, no logos.
```

---

## 6. PickFit Room 이미지 프롬프트

---

### 6.1 PickFit Room Background

#### 용도

* PickFit 프로젝트 방 배경

#### 권장 비율

* 16:9
* 9:16

#### 프롬프트

```text
Create a project room background for PickFit, a fashion decision app.

The room should feel bright, brand-driven, stylish, clean, and hopeful. Use a white-to-pale-violet gallery space with strong #4D5EFF accents, lime #E3FF5D highlight shapes, and black structural details. Include floating smartphone frames, outfit cards, fashion tags, and hanger-inspired abstract shapes.

The room should feel like a fashion-tech exhibition room that helps users decide faster with confidence.

Colors:
#4D5EFF, #E3FF5D, #12141A, white, pale violet-blue.

Style:
paper cut collage mixed with 2.5D digital depth, premium fashion-tech portfolio mood, handmade but controlled edges, energetic and optimistic.

No readable text, no logos.
```

---

### 6.2 PickFit Smartphone Frame Scene

#### 용도

* PickFit 실제 앱 화면 5장을 넣을 스마트폰 프레임

#### 권장 비율

* 16:9
* 9:16
* 1:1

#### 프롬프트

```text
Create a smartphone showcase scene for the PickFit project.

Show two floating smartphone mockup frames in a clean gallery-like space. The devices should be positioned dynamically with soft 2.5D perspective. Around them, place lime accent circles, violet-blue shapes, fashion tags, and hanger-inspired objects.

Leave the phone screens blank or visually neutral so real app screenshots can later be inserted. The mood should be bright, confident, and stylish, not cold or gloomy.

Style:
premium mobile app showcase, white gallery, paper collage + 2.5D mixed style, stylish but clean, optimistic fashion-tech energy.

No readable text, no logos, no fake app labels.
```

---

### 6.3 PickFit Object Pack

#### 용도

* PickFit 룸 오브젝트
* 투명 배경 에셋

#### 권장 비율

* 1:1
* Transparent background

#### 프롬프트

```text
Create a transparent object pack for PickFit, a fashion decision app.

Include separate objects such as:
hanger-inspired abstract forms,
outfit cards,
selection buttons,
fashion tags,
price tags,
smartphone silhouettes,
small clothing pieces,
color chips,
recommendation cards,
comparison cards.

Use colors:
#4D5EFF, #E3FF5D, #12141A, white.

The objects should feel bright, stylish, helpful, and optimistic. They should represent reducing decision fatigue and helping users choose with confidence.

Style:
paper cut collage mixed with 2.5D depth, handmade but clean, fashionable and modern, not childish.

No readable text, no logos.
```

---

### 6.4 PickFit Choice-to-Recommendation Transition

#### 용도

* 선택지 과다에서 추천 결과로 좁혀지는 장면

#### 권장 비율

* 16:9
* 9:16

#### 프롬프트

```text
Create a visual transition for the PickFit case study showing decision support.

Start with many scattered fashion item cards and style options, then visually narrow them into a few clear outfit recommendation cards. The image should communicate moving from too many choices into a guided recommendation.

Use a clean off-white base with strong violet-blue and lime accents. The feeling should be hopeful and relieving, as if the user no longer feels overwhelmed and can make a confident decision.

Style:
paper collage + 2.5D mixed visual, scroll storytelling image, premium fashion-tech portfolio mood.

No readable text, no logos.
```

---

## 7. LikeLion Room 이미지 프롬프트

---

### 7.1 LikeLion Room Background

#### 용도

* LikeLion 기획·UX/UI 커리큘럼 방 배경

#### 권장 비율

* 16:9
* 9:16

#### 프롬프트

```text
Create a project room background for a university UX/UI curriculum and operation project inspired by LikeLion activities.

The room should feel educational, structured, organized, friendly, bright, and hopeful, but not childish. Use a pale blue-white base with strong blue accents and small orange highlights. Show wall areas prepared for curriculum cards, lecture slides, FAQ cards, card news posters, and session photos.

The atmosphere should feel like a positive learning studio where beginners can turn vague ideas into clear project flows.

Colors:
#F4F8FF, #E6F2FF, #0060C6, #5BA3FF, #FF6000, white.

Style:
clean educational exhibition room, paper cut collage mixed with 2.5D spatial depth, readable, organized, optimistic.

No readable text, no logos.
```

---

### 7.2 LikeLion Curriculum Wall

#### 용도

* 커리큘럼 구조를 보여주는 벽면 이미지

#### 권장 비율

* 16:9
* 1:1

#### 프롬프트

```text
Create a structured curriculum wall scene for a university UX/UI education project.

Show a gallery-like wall composed of curriculum cards, lecture boards, FAQ-style cards, pinned notes, and structured information panels. The composition should feel clearly organized and educational, with pale blue, white, and blue as the main colors plus small orange highlights.

Keep the card contents blank or abstract so real material can be inserted later. The mood should be bright, encouraging, and hopeful, like a learning space where beginners can grow step by step.

Style:
paper cut collage + 2.5D depth, clean and professional educational mood, not childish.

No readable text, no logos.
```

---

### 7.3 LikeLion Object Pack

#### 용도

* LikeLion 룸에서 움직일 오브젝트
* 투명 배경 에셋

#### 권장 비율

* 1:1
* Transparent background

#### 프롬프트

```text
Create a transparent object pack for a university UX/UI education and operation project.

Include:
sticky notes,
lecture board panels,
checklist cards,
FAQ cards,
speech bubbles,
small lion mascot silhouette,
rocket,
curriculum step cards,
paper tabs,
gallery frame fragments.

Use colors:
#0060C6, #5BA3FF, #E6F2FF, #FF6000, white.

The objects should feel bright, supportive, structured, and hopeful. They should represent learning, teamwork, curriculum, and project growth.

Style:
paper cut collage mixed with 2.5D, controlled handmade feeling, friendly but structured.

No readable text, no logos.
```

---

### 7.4 LikeLion Session Photo Frame Scene

#### 용도

* 실제 세션 활동 사진을 넣을 프레임

#### 권장 비율

* 16:9
* 1:1

#### 프롬프트

```text
Create a gallery frame scene designed to hold real session activity photos for a university UX/UI education project.

Show multiple clean exhibition photo frames on a pale blue-white wall with strong blue borders and small orange highlights. The frames should look ready to receive real photos later. Add a few supportive paper-collage objects such as pinned notes, small speech bubbles, checklist pieces, and curriculum cards.

The mood should feel bright, warm, energetic, and hopeful, like a real learning community.

Style:
clean gallery display for real photos, educational but premium, paper collage + 2.5D.

No readable text, no logos.
```

---

## 8. FLOW / Experience 이미지 프롬프트

---

### 8.1 FLOW Exhibition Wall

#### 용도

* FLOW 전시/조교 경험 섹션 배경

#### 권장 비율

* 16:9

#### 프롬프트

```text
Create an exhibition archive wall for the FLOW graduation exhibition project.

Use a clean white gallery setting with a sense of immersion and flow. Include abstract deep navy and bright blue curved ribbon-like forms, a few subtle silver geometric 3D objects, and one main poster frame area. The scene should feel like exhibition planning and visual direction, not like a product app room.

The mood should be bright, ambitious, and hopeful, like preparing a meaningful graduation exhibition.

Style:
clean exhibition identity visual, white gallery, paper collage mixed with subtle 2.5D depth, elegant and minimal.

No readable text, no logos.
```

---

### 8.2 FLOW Poster Frame Mockup

#### 용도

* 실제 FLOW 이미지 1장을 넣을 포스터 프레임

#### 권장 비율

* 9:16
* 16:9

#### 프롬프트

```text
Create a vertical poster frame mockup scene for a graduation exhibition concept.

Show one large poster frame in a clean gallery environment. Around it, place flowing blue ribbon-like forms and a few small silver geometric objects. The frame should be blank so a real poster design can be inserted later.

The scene should feel bright, clean, and hopeful, like an exhibition identity coming to life.

Style:
clean exhibition poster showcase, premium, white gallery, subtle paper collage and 2.5D depth.

No readable text, no logos.
```

---

### 8.3 Operation Archive Object Pack

#### 용도

* 조교, 전시 운영, 일정 관리 경험을 보여주는 오브젝트

#### 권장 비율

* 1:1
* Transparent background

#### 프롬프트

```text
Create a transparent background object pack representing academic assistant and exhibition operation work.

Include:
schedule cards,
checklist papers,
exhibition badges,
poster frame pieces,
calendar sheets,
small folders,
abstract blue flow ribbons,
simple operation boards.

Use white, navy, blue, pale blue, and subtle silver accents.

The objects should feel organized, bright, helpful, and professional. They should represent planning, operation, and exhibition coordination.

Style:
paper collage mixed with 2.5D depth, clean and premium, controlled handmade feeling.

No readable text, no logos.
```

---

## 9. Lab / AboutPM 이미지 프롬프트

---

### 9.1 AboutPM Graph Room

#### 용도

* AboutPM / Lab 섹션 메인 공간

#### 권장 비율

* 16:9
* 9:16

#### 프롬프트

```text
Create a dark but hopeful experimental graph room for AboutPM.

The space should feel like a knowledge graph environment inspired by connected notes and product thinking. Show floating nodes, connecting lines, document cards, small prompt cards, and planet-like knowledge objects. Use a near-black background with violet, cyan, lime, and white accents.

Even though the background is dark, the mood should feel curious, intelligent, energetic, and hopeful, not gloomy or depressing.

Style:
premium digital lab, paper collage mixed with 2.5D depth, intelligent and experimental, clean enough for a portfolio.

No readable text, no logos.
```

---

### 9.2 Prompt Workflow Object Pack

#### 용도

* Claude Workflow / AI Visual Prompt Lab 오브젝트

#### 권장 비율

* 1:1
* Transparent background

#### 프롬프트

```text
Create a transparent object pack for an AI-assisted workflow lab.

Include:
prompt cards,
document cards,
cursor arrows,
connected graph nodes,
terminal-like panels,
code blocks without readable text,
small checklist cards,
knowledge fragments,
workflow arrows.

Use colors:
near-black, white, violet, cyan, lime.

The objects should feel intelligent, optimistic, clean, and useful. They should represent AI-assisted production, not a chatbot.

Style:
paper collage + 2.5D, premium workflow tool mood, clean and experimental.

No readable text, no logos.
```

---

### 9.3 AI Visual Prompt Lab Object Pack

#### 용도

* 이미지 생성 실험/프롬프트 실험 섹션

#### 권장 비율

* 1:1
* Transparent background

#### 프롬프트

```text
Create a transparent object pack for an AI visual prompt lab.

Include:
small image frames,
prompt cards,
style chips,
color chips,
magic wand-like abstract tool,
cursor arrows,
paper fragments,
before-and-after frame pieces,
small gallery tiles.

Use off-white, violet, cyan, lime, blue, and black accents.

The mood should be playful, bright, experimental, and hopeful, but still professional.

Style:
paper cut collage mixed with 2.5D digital depth, controlled handmade edges, premium creative workflow style.

No readable text, no logos.
```

---

## 10. Thinking Archive 이미지 프롬프트

---

### 10.1 Editorial Writing Background

#### 용도

* Velog / Thinking Archive 섹션 배경

#### 권장 비율

* 16:9
* 1:1

#### 프롬프트

```text
Create a minimal editorial background for a thinking archive section in a portfolio website.

Use an off-white paper-like canvas with thin editorial divider lines, small paper tabs, subtle blue accents, and a clean magazine mood. Leave plenty of negative space for article titles and metadata.

The mood should feel thoughtful, bright, calm, and hopeful, like ideas being organized into writing.

No readable text, no logos.
```

---

### 10.2 Article Card Object Pack

#### 용도

* 글 카드 주변 오브젝트

#### 권장 비율

* 1:1
* Transparent background

#### 프롬프트

```text
Create a transparent background object pack for a thinking archive and blog section.

Include:
blank article cards,
paper tabs,
abstract quotation mark shapes,
bookmarks,
small note sheets,
thin divider lines,
small archive labels without text.

Use black, off-white, blue accent, and pale gray.

The objects should feel editorial, thoughtful, clean, and hopeful.

No readable text, no logos.
```

---

## 11. 공통 보조 에셋 프롬프트

---

### 11.1 Common Floating Paper Pack

#### 용도

* 전체 사이트 공통 오브젝트
* Hero, Corridor, Room, Footer에서 재사용

#### 권장 비율

* 1:1
* Transparent background

#### 프롬프트

```text
Create a transparent background pack of small floating paper collage shapes for an interactive portfolio website.

Include:
abstract rectangles,
torn strips,
rounded blobs,
arrows,
small dots,
folded tags,
frame corners,
soft paper fragments,
tiny tabs,
simple geometric pieces.

Use a mostly off-white base with blue, lime, orange, violet, and black accents.

The objects should feel bright, hopeful, handmade but controlled, and reusable across a portfolio website.

Style:
paper cut collage, premium, clean shadows, controlled handmade edges.

No text, no logos.
```

---

### 11.2 Gallery Frame Kit

#### 용도

* 실제 화면 캡처/사진/목업을 넣을 공통 프레임

#### 권장 비율

* 1:1
* 16:9
* Transparent background

#### 프롬프트

```text
Create a reusable gallery frame kit for an interactive portfolio website.

Include several empty frames:
large horizontal frame,
vertical poster frame,
smartphone frame placeholder,
small photo frame,
floating card frame,
rounded product screenshot frame.

Use clean white surfaces, soft shadows, subtle paper edges, and slight 2.5D depth. Keep the frames blank so real screenshots and photos can be inserted later.

The mood should be bright, premium, hopeful, and flexible.

No readable text, no logos.
```

---

### 11.3 Mobile Room Background Set

#### 용도

* 모바일 축약판 배경

#### 권장 비율

* 9:16

#### 프롬프트

```text
Create a set of vertical mobile-friendly project room backgrounds for an interactive portfolio.

Each background should feel like a simplified version of a project room:
one deep-blue professional product room,
one violet-blue and lime fashion-tech room,
one pale blue educational room.

Use clean white gallery space, soft 2.5D depth, simplified frames, and fewer objects than desktop. Keep enough empty space for real text and UI components.

The mood should be bright, hopeful, clean, and readable.

No readable text, no logos.
```

---

## 12. 실제 자료 삽입 기준

### 12.1 PULSE

사용할 실제 자료:

```text
대시보드 화면
리뷰 관리 화면
손님 분석 화면
홍보 영상 화면
인플루언서 매칭 화면
상권 분석 화면
목업 이미지
BERTopic / 페르소나 관련 자료
Adwise 관련 증빙 이미지
```

사용 방식:

```text
Main Wall:
대시보드

Floating Frames:
리뷰 관리
손님 분석
홍보 영상
인플루언서 매칭
상권 분석

Proof / Research:
BERTopic 페르소나
UX 소논문 최우수상
Adwise Origin
```

---

### 12.2 PickFit

사용할 실제 자료:

```text
실제 화면 5장
목업 이미지
디자인 시스템 이미지
AI 추천 구조 자료
```

사용 방식:

```text
Main Wall:
추천 결과 또는 스마트폰 목업

Floating Frames:
상황 선택
스타일 입력
추천 결과
비교 화면
디자인 시스템
```

---

### 12.3 LikeLion

사용할 실제 자료:

```text
카드뉴스
커리큘럼 자료
강의자료
세션 활동 원본 사진
운영/모집 자료
FAQ 자료
```

사용 방식:

```text
Main Wall:
커리큘럼 구조 또는 대표 카드뉴스

Photo Frames:
세션 활동 사진 원본

Floating Frames:
카드뉴스
강의자료
과제 설계
FAQ
운영 자료
```

---

### 12.4 FLOW

사용할 실제 자료:

```text
FLOW 이미지 1장
```

사용 방식:

```text
Poster Frame:
실제 FLOW 이미지 삽입
```

---

### 12.5 AboutPM

사용할 실제 자료:

```text
AboutPM 화면 2장
```

사용 방식:

```text
Lab Graph Room:
AboutPM 화면을 노드/그래프 공간 속 액자로 삽입
```

---

## 13. 이미지 비율 가이드

### 13.1 16:9

사용처:

```text
Hero
Corridor
Room Background
Room Transition
PULSE Room
PickFit Room
LikeLion Room
FLOW Wall
AboutPM Graph Room
```

### 13.2 9:16

사용처:

```text
모바일 Hero
모바일 Room Background
세로형 전환 이미지
FLOW Poster Frame
스마트폰 쇼케이스
```

### 13.3 1:1

사용처:

```text
오브젝트팩 미리보기
프레임 키트
메인 오브젝트
카드형 이미지
SNS/썸네일용
```

### 13.4 Transparent PNG

사용처:

```text
PULSE Object Pack
PickFit Object Pack
LikeLion Object Pack
Common Floating Paper Pack
Prompt Workflow Object Pack
Article Card Object Pack
Operation Archive Object Pack
```

---

## 14. 파일명 규칙

```text
hero_selfportrait_16x9_v1
hero_selfportrait_1x1_v1
hero_selfportrait_9x16_v1
hero_objectscene_16x9_v1

corridor_gallery_16x9_v1
transition_pulse_to_pickfit_16x9_v1
transition_pickfit_to_likelion_16x9_v1

pulse_room_bg_16x9_v1
pulse_room_bg_9x16_v1
pulse_mainwall_frame_16x9_v1
pulse_objectpack_transparent_v1
pulse_data_to_action_16x9_v1

pickfit_room_bg_16x9_v1
pickfit_room_bg_9x16_v1
pickfit_phoneframe_16x9_v1
pickfit_objectpack_transparent_v1
pickfit_choice_to_recommendation_16x9_v1

likelion_room_bg_16x9_v1
likelion_room_bg_9x16_v1
likelion_curriculumwall_16x9_v1
likelion_objectpack_transparent_v1
likelion_photoframe_16x9_v1

flow_wall_16x9_v1
flow_posterframe_9x16_v1
operation_archive_objectpack_transparent_v1

aboutpm_graphroom_16x9_v1
prompt_workflow_objectpack_transparent_v1
ai_visual_prompt_lab_objectpack_transparent_v1

thinking_archive_bg_16x9_v1
article_card_objectpack_transparent_v1
common_floating_paperpack_transparent_v1
gallery_frame_kit_transparent_v1
mobile_room_bg_9x16_v1
```

---

## 15. 제작 순서

### 15.1 1차 제작

```text
1. Hero 콜라주 자화상
2. Hero 오브젝트 씬
3. White Gallery Corridor
4. PULSE Room Background
5. PickFit Room Background
6. LikeLion Room Background
```

목적:

```text
전체 포트폴리오의 첫인상과 3개 핵심 룸 분위기 확정
```

---

### 15.2 2차 제작

```text
7. PULSE Object Pack
8. PickFit Object Pack
9. LikeLion Object Pack
10. AboutPM Graph Room
11. Common Floating Paper Pack
```

목적:

```text
룸 내부 움직임과 오브젝트 시스템 구축
```

---

### 15.3 3차 제작

```text
12. PULSE Main Wall Frame
13. PickFit Smartphone Frame Scene
14. LikeLion Curriculum Wall
15. LikeLion Session Photo Frame Scene
16. FLOW Exhibition Wall
17. FLOW Poster Frame Mockup
```

목적:

```text
실제 화면과 사진을 삽입할 프레임 제작
```

---

### 15.4 4차 제작

```text
18. Room Transition Portal A
19. Room Transition Portal B
20. PULSE Data-to-Action Transition
21. PickFit Choice-to-Recommendation Transition
22. Editorial Writing Background
23. Article Card Object Pack
24. Gallery Frame Kit
25. Mobile Room Background Set
```

목적:

```text
스크롤 전환, 모바일, Archive 보조 에셋 제작
```

---

## 16. 최종 체크리스트

### 16.1 스타일 체크

```text
[ ] 밝고 희망찬 분위기인가?
[ ] 무표정, 우울, 차가운 인상이 없는가?
[ ] 손맛은 있지만 조잡하지 않은가?
[ ] 종이 콜라주와 2.5D가 적절히 섞였는가?
[ ] #F8FAFC 베이스와 잘 어울리는가?
[ ] 프로젝트별 컬러가 명확한가?
```

### 16.2 구현 체크

```text
[ ] 텍스트가 이미지 안에 들어가지 않았는가?
[ ] 실제 UI 캡처를 넣을 빈 프레임이 있는가?
[ ] 오브젝트를 따로 움직일 수 있는가?
[ ] 16:9, 9:16, 1:1, 투명 배경이 구분되어 있는가?
[ ] 모바일 축약판에 사용할 이미지가 있는가?
```

### 16.3 프로젝트별 체크

```text
[ ] PULSE는 전문적이고 제품 중심인가?
[ ] PickFit은 브랜드성과 결정 지원이 보이는가?
[ ] LikeLion은 교육/운영/커리큘럼이 보이는가?
[ ] FLOW는 전시 기획/운영 경험이 보이는가?
[ ] Lab은 실험적이지만 우울하지 않은가?
[ ] Thinking Archive는 읽기 좋은 매거진 느낌인가?
```

---

## 17. 최종 요약

```text
TAEKYUNG WORKS의 이미지는 단순 장식이 아니라 공간을 만드는 에셋이다.

Hero는 사람보다 작업 세계를 보여준다.
PULSE는 데이터가 행동으로 바뀌는 제품 방이다.
PickFit은 선택지가 추천으로 정리되는 패션 결정 방이다.
LikeLion은 막연한 아이디어가 커리큘럼으로 정리되는 교육 방이다.
FLOW는 전시와 운영 경험을 보여주는 아카이브 월이다.
Lab은 AI와 지식 구조를 실험하는 밝은 작업실이다.

전체 이미지는 밝고 희망찬 분위기를 유지하며,
무표정하거나 우울한 인상은 배제한다.
```
