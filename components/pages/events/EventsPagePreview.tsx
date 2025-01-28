'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { upcomingEventsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { UpcomingEventPayload } from '@/types'

import EventsPage from './EventsPage'

type Props = {
  initial: QueryResponseInitial<UpcomingEventPayload[] | null>
}

export default function ApplyPagePreview(props: Props) {
  const { initial } = props
  const { data } = useQuery<UpcomingEventPayload[] | null>(
    upcomingEventsQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Event documents to see the preview!
      </div>
    )
  }

  return <EventsPage data={data} />
}
