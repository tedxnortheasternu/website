'use client'

import { cn } from 'lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import tedx from '../../images/tedxnortheasternu.png'
import NavLink from './NavLink'

export default function NavbarLayout() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="z-50 flex flex-wrap w-full py-4 text-sm bg-white lg:justify-start lg:flex-nowrap">
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
                className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
                aria-controls="navbar-alignment"
                aria-label="Toggle navigation"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className={cn('w-4 h-4', open ? 'hidden' : 'block')}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className={cn('w-4 h-4', open ? 'block' : 'hidden')}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
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
              <NavLink href="/past-events">Past Events</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            <hr
              className={cn(
                'h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 lg:hidden',
              )}
            />

            <div className="flex items-center space-x-4">
              <NavLink href="/positions">{"We're Recruiting!"}</NavLink>
              <Link
                href="https://airtable.com/appD8TuOcD3E8n7BG/shr8Dc6qKWXq7Ns5T"
                className="inline-flex items-center gap-2 px-4 py-2 font-bold text-white transition-colors bg-red-700 rounded-full w-max hover:bg-red-800"
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
