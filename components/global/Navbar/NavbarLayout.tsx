
import Link from 'next/link';
//import Image from 'next/image';
import { resolveHref } from 'lib/sanity.links';
import tedxImage from '../../images/tedxnortheasternu.png';
import Logo from "./Logo";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white p-4 top-0, left-0, right-0, z-10 w-full fixed">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0 ">
    <div className="flex items-center space-x-4"> {/* Left-hand links */}
      <Link href={resolveHref('home')}>
        <Logo />
      </Link>
      <Link href={resolveHref('home')}>
        <div className="text-black hover:underline">About</div>
      </Link>
      <Link href={resolveHref('project', 'tedx')}>
        <div className="text-black hover:underline">Past Events</div>
      </Link>
      <Link href={resolveHref('project', 'tedx')}>
        <div className="text-black hover:underline">Contact</div>
      </Link>
    </div>
        <div className="flex items-center space-x-4"> {/* Right-hand links */}
      <Link href={resolveHref('project', 'tedx')}>
        <div className="block py-2 pl-3 pr-4 text-red-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-2 md:dark:hover:bg-transparent">
          We are Recruiting!
        </div>
      </Link>
      <Link href={resolveHref('project', 'tedx')}>
        <div className="block py-6 pl-6 pr-6 rounded-full bg-red-500 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-2 dark:text-white md:dark:hover:text-red-500 md:dark:hover:bg-transparent hover:underline">
          Nominate Speaker
        </div>
      </Link>
    </div>
    </div>
  </nav>
  );
};

export default NavBar;




















