// ✅ /app/ligor/[liga]/page.tsx
import { fetchLeagueData } from '@/lib/api'
import { fetchMatches } from '@/lib/fetchMatches'

import { notFound } from 'next/navigation'
import LeagueMatchList from '../_components/league-match-list'

export default async function LeaguePage({
  params,
}: {
  params: { liga: string }
}) {
  const league = await fetchLeagueData(params.liga)
  const matches = fetchMatches().filter(
    (m) => m.league.toLowerCase() === params.liga.toLowerCase(),
  )

  if (!league) return notFound()

  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold mb-4">{league.name}</h1>
      <p className="text-muted-foreground mb-8">{league.description}</p>
      <LeagueMatchList matches={matches} />
    </main>
  )
}
