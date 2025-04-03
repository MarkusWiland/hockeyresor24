'use client'

import { mockTeams } from '@/lib/mockTeams'
import TeamList from './_components/team-list'
import { useTeamStore } from '@/store/teamStore'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TeamCard from './_components/team-card'

export default function TeamPage() {
  const { selectedLeague } = useTeamStore()

  const filteredTeams =
    selectedLeague === 'Alla'
      ? mockTeams
      : mockTeams.filter((team) => team.league === selectedLeague)

  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Välj ett lag och jämför priser
      </h1>

      <TeamList />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols- gap-4 mt-6">
        {filteredTeams.map((team) => (
          <TeamCard
            name="Boston Bruins"
            slug="boston-bruins"
            logo="/logos/Boston_Bruins.png"
            priceFrom={295}
            matchCount={12}
            resellerCount={3}
          />
        ))}
      </div>
    </section>
  )
}
