// components/MatchCard.tsx
import Link from 'next/link'
import { Match } from '@/lib/fetchMatches'
import { Ticket } from 'lucide-react'

export default function MatchCard({ match }: { match: Match }) {
  const formattedDate = new Date(match.date).toLocaleDateString('sv-SE', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <article className="bg-card border border-border rounded-xl p-4 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition">
      <header className="mb-2">
        <h3 className="text-lg font-semibold">
          {match.homeTeam} – {match.awayTeam}
        </h3>
        <p className="text-sm text-muted-foreground">{formattedDate}</p>
        <p className="text-sm text-muted-foreground">{match.venue}</p>
      </header>

      <footer>
        <Link
          href={`/ligor/${match.league.toLowerCase()}/match/${match.slug}`}
          className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
          aria-label={`Visa mer info och biljetter för ${match.homeTeam} – ${match.awayTeam}`}
        >
          <Ticket className="w-4 h-4 mr-1" />
          Mer info & biljetter
        </Link>
      </footer>
    </article>
  )
}
