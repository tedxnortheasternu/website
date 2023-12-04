import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && dateTime(endDateTime) > dateTime(now())] {
    name,
    "slug": slug.current,
    briefDescription,
    coverGraphic,
    startDateTime,
    location,
    category-> {
      _id,
      name,
    }
  } | order(startDateTime desc)
`
export const sponrshipQuery = groq`
  *[_type == "sponsor" ] {
    name,
    logo,
    description,
    websiteLink,
  } | order(name asc)
`


export const eventPaths = groq`
  *[_type == "event" && slug.current != null].slug.current
`

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    briefDescription,
    coverGraphic,
    startDateTime,
    location,
    category-> {
      _id,
      name,
    }
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
