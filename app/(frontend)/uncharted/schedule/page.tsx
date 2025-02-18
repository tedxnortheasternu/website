import { ArrowRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Schedule',
}

export default function RenaissanceSpeakers() {
  return (
    <div className="w-full p-6 font-serif border-y xl:border xl:rounded-md md:p-12 border-[#] bg-[#748cab]/15">
      <div className="max-w-2xl mx-auto mb-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-center md:text-3xl text-[#1d2d44]">
            Schedule
          </h1>
          <p className="mt-2 text-center text-slate-600">
            Join us on February 22, 2025.
          </p>
        </div>

        <div className="p-8 rounded-md bg-[#748cab]">
          <h2 className="mb-4 text-3xl font-bold text-[#1d2d44]">
            Session 1
          </h2>

          <div className="space-y-4 text-[#1d2d44]">
            <div className="grid grid-cols-[100px_1fr] gap-2 md:gap-4">
              <time className="text-3xl font-renaissance">10:15am</time>
              <p className="text-lg font-bold">
                Registration Opens
                <br />
                Coffee and Light Pastries
              </p>
            </div>

            <div className="grid grid-cols-[100px_1fr] items-center gap-2 md:gap-4">
              <time className="text-3xl font-renaissance">10:45am</time>
              <p className="text-lg font-bold">Doors Open</p>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-2 md:gap-4">
              <time className="text-3xl font-renaissance">11:15am</time>
              <div className="mt-1 space-y-4">
                <p className="text-lg font-bold">Opening Remarks</p>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    We Are Worth the Cost of Justice
                  </p>
                  <p className="!mb-0 leading-snug">Zara Northover</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    The Growth Blueprint: Neuroplasticity, Grit, and the Power of Change
                  </p>
                  <p className="!mb-0 leading-snug">Naomi Rajput</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Performance
                  </p>
                  <p className="!mb-0 leading-snug">NU Kaliente</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Lessons from the Psych Ward: The Importance of Vulnerability
                  </p>
                  <p className="!mb-0 leading-snug">Zara Poon</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-2 md:gap-4">
              <time className="text-3xl font-renaissance">12:45pm</time>
              <p className="text-lg font-bold">
                Intermission
                <br />
                xLabs (Interactive Exhibits)
                <br />
                Catered Lunch
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-md bg-[#1d2d44]">
          <h2 className="mb-8 text-3xl font-bold text-[#748cab]">
            Session 2
          </h2>

          <div className="space-y-4 text-[#748cab]">
            <div className="grid grid-cols-[100px_1fr] gap-2 md:gap-4">
              <time className="text-3xl font-renaissance">1:45pm</time>
              <div className="mt-1 space-y-4">
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Music Performance
                  </p>
                  <p className="!mb-0 leading-snug">NU Malhar</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Reimagining Justice: Changing Perspectives on the Prison System
                  </p>
                  <p className="!mb-0 leading-snug">Jarrett Lobb</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    The Revolution At Work That No One Noticed
                  </p>
                  <p className="!mb-0 leading-snug">Janine Holman</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Witnessing Violence in a Broken Conservation System
                  </p>
                  <p className="!mb-0 leading-snug">Brecker Ferguson</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-2 md:gap-4">
              <time className="text-3xl font-renaissance">3:30pm</time>
              <p className="text-lg font-bold">
                Closing Remarks
                <br />
                Sweet Treat
              </p>
            </div>
          </div>
        </div>

        {/* <Link
          href="/renaissance/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mx-auto mt-12 text-xl uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
        >
          Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
        </Link> */}
      </div>
    </div>
  )
}
