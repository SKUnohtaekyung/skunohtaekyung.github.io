export interface SideWorkImage {
  src: string
  alt: string
  caption: string
  kind?: 'wide' | 'portrait' | 'square'
  /** 프레임 높이 override — 미지정 시 primary=lg, supporting=sm */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** supporting 그리드에서 한 줄 전체 차지 (와이드 이미지용) */
  span?: 'full'
  /** 이미지 최대 폭(px) — 세로가 긴 포트레이트 이미지를 좁게 유지할 때 사용 */
  maxW?: number
}

export interface SideWorkLink {
  label: string
  href: string
}

export interface SideWork {
  title: string
  eyebrow: string
  oneLine: string
  period?: string
  motif: string
  chips: string[]
  question: string
  approach: string
  process: string
  output: string
  learning: string
  backgroundImage?: SideWorkImage
  backgroundPosition?: 'left' | 'right' | 'center'
  primaryImage: SideWorkImage
  supportingImages: SideWorkImage[]
  links?: SideWorkLink[]
}

export const SIDE_WORKS: SideWork[] = [
  {
    title: 'FLOW',
    eyebrow: 'Visual Direction · Exhibition UX',
    period: '학과 조교 1년 반 · 졸업 전시 시각 방향',
    motif: 'Mihaly Csikszentmihalyi의 Flow',
    oneLine:
      '학과 조교 1년 반의 운영 경험과 HCI에서 배운 Flow 이론을 바탕으로, 졸업 전시 주제를 관람자가 이해할 수 있는 시각 흐름으로 번역했습니다.',
    chips: ['HCI', 'DESIGN', 'UX', '기획', 'Visual Direction'],
    question: '추상적인 전시 주제 FLOW를 관람 가능한 경험 언어로 어떻게 바꿀까?',
    approach:
      'Creator Flow와 User Flow를 나눠 창작자의 몰입과 관람자의 이동 흐름을 함께 해석했습니다. Flow 이론의 명확한 목표, 즉각적 피드백, 도전과 기술의 균형을 전시 경험의 리듬으로 번역했습니다.',
    process:
      '학과 조교로 1년 반 동안 전시 운영과 학과 커뮤니케이션을 가까이 보며, 전시가 단순 결과물 진열이 아니라 창작자와 관람자가 만나는 흐름이라는 관점을 잡았습니다.',
    output: '컨셉 보드, 포스터·배너 키비주얼, 전시 공간 연출 방향을 정리했습니다.',
    learning:
      '좋은 비주얼은 장식이 아니라, 관람자가 주제를 따라가게 만드는 경험의 리듬을 설계하는 일이라는 걸 알게 됐습니다.',
    backgroundImage: {
      src: '/images/design-assets/rooms/flow_wall.png',
      alt: 'FLOW 전시 공간에 파란 리본 그래픽과 포스터가 배치된 갤러리 이미지',
      caption: '전시 공간 연출',
      kind: 'wide',
    },
    backgroundPosition: 'left',
    primaryImage: {
      src: '/images/side/flow_concept_board.png',
      alt: 'Creator Flow와 User Flow 개념, 색상 가이드가 정리된 FLOW 컨셉 보드',
      caption: '졸업전시회 컨셉보드',
      kind: 'portrait',
      size: 'xl',
      maxW: 480,
    },
    supportingImages: [
      {
        src: '/images/side/flow_poster_banner.png',
        alt: '파란 곡선 리본 그래픽과 졸업 전시 정보가 들어간 FLOW 포스터와 배너',
        caption: '포스터·배너 키비주얼',
        kind: 'portrait',
        size: 'lg',
      },
    ],
  },
  {
    title: 'AboutPM',
    eyebrow: 'Knowledge Structure · Interaction',
    period: '개인 실험 · PM 지식 구조화',
    motif: 'Obsidian graph view / backlinks / internal links',
    oneLine:
      'Obsidian의 연결형 노트와 그래프 뷰를 모티브로, PM 지식을 읽는 자료가 아니라 탐색 가능한 지식 지도로 만들었습니다.',
    chips: ['Obsidian Motif', 'Knowledge Graph', '3D Interaction', 'PM Learning'],
    question: 'PM 개념 사이의 관계를 어떻게 한눈에 탐색하게 만들까?',
    approach:
      'Obsidian처럼 개념을 독립된 글이 아니라 서로 연결된 지식 단위로 보고, PM 역할·Product/Project 차이·Business/Tech 관계를 노드와 챕터 구조로 연결했습니다.',
    process:
      'Internal links, backlinks, graph view에서 얻은 아이디어를 바탕으로 지식의 전체 지도와 현재 개념의 주변 맥락을 함께 보여주는 방향으로 구성했습니다.',
    output: '3D 노드 그래프, PM 세계관 상세 화면, GitHub 공개 산출물을 남겼습니다.',
    learning:
      '지식을 많이 아는 것과 탐색 가능한 구조로 바꾸는 것은 다르며, 지식 구조화도 UX 설계의 일부라는 것을 배웠습니다.',
    backgroundImage: {
      src: '/images/design-assets/rooms/aboutpm_graphroom.png',
      alt: '어두운 공간 안에서 PM 역할 관계를 3D 그래프로 시각화한 AboutPM 그래프 룸',
      caption: '관계 구조를 공간으로 확장한 그래프 룸',
      kind: 'wide',
    },
    backgroundPosition: 'center',
    primaryImage: {
      src: '/images/side/aboutpm_graph.png',
      alt: 'PM 지식을 보라색 3D 노드 그래프로 탐색하는 AboutPM 메인 화면',
      caption: 'PM 지식 노드 그래프',
      kind: 'wide',
    },
    supportingImages: [
      {
        src: '/images/side/aboutpm_world.png',
        alt: 'PM의 관계와 역할, Product Manager와 Project Manager의 차이를 설명하는 AboutPM 상세 화면',
        caption: 'PM 세계관 상세 화면',
        kind: 'wide',
        size: 'lg',
        span: 'full',
      },
    ],
    links: [
      {
        label: 'GitHub에서 보기',
        href: 'https://github.com/SKUnohtaekyung/AboutPM',
      },
    ],
  },
]
