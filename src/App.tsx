import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Lineup from './components/Lineup'
import GameDay from './components/GameDay'
import MenuSection from './components/MenuSection'
import Wings from './components/Wings'
import Bourbon from './components/Bourbon'
import Music from './components/Music'
import Visit from './components/Visit'
import Footer from './components/Footer'
import { ORDER_URL } from './data/menu'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.12, anchors: true })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Lineup />
        <GameDay />
        <MenuSection />
        <Wings />
        <Bourbon />
        <Music />
        <Visit />
      </main>
      <Footer />

      {/* floating order button (mobile) */}
      <a
        href={ORDER_URL}
        target="_blank"
        rel="noreferrer"
        className="clip-slant fixed bottom-4 left-1/2 z-40 -translate-x-1/2 bg-royal px-8 py-3 cond text-base font-bold tracking-widest text-white shadow-[0_8px_30px_rgba(36,71,224,0.6)] sm:hidden"
      >
        Order Online
      </a>
    </>
  )
}
