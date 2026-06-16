// About / 소개 섹션 데이터 (2026-06-13 신설) — 인물 포지셔닝 + 일하는 원칙(WHY/HOW/참여/신뢰) + 이력·인정(Recognition).
// 출처: 사용자 제공 'ABOUT ME' 디자인 + 이력 타임라인 이미지. a/b 답변(2026-06-13).
// 결정: 옛 수상(2018 드론·2021 게임기획 최우수상)은 제외(사용자 정정). 자격증·어학·학력은 이번 범위 외.
// 가드레일(§8): 원본 디자인의 블루 그라데이션은 미채택 — 흰 골격으로 번역.

export interface Profile {
  name: string
  romanized: string
  role: string
  /** 'PM을 희망하는 노태경입니다.' — 컴포넌트에서 name 기준으로 split해 강조 */
  headline: string
  portrait: string
  birthday: string
  mbti: string
  email: string
  phone: string
  github: string
  githubHandle: string
}

export const PROFILE: Profile = {
  name: '노태경',
  romanized: 'Noh Tae Kyung',
  role: 'PM · 서비스 기획',
  headline: '나의 일이 아닌, 우리의 일로 만드는 PM을 희망하는 노태경입니다.',
  portrait: '/images/증명사진.png',
  birthday: '2002.01.24',
  mbti: 'ENFJ',
  email: 'ntk9477@naver.com',
  phone: '010-5216-2804',
  github: 'https://github.com/SKUnohtaekyung',
  githubHandle: 'SKUnohtaekyung',
}

export interface Principle {
  /** 영문 키워드 (DEFINE / TRANSLATE / DECIDE) — 디스플레이 강조용 */
  en: string
  title: string
  body: string
  /** body 안에서 굵게 강조할 핵심 문구 (컴포넌트에서 split) */
  highlight: string
}

// 사용자 본인 언어. 협업 3가지(정의 → 전달 → 판단) + AI 관점 1가지(내러티브 척추: AI 90점 / 마지막 10점은 사람). 2026-06-13.
export const PRINCIPLES: Principle[] = [
  {
    en: 'DEFINE',
    title: '문제를 선명하게 정의한다',
    body: '협업이 꼬이는 가장 큰 이유는, 무엇을 해결하려는지가 사람마다 다르게 이해되기 때문이라고 생각합니다. 그래서 PM은 의견을 많이 내는 사람이 아니라, 문제를 선명하게 정의해 팀의 시선을 맞추는 사람이어야 한다고 생각합니다.',
    highlight: '문제를 선명하게 정의해 팀의 시선을 맞추는 사람',
  },
  {
    en: 'TRANSLATE',
    title: '이해할 수 있게 전달한다',
    body: '좋은 생각도 디자이너·개발자·운영·마케팅이 함께 이해할 언어로 전달되지 않으면 협업에서 힘을 잃습니다. PM에게 중요한 건 말을 잘하는 게 아니라, 복잡한 내용을 구조적으로 정리해 상대가 바로 이해하게 전달하는 힘이라고 생각합니다.',
    highlight: '복잡한 내용을 구조적으로 정리해 상대가 바로 이해하게 전달하는 힘',
  },
  {
    en: 'DECIDE',
    title: '조율하고 결정한다',
    body: '유저 관점, 개발 리소스, 일정, 비즈니스 우선순위는 늘 충돌합니다. 그때 PM은 의견을 듣고 끝나는 사람이 아니라, 기준을 세워 조율하고 결정하는 사람이어야 한다고 생각합니다. 그 기준을 어떻게 세우고 팀에 어떻게 설득할지까지 설명할 수 있어야 합니다.',
    highlight: '기준을 세워 조율하고 결정하는 사람',
  },
  {
    en: 'JUDGE WITH AI',
    title: 'AI를 쓰되, 마지막 판단은 사람이 한다',
    body: 'AI는 빠르게 90점짜리 답을 만들어 줍니다. 하지만 그 답이 정말 사용자에게 맞는지, 무엇을 더하고 덜어낼지는 결국 사람이 판단해야 한다고 생각합니다. 저는 AI에게 더 나은 질문을 던져 90점을 끌어올리고, 마지막 10점은 직접 해본 경험으로 채웁니다.',
    highlight: '마지막 10점은 직접 해본 경험으로 채웁니다',
  },
]

export interface TimelineLink {
  label: string
  anchorId: string
  color: string
  /** 링크 꼬리말 — 기본 '에서 활용'. (예: FLOW는 '로 이어짐') */
  suffix?: string
}

export interface TimelineItem {
  title: string
  org?: string
  period: string
  /** 수상/성과 배지 — '최우수상' · '상위 14%' */
  award?: string
  /** 한 줄 의미 (사용자 본인 언어) */
  note?: string
  /** 현재 진행 중인 활동 — '진행 중' 배지 표시 */
  ongoing?: boolean
  /** 관련 프로젝트로 연결 ('나열식' 회피 — 인정과 작업을 잇는다) */
  link?: TimelineLink
}

export interface TimelineGroup {
  year: string
  items: TimelineItem[]
}

const PULSE_LINK: TimelineLink = { label: 'PULSE', anchorId: 'selected-pulse', color: '#002B7A' }
const LIKELION_LINK: TimelineLink = { label: 'LikeLion', anchorId: 'selected-likelion', color: '#0060C6' }
const FLOW_LINK: TimelineLink = { label: '졸업전시 FLOW', anchorId: 'side', color: '#0A0A0A', suffix: '로 이어짐' }

export const TIMELINE: TimelineGroup[] = [
  {
    year: '2025–2026',
    items: [
      {
        title: '캡스톤디자인 경진대회',
        org: '성결대학교 · 졸업 캡스톤 연구',
        award: '최우수상',
        period: '2026 상반기',
        note: '숏폼 광고의 장면 흐름(Hook·Showcase·Highlight·CTA)을 AIDA 모델로 재구조화하고, DSPy 기반 프롬프트 생성 프레임워크로 설계·검증했다.',
        link: PULSE_LINK,
      },
      {
        title: '멋쟁이사자처럼 14기 기획·디자인 파트장',
        org: '멋쟁이사자처럼 성결대학교 기획 운영진',
        period: '2025.12 – 2026.12',
        ongoing: true,
        note: '초보자가 PM·UX 사고를 익히도록 1년 커리큘럼을 직접 설계하고 강의했다.',
        link: LIKELION_LINK,
      },
      {
        title: '사용자 경험(UX) 디자인 소논문 경진대회',
        org: '성결대학교',
        award: '최우수상',
        period: '2025 하반기',
        note: '졸업작품 팀원들과, AI가 뽑은 군집을 사람이 읽는 페르소나로 번역하는 방법을 검증받았다.',
        link: PULSE_LINK,
      },
      {
        title: '멋쟁이사자처럼 13기 중앙 해커톤',
        org: '5인 팀(백엔드 2·프론트 2·디자인 1) · 기획/프론트 담당',
        award: '상위 14%',
        period: '2025.08',
        note: 'AI 광고 실행이라는 문제를 처음 잡았고, 이게 PULSE의 씨앗이 됐다. (팀 Adwise)',
        link: PULSE_LINK,
      },
      {
        title: '멋쟁이사자처럼 13기 프론트엔드 아기사자',
        org: '성결대학교',
        period: '2025.03 – 11',
      },
      {
        title: '성결대학교 미디어소프트웨어학과 조교',
        org: '성결대학교 미디어소프트웨어학과',
        period: '2025.03 – 2026.08',
        ongoing: true,
        note: '행정 보조와 학과 행사 기획·운영을 맡았고, 졸업작품 전시회 FLOW의 배너 디자인 컨셉을 직접 잡았다.',
        link: FLOW_LINK,
      },
      {
        title: '미디어소프트웨어학과 학생회 기획국장',
        org: '성결대학교',
        period: '2025.03 – 12',
      },
    ],
  },
  {
    year: '2022',
    items: [
      {
        title: '미디어소프트웨어학과 학생회 기획부장',
        org: '성결대학교',
        period: '2022.03 – 12',
      },
    ],
  },
]
