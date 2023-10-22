'use client'

import { cn } from 'lib/utils'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function NavLink({
  href,
  active,
  children,
}: {
  href: Url
  active?: boolean
  children: ReactNode
}) {
  const pathname = usePathname()
  if (active === undefined) {
    active = pathname === href
  }

  return (
    <Link
      className={cn(
        'font-medium hover:underline whitespace-nowrap',
        active
          ? 'text-red-600 hover:text-red-700'
          : 'text-gray-600 hover:text-gray-700',
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
