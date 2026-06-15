// Hero 콜라주 레이어 — 좌표 원본: 이미지_생성결과/hero_layers/hero_layers_manifest.json (캔버스 1672×941)
// person_isolated은 bbox placeholder(known_issue)라 미사용 — person_seated(정상 좌표) 채택 (PROGRESS 고정 결정)
// parallax 차등: 커서·메모지=빠르게 / 카드=중간 / 노트북=느리게 / 인물=거의 고정(scale 1.00~1.02)

export type ParallaxClass = 'person' | 'fast' | 'medium' | 'slow'

export interface HeroLayer {
  name: string
  src: string
  x: number
  y: number
  w: number
  h: number
  speed: ParallaxClass
  /** 부유·스크롤 진폭 배수(기본 1). 특정 오브젝트만 거의 고정시킬 때 작게(예: 0.12) 지정 */
  floatScale?: number
}

export const HERO_CANVAS = { width: 1672, height: 941 }

/** 마우스 parallax 최대 이동량(캔버스 px 기준) */
export const PARALLAX_PX: Record<ParallaxClass, number> = {
  person: 4,
  slow: 8,
  medium: 14,
  fast: 26,
}

export const HERO_STATIC_SRC = '/images/hero/hero_static.png'

/* 배열 순서 = 렌더 z순서 (인물 위에 카드·커서가 떠 있는 콜라주) */
export const HERO_LAYERS: HeroLayer[] = [
  { name: 'person_seated', src: '/images/hero/person_seated.png', x: 730, y: 175, w: 650, h: 760, speed: 'person' },
  { name: 'laptop_right', src: '/images/hero/laptop_right.png', x: 1180, y: 520, w: 370, h: 205, speed: 'slow' },
  { name: 'code_panel_right', src: '/images/hero/code_panel_right.png', x: 1328, y: 278, w: 302, h: 260, speed: 'medium' },
  { name: 'top_blank_frame', src: '/images/hero/top_blank_frame.png', x: 1162, y: 8, w: 382, h: 200, speed: 'medium' },
  { name: 'top_wireframe_card', src: '/images/hero/top_wireframe_card.png', x: 948, y: 72, w: 220, h: 125, speed: 'medium' },
  { name: 'top_chart_card', src: '/images/hero/top_chart_card.png', x: 684, y: 82, w: 260, h: 220, speed: 'medium' },
  { name: 'middle_flow_card', src: '/images/hero/middle_flow_card.png', x: 701, y: 285, w: 240, h: 118, speed: 'medium' },
  { name: 'orange_blue_notes', src: '/images/hero/orange_blue_notes.png', x: 638, y: 420, w: 160, h: 150, speed: 'fast' },
  { name: 'bottom_chart_strip', src: '/images/hero/bottom_chart_strip.png', x: 596, y: 600, w: 330, h: 300, speed: 'medium', floatScale: 0.12 },
  { name: 'bottom_image_card', src: '/images/hero/bottom_image_card.png', x: 348, y: 730, w: 300, h: 170, speed: 'medium' },
  { name: 'bottom_info_card', src: '/images/hero/bottom_info_card.png', x: 1208, y: 765, w: 250, h: 155, speed: 'medium' },
  { name: 'right_diagram_card', src: '/images/hero/right_diagram_card.png', x: 1484, y: 732, w: 188, h: 208, speed: 'medium' },
  { name: 'cursor_arrow', src: '/images/hero/cursor_arrow.png', x: 925, y: 246, w: 115, h: 130, speed: 'fast' },
]
