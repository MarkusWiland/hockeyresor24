'use client'

import Link from 'next/link'
import Image from 'next/image'

type LeagueCardProps = {
  league: {
    slug: string
    name: string
    flags: string[]
  }
}

export default function LeagueCard({ league }: LeagueCardProps) {
  console.log('league', league)
  return (
    <Link
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
  )
}
