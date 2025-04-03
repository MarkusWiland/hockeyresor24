import ClientTeamPage from '@/components/client-team'
import { fetchMatchesByTeamSlug } from '@/lib/mockTeams'

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const matches = await fetchMatchesByTeamSlug((await params).slug)

  return (
    <ClientTeamPage
      slug={(await params).slug}
      initialMatches={matches as any}
      showLeagueFilters={true}
    />
  )
}
