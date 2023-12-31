import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { TeamsPage } from '@/components/pages/teams/TeamsPage'
import { loadTeamsPage } from '@/sanity/loader/loadQuery'
const TeamsPagePreview = dynamic(
  () => import('@/components/pages/teams/TeamsPagePreview'),
)

export default async function TeamsRoute() {
  const initial = await loadTeamsPage()

  if (draftMode().isEnabled) {
    return <TeamsPagePreview initial={initial} />
  }

  if (!initial.data) {
    return <div className="text-center">There are no members.</div>
  }

  return <TeamsPage data={initial.data} />
}
