import ImageBox from 'components/shared/ImageBox'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { MemberPayload, TeamsPayload } from 'types'

interface TeamsProps {
  team: TeamsPayload
  odd: number
  members: MemberPayload[] | null
}

export function MembersListItem(props: TeamsProps) {
  const { team, members } = props

  if (!members) return null
  const filteredMembers = members.filter(
    (member) => member.team.name === team.name,
  )

  const href = resolveHref('team', team.slug)
  if (!href) return null
  return (
    <div className={`flex flex-col p-4 transition hover:bg-slate-50/50`}>
      <div className="grid gap-8 p-3 ">
        <div>
          {/* Tags */}
          <div className="flex flex-row items-center gap-1.5 mb-2 text-xs font-bold uppercase">
            <span className="text-slate-400">&middot;</span>
          </div>

          {/* Title */}
          <Link href={href}>
            <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              {team.name}
            </h3>
          </Link>
          {/* Team Description */}
          <h4 className="mb-4 text-2xl tracking-tight md:text-2xl">
            {team.description}
          </h4>

          <div className="grid md:grid-cols-4">
            {/* Members */}
            {filteredMembers.map((member, key) => (
              <div
                key={key}
                className="relative flex flex-col items-center px-20 group"
              >
                <div className="relative mb-2 w-60 h-60">
                  <ImageBox
                    image={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full mb-2 rounded-md"
                  />
                  <div className="absolute top-0 left-0 invisible w-full h-full p-4 overflow-hidden transition-opacity duration-300 ease-in-out bg-white rounded-md shadow-md opacity-0 hover-info-box group-hover:opacity-100 group-hover:visible">
                    <h4 className="text-lg font-semibold text-center">
                      {member.name}
                    </h4>
                    <p className="overflow-hidden text-center whitespace-normal">
                      <span className="">{member.hometown}</span>
                      <br />
                      {member.goToIceCream}
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden text-center">
                  {/* Other information */}
                  {member.major}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
