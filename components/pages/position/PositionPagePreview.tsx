'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { positionByIdQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { PositionPayload } from '@/types'

import PositionPage from './PositionPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<PositionPayload | null>
}

export default function PositionPagePreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<PositionPayload | null>(
    positionByIdQuery,
    params,
    { initial },
  )

  return <PositionPage data={data} encodeDataAttribute={encodeDataAttribute} />
}
