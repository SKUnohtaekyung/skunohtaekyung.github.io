// 종이 콜라주 오브젝트 — common 팩 전용 부유 장식 컴포넌트 (design-direction §3)
// 위계: Tier A(부유, 뷰포트당 1개) · Tier B(중간) · Tier C(마이크로).
// 타이포그래피 보조 역할 — 절대 텍스트 컬럼 안에 들어가지 않는다.
// reduced-motion: index.css 전역 animation-duration:.01ms → tk-float 자동 중단.
// Framer Motion MotionConfig reducedMotion="user" → whileInView 페이드 자동 중단.
import { motion } from 'framer-motion'

export interface FloatingObjectProps {
  src: string
  width: number
  opacity?: number
  rotate: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  tier?: 'A' | 'B' | 'C'
  floatDuration?: number   // seconds — Tier A에만 적용
  floatDelay?: number      // seconds — 오브젝트 간 위상 차이
  revealDelay?: number     // ms — 섹션 내 스태거 딜레이
  hideOnMobile?: boolean   // md(768px) 미만 hidden
}

export default function FloatingObject({
  src,
  width,
  opacity = 0.55,
  rotate,
  top,
  bottom,
  left,
  right,
  tier = 'B',
  floatDuration = 6,
  floatDelay = 0,
  revealDelay = 0,
  hideOnMobile = false,
}: FloatingObjectProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute${hideOnMobile ? ' hidden md:block' : ''}`}
      style={{ top, bottom, left, right, rotate: `${rotate}deg` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
          delay: revealDelay / 1000,
        }}
      >
        {tier === 'A' ? (
          <div
            className="tk-float"
            style={{
              '--float-dur': `${floatDuration}s`,
              '--float-delay': `${floatDelay}s`,
            } as React.CSSProperties}
          >
            <img src={src} alt="" width={width} draggable={false} />
          </div>
        ) : (
          <img src={src} alt="" width={width} draggable={false} />
        )}
      </motion.div>
    </div>
  )
}
