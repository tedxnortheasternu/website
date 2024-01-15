import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { EventPage } from '@/components/pages/event/EventPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadEvent } from '@/sanity/loader/loadQuery'
const EventPreview = dynamic(
  () => import('@/components/pages/event/EventPreview'),
)

type Props = {
  params: { year: string; slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, slug } = params

  const { data: event } = await loadEvent(year + '/' + slug)
  const ogImage = urlForOpenGraphImage(event?.coverGraphic)

  return {
    title: event?.name,
    description: event?.briefDescription,
    openGraph: ogImage
      ? {
          images: [ogImage],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('event')
}

export default async function EventSlugRoute({ params }: Props) {
  const { year, slug } = params
  const initial = await loadEvent(year + '/' + slug)

  if (draftMode().isEnabled) {
    return <EventPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <EventPage data={initial.data} />
}
