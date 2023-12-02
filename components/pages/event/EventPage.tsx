import ImageBox from 'components/shared/ImageBox'
import type { UpcomingEventPayload } from 'types'

export interface EventPageProps {
  data: UpcomingEventPayload | null
}

export function EventPage({ data }: EventPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { name, briefDescription, coverGraphic, campuses, startDateTime } =
    data ?? {}

  return (
    <div>
      <div className="mb-20 space-y-6">
        {/* Header */}
        <div className="mx-auto text-3xl font-extrabold tracking-tight text-center md:text-5xl">
          {name}
        </div>

        <div className="border rounded-md">
          {/* Image  */}
          <ImageBox
            image={coverGraphic}
            alt={`Cover image for ${name}`}
            classesWrapper="relative aspect-[16/9]"
          />

          <div className="grid grid-cols-1 divide-y divide-inherit lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {/* Tags */}
            <div className="p-3 lg:p-4">
              <div className="text-xs md:text-sm">Campuses</div>
              <div className="flex flex-row flex-wrap text-md md:text-lg">
                {campuses?.map((campus, key) => (
                  <div key={key} className="mr-1 break-words ">
                    {campus.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-3xl font-serif text-xl text-slate-600">
          {briefDescription}
        </p>
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}

export default EventPage
