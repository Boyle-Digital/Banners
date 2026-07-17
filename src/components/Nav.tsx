import { useEffect, useState } from 'react'
import { ORDER_URL } from '../data/menu'

const links = [
  { href: '#lineup', label: 'Weekly Lineup' },
  { href: '#gameday', label: 'Game Day' },
  { href: '#menu', label: 'Menu' },
  { href: '#wings', label: 'Wings' },
  { href: '#bourbon', label: 'Bourbon' },
  { href: '#music', label: 'Live Music' },
  { href: '#visit', label: 'Visit' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-9 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-royal/25 shadow-[0_8px_30px_rgba(4,6,13,0.6)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src="images/logo.png" alt="Banners — Est. 2015" className="h-9 w-auto drop-shadow-[0_0_12px_rgba(63,107,255,0.45)]" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="cond text-sm font-semibold tracking-widest text-steel transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="clip-slant hidden bg-royal px-5 py-2.5 cond text-sm font-bold tracking-widest text-white transition-all hover:bg-royal-bright hover:shadow-[0_0_24px_rgba(63,107,255,0.6)] sm:block"
          >
            Order Online
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-chrome transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-chrome transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-chrome transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-royal/25 bg-ink/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="cond border-b border-white/5 py-3 text-lg font-semibold tracking-widest text-chrome"
              >
                {l.label}
              </a>
            ))}
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="clip-slant mt-4 bg-royal px-5 py-3 text-center cond text-lg font-bold tracking-widest text-white"
            >
              Order Online
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
