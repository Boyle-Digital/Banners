import { useState } from 'react'
import { motion } from 'framer-motion'
import { sauces } from '../data/menu'

/** hottest = 0 ... mildest = last */
function heatColor(i: number) {
  const t = i / (sauces.length - 1) // 0 hot → 1 mild
  if (t < 0.25) return '#ff3b30'
  if (t < 0.5) return '#ff7a30'
  if (t < 0.75) return '#f5b93c'
  return '#4ade80'
}

export default function Wings() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="wings" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-royal-deep/20 to-ink" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="cond text-sm font-semibold tracking-[0.35em] text-heat">A Banners favorite</p>
            <h2 className="display mt-3 text-5xl text-chrome-grad sm:text-6xl">
              Championship <span className="text-royal-grad">Wings</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel">
              Your choice of wings with Banners Dry Rub, Lemon Pepper Rub, or tossed in one of
              our 15 Championship Sauces. Served with a side of ranch, bleu cheese, or smoked
              jalapeno ranch.
            </p>

            <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-panel p-5">
                <p className="display text-3xl text-white">8</p>
                <p className="cond text-sm font-semibold tracking-widest text-steel">Traditional — large wings</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-panel p-5">
                <p className="display text-3xl text-white">10</p>
                <p className="cond text-sm font-semibold tracking-widest text-steel">Boneless — large wings</p>
              </div>
            </div>

            <div className="clip-banner mt-8 inline-block bg-heat px-8 pt-3 pb-5">
              <p className="display text-xl text-white">89¢ wings all day Thursday</p>
              <p className="cond text-sm font-semibold tracking-widest text-white/85">Unlimited · six-wing minimum · open to close</p>
            </div>

            <img
              src="/images/food-1.jpg"
              alt="Banners buffalo wings in a basket with ranch"
              className="mt-10 hidden w-full max-w-md rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] lg:block"
              loading="lazy"
            />
          </motion.div>

          {/* heat meter */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-panel/80 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="display text-2xl text-white">The Heat Meter</h3>
              <span className="cond text-xs font-bold tracking-widest text-steel">Hottest ↑ · Mildest ↓</span>
            </div>

            <div className="flex gap-4">
              {/* thermometer bar */}
              <div
                className="w-3 shrink-0 rounded-full"
                style={{ background: 'linear-gradient(180deg,#ff3b30 0%,#ff7a30 30%,#f5b93c 62%,#4ade80 100%)' }}
              />
              <ul className="flex-1 space-y-1">
                {sauces.map((s, i) => (
                  <li
                    key={s}
                    onPointerEnter={() => setHovered(i)}
                    onPointerLeave={() => setHovered(null)}
                    className={`flex cursor-default items-center justify-between rounded-lg px-3 py-1.5 transition-all ${
                      hovered === i ? 'bg-white/10' : ''
                    }`}
                    style={hovered === i ? { boxShadow: `inset 3px 0 0 ${heatColor(i)}` } : undefined}
                  >
                    <span className={`cond text-lg font-semibold tracking-wide ${hovered === i ? 'text-white' : 'text-chrome'}`}>
                      {s}
                    </span>
                    <span className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, f) => (
                        <span
                          key={f}
                          className="inline-block h-2 w-2 rounded-full"
                          style={{
                            background: f < Math.ceil(((sauces.length - i) / sauces.length) * 5) ? heatColor(i) : 'rgba(255,255,255,0.08)',
                          }}
                        />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="cond mt-6 text-center text-xs font-semibold tracking-widest text-steel">
              Add carrots &amp; celery 1 · All flats or drummies 2 · Additional sauces/dressings .50
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
