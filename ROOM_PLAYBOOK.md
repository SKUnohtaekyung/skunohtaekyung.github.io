# 룸 추가 플레이북 — 새 메인 프로젝트 룸 만들기

> 새 대표 프로젝트(룸)를 추가할 때 **코드 컴포넌트는 건드리지 않는다.**
> `src/data/projects.ts` + `src/data/rooms.ts`에 **데이터만** 추가하고, 이미지를 `public/`에 넣으면
> 랜딩(요약·Selected 블록)과 상세 룸이 자동으로 렌더된다. 컴파일러가 누락을 잡아준다.

관련 코드: 랜딩 = [src/pages/Landing.tsx](src/pages/Landing.tsx) · 상세 룸 = [src/pages/ProjectRoom.tsx](src/pages/ProjectRoom.tsx) (둘 다 `PROJECTS`/`ROOMS`를 `.map`으로 렌더, 수정 불필요).

---

## 1) `ProjectKey`에 키 추가 — [src/data/projects.ts](src/data/projects.ts)

```ts
export type ProjectKey = 'pulse' | 'pickfit' | 'likelion' | 'newkey'
```

이 한 줄이 안전장치다. `ROOMS: Record<ProjectKey, RoomData>`라서 `rooms.ts`에 `newkey` 룸을
채우지 않으면 **타입 에러**가 난다 → 빠뜨릴 수 없음.

## 2) `PROJECTS` 배열에 항목 추가 — 같은 파일

랜딩의 "대표 작업" 요약줄과 "Selected" 블록, 진입 전환에 쓰인다.

| 필드 | 필수 | 설명 |
|------|:--:|------|
| `key` | ✅ | 위에서 추가한 키 |
| `room` | ✅ | 순번 라벨 `'04'` 등 |
| `name` | ✅ | 표시명(영문 디스플레이) |
| `accent` / `ink` / `tone` / `tintSoft` | ✅ | 시그니처색·텍스트색·룸 배경 톤·랜딩 블록 배경 톤 |
| `role` / `summary` / `tagline` | ✅ | 역할 한 줄 · 요약 · 짧은 태그라인 |
| `anchorId` | ✅ | `'selected-newkey'` (요약줄 클릭 시 스크롤 타깃) |
| `tenSecond` (+`tenSecondCredit?`) | ✅ | 10초 요약 문장 |
| `problem` / `myCall` / `impact` | ✅ | 문제·핵심 판단·임팩트 |
| `previewImage` | ✅ | 랜딩 카드 대표 이미지 `{src, alt, caption}` |
| `proofChips` | ✅ | 핵심 증거 칩 배열 |
| `caseSummary` / `decision` / `verification` | ✅ | 케이스 요약·판단·검증 |
| `blockObjects?` | ⬜ | 랜딩 블록 배경 종이 조각 장식(보통 2개). **없으면 장식 생략** |
| `previewDetail?` | ⬜ | 카드 하단 미니맵 `{accent, label, rows:[k,v][]}`. 없으면 생략(LikeLion 커리큘럼맵이 예) |

> 색 주의: `ink`는 텍스트/제목색. PickFit처럼 액센트(라임)가 텍스트에 안 읽히면 `ink`를 별도 가독색으로 둔다.

## 3) `ROOMS`에 항목 추가 — [src/data/rooms.ts](src/data/rooms.ts)

`RoomData`의 **옵셔널 섹션들이 곧 룸 구성 메뉴다. 있으면 그 섹션이 렌더되고, 없으면 통째로 생략된다.**
필요한 것만 채우면 된다. 필수는 `key` / `entranceLine` / `mainWall` / `evidence` / `infoDock`뿐.

| 섹션(옵셔널) | 채우면 나오는 것 |
|------|------|
| `bgImage` / `mainWallFrame` | 룸 입구 배경 이미지 / 대표 화면 뒤 프레임 분위기 |
| `roomObjects` / `contentObjects` | 입구 우측 산포 장식 / 본문 좌우 마진 장식 |
| `entranceDetail` | 입구 보조 설명 문단 |
| `mainWallSize: 'compact'` / `evidenceGrid: 2\|3` | 대표 화면 폭 / 근거 그리드 열 수 |
| `casePanels` | "설계 구조" 3열 패널 |
| `aiUsage` | "AI 사용 방식" 블록(상단 네비에 'AI 사용' 버튼도 자동 추가) |
| `evidenceGroups` | 라벨 그룹 단위 근거(없으면 `evidence` 평면 배열을 단일 그룹으로) |
| `originStory` | 웹툰식 세로 내러티브 |
| `slideViewer` / `cardStack` | 세션 슬라이드 Peek 캐러셀 / 카드뉴스 겹침 콜라주 |
| `writingRefs` | 벨로그 연결 목록 |

**참고 예시:** `pulse` 항목이 가장 많은 섹션(casePanels·evidenceGroups·originStory)을 쓰니 복사 기준으로 좋다.
`likelion`은 slideViewer·cardStack·writingRefs 사용 예, `pickfit`은 aiUsage 사용 예.

## 4) 이미지 자산

- 경로: `public/images/evidence/<key>/...`(증거), `public/images/design-assets/...`(배경·프레임·오브젝트).
- 데이터의 `src`는 `/images/...` (루트 절대경로, `public` 생략).
- 자산을 추가/이동하면 **`manifest/` 카탈로그도 갱신**한다(CLAUDE.md §5).

## 5) 체크리스트

- [ ] `ProjectKey`에 키 추가 → `npm run typecheck`가 빠진 룸/필드를 잡아주는지 확인
- [ ] `PROJECTS` 항목(필수 필드 전부) + 필요 시 `blockObjects`/`previewDetail`
- [ ] `ROOMS` 항목(필수 5개 + 원하는 옵셔널 섹션)
- [ ] 이미지 `public/`에 배치, `src` 경로 일치, `alt`/`caption` 작성
- [ ] `manifest/` 갱신
- [ ] `npm run lint && npm run typecheck && npm run build` 통과
- [ ] `npm run dev`로 요약줄·Selected 블록·상세 룸 진입/뒤로/다음 전환 확인
