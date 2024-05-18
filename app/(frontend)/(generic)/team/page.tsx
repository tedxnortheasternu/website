import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { MembersPage } from '@/components/pages/members/MembersPage'
import { loadMembersPage } from '@/sanity/loader/loadQuery'
const MembersPagePreview = dynamic(
  () => import('@/components/pages/members/MembersPagePreview'),
)

export default async function TeamRoute() {
  const initial = await loadMembersPage()

  if (draftMode().isEnabled) {
    return <MembersPagePreview initial={initial} />
  }

  if (initial.data) {
    return (
      <div className="text-center">
        We are currently taking applications please apply
      </div>
    )
  }

  return <MembersPage data={initial.data} />
}
