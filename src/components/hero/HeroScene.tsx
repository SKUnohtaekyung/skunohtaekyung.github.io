// Hero 콜라주 씬 — r3f 오쏘 카메라(월드 1unit = 캔버스 px), hero_layers 좌표 충실 배치.
// 모션 가드레일: transform/opacity만. 등장 '톡톡'=ease-paper, 오브젝트 자체 부유(sine float), 스크롤 시 오브젝트만 미세 이동.
// reduced-motion 분기는 HeroVisual에서 처리(이 컴포넌트는 모션 전제).
import { useTexture } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import type { Mesh, MeshBasicMaterial } from 'three'
import { HERO_CANVAS, HERO_LAYERS, PARALLAX_PX, type HeroLayer } from '../../data/heroLayers'
import { EASE_PAPER } from '../../lib/motion'

// 모듈 로드 시점에 텍스처 프리로드 — HeroScene lazy chunk가 임포트되는 즉시 캐싱 시작
HERO_LAYERS.forEach(l => useTexture.preload(l.src))

const CX = HERO_CANVAS.width / 2
const CY = HERO_CANVAS.height / 2
/* 텍스트 등장(~0.9s) 뒤 자화상 → 오브젝트 톡톡 (design-direction §5 등장 순서) */
const PERSON_DELAY = 0.85
const OBJECT_DELAY = 1.15

/* scrollY는 매 프레임 getter 대신 passive 리스너로 캐시 (perf — useFrame 내 레이아웃 접근 제거) */
let cachedScrollY = 0
if (typeof window !== 'undefined') {
  cachedScrollY = window.scrollY
  window.addEventListener('scroll', () => {
    cachedScrollY = window.scrollY
  }, { passive: true })
}

function LayerMesh({ layer, index }: { layer: HeroLayer; index: number }) {
  const tex = useTexture(layer.src)
  const mesh = useRef<Mesh>(null)
  const mat = useRef<MeshBasicMaterial>(null)
  const strength = PARALLAX_PX[layer.speed]
  const baseX = layer.x + layer.w / 2 - CX
  const baseY = -(layer.y + layer.h / 2 - CY)
  const isPerson = layer.speed === 'person'

  useEffect(() => {
    const m = mesh.current
    const material = mat.current
    if (!m || !material) return
    const tl = gsap.timeline({ delay: isPerson ? PERSON_DELAY : OBJECT_DELAY + index * 0.05 })
    tl.to(material, { opacity: 1, duration: isPerson ? 0.6 : 0.35, ease: 'power2.out' }, 0)
    if (!isPerson) {
      tl.fromTo(m.scale, { x: 0.88, y: 0.88 }, { x: 1, y: 1, duration: 0.5, ease: EASE_PAPER }, 0)
    }
    return () => {
      tl.kill()
    }
  }, [index, isPerson])

  useFrame(({ clock }) => {
    const m = mesh.current
    if (!m) return
    // 인물은 앵커 — 고정(마우스/부유 반응 없음)
    if (isPerson) return

    // 오브젝트 자체 부유: 마우스가 아니라 시간 기반 sine으로 계속 둥둥 떠다님.
    // 레이어별 위상차(phase)로 한꺼번에 움직이지 않게, strength로 진폭 차등(가까운 것일수록 크게).
    const t = clock.elapsedTime
    const phase = index * 1.7
    // 레이어별 진폭 배수 — floatScale이 작으면 거의 고정(살짝만 부유)
    const fs = layer.floatScale ?? 1
    const ampY = strength * 1.45 * fs
    const ampX = strength * 0.32 * fs
    const ampR = (strength / PARALLAX_PX.fast) * 0.03 * fs
    const fx = Math.cos(t * (0.34 + (index % 3) * 0.04) + phase * 0.6) * ampX
    const fy = Math.sin(t * (0.5 + (index % 4) * 0.05) + phase) * ampY
    const rz = Math.sin(t * (0.42 + (index % 5) * 0.03) + phase * 1.3) * ampR

    // 스크롤 시 오브젝트만 약한 수직 이동 — 캐시된 scrollY 사용
    const scrollShift = Math.min(cachedScrollY * 0.06, 30) * (strength / PARALLAX_PX.fast) * fs

    const tx = baseX + fx
    const ty = baseY + fy + scrollShift
    m.position.x += (tx - m.position.x) * 0.06
    m.position.y += (ty - m.position.y) * 0.06
    m.rotation.z += (rz - m.rotation.z) * 0.06
  })

  return (
    <mesh ref={mesh} position={[baseX, baseY, index * 0.1]}>
      <planeGeometry args={[layer.w, layer.h]} />
      <meshBasicMaterial ref={mat} map={tex} transparent opacity={0} toneMapped={false} />
    </mesh>
  )
}

function Scene() {
  const viewport = useThree((s) => s.viewport)
  const scale = viewport.width / HERO_CANVAS.width

  return (
    <group scale={[scale, scale, 1]}>
      {HERO_LAYERS.map((l, i) => (
        <LayerMesh key={l.name} layer={l} index={i} />
      ))}
    </group>
  )
}

export default function HeroScene({ onLost }: { onLost?: () => void }) {
  return (
    <Canvas
      orthographic
      flat
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], zoom: 1 }}
      gl={{ alpha: true, antialias: true }}
      style={{ position: 'absolute', inset: 0 }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (e) => {
          e.preventDefault()
          onLost?.()
        })
      }}
    >
      <Scene />
    </Canvas>
  )
}
