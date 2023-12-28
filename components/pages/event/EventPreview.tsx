'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { eventBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { UpcomingEventPayload } from '@/types'

import EventPage from './EventPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<UpcomingEventPayload | null>
}

export default function EventPagePreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<UpcomingEventPayload | null>(
    eventBySlugQuery,
    params,
    { initial },
  )

  return <EventPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
