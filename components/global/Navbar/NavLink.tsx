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
        'whitespace-nowrap transition-colors',
        variant === 'renaissance'
          ? 'px-4 py-2 rounded-md text-xl'
          : 'hover:underline font-medium',
        active
          ? variant === 'renaissance'
            ? 'text-white hover:text-white bg-renaissance-light/15 hover:bg-renaissance-light/20'
            : 'text-red-600 hover:text-red-700'
          : variant === 'renaissance'
            ? 'text-renaissance-light hover:text-white hover:bg-renaissance-light/15'
            : 'text-slate-600 hover:text-slate-700',
      )}
      href={href}
    >
      {variant === 'renaissance' ? (active ? children : children) : children}
    </Link>
  )
}
