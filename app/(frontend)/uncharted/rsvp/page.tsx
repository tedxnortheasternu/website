import { Metadata } from 'next'

import RsvpPage from '@/components/pages/rsvp/RsvpPage'

export const metadata: Metadata = {
  title: 'VIP RSVP',
}

export default function RsvpRoute() {
  return <RsvpPage />
}
