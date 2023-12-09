'use client'

import { cn } from 'lib/utils'
import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import tedx from '../../images/tedxnortheasternu.png'
import NavLink from './NavLink'

export default function NavbarLayout() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="z-50 w-full py-4 text-sm bg-white">
        <nav className="w-full max-w-screen-xl px-4 mx-auto lg:flex lg:items-center lg:justify-between lg:gap-4">
          <div className="flex items-center justify-between lg:gap-4">
            <Link href="/">
              <Image
                src={tedx}
                alt="TEDxNortheasternU Logo"
                className="h-auto max-w-full -ml-3.5 w-80"
              />
            </Link>

            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium align-middle transition-all bg-white border rounded-lg shadow-sm text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
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
              'mt-2 shadow-md lg:mt-0 rounded-lg border border-slate-200 p-4 lg:p-0 flex flex-col lg:flex-row lg:justify-between overflow-hidden transition-all duration-300 basis-full grow lg:border-transparent lg:shadow-none lg:gap-4 lg:flex',
              open ? '' : 'hidden',
            )}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/apply">Apply</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              {process.env.NODE_ENV === 'development' ? (
                <NavLink target="_blank" href="/studio">
                  Studio
                </NavLink>
              ) : null}
            </div>

            <hr
              className={cn(
                'h-px my-4 bg-slate-200 border-0 dark:bg-slate-700 lg:hidden',
              )}
            />

            <div className="flex items-center space-x-4">
              <NavLink href="/apply">{"We're Recruiting!"}</NavLink>
              <Link
                href="https://airtable.com/appD8TuOcD3E8n7BG/shr8Dc6qKWXq7Ns5T"
                className="inline-flex items-center gap-2 px-4 py-2 font-bold text-white transition-colors bg-red-600 rounded-full w-max hover:bg-red-700"
              >
                Nominate a Speaker <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
