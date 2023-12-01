import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { EventsPagePayload } from 'types'

import { EventsListItem } from './EventsListItem'

export interface HomePageProps {
  data: EventsPagePayload | null
}

export function EventPage({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], upcomingEvents = [], title = '' } = data ?? {}

  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* Showcase projects */}
      {upcomingEvents && upcomingEvents.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {upcomingEvents.map((project, key) => {
            const href = resolveHref(project.date, project.title)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <EventsListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default EventPage
