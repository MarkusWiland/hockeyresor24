'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Ticket, Users } from 'lucide-react'

type TeamCardProps = {
  name: string
  slug: string
  logo: string
  priceFrom: number
  matchCount: number
  resellerCount: number
}

export default function TeamCard({
  name,
  slug,
  logo,
  priceFrom,
  matchCount,
  resellerCount,
}: TeamCardProps) {
  return (
    <Link href={`/lag/${slug}`} className="group">
      <Card className="flex flex-row items-center justify-between gap-4 rounded-2xl p-4 border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r from-[hsl(var(--card))] via-[hsl(var(--secondary)/0.1)] to-transparent">
        {/* Logo + namn */}
        <div className="flex items-center gap-4 min-w-[150px]">
          <Image
            src={logo}
            alt={name}
            width={60}
            height={60}
            className="object-contain rounded-md group-hover:scale-105 transition-transform"
          />
          <h3 className="text-base font-semibold text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--accent))] transition-colors">
            {name}
          </h3>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1 text-sm text-[hsl(var(--muted-foreground))]">
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4" />
            <span>Från {priceFrom.toLocaleString()} kr</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎯</span>
            <span>{matchCount} matcher</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{resellerCount} återförsäljare</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
