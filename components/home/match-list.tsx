import { Match } from '@/lib/fetchMatches'
import { useSearchStore } from '@/store/searchStore'
import TicketCard from '../team/team-card'

export default function MatchList({ matches }: { matches: Match[] }) {
  const { query } = useSearchStore()

  const filtered = matches
    .filter((match) => {
      const haystack = `${match.homeTeam} ${match.awayTeam} ${match.venue}`.toLowerCase()
      return haystack.includes(query.toLowerCase())
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(25,15%,25%)] mb-8">
        Kommande matcher
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((match, index) => (
          <TicketCard
            key={index}
            homeTeam={match.homeTeam}
            homeColor={match.homeColor}
            homeSecondaryColor={match.homeSecondaryColor}
            venue={match.venue}
            league={match.league}
            priceFrom={499}
            slug={match.slug}
          />
        ))}
      </ul>
    </section>
  )
}
