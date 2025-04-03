export async function fetchLeagueData(slug: string) {
  // Här kan du byta till riktig API-url eller databas
  const mockLeagues = {
    shl: {
      name: 'SHL – Svenska Hockeyligan',
      description: 'SHL är Sveriges högsta liga för ishockey...',
    },
    nhl: {
      name: 'NHL – National Hockey League',
      description:
        'NHL är världens största hockeyliga, med lag från USA och Kanada...',
    },
    chl: {
      name: 'CHL – Champions Hockey League',
      description: 'CHL samlar topplag från Europas bästa ligor...',
    },
  } as const

  return mockLeagues[slug.toLowerCase() as keyof typeof mockLeagues] ?? null
}
import { fetchMatches } from './fetchMatches'
import { generateSlug } from './utils'

export function getMatchBySlugFromLocal(slug: string) {
  const matches = fetchMatches()
  console.log('slug', slug)
  // Försök hitta direkt sparad slug
  let match = matches.find((m) => m.slug === slug)

  // Fallback: generera slug vid behov
  if (!match) {
    match = matches.find((m) => {
      const generated = generateSlug(m.homeTeam, m.awayTeam, m.date)
      return generated === slug
    })
  }

  return match || null
}
