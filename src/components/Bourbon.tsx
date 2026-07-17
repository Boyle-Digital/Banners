import { motion } from 'framer-motion'

const points = [
  {
    title: 'Rotating Barrel Picks',
    desc: 'Hand-selected Banners barrel picks, rotating all year. Ask your bartender what just landed.',
  },
  {
    title: 'An Extensive List',
    desc: "From everyday pours to allocated finds — we're in the heart of bourbon country and it shows.",
  },
  {
    title: 'Bottles To Go',
    desc: 'Ask about taking home a bottle of our barrel picks or bourbon from the list.',
  },
]

export default function Bourbon() {
  return (
    <section id="bourbon" className="relative overflow-hidden py-24">
      {/* amber glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="cond text-sm font-semibold tracking-[0.35em] text-gold">Kentucky born</p>
          <h2 className="display mt-3 text-5xl sm:text-6xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(180deg,#ffe9b8 0%,#f5b93c 50%,#9a6a14 100%)' }}
            >
              The Bourbon Wall
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-steel">
            Check out our extensive bourbon list, including our rotating Banners barrel picks.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-xl border border-gold/20 bg-panel p-7 text-left transition-colors hover:border-gold/50"
            >
              {/* barrel icon */}
              <svg viewBox="0 0 24 24" className="mb-4 h-8 w-8 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 3c-1.5 2.5-2 5.5-2 9s.5 6.5 2 9M17 3c1.5 2.5 2 5.5 2 9s-.5 6.5-2 9M7 3h10M7 21h10M4 9h16M4 15h16" />
              </svg>
              <h3 className="display text-xl text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
