'use client'

import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

import tedx from '@/components/images/tedxnortheasternu.png'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

type NavLink = {
  title: string
  href: string
  description: string
}

const aboutLinks: NavLink[] = [
  {
    title: 'Overview',
    href: '/about',
    description: 'Learn about our background, reach, and impact.',
  },
  {
    title: 'Members',
    href: '/team',
    description: 'Meet the team who brings TEDxNortheasternU to life.',
  },
  {
    title: 'Teams',
    href: '/teams',
    description:
      'Explore our organizational structure and team responsibilities.',
  },
]

const joinLinks: NavLink[] = [
  {
    title: 'Open Positions',
    href: '/apply',
    description: 'Check out positions open to current Northeastern students.',
  },
  {
    title: 'Speaker Nominations',
    href: 'https://airtable.com/appD8TuOcD3E8n7BG/shr8Dc6qKWXq7Ns5T',
    description: "Nominate a speaker, whether it's yourself or someone else.",
  },
  {
    title: 'Events',
    href: '/events',
    description: 'Discover our upcoming events and how you can take part!',
  },
]

const renaissanceLinks: NavLink[] = [
  {
    title: 'Overview',
    href: '/renaissance',
    description:
      'Discover the story behind our theme and how you can take part.',
  },
  {
    title: 'Speakers',
    href: '/renaissance/speakers',
    description: 'Learn about the speakers who will be gracing our stage.',
  },
  {
    title: 'Performers',
    href: '/renaissance/performers',
    description: "Check out our event's performers.",
  },
]

export default function NavbarLayout() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full py-4 text-sm bg-white">
      <nav className="w-full max-w-screen-xl px-4 mx-auto lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
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
            'mt-2 shadow-md lg:mt-0 rounded-lg border border-slate-200 p-4 lg:p-0 flex flex-col lg:flex-row lg:justify-between transition-all duration-300 basis-full grow lg:border-transparent lg:shadow-none lg:gap-4 lg:flex',
            open ? '' : 'hidden',
          )}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 w-[350px] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <div className="flex flex-col justify-end w-full h-full p-5 no-underline rounded-md outline-none select-none bg-red-50 focus:shadow-md">
                        <div className="mt-4 mb-2 text-lg font-bold leading-tight text-red-600">
                          About Us
                        </div>
                        <p className="text-sm leading-tight">
                          We&lsquo;re a student-run organization that spreads
                          ideas from across Northeastern University.
                        </p>
                      </div>
                    </li>

                    {aboutLinks.map((l, key) => (
                      <ListItem key={key} href={l.href} title={l.title}>
                        {l.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Join</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 w-[350px] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <div className="flex flex-col justify-end w-full h-full p-5 no-underline rounded-md outline-none select-none bg-red-50 focus:shadow-md">
                        <div className="mt-4 mb-2 text-lg font-bold leading-tight text-red-600">
                          Join Us
                        </div>
                        <p className="text-sm leading-tight">
                          From speakers to teams behind the scenes, we offer a
                          wide range of opportunities.
                        </p>
                      </div>
                    </li>

                    {joinLinks.map((l, key) => (
                      <ListItem key={key} href={l.href} title={l.title}>
                        {l.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Renaissance</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 w-[350px] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <div className="flex flex-col justify-end w-full h-full p-5 no-underline rounded-md outline-none select-none bg-renaissance-light focus:shadow-md">
                        <div className="mt-4 mb-2 text-lg font-bold leading-tight text-renaissance-dark">
                          Attend Renaissance!
                        </div>
                        <p className="text-sm leading-tight">
                          Join us on February 24th to share ideas, spark
                          creativity, and inspire change across{' '}
                          {"Northeastern's"} global community.
                        </p>
                      </div>
                    </li>

                    {renaissanceLinks.map((l, key) => (
                      <ListItem key={key} href={l.href} title={l.title}>
                        {l.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/sponsor" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sponsor
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {process.env.NODE_ENV === 'development' ? (
                <NavigationMenuItem>
                  <Link href="/studio" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Studio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ) : null}
            </NavigationMenuList>
          </NavigationMenu>

          <hr
            className={cn(
              'h-px my-4 bg-slate-200 border-0 dark:bg-slate-700 lg:hidden',
            )}
          />

          <div className="flex items-center space-x-4">
            {/* <NavLink href="/apply">{"We're Recruiting!"}</NavLink> */}
            {/* <Link
              href="/renaissance/schedule"
              className="inline-flex items-center gap-2 px-4 py-2 font-bold text-white transition-colors rounded-full bg-renaissance-dark w-max hover:bg-renaissance-dark/85"
            >
              At Renaissance? View Schedule <ArrowRightIcon size={16} />
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50 group',
            className,
          )}
          {...props}
        >
          <div className="inline-flex items-center gap-1 text-sm font-medium leading-none">
            {title}
            <ArrowRightIcon className="w-4 h-4 transition-opacity opacity-0 group-hover:opacity-100 text-slate-400" />
          </div>
          <p className="text-sm leading-snug text-gray-800 line-clamp-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
