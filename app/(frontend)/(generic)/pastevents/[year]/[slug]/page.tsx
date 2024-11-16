import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { PastEventPage } from '@/components/pages/pastEvent/PastEventPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadPastEvent } from '@/sanity/loader/loadQuery'
const PastEventPagePreview = dynamic(
  () => import('@/components/pages/pastEvent/PastEventPreview'),
)

type Props = {
  params: { year: string; slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, slug } = params

  const { data: pastEvent } = await loadPastEvent(year + '/' + slug)
  const ogImage = urlForOpenGraphImage(pastEvent?.coverGraphic)

  return {
    title: pastEvent?.name,
    description: pastEvent?.briefDescription,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('pastEvent')
}

export default async function PastEventSlugRoute({ params }: Props) {
  const { year, slug } = params
  const initial = await loadPastEvent(year + '/' + slug)

  if (draftMode().isEnabled) {
    return <PastEventPagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return (
    <PastEventPage
      data={initial.data ? [{ event: initial.data }] : null}
      slug={year + '/' + slug}
    />
  )
}
