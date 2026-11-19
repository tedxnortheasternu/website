'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { pastEventBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import type { PastEventPayload } from '@/types'

import PastEventPage from './PastEventPage'

type Props = {
  params: { year: number; slug: string }
  initial: QueryResponseInitial<PastEventPayload | null>
}

export default function PastEventPagePreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<PastEventPayload | null>(
    pastEventBySlugQuery,
    params,
    { initial },
  )

  return <PastEventPage data={data} encodeDataAttribute={encodeDataAttribute} />
}
