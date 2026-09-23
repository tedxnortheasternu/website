import { redirect } from 'next/navigation'

import { ApplicationsClosed } from '@/components/shared/ApplicationsClosed'
import {
  SPEAKER_APPLICATION_URL,
  SPEAKER_APPLICATIONS_OPEN,
} from '@/lib/applications'

export default function Page() {
  if (SPEAKER_APPLICATIONS_OPEN) {
    redirect(SPEAKER_APPLICATION_URL)
  }

  return <ApplicationsClosed variant="speaker" />
}
