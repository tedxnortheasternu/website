'use client'

import { cn } from 'lib/utils'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

export default function NavLink({
  href,
  target,
  active,
  children,
}: {
  href: Url
  target?: HTMLAttributeAnchorTarget
  active?: boolean
  children: ReactNode
}) {
  const pathname = usePathname()
  if (active === undefined) {
    active = pathname === href
  }

  return (
    <Link
      target={target}
      className={cn(
        'font-medium hover:underline whitespace-nowrap',
        active
          ? 'text-red-600 hover:text-red-700'
          : 'text-slate-600 hover:text-slate-700',
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
