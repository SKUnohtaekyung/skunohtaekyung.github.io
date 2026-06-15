// 블랙 피날레 (design-direction §7) — 3박자:
// ① 검은 원확산(~0.7s, #0A0A0A)이 흰 세계를 삼킴 ② 연락처(호버 시 브랜드색 점등)
// ③ "Carpe Diem" 글자 하나씩 Hero보다 느리고 조용한 stagger + 마무리 한 줄.
// 기본 마크업 = 완성 상태(검정 배경·콘텐츠 가시) — JS 없거나 reduced-motion이면 그대로 보임.
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { VELOG_URL } from '../../data/writing'
import { EASE_DEFAULT, EASE_ROOM, prefersReducedMotion } from '../../lib/motion'
import FloatingObject from '../FloatingObject'

const GITHUB_URL = 'https://github.com/SKUnohtaekyung'
const EMAIL = 'ntk9477@naver.com'
const CARPE = 'Carpe Diem'

interface ContactItem {
  label: string
  sub: string
  href: string
  hoverClass: string
  external: boolean
}

const CONTACTS: ContactItem[] = [
  { label: 'GitHub', sub: 'SKUnohtaekyung', href: GITHUB_URL, hoverClass: 'group-hover:text-github-bright', external: true },
  { label: 'Velog', sub: '@taek___0', href: VELOG_URL, hoverClass: 'group-hover:text-velog', external: true },
  { label: 'Email', sub: EMAIL, href: `mailto:${EMAIL}`, hoverClass: 'group-hover:text-likelion-orange', external: false },
]

function ContactRow({ label, sub, href, hoverClass, external }: ContactItem) {
  const linkProps = external ? { target: '_blank' as const, rel: 'noreferrer' } : {}
  return (
    <li data-contact-row className="group border-b border-white/15 relative overflow-hidden">
      <span
        aria-hidden
        className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 bg-white/[0.06] will-change-transform"
      />
      <a href={href} {...linkProps} className="relative flex items-center justify-between py-6 lg:py-7 gap-6">
        <div>
          <p
            className={`font-display font-bold text-white leading-none tracking-[-0.04em] transition-colors duration-300 ${hoverClass}`}
            style={{ fontSize: 'clamp(28px, 5vw, 54px)' }}
          >
            {label}
          </p>
          <p className="font-body text-white/35 text-[13px] mt-1.5 transition-colors duration-300 group-hover:text-white/60">
            {sub}
          </p>
        </div>
        <span
          aria-hidden
          className="font-body text-white/25 text-[20px] leading-none transition-all duration-300 will-change-transform group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-white/70"
        >
          {external ? '↗' : '→'}
        </span>
      </a>
    </li>
  )
}

export default function Finale() {
  const root = useRef<HTMLElement>(null)
  const black = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rootEl = root.current
    const blackEl = black.current
    if (!rootEl || !blackEl || prefersReducedMotion()) return

    const letters = rootEl.querySelectorAll('[data-carpe-letter]')
    const fades = rootEl.querySelectorAll('[data-finale-fade]')
    const end = rootEl.querySelectorAll('[data-finale-end]')
    const contactRows = rootEl.querySelectorAll('[data-contact-row]')

    // 숨김은 모션 경로에서만 생성 (정보 손실 방지)
    gsap.set(blackEl, { clipPath: 'circle(0% at 50% 50%)' })
    gsap.set(fades, { opacity: 0, y: 14 })
    gsap.set(contactRows, { opacity: 0, y: 24 })
    gsap.set(letters, { opacity: 0, y: 18 })
    gsap.set(end, { opacity: 0 })

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return
        io.disconnect()
        gsap
          .timeline()
          .to(blackEl, { clipPath: 'circle(150% at 50% 50%)', duration: 0.7, ease: EASE_ROOM })
          .to(fades, { opacity: 1, y: 0, duration: 0.5, ease: EASE_DEFAULT, stagger: 0.08 }, '-=0.15')
          .to(contactRows, { opacity: 1, y: 0, duration: 0.65, ease: EASE_DEFAULT, stagger: 0.12 }, '-=0.1')
          .to(letters, { opacity: 1, y: 0, duration: 0.9, ease: EASE_DEFAULT, stagger: 0.08 }, '-=0.2')
          .to(end, { opacity: 1, duration: 0.6, ease: 'power1.out' }, '-=0.4')
      },
      { threshold: 0.3 },
    )
    io.observe(rootEl)
    return () => {
      io.disconnect()
      gsap.killTweensOf([blackEl, ...fades, ...contactRows, ...letters, ...end])
    }
  }, [])

  return (
    <footer ref={root} className="relative overflow-hidden text-white">
      <div ref={black} aria-hidden className="absolute inset-0 bg-[#0A0A0A]" />

      <div className="relative">
        {/* Ghost 종이 — #0A0A0A 배경 위 희미한 백색 잔영 (opacity 극소)
            어두운 공간을 유영하는 종이 조각 = "아직 쓰이지 않은 가능성" */}
        <FloatingObject
          src="/images/design-assets/objects/common/common-object-001.png"
          width={195} opacity={0.06} rotate={-10}
          bottom="12%" right="4%"
          tier="A" floatDuration={12} floatDelay={3}
          revealDelay={800}
          hideOnMobile
        />
        <FloatingObject
          src="/images/design-assets/objects/common/common-object-046.png"
          width={38} opacity={0.05} rotate={5}
          top="30%" left="6%"
          tier="C" revealDelay={1200}
          hideOnMobile
        />

        <section aria-label="후킹" className="mx-auto max-w-[1200px] container-pad pt-24 pb-16">
          <h2
            data-finale-fade
            className="font-display font-bold text-white leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
          >
            아직 완성된 PM은 아닙니다.
          </h2>
          <p
            data-finale-fade
            className="font-display font-bold text-white/40 leading-[1.05] tracking-[-0.03em] mt-2"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
          >
            그래서 더 부딪히고, 더 배우려 합니다.
          </p>
          <p data-finale-fade className="font-body text-white/50 text-[15px] leading-[1.85] mt-7 max-w-[42ch]">
            팀을 이끌어 제품을 만들고, 커리큘럼을 짜서 직접 가르쳐봤습니다.<br />
            잘한 것도 부족했던 것도 거기서 배웠고, 그 배움을 다음 팀에서 더 키워가고 싶습니다.
          </p>
        </section>

        <section id="contact" aria-label="연락처" className="mx-auto max-w-[1200px] container-pad pt-2 pb-0">
          <h2 className="sr-only">Contact</h2>
          <p data-finale-fade className="font-body text-white/30 text-[11px] tracking-[0.14em] uppercase mb-5">Contact</p>
          <ul className="border-t border-white/15">
            {CONTACTS.map((c) => (
              <ContactRow key={c.label} {...c} />
            ))}
          </ul>
        </section>

        <section aria-label="마무리" className="mx-auto max-w-[1200px] container-pad pb-32 pt-12">
          <p
            className="font-display font-bold uppercase tracking-[-0.04em] leading-[0.95]"
            style={{ fontSize: 'clamp(48px,8vw,120px)' }}
          >
            <span className="sr-only">{CARPE}</span>
            <span aria-hidden className="flex flex-wrap">
              {CARPE.split('').map((ch, i) => (
                <span key={i} data-carpe-letter className="inline-block whitespace-pre will-change-transform">
                  {ch}
                </span>
              ))}
            </span>
          </p>
          <p data-finale-end className="font-body text-white/60 text-[14px] leading-[1.7] mt-6">
            완벽한 타이밍보다, 오늘의 작은 첫 행동을 믿습니다.
          </p>
        </section>
      </div>
    </footer>
  )
}
