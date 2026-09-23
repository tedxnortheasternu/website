import { redirect } from 'next/navigation'

import { ApplicationsClosed } from '@/components/shared/ApplicationsClosed'
import {
  TEAM_APPLICATION_URL,
  TEAM_APPLICATIONS_OPEN,
} from '@/lib/applications'

export default function Page() {
  if (TEAM_APPLICATIONS_OPEN) {
    redirect(TEAM_APPLICATION_URL)
  }

  return <ApplicationsClosed variant="team" />
}
