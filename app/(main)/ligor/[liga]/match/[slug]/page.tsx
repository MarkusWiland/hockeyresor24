// ✅ /app/ligor/[liga]/match/[slug]/page.tsx

import { getMatchBySlugFromLocal } from '@/lib/api'
import MatchDetailPage from '../../../_components/match-detail'
import { notFound } from 'next/navigation'

export default function MatchPage({
  params,
}: {
  params: { liga: string; slug: string }
}) {
  const match = getMatchBySlugFromLocal(params.slug)

  if (!match || match.league.toLowerCase() !== params.liga.toLowerCase()) {
    return notFound()
  }

  return <MatchDetailPage match={match} />
}
