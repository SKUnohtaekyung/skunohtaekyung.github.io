// Hero 비주얼 — static 이미지를 항상 base layer로 즉시 노출, r3f canvas는 바로 위에서 렌더.
// static→canvas 크로스페이드 제거 — canvas는 alpha:true이므로 meshes가 opacity:0→1 애니메이션하면서
// static을 덮어감. 사용자 입장에서는 static이 보이다가 바로 효과가 붙은 이미지로 전환.
// WebGL context lost / SceneBoundary 오류 시: canvas 언마운트, static이 그대로 남음.
import { Component, lazy, Suspense, useState, type ReactNode } from 'react'
import { HERO_STATIC_SRC } from '../../data/heroLayers'

const HeroScene = lazy(() => import('./HeroScene'))
const ALT = '폰을 보며 작업 중인 노태경의 종이 콜라주 자화상 — 차트·와이어프레임·메모지가 떠 있는 작업 장면'

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

export default function HeroVisual() {
  // reduced-motion이면 WebGL 씬을 아예 마운트하지 않음(정적 이미지만). CSR 전용이라 render 시점에 평가 가능.
  const [enableScene] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [sceneDead, setSceneDead] = useState(false)

  return (
    <div className="relative w-full aspect-[1672/941]" role="img" aria-label={ALT}>
      {/* 항상 보이는 기본 레이어 — canvas 실패 시 폴백, 정상 시에는 meshes가 위에서 덮음 */}
      <img
        src={HERO_STATIC_SRC}
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {enableScene && !sceneDead && (
        <SceneBoundary>
          <Suspense fallback={null}>
            <HeroScene onLost={() => setSceneDead(true)} />
          </Suspense>
        </SceneBoundary>
      )}
    </div>
  )
}
