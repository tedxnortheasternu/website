'use client'

import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import NavLink from '@/components/global/Navbar/NavLink'
import refractionLogo from '@/components/images/refraction/TEDxNortheasternU_Refraction_Logo.png'
import { cn } from '@/lib/utils'

export default function RefractionNavBarLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full h-full max-w-screen-xl px-4 py-4 mx-auto text-white md:py-3 bg-[#000000] xl:rounded-md lg:flex lg:items-center lg:justify-between lg:gap-4 border border-[#1d2d44]">
      <div className="flex items-center justify-between lg:gap-4">
        <Link href="/refraction" className="font-bold">
          <Image
            src={refractionLogo}
            alt="Refraction Logo"
            className="h-full max-w-full -ml-3.5 w-80"
          />
        </Link>

        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium align-middle transition-all border rounded-lg shadow-sm border-[#1d2d44] bg-[#1d2d44] text-[#b8c3d4] hover:bg-[#1d2d44]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-600"
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
        <div className="flex flex-col space-y-1 md:space-y-0 md:space-x-2 font-renaissance md:flex-row md:items-center">
          <NavLink
            href="/refraction"
            variant="renaissance"
            active={undefined}
          >
            Overview
          </NavLink>
          {/* <NavLink
            href="/refraction/location"
            variant="renaissance"
            active={undefined}
          >
            Location
          </NavLink> */}
          <NavLink
            href="/refraction/speakers"
            variant="renaissance"
            active={undefined}
          >
            Speakers
          </NavLink>
          {/* <NavLink
            href="/refraction/performers"
            variant="renaissance"
            active={undefined}
          >
            Performances
          </NavLink> */}
          {/* <NavLink
            href="/refraction/schedule"
            variant="renaissance"
            active={undefined}
          >
            Schedule
          </NavLink> */}
        </div>
      </div>
    </div>
  )
}
