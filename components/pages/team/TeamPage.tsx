import type { TeamPayload } from '@/types'

export interface TeamPageProps {
  data: TeamPayload | null
}

export function TeamPage({ data }: TeamPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { name, description } = data ?? {}

  return (
    <>
      <div className="mb-20 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="mx-auto mt-4 text-3xl font-extrabold md:text-5xl">
            {name}
          </h1>
        </div>

        <div className="border rounded-md">
          <p>{description}</p>

          <div className="grid grid-cols-1 p-3 space-y-4 lg:p-4"></div>
        </div>
      </div>
    </>
  )
}

export default TeamPage
