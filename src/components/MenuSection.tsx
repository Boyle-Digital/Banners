import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { menu, ORDER_URL } from '../data/menu'

export default function MenuSection() {
  const [active, setActive] = useState(menu[0].id)
  const cat = menu.find((c) => c.id === active) ?? menu[0]

  return (
    <section id="menu" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <p className="cond text-sm font-semibold tracking-[0.35em] text-royal-bright">Scratch kitchen, stadium appetite</p>
          <h2 className="display mt-3 text-5xl text-chrome-grad sm:text-6xl">The Menu</h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            Hand-pattied burgers, house-smoked meats, and Banners Favorites — the dishes named
            for our championship banner–raising years.
          </p>
        </motion.div>

        {/* category tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`clip-slant cond px-4 py-2 text-sm font-bold tracking-widest transition-all sm:px-5 ${
                active === c.id
                  ? 'bg-royal text-white shadow-[0_0_20px_rgba(63,107,255,0.5)]'
                  : 'border border-white/10 bg-panel text-steel hover:border-royal/50 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {cat.note && (
              <p className="mx-auto mb-8 max-w-3xl border-l-2 border-royal pl-4 text-sm italic leading-relaxed text-steel">
                {cat.note}
              </p>
            )}

            <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
              {cat.items.map((item) => (
                <div key={item.name} className="group border-b border-white/5 pb-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="cond text-xl font-bold tracking-wide text-white">
                      {item.name}
                      {item.fave && (
                        <span className="clip-slant ml-2 inline-block translate-y-[-2px] bg-royal px-2 py-0.5 text-[10px] font-bold tracking-widest text-white">
                          Banners Fave
                        </span>
                      )}
                    </h3>
                    <span className="flex-1 border-b border-dotted border-white/15" />
                    {item.price && <span className="display text-lg text-royal-bright">{item.price}</span>}
                  </div>
                  {item.desc && <p className="mt-1.5 text-sm leading-relaxed text-steel">{item.desc}</p>}
                </div>
              ))}
            </div>

            {cat.footer && (
              <p className="mx-auto mt-8 max-w-3xl text-center text-sm italic text-steel">{cat.footer}</p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="clip-slant inline-block bg-royal px-10 py-4 cond text-lg font-bold tracking-widest text-white transition-all hover:bg-royal-bright hover:shadow-[0_0_34px_rgba(63,107,255,0.7)]"
          >
            Order Pickup or Delivery
          </a>
          <p className="cond mt-3 text-xs font-semibold tracking-widest text-steel">
            Banners Favorites represent our NCAA championship banner–raising years
          </p>
        </div>
      </div>
    </section>
  )
}
