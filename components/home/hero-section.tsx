'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { mockTeams } from '@/lib/mockTeams'
import { Search } from 'lucide-react'

export default function HeroSection() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const filteredTeams =
    search.length > 0
      ? mockTeams.filter((team) =>
          team.name.toLowerCase().includes(search.toLowerCase()),
        )
      : []

  return (
    <section className="relative bg-gradient-to-br from-[hsl(var(--hero-background))] via-[hsl(215,25%,30%)] to-[hsl(var(--background))] py-20 sm:py-28">
      {/* Blur-overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-md z-0" />

      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md mb-4">
          Upplev ditt favoritlag live!
        </h1>
        <p className="text-lg sm:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto mb-8">
          Hockeybiljetter.se jämför hockeyresor & biljetter från flera
          leverantörer – snabbt, smidigt och prisvärt.
        </p>

        {/* Search input */}
        <div className="relative max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Sök efter lag, arenor eller ligor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 pr-4 py-4 rounded-xl bg-white/90 border border-input text-foreground placeholder-muted-foreground shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition w-full"
            />
          </div>

          {/* Dropdown */}
          {filteredTeams.length > 0 && (
            <div className="absolute z-30 mt-2 w-full rounded-xl border border-border max-h-64 bg-card shadow-xl overflow-y-auto animate-in fade-in slide-in-from-top-2">
              {filteredTeams.map((team) => (
                <button
                  key={team.slug}
                  onClick={() => {
                    router.push(`/lag/${team.slug}`)
                    setSearch('')
                  }}
                  className="w-full text-left px-5 py-3 text-foreground hover:bg-muted transition-colors"
                >
                  {team.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SVG clip path i botten */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="hsl(var(--background))"
          d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  )
}
