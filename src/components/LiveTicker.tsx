import { useEffect, useState } from 'react'

type ScoreItem = {
  league: string
  text: string
  detail: string
  live: boolean
}

// ESPN public scoreboard feeds — no API key required
const LEAGUES: Array<[string, string]> = [
  ['MLB', 'baseball/mlb'],
  ['WNBA', 'basketball/wnba'],
  ['MLS', 'soccer/usa.1'],
  ['NFL', 'football/nfl'],
  ['NBA', 'basketball/nba'],
  ['NHL', 'hockey/nhl'],
  ['NCAAF', 'football/college-football'],
]

// shown until scores load (or if the feed is unreachable) so the ticker
// never sits empty
const FALLBACK: ScoreItem[] = [
  { league: 'BANNERS', text: 'Every game. Every screen.', detail: '', live: false },
  { league: 'THU', text: '89¢ Wing Night', detail: 'open – close', live: false },
  { league: 'MON', text: 'Kids Eat Free', detail: 'all day', live: false },
  { league: 'TUE', text: 'Trivia Night', detail: '7 PM', live: false },
  { league: 'WED', text: 'Singo Music Bingo', detail: '7 PM', live: false },
  { league: 'FRI + SAT', text: 'Live Local Music', detail: '', live: false },
]

/* eslint-disable @typescript-eslint/no-explicit-any */
async function fetchLeague(label: string, path: string): Promise<ScoreItem[]> {
  try {
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${path}/scoreboard`)
    if (!res.ok) return []
    const data = await res.json()
    const events: any[] = data?.events ?? []
    return events.slice(0, 10).flatMap((ev) => {
      const comps: any[] = ev?.competitions?.[0]?.competitors ?? []
      const home = comps.find((c) => c.homeAway === 'home')
      const away = comps.find((c) => c.homeAway === 'away')
      if (!home?.team?.abbreviation || !away?.team?.abbreviation) return []
      const state = ev?.status?.type?.state // pre | in | post
      const detail = ev?.status?.type?.shortDetail ?? ''
      const text =
        state === 'pre'
          ? `${away.team.abbreviation} @ ${home.team.abbreviation}`
          : `${away.team.abbreviation} ${away.score ?? 0} — ${home.team.abbreviation} ${home.score ?? 0}`
      return [{ league: label, text, detail, live: state === 'in' }]
    })
  } catch {
    return []
  }
}

export default function LiveTicker() {
  const [items, setItems] = useState<ScoreItem[]>(FALLBACK)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      const results = await Promise.all(LEAGUES.map(([label, path]) => fetchLeague(label, path)))
      const scores = results.flat()
      if (!cancelled && scores.length > 0) setItems(scores)
    }
    load()
    const id = setInterval(load, 60_000) // refresh scores every minute
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  const row = [...items, ...items]
  // keep crawl speed steady regardless of how many games are on
  const duration = Math.max(30, items.length * 7)

  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-9 items-stretch border-b border-white/10 bg-black/95">
      <div className="relative z-10 flex shrink-0 items-center gap-2 bg-heat px-3 sm:px-4">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        <span className="cond text-xs font-bold tracking-[0.25em] text-white">Live</span>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div
          className="flex h-full w-max animate-marquee items-center"
          style={{ animationDuration: `${duration}s` }}
        >
          {row.map((item, i) => (
            <span key={i} className="flex h-full items-center whitespace-nowrap">
              <span className="cond px-3 text-xs font-bold tracking-widest text-royal-bright">
                {item.league}
              </span>
              <span className="cond text-sm font-semibold tracking-wider text-white">
                {item.text}
              </span>
              {item.detail && (
                <span className={`cond pl-2 text-xs font-semibold tracking-widest ${item.live ? 'text-heat' : 'text-steel'}`}>
                  {item.detail}
                </span>
              )}
              {item.live && (
                <span className="ml-2 h-1.5 w-1.5 animate-pulse rounded-full bg-heat" />
              )}
              <span className="px-4 text-royal/70">•</span>
            </span>
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  )
}
