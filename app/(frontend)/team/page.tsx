import MembersPage from 'components/pages/members/MembersPage'
import TeamsPagePreview from 'components/pages/teams/TeamsPagePreview'
import { getMembers, getSettings, getTeams } from 'lib/sanity.fetch'
import { teamsQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { LiveQuery } from 'next-sanity/preview/live-query'

export const runtime = 'edge'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()

  return defineMetadata({
    description: '',
    image: settings?.ogImage,
    title: 'TedXNortheasternU',
  })
}

export default async function IndexRoute() {
  const data = await getTeams()
  const members = await getMembers()

  if (!data && !draftMode().isEnabled) {
    return <div className="text-center">There are no teams.</div>
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={teamsQuery}
      initialData={data}
      as={TeamsPagePreview}
    >
      <MembersPage data={data} members={members} />
    </LiveQuery>
  )
}
