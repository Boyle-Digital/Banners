import { motion } from 'framer-motion'
import Embers from './Embers'
import { ORDER_URL } from '../data/menu'

const stats = [
  { big: '4.5★', small: '686 Google reviews' },
  { big: '15', small: 'Championship sauces' },
  { big: '89¢', small: 'Wings every Thursday' },
  { big: 'LIVE', small: 'Music every weekend' },
]

// Kentucky silhouette as clip-path coordinates (traced from state border)
const KY_CLIP =
  'polygon(0% 98.1%, 5.8% 81.9%, 8.4% 72.5%, 14.3% 78.5%, 15.1% 75.1%, 19.9% 61.9%, 25.9% 47.2%, 36.5% 43.8%, 40.4% 41.5%, 48.3% 42.6%, 54.9% 15.8%, 62.8% 1.9%, 66.7% 2.3%, 70.7% 13.2%, 77.2% 18.9%, 86.5% 15.8%, 91.7% 27.5%, 91.7% 37%, 95.7% 55.5%, 100% 60.8%, 95% 70.9%, 90.1% 76.6%, 77.5% 96.2%, 56.2% 95.5%, 40.4% 94.3%, 22.6% 94.7%, 20% 100%, 14.2% 100%, 2% 100%)'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      {/* Kentucky in barrel wood — the bar's signature wall piece, minus the lettering */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="relative aspect-[2.26/1] w-[min(100vw,1600px)]"
        >
          {/* breathing amber backlight behind the state */}
          <div className="animate-backlight absolute inset-0 blur-3xl">
            <div
              className="absolute -inset-4"
              style={{
                clipPath: KY_CLIP,
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(255,138,46,0.85) 0%, rgba(232,114,42,0.4) 55%, transparent 78%)',
              }}
            />
          </div>
          <div className="animate-backlight absolute inset-0 blur-xl" style={{ animationDelay: '-2.7s' }}>
            <div
              className="absolute -inset-1 scale-[1.02]"
              style={{ clipPath: KY_CLIP, background: 'rgba(255,155,60,0.5)' }}
            />
          </div>

          {/* barrel-stave wood fill — single full-width tile so no seam lines */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: KY_CLIP,
              backgroundImage: "url('images/ky-wood.jpg')",
              backgroundSize: '100% auto',
              filter: 'brightness(1.3) saturate(1.05)',
            }}
          />
        </motion.div>
      </div>

      {/* rising embers */}
      <Embers count={45} />

      {/* readability vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/80" />
      <div className="hero-vignette pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pt-36 pb-16 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="cond mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.35em] text-gold"
        >
          <span className="h-px w-10 bg-gold/60" />
          Est. 2015 — Lexington, Kentucky
          <span className="h-px w-10 bg-gold/60" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display text-chrome-grad text-[16vw] leading-[0.95] sm:text-8xl lg:text-[9rem]"
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
          className="mt-6 max-w-2xl text-base leading-relaxed text-chrome sm:text-lg"
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
            className="clip-slant border border-chrome/30 bg-black/45 px-8 py-4 cond text-lg font-bold tracking-widest text-chrome backdrop-blur-sm transition-all hover:border-chrome/70 hover:bg-black/65"
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
            <div key={s.small} className="bg-black/70 px-4 py-5 backdrop-blur-sm">
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
        <div className="mx-auto mt-2 h-8 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
