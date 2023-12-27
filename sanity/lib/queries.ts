import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
    "upcomingEvents": *[_type == "event" && dateTime(endDateTime) > dateTime(now())] {
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
    } | order(startDateTime desc),
    "sponsors": *[_type == "sponsor" ] {
      name,
      logo,
      description,
      websiteLink,
    } | order(name asc)
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

export const teamsQuery = groq`
  *[_type == "team"] {
    name,
    "slug": slug.current,
    description,
  } | order(name asc)
`

export const sponsorsQuery = groq`
  *[_type == "sponsor" ] {
    name,
    logo,
    description,
    websiteLink,
  } | order(name asc)
`

export const applyPageQuery = groq`
  *[_type == "position" && acceptingApplications] {
    name,
    // "slug": slug.current,
    team-> {
      name
    },
    campuses[]->{
      name
    },
    expectedHoursPerWeek {
      min,
      max
    },
    description,
    responsibilities,
    requirements
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

export const teamPaths = groq`
  *[_type == "team" && slug.current != null].slug.current
`

export const teamBySlugQuery = groq`
  *[_type == "team" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    description,
  }
`

export const memberQuery = groq`
  *[_type == "member"] {
    name,
    image,
    major,
    hometown,
    goToIceCream,
    team-> {
      name,
    },
    campus-> {
      name,
    },
  } | order(name asc, team asc)
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
