import { redirect } from 'next/navigation'

import { ApplicationsClosed } from '@/components/shared/ApplicationsClosed'
import { TEAM_APPLICATION_URL } from '@/lib/applications'
import { loadApplyPage } from '@/sanity/loader/loadQuery'

export default async function Page() {
  // Mirrors /apply: this shortcut only forwards to the form while Sanity has a
  // position accepting applications. redirect() throws internally, so it has to
  // stay outside any try/catch.
  const { data: positions } = await loadApplyPage()

  if (positions && positions.length > 0) {
    redirect(TEAM_APPLICATION_URL)
  }

  return <ApplicationsClosed variant="team" />
}
