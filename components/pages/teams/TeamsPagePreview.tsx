'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { teamsPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { TeamsPagePayload } from '@/types'

import TeamsPage from './TeamsPage'

type Props = {
  initial: QueryResponseInitial<TeamsPagePayload | null>
}

export default function TeamsPagePreview(props: Props) {
  const { initial } = props
  const { data } = useQuery<TeamsPagePayload | null>(
    teamsPageQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Team documents to see the preview!
      </div>
    )
  }

  return <TeamsPage data={data} />
}
