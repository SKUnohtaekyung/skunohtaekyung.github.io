// Hero 워드마크 — §8.2.1 '디자인된 레터링' 방식② SVG textLength 등폭 스택 락업, 레이아웃 옵션ⓐ.
// PORTFOLIO(크게·타이트) / NOH TAE KYUNG(같은 폭 트래킹 바이라인) 두 줄을 동일 폭(1000)으로 잠근다.
// fs190은 자연 폭(~1009)>1000이 되도록 잡은 값 — textLength가 '압축'으로 작동해야 자간 타이트(§0.1-6).
// svg가 컨테이너 폭에 맞춰 스케일 → max-w-[820px]에서 PORTFOLIO 실효 156px(= --text-hero 상한).
export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <h1 aria-label="PORTFOLIO — NOH TAE KYUNG" className={className}>
      <svg
        viewBox="0 0 1000 352"
        aria-hidden
        focusable="false"
        className="block w-full max-w-[820px]"
      >
        <text
          x="0"
          y="194"
          textLength="1000"
          lengthAdjust="spacing"
          fontSize="190"
          fontWeight="700"
          fill="var(--color-ink)"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          PORTFOLIO
        </text>
        <text
          x="0"
          y="334"
          textLength="1000"
          lengthAdjust="spacing"
          fontSize="54"
          fontWeight="500"
          fill="var(--color-text-muted)"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          NOH TAE KYUNG
        </text>
      </svg>
    </h1>
  )
}
