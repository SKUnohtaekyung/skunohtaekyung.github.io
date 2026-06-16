export type ProjectKey = 'pulse' | 'pickfit' | 'likelion'

/** 랜딩 SelectedBlock의 tint 배경 위에 흩뿌리는 종이 조각 장식 1개의 배치 설정.
 *  (FloatingObject로 렌더 — tier/딜레이는 Landing이 채움) */
export interface BlockObjCfg {
  src: string
  width: number
  opacity: number
  rotate: number
  top?: string
  bottom?: string
  left?: string
  right?: string
}

/** 랜딩 프리뷰 카드 하단에 붙는 선택적 미니맵(예: 커리큘럼 단계 표).
 *  없으면 렌더 생략. accent는 이 미니맵 전용 강조색(프로젝트 ink와 별개로 지정 가능). */
export interface PreviewDetail {
  accent: string
  label: string
  rows: [string, string][]
}

export interface Project {
  key: ProjectKey
  room: string
  name: string
  accent: string
  ink: string
  tone: string
  tintSoft: string
  role: string
  summary: string
  anchorId: string
  tagline: string
  tenSecond: string
  tenSecondCredit?: string
  problem: string
  myCall: string
  impact: string
  previewImage: {
    src: string
    alt: string
    caption: string
  }
  proofChips: string[]
  caseSummary: string
  decision: string
  verification: string
  /** 랜딩 SelectedBlock tint 배경 위 종이 조각 장식(보통 2개). 없으면 장식 생략. */
  blockObjects?: BlockObjCfg[]
  /** 랜딩 프리뷰 카드 하단 미니맵. 없으면 생략(프로젝트마다 선택). */
  previewDetail?: PreviewDetail
}

export const PROJECTS: Project[] = [
  {
    key: 'pulse',
    room: '01',
    name: 'PULSE',
    accent: '#002B7A',
    ink: '#002B7A',
    tone: '#EAF1FB',
    tintSoft: '#F1F5FC',
    role: '팀 리드 · PM·UX 기획 · 프론트 구현 · 졸업작품 4인',
    summary:
      '졸업작품에서 팀 리더를 맡아 기획·UI/UX·프론트를 직접 담당했습니다. 리뷰와 고객 데이터를 보고 사장님이 바로 홍보 행동을 고를 수 있는 흐름을 설계했습니다.',
    anchorId: 'selected-pulse',
    tagline: '데이터→실행',
    tenSecond: '외식업 사장님의 리뷰·고객 데이터를 홍보 실행까지 잇는 AI 마케팅 비서',
    tenSecondCredit: '팀 리드·졸업작품',
    problem:
      '외식업 사장님은 리뷰·손님·홍보를 따로 관리하고, 무엇을 보고 어떤 홍보를 해야 할지 정하기 어렵습니다.',
    myCall:
      "사장님이 데이터를 본 뒤 '다음 홍보 행동'까지 바로 고를 수 있도록 대시보드의 흐름을 짰습니다.",
    impact:
      '리뷰→페르소나→홍보 실행을 하나로 잇는 제품을 0→1로 만들어 배포 직전 단계까지 진행했습니다.',
    previewImage: {
      src: '/images/evidence/pulse/banner.png',
      alt: 'PULSE 브랜드 배너 — 외식업 자영업자를 위한 고객 분석 기반 홍보 실행 플랫폼 소개와 PULSE 로고, 맥북 목업',
      caption: '고객 데이터 분석부터 홍보 실행까지, 외식업 마케팅 플랫폼 PULSE',
    },
    proofChips: ['Team Leader', 'PM', 'UI/UX', 'Frontend'],
    caseSummary:
      '외식업 사장님이 흩어진 리뷰·고객 데이터를 보고 바로 홍보 행동을 정할 수 있게 만든 AI 마케팅 비서.',
    decision: '첫 화면에서 “오늘 무엇을 하면 좋은지”부터 보여주도록 흐름을 잡았습니다.',
    verification:
      "리뷰·고객 데이터를 '오늘의 홍보 행동'까지 잇는 문제로 정의하고, 광고 장면 구조 연구와 Adwise 해커톤 경험을 PULSE 기획의 근거로 확장했습니다.",
    blockObjects: [
      { src: '/images/design-assets/objects/common/common-object-003.png', width: 162, opacity: 0.42, rotate: 18, top: '7%', right: '2%' },
      { src: '/images/design-assets/objects/common/common-object-012.png', width: 215, opacity: 0.26, rotate: -4, bottom: '12%', right: '10%' },
    ],
  },
  {
    key: 'pickfit',
    room: '02',
    name: 'PickFit',
    accent: '#E3FF5D',
    ink: '#4D5EFF',
    tone: '#E9ECFF',
    tintSoft: '#FBFDEA',
    role: '개인 프로젝트 · 기획·디자인·FE·BE·DB 단독 · AI Workflow',
    summary:
      '선택 피로를 줄이는 AI 코디 추천 서비스를 기획, 브랜드, 디자인 시스템, 프론트·백엔드·DB까지 직접 설계하고 구현했습니다.',
    anchorId: 'selected-pickfit',
    tagline: '선택→결정',
    tenSecond: '고르는 시간을 줄여 결정에 집중하게 하는 AI 코디 추천',
    tenSecondCredit: '개인·풀스택·AI운영',
    problem:
      "패션 쇼핑은 상품·리뷰·코디·핏이 너무 많아, 고르는 게 '결정 노동'이 됩니다.",
    myCall:
      "상황과 취향을 말하면 AI가 후보를 좁혀주는 '위임형 추천' 흐름으로 기획했습니다.",
    impact:
      '상황 선택→스타일 입력→AI 추천→구성 아이템까지의 제품 흐름과 독립 디자인 시스템, 추천 입력/출력 검증 구조까지 제작했습니다.',
    previewImage: {
      src: '/images/evidence/pickfit/brand_banner.png',
      alt: 'PickFit 브랜드 배너 — 로고, 상황에 맞는 코디를 빠르게 골라주는 패션 결정 앱 태그라인, 아이폰 목업 2대',
      caption: '상황에 맞는 코디를 빠르게 골라주는 패션 결정 앱, PickFit',
    },
    proofChips: ['1인 풀스택', 'PM/UX 기획', '독립 디자인 시스템', 'AI Workflow', 'Harness'],
    caseSummary:
      '옷을 고르는 사용자가 선택에 확신을 갖도록 만든 AI 코디 추천 서비스.',
    decision:
      '상황과 조건을 말하면 후보를 좁혀주는 위임형 추천으로 방향을 잡았습니다. 제작 과정에선 prompt·Skills·subagent·harness engineering을 설계와 검증에 썼고, 추천 결과가 실제로 화면에 들어갈 구조인지까지 확인했습니다.',
    verification:
      '기획 인사이트, 핵심 UI, 독립 디자인 시스템, 추천 입력/출력 검증까지 직접 만들어, 사용자의 결정 피로를 줄이는 제품으로 정리했습니다.',
    blockObjects: [
      { src: '/images/design-assets/objects/common/common-object-005.png', width: 148, opacity: 0.38, rotate: -12, bottom: '8%', left: '2%' },
      { src: '/images/design-assets/objects/common/common-object-025.png', width: 82, opacity: 0.28, rotate: 0, top: '20%', right: '5%' },
    ],
  },
  {
    key: 'likelion',
    room: '03',
    name: 'LikeLion',
    accent: '#FF6000',
    ink: '#FF6000',
    tone: '#E6F2FF',
    tintSoft: '#EEF6FF',
    role: '기획 파트장 · 멋쟁이사자처럼 14기 · 1년 커리큘럼 단독 설계',
    summary:
      '초보자에게 기획이란 무엇인지, 어떻게 생각하는지를 가르치기 위해 PM·UX 커리큘럼을 직접 설계했습니다. 개념부터 실전 흐름까지, 혼자 구성하고 강의했습니다.',
    anchorId: 'selected-likelion',
    tagline: '개념→흐름',
    tenSecond: '초보자를 위한 1년 PM·UX 커리큘럼, 기획 단독 설계·강의',
    problem:
      "초보자는 PM/UX 개념을 들어도 '다음에 뭘 하지?'를 실제 프로젝트 흐름으로 옮기지 못합니다.",
    myCall:
      "수강생이 '다음에 뭘 해야 하는지'를 알 수 있도록 문제→로직·상태→데이터·BM 순서로 커리큘럼을 설계했습니다.",
    impact:
      '막연한 아이디어를 결정 가능한 기획으로 잇는 1년 커리큘럼을 단독 설계해 직접 강의했습니다.',
    previewImage: {
      src: '/images/evidence/likelion/session_photo.jpg',
      alt: '멋쟁이사자처럼 세션 현장 — 노태경이 학생들 앞에서 Pain Point 실습을 지도하는 사진',
      caption: '학생들 앞에서 직접 강의하고 실습을 이끈 현장',
    },
    proofChips: ['PM', 'UIUX', '기획 파트장', 'Figma 운영보드', '과제/자료 설계'],
    caseSummary:
      '초보자가 PM·UX 사고를 실제 프로젝트 흐름으로 익히도록 설계한 교육·운영 PM 케이스.',
    decision:
      '문제 정의에서 회고와 문제 재정의까지 이어지는 4-Phase 학습 과정으로 설계했습니다.',
    verification:
      '커리큘럼 문서, 세션 사진, 운영진 스터디, 카드뉴스와 Figma 운영보드로 운영 증거를 남겼습니다.',
    blockObjects: [
      { src: '/images/design-assets/objects/common/common-object-002.png', width: 152, opacity: 0.42, rotate: -20, top: '5%', left: '1%' },
      { src: '/images/design-assets/objects/common/common-object-016.png', width: 78, opacity: 0.32, rotate: -6, bottom: '20%', right: '3%' },
    ],
    // 프리뷰 카드 하단 4단계 커리큘럼 미니맵(간소화). accent는 LikeLion 메인색 블루(#0060C6) — ink(오렌지)와 별개.
    previewDetail: {
      accent: '#0060C6',
      label: '4단계 커리큘럼',
      rows: [
        ['01', 'Why·Who·What·How'],
        ['02', '화면 로직·상태 설계'],
        ['03', '실전·데이터·비즈니스'],
        ['04', '회고·문제 재정의'],
      ],
    },
  },
]
