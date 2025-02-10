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
    title: 'Speaker Applications',
    href: 'https://airtable.com/appqG2AJwajWIUmWp/shryuSMzpDKQriGbP',
    description: 'Apply to be a speaker at our annual flagship event',
  },
  // {
  //   title: 'Events',
  //   href: '/events',
  //   description: 'Discover our upcoming events and how you can take part!',
  // },
]

const eventLinks: NavLink[] = [
  {
    title: 'Current Events',
    href: '/uncharted',
    description: 'Discover our upcoming events and how you can take part!',
  },
  {
    title: 'Past Events',
    href: '/pastevents',
    description: 'Discover our past events and how you can take part!',
  },
]

const sponsorLinks: NavLink[] = [
  {
    title: 'Overview',
    href: '/sponsor',
    description: 'Learn about our sponsorship opportunities and benefits.',
  },
  {
    title: 'Donate',
    href: 'https://giving.northeastern.edu/live/profiles/966-club-tedxnortheasternu',
    description: 'Become a sponsor and support our mission.',
  },
]

const renaissanceLinks: NavLink[] = [
  {
    title: 'Overview',
    href: '/uncharted',
    description:
      'Discover the story behind our theme and how you can take part.',
  },
  // {
  //   title: 'Speakers',
  //   href: '/renaissance/speakers',
  //   description: 'Learn about the speakers who will be gracing our stage.',
  // },
  // {
  //   title: 'Performers',
  //   href: '/renaissance/performers',
  //   description: "Check out our event's performers.",
  // },
]

// const mediaLinks: NavLink[] = [
//   {
//     title: 'In The News',
//     href: '/inthenews',
//     description: 'Stay updated with our latest features, achievements, and news coverage.'
//   },
// ]

export default function NavbarLayout() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full py-4 text-sm bg-white">
      <nav className="w-full max-w-screen-xl px-4 mx-auto lg:flex lg:items-center lg:justify-between">
        {/* TEDxNortheasternU Logo Links */}
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

        {/* Navbar Subcategories */}
        <div
          className={cn(
            'mt-2 shadow-md lg:mt-0 rounded-lg border border-slate-200 p-4 lg:p-0 flex flex-col lg:flex-row lg:justify-between transition-all duration-300 basis-full grow lg:border-transparent lg:shadow-none lg:gap-4 lg:flex',
            open ? '' : 'hidden',
          )}
        >
          <NavigationMenu>
            <NavigationMenuList>
              {/* About Pages */}
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

                {/* Join Pages */}
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

              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Renaissance</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 w-[350px] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <div className="flex flex-col justify-end w-full h-full p-5 no-underline rounded-md outline-none select-none bg-[#748cab] focus:shadow-md">
                        <div className="mt-4 mb-2 text-lg font-bold leading-tight text-[#1d2d44]">
                          Relive Renaissance!
                        </div>
                        <p className="text-sm leading-tight">
                          On February 24th, our {"Northeastern's"} global
                          community came together to share ideas, spark
                          creativity, and inspire change across our school.
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
              </NavigationMenuItem> */}

              {/*while renaissance is closed*/}

              {/* <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}

              {/* Event Pages */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 w-[350px] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <div className="flex flex-col justify-end w-full h-full p-5 no-underline rounded-md outline-none select-none bg-red-50 focus:shadow-md">
                        <div className="mt-4 mb-2 text-lg font-bold leading-tight text-red-600">
                          Events
                        </div>
                        <p className="text-sm leading-tight">
                          Look at what what we have planned and what we have
                          done in the past.
                        </p>
                      </div>
                    </li>

                    {eventLinks.map((l, key) => (
                      <ListItem key={key} href={l.href} title={l.title}>
                        {l.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Sponsor Pages */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sponsor</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 w-[350px] p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <div className="flex flex-col justify-end w-full h-full p-5 no-underline rounded-md outline-none select-none bg-red-50 focus:shadow-md">
                        <div className="mt-4 mb-2 text-lg font-bold leading-tight text-red-600">
                          Sponsor
                        </div>
                        <p className="text-sm leading-tight">
                          Support the TEDxNortheasternU mission ideas change
                          everythign and become a sponsor.
                        </p>
                      </div>
                    </li>

                    {sponsorLinks.map((l, key) => (
                      <ListItem key={key} href={l.href} title={l.title}>
                        {l.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* In The News Pages */}
              <NavigationMenuItem>
                <Link href="/inTheNews" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              {/* Contact Pages */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
                
              {/* Studio Pages */}
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
            {/* <Link
              href="https://www.youtube.com/playlist?list=PLakUFMIqnYGtctgWhU_K4gKzYa2eMQ1bs"
              className="inline-flex items-center gap-2 px-4 py-2 font-bold text-white transition-colors rounded-full bg-renaissance-dark w-max hover:bg-renaissance-dark/85"
            >
              Watch Our Last Renaissance Talks <ArrowRightIcon size={16} />
            </Link> */}

            {/* <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-12 py-2 font-bold text-white transition-colors bg-red-800 rounded-full w-max hover:bg-red-800/85"
            >
              {"We're Recruiting!"}
            </Link> */}

            <Link
              href="/uncharted"
              className="inline-flex items-center gap-2 px-4 py-2 font-bold text-white transition-colors rounded-full bg-[#1d2d44] w-max hover:bg-[#1d2d44]/85"
            >
              Check Out Our Flagship <ArrowRightIcon size={16} />
            </Link>
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
