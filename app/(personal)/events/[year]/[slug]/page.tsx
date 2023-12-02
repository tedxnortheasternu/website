import EventPage from 'components/pages/event/EventPage'
import EventPreview from 'components/pages/event/EventPreview'
import { getEventBySlug, getEventsPaths } from 'lib/sanity.fetch'
import { eventBySlugQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { LiveQuery } from 'next-sanity/preview/live-query'

export const runtime = 'edge'

type Props = {
  params: { year: string; slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, slug } = params

  const event = await getEventBySlug(year + '/' + slug)

  return defineMetadata({
    description: event?.briefDescription,
    image: event?.coverGraphic,
    title: event?.name,
  })
}

export async function generateStaticParams() {
  const slugs = await getEventsPaths()
  return slugs.map((slug) => ({ slug }))
}

export default async function EventSlugRoute({ params }: Props) {
  const data = await getEventBySlug(params.year + '/' + params.slug)

  if (!data && !draftMode().isEnabled) {
    notFound()
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={eventBySlugQuery}
      params={params}
      initialData={data}
      as={EventPreview}
    >
      <EventPage data={data} />
    </LiveQuery>
  )
}
