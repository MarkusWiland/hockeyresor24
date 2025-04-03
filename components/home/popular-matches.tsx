'use client'

import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { fetchPopularMatches } from '@/lib/fetchMatches'
import Image from 'next/image'

export default function PopularMatches() {
  const { data: popularMatches = [], isLoading, isError } = useQuery({
    queryKey: ['popular-matches'],
    queryFn: fetchPopularMatches,
    staleTime: 1000 * 60 * 10,
  })

  return (
    <section className="relative container mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(25,15%,25%)]">
          Populära Matcher
        </h2>
        <Link
          href="/ligor"
          className="text-[hsl(25,95%,55%)] hover:underline text-sm font-medium"
        >
          Visa alla →
        </Link>
      </div>

      {isLoading && <p className="text-muted-foreground">Laddar matcher...</p>}
      {isError && <p className="text-red-600">Kunde inte hämta matcher.</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 text-center ">
        {popularMatches.map((match) => (
          <Link
            key={match.id}
            href={`/lag/${match.slug}`}
            className="group transition-transform hover:-translate-y-1"
          >
            <div className="rounded-2xl p-4 bg-card border border-border shadow-sm flex items-center justify-center h-[140px] mb-2 group-hover:shadow-md group-hover:bg-muted transition-colors">
              <Image
                src={match.homeLogo}
                alt={match.homeTeam}
                width={80}
                height={80}
                className="object-contain max-h-[80px]"
              />
            </div>
            <span className="text-sm font-medium text-foreground group-hover:text-[hsl(25,95%,45%)] transition-colors">
              {match.homeTeam}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
