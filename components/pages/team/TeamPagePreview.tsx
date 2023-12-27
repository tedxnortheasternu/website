'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { membersPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { MemberPayload } from '@/types'

import TeamPage from './TeamPage'

type Props = {
  initial: QueryResponseInitial<MemberPayload[] | null>
}

export default function TeamPagePreview(props: Props) {
  const { initial } = props
  const { data } = useQuery<MemberPayload[] | null>(
    membersPageQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Member documents to see the preview!
      </div>
    )
  }

  return <TeamPage data={data} />
}
