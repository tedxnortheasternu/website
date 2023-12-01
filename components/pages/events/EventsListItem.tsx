import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { UpcomingEvents } from 'types'

interface ProjectProps {
  project: UpcomingEvents
  odd: number
}

export function EventsListItem(props: ProjectProps) {
  const { project, odd } = props

  return (
    <div
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-b border-t xl:flex-row-reverse'
      }`}
    >
      <div className="w-full xl:w-9/12"></div>
      <div className="flex xl:w-1/4">
        <TextBox project={project} />
      </div>
    </div>
  )
}

function TextBox({ project }: { project: UpcomingEvents }) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {project.title}
        </div>
        {/* Overview  */}
        <div className="font-serif text-gray-500">{project.description}</div>
      </div>
      {/* Tags */}
      <div className="mt-4 flex flex-row gap-x-2">{project.title}</div>
    </div>
  )
}
