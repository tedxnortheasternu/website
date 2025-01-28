'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { applyPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { PositionPayload } from '@/types'

import ApplyPage from './ApplyPage'

type Props = {
  initial: QueryResponseInitial<PositionPayload[] | null>
}

export default function ApplyPagePreview(props: Props) {
  const { initial } = props
  const { data } = useQuery<PositionPayload[] | null>(
    applyPageQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Position documents to see the preview!
      </div>
    )
  }

  return <ApplyPage data={data} />
}
