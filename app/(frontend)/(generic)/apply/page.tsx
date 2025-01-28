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

  if (!initial.data) {
    return (
      <div className="text-center">
        Please apply during the next cycle in Spring 2025
      </div>
    )
  }

  return <ApplyPage data={initial.data} />
}
