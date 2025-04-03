'use client'

import { useQuery } from '@tanstack/react-query'
import { getLeagues } from '@/api'
import LeagueCard from './league-card'

export default function LeagueList() {
  const { data: leagues } = useQuery({
    queryKey: ['leagues'],
    queryFn: getLeagues,
  })

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(25,15%,25%)]">
          Populära ligor
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {leagues?.map((league) => (
          <LeagueCard key={league.slug} league={league} />
        ))}
      </div>
    </section>
  )
}
