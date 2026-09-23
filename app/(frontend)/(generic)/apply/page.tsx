import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { ApplyPage } from '@/components/pages/apply/ApplyPage'
import { ApplicationsClosed } from '@/components/shared/ApplicationsClosed'
import { TEAM_APPLICATIONS_OPEN } from '@/lib/applications'
import { loadApplyPage } from '@/sanity/loader/loadQuery'
const ApplyPagePreview = dynamic(
  () => import('@/components/pages/apply/ApplyPagePreview'),
)

export default async function ApplyRoute() {
  // Gated here rather than inside ApplyPage: ApplyPagePreview is a client
  // component that re-runs applyPageQuery in the browser, so a component-level
  // check would still ship the position list in draft mode.
  if (!TEAM_APPLICATIONS_OPEN) {
    return <ApplicationsClosed variant="team" />
  }

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
