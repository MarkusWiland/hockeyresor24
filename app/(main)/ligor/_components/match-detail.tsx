'use client'

import MatchDetailCard from '@/components/match-detail-card'
import { Match } from '@/lib/fetchMatches'

import { useState } from 'react'

export default function MatchDetailPage({ match }: { match: Match }) {
  const [activeLeague] = useState('Alla')

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {match.homeTeam} – {match.awayTeam}
      </h1>

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
        isHomeMatch={true}
      />
    </div>
  )
}
