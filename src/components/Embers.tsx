import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  r: number
  v: number
  drift: number
  phase: number
  color: string
}

const COLORS = ['#f5b93c', '#ff9b3c', '#e8722a', '#ffd27a']

function spawn(anywhere = false): Particle {
  return {
    x: Math.random(),
    y: anywhere ? Math.random() : 1.05,
    r: 0.8 + Math.random() * 1.8,
    v: 0.02 + Math.random() * 0.05, // rise speed, fraction of height per second
    drift: (Math.random() - 0.5) * 0.02,
    phase: Math.random() * Math.PI * 2,
    color: COLORS[(Math.random() * COLORS.length) | 0],
  }
}

/** Rising bourbon-ember particles on a lightweight canvas */
export default function Embers({ count = 45 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let raf = 0
    let running = true
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // don't burn frames when the hero is scrolled away
    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting
    })
    io.observe(canvas)

    const particles: Particle[] = Array.from({ length: count }, () => spawn(true))
    let last = performance.now()

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!running) return

      ctx.clearRect(0, 0, w, h)
      const t = now / 1000
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.y -= p.v * dt
        p.x += p.drift * dt
        if (p.y < -0.05 || p.x < -0.05 || p.x > 1.05) particles[i] = spawn()
        ctx.globalAlpha = Math.max(0, 0.45 + 0.4 * Math.sin(t * 2.3 + p.phase))
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [count])

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />
}
