// MS Paint 낙서 — '생각의 기록' 섹션 전용 비주얼 언어 (§0.1 — 다른 섹션 사용 금지).
// 원색 + 투박한 라운드 스트로크. 장식이므로 aria-hidden.
type Variant = 'squiggle' | 'arrow' | 'star'

const PATHS: Record<Variant, { color: string; el: React.ReactNode }> = {
  squiggle: {
    color: '#E1442C',
    el: <path d="M2 9 Q 7 3, 12 9 T 22 9 T 32 9 T 42 9" />,
  },
  arrow: {
    color: '#2B5CE7',
    el: (
      <>
        <path d="M3 14 C 12 4, 26 3, 36 8" />
        <path d="M30 4 L 37 8 L 31 13" />
      </>
    ),
  },
  star: {
    color: '#1FA85C',
    el: (
      <>
        <path d="M16 2 L 16 22" />
        <path d="M7 7 L 25 17" />
        <path d="M25 7 L 7 17" />
      </>
    ),
  },
}

export default function Doodle({ variant, className = '' }: { variant: Variant; className?: string }) {
  const { color, el } = PATHS[variant]
  return (
    <svg
      viewBox="0 0 44 24"
      aria-hidden
      focusable="false"
      className={`inline-block w-9 h-5 ${className}`}
      style={{ stroke: color, fill: 'none', strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}
    >
      {el}
    </svg>
  )
}
