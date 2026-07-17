import { motion } from 'framer-motion'

const leagues = ['NFL', 'NBA', 'MLB', 'NHL', 'NCAA', 'UFC', 'World Cup', 'PPV Events']

export default function GameDay() {
  return (
    <section id="gameday" className="relative overflow-hidden py-24">
      <div className="court-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="cond text-sm font-semibold tracking-[0.35em] text-royal-bright">The wall of screens</p>
            <h2 className="display mt-3 text-5xl text-chrome-grad sm:text-6xl">
              Every game.
              <br />
              <span className="text-royal-grad">Every screen.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel">
              Seamlessly streaming all games, all day, every day — with no buffering and no
              delays. NFL Sundays, March Madness, fight nights, World Cup watch parties: if
              it's on, it's on at Banners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {leagues.map((l) => (
                <span
                  key={l}
                  className="clip-slant cond border border-royal/40 bg-royal-deep/50 px-4 py-2 text-sm font-bold tracking-widest text-white"
                >
                  {l}
                </span>
              ))}
            </div>
            <p className="cond mt-8 inline-block rounded border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-widest text-steel">
              Doesn't accept reservations — first come, best seat
            </p>
          </motion.div>

          {/* animated screen wall */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
            aria-hidden
          >
            <div className="grid grid-cols-4 gap-2 rounded-2xl border border-white/10 bg-panel p-4 shadow-[0_0_60px_rgba(36,71,224,0.2)]">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-video rounded bg-gradient-to-br from-royal-bright/70 via-royal/40 to-royal-deep"
                  style={{
                    animation: `screenGlow ${2.4 + (i % 5) * 0.7}s ease-in-out ${i * 0.23}s infinite`,
                  }}
                />
              ))}
            </div>
            <div className="clip-banner absolute -bottom-5 left-1/2 -translate-x-1/2 bg-royal px-8 pt-2 pb-4">
              <span className="display text-lg text-white">Game On</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
