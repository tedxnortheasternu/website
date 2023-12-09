import ImageBox from 'components/shared/ImageBox'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import sponsor from 'schemas/documents/sponsor'
import { SponsorPayload } from 'types'

import { SponsorListItem } from './SponsorListItem'

export interface SponsorComponentProps {
  data: SponsorPayload[] | null
}

export function SponsorComponent({ data = [] }: SponsorComponentProps) {
  return (
    <>
      {/* Header */}
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Sponsors
        </h1>
      </div>

      {/* Events List */}
      {data && data.length > 0 ? (
        <div className="mx-auto border rounded-md border-slate-200 overflow-clip">
          {data.map((sponsor, key) => {
            const srcImage = sponsor.logo.asset?._ref
            const href = resolveHref('sponsor', sponsor.name)
            if (!srcImage || !href) return null
            return (
              <Link key={key} href={href}>
                <SponsorListItem sponsor={sponsor} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      ) : (
        // TODO: improve styling
        <div className="text-center">No events.</div>
      )}
    </>
  )
}

export default SponsorComponent
