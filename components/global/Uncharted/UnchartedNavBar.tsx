'use client'

import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import NavLink from '@/components/global/Navbar/NavLink'
import renaissanceLogo from '@/components/images/uncharted/TEDxNortheasternU_Black_Uncharted_Transparent_1750x475.png'
import unchartedLogo from '@/components/images/uncharted/ted-uncharted-logo-final.png'
import { cn } from '@/lib/utils'
import { SponsorPayload } from '@/types'

export interface SponsorListProps {
  data: SponsorPayload[] | null
}

export default function UnchartedNavBarLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full h-full max-w-screen-xl px-4 py-4 mx-auto text-white md:py-3 bg-[#1d2d44] xl:rounded-md lg:flex lg:items-center lg:justify-between lg:gap-4">
      <div className="flex items-center justify-between lg:gap-4">
        <Link href="/uncharted" className="font-bold">
          <Image
            src={renaissanceLogo}
            alt="Renaissance Logo"
            className="h-full max-w-full -ml-3.5 w-80"
          />
        </Link>

        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium align-middle transition-all border rounded-lg shadow-sm border-[
#b4bcd4] bg-[#748cab] text-[#748cab] hover:bg-renaissance-light/15 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-600"
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon
              size={16}
              className={cn('w-4 h-4', open ? 'hidden' : 'block')}
            />
            <XIcon
              size={16}
              className={cn('w-4 h-4', open ? 'block' : 'hidden')}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          'mt-2 lg:mt-0 rounded-lg border border-[#1d2d44] p-4 lg:p-0 flex flex-col lg:flex-row lg:justify-between overflow-hidden transition-all duration-300 basis-full grow lg:border-transparent lg:gap-4 lg:flex',
          open ? '' : 'hidden',
        )}
      >
        <div className="flex flex-col space-y-1 md:space-y-0 md:space-x-2 font-renaissance md:flex-row md:items-center text-[#748cab]">
          <NavLink href="/uncharted" variant="renaissance">
            Overview
          </NavLink>
          <NavLink href="/uncharted/location" variant="renaissance">
            Location
          </NavLink>
          <NavLink href="/uncharted/speakers" variant="renaissance">
            Speakers
          </NavLink>
          <NavLink href="/uncharted/performers" variant="renaissance">
            Performances
          </NavLink>
          <Link
            href="/uncharted/tickets"
            className="!mt-2 md:!mt-0 inline-flex items-center gap-2 px-4 py-1.5 uppercase transition-colors rounded-full text-[#1d2d44] font-renaissance bg-[#b4bcd4] w-max hover:bg-white"
          >
            Buy Your Tickets <ArrowRightIcon size={16} />
          </Link>

          {/*
          <NavLink href="/uncharted/schedule" variant="renaissance">
            Schedule
          </NavLink>
          <NavLink href="/uncharted/speakers" variant="renaissance">
            Speakers
          </NavLink>
          <NavLink href="/uncharted/performers" variant="renaissance">
            Performers
          </NavLink>
          <NavLink href="/uncharted/location" variant="renaissance">
            Location
          </NavLink>
          <Link
            href="/uncharted/tickets"
            className="!mt-2 md:!mt-0 inline-flex items-center gap-2 px-4 py-1.5 uppercase transition-colors rounded-full text-[#1d2d44] font-renaissance bg-[#b4bcd4] w-max hover:bg-white"
          >
            Buy Your Tickets <ArrowRightIcon size={16} />
          </Link> */}
        </div>
      </div>
    </div>
  )
}
