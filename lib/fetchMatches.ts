// lib/fetchMatches.ts

import { generateSlug } from './utils'

export interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  league: string
  venue: string
  affiliateUrl: string
  slug: string
  homeColor: string
  homeSecondaryColor: string
  city: string
  priceFrom: number
}

export function fetchMatches(): Match[] {
  return [
    {
      id: '1',
      homeTeam: 'Frölunda',
      awayTeam: 'Djurgården',
      date: '2025-01-15',
      league: 'SHL',
      venue: 'Scandinavium',
      affiliateUrl: 'https://affiliate.länk/frolunda-djurgarden-2025',
      slug: generateSlug('Frölunda', 'Djurgården', '2025-01-15'),
      homeColor: '#d20000', // röd
      homeSecondaryColor: '#006341', // grön
      city: 'Göteborg',
      priceFrom: 799,
    },
    {
      id: '2',
      homeTeam: 'Luleå',
      awayTeam: 'Skellefteå',
      date: '2025-02-10',
      league: 'SHL',
      venue: 'COOP Norrbotten Arena',
      affiliateUrl: 'https://affiliate.länk/lulea-skelleftea-2025',
      slug: generateSlug('Luleå', 'Skellefteå', '2025-02-10'),
      homeColor: '#e30613', // röd
      homeSecondaryColor: '#000000', // svart
      city: 'Luleå',
      priceFrom: 749,
    },
    {
      id: '3',
      homeTeam: 'HV71',
      awayTeam: 'Rögle',
      league: 'SHL',
      date: '2025-01-25',
      venue: 'Husqvarna Garden',
      affiliateUrl: 'https://affiliate.länk/hv71-rogle-2025',
      slug: generateSlug('HV71', 'Rögle', '2025-01-25'),
      homeColor: '#001a72', // blå
      homeSecondaryColor: '#f7d117', // gul
      city: 'Husqvarna',
      priceFrom: 899,
    },
  ]
}

export type League = {
  name: string
  slug: string
  flags: string[] // landskoder (för FlagPack eller bilder)
}

export function fetchPopularLeagues(): League[] {
  return [
    {
      name: 'SHL',
      slug: 'shl',
      flags: ['SE'],
    },
    {
      name: 'Hockeyallsvenskan',
      slug: 'hockeyallsvenskan',
      flags: ['SE'],
    },
    {
      name: 'NHL',
      slug: 'nhl',
      flags: ['US', 'CA'],
    },
    {
      name: 'Hockey-VM',
      slug: 'vm',
      flags: ['SE', 'FI', 'CA', 'US'],
    },
    {
      name: 'CHL (Champions Hockey League)',
      slug: 'chl',
      flags: ['EU'],
    },
    {
      name: 'Tre Kronor',
      slug: 'tre-kronor',
      flags: ['SE'],
    },
  ]
}

type PopularMatch = {
  id: string
  homeTeam: string
  awayTeam: string
  homeLogo: string
  awayLogo: string
  date: string
  league: string
  venue: string
  slug: string
  priceFrom: number
}

export function fetchPopularMatches(): PopularMatch[] {
  return [
    {
      id: '201',
      homeTeam: 'Boston Bruins',
      awayTeam: 'Toronto Maple Leafs',
      homeLogo: '/logos/Boston_Bruins.png',
      awayLogo: '/logos/toronto-maple-leafs.png',
      date: '2025-10-10',
      league: 'NHL',
      venue: 'TD Garden',
      slug: 'Boston-Bruins',
      priceFrom: 799,
    },
    {
      id: '202',
      homeTeam: 'Detroit Red Wings',
      awayTeam: 'Boston Bruins',
      homeLogo: '/logos/detroit.png',
      awayLogo: '/logos/boston-bruins.png',
      date: '2025-11-15',
      league: 'NHL',
      venue: 'Little Caesars Arena',
      slug: generateSlug('Detroit Red Wings', 'Boston Bruins', '2025-11-15'),
      priceFrom: 749,
    },
    {
      id: '203',
      homeTeam: 'Toronto Maple Leafs',
      awayTeam: 'Washington Capitals',
      homeLogo: '/logos/toronto.png',
      awayLogo: '/logos/washington-capitals.png',
      date: '2025-12-01',
      league: 'NHL',
      venue: 'Scotiabank Arena',
      slug: generateSlug(
        'Toronto Maple Leafs',
        'Washington Capitals',
        '2025-12-01',
      ),
      priceFrom: 899,
    },
    {
      id: '204',
      homeTeam: 'Washington Capitals',
      awayTeam: 'Detroit Red Wings',
      homeLogo: '/logos/WC.png',
      awayLogo: '/logos/detroit-red-wings.png',
      date: '2026-01-22',
      league: 'NHL',
      venue: 'Capital One Arena',
      slug: generateSlug(
        'Washington Capitals',
        'Detroit Red Wings',
        '2026-01-22',
      ),
      priceFrom: 699,
    },
  ]
}

export type Team = {
  name: string
  slug: string
  league: string
  logoUrl?: string
  colors?: [string, string]
}

export function fetchPopularTeams(): Team[] {
  return [
    {
      name: 'Frölunda',
      slug: 'frolunda',
      league: 'SHL',
      colors: ['#d20000', '#006341'],
    },
    {
      name: 'Sverige (Tre Kronor)',
      slug: 'sverige',
      league: 'VM',
      colors: ['#ffcc00', '#005baa'],
    },
    {
      name: 'Toronto Maple Leafs',
      slug: 'toronto-maple-leafs',
      league: 'NHL',
      colors: ['#00205b', '#ffffff'],
    },
  ]
}

export function getAllMatchesForTeam(team: string) {
  return fetchMatches().filter(
    (match) =>
      match.homeTeam.toLowerCase() === team.toLowerCase() ||
      match.awayTeam.toLowerCase() === team.toLowerCase(),
  )
}
