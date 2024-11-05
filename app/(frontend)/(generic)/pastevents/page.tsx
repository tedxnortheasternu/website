import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { PastEventsPage } from '@/components/pages/pastEvents/PastEventsPage'
import { loadPastEventsPage } from '@/sanity/loader/loadQuery'
const PastEventsPagePreview = dynamic(
  () => import('@/components/pages/pastEvents/PastEventsPreview'),
)

export default async function PastEventsPageRoute() {
  const initial = await loadPastEventsPage()

  if (draftMode().isEnabled) {
    return <PastEventsPagePreview initial={initial} />
  }

  if (!initial.data) {
    return <div className="text-center">There are no pastEvents.</div>
  }

  return <PastEventsPage data={initial.data} />
}