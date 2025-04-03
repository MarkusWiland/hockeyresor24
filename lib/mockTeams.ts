export type Team = {
  name: string
  slug: string
  league: string
}
export const allMatches = [
  {
    slug: 'boston-bruins-vs-maple-leafs-2025-10-10',
    homeTeam: 'Boston Bruins',
    awayTeam: 'Toronto Maple Leafs',
    date: '2025-10-10',
    venue: 'TD Garden',
    city: 'Boston',
    priceFrom: 799,
    league: 'NHL',
  },
  {
    slug: 'boston-bruins-vs-canadiens-2025-11-02',
    homeTeam: 'Boston Bruins',
    awayTeam: 'Montreal Canadiens',
    date: '2025-11-02',
    venue: 'TD Garden',
    city: 'Boston',
    priceFrom: 875,
    league: 'Champions Hockey League',
  },
  {
    slug: 'rangers-vs-boston-bruins-2025-10-20',
    homeTeam: 'New York Rangers',
    awayTeam: 'Boston Bruins',
    date: '2025-10-20',
    venue: 'Madison Square Garden',
    city: 'New York',
    priceFrom: 849,
    league: 'NHL',
  },
  {
    slug: 'boston-bruins-vs-frolunda-2025-12-05',
    homeTeam: 'Boston Bruins',
    awayTeam: 'Frölunda HC',
    date: '2025-12-05',
    venue: 'TD Garden',
    city: 'Boston',
    priceFrom: 899,
    league: 'Champions Hockey League',
  },
  {
    slug: 'chicago-blackhawks-vs-boston-bruins-2026-01-08',
    homeTeam: 'Chicago Blackhawks',
    awayTeam: 'Boston Bruins',
    date: '2026-01-08',
    venue: 'United Center',
    city: 'Chicago',
    priceFrom: 765,
    league: 'NHL',
  },
]

export async function fetchMatchesByTeamSlug(slug: string) {
  // Hitta lagets namn via slug
  const team = mockTeams.find((team) => team.slug === slug)
  if (!team) return []

  // Filtrera matcher där laget är hemma eller bortalag
  return allMatches.filter(
    (match) => match.homeTeam === team.name || match.awayTeam === team.name,
  )
}

export const mockTeams: Team[] = [
  // SHL
  {
    name: 'Frölunda HC',
    slug: 'frolunda',
    league: 'SHL',
  },
  {
    name: 'Boston Bruins',
    slug: 'Boston-Bruins',
    league: 'NHL',
  },
  {
    name: 'Luleå HF',
    slug: 'lulea',
    league: 'SHL',
  },
  {
    name: 'Skellefteå AIK',
    slug: 'skelleftea',
    league: 'SHL',
  },

  // NHL
  {
    name: 'Toronto Maple Leafs',
    slug: 'toronto-maple-leafs',
    league: 'NHL',
  },
  {
    name: 'Boston Bruins',
    slug: 'boston-bruins',
    league: 'NHL',
  },
  {
    name: 'Chicago Blackhawks',
    slug: 'chicago-blackhawks',
    league: 'NHL',
  },

  // Hockey-VM
  {
    name: 'Sverige (Tre Kronor)',
    slug: 'sverige',
    league: 'VM',
  },
  {
    name: 'Kanada',
    slug: 'kanada',
    league: 'VM',
  },
  {
    name: 'Finland',
    slug: 'finland',
    league: 'VM',
  },
]
