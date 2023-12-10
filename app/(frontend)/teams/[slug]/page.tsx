import TeamPage from 'components/pages/team/TeamPage'
import TeamPreveiw from 'components/pages/team/TeamPreview'
import { getTeamsPaths, getTeamsSlug } from 'lib/sanity.fetch'
import { teamBySlugQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { LiveQuery } from 'next-sanity/preview/live-query'

export const runtime = 'edge'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const teams = await getTeamsSlug(slug)

  return defineMetadata({
    description: teams?.description,
    title: teams?.name,
  })
}

export async function generateStaticParams() {
  const slugs = await getTeamsPaths()
  return slugs.map((slug) => ({ slug }))
}

export default async function TeamsSlugRoute({ params }: Props) {
  const data = await getTeamsSlug(params.slug)

  if (!data && !draftMode().isEnabled) {
    notFound()
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={teamBySlugQuery}
      params={params}
      initialData={data}
      as={TeamPreveiw}
    >
      <TeamPage data={data} />
    </LiveQuery>
  )
}
