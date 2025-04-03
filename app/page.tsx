'use client'
import HeroSection from '@/components/home/hero-section'
import MatchList from '@/components/home/match-list'
import PopularLeagues from '@/components/home/popular-leagues'
import PopularMatches from '@/components/home/popular-matches'
import PopularTeams from '@/components/home/popular-teams'

import { fetchMatches } from '@/lib/fetchMatches'
export default function Home() {
  return (
    <div className="relative h-full">
      <div className="flex flex-col">
        <HeroSection />
        <PopularMatches />
        <MatchList matches={fetchMatches()} />
        <section className="">
          <PopularLeagues />
        </section>
      </div>
    </div>
  )
}
