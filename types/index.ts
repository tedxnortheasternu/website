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

// TODO: finish
export interface Campus {
  name: string
}

// TODO: finish
export interface EventCategory {
  name: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
  upcomingEvents: UpcomingEventPayload[]
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

export interface SponsorPayload {
  name: string
  logo: Image
  description?: string
  websiteLink?: Url
}
