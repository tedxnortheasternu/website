'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import NavLink from '@/components/global/Navbar/NavLink'
import renaissanceLogo from '@/components/images/renaissance.png'
import { cn } from '@/lib/utils'

export default function RenaissanceNavbarLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full h-full max-w-screen-xl px-4 py-4 mx-auto text-white md:py-3 bg-renaissance-dark xl:rounded-md lg:flex lg:items-center lg:justify-between lg:gap-4">
      <div className="flex items-center justify-between lg:gap-4">
        <Link href="/renaissance" className="font-bold">
          <Image
            src={renaissanceLogo}
            alt="Renaissance Logo"
            className="h-auto max-w-full -ml-3.5 w-80"
          />
        </Link>

        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium align-middle transition-all border rounded-lg shadow-sm border-renaissance-mid bg-renaissance-dark text-renaissance-light hover:bg-renaissance-light/15 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-600"
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
          'mt-2 lg:mt-0 rounded-lg border border-renaissance-mid p-4 lg:p-0 flex flex-col lg:flex-row lg:justify-between overflow-hidden transition-all duration-300 basis-full grow lg:border-transparent lg:gap-4 lg:flex',
          open ? '' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-1 font-renaissance lg:flex-row lg:items-center">
          <NavLink href="/renaissance" variant="renaissance">
            Overview
          </NavLink>
          <NavLink href="/renaissance/speakers" variant="renaissance">
            Speakers
          </NavLink>
          <NavLink href="/renaissance/tickets" variant="renaissance">
            Tickets
          </NavLink>
        </div>
      </div>
    </div>
  )
}
