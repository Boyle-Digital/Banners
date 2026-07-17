import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useInView } from 'framer-motion'
import * as THREE from 'three'

// Simplified Kentucky border, [longitude, latitude] — traced west tip → Ohio
// River north border → eastern tip → Tennessee line back west
const KY_OUTLINE: Array<[number, number]> = [
  [-89.57, 36.55], [-89.13, 36.98], [-88.93, 37.23], [-88.48, 37.07],
  [-88.42, 37.16], [-88.06, 37.51], [-87.6, 37.9], [-86.8, 37.99],
  [-86.5, 38.05], [-85.9, 38.02], [-85.4, 38.73], [-84.8, 39.1],
  [-84.5, 39.09], [-84.2, 38.8], [-83.7, 38.65], [-83.0, 38.73],
  [-82.6, 38.42], [-82.6, 38.17], [-82.3, 37.68], [-81.97, 37.54],
  [-82.35, 37.27], [-82.72, 37.12], [-83.68, 36.6], [-85.3, 36.62],
  [-86.5, 36.65], [-87.85, 36.64], [-88.05, 36.5], [-88.49, 36.5],
  [-89.42, 36.5],
]

const BARREL_HALF = 1.55
const R_MID = 1.5
const R_END = 1.08

function barrelRadius(y: number) {
  return R_MID - (R_MID - R_END) * Math.pow(y / BARREL_HALF, 2)
}

function Scene() {
  const group = useRef<THREE.Group>(null!)
  const barrel = useRef<THREE.Group>(null!)
  const kentucky = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    barrel.current.rotation.y += delta * 0.3
    kentucky.current.rotation.y = Math.sin(t * 0.28) * 0.16
    kentucky.current.position.y = 2.05 + Math.sin(t * 0.5) * 0.12
    // gentle mouse parallax on the whole scene
    const px = state.pointer.x * 0.3
    const py = state.pointer.y * 0.2
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, px, 0.04)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -py, 0.04)
  })

  // barrel silhouette for the lathe body
  const profile = useMemo(() => {
    const pts: THREE.Vector2[] = []
    for (let i = 0; i <= 24; i++) {
      const y = (i / 24 - 0.5) * BARREL_HALF * 2
      pts.push(new THREE.Vector2(barrelRadius(y), y))
    }
    return pts
  }, [])

  // extruded Kentucky state shape
  const kyGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    KY_OUTLINE.forEach(([lon, lat], i) => {
      const x = (lon + 85.77) * 0.98
      const y = (lat - 37.82) * 1.24 // correct lat/lon distance aspect at ~38°N
      if (i === 0) shape.moveTo(x, y)
      else shape.lineTo(x, y)
    })
    shape.closePath()
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.32,
      bevelEnabled: true,
      bevelSize: 0.05,
      bevelThickness: 0.06,
      bevelSegments: 2,
    })
    geo.center()
    return geo
  }, [])

  const hoopYs = [-1.32, -0.78, 0.78, 1.32]

  return (
    <group ref={group}>
      {/* glowing Kentucky behind the wordmark — echoes the Banners logo */}
      <group ref={kentucky} position={[0, 2.05, -3.2]} scale={0.72}>
        <mesh geometry={kyGeometry}>
          <meshStandardMaterial
            color="#0c1738"
            emissive="#2447e0"
            emissiveIntensity={0.42}
            metalness={0.55}
            roughness={0.3}
            transparent
            opacity={0.38}
          />
        </mesh>
        <mesh geometry={kyGeometry} scale={1.004}>
          <meshBasicMaterial color="#6f8dff" wireframe transparent opacity={0.18} />
        </mesh>
      </group>

      {/* bourbon barrel floating on the right flank */}
      <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.7}>
        <group ref={barrel} rotation={[0.42, 0, -0.35]} position={[2.9, -0.75, 0.3]} scale={0.72}>
          {/* wood body */}
          <mesh>
            <latheGeometry args={[profile, 48]} />
            <meshStandardMaterial color="#7a4a22" roughness={0.72} metalness={0.12} />
          </mesh>
          {/* stave lines — low-segment wireframe overlay */}
          <mesh scale={1.008}>
            <latheGeometry args={[profile, 22]} />
            <meshBasicMaterial color="#f5b93c" wireframe transparent opacity={0.16} />
          </mesh>
          {/* steel hoops */}
          {hoopYs.map((y) => (
            <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[barrelRadius(y) + 0.03, 0.045, 12, 64]} />
              <meshStandardMaterial color="#aab7cf" metalness={0.85} roughness={0.28} />
            </mesh>
          ))}
          {/* barrel heads */}
          <mesh position={[0, BARREL_HALF + 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[R_END, 48]} />
            <meshStandardMaterial color="#5c3517" roughness={0.85} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0, -BARREL_HALF - 0.001, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[R_END, 48]} />
            <meshStandardMaterial color="#5c3517" roughness={0.85} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </Float>

      {/* brand orbit rings */}
      <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
        <torusGeometry args={[3.6, 0.014, 12, 120]} />
        <meshBasicMaterial color="#5f83ff" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, -0.5, 0.4]}>
        <torusGeometry args={[4.3, 0.01, 12, 120]} />
        <meshBasicMaterial color="#f5b93c" transparent opacity={0.22} />
      </mesh>

      <Sparkles count={90} scale={13} size={2.2} speed={0.3} color="#7c9aff" opacity={0.6} />
      <Sparkles count={50} scale={9} size={2.6} speed={0.22} color="#f0b95e" opacity={0.55} />
    </group>
  )
}

export default function Hero3D() {
  const wrap = useRef<HTMLDivElement>(null)
  // pause the render loop when the hero scrolls out of view (perf + avoids
  // offscreen WebGL compositing artifacts)
  const inView = useInView(wrap, { amount: 0.05 })

  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        frameloop={inView ? 'always' : 'never'}
      >
        <ambientLight intensity={0.45} />
        {/* warm bourbon key light + cool brand rim light */}
        <pointLight position={[5, 5, 6]} intensity={42} color="#f5b93c" />
        <pointLight position={[-6, -3, 5]} intensity={26} color="#3f6bff" />
        <pointLight position={[0, 6, -4]} intensity={18} color="#6f8dff" />
        <Scene />
      </Canvas>
    </div>
  )
}
