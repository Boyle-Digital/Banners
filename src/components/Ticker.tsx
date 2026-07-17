const items = [
  '89¢ Wings Every Thursday',
  'Kids Eat Free Every Monday',
  'Trivia Tuesdays @ 7PM',
  'Singo Music Bingo Wednesdays @ 7PM',
  'Live Music Friday + Saturday',
  'Happy Hour Mon–Fri 2–6PM',
  'Every Game. Every Screen.',
  'Bourbon Barrel Picks',
]

export default function Ticker() {
  const row = [...items, ...items]
  return (
    <div className="relative z-20 overflow-hidden border-y border-royal/40 bg-royal-deep/60 py-3 backdrop-blur-sm">
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="cond px-6 text-base font-bold tracking-[0.2em] text-white">{item}</span>
            <span className="text-royal-bright">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
