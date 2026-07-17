import { useRef, type PointerEvent } from 'react'
import { motion } from 'framer-motion'
import Embers from './Embers'
import { ORDER_URL } from '../data/menu'

const stats = [
  { big: '4.5★', small: '686 Google reviews' },
  { big: '15', small: 'Championship sauces' },
  { big: '89¢', small: 'Wings every Thursday' },
  { big: 'LIVE', small: 'Music every weekend' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--px', String((e.clientX - r.left) / r.width - 0.5))
    el.style.setProperty('--py', String((e.clientY - r.top) / r.height - 0.5))
  }

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onMove}
      className="relative flex min-h-screen flex-col overflow-hidden bg-black"
    >
      {/* the real barrel-stave Kentucky sign hanging in the bar */}
      <div
        className="absolute -inset-8 transition-transform duration-300 ease-out"
        style={{
          transform:
            'translate3d(calc(var(--px, 0) * -16px), calc(var(--py, 0) * -12px), 0)',
        }}
      >
        <motion.img
          src="/images/ky-sign.jpg"
          alt="The state of Kentucky built from bourbon barrel staves, backlit, with the Banners logo"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="h-full w-full object-contain"
          style={{ objectPosition: 'center 32%' }}
        />
      </div>

      {/* breathing backlight — makes the sign's amber glow pulse */}
      <div className="animate-ember-pulse pointer-events-none absolute inset-0 mix-blend-screen" />

      {/* rising embers */}
      <Embers count={45} />

      {/* readability vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />
      <div className="hero-vignette pointer-events-none absolute inset-0" />

      {/* content — lower third, the sign is the headline */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-end px-4 pt-36 pb-10 text-center sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="display text-3xl text-white sm:text-5xl"
        >
          Every game. <span className="text-royal-grad">Every night.</span> Every reason.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-chrome sm:text-lg"
        >
          Lexington's family-friendly sports bar — every game on every screen, wings in 15
          championship sauces, Kentucky bourbon barrel picks, and live music every weekend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="clip-slant bg-royal px-8 py-4 cond text-lg font-bold tracking-widest text-white transition-all hover:bg-royal-bright hover:shadow-[0_0_34px_rgba(63,107,255,0.7)]"
          >
            Order Online
          </a>
          <a
            href="#menu"
            className="clip-slant border border-chrome/30 bg-black/40 px-8 py-4 cond text-lg font-bold tracking-widest text-chrome backdrop-blur-sm transition-all hover:border-chrome/70 hover:bg-black/60"
          >
            See the Menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.small} className="bg-black/70 px-4 py-5 backdrop-blur-sm">
              <p className="display text-2xl text-white sm:text-3xl">{s.big}</p>
              <p className="cond mt-1 text-xs font-semibold tracking-widest text-steel">{s.small}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-8 text-center"
        >
          <span className="cond text-xs font-semibold tracking-[0.4em] text-steel">Scroll</span>
          <div className="mx-auto mt-2 h-8 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
