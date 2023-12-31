import ImageBox from '@/components/shared/ImageBox'
import type { MemberPayload, TeamPayload } from '@/types'

interface MembersListItemProps {
  team: TeamPayload
  members: MemberPayload[]
}

export function MembersListItem(props: MembersListItemProps) {
  const { team, members } = props

  if (members.length === 0) return null

  return (
    <div className="">
      {/* Title */}
      <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
        {team.name} Team
      </h3>

      {/* Team Description */}
      <p className="mt-2 tracking-tight">{team.description}</p>

      <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {/* Members */}
        {members.map((member, key) => (
          <div key={key} className="w-full border rounded-md border-slate-200">
            <ImageBox
              image={member.image}
              alt={member.name}
              imageClassName="object-contain object-center rounded-t-md aspect-square"
            />

            <div className="w-full p-4">
              <p className="text-xl font-semibold leading-tight text-red-700">
                {member.name}
              </p>

              {/* <span className="text-xs uppercase text-slate-600">Major</span> */}
              <p className="text-sm font-medium leading-tight">
                {member?.position?.name}
              </p>

              {member.major ? (
                <>
                  <span className="text-xs uppercase text-slate-600">
                    Major
                  </span>
                  <p className="text-sm font-medium leading-tight">
                    {member.major}
                  </p>
                </>
              ) : null}

              {member.hometown ? (
                <>
                  <span className="text-xs uppercase text-slate-600">
                    Hometown
                  </span>
                  <p className="text-sm font-medium leading-tight">
                    {member.hometown}
                  </p>
                </>
              ) : null}

              {member.goToIceCream ? (
                <>
                  <span className="text-xs uppercase text-slate-600">
                    Go-to Ice Cream
                  </span>
                  <p className="text-sm font-medium leading-tight">
                    {member.goToIceCream}
                  </p>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
