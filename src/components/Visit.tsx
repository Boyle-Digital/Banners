import { motion } from 'framer-motion'
import { ORDER_URL } from '../data/menu'

export default function Visit() {
  return (
    <section id="visit" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="cond text-sm font-semibold tracking-[0.35em] text-royal-bright">Millpond Center · behind Kroger</p>
          <h2 className="display mt-3 text-5xl text-chrome-grad sm:text-6xl">Come Raise a Banner</h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="text-gold text-xl" aria-hidden>★★★★½</span>
            <span className="cond text-sm font-semibold tracking-widest text-steel">4.5 stars · 686 Google reviews</span>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-panel p-7">
              <h3 className="display text-xl text-white">Find Us</h3>
              <p className="mt-3 leading-relaxed text-steel">
                3650 Boston Rd #196
                <br />
                Lexington, KY 40514
              </p>
              <a
                href="https://maps.google.com/?q=Banners+3650+Boston+Rd+%23196+Lexington+KY+40514"
                target="_blank"
                rel="noreferrer"
                className="cond mt-3 inline-block text-sm font-bold tracking-widest text-royal-bright hover:text-white"
              >
                Get Directions →
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-panel p-7">
              <h3 className="display text-xl text-white">Hours</h3>
              <p className="mt-3 leading-relaxed text-steel">
                Open daily from 11 AM — kitchen and bar run late on game nights.
              </p>
              <p className="cond mt-2 text-sm font-semibold tracking-widest text-steel">Call ahead for tonight's close</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-panel p-7">
              <h3 className="display text-xl text-white">Get In Touch</h3>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="tel:+18592234775"
                  className="clip-slant bg-royal px-6 py-3 text-center cond text-base font-bold tracking-widest text-white transition-all hover:bg-royal-bright"
                >
                  (859) 223-4775
                </a>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="clip-slant border border-chrome/30 bg-white/5 px-6 py-3 text-center cond text-base font-bold tracking-widest text-chrome transition-all hover:bg-white/10"
                >
                  Order Online
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10 lg:col-span-3"
          >
            <iframe
              title="Map to Banners, 3650 Boston Rd #196, Lexington KY"
              src="https://maps.google.com/maps?q=Banners%20Bar%20and%20Grill%203650%20Boston%20Rd%20%23196%20Lexington%20KY%2040514&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[420px] w-full grayscale-[35%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
