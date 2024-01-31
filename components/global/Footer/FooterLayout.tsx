import {
  SiInstagram,
  SiLinkedin,
  SiTiktok,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default function FooterLayout() {

  // THIS IS THE EMAIL LIST SECTION
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(/* API ENDPOINT */'/api/subscribe', { email });
      console.log(response.data);

      // SUCCESS !
      // you need to add a popup for success here
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error.response?.data);
      // ERROR !
    }
  };

  

  const year = new Date().getFullYear().toString()

  return (
    <footer className="w-full max-w-screen-xl p-8 mx-auto mt-8 text-black md:mb-8 xl:rounded-md md:px-8 bg-slate-50">
      <div className="justify-between gap-6 md:flex">
        <div className="flex-1 max-w-xs">
          <p className="text-sm leading-relaxed">
            TEDxNortheasternU is a student-run organization that brings together
            the global Northeastern University community.
          </p>
        </div>

        <div className="flex flex-col mt-8 space-y-6 md:space-x-6 md:space-y-0 md:mt-0 md:flex-row">
          <div>
            <h4 className="text-sm font-bold text-red-600">ABOUT</h4>
            <ul>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-black hover:text-gray-600 hover:underline"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-sm text-black hover:text-gray-600 hover:underline"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-sm text-black hover:text-gray-600 hover:underline"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-red-600">JOIN</h4>
            <ul>
              <li>
                <Link
                  href="/apply"
                  className="text-sm text-black hover:text-gray-600 hover:underline"
                >
                  Open Positions
                </Link>
              </li>
              <li>
                <Link
                  href="https://airtable.com/appD8TuOcD3E8n7BG/shr8Dc6qKWXq7Ns5T"
                  className="text-sm text-black hover:text-gray-600 hover:underline "
                >
                  Speaker Nominations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-red-600">ENGAGE</h4>
            <ul>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-black hover:text-gray-600 hover:underline"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-black hover:text-gray-600 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-6 border-t md:flex-row">
        <p>&copy; {year} TEDxNortheasternU · All Rights Reserved</p>

        <div className="sm:mt-0">
          <ul className="flex items-center justify-center">
            <SocialIcon
              href="ttps://www.instagram.com/tedxnortheastern"
              icon={SiInstagram}
            />
            <SocialIcon
              href="https://www.youtube.com/channel/@tedxnortheasternu"
              icon={SiYoutube}
            />
            <SocialIcon
              href="https://www.tiktok.com/@tedxnortheastern"
              icon={SiTiktok}
            />
            <SocialIcon
              href="https://www.linkedin.com/company/tedxneu"
              icon={SiLinkedin}
            />
            <SocialIcon href="https://x.com/tedxneu" icon={SiX} />
          </ul>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center p-2 transition-colors rounded-md hover:bg-slate-200"
    >
      <Icon size={20} />
    </Link>
  )
}



// Add a Footer Icon
