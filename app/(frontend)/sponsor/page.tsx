import { Metadata } from 'next'

import SponsorsPage from '@/components/pages/sponsors/SponsorsPage'

export const metadata: Metadata = {
  title: 'Sponsorship Opportunities',
}

export default function SponsorPageRoute() {
  return <SponsorsPage />
}
