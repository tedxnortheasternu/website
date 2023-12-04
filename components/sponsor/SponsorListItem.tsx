import client from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import ImageBox from 'components/shared/ImageBox'
import dayjs from 'dayjs'
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import type { SponsorPayload } from 'types'

interface SponsorProps {
  sponsor: SponsorPayload
  odd: number
}

export function SponsorListItem(props: SponsorProps) {
  const { sponsor, odd } = props
  const srcImage = sponsor.logo.asset?._ref

  return (
    <div
      className={`flex flex-col p-4 transition hover:bg-slate-50/50 ${
        odd && 'border-t border-slate-200'
      }`}
    >
      <div className="grid p-3 md:grid-cols-2">
        <div>
          {/* Title */}
          <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
            {sponsor.name}
          </h3>
        </div>

        <ImageBox
          image={sponsor.logo}
          alt={`logo for ${sponsor.name}`}
          width={20}
          height={20}
          size="small"
          classesWrapper="object-cover w-20 h-20"
        />

        <div>{sponsor.websiteLink ? <p></p> : null}</div>
        <div>
          {/* Overview  */}
          {sponsor.description ? <p>{sponsor.description}</p> : null}
        </div>
      </div>
    </div>
  )
}
