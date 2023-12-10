'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { applyPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ApplyPagePayload } from '@/types'

import ApplyPage from './ApplyPage'

type Props = {
  initial: QueryResponseInitial<ApplyPagePayload | null>
}

export default function ApplyPagePreview(props: Props) {
  const { initial } = props
  const { data } = useQuery<ApplyPagePayload | null>(
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
