import { ORDER_URL } from '../data/menu'

export default function Footer() {
  return (
    <footer className="border-t border-royal/25 bg-panel/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src="images/logo.png" alt="Banners — Est. 2015" className="h-12 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
              Lexington's local, family-friendly sports bar. Every game streamed, scratch
              kitchen, Kentucky bourbon, and live music every weekend since 2015.
            </p>
          </div>

          <div>
            <h4 className="cond text-sm font-bold tracking-[0.25em] text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li><a href="#lineup" className="hover:text-white">Weekly Lineup</a></li>
              <li><a href="#menu" className="hover:text-white">Menu</a></li>
              <li><a href="#wings" className="hover:text-white">Championship Wings</a></li>
              <li><a href="#bourbon" className="hover:text-white">Bourbon</a></li>
              <li><a href={ORDER_URL} target="_blank" rel="noreferrer" className="hover:text-white">Order Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="cond text-sm font-bold tracking-[0.25em] text-white">Visit</h4>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li>3650 Boston Rd #196</li>
              <li>Lexington, KY 40514</li>
              <li><a href="tel:+18592234775" className="hover:text-white">(859) 223-4775</a></li>
              <li className="flex gap-4 pt-2">
                <a href="https://www.facebook.com/bannerslex" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white">Facebook</a>
                <a href="https://www.instagram.com/bannerslex" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-steel sm:flex-row">
          <p>© {new Date().getFullYear()} Banners. All rights reserved.</p>
          <p>
            Site by{' '}
            <a href="https://boyledigital.com" target="_blank" rel="noreferrer" className="text-royal-bright hover:text-white">
              Boyle Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
