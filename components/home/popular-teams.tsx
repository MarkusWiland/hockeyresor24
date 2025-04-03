'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { fetchPopularTeams } from '@/lib/fetchMatches'

export default function PopularTeams() {
  const { data: popularTeams = [], isLoading, isError } = useQuery({
    queryKey: ['popular-teams'],
    queryFn: fetchPopularTeams,
    staleTime: 1000 * 60 * 10,
  })

  return (
    <section className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Populära lag</h2>
        <Link
          href="/lag"
          className="text-text-primary hover:underline inline-flex items-center gap-1"
        >
          Visa alla →
        </Link>
      </div>

      {isLoading && <p>Laddar lag...</p>}
      {isError && <p>Kunde inte hämta lag.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularTeams.map((team) => (
          <Link
            key={team.slug}
            href={`/lag/${team.slug}`}
            className="flex items-center gap-4 bg-card border border-b-secondary p-4 rounded-lg shadow-sm hover:shadow transition"
          >
            <div className="flex gap-1">
              {team.colors?.map((color, index) => (
                <span
                  key={index}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="font-medium">{team.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
