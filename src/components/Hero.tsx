import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ORDER_URL } from '../data/menu'

const Hero3D = lazy(() => import('./Hero3D'))

const stats = [
  { big: '4.5★', small: '686 Google reviews' },
  { big: '15', small: 'Championship sauces' },
  { big: '89¢', small: 'Wings every Thursday' },
  { big: 'LIVE', small: 'Music every weekend' },
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* backdrop layers */}
      <div className="court-grid absolute inset-0" />
      <Suspense fallback={null}>
        <Hero3D />
      </Suspense>
      <div className="hero-vignette pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pt-36 pb-16 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="cond mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.35em] text-royal-bright"
        >
          <span className="h-px w-10 bg-royal-bright/60" />
          Est. 2015 — Lexington, Kentucky
          <span className="h-px w-10 bg-royal-bright/60" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display text-chrome-grad text-[16vw] leading-[0.95] drop-shadow-[0_10px_40px_rgba(63,107,255,0.25)] sm:text-8xl lg:text-[9rem]"
        >
          Banners
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="display mt-3 text-2xl text-white sm:text-4xl"
        >
          Every game. <span className="text-royal-grad">Every night.</span> Every reason.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-steel sm:text-lg"
        >
          Lexington's family-friendly sports bar — every game streamed on every screen,
          hand-pattied Angus burgers, wings tossed in 15 championship sauces, Kentucky
          bourbon barrel picks, and live local music every weekend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
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
            className="clip-slant border border-chrome/30 bg-white/5 px-8 py-4 cond text-lg font-bold tracking-widest text-chrome backdrop-blur-sm transition-all hover:border-chrome/70 hover:bg-white/10"
          >
            See the Menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.small} className="bg-ink/80 px-4 py-5 backdrop-blur-sm">
              <p className="display text-2xl text-white sm:text-3xl">{s.big}</p>
              <p className="cond mt-1 text-xs font-semibold tracking-widest text-steel">{s.small}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 pb-8 text-center"
      >
        <span className="cond text-xs font-semibold tracking-[0.4em] text-steel">Scroll</span>
        <div className="mx-auto mt-2 h-8 w-px animate-pulse bg-gradient-to-b from-royal-bright to-transparent" />
      </motion.div>
    </section>
  )
}
