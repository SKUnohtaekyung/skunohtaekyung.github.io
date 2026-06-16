// 랜딩 — 7섹션 골격 (P1). Hero 모션(P3)·시그니처 전환(P4)·낙서/피날레 연출(P6)은 이후 페이즈.
// 가드레일(§8): 박스 남용 금지(border-t 구분), 라임 텍스트 금지, min-h-[100dvh].
// 타이포 경계: Avant Garde는 영문 디스플레이 전용(§0.1-6) — 한글 헤드라인·프레이밍은 Pretendard.
import { motion } from 'framer-motion'
import { useRef, useState, useEffect, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import About from '../components/about/About'
import Doodle from '../components/Doodle'
import Finale from '../components/finale/Finale'
import Hero from '../components/hero/Hero'
import Label, { labelEnClass as labelEn } from '../components/Label'
import FlipTitle, { type FlipTitleHandle } from '../components/transition/FlipTitle'
import { PROJECTS, type Project, type PreviewDetail } from '../data/projects'
import { SIDE_WORKS, type SideWork, type SideWorkImage } from '../data/sideWorks'
import { FEATURED_WRITING, VELOG_PROFILE, VELOG_URL, WRITING, WRITING_AXES, type Post } from '../data/writing'
import { scrollToId } from '../lib/lenis'
import { enterRoom } from '../lib/signature'
import FloatingObject from '../components/FloatingObject'

/* 섹션 수직 리듬 — design-system §9.1 --section-padding-y */
const sectionPad = { paddingBlock: 'clamp(96px, 12vw, 180px)' }

/* SelectedBlock 프로젝트별 종이 조각 장식은 각 프로젝트 데이터(projects.ts `blockObjects`)가 들고 있다.
   tintSoft 배경과 색조 조화 — PULSE(연파랑)·PickFit(연보라)·LikeLion(연파랑). 블록당 보통 2개. */

/* 생각의 기록 — 축별 MS Paint 낙서 (섹션 전용 언어 §0.1) */
const AXIS_DOODLE = ['squiggle', 'arrow', 'star'] as const

export default function Landing() {
  return (
    <>
      <BottomNav />
      <main>
        <Hero />
        <About />
        <TenSecondSummary />
        <SelectedProjects />
        <Writing />
        <SideWorks />
        <Finale />
      </main>
    </>
  )
}

const NAV_SECTIONS = [
  { id: 'about',    label: 'ABOUT'   },
  { id: 'selected', label: 'WORK'    },
  { id: 'writing',  label: 'WRITING' },
  { id: 'side',     label: 'LAB'     },
  { id: 'contact',  label: 'CONTACT' },
] as const

function BottomNav() {
  const [active, setActive] = useState('')
  const [shown, setShown] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const update = () => {
      setShown(window.scrollY > 80)
      const mid = window.innerHeight * 0.55
      let cur = ''
      for (const { id } of NAV_SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < mid) cur = id
      }
      setActive(cur)
      const footer = document.querySelector('footer')
      setDark(!!footer && footer.getBoundingClientRect().top < window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <nav
      aria-label="섹션 내비게이션"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 select-none"
      style={{
        opacity: shown ? 1 : 0,
        pointerEvents: shown ? 'auto' : 'none',
        transition: 'opacity 0.5s',
      }}
    >
      <div
        className="flex items-center rounded-full px-5 py-[9px]"
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: dark
            ? 'rgba(10,10,10,0.55)'
            : 'rgba(255,255,255,0.72)',
          border: dark
            ? '1px solid rgba(255,255,255,0.1)'
            : '1px solid rgba(10,10,10,0.09)',
          boxShadow: dark
            ? '0 4px 28px rgba(0,0,0,0.45)'
            : '0 4px 28px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.85)',
          transition: 'background 0.5s, border-color 0.5s, box-shadow 0.5s',
        }}
      >
        {NAV_SECTIONS.map(({ id, label }, i) => {
          const isActive = active === id
          return (
            <Fragment key={id}>
              {i > 0 && (
                <span
                  aria-hidden
                  className="mx-3 text-[11px] leading-none"
                  style={{ color: dark ? 'rgba(255,255,255,0.18)' : 'rgba(10,10,10,0.18)' }}
                >
                  ·
                </span>
              )}
              <button
                type="button"
                onClick={() => scrollToId(id)}
                className="font-body text-[10px] tracking-[0.16em] uppercase focus-visible:outline-none"
                style={{
                  color: isActive
                    ? (dark ? 'rgba(255,255,255,0.92)' : 'var(--color-ink)')
                    : (dark ? 'rgba(255,255,255,0.38)' : 'rgba(10,10,10,0.38)'),
                  fontWeight: isActive ? 600 : 400,
                  transition: 'color 0.3s, font-weight 0.3s',
                }}
              >
                {label}
              </button>
            </Fragment>
          )
        })}
      </div>
    </nav>
  )
}

function TenSecondSummary() {
  return (
    <section id="summary" aria-label="10초 요약" className="relative overflow-hidden border-t border-line">
      {/* 전환 섹션 — 3개로 레이어드 */}
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-020.png"
        width={128} opacity={0.36} rotate={11}
        top="20%" right="-2%"
        tier="B" revealDelay={200}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-006.png"
        width={46} opacity={0.22} rotate={0}
        bottom="28%" left="6%"
        tier="C" revealDelay={350}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-033.png"
        width={72} opacity={0.16} rotate={180}
        bottom="5%" right="3%"
        tier="C" revealDelay={500}
        hideOnMobile
      />
      <div className="mx-auto max-w-[1200px] container-pad" style={sectionPad}>
        <Label as="h2" lang="ko">대표 작업</Label>
        <ul className="mt-8 flex flex-col gap-6">
          {PROJECTS.map((p) => (
            <li key={p.key}>
              <button
                type="button"
                onClick={() => scrollToId(p.anchorId)}
                className="group text-left flex items-baseline gap-4"
              >
                <span
                  className="inline-block h-2 w-2 rounded-full shrink-0 translate-y-[-2px] opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ background: p.ink }}
                  aria-hidden
                />
                <span className="font-body text-[16px] leading-[1.6] text-text-sub group-hover:translate-x-1 transition-transform">
                  <strong className="font-display font-semibold uppercase tracking-[-0.04em]" style={{ color: p.ink }}>
                    {p.name}
                  </strong>
                  <span className="text-text-muted"> — </span>
                  {p.tenSecond}
                  {p.tenSecondCredit && <span className="text-text-muted"> ({p.tenSecondCredit})</span>}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SelectedProjects() {
  return (
    <section id="selected" className="border-t border-line">
      <h2 className="sr-only">Selected Projects</h2>
      {PROJECTS.map((p, i) => (
        <SelectedBlock key={p.key} project={p} index={i} />
      ))}
    </section>
  )
}

/* 유일한 시그니처 진입 지점 (§0.1-3) — 제목/CTA 클릭 = 글자 플립 + 원확산 (§6) */
function SelectedBlock({ project: p, index }: { project: Project; index: number }) {
  const navigate = useNavigate()
  const flipRef = useRef<FlipTitleHandle>(null)
  const visualLeft = index % 2 === 0 // PULSE 좌 → PickFit 우 → LikeLion 좌 (지그재그, §0.1-3)

  const enter = (fromLetter: number) => {
    void enterRoom({
      project: p,
      navigate,
      fromLetter,
      playFlip: (from) => flipRef.current?.play(from),
    })
  }

  const blockObjs = p.blockObjects ?? []

  return (
    <article id={p.anchorId} className="relative overflow-hidden scroll-mt-16" style={{ background: p.tintSoft }}>
      {/* 프로젝트 tint 배경 위 종이 조각 2종 — 테마 감각 즉시 전달 */}
      {blockObjs.map((obj, i) => (
        <FloatingObject
          key={i}
          {...obj}
          tier="B"
          revealDelay={300 + i * 160}
          hideOnMobile
        />
      ))}
      <div
        className="mx-auto max-w-[1200px] container-pad grid gap-12 md:grid-cols-2 md:items-center"
        style={sectionPad}
      >
        <motion.div
          className={visualLeft ? 'md:order-1' : 'md:order-2'}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <SelectedPreview project={p} />
        </motion.div>

        <motion.div
          className={visualLeft ? 'md:order-2' : 'md:order-1'}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={labelEn}>
            {p.room} · <span style={{ color: p.ink }}>{p.name}</span>
          </p>

          <div className="mt-4">
            <FlipTitle ref={flipRef} name={p.name} ink={p.ink} onActivate={enter} />
          </div>

          <p className="font-body font-medium text-text-muted text-[12.5px] mt-4">{p.role}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.name} 핵심 증거`}>
            {p.proofChips.map((chip, chipIdx) => (
              <motion.li
                key={chip}
                initial={{ opacity: 0, scale: 0.82 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: 0.22 + chipIdx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="font-body font-semibold text-[12px] leading-none px-2.5 py-2 border border-line bg-white/45"
                style={{ color: p.ink, borderRadius: 999 }}
              >
                {chip}
              </motion.li>
            ))}
          </ul>

          <p className="font-body text-text-sub text-[16px] leading-[1.7] mt-6 max-w-[55ch]">
            {p.summary}
          </p>
          <p className="font-body text-text-sub text-[14px] leading-[1.65] mt-4 max-w-[58ch]">
            <span className="font-semibold text-ink">핵심 판단</span> — {p.decision}
          </p>
          <p className="font-body text-text-muted text-[13.5px] leading-[1.65] mt-2 max-w-[58ch]">
            {p.verification}
          </p>

          <button
            type="button"
            onClick={() => enter(0)}
            className="font-body font-semibold text-[14px] tracking-[0.04em] mt-10 inline-block cursor-pointer"
            style={{ color: p.ink }}
          >
            작업 과정 보기 →
          </button>
        </motion.div>
      </div>
    </article>
  )
}

function SelectedPreview({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <figure className={`group ${className}`}>
      <div
        className="bg-panel overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]"
        style={{
          borderRadius: 'var(--frame-radius)',
          border: 'var(--frame-border)',
          boxShadow: 'var(--shadow-frame)',
          transitionTimingFunction: 'var(--ease-default)',
        }}
      >
        <div className="p-2.5 md:p-3">
          <img
            src={project.previewImage.src}
            alt={project.previewImage.alt}
            loading="lazy"
            decoding="async"
            className="block w-full aspect-video object-cover"
            style={{ borderRadius: 'calc(var(--frame-radius) - 10px)' }}
          />
        </div>
        {project.previewDetail && <PreviewMap detail={project.previewDetail} />}
      </div>
      <figcaption className="font-body text-text-muted text-[12.5px] leading-[1.5] mt-3 px-1">
        {project.previewImage.caption}
      </figcaption>
    </figure>
  )
}

/* 프리뷰 카드 하단 미니맵 — 프로젝트 데이터의 previewDetail이 있을 때만 렌더(범용).
   예: LikeLion 4단계 커리큘럼. accent는 데이터가 지정(LikeLion은 블루 #0060C6). */
function PreviewMap({ detail }: { detail: PreviewDetail }) {
  return (
    <div className="border-t border-line px-4 py-3 md:px-5">
      <p className={`${labelEn} mb-2`} style={{ color: detail.accent }}>
        {detail.label}
      </p>
      <ol className="grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
        {detail.rows.map(([key, label]) => (
          <li key={key} className="grid grid-cols-[24px_1fr] items-baseline gap-2.5">
            <span className="font-display font-semibold uppercase tracking-[-0.04em] text-[14px]" style={{ color: detail.accent }}>
              {key}
            </span>
            <span className="font-body text-text-sub text-[12.5px] leading-[1.4]">{label}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Writing() {
  return (
    <section id="writing" aria-label="생각의 기록" className="relative overflow-hidden border-t border-line">
      {/* ── 종이 콜라주 오브젝트 ─────────────────────────────────────────────
          Tier A: 우측 세로 가격표 태그 — "생각에 라벨을 붙인다" 은유
          Tier B: 좌상단 베이지 종이 — 섹션 진입 분위기
          Tier C: 우하단 연한 원점 — 미세 질감
          ─────────────────────────────────────────────────────────────────── */}
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-015.png"
        width={70} opacity={0.38} rotate={-5}
        top="12%" right="-2%"
        tier="A" floatDuration={9} floatDelay={1.5}
        revealDelay={300}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-023.png"
        width={168} opacity={0.36} rotate={20}
        top="-3%" left="-2%"
        tier="B" revealDelay={500}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-009.png"
        width={40} opacity={0.18} rotate={0}
        bottom="20%" right="15%"
        tier="C" revealDelay={700}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-017.png"
        width={225} opacity={0.24} rotate={-4}
        bottom="10%" left="2%"
        tier="B" revealDelay={900}
        hideOnMobile
      />
      <div className="mx-auto max-w-[1200px] container-pad" style={sectionPad}>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <Label as="h2" lang="ko">생각의 기록</Label>
            <p
              className="font-body font-bold text-ink mt-4 leading-[1.35]"
              style={{ fontSize: 'clamp(22px,3vw,34px)' }}
            >
              글은 제가 문제를 어떻게 보고, 어떤 기준으로 판단하는지 보여주는 또 다른 작업물입니다.
            </p>
            <p className="font-body text-text-sub text-[15.5px] leading-[1.75] mt-5 max-w-[68ch]">
              벨로그에는 AI를 일에 붙이는 방식, PM/UX 기획 수업에서 정리한 기준, 사용자와 조직을 해석한
              생각들을 기록하고 있습니다.
            </p>
          </div>

          <aside className="border-t border-line pt-5">
            <p className={labelEn}>Velog Archive</p>
            <p className="font-body font-bold text-ink text-[22px] leading-[1.35] mt-3">
              {VELOG_PROFILE.displayName} · {VELOG_PROFILE.postCount} posts
            </p>
            <p className="font-body text-text-sub text-[14px] leading-[1.65] mt-2">
              {VELOG_PROFILE.bio}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="벨로그 태그">
              {VELOG_PROFILE.tags.map((tag) => (
                <li
                  key={tag}
                  className="font-body font-semibold text-[12px] leading-none px-2.5 py-2 border border-line bg-white/50 text-velog"
                  style={{ borderRadius: 999 }}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={VELOG_URL}
              target="_blank"
              rel="noreferrer"
              className="font-body font-semibold text-[13px] tracking-[0.04em] text-velog mt-6 inline-block"
            >
              Velog 전체 보기 →
            </a>
          </aside>
        </div>

        <section aria-label="대표 벨로그 글" className="mt-16">
          <div className="flex items-center gap-3">
            <Label as="h3" lang="ko">대표 글</Label>
            <Doodle variant="arrow" className="translate-y-[1px]" />
          </div>
          <ul className="mt-8 grid gap-8 lg:grid-cols-3">
            {FEATURED_WRITING.map((post) => (
              <FeaturedPostItem key={post.slug} post={post} />
            ))}
          </ul>
        </section>

        <section aria-label="전체 벨로그 글" className="mt-20">
          {WRITING_AXES.map((axis, axisIndex) => (
            <div key={axis} className="border-t border-line py-10 grid gap-8 lg:grid-cols-[240px_1fr]">
              <div className="flex items-start gap-3 pt-1">
                <Label as="h3" lang="ko">{axis}</Label>
                <Doodle variant={AXIS_DOODLE[axisIndex] ?? 'squiggle'} className="translate-y-[1px]" />
              </div>
              <ul className="grid gap-0 md:grid-cols-2 md:gap-x-10">
                {WRITING.filter((w) => w.axis === axis).map((w) => (
                  <li key={w.slug} className="border-t border-line first:border-t-0 md:[&:nth-child(2)]:border-t-0">
                    <ArchivePostItem post={w} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </section>
  )
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="글 태그">
      {tags.map((tag) => (
        <li key={tag} className="font-body font-semibold text-[11px] leading-none text-velog">
          #{tag}
        </li>
      ))}
    </ul>
  )
}

function FeaturedPostItem({ post }: { post: Post }) {
  return (
    <li>
      <article className="border-t border-line pt-5 h-full">
        <a href={post.href} target="_blank" rel="noreferrer" className="group grid grid-cols-[1fr_108px] gap-4 lg:flex lg:flex-col">
          <div>
            <p className="font-body font-semibold text-[12px] tracking-[0.08em] text-text-muted">
              {post.releasedAt} · {post.source}
            </p>
            <h3 className="font-body font-bold text-ink text-[18px] leading-[1.45] mt-3 group-hover:underline underline-offset-4">
              {post.title}
            </h3>
            <p className="font-body text-text-sub text-[14px] leading-[1.65] mt-2">
              {post.summary}
            </p>
          </div>
          <img
            src={post.thumbnail}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="w-[108px] h-[72px] sm:w-[160px] sm:h-[96px] lg:w-[180px] lg:h-[108px] object-cover justify-self-end"
            style={{ borderRadius: 8 }}
          />
        </a>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <TagList tags={post.tags} />
          <p className="font-body text-text-muted text-[12px]">{post.connect}</p>
        </div>
        {post.imageStrip && (
          <ul className="mt-4 flex gap-2 overflow-hidden" aria-label={`${post.title} 본문 이미지 미리보기`}>
            {post.imageStrip.slice(0, 3).map((src) => (
              <li key={src} className="shrink-0">
                <img
                  src={src}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  decoding="async"
                  className="h-14 w-20 md:h-16 md:w-24 object-cover"
                  style={{ borderRadius: 6 }}
                />
              </li>
            ))}
          </ul>
        )}
      </article>
    </li>
  )
}

function ArchivePostItem({ post }: { post: Post }) {
  return (
    <article className="py-5">
      <a href={post.href} target="_blank" rel="noreferrer" className="group grid grid-cols-[1fr_88px] gap-4 sm:grid-cols-[1fr_96px]">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-body font-semibold text-[12px] tracking-[0.08em] text-text-muted">
              {post.releasedAt}
            </p>
            <TagList tags={post.tags} />
          </div>
          <h4 className="font-body font-bold text-ink text-[16px] leading-[1.5] mt-2 group-hover:underline underline-offset-4">
            {post.title}
          </h4>
          <p className="font-body text-text-sub text-[13.5px] leading-[1.6] mt-1.5">
            {post.description}
          </p>
          <p className="font-body text-text-muted text-[12px] mt-2">
            {post.source} → {post.connect}
          </p>
        </div>
        <img
          src={post.thumbnail}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="w-[88px] h-[60px] sm:w-[96px] sm:h-16 object-cover justify-self-end mt-1"
          style={{ borderRadius: 6 }}
        />
      </a>
    </article>
  )
}

function SideWorks() {
  return (
    <section id="side" aria-label="실험과 확장" className="relative overflow-hidden border-t border-line">
      {/* 배경 이미지 효과 위에 종이 콜라주 3개 — 층위 겹침 */}
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-014.png"
        width={63} opacity={0.32} rotate={-8}
        top="5%" right="4%"
        tier="B" revealDelay={200}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-022.png"
        width={172} opacity={0.30} rotate={14}
        bottom="5%" left="-2%"
        tier="A" floatDuration={9} floatDelay={2}
        revealDelay={400}
        hideOnMobile
      />
      <FloatingObject
        src="/images/design-assets/objects/common/common-object-007.png"
        width={42} opacity={0.16} rotate={0}
        top="42%" right="7%"
        tier="C" revealDelay={600}
        hideOnMobile
      />
      <div className="mx-auto max-w-[1200px] container-pad" style={sectionPad}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <Label as="p">Side Experiments</Label>
            <h2 className="font-body font-semibold text-ink text-[38px] leading-[1.08] mt-4 sm:text-[56px] lg:text-[72px]">
              실험과 확장
            </h2>
            <p className="font-body text-text-sub text-[15.5px] leading-[1.75] mt-5 max-w-[66ch]">
              대표 프로젝트 바깥에서 이어간 시각화, 지식 구조화, 인터랙션 실험입니다. 결과 화면뿐
              아니라 어떤 개념을 빌려와 어떤 경험 구조로 바꿨는지까지 함께 보여줍니다.
            </p>
          </div>

          <aside className="border-t border-line pt-5">
            <p className={labelEn}>section focus</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {['Visual Direction', 'Knowledge Structure', 'Interaction', 'PM Thinking'].map((tag) => (
                <li
                  key={tag}
                  className="font-body font-semibold text-[12px] leading-none px-2.5 py-2 border border-line bg-white/45 text-text-sub"
                  style={{ borderRadius: 999 }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <ul className="mt-16 flex flex-col gap-20">
          {SIDE_WORKS.map((work, index) => (
            <SideWorkItem key={work.title} work={work} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function SideWorkItem({ work, index }: { work: SideWork; index: number }) {
  const visualFirst = index % 2 === 1
  const textOrder = visualFirst ? 'lg:order-2' : 'lg:order-1'
  const visualOrder = visualFirst ? 'lg:order-1' : 'lg:order-2'
  const backgroundAlign = work.backgroundPosition ?? (visualFirst ? 'left' : 'right')

  return (
    <li className="relative border-t border-line pt-10 lg:pt-12 overflow-hidden">
      <SideWorkBackground image={work.backgroundImage} align={backgroundAlign} />
      <article className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <motion.div
            className={`min-w-0 ${textOrder}`}
            initial={{ opacity: 0, x: visualFirst ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={labelEn}>{work.eyebrow}</p>
            <h3 className="font-display font-semibold text-ink text-[44px] leading-[0.92] mt-3 sm:text-[64px] lg:text-[82px]">
              {work.title}
            </h3>
            {work.period && <p className="font-body text-text-muted text-[13px] leading-[1.55] mt-4">{work.period}</p>}
            <p className="font-body text-text-sub text-[16px] leading-[1.75] mt-5 max-w-[58ch]">{work.oneLine}</p>

            <div className="border-y border-line py-4 mt-6">
              <p className={labelEn}>motif</p>
              <p className="font-body font-semibold text-ink text-[15px] leading-[1.55] mt-2">{work.motif}</p>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${work.title} 핵심 키워드`}>
              {work.chips.map((chip) => (
                <li
                  key={chip}
                  className="font-body font-semibold text-[12px] leading-none px-2.5 py-2 border border-line bg-white/45 text-text-sub"
                  style={{ borderRadius: 999 }}
                >
                  {chip}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={`min-w-0 ${visualOrder}`}
            initial={{ opacity: 0, x: visualFirst ? -40 : 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <SideImageFrame image={work.primaryImage} large />
          </motion.div>
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <dl className={`min-w-0 ${textOrder}`}>
            <SideDetailRow label="Question" body={work.question} />
            <SideDetailRow label="Approach" body={work.approach} />
            <SideDetailRow label="Process" body={work.process} />
            <SideDetailRow label="Output" body={work.output} />
            <SideDetailRow label="Learning" body={work.learning} />

            {work.links && (
              <div className="border-t border-line pt-5">
                {work.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body font-semibold text-[13px] tracking-[0.04em] text-text-muted hover:text-ink transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </dl>

          <div className={`min-w-0 order-first ${visualOrder}`}>
            <div className="grid gap-3 sm:grid-cols-2">
              {work.supportingImages.map((image) => (
                <div key={image.src} className={image.span === 'full' ? 'sm:col-span-2' : undefined}>
                  <SideImageFrame image={image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}

function SideWorkBackground({ image, align }: { image?: SideWorkImage; align: 'left' | 'right' | 'center' }) {
  if (!image) return null
  const objectPosition =
    align === 'center' ? 'object-center' : align === 'left' ? 'object-left-top' : 'object-right-top'

  return (
    <div
      className="pointer-events-none absolute inset-x-[-24px] top-0 h-[560px] overflow-hidden sm:inset-x-[-40px] lg:h-[680px]"
      aria-hidden="true"
    >
      <img
        src={image.src}
        alt=""
        loading="lazy"
        decoding="async"
        className={`h-full w-full scale-[1.03] object-cover opacity-[0.2] blur-[0.5px] saturate-[0.82] ${objectPosition}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.9)_0%,rgba(248,250,252,0.58)_48%,rgba(248,250,252,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.66)_0%,rgba(248,250,252,0.88)_64%,rgba(248,250,252,1)_100%)]" />
    </div>
  )
}

function SideDetailRow({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-t border-line py-4 grid gap-2 sm:grid-cols-[112px_minmax(0,1fr)]">
      <dt className={labelEn}>{label}</dt>
      <dd className="font-body text-text-sub text-[14.5px] leading-[1.7] m-0">{body}</dd>
    </div>
  )
}

const FRAME_MAX_H = { sm: 260, md: 400, lg: 560, xl: 680 } as const

/* 액자(카드)를 이미지 크기에 맞춰 줄인다(w-fit) → 작은 이미지가 큰 흰 여백 속에 떠 보이지 않음.
   object-contain + 명시적 max-height(px) → 어떤 비율이든 절대 안 잘림. (size로 상한 제어) */
function SideImageFrame({ image, large = false }: { image: SideWorkImage; large?: boolean }) {
  const size = image.size ?? (large ? 'lg' : 'sm')

  return (
    <figure>
      <div
        className="mx-auto w-fit max-w-full bg-panel overflow-hidden"
        style={{
          borderRadius: 'var(--frame-radius)',
          border: 'var(--frame-border)',
          boxShadow: 'var(--shadow-soft)',
        }}
      >
        <div className="p-[2px]">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="block max-w-full w-auto h-auto object-contain"
            style={{ maxHeight: FRAME_MAX_H[size], maxWidth: image.maxW ?? undefined, borderRadius: 'calc(var(--frame-radius) - 4px)' }}
          />
        </div>
      </div>
      <figcaption className="font-body text-text-muted text-[12.5px] leading-[1.5] mt-2.5 px-1 text-center">
        {image.caption}
      </figcaption>
    </figure>
  )
}

/* Finale(블랙 피날레)은 components/finale/Finale.tsx — 검은 원확산 + 연락처 + Carpe Diem stagger */
