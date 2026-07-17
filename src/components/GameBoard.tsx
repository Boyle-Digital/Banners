import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Team = {
  abbr: string
  name: string
  logo?: string
  score?: string
}

type Game = {
  id: string
  league: string
  state: string // pre | in | post
  detail: string
  date: string
  away: Team
  home: Team
}

const LEAGUES: Array<[string, string]> = [
  ['MLB', 'baseball/mlb'],
  ['WNBA', 'basketball/wnba'],
  ['MLS', 'soccer/usa.1'],
  ['NFL', 'football/nfl'],
  ['NBA', 'basketball/nba'],
  ['NHL', 'hockey/nhl'],
  ['NCAAF', 'football/college-football'],
]

/* eslint-disable @typescript-eslint/no-explicit-any */
async function fetchLeague(label: string, path: string): Promise<Game[]> {
  try {
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${path}/scoreboard`)
    if (!res.ok) return []
    const data = await res.json()
    const events: any[] = data?.events ?? []
    return events.flatMap((ev) => {
      const comps: any[] = ev?.competitions?.[0]?.competitors ?? []
      const toTeam = (c: any): Team | null =>
        c?.team?.abbreviation
          ? {
              abbr: c.team.abbreviation,
              name: c.team.shortDisplayName ?? c.team.abbreviation,
              logo: c.team.logo,
              score: c.score,
            }
          : null
      const home = toTeam(comps.find((c) => c.homeAway === 'home'))
      const away = toTeam(comps.find((c) => c.homeAway === 'away'))
      if (!home || !away) return []
      return [
        {
          id: `${label}-${ev.id}`,
          league: label,
          state: ev?.status?.type?.state ?? 'pre',
          detail: ev?.status?.type?.shortDetail ?? '',
          date: ev?.date ?? '',
          away,
          home,
        },
      ]
    })
  } catch {
    return []
  }
}

const rank = (s: string) => (s === 'in' ? 0 : s === 'pre' ? 1 : 2)

function statusLabel(g: Game) {
  if (g.detail && !/^sched/i.test(g.detail)) return g.detail
  if (!g.date) return g.detail
  const d = new Date(g.date)
  return (
    d.toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'America/New_York',
    }) + ' ET'
  )
}

export default function GameBoard() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      const results = await Promise.all(LEAGUES.map(([l, p]) => fetchLeague(l, p)))
      if (cancelled) return
      const all = results
        .flat()
        .sort((a, b) => rank(a.state) - rank(b.state) || a.date.localeCompare(b.date))
      setGames(all.slice(0, 8))
    }
    load()
    const id = setInterval(load, 60_000)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  if (games.length === 0) return null

  return (
    <section id="board" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="cond flex items-center justify-center gap-2 text-sm font-semibold tracking-[0.35em] text-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-heat" />
            Live from ESPN · updates every 60 seconds
          </p>
          <h2 className="display mt-3 text-5xl text-chrome-grad sm:text-6xl">
            On the <span className="text-royal-grad">Big Screens</span> Tonight
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            Every seat is the best seat in the house. Here's what's on the board right now —
            come grab a cold one and watch it live.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((g, i) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`rounded-xl border p-5 transition-colors ${
                g.state === 'in'
                  ? 'border-heat/50 bg-panel shadow-[0_0_24px_rgba(255,59,48,0.12)]'
                  : 'border-white/10 bg-panel hover:border-royal/50'
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="cond text-xs font-bold tracking-[0.25em] text-royal-bright">{g.league}</span>
                <span
                  className={`cond flex items-center gap-1.5 text-xs font-semibold tracking-wider ${
                    g.state === 'in' ? 'text-heat' : 'text-steel'
                  }`}
                >
                  {g.state === 'in' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-heat" />}
                  {statusLabel(g)}
                </span>
              </div>

              {[g.away, g.home].map((t) => (
                <div key={t.abbr} className="flex items-center gap-3 py-1.5">
                  {t.logo ? (
                    <img src={t.logo} alt="" className="h-7 w-7 shrink-0 object-contain" loading="lazy" />
                  ) : (
                    <span className="h-7 w-7 shrink-0 rounded-full bg-royal-deep" />
                  )}
                  <span className="cond flex-1 truncate text-lg font-semibold tracking-wide text-white">
                    {t.name}
                  </span>
                  {g.state !== 'pre' && (
                    <span className="display text-xl text-gold">{t.score ?? '0'}</span>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
