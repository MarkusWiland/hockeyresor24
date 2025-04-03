'use client'

import MatchCard from '@/components/match-card'
import { Match } from '@/lib/fetchMatches'

export default function LeagueMatchList({ matches }: { matches: Match[] }) {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(25,15%,25%)]">
          Matcher i denna liga
        </h2>
      </div>

      {matches.length === 0 ? (
        <p className="text-muted-foreground">Inga matcher hittades.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.slug} match={match} />
          ))}
        </div>
      )}
    </section>
  )
}
