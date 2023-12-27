'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { membersPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { MembersPagePayload } from '@/types'

import MembersPage from './MembersPage'

type Props = {
  initial: QueryResponseInitial<MembersPagePayload | null>
}

export default function MembersPagePreview(props: Props) {
  const { initial } = props
  const { data } = useQuery<MembersPagePayload | null>(
    membersPageQuery,
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

  return <MembersPage teams={data.teams} members={data.members} />
}
