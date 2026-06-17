// 생각의 기록 (Velog Archive) — 실제 공개 글 12편을 정적 데이터로 관리.
// 이미지는 Velog CDN URL을 그대로 사용하고, 본문 이미지는 대표 글의 작은 스트립에만 노출한다.

export const VELOG_URL = 'https://velog.io/@taek___0'

export const VELOG_PROFILE = {
  displayName: '노태경',
  bio: '배운 점, 생각한 것들을 남겨 보려 해요.',
  postCount: 12,
  tags: ['AI', 'PM', '기획', '생각', '멋쟁이사자처럼'],
}

export type WritingAxis = 'AI·일하는 방식' | 'PM·UX·교육' | '사용자·조직·데이터 해석'

export const WRITING_AXES: WritingAxis[] = ['AI·일하는 방식', 'PM·UX·교육', '사용자·조직·데이터 해석']

export interface Post {
  axis: WritingAxis
  title: string
  source: string
  summary: string
  connect: string
  href: string
  slug: string
  releasedAt: string
  tags: string[]
  thumbnail: string
  description: string
  featured: boolean
  featuredRank?: number // 대표 글 표시 순서(작을수록 먼저) — 큐레이션 우선순위
  imageStrip?: string[]
}

export const WRITING: Post[] = [
  {
    axis: 'PM·UX·교육',
    title: 'Toss의 UX 라이팅 — 언어도 제품 결정이다',
    source: 'UX 라이팅 분석',
    summary: '좋은 UX 라이팅은 예쁜 문장이 아니라, 조직 전체가 일관되게 말하게 하는 가이드라인이라는 것 — 토스 사례로 정리한 글.',
    connect: 'PickFit · UX 시스템',
    href: `${VELOG_URL}/Toss의-UX-라이팅`,
    slug: 'Toss의-UX-라이팅',
    releasedAt: '2026.06.17',
    tags: ['UX', 'PM', '생각'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/511da4b6-7ecb-48b8-bad2-1c08608f5e19/image.png',
    description:
      '토스의 UX 라이팅을 보며, 좋은 글쓰기보다 8,000개가 넘는 규칙을 시스템으로 만든 일관성이 핵심이라는 걸 정리했어요. 내 프로젝트에도 작은 UX 라이팅 가이드를 붙여보려 해요.',
    featured: true,
    featuredRank: 1,
    imageStrip: [
      'https://velog.velcdn.com/images/taek___0/post/52e55600-d710-403d-91d3-44a6172a180e/image.png',
      'https://velog.velcdn.com/images/taek___0/post/f6780953-5738-4fb3-a621-da2e6ff82d6e/image.png',
      'https://velog.velcdn.com/images/taek___0/post/1bf40253-7329-457c-8083-6abab72ff8ca/image.png',
    ],
  },
  {
    axis: '사용자·조직·데이터 해석',
    title: '비교의 관점',
    source: '생각 기록',
    summary: '비교 자체가 문제가 아니라, 그게 학습으로 가는지 회피로 가는지가 갈린다는 생각.',
    connect: '생각 · 실행',
    href: `${VELOG_URL}/비교의-관점`,
    slug: '비교의-관점',
    releasedAt: '2026.06.16',
    tags: ['생각'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/e923cea9-dd5d-4747-b338-5a88da1cb717/image.png',
    description:
      "비교가 '하지만'이라는 말로 미루기가 되는 순간을 관찰하고, 의지보다 작은 행동(15분)으로 넘어가는 게 낫다는 생각을 적었어요.",
    featured: false,
  },
  {
    axis: 'PM·UX·교육',
    title: '마케팅의 중요성',
    source: '생각 기록',
    summary: '좋은 메시지는 더 많이 만드는 게 아니라, 사람의 마음이 움직이는 기준을 고르는 데서 시작된다는 정리.',
    connect: 'PM · 메시지 설계',
    href: `${VELOG_URL}/마케팅의-중요성`,
    slug: '마케팅의-중요성',
    releasedAt: '2026.06.16',
    tags: ['AI', '생각'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/7e71a470-e271-4809-98dd-c0d8e85a8f58/image.png',
    description:
      '마케팅이 화려한 설득이 아니라 행동을 부르는 심리 원리(희석 효과·트리거·구체성·호감의 역설)로 작동한다는 걸 정리했어요.',
    featured: false,
  },
  {
    axis: 'AI·일하는 방식',
    title: 'AI 시장에서의 GPT와 Claude',
    source: 'AI 시장 분석',
    summary: 'GPT가 연 시장 뒤에서 Claude가 어떤 빈틈을 보는지, 제품 전략과 내 AI 작업 방식으로 해석한 글.',
    connect: 'AI Workflow · PM Strategy',
    href: `${VELOG_URL}/앤트로픽은-후발-주자가-시장을-장악한다는-역사의-공식을-따를-것인가`,
    slug: '앤트로픽은-후발-주자가-시장을-장악한다는-역사의-공식을-따를-것인가',
    releasedAt: '2026.06.07',
    tags: ['AI', 'PM', '생각'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/59731f38-2767-46c5-8972-affc50867489/image.png',
    description:
      'ChatGPT가 연 시장 뒤에서 Claude가 어떤 빈틈을 보는지, 지금 내 AI 작업 방식과 제품 전략 관점으로 정리해봤어요.',
    featured: true,
    featuredRank: 4,
    imageStrip: [
      'https://velog.velcdn.com/images/taek___0/post/c4a14fe1-2851-4c72-bef5-b143c1a4cc88/image.png',
      'https://velog.velcdn.com/images/taek___0/post/ea25df2c-bfc8-4525-ac34-08f08acf38e1/image.png',
      'https://velog.velcdn.com/images/taek___0/post/783fa669-0d90-4a9a-9030-5b9395c60660/image.png',
    ],
  },
  {
    axis: '사용자·조직·데이터 해석',
    title: '성심당의 조직문화에 대하여',
    source: '조직문화 관찰',
    summary: 'AI 시대에도 사람을 쉽게 해고하지 않겠다는 태도에서 제품과 조직의 지속 가능성을 읽은 글.',
    connect: 'PM 관점 · 사람 중심 판단',
    href: `${VELOG_URL}/성심당의-조직문화에-대하여`,
    slug: '성심당의-조직문화에-대하여',
    releasedAt: '2026.05.24',
    tags: ['생각'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/c2fadc01-589e-4cd7-ba96-b117ea9c66b5/image.png',
    description:
      '성심당 글을 읽고 남긴 생각. 튀소와 딸기시루보다, 화재 뒤 다시 문을 연 직원들과 AI 시대에 해고하지 않겠다는 말이 오래 남았어요.',
    featured: false,
  },
  {
    axis: '사용자·조직·데이터 해석',
    title: '한강 돗자리에서 기획을 배울 줄은 몰랐다!',
    source: '아이디엇 착한돗자리',
    summary: '데이터 분석과 데이터 해석의 차이, 숫자 뒤 사용자의 장면을 읽는 기획자의 질문을 정리한 글.',
    connect: 'PULSE · 사용자 해석',
    href: `${VELOG_URL}/한강-돗자리에서-기획을-배울-줄은-몰랐다`,
    slug: '한강-돗자리에서-기획을-배울-줄은-몰랐다',
    releasedAt: '2026.05.17',
    tags: ['PM', '생각'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/3584be1b-f492-4b24-a2e3-a71acee7eefd/image.png',
    description:
      '아이디엇의 광고 사례를 보며 데이터 분석과 데이터 해석의 차이, 그리고 사용자의 불편을 읽는 기획자의 질문을 정리해봤어요.',
    featured: true,
    featuredRank: 2,
  },
  {
    axis: 'AI·일하는 방식',
    title: '미루지 않겠다는 다짐보다 작은 장치가 필요했다',
    source: '글쓰기 시스템',
    summary: '의지보다 작동하는 장치가 필요하다는 관점에서, AI와 루틴으로 글쓰기 시스템을 만든 기록.',
    connect: 'Writing System · Carpe Diem',
    href: `${VELOG_URL}/Temp-Title`,
    slug: 'Temp-Title',
    releasedAt: '2026.05.12',
    tags: ['AI', '생각'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/24a3a743-8b9d-41c3-9b00-5a637996ddab/image.png',
    description:
      '미루기 글을 읽고, 내가 왜 벨로그를 시작하기 전부터 글쓰기 시스템을 만들고 싶어 했는지 다시 생각해봤어요.',
    featured: false,
  },
  {
    axis: 'PM·UX·교육',
    title: '멋사 3주차 기획파트: MVP는 작은 기능이 아니었다',
    source: '멋사 3주차',
    summary: 'MVP를 작은 기능이 아니라 핵심 가치를 가장 빨리 검증하는 최소 흐름으로 다시 정리한 글.',
    connect: 'LikeLion · PickFit',
    href: `${VELOG_URL}/멋사-3주차-기획파트-MVP는-작은-기능이-아니었다`,
    slug: '멋사-3주차-기획파트-MVP는-작은-기능이-아니었다',
    releasedAt: '2026.05.11',
    tags: ['PM', '기획', '멋쟁이사자처럼'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/9d57d40d-18fa-4ca9-93f6-89b0684b44da/image.png',
    description:
      '멋쟁이사자처럼 UX/UI 트랙 3주차 기획파트를 진행하며 남긴 기록. MVP를 작은 기능이 아니라 검증 가능한 최소 흐름으로 다시 정리해보려 해요.',
    featured: true,
    featuredRank: 3,
    imageStrip: [
      'https://velog.velcdn.com/images/taek___0/post/5b8e3673-00a9-447d-a24e-c8f2cb9f2b3c/image.png',
      'https://velog.velcdn.com/images/taek___0/post/5eda3d0d-612a-4670-9aa7-2f34c7c6780a/image.png',
      'https://velog.velcdn.com/images/taek___0/post/5ea1a184-2048-4b6c-aec2-f957bb55aaec/image.png',
    ],
  },
  {
    axis: 'PM·UX·교육',
    title: '멋사 2주차 기획파트: 기능보다 불편을 먼저 보는 이유',
    source: '멋사 2주차',
    summary: '기능보다 먼저 페인포인트와 타겟을 잡아야 하는 이유를 사용자 조사와 페르소나 관점으로 정리한 글.',
    connect: 'PULSE · LikeLion',
    href: `${VELOG_URL}/멋사-2주차-기획파트-기능보다-불편을-먼저-보는-이유`,
    slug: '멋사-2주차-기획파트-기능보다-불편을-먼저-보는-이유',
    releasedAt: '2026.05.11',
    tags: ['PM', '기획', '멋쟁이사자처럼'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/863fa7ae-c954-44fa-aa68-ceb6ff7c60b1/image.png',
    description:
      '멋쟁이사자처럼 UX/UI 트랙 2주차 기획파트를 진행하며 남긴 기록. 기능보다 먼저 페인포인트와 타겟을 잡아야 하는 이유를 다시 정리해보려 해요.',
    featured: false,
  },
  {
    axis: 'PM·UX·교육',
    title: '멋사 1주차 기획파트: 바로 디자인하면 안 되는 이유',
    source: '멋사 1주차',
    summary: '바로 만들기 전에 서비스 제작 과정, PM 역할, Why→Who→What→How를 먼저 보는 이유를 정리한 글.',
    connect: 'LikeLion',
    href: `${VELOG_URL}/멋사-1주차-기획파트-바로-디자인하면-안-되는-이유`,
    slug: '멋사-1주차-기획파트-바로-디자인하면-안-되는-이유',
    releasedAt: '2026.05.11',
    tags: ['PM', '기획', '멋쟁이사자처럼'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/e64c88af-c232-4a94-b536-3770b42915ac/image.png',
    description:
      '멋쟁이사자처럼 UX/UI 트랙 1주차 기획파트를 진행하며 남긴 기록. 바로 만들기 전에 왜 서비스 제작 과정과 PM 역할을 먼저 봐야 했는지 정리해보려 해요.',
    featured: false,
  },
  {
    axis: 'AI·일하는 방식',
    title: 'AI로 해커톤 캐릭터를 만들면서 배운 것들',
    source: 'AI 이미지 제작기',
    summary: '프롬프트와 Skills를 정리하니 AI 이미지 결과물이 어떻게 달라졌는지 남긴 제작 기록.',
    connect: 'AI Prompt Lab · Skills',
    href: `${VELOG_URL}/AI로-해커톤-캐릭터를-만들면서-배운-것들`,
    slug: 'AI로-해커톤-캐릭터를-만들면서-배운-것들',
    releasedAt: '2026.05.11',
    tags: ['AI'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/bc02fca0-6567-46ef-9dee-688095a7fa49/image.png',
    description:
      '아리톤 캐릭터 누리를 만들며 남긴 AI 이미지 제작기. 프롬프트와 Skills를 정리하니 결과물이 어떻게 달라졌는지 기록해보려 해요.',
    featured: false,
    imageStrip: [
      'https://velog.velcdn.com/images/taek___0/post/76055d1e-c63c-4724-ace7-c64dab460a36/image.png',
      'https://velog.velcdn.com/images/taek___0/post/868b1021-0890-48da-94af-87e1e6492b08/image.png',
      'https://velog.velcdn.com/images/taek___0/post/19bca571-b243-4e27-938f-76912059d9fe/image.png',
    ],
  },
  {
    axis: '사용자·조직·데이터 해석',
    title: '벨로그 시작!',
    source: '기록의 시작',
    summary: '취업 준비, 포트폴리오, 기획 운영진 활동, AI 관심사를 글로 쌓기 시작한 이유.',
    connect: 'Writing Archive',
    href: `${VELOG_URL}/벨로그-시작`,
    slug: '벨로그-시작',
    releasedAt: '2026.05.11',
    tags: ['생각'],
    thumbnail: 'https://velog.velcdn.com/images/taek___0/post/8608ea75-bc9b-4ba9-8d6e-308db757897e/image.png',
    description:
      '벨로그를 시작하는 이유에 대한 첫 글. 취업 준비와 포트폴리오뿐 아니라, 기획 운영진 활동과 AI에 대한 관심, 그리고 일상에서 떠오른 생각들을 조금씩 남겨보려 해요.',
    featured: false,
  },
]

export const FEATURED_WRITING = WRITING.filter((post) => post.featured).sort(
  (a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99),
)
