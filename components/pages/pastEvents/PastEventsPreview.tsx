'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { pastEventsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import type { PastEventCardPayload } from '@/types'

import PastEventsPage from './PastEventsPage'

type Props = {
  initial: QueryResponseInitial<PastEventCardPayload[] | null>
}

export default function PastEventsPagePreview(props: Props) {
  const { initial } = props
  const { data } = useQuery<PastEventCardPayload[] | null>(
    pastEventsQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Past events documents to see the preview!
      </div>
    )
  }

  return <PastEventsPage data={data} />
}
