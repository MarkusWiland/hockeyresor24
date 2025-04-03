'use client'

import { format } from 'date-fns'
import { ArrowRight, MapPin, Trophy } from 'lucide-react'
import { sv } from 'date-fns/locale'
import clsx from 'clsx'

type MatchDetailCardProps = {
  homeTeam: string
  awayTeam: string
  date: string
  venue: string
  city: string
  league: string
  priceFrom: number
  homeColor: string
  homeSecondaryColor: string
  isHomeMatch: boolean
}

export default function MatchDetailCard({
  homeTeam,
  awayTeam,
  date,
  venue,
  city,
  league,
  priceFrom,
  homeColor,
  homeSecondaryColor,
  isHomeMatch,
}: MatchDetailCardProps) {
  const weekday = format(new Date(date), 'EEEE', { locale: sv })
  const dayMonth = format(new Date(date), 'd MMM', { locale: sv })
  const year = format(new Date(date), 'yyyy', { locale: sv })

  return (
    <div className="relative card-3d hover:cursor-pointer flex rounded-xl overflow-hidden bg-gradient-to-r from-[hsl(var(--hero-background))] to-[hsl(215,25%,30%)] text-[hsl(var(--card-foreground))] ">
      {/* Biljettkant */}
      <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--background))] rounded-full border border-[hsl(var(--border))] z-10" />
      <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--background))] rounded-full border border-[hsl(var(--border))] z-10" />

      {/* Datumkolumn */}
      <div className="bg-[hsl(var(--hero-background))] px-4 py-6 flex flex-col items-center justify-center w-28 shrink-0 text-white text-center">
        <span className="text-xs capitalize">{weekday}</span>
        <span className="text-xl font-bold">{dayMonth}</span>
        <span className="text-xs ">{year}</span>
      </div>

      {/* Matchinfo */}
      <div className="flex-1 px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex flex-col justify-center w-full">
          <div className="text-white mb-1">
            <p className="font-semibold leading-tight">{homeTeam}</p>
            <p className="font-semibold leading-tight">{awayTeam}</p>
          </div>

          {/* Hemma/Borta badge */}
          <span
            className={clsx(
              'mt-2 inline-block text-xs px-2 py-1 rounded-full w-fit border font-medium',
              isHomeMatch
                ? 'bg-[hsl(var(--success)/0.15)] text-white border-[hsl(var(--success))]'
                : 'bg-[hsl(var(--warning)/0.15)] text-white border-[hsl(var(--warning))]',
            )}
          >
            {isHomeMatch ? 'Hemmamatch' : 'Bortamatch'}
          </span>
        </div>

        {/* Arena & Liga */}
        <div className="text-sm text-white/90 flex flex-col gap-1 w-full">
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

      {/* Prickar */}
      <div className="relative w-8 flex flex-col items-center justify-center shrink-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/30 my-0.5"
          />
        ))}
        <div className="absolute top-[-12px] bg-[hsl(var(--background))] w-6 h-6 rounded-full z-10" />
        <div className="absolute bottom-[-12px] bg-[hsl(var(--background))] w-6 h-6 rounded-full z-10" />
      </div>

      {/* Prisinfo */}
      <div className="pl-4 pr-6 py-4 flex flex-col justify-center items-start shrink-0 min-w-[180px]">
        <p className="text-sm text-white/70">Pris från</p>
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold text-[hsl(var(--primary))]">
            {priceFrom.toLocaleString()} kr
          </p>
          <ArrowRight className="w-4 h-4 text-[hsl(var(--primary))]" />
        </div>
      </div>
    </div>
  )
}
