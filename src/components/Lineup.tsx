import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

const days = [
  {
    day: 'Mon',
    title: 'Kids Eat Free',
    desc: 'All kids 12 & under eat free — one kids meal per adult entree. Bring the whole squad.',
    tag: 'Family Night',
  },
  {
    day: 'Tue',
    title: 'Trivia Tuesday',
    desc: 'Paperless trivia hosted by Local Trivia Action. Grab a table, name your team, talk your trash.',
    tag: '7:00 PM',
  },
  {
    day: 'Wed',
    title: 'Singo Music Bingo',
    desc: 'A musical spin on bingo. Free entry, and every winner pays out $20.',
    tag: '7:00 PM',
  },
  {
    day: 'Thu',
    title: '89¢ Wing Night',
    desc: 'Unlimited 89¢ wings, open to close, tossed in any championship sauce or rub. Six-wing minimum.',
    tag: 'Open – Close',
    hot: true,
  },
  {
    day: 'Fri',
    title: 'Live Music',
    desc: "The best local Kentucky musicians take the stage. Patio performances weather permitting.",
    tag: 'Evening',
  },
  {
    day: 'Sat',
    title: 'Live Music',
    desc: 'Bands, acoustic sets, and tribute shows — check the event calendar for the weekend lineup.',
    tag: 'Evening',
  },
  {
    day: 'Sun',
    title: 'Sunday Trivia + Game Day',
    desc: 'Trivia at 4PM in the off-season. During NFL season? Every game, every screen, all day.',
    tag: '4:00 PM',
  },
]

export default function Lineup() {
  return (
    <section id="lineup" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="cond text-sm font-semibold tracking-[0.35em] text-royal-bright">Seven days a week</p>
          <h2 className="display mt-3 text-5xl text-chrome-grad sm:text-6xl">The Weekly Lineup</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {days.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={i === 6 ? 'sm:col-span-2 lg:col-span-2' : ''}
            >
              <TiltCard className="h-full">
                <div
                  className={`relative h-full overflow-hidden rounded-xl border p-6 ${
                    d.hot
                      ? 'border-heat/50 bg-gradient-to-b from-heat/15 to-panel shadow-[0_0_30px_rgba(255,59,48,0.15)]'
                      : 'border-white/10 bg-panel hover:border-royal/50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`display text-4xl ${d.hot ? 'text-heat' : 'text-royal-bright'}`}>{d.day}</span>
                    <span className="cond rounded border border-white/15 bg-white/5 px-2 py-1 text-xs font-bold tracking-widest text-steel">
                      {d.tag}
                    </span>
                  </div>
                  <h3 className="display mt-4 text-2xl text-white">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{d.desc}</p>
                  {d.hot && (
                    <span className="pointer-events-none absolute -right-4 -bottom-6 display text-8xl text-heat/10">89¢</span>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 rounded-xl border border-gold/30 bg-gradient-to-r from-gold/10 via-panel to-gold/10 p-6 text-center"
        >
          <p className="display text-2xl text-gold">Happy Hour — Mon–Fri, 2–6 PM</p>
          <p className="cond mt-2 text-lg tracking-wider text-chrome">
            $2.25 16oz domestic drafts · $3.25 22oz domestic drafts · $1 off all well cocktails
          </p>
        </motion.div>
      </div>
    </section>
  )
}
