// Hero — 타이포가 보스(좌), 콜라주 자화상은 보조(우) (design-direction §5).
// 등장 순서: 워드마크·헤드라인 2줄 stagger-up → 서브라인 → 자화상 → 오브젝트 톡톡(씬 내부).
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { labelEnClass } from '../Label'
import Wordmark from '../Wordmark'
import { EASE_DEFAULT, prefersReducedMotion } from '../../lib/motion'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: EASE_DEFAULT } })
        .from('[data-hero-line]', { y: 28, opacity: 0, duration: 0.6, stagger: 0.12 })
        .from('[data-hero-sub]', { y: 16, opacity: 0, duration: 0.5 }, '-=0.25')
        .from('[data-hero-visual]', { x: 24, duration: 0.7 }, '-=0.35')
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      id="hero"
      aria-label="소개"
      className="min-h-[100dvh] flex flex-col justify-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1280px] container-pad py-24 grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <div data-hero-line>
            <Wordmark />
          </div>
          <div data-hero-line className="mt-5">
            <p className="font-body font-semibold text-ink text-[14px] tracking-[0.01em]">PM · 서비스기획</p>
            <p className={`${labelEnClass} mt-1.5`}>UX · AI · Frontend</p>
          </div>

          {/* 한글 헤드라인 = Pretendard 700 (Avant Garde는 영문 전용 §0.1-6) */}
          <h2
            className="font-body font-bold text-ink mt-16 leading-[1.25] break-keep"
            style={{ fontSize: 'clamp(26px,3.6vw,40px)', letterSpacing: '-0.02em' }}
          >
            <span className="block" data-hero-line>
              AI가 속도를 해결한 시대.
            </span>
            <span className="block" data-hero-line>
              마지막 판단을 설계합니다.
            </span>
          </h2>
          <p data-hero-sub className="font-body text-text-sub text-[16px] leading-[1.7] mt-5 max-w-[48ch] break-keep">
            누가, 어떤 순간에, 왜 멈추는지 따라가며 제품의 출발점을 찾습니다.
            <br />
            흩어진 문제와 의견을 실행 가능한 흐름으로 정리하고
            <br />
            팀이 같은 기준으로 판단할 수 있는 구조를 설계합니다.
          </p>
        </div>

        <div data-hero-visual className="w-full lg:w-[112%] lg:-ml-6 xl:w-[118%] xl:-ml-10">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
