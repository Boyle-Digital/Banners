import { motion } from 'framer-motion'

export default function Music() {
  return (
    <section id="music" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src="/images/food-2.jpg"
              alt="Live band performing at Banners"
              className="w-full rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
              loading="lazy"
            />
            <div className="clip-banner absolute -bottom-5 left-8 bg-royal px-6 pt-2 pb-4">
              <span className="display text-lg text-white">Fri + Sat Nights</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <p className="cond text-sm font-semibold tracking-[0.35em] text-royal-bright">Turn it up</p>
            <h2 className="display mt-3 text-5xl text-chrome-grad sm:text-6xl">Live &amp; Local</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel">
              We frequently host the best local Kentucky musicians on Friday and Saturday
              nights — acoustic duos, full bands, tribute shows, and birthday-bash blowouts.
              Patio performances all summer, weather permitting.
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-steel">
              Follow us on Facebook or check the event calendar so you never miss a show.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/bannerslex"
                target="_blank"
                rel="noreferrer"
                className="clip-slant bg-royal px-7 py-3.5 cond text-base font-bold tracking-widest text-white transition-all hover:bg-royal-bright hover:shadow-[0_0_28px_rgba(63,107,255,0.6)]"
              >
                See What's Coming Up
              </a>
              <a
                href="https://www.instagram.com/bannerslex"
                target="_blank"
                rel="noreferrer"
                className="clip-slant border border-chrome/30 bg-white/5 px-7 py-3.5 cond text-base font-bold tracking-widest text-chrome transition-all hover:border-chrome/70 hover:bg-white/10"
              >
                @bannerslex
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
