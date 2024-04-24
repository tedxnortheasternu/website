import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClockIcon,
  InfoIcon,
  MapPinIcon,
} from 'lucide-react'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { PositionPayload } from '@/types'

export interface PositionPageProps {
  data: PositionPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function PositionPage({ data, encodeDataAttribute }: PositionPageProps) {
  // Default to an empty object to allow previews on non-existent documents

  if (!data) return null

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <span className="px-4 py-1 font-bold text-white uppercase bg-red-600 rounded-full">
            {data.team.name} Team
          </span>
          <h1 className="mx-auto mt-4 text-3xl font-extrabold md:text-5xl">
            {data.name}
          </h1>
          <div className="pt-8">
            {!data.acceptingApplications && (
              <div className="px-4 py-4 font-bold text-black uppercase rounded-md bg-slate-100">
                This position is no longer accepting applications.
              </div>
            )}
          </div>
        </div>

        <div className="border rounded-md">
          <div className="p-3 lg:p-4">
            <Link
              href="/apply"
              className="inline-flex flex-row items-center gap-2 px-4 py-2 text-sm font-bold text-red-600 transition-colors border border-red-600 rounded-full hover:bg-red-600 hover:text-white"
            >
              <ArrowLeftIcon size={16} />
              Back to All Positions
            </Link>

            {/* Campuses/Expected Hours */}
            <div className="grid gap-2 mt-4 md:grid-cols-2">
              {/* Description */}
              <div className="flex flex-col row-span-2 gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-50">
                <InfoIcon />
                <p className="leading-snug prose text-slate-800">
                  {data.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-50">
                <MapPinIcon />
                {data.campuses.map(({ name }) => name).join(' · ')}
              </div>
              <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-50">
                <ClockIcon />
                {data.expectedHoursPerWeek.min ?? 0}-
                {data.expectedHoursPerWeek.max ?? 10} hrs/week
              </div>
            </div>

            <div className="grid gap-8 mt-8 md:grid-cols-2">
              <div className="prose">
                <h2 className="text-xl font-bold">Responsibilities</h2>
                <CustomPortableText value={data.responsibilities} />
              </div>

              <div className="prose">
                <h2 className="text-xl font-bold">Requirements</h2>
                <CustomPortableText value={data.requirements} />
              </div>
            </div>
            {data.acceptingApplications ? (
              <Link
                target="_blank"
                href="https://airtable.com/apppF8LcqIJPagRlz/shr8gbJDilpFkZSxP"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 mt-8 text-xl font-bold text-white uppercase transition-colors bg-red-600 rounded-full hover:bg-red-700"
              >
                Apply Now <ArrowRightIcon size={24} />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default PositionPage
