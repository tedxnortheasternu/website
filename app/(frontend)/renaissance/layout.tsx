import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import NavLink from '@/components/global/Navbar/NavLink'
import { RenaissanceNavbar } from '@/components/global/renaissance/RenaissanceNavbar'
import renaissanceLogo from '@/components/images/renaissance.png'
import { SponsorListItem } from '@/components/shared/sponsor/SponsorListItem'
import { cn } from '@/lib/utils'
import { loadSponsors } from '@/sanity/loader/loadQuery'
import { SponsorPayload } from '@/types'

export const metadata: Metadata = {
  title: {
    template: `%s | TEDxNortheasternU: Renaissance`,
    default: 'TEDxNortheasternU: Renaissance',
  },
  openGraph: {
    images: ['/renaissance-og.png'],
  },
}

export interface SponsorListProps {
  data: SponsorPayload[] | null
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const initial = await loadSponsors()
  const data = initial.data

  return (
    <>
      <RenaissanceNavbar />
      <main className="w-full max-w-screen-xl mx-auto xl:mt-4">{children}</main>

      <footer>
        {data ? (
          <section className="max-w-screen-xl px-4 mx-auto lg:px-6">
            <h2 className="mb-6 text-4xl font-bold leading-tight">Sponsors</h2>

            <div className="grid items-center justify-center gap-2 p-4 border rounded-md lg:p-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-slate-200">
              {data.length > 0 ? (
                data.map((sponsor, key) => {
                  return <SponsorListItem key={key} sponsor={sponsor} />
                })
              ) : (
                <div className="col-span-3 p-4 text-center">
                  <p>
                    Are you interested in sponsoring us? We&lsquo;d love to
                    connect!
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700"
                  >
                    Contact Us <ArrowRightIcon size={16} />
                  </Link>
                </div>
              )}
            </div>
          </section>
        ) : null}
      </footer>
    </>
  )
}
