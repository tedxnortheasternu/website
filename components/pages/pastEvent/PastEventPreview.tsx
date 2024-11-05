'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { eventBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { UpcomingEventPayload } from '@/types'

import PastEventPage from './PastEventPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<UpcomingEventPayload | null>
}

export default function PastEventPagePreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<UpcomingEventPayload | null>(
    eventBySlugQuery,
    params,
    { initial },
  )

  return <PastEventPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
