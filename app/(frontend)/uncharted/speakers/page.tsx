import { ArrowRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import zaranorthover from '@/components/images/uncharted/Zara-Northover2025.png'
import naomiPhoto from '@/components/images/uncharted/Naomi-Rajput.png'
import poonPhoto from '@/components/images/uncharted/Zara-Poon.png'
import jarrettPhoto from '@/components/images/uncharted/Jarrett-Lobb.png'
import janinePhoto from '@/components/images/uncharted/Janine-Hamner-Holman.png'
import breckerPhoto from '@/components/images/uncharted/Brecker-Ferguson.png'
import { cn } from '@/lib/utils'

type Speaker = {
  photo: StaticImageData
  name: string
  pronouns: string
  title: string
  headline: string
  bio: string
}

const speakers: Speaker[] = [
  {
    photo: zaranorthover,
    name: 'Zara Northover',
    pronouns: 'she/her',
    title: 'We Are Worth the Cost of Justice',
    headline: 'Olympian, Industry Leader, Advocate for Justice',
    bio: ' is a trailblazing Olympian, industry leader, and CEO of Moving in Faith, a global empowerment brand. Representing Jamaica in the shot put at the 2008 Beijing Olympics, she made history as Northeastern University’s first female Olympian and was inducted into its Hall of Fame in 2014. After transitioning from athletics, Zara excelled in the corporate world, driving $40 million in sales as a Purchase Banker within a year, surpassing occupancy goals as a Property Manager. As a Product Manager of Strategy and Innovation, she created initiatives that advanced employee diversity, growth, and organizational success. Currently, she leads Business Development for a Detroit-based architectural firm known for curating extraordinary spaces across the nation. As a sought-after speaker, advocate, and author preparing to release her book, The Cost of Justice, Zara’s journey inspires others to break barriers, lead with faith, and achieve greatness with resilience and courage.',
  },
  {
    photo: naomiPhoto,
    name: 'Naomi Rajput',
    pronouns: 'she/her',
    title: 'The Growth Blueprint: Neuroplasticity, Grit, and the Power of Change',
    headline: 'Advancing Neuroscience, DEI, and Community Impact Through Research and Leadership',
    bio: " is a dedicated researcher, visionary entrepreneur, and champion of Diversity, Equity, and Inclusion, with a strong focus on healthcare and neuroscience. Her work spans pediatric research, addressing early speech intervention, infant-mother relationships, and digital health, while also collaborating with startups to innovate and validate groundbreaking healthcare solutions. A dynamic leader, Naomi empowers underrepresented communities, particularly Asian Americans and women, by merging her academic expertise with impactful advocacy initiatives. As a talented musician, she has performed over 40 shows across Massachusetts, seamlessly blending Indian Classical and Western music. Naomi exemplifies determination, innovation, and a relentless commitment to advancing research, entrepreneurship, and the arts.",
  },
  {
    photo: poonPhoto,
    name: 'Zara Poon',
    pronouns: 'she/her',
    title: 'Lessons from the Psych Ward: The Importance of Vulnerability',
    headline: 'Bridging Bioengineering, Neuroscience, and Mental Health Advocacy',
    bio: ' is a fourth-year undergraduate student at Northeastern University majoring in Bioengineering and Biochemistry. Originally from Berkeley Heights, New Jersey, Zara draws from her personal experiences to explore themes of resilience, self-compassion, and recovery. In her TEDx talk, she opens up about her journey with an eating disorder, providing a candid look into the challenges of recovery and the importance of addressing mental health with empathy. Through her story, Zara hopes to inspire others to embrace vulnerability and navigate life\'s struggles with courage and understanding.',
  },
  {
    photo: jarrettPhoto,
    name: 'Jarrett Lobb',
    pronouns: 'he/him',
    title: 'Reimagining Justice: Changing Perspectives on the Prison System',
    headline: 'Future Legal Advocate Driving Reform, Policy Research, and Community Impact',
    bio: " is a second-year undergraduate at Northeastern University, pursuing a combined major in mathematics and political science with a concentration in law and legal studies. Jarrett developed an intense interest in the US criminal justice system after a transformative summer volunteering experience at the Haley House Soup Kitchen. By sharing powerful stories from his internship, Jarrett highlights the damage caused by a justice system intended to re-build. Outside of academics, Jarett is actively involved in the Northeastern Debate Society and the Student Alliance for Prison Reform. Some of his favorite hobbies include rock climbing, skateboarding, and spending time with his three pups\!",
  },
  {
    photo: janinePhoto,
    name: 'Janine Hamner Holman',
    pronouns: 'she/her',
    title: 'The Revolution At Work That No One Noticed',
    headline: 'Champion for Workplace Excellence, Growth, and Inclusive Leadership',
    bio: ' brings over 30 years of experience helping organizations and leaders thrive. As the CEO of J&J Consulting Group, she specializes in leadership development, team performance, and creating workplace cultures where people want to stay and succeed. Janine has worked with Fortune 200 companies, nonprofits, and public sector organizations, blending practical strategies with cutting-edge insights to drive real results. She’s also the host of The Cost of Not Paying Attention podcast and the author of Mind the Gap: A Thought Leader’s Guide to 21st Century Leadership. Her work is about making workplaces better for everyone.',
  },
  {
    photo: breckerPhoto,
    name: 'Brecker Ferguson',
    pronouns: 'he/him',
    title: 'Witnessing Violence in a Broken Conservation System',
    headline: 'A Global Advocate for Sustainability, Business Innovation, and Leadership',
    bio: ' is a sustainability scholar graduating from Northeastern University this spring. His research focuses on the intersections of the environment, society, and economics worldwide. He has worked as a nonprofit consultant, a conservation researcher in South Africa, a nonprofit program director in South Africa, and in business development for a climate tech startup. Brecker loves to travel and learn about places near and far. In his free time, Brecker plays the cello and writes, and he expects to publish a memoir later in 2025.',
  }
]

export const metadata: Metadata = {
  title: 'Speakers',
}

export default function RenaissanceSpeakers() {
  return (
    <div className="w-full p-6 font-serif border-y xl:border xl:rounded-md md:p-12 border-renaissance-light bg-[#748cab]/25">
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-2xl font-bold text-center md:text-3xl text-renaissance-dark">
          Meet Our Speakers!
        </h1>
      </div>

      <div className="max-w-2xl mx-auto space-y-12 md:space-y-24">
        {speakers.map((s, i) => (
          <div key={i} className="renaissance-speaker">
            <div className="grid gap-2 md:grid-cols-2">
              <Image
                src={s.photo}
                alt={`Portrait of ${s.name}`}
                className="w-[50%] md:w-full h-auto max-w-full rounded-md aspect-square [grid-area:speaker-photo]"
              />

              <div
                className={cn(
                  'flex flex-col justify-end px-6 py-8 md:p-8 rounded-md [grid-area:speaker-info] bg-[#1d2d44]'
                )}
              >
                <h2
                  className={cn(
                    'pt-6 text-1xl whitespace-wrap text-left font-bold text-[#748cab]'
                  )}
                >
                  {s.title}
                </h2>
                {/* <p
                  className={cn(
                    'text-xl leading-none font-renaissance',
                    i < 4
                      ? 'text-[#748cab]/85'
                      : 'text-[#1d2d44]/85',
                  )}
                >
                  {s.headline}
                </p> */}
                <h3
                  className={cn(
                    'mt-7 text-3xl whitespace-normal text-[#748cab]'
                  )}
                >
                  <span className="font-bold">{s.name}</span><br />
                  <span className="mt-2 text-2xl whitespace-nowrap">{s.pronouns}</span>
                </h3>
                <p
                  className={cn(
                    'text-xl leading-none font-renaissance pt-4 text-[#748cab]/85'
                  )}
                >
                  {s.headline}
                </p>
              </div>
            </div>
            <p className="p-6 mt-2 leading-7 rounded-md md:p-8 text-pretty bg-[#748cab]/25">
              <b className="text-[#1d2d44] ">{s.name}</b>
              {s.bio}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="max-w-2xl mx-auto">
        <Link
          href="/renaissance/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mt-12 text-xl uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
        >
          Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
        </Link>
      </div> */}
    </div>
  )
}