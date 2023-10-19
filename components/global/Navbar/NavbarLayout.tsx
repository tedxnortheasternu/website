//import Image from 'next/image';
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'

import tedxImage from '../../images/tedxnortheasternu.png'
import Logo from './Logo'

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white p-4 top-0, left-0, right-0, z-10 w-full fixed">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-0 mx-auto ">
        <div className="flex items-center space-x-4">
          {' '}
          {/* Left-hand links */}
          <Link href={resolveHref('home')}>
            <Logo />
          </Link>
          <Link href="/about">
            <div className="text-black hover:underline">About</div>
          </Link>
          <Link href={resolveHref('project', 'tedx')}>
            <div className="text-black hover:underline">Past Events</div>
          </Link>
          <Link href={resolveHref('project', 'tedx')}>
            <div className="text-black hover:underline">Contact</div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {' '}
          {/* Right-hand links */}
          <Link href={resolveHref('project', 'tedx')}>
            <div className="block px-4 py-1 text-red-500 hover:bg-transparent hover:text-red-700 hover:underline">
              We are Recruiting!
            </div>
          </Link>
          <Link href={resolveHref('project', 'tedx')}>
            <div className="block px-4 py-1 text-white bg-red-500 rounded-full hover:bg-transparent hover:text-red-700 dark:text-white hover:underline">
              Nominate Speaker
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
