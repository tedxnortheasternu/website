import Image from 'next/image'
import Link from 'next/link'
import type { SimpleIcon } from 'simple-icons'

export default function FooterLayout() {
  return (
    <>
      <footer className="px-4 py-5 mx-auto mt-8 text-black rounded-lg max-w-screen-2xl md:px-8 bg-slate-100">
        <div className="justify-between gap-6 md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              <p className="mt-2 text-sm leading-relaxed">
                TEDxNortheasternU is a student-run organization that brings
                together the global Northeastern University community.
              </p>
            </div>
          </div>
          <div className="items-center justify-between flex-1 mt-10 ml-20 space-y-6 sm:flex md:space-y-0 md:mt-0">
            <ul className="px-5 space-y-4">
              <h4 className="text-sm font-bold text-red-600">ABOUT</h4>
              <Link
                href="/about"
                className="text-sm text-black hover:text-gray-600 hover:underline"
              >
                Overview
              </Link>
              <br />
              <Link
                href="/team"
                className="text-sm text-black hover:text-gray-600 hover:underline"
              >
                Members
              </Link>
              <br />
              <Link
                href="/teams"
                className="text-sm text-black hover:text-gray-600 hover:underline"
              >
                Teams
              </Link>
            </ul>
            <ul className="px-5 space-y-4">
              <h4 className="text-sm font-bold text-red-600">JOIN</h4>
              <Link
                href="/apply"
                className="text-sm text-black hover:text-gray-600 hover:underline"
              >
                Open Positions
              </Link>
              <br />
              <Link
                href="https://airtable.com/appD8TuOcD3E8n7BG/shr8Dc6qKWXq7Ns5T"
                className="text-sm text-black hover:text-gray-600 hover:underline "
              >
                Speaker Nominations
              </Link>
              <br />
            </ul>
            <ul className="px-5 space-y-4">
              <h4 className="text-sm font-bold text-red-600">ENGAGE</h4>
              <Link
                href="/events"
                className="text-sm text-black hover:text-gray-600 hover:underline"
              >
                Events
              </Link>
              <br />
              <Link
                href="/contact"
                className="text-sm text-black hover:text-gray-600 hover:underline"
              >
                Contact Us
              </Link>
              <br />
            </ul>
          </div>
        </div>
        <div className="items-center justify-between py-6 border-t mt-9 sm:flex">
          <div className="mt-4 sm:mt-0">
            © TEDxNortheasternU · All Rights Reserved
          </div>
          <div className="mt-6 ml-12 sm:mt-0">
            <ul className="flex items-center justify-center space-x-4">
              <Link
                href="https://www.instagram.com/tedxnortheastern?igsh=dmUzbjBtbjN5Zmg4"
                className="flex items-center justify-center rounded-full"
              >
                <Image
                  height="20"
                  width="20"
                  src="https://unpkg.com/simple-icons@v11/icons/instagram.svg"
                  alt="image"
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCsIbfqVPKzLTuuqeEY5sMHA"
                className="flex items-center justify-center rounded-full"
              >
                <Image
                  height="20"
                  width="20"
                  src="https://unpkg.com/simple-icons@v11/icons/youtube.svg"
                  alt="image"
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@tedxnortheastern?_t=8iquqwvq8Hy&_r=1"
                className="flex items-center justify-center rounded-full"
              >
                <Image
                  height="20"
                  width="20"
                  src="https://unpkg.com/simple-icons@v11/icons/tiktok.svg"
                  alt="image"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/tedxneu"
                className="flex items-center justify-center rounded-full"
              >
                <Image
                  height="20"
                  width="20"
                  src="https://unpkg.com/simple-icons@v11/icons/linkedin.svg"
                  alt="image"
                />
              </Link>
              <Link
                href="https://x.com/tedxneu?s=21&t=LO_m6KDBjbKkf3Q81TfHVA"
                className="flex items-center justify-center rounded-full"
              >
                <Image
                  height="20"
                  width="20"
                  src="https://unpkg.com/simple-icons@v11/icons/x.svg"
                  alt="image"
                />
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
