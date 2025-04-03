'use client'

import { Calendar, MapPin, Trophy, ArrowRight } from 'lucide-react'
import Link from 'next/link'

type TicketCardProps = {
  homeTeam: string
  homeColor: string
  homeSecondaryColor: string
  venue: string
  league: string
  priceFrom: number
  slug: string
}

export default function TicketCard({
  homeTeam,
  homeColor,
  homeSecondaryColor,
  venue,
  league,
  priceFrom,
  slug,
}: TicketCardProps) {
  return (
    <Link
      href={`/match/${slug}`}
      className="group relative flex justify-between items-center gap-6 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:bg-muted transition-colors duration-200 ease-in-out"
    >
      {/* Biljettformade kanter */}
      <div
        className={`absolute left-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-border bg-background group-hover:bg-[${homeColor}] transition-colors`}
      />
      <div
        className={`absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-border bg-background group-hover:bg-[${homeSecondaryColor}] transition-colors`}
      />
      <div className="absolute  right-[85px] -top-2 rounded-full bg-background w-6 h-6 z-40" />
      <div className="absolute  right-[85px] -bottom-2 rounded-full bg-background w-6 h-6 z-40" />
      {/* Lagnamn & info */}
      <div className="flex-1 px-2 pb-2">
        <h3 className="text-base font-semibold text-foreground">{homeTeam}</h3>

        {/* Dekorationsprickar */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[85px] flex flex-col items-center justify-center px-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-muted-foreground/50 rounded-full my-1"
            />
          ))}
        </div>

        {/* Matchinfo */}
        <div className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span>{league}</span>
          </div>
        </div>
      </div>

      {/* Pris */}
      <div className="text-left">
        <p className="text-sm text-muted-foreground">Pris från</p>
        <div className="flex items-center gap-1">
          <p className="text-sm font-bold text-[hsl(25,95%,45%)]">
            {priceFrom.toLocaleString()} kr
          </p>
          <ArrowRight className="w-4 h-4 text-[hsl(25,95%,45%)]" />
        </div>
      </div>
    </Link>
  )
}
