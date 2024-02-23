import { Metadata } from 'next'

import FeedbackPage from '@/components/pages/feedback/FeedBackPage'

export const metadata: Metadata = {
  title: 'Share Feedback',
}

export default function FeedbackRoute() {
  return <FeedbackPage />
}
