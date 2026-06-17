// MS Paint 낙서 — '생각의 기록' 섹션 전용 비주얼 언어 (§0.1 — 다른 섹션 사용 금지).
// 원색 + 투박한 라운드 스트로크. 장식이므로 aria-hidden.
// draw=true → 부모 .group 호버/포커스 시 stroke-dashoffset 0으로 '손으로 그려지는' 효과
// (CSS는 index.css .tk-doodle-draw). pathLength=1 정규화로 경로 길이에 무관하게 dash 제어.
type Variant = 'squiggle' | 'arrow' | 'star'

const PATHS: Record<Variant, { color: string; d: string[] }> = {
  squiggle: {
    color: '#E1442C',
    d: ['M2 9 Q 7 3, 12 9 T 22 9 T 32 9 T 42 9'],
  },
  arrow: {
    color: '#2B5CE7',
    d: ['M3 14 C 12 4, 26 3, 36 8', 'M30 4 L 37 8 L 31 13'],
  },
  star: {
    color: '#1FA85C',
    d: ['M16 2 L 16 22', 'M7 7 L 25 17', 'M25 7 L 7 17'],
  },
}

export default function Doodle({
  variant,
  className = '',
  draw = false,
}: {
  variant: Variant
  className?: string
  draw?: boolean
}) {
  const { color, d } = PATHS[variant]
  return (
    <svg
      viewBox="0 0 44 24"
      aria-hidden
      focusable="false"
      className={`inline-block w-9 h-5 ${draw ? 'tk-doodle-draw ' : ''}${className}`}
      style={{ stroke: color, fill: 'none', strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}
    >
      {d.map((dd, i) => (
        <path key={i} d={dd} pathLength={draw ? 1 : undefined} />
      ))}
    </svg>
  )
}
