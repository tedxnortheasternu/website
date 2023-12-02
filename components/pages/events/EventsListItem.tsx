import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { UpcomingEventPayload } from 'types'

interface EventProps {
  event: UpcomingEventPayload
  odd: number
}

export function EventsListItem(props: EventProps) {
  const { event, odd } = props

  return (
    <div
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-b border-t xl:flex-row-reverse'
      }`}
    >
      <div className="w-full xl:w-9/12"></div>
      <div className="flex xl:w-1/4">
        <TextBox event={event} />
      </div>
    </div>
  )
}

function TextBox({ event }: { event: UpcomingEventPayload }) {
  return (
    <div className="relative flex flex-col justify-between w-full p-3 mt-2 xl:mt-0">
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {event.name}
        </div>
        {/* Overview  */}
        {event.briefDescription ? (
          <div className="font-serif text-gray-500">
            {event.briefDescription}
            {/* <CustomPortableText value={event.briefDescription} /> */}
          </div>
        ) : null}
      </div>
      {/* Tags */}
      <div className="flex flex-row mt-4 gap-x-2">
        {event.category ? event.category.name : null}
      </div>
    </div>
  )
}
