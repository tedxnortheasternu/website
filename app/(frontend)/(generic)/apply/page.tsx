import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { ApplyPage } from '@/components/pages/apply/ApplyPage'
import { loadApplyPage } from '@/sanity/loader/loadQuery'
const ApplyPagePreview = dynamic(
  () => import('@/components/pages/apply/ApplyPagePreview'),
)

export default async function ApplyRoute() {
  const initial = await loadApplyPage()

  if (draftMode().isEnabled) {
    return <ApplyPagePreview initial={initial} />
  }

  // ApplyPage renders the closed notice for both null and an empty list, so
  // there is no separate fallback here.
  return <ApplyPage data={initial.data} />
}
