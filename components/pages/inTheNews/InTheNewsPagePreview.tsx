'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { newsPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ArticlePayload } from '@/types'

import InTheNewsPage from './InTheNewsPage'

type Props = {
  initial: QueryResponseInitial<ArticlePayload[] | null>
}

export default function InTheNewsPagePreview(props: Props) {
  const { initial } = props
  const { data, error } = useQuery<ArticlePayload[] | null>(
    newsPageQuery,
    {},
    { initial },
  )

  if (error) {
    throw new Error('There is an error with the data in the inTheNewsPagePreview page')
  }

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Article documents to see the preview!
      </div>
    )
  }

  return <InTheNewsPage data={data} />
}
