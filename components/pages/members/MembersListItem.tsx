import ImageBox from 'components/shared/ImageBox'
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

  return (
    <div className={`flex flex-col p-4 transition hover:bg-slate-50/50`}>
      <div className="grid gap-8 p-3 ">
        <div>
          {/* Tags */}
          <div className="flex flex-row items-center gap-1.5 mb-2 text-xs font-bold uppercase">
            <span className="text-slate-400">&middot;</span>
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
            {team.name}
          </h3>

          <div className="grid md:grid-cols-4">
            {/* Members */}
            {filteredMembers.map((member, key) => (
              <div key={key} className="flex flex-col items-center px-4">
                <div className="mb-2 w-36 h-36">
                  <ImageBox
                    image={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full mb-2 rounded-md"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p>
                    <span style={{ whiteSpace: 'nowrap' }}>
                      {member.hometown}
                    </span>
                    <br />
                    {member.goToIceCream}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
