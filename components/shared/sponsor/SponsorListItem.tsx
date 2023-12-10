import ImageBox from '@/components/shared/ImageBox'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { SponsorPayload } from 'types'

interface SponsorProps {
  sponsor: SponsorPayload
}

export function SponsorListItem({ sponsor }: SponsorProps) {
  const baseWrapperClasses =
    'relative flex flex-col justify-center p-4 text-center'
  if (sponsor.websiteLink) {
    return (
      <Link
        target="_blank"
        href={sponsor.websiteLink}
        className={cn(
          baseWrapperClasses,
          'hover:bg-slate-100 transition-colors',
        )}
      >
        <SponsorListItemContent sponsor={sponsor} />
      </Link>
    )
  }
  return (
    <div className={baseWrapperClasses}>
      <SponsorListItemContent sponsor={sponsor} />
    </div>
  )
}

function SponsorListItemContent({ sponsor }: SponsorProps) {
  return (
    <>
      {sponsor.logo ? (
        <ImageBox
          image={sponsor.logo}
          alt={`logo for ${sponsor.name}`}
          className="object-cover"
        />
      ) : (
        <span className="font-bold tracking-tight">{sponsor.name}</span>
      )}
    </>
  )
}
