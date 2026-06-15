// About / 소개 (2026-06-13 신설 · 06-13 컴팩트 개편) — Hero 다음 상단에 배치(자기소개).
// 사용자 제공 'ABOUT ME' 디자인의 콘텐츠를 사이트 골격(흰 배경·얇은 선·Avant Garde/Pretendard)으로 번역.
// 가드레일(§8): 블루 그라데이션 미채택, 박스 남용 금지(→ border/divide), transform/opacity만.
// 개편: 증명사진 절반 크기 · 세로 여백 축소(한 눈에) · 과하지 않은 디자인 요소(편집형 인덱스 번호).
import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { PRINCIPLES, PROFILE, TIMELINE, type Principle, type TimelineGroup, type TimelineItem } from '../../data/about'
import { scrollToId } from '../../lib/lenis'
import Label, { labelEnClass as labelEn } from '../Label'
import FloatingObject from '../FloatingObject'

const aboutPad = { paddingBlock: 'clamp(72px, 8vw, 120px)' }

export default function About() {
  return (
    <section id="about" aria-label="소개" className="relative overflow-hidden border-t border-line">
      {/* ── 종이 콜라주 오브젝트 ─────────────────────────────────────────────
          Tier A: 우상단 정사각형 종이 — "나에 관한 페이지" 감각
          Tier B: 좌하단 라임 수평 테이프 — 에너지 포인트
          Tier C: 좌측 L자 코너 브라켓 — 편집지 '선택됨' 마커
          ─────────────────────────────────────────────────────────────────── */}
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-022.png"
        width={178} opacity={0.40} rotate={16}
        top="2%" right="1%"
        tier="A" floatDuration={8} floatDelay={1.2}
        revealDelay={200}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-010.png"
        width={215} opacity={0.33} rotate={-7}
        bottom="15%" left="-1%"
        tier="B" revealDelay={400}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-034.png"
        width={68} opacity={0.17} rotate={0}
        top="52%" left="1%"
        tier="C" revealDelay={600}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-006.png"
        width={46} opacity={0.20} rotate={0}
        bottom="8%" right="20%"
        tier="C" revealDelay={750}
        hideOnMobile
      />
      <div className="mx-auto max-w-[1200px] container-pad" style={aboutPad}>
        <Label as="p">About</Label>
        <Headline />

        <div className="mt-8 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <Identity />
          <Principles />
        </div>

        <Recognition />
      </div>
    </section>
  )
}

function Headline() {
  const [before, after] = PROFILE.headline.split(PROFILE.name)
  return (
    <h2
      className="font-body font-bold text-ink mt-4 leading-[1.3]"
      style={{ fontSize: 'clamp(24px,3.2vw,40px)', letterSpacing: '-0.03em' }}
    >
      {before}
      <span className="relative whitespace-nowrap">
        {PROFILE.name}
        <span
          aria-hidden
          className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full"
          style={{ background: 'var(--color-pulse)' }}
        />
      </span>
      {after}
    </h2>
  )
}

function Identity() {
  return (
    <div>
      <figure
        className="w-[150px] bg-panel overflow-hidden"
        style={{ borderRadius: 16, border: 'var(--frame-border)', boxShadow: 'var(--shadow-soft)' }}
      >
        <div className="p-2">
          <img
            src={PROFILE.portrait}
            alt={`${PROFILE.name} 프로필 사진`}
            loading="lazy"
            decoding="async"
            className="block w-full object-cover object-top"
            style={{ aspectRatio: '7 / 8', borderRadius: 8 }}
          />
        </div>
      </figure>

      <p className="font-display font-bold uppercase tracking-[-0.03em] text-ink text-[19px] mt-4">
        {PROFILE.romanized}
      </p>
      <p className="font-body text-text-muted text-[12.5px] mt-0.5">
        {PROFILE.name} · {PROFILE.role}
      </p>

      <dl className="mt-4">
        <MetaRow k="Born" v={PROFILE.birthday} />
        <MetaRow k="MBTI" v={PROFILE.mbti} />
        <MetaRow
          k="Email"
          v={
            <a href={`mailto:${PROFILE.email}`} className="hover:text-ink transition-colors">
              {PROFILE.email}
            </a>
          }
        />
        <MetaRow
          k="GitHub"
          v={
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">
              {PROFILE.githubHandle}
            </a>
          }
        />
        <MetaRow k="Phone" v={PROFILE.phone} />
      </dl>
    </div>
  )
}

function MetaRow({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="border-t border-line py-2 grid grid-cols-[58px_minmax(0,1fr)] items-baseline gap-3">
      <dt className={labelEn}>{k}</dt>
      <dd className="font-body text-text-sub text-[13px] m-0 truncate">{v}</dd>
    </div>
  )
}

function Principles() {
  return (
    <div className="border-t border-line pt-6 lg:border-t-0 lg:pt-0">
      <Label as="h3">How I work</Label>

      <ul className="mt-3">
        {PRINCIPLES.map((p, i) => (
          <PrincipleRow key={p.en} item={p} n={i + 1} />
        ))}
      </ul>
    </div>
  )
}

function PrincipleRow({ item, n }: { item: Principle; n: number }) {
  const [a, b] = item.body.split(item.highlight)
  return (
    <motion.li
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.55, delay: n * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-t border-line py-6 grid gap-3 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)] sm:gap-7 lg:gap-9"
    >
      {/* hover 시 좌측 강조 라인 (transform scaleY만 사용) */}
      <span
        aria-hidden
        className="absolute left-0 top-6 bottom-6 w-[2px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
        style={{ background: 'var(--color-pulse)' }}
      />
      <div className="flex items-baseline gap-3 sm:flex-col sm:gap-2 sm:pl-4">
        <span
          className="font-display font-bold text-[40px] leading-[0.85] text-text-faint transition-colors duration-300 group-hover:text-[var(--color-pulse)]"
          style={{ letterSpacing: '-0.04em' }}
        >
          {String(n).padStart(2, '0')}
        </span>
        <div className="sm:mt-1">
          <p className="font-display font-semibold uppercase tracking-[0.12em] text-text-muted text-[11px]">
            {item.en}
          </p>
          <p className="font-body font-bold text-ink text-[15px] leading-[1.35] mt-0.5">{item.title}</p>
        </div>
      </div>
      <p className="font-body text-text-sub text-[14.5px] leading-[1.78] sm:pt-1.5">
        {a}
        <strong className="font-semibold text-ink">{item.highlight}</strong>
        {b}
      </p>
    </motion.li>
  )
}

function Recognition() {
  return (
    <section aria-label="이력과 인정" className="mt-14">
      <div className="flex items-baseline gap-3">
        <Label as="h3">Recognition</Label>
        <span className="font-body text-text-muted text-[13px]">활동하고, 인정받은 것들.</span>
      </div>

      <div className="mt-6">
        {TIMELINE.map((g) => (
          <TimelineRow key={g.year} group={g} />
        ))}
      </div>
    </section>
  )
}

function TimelineRow({ group }: { group: TimelineGroup }) {
  return (
    <div className="border-t border-line py-6 grid gap-3 lg:grid-cols-[120px_minmax(0,1fr)]">
      <p className="font-display font-bold tracking-[-0.02em] text-ink text-[22px] leading-none">{group.year}</p>
      <ul>
        {group.items.map((it) => (
          <TimelineEntry key={it.title} item={it} />
        ))}
      </ul>
    </div>
  )
}

function TimelineEntry({ item }: { item: TimelineItem }) {
  const { link } = item
  return (
    <li className="border-t border-line first:border-t-0 py-3.5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {item.award && (
          <span
            className="font-body font-bold text-[10px] leading-none uppercase tracking-[0.08em] px-2 py-1 border rounded-full whitespace-nowrap"
            style={{ color: 'var(--color-pulse)', borderColor: 'var(--color-pulse)' }}
          >
            {item.award}
          </span>
        )}
        <p className="font-body font-bold text-ink text-[15px] leading-[1.4]">{item.title}</p>
        <span className="font-body text-text-faint text-[12px] ml-auto whitespace-nowrap">{item.period}</span>
      </div>
      {item.org && <p className="font-body text-text-muted text-[12px] leading-[1.5] mt-1">{item.org}</p>}
      {item.note && <p className="font-body text-text-sub text-[13px] leading-[1.6] mt-1 max-w-[64ch]">{item.note}</p>}
      {link && (
        <button
          type="button"
          onClick={() => scrollToId(link.anchorId)}
          className="font-body font-semibold text-[12px] tracking-[0.04em] mt-2 inline-block hover:underline underline-offset-4"
          style={{ color: link.color }}
        >
          → {link.label}에서 활용
        </button>
      )}
    </li>
  )
}
