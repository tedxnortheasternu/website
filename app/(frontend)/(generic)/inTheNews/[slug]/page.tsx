import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import ArticlePage from '@/components/pages/article/ArticlePage'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadArticlePage } from '@/sanity/loader/loadQuery'
const ArticlePagePreview = dynamic(
  () => import('@/components/pages/article/ArticlePagePreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const { data } = await loadArticlePage(slug)

  return {
    title: data?.title,
    description: data?.description,
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('article')
}

export default async function ArticleSlugRoute({ params }: Props) {
  const { slug } = params
  const initial = await loadArticlePage(slug)

  if (draftMode().isEnabled) {
    return <ArticlePagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  console.log('Inside slug');

  return <ArticlePage data={initial.data} />
}
