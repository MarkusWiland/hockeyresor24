'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { getLeagues } from '@/api'

export default function PopularLeagues() {
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
        <Link
          href="/ligor"
          className="text-[hsl(25,95%,55%)] hover:underline text-sm font-medium"
        >
          Visa alla →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {leagues?.map((league) => (
          <Link
            key={league.slug}
            href={`/ligor/${league.slug}`}
            className="group flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md hover:bg-muted transition-colors"
          >
            <div className="flex gap-1">
              {league.flags.map((code) => (
                <Image
                  key={code}
                  src={`https://hatscripts.github.io/circle-flags/flags/${code.toLowerCase()}.svg`}
                  alt={code}
                  width={32}
                  height={32}
                  className="rounded-full shadow-sm"
                />
              ))}
            </div>

            <span className="font-medium text-foreground group-hover:text-[hsl(25,95%,45%)] transition-colors">
              {league.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
