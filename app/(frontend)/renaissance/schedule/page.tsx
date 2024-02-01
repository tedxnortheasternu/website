import { ArrowRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Schedule',
}

export default function RenaissanceSpeakers() {
  return (
    <div className="w-full p-6 font-serif border-y xl:border xl:rounded-md md:p-12 border-renaissance-light bg-renaissance-light/15">
      <div className="max-w-2xl mx-auto mb-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-center md:text-3xl text-renaissance-dark">
            Schedule
          </h1>
          <p className="mt-2 text-center text-slate-600">
            Join us on February 24, 2024.
          </p>
        </div>

        <div className="p-8 rounded-md bg-renaissance-light">
          <h2 className="mb-4 text-3xl font-bold text-renaissance-dark">
            Session 1
          </h2>

          <div className="space-y-4 text-renaissance-dark">
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
                    Bridging Minds and Machines: Advancing AI Innovation through
                    Cognitive Science
                  </p>
                  <p className="!mb-0 leading-snug">Dr. Christie Chung</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Debate Like a Scientist
                  </p>
                  <p className="!mb-0 leading-snug">William Cutler</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Performance
                  </p>
                  <p className="!mb-0 leading-snug">TBA</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Measuring Success for Better Schools
                  </p>
                  <p className="!mb-0 leading-snug">Dr. Nicole Alioto</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Break the Silence: {'Let’s'} Talk About Grief
                  </p>
                  <p className="!mb-0 leading-snug">Cate Murphy</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[100px_1fr] items-center gap-2 md:gap-4">
              <time className="text-3xl font-renaissance">12:45pm</time>
              <p className="text-lg font-bold">
                Intermission, xLabs, and Lunch
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-md bg-renaissance-dark">
          <h2 className="mb-8 text-3xl font-bold text-renaissance-light">
            Session 2
          </h2>

          <div className="space-y-4 text-renaissance-light">
            <div className="grid grid-cols-[100px_1fr] gap-2 md:gap-4">
              <time className="text-3xl font-renaissance">1:45pm</time>
              <div className="mt-1 space-y-4">
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Music Performance
                  </p>
                  <p className="!mb-0 leading-snug">NU Sanskriti</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Variety of Voice: The Power of Authenticity
                  </p>
                  <p className="!mb-0 leading-snug">Leeyan Redwood</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    The Story of a 19-year-old High School Biology Teacher
                  </p>
                  <p className="!mb-0 leading-snug">Debpriya Das</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Social Media and Algorithmic Womanhood
                  </p>
                  <p className="!mb-0 leading-snug">Chloe Colipano</p>
                </div>
                <div>
                  <p className="!mb-0 text-lg font-bold leading-snug">
                    Pixels and Principles: Ethics of AI Art
                  </p>
                  <p className="!mb-0 leading-snug">Melody Liu</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[100px_1fr] items-center gap-2 md:gap-4">
              <time className="text-3xl font-renaissance">3:45pm</time>
              <p className="text-lg font-bold">Closing Remarks</p>
            </div>
          </div>
        </div>

        <Link
          href="/renaissance/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mx-auto mt-12 text-xl uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
        >
          Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
        </Link>
      </div>
    </div>
  )
}
