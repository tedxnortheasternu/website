'use client'

import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export default function NavLink({
  href,
  target,
  variant = 'default',
  active,
  children,
}: {
  href: Url
  target?: HTMLAttributeAnchorTarget
  variant?: 'renaissance' | 'default'
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
          ? variant === 'renaissance'
            ? 'text-red-500 hover:text-red-400'
            : 'text-red-600 hover:text-red-700'
          : variant === 'renaissance'
            ? 'text-slate-300 hover:text-slate-200'
            : 'text-slate-600 hover:text-slate-700',
      )}
      href={href}
    >
      {variant === 'renaissance'
        ? active
          ? `> ${children}`
          : children
        : children}
    </Link>
  )
}
