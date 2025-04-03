'use client'

import { useTeamStore } from '@/store/teamStore'
import { mockTeams } from '@/lib/mockTeams'
import { Button } from '@/components/ui/button'

const leagues = ['Alla', ...Array.from(new Set(mockTeams.map((t) => t.league)))]

export default function TeamList() {
  const { selectedLeague, setLeague } = useTeamStore()

  return (
    <div className="flex flex-wrap gap-2">
      {leagues.map((league) => (
        <Button
          key={league}
          variant={selectedLeague === league ? 'default' : 'outline'}
          onClick={() => setLeague(league)}
        >
          {league}
        </Button>
      ))}
    </div>
  )
}
