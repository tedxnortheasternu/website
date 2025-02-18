'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { articleByIdQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ArticlePayload } from '@/types'

import ArticlePage from './ArticlePage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<ArticlePayload | null>
}

export default function ArticlePagePreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<ArticlePayload | null>(
    articleByIdQuery,
    params,
    { initial },
  )

  return <ArticlePage data={data} encodeDataAttribute={encodeDataAttribute} />
}
