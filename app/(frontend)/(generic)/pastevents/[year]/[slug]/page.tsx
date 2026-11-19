import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { PastEventPage } from '@/components/pages/pastEvent/PastEventPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generatePastEventParams } from '@/sanity/loader/generateStaticSlugs'
import { loadPastEvent } from '@/sanity/loader/loadQuery'
const PastEventPagePreview = dynamic(
  () => import('@/components/pages/pastEvent/PastEventPreview'),
)

type Props = {
  params: { year: string; slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const year = Number(params.year)
  if (!Number.isInteger(year)) return {}

  const { data: pastEvent } = await loadPastEvent(year, params.slug)
  const ogImage = urlForOpenGraphImage(pastEvent?.coverGraphic)

  return {
    title: pastEvent?.theme,
    description: pastEvent?.briefDescription,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export function generateStaticParams() {
  return generatePastEventParams()
}

export default async function PastEventSlugRoute({ params }: Props) {
  const year = Number(params.year)
  if (!Number.isInteger(year)) {
    notFound()
  }

  const initial = await loadPastEvent(year, params.slug)

  if (draftMode().isEnabled) {
    return (
      <PastEventPagePreview
        params={{ year, slug: params.slug }}
        initial={initial}
      />
    )
  }

  if (!initial.data) {
    notFound()
  }

  return <PastEventPage data={initial.data} />
}
