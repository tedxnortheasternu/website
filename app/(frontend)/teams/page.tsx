import TeamsPage from 'components/pages/teams/TeamsPage'
import TeamsPagePreview from 'components/pages/teams/TeamsPagePreview'
import { getSettings, getTeams } from 'lib/sanity.fetch'
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
      <TeamsPage data={data} />
    </LiveQuery>
  )
}
