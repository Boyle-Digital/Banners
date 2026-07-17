import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useInView } from 'framer-motion'
import * as THREE from 'three'

function Core() {
  const group = useRef<THREE.Group>(null!)
  const outer = useRef<THREE.Mesh>(null!)
  const ringA = useRef<THREE.Mesh>(null!)
  const ringB = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    outer.current.rotation.y += delta * 0.18
    outer.current.rotation.x = Math.sin(t * 0.25) * 0.25
    ringA.current.rotation.z += delta * 0.35
    ringB.current.rotation.z -= delta * 0.22
    // gentle mouse parallax
    const px = state.pointer.x * 0.35
    const py = state.pointer.y * 0.25
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, px, 0.04)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -py, 0.04)
  })

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
        {/* wireframe icosahedron core */}
        <mesh ref={outer}>
          <icosahedronGeometry args={[2.35, 1]} />
          <meshStandardMaterial
            color="#3f6bff"
            emissive="#16308f"
            emissiveIntensity={0.8}
            wireframe
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* inner glow sphere */}
        <mesh scale={1.35}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshBasicMaterial color="#0a1440" transparent opacity={0.35} />
        </mesh>
        {/* orbit rings */}
        <mesh ref={ringA} rotation={[Math.PI / 2.4, 0.4, 0]}>
          <torusGeometry args={[3.4, 0.015, 12, 120]} />
          <meshBasicMaterial color="#5f83ff" transparent opacity={0.55} />
        </mesh>
        <mesh ref={ringB} rotation={[Math.PI / 1.8, -0.5, 0.4]}>
          <torusGeometry args={[4.1, 0.01, 12, 120]} />
          <meshBasicMaterial color="#c9d4e8" transparent opacity={0.28} />
        </mesh>
      </Float>
      <Sparkles count={140} scale={13} size={2.2} speed={0.35} color="#7c9aff" opacity={0.7} />
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
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 6, 6]} intensity={40} color="#6f8dff" />
        <pointLight position={[-6, -4, 4]} intensity={22} color="#ffffff" />
        <Core />
      </Canvas>
    </div>
  )
}
