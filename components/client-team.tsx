'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Button } from './ui/button'
import MatchDetailCard from './match-detail-card'

type Match = {
  slug: string
  homeTeam: string
  awayTeam: string
  date: string
  venue: string
  city: string
  priceFrom: number
  league: string
  homeColor: string
  homeSecondaryColor: string
}

export default function ClientTeamPage({
  slug,
  initialMatches,
  showLeagueFilters = true, // 👈 ny prop
}: {
  slug: string
  initialMatches: Match[]
  showLeagueFilters?: boolean
}) {
  const [activeLeague, setActiveLeague] = useState('Alla')
  console.log('slug', slug)
  const { data: matches = [] } = useQuery({
    queryKey: ['matches', slug],
    queryFn: async () => {
      const res = await fetch(`/api/matches/${slug}`)
      return res.json()
    },
    initialData: initialMatches,
    staleTime: 1000 * 60 * 60 * 24,
  })
  const replace = slug.replace('-', ' ')
  const filtered =
    activeLeague === 'Alla'
      ? matches
      : matches.filter((m: any) => m.league === activeLeague)

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {slug.replaceAll('-', ' ')}
      </h1>

      {/* Visa endast filter om prop är true */}
      {showLeagueFilters && (
        <div className="flex gap-2 mb-6 flex-wrap">
          {['Alla', 'NHL', 'Champions Hockey League'].map((league) => (
            <Button
              key={league}
              onClick={() => setActiveLeague(league)}
              className={`px-4 py-2 rounded-full border ${
                activeLeague === league
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/70'
              } transition`}
            >
              {league}
            </Button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p>Inga matcher hittades för {activeLeague}.</p>
      ) : (
        <ul className="space-y-4">
          {filtered.map((match: any) => (
            <MatchDetailCard
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              date={match.date}
              venue={match.venue}
              city={match.city}
              league={match.league}
              priceFrom={match.priceFrom}
              homeColor={match.homeColor}
              homeSecondaryColor={match.homeSecondaryColor}
              isHomeMatch={match.homeTeam === replace}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
