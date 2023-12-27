// import TeamsPage from 'components/pages/teams/TeamsPage'
// import TeamsPagePreview from 'components/pages/teams/TeamsPagePreview'
// import { getMembers, getSettings, getTeams } from 'lib/sanity.fetch'
// import { teamsQuery } from 'lib/sanity.queries'
// import { defineMetadata } from 'lib/utils.metadata'
// import { Metadata } from 'next'
// import { draftMode } from 'next/headers'
// import { LiveQuery } from 'next-sanity/preview/live-query'

// export default async function IndexRoute() {
//   const data = await getTeams()
//   const members = await getMembers()

//   if (!data && !draftMode().isEnabled) {
//     return <div className="text-center">There are no teams.</div>
//   }

//   return (
//     <LiveQuery
//       enabled={draftMode().isEnabled}
//       query={teamsQuery}
//       initialData={data}
//       as={TeamsPagePreview}
//     >
//       <TeamsPage data={data} />
//     </LiveQuery>
//   )
// }

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
