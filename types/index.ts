import type { PortableTextBlock } from '@portabletext/types'
import { Url } from 'next/dist/shared/lib/router/router'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface Range {
  min?: number
  max?: number
}

export interface Campus {
  name: string
}

export interface Team {
  name: string
  priorityRank: number
}

export interface EventCategory {
  name: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
  upcomingEvents: UpcomingEventPayload[]
  sponsors: SponsorPayload[]
  teams: TeamPayload[]
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

export interface UpcomingEventPayload {
  name: string
  slug: string
  briefDescription?: string
  coverGraphic?: Image
  category?: EventCategory
  campuses: Campus[]
  startDateTime: string
  endDateTime: string
  location: string
}

// Past-event archive payloads. Hand-written to match the projections in
// `sanity/lib/queries.ts` (there is no typegen in this repo).

export interface SpeakerPayload {
  _id: string
  name: string
  slug: string
  pronouns?: string
  headline?: string
  affiliation?: string
  bio?: string
  photo: Image
  linkedin?: string
  website?: string
}

export interface TalkPayload {
  _key: string
  title: string
  description?: string
  videoUrl?: string
  speaker: SpeakerPayload | null
}

export interface PerformerPayload {
  _id: string
  name: string
  description?: string
  image?: Image
  websiteUrl?: string
  kind?: 'Dance' | 'Music' | 'Spoken Word' | 'Other'
}

export interface ScheduleItemPayload {
  _key: string
  time?: string
  itemType: 'talk' | 'performance' | 'break'
  // Only `_id` and `name` are projected: the talk title comes from joining
  // `speaker._id` against `PastEventPayload.talks`.
  speaker?: Pick<SpeakerPayload, '_id' | 'name'> | null
  performer?: Pick<PerformerPayload, '_id' | 'name'> | null
  label?: string
  note?: string
}

export interface ScheduleSessionPayload {
  _key: string
  title: string
  items: ScheduleItemPayload[]
}

export interface GalleryImagePayload extends Image {
  _key: string
  caption?: string
  credit?: string
}

export interface PastEventCardPayload {
  _id: string
  title: string
  theme: string
  slug: string
  eventYear: number
  eventDate: string
  briefDescription?: string
  coverGraphic: Image
}

export interface PastEventPayload extends PastEventCardPayload {
  published?: boolean
  tagline?: string
  overview?: PortableTextBlock[]
  logo?: Image
  campus?: Campus | null
  location?: string
  recapVideoUrl?: string
  talksPlaylistUrl?: string
  flickrUrl?: string
  programUrl?: string
  talks: TalkPayload[]
  performers: PerformerPayload[]
  schedule: ScheduleSessionPayload[]
  gallery: GalleryImagePayload[]
  sponsors: SponsorPayload[]
}

export interface SponsorPayload {
  name: string
  logo: Image
  description?: string
  websiteLink?: Url
}

export interface PositionPayload {
  _id: string
  name: string
  team: Team
  campuses: Campus[]
  expectedHoursPerWeek: Range
  description: string
  acceptingApplications: boolean
  responsibilities: PortableTextBlock[]
  requirements: PortableTextBlock[]
  priorityRank: number
}

export interface ArticlePayload {
  _id: string
  title: string
  authors: string[]
  description: string
  content: PortableTextBlock[]
  showArticle: boolean
  articlePhoto?: Image
  postDateTime: string
  linkToArticle: string
  articleType: string
  semesterPosted: string
  readMoreButtonColor: {
    hex: string
    alpha?: number
  }
  titleColor: {
    hex: string
    alpha?: number
  }
}

export interface TeamPayload {
  name: string
  slug: string
  description: string
  priorityRank: number
}

export interface MemberPayload {
  name: string
  position: {
    name: string
    team: {
      slug: string
    },
    priorityRank: number,
  }
  team: {
    slug: string
  }
  campuses: Campus
  image: Image
  major?: string
  hometown?: string
  goToIceCream?: string
}

export type TeamsPagePayload = TeamPayload[]

export interface AboutPagePayload {
  leaders: {
    _id: string
    name: string
    position: {
      name: string
    }
    image: Image
  }[]
  teamsCount: number
  campusesCount: number
  membersCount: number
}

export interface MembersPagePayload {
  teams: TeamPayload[]
  members: MemberPayload[]
}

