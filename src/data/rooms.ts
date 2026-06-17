import type { ProjectKey } from './projects'

export interface EvidenceItem {
  src: string
  alt: string
  caption: string
  layout?: 'wide' | 'compact'
}

export interface EvidenceGroup {
  label: string
  desc?: string
  items: EvidenceItem[]
}

/** 원점 스토리 — 웹툰식 세로 내러티브 비트(원점→검증→전환→확장). 이미지는 있는 비트만. */
export interface OriginBeat {
  eyebrow: string
  title: string
  body: string
  image?: EvidenceItem
}

export interface OriginStory {
  label: string
  beats: OriginBeat[]
}

export interface AiUsageBlock {
  /** 짧은 한글 단계명 (프로세스 맵·번호 흐름용). 없으면 eyebrow로 대체. */
  step?: string
  eyebrow: string
  title: string
  usedWhen: string
  how: string[]
  output: string
}

export interface RoomObject {
  src: string
  width: number
  opacity: number
  rotate: number
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export interface RoomData {
  key: ProjectKey
  entranceLine: string
  entranceDetail?: string
  bgImage?: string
  mainWallFrame?: string
  roomObjects?: RoomObject[]
  contentObjects?: RoomObject[]
  mainWallSize?: 'default' | 'compact'
  mainWall: EvidenceItem
  /** 있으면 flat evidence 대신 라벨 그룹 단위로 렌더 (내러티브 흐름) */
  evidenceGroups?: EvidenceGroup[]
  /** 그리드 밀도 — mainWallSize와 독립 (기본: compact룸 3열, 그 외 2열) */
  evidenceGrid?: 2 | 3
  /** 겹침 콜라주 — "내가 만들었다"가 메시지인 카드뉴스류 (주제별 그룹 · 좌우 교번) */
  cardStack?: {
    label: string
    caption: string
    groups: { label: string; items: EvidenceItem[] }[]
  }
  /** 세션 슬라이드 뷰어 (Peek Carousel) */
  slideViewer?: {
    label: string
    items: { src: string; alt: string; caption: string }[]
  }
  /** 원점 스토리 — 웹툰식 세로 내러티브(있으면 별도 섹션으로 렌더) */
  originStory?: OriginStory
  evidence: EvidenceItem[]
  casePanels?: {
    eyebrow: string
    title: string
    body: string
  }[]
  /** 설계 구조를 줄글 대신 단계 다이어그램으로 시각화 (있으면 casePanels 대신 렌더) */
  phaseFlow?: {
    eyebrow: string
    title: string
    intro?: string
    phases: { no: string; name: string; desc: string }[]
  }
  aiUsage?: {
    intro: string
    blocks: AiUsageBlock[]
  }
  writingRefs?: {
    title: string
    source: string
    summary: string
    application: string
  }[]
  infoDock: {
    problem: string | string[]
    insight: string | string[]
    role: string | string[]
    coreFlow: string | string[]
    output: string | string[]
    verification: string | string[]
    uxWritingPoint: string | string[]
    learning: string | string[]
  }
}

export const ROOMS: Record<ProjectKey, RoomData> = {
  pulse: {
    key: 'pulse',
    bgImage: '/images/design-assets/rooms/pulse_room_bg.png',
    mainWallFrame: '/images/design-assets/rooms/pulse_mainwall_frame.png',
    roomObjects: [
      { src: '/images/design-assets/objects/pulse/pulse-object-002.png', width: 200, opacity: 0.82, rotate: -4, top: '8%', right: '3%' },
      { src: '/images/design-assets/objects/pulse/pulse-object-010.png', width: 130, opacity: 0.75, rotate:  7, top: '30%', right: '22%' },
      { src: '/images/design-assets/objects/pulse/pulse-object-005.png', width: 185, opacity: 0.80, rotate:  2, top: '55%', right: '4%' },
      { src: '/images/design-assets/objects/pulse/pulse-object-001.png', width: 115, opacity: 0.72, rotate: -12, bottom: '12%', right: '28%' },
      { src: '/images/design-assets/objects/pulse/pulse-object-003.png', width: 125, opacity: 0.65, rotate:  5, top: '15%', right: '32%' },
    ],
    contentObjects: [
      { src: '/images/design-assets/objects/pulse/pulse-object-012.png', width: 130, opacity: 0.55, rotate:  5, top:  '5%', right: '0' },
      { src: '/images/design-assets/objects/pulse/pulse-object-011.png', width: 110, opacity: 0.48, rotate: -6, top: '12%', left:  '0' },
      { src: '/images/design-assets/objects/pulse/pulse-object-013.png', width:  95, opacity: 0.50, rotate: -8, top: '20%', left:  '0' },
      { src: '/images/design-assets/objects/pulse/pulse-object-015.png', width: 130, opacity: 0.50, rotate:  4, top: '29%', right: '0' },
      { src: '/images/design-assets/objects/pulse/pulse-object-009.png', width: 140, opacity: 0.52, rotate:  3, top: '38%', right: '0' },
      { src: '/images/design-assets/objects/pulse/pulse-object-019.png', width: 100, opacity: 0.45, rotate:  9, top: '47%', left:  '0' },
      { src: '/images/design-assets/objects/pulse/pulse-object-016.png', width: 130, opacity: 0.48, rotate: -5, top: '56%', left:  '0' },
      { src: '/images/design-assets/objects/pulse/pulse-object-021.png', width: 140, opacity: 0.48, rotate: -3, top: '65%', right: '0' },
      { src: '/images/design-assets/objects/pulse/pulse-object-017.png', width: 110, opacity: 0.50, rotate:  7, top: '74%', right: '0' },
    ],
    entranceLine:
      '외식업 사장님이 리뷰와 고객 데이터를 보고 오늘의 홍보 행동까지 정하도록 돕는 AI 마케팅 비서입니다.',
    entranceDetail:
      '리뷰 감성 분석 → 핵심 인사이트 → 오늘의 행동 제안까지, 데이터를 실행으로 잇는 흐름을 PM으로서 처음부터 끝까지 설계했습니다.',
    mainWall: {
      src: '/images/evidence/pulse/dashboard.png',
      alt: 'PULSE 대시보드 화면 — 이번 주 리뷰 성과, 프로필 방문, 오늘의 기회 신호, 손님 데이터 변화 차트',
      caption: '데이터를 다음 홍보 행동까지 연결하는 대시보드',
    },
    casePanels: [
      {
        eyebrow: 'problem framing',
        title: '있는 정보를 행동으로 잇는 흐름이 없었다',
        body:
          '사장님에게 리뷰·손님·매출 정보는 이미 충분했습니다. 막힌 지점은 그 정보를 보고 “오늘 무엇을 할지”로 옮겨가는 흐름이었습니다. 그래서 첫 화면에 분석 수치보다 오늘의 행동 제안을 먼저 올렸습니다.',
      },
      {
        eyebrow: 'role & contribution',
        title: 'PM이자 팀 리드로, 기획부터 프론트 구현까지',
        body:
          '문제 정의·사용자 흐름·화면 기획을 주도하고, 주요 프론트엔드 구현과 발표자료 제작·일정 관리까지 맡았습니다. AI·데이터 파이프라인은 팀원과 협업해 제품 흐름에 연결했습니다.',
      },
      {
        eyebrow: 'ux writing',
        title: '"오늘의 기회 신호"처럼 — 사장님이 읽는 언어로',
        body:
          'AI 분석 결과를 수치로만 두지 않고, “오늘 손님이 많을 것 같아요. 점심 홍보를 지금 올려보세요.” 같은 행동 문장으로 옮겼습니다. 사용자 언어로 쓰인 카피가 곧 제품 UX였습니다.',
      },
    ],
    evidence: [],
    evidenceGroups: [
      {
        label: 'UI/UX — 실제로 작동하는 제품 화면',
        desc: '랜딩부터 분석·실행까지, 각 화면이 다음 행동을 안내하도록 설계한 핵심 UI 흐름입니다.',
        items: [
          {
            src: '/images/evidence/pulse/landing.png',
            alt: 'PULSE 랜딩 화면 — 사장님이 처음 마주하는 서비스 진입점',
            caption: '분석부터 영상 제작까지를 한 문장으로 약속하는 첫 화면',
          },
          {
            src: '/images/evidence/pulse/promo_video.png',
            alt: 'PULSE 홍보 영상 만들기 화면 — 음식 사진을 올리면 타겟 손님에 맞는 홍보 영상과 해시태그를 생성',
            caption: '사진 한 장이 곧바로 홍보 콘텐츠가 되는 영상 제작 화면',
          },
          {
            src: '/images/evidence/pulse/area_analysis.png',
            alt: 'PULSE 상권 분석 화면 — 위치 기반 외부 데이터를 연결해 행동 인사이트 제공',
            caption: '외부 데이터를 연결해 행동 인사이트를 만드는 상권 분석 화면',
          },
        ],
      },
      {
        label: '설계 판단 — 구조를 잡은 근거들',
        desc: '문제 정의부터 기술 구조까지, 각 판단이 왜 이 방향이었는지 근거를 담은 슬라이드들입니다.',
        items: [
          {
            src: '/images/evidence/pulse/problem_slide.png',
            alt: "PULSE 문제 정의 슬라이드 — '사장님은 마케팅이 필요한 게 아닙니다. 다만 실행할 여력이 없을 뿐입니다.'",
            caption: '사장님에게 부족한 건 정보가 아니라 실행할 여력이라는 문제 정의',
          },
          {
            src: '/images/evidence/pulse/review_to_persona.png',
            alt: 'PULSE 리뷰 기반 페르소나 추출 흐름 — 리뷰 수집, BERTopic 군집화, LLM 페르소나 생성, 고객여정지도 변환',
            caption: 'UX 소논문 연구를 제품 근거로 연결한 리뷰→페르소나→고객여정지도',
          },
          {
            src: '/images/evidence/pulse/target_persona.png',
            alt: 'PULSE 타겟 페르소나 슬라이드 — AI로 추출한 고객 유형과 특성 분석',
            caption: '추출한 손님 유형을 홍보 타겟 결정으로 연결하는 페르소나 설계',
          },
          {
            src: '/images/evidence/pulse/msa_pipeline.png',
            alt: 'PULSE MSA 구조 슬라이드 — Spring Boot와 FastAPI를 분리한 구조, Playwright·MongoDB·BERTopic·LLM 데이터 파이프라인',
            caption: '서비스 안정성과 AI 처리를 분리한 MSA 기술 구조',
          },
          {
            src: '/images/evidence/pulse/influencer_matching.png',
            alt: 'PULSE 인플루언서 매칭 슬라이드 — 가게와 타겟에 맞는 크리에이터를 자동 추천해 협찬을 연결하는 BM',
            caption: '분석 결과를 인플루언서 협찬과 매출로 연결하는 BM 수익 구조',
          },
        ],
      },
      {
        label: '연구 검증 — UX 소논문으로 증명한 근거',
        desc: '리뷰 기반 페르소나 추출 방법론을 학술 연구로 검증해, 제품 설계의 이론적 근거로 연결했습니다.',
        items: [
          {
            src: '/images/evidence/pulse/award_ux_paper.png',
            alt: '2025-2 사용자 경험 디자인 소논문 경진대회 최우수상 상장 — 리뷰 기반 페르소나 연구, 노태경',
            caption: '리뷰 기반 페르소나 연구로 받은 UX 소논문 최우수상',
          },
        ],
      },
    ],
    originStory: {
      label: '원점 — Adwise에서 PULSE로',
      beats: [
        {
          eyebrow: '01 원점',
          title: '멋사 13기 해커톤, Adwise',
          body:
            '“복잡한 광고는 AI로 쉽게, 수수료 비교는 차트로.” 소상공인의 광고 실행을 돕는 플랫폼을 프론트엔드로 구현하며, 사용자가 광고를 만든 다음 부딪히는 벽을 가까이서 봤습니다.',
          image: {
            src: '/images/evidence/pulse/adwise.png',
            alt: 'Adwise 프로젝트 카드 — 복잡한 광고는 AI로, 수수료 비교는 차트로 (멋사 13기 해커톤)',
            caption: 'Adwise — 복잡한 광고는 AI로 쉽게, 수수료 비교는 차트로',
          },
        },
        {
          eyebrow: '02 검증',
          title: '247팀 중 상위 약 14%',
          body:
            '팀 AIGEN으로 멋사 13기 중앙 해커톤 2차 예선에 진출했습니다. “이 방향이 통한다”는 첫 외부 신호였습니다.',
          image: {
            src: '/images/evidence/pulse/adwise_top14_proof.jpg',
            alt: '멋쟁이사자처럼 13기 중앙 해커톤 결과 — 팀 AIGEN, 전체 247팀 중 상위 약 14%',
            caption: '전체 247팀 중 상위 약 14% — 문제의식이 통한다는 첫 검증',
          },
        },
        {
          eyebrow: '03 전환',
          title: '쉽게 만드는 것만으론 부족했다',
          body:
            '광고를 쉽게 만들어줘도, 사용자는 “그래서 뭘 해야 하지?”에서 멈췄습니다. 데이터를 보고 다음 행동까지 결정하게 만드는 게 진짜 문제라고 판단했습니다.',
        },
        {
          eyebrow: '04 PULSE로',
          title: '그 문제의식이 PULSE가 되었다',
          body:
            'Adwise의 “쉽게 만들기”가 PULSE의 “보고 결정하기”로 확장되었습니다. 화면을 구현하던 자리에서, 그 흐름을 직접 설계하고 팀을 이끄는 자리로.',
        },
      ],
    },
    infoDock: {
      problem:
        '외식업 사장님은 리뷰, 고객 특성, 홍보 콘텐츠, 가게 현황을 따로 관리해야 합니다. 데이터는 흩어져 있고, 무엇을 보고 어떤 홍보 행동을 해야 하는지 결정하기 어렵습니다.',
      insight:
        '사장님에게 정보는 이미 있었고, 빠진 건 그 정보를 다음 행동으로 잇는 흐름이었습니다. 그래서 첫 화면의 우선순위를 “오늘 무엇을 할지”에 뒀습니다.',
      role:
        '팀 리드로 기획, 화면 흐름, 주요 프론트 구현, 발표자료 제작과 일정 관리를 담당했습니다. 데이터·AI 구조는 팀원과 협업해 제품 흐름에 연결했습니다.',
      coreFlow:
        '리뷰와 고객 데이터를 바탕으로 사장님이 가게 상황을 이해하고, 손님 유형을 파악하고, 홍보 콘텐츠 실행까지 이어갈 수 있게 돕는 흐름.',
      output:
        '리뷰→페르소나→홍보 실행을 하나로 잇는 제품을 0→1로 만들고 배포 직전 단계까지 진행했습니다.',
      verification:
        '리뷰 기반 손님 분석을 연구로 검증하고, Adwise 해커톤(상위 14%) 경험을 홍보 실행 흐름의 출발점으로 확장했습니다.',
      uxWritingPoint:
        '사장님이 이해하기 쉬운 지표명, 오늘의 기회 신호, 추천 이유 문장을 중심으로 AI 결과를 “설명”에서 “행동 제안”으로 바꿔 읽히게 설계했습니다.',
      learning:
        '분석한 숫자가 사장님의 다음 행동으로 옮겨질 때에만 쓸모가 생긴다는 걸, 대시보드를 설계하며 체감했습니다.',
    },
  },
  pickfit: {
    key: 'pickfit',
    bgImage: '/images/design-assets/rooms/pickfit_room_bg.png',
    mainWallFrame: '/images/design-assets/rooms/pickfit_phoneframe.png',
    roomObjects: [
      { src: '/images/design-assets/objects/pickfit/pickfit-object-007.png', width: 200, opacity: 0.82, rotate:  4, top: '10%', right: '4%' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-003.png', width:  85, opacity: 0.78, rotate: -7, top: '25%', right: '26%' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-024.png', width: 135, opacity: 0.75, rotate: -3, top: '48%', right: '7%' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-001.png', width: 100, opacity: 0.72, rotate:  9, bottom: '10%', right: '22%' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-016.png', width: 120, opacity: 0.68, rotate: -5, top: '12%', right: '28%' },
    ],
    contentObjects: [
      { src: '/images/design-assets/objects/pickfit/pickfit-object-010.png', width: 140, opacity: 0.55, rotate: -4, top:  '5%', right: '0' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-012.png', width:  80, opacity: 0.48, rotate:  6, top: '12%', left:  '0' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-009.png', width: 100, opacity: 0.50, rotate:  8, top: '20%', left:  '0' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-008.png', width: 100, opacity: 0.50, rotate: -5, top: '29%', right: '0' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-011.png', width: 130, opacity: 0.52, rotate:  5, top: '38%', right: '0' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-029.png', width:  90, opacity: 0.48, rotate:  7, top: '47%', left:  '0' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-025.png', width:  85, opacity: 0.48, rotate: -7, top: '56%', left:  '0' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-032.png', width:  90, opacity: 0.48, rotate: -4, top: '65%', right: '0' },
      { src: '/images/design-assets/objects/pickfit/pickfit-object-030.png', width: 120, opacity: 0.50, rotate:  4, top: '74%', right: '0' },
    ],
    entranceLine:
      '기획, 브랜드, 디자인 시스템, 프론트엔드, 백엔드, 데이터베이스를 직접 설계하고 구현한 AI 코디 추천 서비스입니다.',
    entranceDetail:
      '보유 의상을 업로드하면 날씨·일정에 맞는 코디를 제안합니다. 기획 의도를 그대로 구현하기 위해 1인 풀스택으로 제품 전체를 완성했고, 만드는 과정에서 PM의 언어와 개발의 언어를 직접 잇는 법을 배웠습니다.',
    evidenceGrid: 3,
    mainWall: {
      src: '/images/evidence/pickfit/brand_banner.png',
      alt: '픽핏 브랜드 배너 — 로고, 상황에 맞는 코디를 빠르게 골라주는 패션 결정 앱 태그라인, 아이폰 목업 2대',
      caption: '로고·태그라인·목업까지 직접 잡은 PickFit의 첫인상',
    },
    casePanels: [
      {
        eyebrow: 'planning',
        title: '선택 피로를 “위임형 추천” 문제로 재정의',
        body:
          '처음부터 상황과 취향을 말하면 사용자가 바로 결정할 수 있는 후보를 좁혀주는 제품으로 기획했습니다.',
      },
      {
        eyebrow: 'design system',
        title: '브랜드부터 UI 상태까지 독립 디자인 시스템으로 설계',
        body:
          '라임과 블루를 핵심 인상으로 잡고, 로고부터 컬러·타이포·컴포넌트, 로딩·결과·아이템 확인 상태까지 하나의 서비스 언어로 맞췄습니다.',
      },
      {
        eyebrow: 'ai workflow',
        title: 'AI를 초안 생성기가 아니라, 직접 지휘하는 팀처럼 사용',
        body:
          '제작 과정에서 Plan 모드로 계획을 먼저 설계하고(prompting), PM·개발 전문성을 Skill로 고정한 뒤, 페이즈마다 분야별 서브에이전트를 병렬로 불러 검토하고, 그 의견을 종합해 다음 단계로 넘길지 직접 판단(harness engineering)했습니다.',
      },
    ],
    aiUsage: {
      intro:
        '아래 다섯 단계는 모두 PickFit이라는 제품을 “만드는 과정”에서 쓴 방법입니다(서비스 안의 추천 기능과는 별개). 기획·디자인·프론트·백엔드·DB를 혼자 맡았기에, AI를 초안 생성기가 아니라 제가 지휘하는 팀처럼 다뤘습니다 — 계획을 먼저 설계하고, 전문성을 도구로 고정하고, 단계마다 전문가를 병렬로 불러 검토한 뒤, 의견을 종합해 다음 단계로 넘길지 직접 판단했습니다.',
      blocks: [
        {
          step: '계획',
          eyebrow: 'prompting',
          title: '코드를 쓰기 전에 Plan 모드로 기획·개발 계획부터 설계',
          usedWhen: '한 줄도 구현하기 전, 무엇을 어떤 순서로 만들지 정하는 단계',
          how: [
            '바로 구현을 시키지 않고 Plan 모드로 전환해, 기획 의도와 개발 순서를 문서 수준으로 자세히 짜게 했습니다.',
            '프롬프트에 역할·맥락·제약·원하는 결과물 형식을 함께 담아, 계획이 막연한 말이 아니라 그대로 실행 가능한 단계가 되도록 했습니다.',
            '그렇게 합의된 계획을 기준선으로 삼아, 이후 구현이 계획에서 벗어나면 다시 계획으로 돌아와 맞췄습니다.',
          ],
          output: '구현 전에 합의된 기획·개발 플랜 — 이후 모든 작업의 기준선',
        },
        {
          step: '전문성',
          eyebrow: 'skills',
          title: 'PM·개발 전문성을 재사용 가능한 “Skill”로 고정',
          usedWhen: '매번 새로 판단하지 않도록, 기획·개발의 기준을 미리 도구로 박아두는 단계',
          how: [
            'Skill은 특정 전문성을 파일로 묶어, 필요할 때 AI가 꺼내 쓰는 재사용 도구입니다 — 매번 같은 설명을 반복하지 않아도 됩니다.',
            '기획 단계에서는 PM Skill을 사용해 PRD, 비즈니스 모델, 시장성(사업성) 검토를 기획자 관점에서 직접 점검했습니다.',
            '개발 단계에서는 프론트엔드·백엔드·데이터베이스 전문가 Skill을 직접 만들어, Plan 모드에서 각 분야 기준으로 설계를 검토하게 했습니다.',
          ],
          output: 'PM·FE·BE·DB의 기준이 고정된, 나만의 전문가 도구 세트',
        },
        {
          step: '병렬 검토',
          eyebrow: 'subagents',
          title: '한 단계가 끝날 때마다 분야별 전문가 AI를 병렬로 호출',
          usedWhen: '한 페이즈(기획·디자인·프론트·백엔드 등)를 끝내고, 결과를 여러 관점에서 점검할 때',
          how: [
            '서브에이전트는 각자 독립된 작업 공간을 가진 별도의 AI입니다. 메인 대화를 어지럽히지 않고 한 가지 일에 집중합니다.',
            '한 페이즈가 끝나면 프론트·백엔드·DB(필요하면 기획·UX) 전문가를 동시에 불러, 같은 결과물을 각자의 기준으로 검토하게 했습니다.',
            '여러 명을 차례로 기다리지 않고 병렬로 돌려, 한 번에 다양한 관점의 피드백을 모았습니다.',
          ],
          output: '페이즈마다 분야별로 분리되어 모인 검토 의견 묶음',
        },
        {
          step: '종합·게이트',
          eyebrow: 'harness engineering',
          title: '의견을 종합하고, 다음 단계로 넘길지 판단하는 게이트를 설계',
          usedWhen: '병렬로 모인 의견을 합쳐 페이즈를 “완결”하고 다음으로 넘어갈지 정하는 단계',
          how: [
            '하네스 엔지니어링은 프롬프트 한 줄을 넘어, AI들이 일하는 “판”을 설계하는 일입니다 — 누구를 언제 부르고, 결과를 어떻게 합치고, 언제 다음으로 넘길지의 규칙.',
            '병렬로 받은 전문가 의견을 메인 에이전트가 한데 종합하게 하고, 최종 결정권은 메인 에이전트(=제 검토)에게 뒀습니다.',
            '검토에서 개선점이 나오면 같은 페이즈를 다시 손봤고, 충분히 완결됐다고 판단될 때만 다음 단계로 넘어가는 “게이트”를 뒀습니다.',
          ],
          output: '페이즈마다 종합 → 개선 → 통과를 거치는 단계별 품질 게이트',
        },
        {
          step: '최종 판단',
          eyebrow: 'human judgment',
          title: '무엇을 채택하고 버릴지, 마지막 10점은 직접 결정',
          usedWhen: 'AI가 낸 여러 제안 중 제품의 방향을 최종으로 못 박는 단계',
          how: [
            'AI 제안은 초안·대안·검토용으로만 쓰고, 제품의 문제 정의와 우선순위는 제가 직접 정했습니다.',
            'PickFit의 핵심도 “결정 피로를 줄이는 위임형 추천 경험”으로 직접 못 박았습니다.',
            'AI가 90점을 빠르게 만들어주면, 마지막 10점 — 무엇이 진짜 중요한가 — 은 사람이 판단해야 한다고 봤습니다.',
          ],
          output: '기획·디자인·AI 사용까지 한 방향으로 정렬된 PickFit 케이스스터디',
        },
      ],
    },
    evidence: [],
    evidenceGroups: [
      {
        label: '기획 인사이트 — 클릭에서 위임으로',
        desc: '쇼핑 UX의 패러다임 변화에서 PickFit의 방향을 잡은 핵심 인사이트입니다. 조건을 위임하면 후보를 좁혀주는 구조로 포지션을 정의했습니다.',
        items: [
          {
            src: '/images/evidence/pickfit/shopping_ux_shift.png',
            alt: "PickFit 인사이트 슬라이드 — '쇼핑 UX는 클릭에서 위임으로 이동 중'",
            caption: '쇼핑 UX를 탐색형에서 위임형 추천 흐름으로 재정의한 인사이트',
            layout: 'wide',
          },
        ],
      },
      {
        label: 'UI Flow — 결정 피로를 줄이는 추천 흐름',
        desc: '상황 선택부터 개별 아이템 확인까지, 사용자의 선택지를 단계마다 좁혀가는 5단계 추천 흐름입니다.',
        items: [
          {
            src: '/images/evidence/pickfit/situation_select.png',
            alt: "PickFit 상황 선택 화면 — '어떤 상황의 룩이 필요해요?' 출근룩, 소개팅, 데일리, 여행 등 선택",
            caption: 'STEP 1 — 상황 선택으로 조건을 좁히는 입구',
            layout: 'compact',
          },
          {
            src: '/images/evidence/pickfit/style_input.png',
            alt: 'PickFit 스타일 입력 화면 — STEP 2 원하는 스타일·예산·색상 입력',
            caption: 'STEP 2 — 스타일·예산·색상을 입력하면 AI 추천이 시작된다',
            layout: 'compact',
          },
          {
            src: '/images/evidence/pickfit/ai_loading.png',
            alt: 'PickFit AI 분석 중 화면 — STEP 3 코디 탐색 중 진행 메시지',
            caption: 'STEP 3 — 기다리는 동안의 불안을 덜어주는 로딩 메시지',
            layout: 'compact',
          },
          {
            src: '/images/evidence/pickfit/recommendation_result.png',
            alt: 'PickFit 추천 결과 화면 — PICK 1 코디, 예산, 추천 이유, 구성 아이템',
            caption: 'STEP 4 — AI가 추천한 코디를 이유와 구성까지 보여주는 결정 화면',
            layout: 'compact',
          },
          {
            src: '/images/evidence/pickfit/outfit_items.png',
            alt: 'PickFit 구성 아이템 화면 — STEP 5 개별 아이템 확인과 구매 연결',
            caption: 'STEP 5 — 전체 코디부터 개별 아이템까지 확인하는 마지막 단계',
            layout: 'compact',
          },
        ],
      },
      {
        label: '독립 디자인 시스템 — 브랜드부터 컴포넌트까지',
        desc: '로고·컬러·타이포·컴포넌트까지, PickFit의 브랜드 언어를 처음부터 일관되게 설계한 결과물입니다.',
        items: [
          {
            src: '/images/evidence/pickfit/design_system.png',
            alt: 'PickFit 디자인 시스템 슬라이드 — 컬러, 타이포, 컴포넌트를 처음부터 직접 설계',
            caption: '컬러·타이포·컴포넌트를 처음부터 직접 설계한 독립 디자인 시스템',
            layout: 'wide',
          },
        ],
      },
    ],
    infoDock: {
      problem: [
        '패션 쇼핑은 상품, 리뷰, 코디, 핏, 예산을 동시에 비교해야 해서 선택 피로가 큽니다.',
        '사용자는 긴 리스트보다 “내 상황에 맞는 선택지”와 “왜 이 코디인지”를 먼저 찾습니다.',
      ],
      insight: [
        '쇼핑 UX는 클릭해서 찾는 경험에서 조건을 맡기고 추천을 검토하는 경험으로 이동하고 있다고 보았습니다.',
        '그래서 PickFit은 사용자의 결정을 줄여주는 AI 코디 추천 앱으로 기획했습니다.',
      ],
      role: [
        '기획: 문제 정의, 사용자 흐름, 추천 시나리오, 기능 범위를 직접 설계',
        '디자인: 브랜드, 로고, 컬러, 타이포, 컴포넌트, 핵심 화면과 디자인 시스템 제작',
        '프론트엔드: 상황 선택, 스타일 입력, AI 로딩, 추천 결과, 구성 아이템 UI 구현',
        '백엔드/DB: 추천 요청과 결과 저장을 위한 서버 구조와 데이터베이스 흐름 구현',
        'AI 활용: prompt, Skills, subagent, harness engineering을 제품 제작 과정에 적용',
      ],
      coreFlow: [
        '상황 선택으로 추천 맥락을 먼저 좁힙니다.',
        '스타일, 예산, 색상, 핏 조건을 입력해 AI가 이해할 수 있는 추천 조건으로 구조화합니다.',
        'AI 추천 결과에는 코디 이미지·설명뿐 아니라 추천 이유와 구성 아이템까지 함께 보여줍니다.',
        '마지막에는 전체 코디와 개별 아이템을 확인해 사용자가 구매 또는 저장으로 넘어갈 수 있게 합니다.',
      ],
      output: [
        '브랜드 배너, 로고, 서비스 태그라인, 모바일 핵심 화면 제작',
        '상황 선택→스타일 입력→AI 분석→추천 결과→아이템 확인까지 이어지는 제품 플로우 구현',
        '서비스 전용 컬러, 타이포, 버튼, 카드, 상태 UI를 포함한 독립 디자인 시스템 제작',
        'AI 추천을 위한 입력 구조, 결과 포맷, 추천 이유 생성 흐름 설계',
      ],
      verification: [
        'Skills: 반복되는 기획/디자인/구현 기준을 고정해 화면 톤, 문장, 컴포넌트 점검에 사용',
        'Subagent: 리서치, UX 리뷰, 프론트 구현 점검, QA 관점을 분리해 빠르게 비교 검토',
        'Harness engineering: 추천 입력 예시, 기대 출력, 실패 케이스를 정리해 AI 결과가 UI에 들어갈 수 있는지 검증',
        '최종 판단: AI 제안은 초안과 검토에 사용하고, 문제 정의와 UX 우선순위는 직접 결정',
      ],
      uxWritingPoint: [
        '“어떤 상황의 룩이 필요해요?”처럼 사용자가 조건을 쉽게 말할 수 있는 질문형 문구를 사용했습니다.',
        '추천 결과에 예산, 상황 적합성, 추천 이유를 함께 보여줘 납득 가능성을 높였습니다.',
      ],
      learning: [
        'AI 추천은 똑똑해 보이는 결과보다, 사용자가 믿고 고를 수 있는 설명 구조가 더 중요했습니다.',
        '기획·디자인·구현·데이터를 혼자 잇다 보니, AI 제품에서는 각 단계의 입력/출력을 어떻게 정의하느냐가 곧 UX였습니다.',
      ],
    },
  },
  likelion: {
    key: 'likelion',
    bgImage: '/images/design-assets/rooms/likelion_room_bg.png',
    mainWallFrame: '/images/design-assets/rooms/likelion_photoframe.png',
    roomObjects: [
      { src: '/images/design-assets/objects/likelion/likelion-object-001.png', width: 240, opacity: 0.80, rotate:  2, top: '6%', right: '2%' },
      { src: '/images/design-assets/objects/likelion/likelion-object-002.png', width: 140, opacity: 0.75, rotate: -5, top: '35%', right: '24%' },
      { src: '/images/design-assets/objects/likelion/likelion-object-004.png', width: 100, opacity: 0.72, rotate:  8, top: '55%', right: '7%' },
      { src: '/images/design-assets/objects/likelion/likelion-object-019.png', width: 110, opacity: 0.70, rotate: -10, bottom: '12%', right: '20%' },
      { src: '/images/design-assets/objects/likelion/likelion-object-010.png', width: 120, opacity: 0.65, rotate:  6, top: '18%', right: '30%' },
    ],
    contentObjects: [
      { src: '/images/design-assets/objects/likelion/likelion-object-003.png', width: 150, opacity: 0.52, rotate: -3, top:  '5%', right: '0' },
      { src: '/images/design-assets/objects/likelion/likelion-object-005.png', width: 110, opacity: 0.48, rotate: -5, top: '12%', left:  '0' },
      { src: '/images/design-assets/objects/likelion/likelion-object-006.png', width:  80, opacity: 0.55, rotate:  9, top: '20%', left:  '0' },
      { src: '/images/design-assets/objects/likelion/likelion-object-013.png', width: 110, opacity: 0.50, rotate:  6, top: '29%', right: '0' },
      { src: '/images/design-assets/objects/likelion/likelion-object-012.png', width: 130, opacity: 0.50, rotate:  5, top: '38%', right: '0' },
      { src: '/images/design-assets/objects/likelion/likelion-object-021.png', width: 100, opacity: 0.46, rotate: -7, top: '47%', left:  '0' },
      { src: '/images/design-assets/objects/likelion/likelion-object-015.png', width:  90, opacity: 0.50, rotate: -8, top: '56%', left:  '0' },
      { src: '/images/design-assets/objects/likelion/likelion-object-020.png', width:  95, opacity: 0.48, rotate:  4, top: '65%', right: '0' },
      { src: '/images/design-assets/objects/likelion/likelion-object-018.png', width: 130, opacity: 0.48, rotate:  3, top: '74%', right: '0' },
    ],
    entranceLine:
      '제품 사고 과정을 1년 커리큘럼이라는 교육 시스템으로 설계하고, 운영 사이클 안에서 직접 강의하며 검증했습니다.',
    entranceDetail:
      '멋쟁이사자처럼 14기 기획 파트장으로, 수강생 14명의 커리큘럼을 직접 짜고 매주 강의했습니다. 가르치며 발견한 것을 다음 주 강의에 바로 반영하는 사이클을 반복하며, 기획이 실제로 작동하는지 검증했습니다.',
    mainWallSize: 'compact',
    mainWall: {
      src: '/images/evidence/likelion/session_photo.jpg',
      alt: '멋쟁이사자처럼 세션 현장 — 노태경이 학생들 앞에서 Pain Point 실습을 지도하는 사진',
      caption: '1년 커리큘럼을 직접 설계하고, 세션마다 학생들 앞에서 강의한 현장',
    },
    evidence: [
      {
        src: '/images/evidence/likelion/session_what.jpg',
        alt: '멋쟁이사자처럼 세션 현장 — 좋은 What과 나쁜 What의 차이를 설명하는 강의 사진',
        caption: '3주차 — What·MVP 강의',
      },
      {
        src: '/images/evidence/likelion/session_ia.jpg',
        alt: '멋쟁이사자처럼 세션 현장 — IA를 보는 관점 슬라이드 앞에서 강의하는 사진',
        caption: '4주차 — IA와 User Flow 강의',
      },
      {
        src: '/images/evidence/likelion/session_mentoring.png',
        alt: '멋쟁이사자처럼 세션 현장 — 노트북 앞에서 1:1 멘토링하는 사진',
        caption: '실습 보강 — 1:1 멘토링',
      },
      {
        src: '/images/evidence/likelion/figma_board.png',
        alt: '멋쟁이사자처럼 Figma 운영보드 — 커리큘럼, 카드뉴스, 세션 자료를 정리한 화면',
        caption: '운영보드 — 커리큘럼·카드뉴스·세션 자료를 관리한 Figma',
      },
    ],
    slideViewer: {
      label: '세션 자료 슬라이드',
      items: [
        { src: '/images/evidence/likelion/slides/1.png',  alt: '커리큘럼 전체 로드맵 소개 슬라이드',      caption: 'UX/UI 기획 커리큘럼 전체 로드맵 — 무엇을, 어떤 순서로 배우는지' },
        { src: '/images/evidence/likelion/slides/2.png',  alt: 'UX vs UI 빙산 비유 슬라이드',             caption: 'UX vs UI — 빙산의 일각인 UI 너머, 수면 아래 UX의 세계' },
        { src: '/images/evidence/likelion/slides/3.png',  alt: '서비스 기획 4단계 WHY WHO WHAT HOW',      caption: '서비스 기획의 4단계 — WHY → WHO → WHAT → HOW' },
        { src: '/images/evidence/likelion/slides/4.png',  alt: '각 기획 단계가 답해야 할 질문 슬라이드',   caption: '각 단계가 답해야 할 질문 — 문제 정의, 타깃 설정, 논리적 배열, 상세 설계' },
        { src: '/images/evidence/likelion/slides/5.png',  alt: 'MVP 개념 정의 슬라이드',                  caption: 'MVP는 가장 작은 기능이 아니라, 핵심 가치를 가장 빨리 검증하는 형태' },
        { src: '/images/evidence/likelion/slides/6.png',  alt: 'WHAT이 흐리면 뒤가 전부 흔들린다 슬라이드', caption: 'WHAT이 흐리면 뒤가 전부 흔들린다 — 기능 정의가 기획의 뼈대' },
        { src: '/images/evidence/likelion/slides/7.png',  alt: 'MoSCoW 기능 우선순위 프레임워크 슬라이드', caption: 'MoSCoW — Must·Should·Could·Won\'t로 기능의 우선순위를 나눈다' },
        { src: '/images/evidence/likelion/slides/8.png',  alt: 'IA와 User Flow 비교 슬라이드',            caption: 'IA는 공간 구조, User Flow는 이동 경로 — 건물 안내도 vs 내비게이션' },
        { src: '/images/evidence/likelion/slides/9.png',  alt: '스토리보드 구조 Wireframe+Description',   caption: '스토리보드 = Wireframe(그림) + Description(로직/글)의 합작' },
        { src: '/images/evidence/likelion/slides/10.png', alt: 'Error State 개념 정의 슬라이드',           caption: 'Error State — 사용자 기대가 완료되지 못할 때, 다음 행동을 안내하라' },
        { src: '/images/evidence/likelion/slides/11.png', alt: 'PM 소프트 스킬 8가지 슬라이드',           caption: 'PM의 소프트 스킬 8가지 — 경청, 질문력, 구조화 전달, 설득, 우선순위 판단…' },
        { src: '/images/evidence/likelion/slides/12.png', alt: 'UT 사용성 테스트 개념 슬라이드',           caption: 'UT(사용성 테스트) — 어디서 헷갈리고 멈추는지 찾아 개선하는 테스트' },
        { src: '/images/evidence/likelion/slides/13.png', alt: 'UT 진행 방식 슬라이드',                   caption: 'UT 진행 방식 — 3명 1조, 3라운드로 역할을 돌아가며 실제 사용 관찰' },
      ],
    },
    cardStack: {
      label: '카드뉴스 — 강의 밖의 운영 커뮤니케이션',
      caption:
        '운영 커뮤니케이션 — 전국 70개+ 대학, 14,000+ 멋대생 규모의 조직 소개부터 모집 안내, 파트 운영까지 직접 제작',
      groups: [
        {
          label: '멋쟁이사자처럼 소개',
          items: [
            { src: '/images/evidence/likelion/cardnews/intro_1.png', alt: '멋쟁이사자처럼 소개 카드뉴스 1 — 전국 70개+ 대학 국내 최대 IT 창업동아리', caption: '소개 1' },
            { src: '/images/evidence/likelion/cardnews/intro_2.png', alt: '멋쟁이사자처럼 소개 카드뉴스 2', caption: '소개 2' },
            { src: '/images/evidence/likelion/cardnews/intro_3.png', alt: '멋쟁이사자처럼 소개 카드뉴스 3', caption: '소개 3' },
            { src: '/images/evidence/likelion/cardnews/intro_4.png', alt: '멋쟁이사자처럼 소개 카드뉴스 4', caption: '소개 4' },
            { src: '/images/evidence/likelion/cardnews/intro_5.png', alt: '멋쟁이사자처럼 소개 카드뉴스 5', caption: '소개 5' },
          ],
        },
        {
          label: '14기 모집',
          items: [
            { src: '/images/evidence/likelion/cardnews/recruit_0.png', alt: '멋쟁이사자처럼 14기 모집 시작 카드뉴스 — 모집 오픈 안내', caption: '모집 0' },
            { src: '/images/evidence/likelion/cardnews/recruit_1.png', alt: '멋쟁이사자처럼 14기 모집 카드뉴스 1 — 기획·디자인·프론트·백엔드 트랙 소개', caption: '모집 1' },
            { src: '/images/evidence/likelion/cardnews/recruit_2.png', alt: '멋쟁이사자처럼 14기 모집 카드뉴스 2', caption: '모집 2' },
            { src: '/images/evidence/likelion/cardnews/recruit_3.png', alt: '멋쟁이사자처럼 14기 모집 카드뉴스 3 — 모집 규모 안내', caption: '모집 3' },
            { src: '/images/evidence/likelion/cardnews/recruit_4.png', alt: '멋쟁이사자처럼 14기 모집 카드뉴스 4 — 지원 방법 안내', caption: '모집 4' },
          ],
        },
        {
          label: '6주차 세션',
          items: [
            { src: '/images/evidence/likelion/cardnews/week6_1.png', alt: '멋쟁이사자처럼 6주차 세션 카드뉴스 1 — 화면 설계와 IA 실습 안내', caption: '6주차 1' },
            { src: '/images/evidence/likelion/cardnews/week6_2.png', alt: '멋쟁이사자처럼 6주차 세션 카드뉴스 2', caption: '6주차 2' },
            { src: '/images/evidence/likelion/cardnews/week6_3.png', alt: '멋쟁이사자처럼 6주차 세션 카드뉴스 3', caption: '6주차 3' },
            { src: '/images/evidence/likelion/cardnews/week6_4.png', alt: '멋쟁이사자처럼 6주차 세션 카드뉴스 4', caption: '6주차 4' },
            { src: '/images/evidence/likelion/cardnews/week6_5.png', alt: '멋쟁이사자처럼 6주차 세션 카드뉴스 5', caption: '6주차 5' },
          ],
        },
        {
          label: '운영진 이야기',
          items: [
            { src: '/images/evidence/likelion/cardnews/ops_0.png', alt: '멋쟁이사자처럼 운영진 이야기 카드뉴스 — 기획·디자인 파트 서류 면접 팁', caption: '운영진 0' },
            { src: '/images/evidence/likelion/cardnews/ops_1.png', alt: '멋쟁이사자처럼 운영진 이야기 카드뉴스 1', caption: '운영진 1' },
            { src: '/images/evidence/likelion/cardnews/ops_2.png', alt: '멋쟁이사자처럼 운영진 이야기 카드뉴스 2', caption: '운영진 2' },
            { src: '/images/evidence/likelion/cardnews/ops_4.png', alt: '멋쟁이사자처럼 운영진 이야기 카드뉴스 4', caption: '운영진 4' },
            { src: '/images/evidence/likelion/cardnews/ops_5.png', alt: '멋쟁이사자처럼 운영진 이야기 카드뉴스 5', caption: '운영진 5' },
            { src: '/images/evidence/likelion/winter_study.png', alt: '14기 운영진 겨울방학 스터디 카드뉴스 — 좋은 세션을 위해 운영진이 모여 준비하는 모습', caption: '겨울방학 스터디' },
          ],
        },
      ],
    },
    phaseFlow: {
      eyebrow: 'curriculum architecture',
      title: '1년 과정을 하나의 제품 흐름처럼 설계',
      intro:
        '매 주차가 독립적이면서도 전체 흐름 안에 놓이도록, 초보자가 “다음에 뭘 해야 하는지”를 알 수 있는 학습 여정으로 4단계를 설계했습니다.',
      phases: [
        { no: '01', name: 'Why · Who · What · How', desc: '문제 정의부터 타깃·기능·구조까지, 기획의 뼈대를 세우는 기본기.' },
        { no: '02', name: '화면 로직 · 상태 설계', desc: '화면 로직과 상태·예외까지 구체화해, 실제로 만들 수 있는 형태로.' },
        { no: '03', name: '실전 · 데이터 · 비즈니스', desc: '데이터·비즈니스·AI 활용으로 확장하며 실전 협업과 검증을 경험.' },
        { no: '04', name: '회고 · 문제 재정의', desc: '해커톤 이후 회고와 문제 재정의로 학습 맥락을 닫는 마디.' },
      ],
    },
    writingRefs: [
      {
        title: '바로 디자인하면 안 되는 이유',
        source: '멋사 1주차',
        summary: '만들기 전에 왜 문제·사용자·역할을 먼저 보는가를 정리한 글.',
        application:
          '1주차 UX/UI 트랙 이해와 역기획 파트에서 “예쁜 화면”보다 구조와 의도를 먼저 읽는 기준으로 연결했습니다.',
      },
      {
        title: '기능보다 불편을 먼저 보는 이유',
        source: '멋사 2주차',
        summary: 'Pain Point, 사용자 조사, 페르소나로 구체적인 사용자와 불편을 잡는 글.',
        application:
          '2주차 Why·Who·페르소나 실습에서 추상적인 아이디어를 실제 사용자 문제로 바꾸는 흐름으로 반영했습니다.',
      },
      {
        title: 'MVP는 작은 기능이 아니었다',
        source: '멋사 3주차',
        summary: 'MVP를 기능 축소가 아니라 핵심 가치를 검증하는 최소 흐름으로 보는 글.',
        application:
          '3주차 What·MVP·MoSCoW 수업에서 “이번에 만들 것/만들지 않을 것”을 정하는 판단 기준으로 사용했습니다.',
      },
    ],
    infoDock: {
      problem:
        "초보자는 PM/UX 개념을 들어도 실제 프로젝트 흐름으로 연결하지 못합니다. 강의는 많지만 '그래서 다음에 무엇을 해야 하는지'를 알려주는 구조가 드뭅니다.",
      insight:
        "좋은 교육은 개념을 많이 전달하는 것보다 '다음 행동을 알 수 있게 만드는 구조'에 가깝다고 봤습니다. 그래서 커리큘럼 자체를 다음 단계가 분명한 흐름으로 설계했습니다.",
      role:
        '멋쟁이사자처럼 14기 기획 파트장으로 1년 기획 커리큘럼 단독 설계, 세션 직접 강의, 강의자료·과제 설계, 운영진 스터디와 Figma 운영보드 관리를 맡았습니다.',
      coreFlow:
        'Phase 1 Why·Who·What·How로 기획 기본기, Phase 2 화면 로직·상태 설계, Phase 3 실전·데이터·비즈니스, Phase 4 회고와 문제 재정의로 이어지는 4-Phase 구조.',
      output:
        '막연한 아이디어가 실제로 만들 수 있는 기획으로 발전하도록 1년 과정, 과제, 세션 자료, 운영 보드를 설계하고 직접 강의했습니다.',
      verification:
        '커리큘럼 원문, Figma 운영보드, 카드뉴스, 운영진 스터디, 세션 사진으로 설계와 운영의 증거를 남겼습니다.',
      uxWritingPoint:
        '초보자가 이해할 수 있는 용어 정의, 과제 안내, 상태·예외 메시지 교육을 통해 어려운 기획 개념을 다음 행동으로 번역했습니다.',
      learning:
        '남에게 가르칠 수 있는 순서로 바꿔 보면 그 개념을 진짜 이해했는지 드러납니다. 커리큘럼을 짜는 과정도 결국 제품을 설계하는 일과 다르지 않았습니다.',
    },
  },
}
