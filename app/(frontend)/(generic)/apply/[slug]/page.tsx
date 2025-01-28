import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import PositionPage from '@/components/pages/position/PositionPage'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadPositionPage } from '@/sanity/loader/loadQuery'
const PositionPagePreview = dynamic(
  () => import('@/components/pages/position/PositionPagePreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const { data } = await loadPositionPage(slug)

  return {
    title: data?.name,
    description: data?.description,
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('position')
}

export default async function PositionSlugRoute({ params }: Props) {
  const { slug } = params
  const initial = await loadPositionPage(slug)

  if (draftMode().isEnabled) {
    return <PositionPagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <PositionPage data={initial.data} />
}
