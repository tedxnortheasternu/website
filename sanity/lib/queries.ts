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
      endDateTime,
      location,
      category-> {
        _id,
        name,
      }
    } | order(startDateTime asc),
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
    endDateTime,
    location,
    category-> {
      _id,
      name,
    }
  } | order(startDateTime asc)
`

export const teamsQuery = groq`
  *[_type == "team"] {
    name,
    "slug": slug.current,
    description,
    priorityRank,
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
    _id,
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
    priorityRank,
  } | order(name asc)
`

export const positionByIdQuery = groq`
  *[_type == "position" && _id == $slug][0] {
    name,
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
    requirements,
    priorityRank,
    acceptingApplications
  }
`

export const newsPageQuery = groq`
  *[_type == "article" && showArticle] {
    _id,
    title,
    authors,
    description,
    content,
    postDateTime,
    linkToArticle,
    articleType,
    semesterPosted,
    readMoreButtonColor,
    articlePhoto,
    titleColor,
  } | order(postDateTime desc)
`

export const articleByIdQuery = groq`
  *[_type == "article"]{
    _id,
    title,
    // "slug": slug.current,
    authors,
    description,
    articlePhoto,
    content,
    postDateTime,
    linkToArticle,
    articleType,
    semesterPosted,
    readMoreButtonColor,
    showArticle,
    titleColor,
  } 
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
    endDateTime,
    location,
    category-> {
      _id,
      name,
    }
  }
`

// Index list. `published != false` keeps legacy documents (field missing,
// so `null != false` is true) visible and hides new ones until the toggle is
// flipped. The `defined(...)` guards keep half-entered documents out.
export const pastEventsQuery = groq`
  *[_type == "pastEvent" && defined(slug.current) && defined(eventYear) && published != false] | order(eventYear desc) {
    _id,
    title,
    theme,
    "slug": slug.current,
    eventYear,
    eventDate,
    briefDescription,
    coverGraphic
  }
`

// Detail page. Deliberately does NOT filter on `published`: the unlisted
// URL is how an entry is reviewed before it goes on the index page.
export const pastEventBySlugQuery = groq`
  *[_type == "pastEvent" && eventYear == $year && slug.current == $slug][0] {
    _id,
    title,
    theme,
    "slug": slug.current,
    eventYear,
    eventDate,
    published,
    tagline,
    briefDescription,
    overview,
    coverGraphic,
    logo,
    campus-> {
      name
    },
    location,
    recapVideoUrl,
    talksPlaylistUrl,
    flickrUrl,
    programUrl,
    "talks": coalesce(talks[] {
      _key,
      title,
      description,
      videoUrl,
      speaker-> {
        _id,
        name,
        "slug": slug.current,
        pronouns,
        headline,
        affiliation,
        bio,
        photo,
        linkedin,
        website
      }
    }, []),
    "performers": coalesce(performers[]-> {
      _id,
      name,
      description,
      image,
      websiteUrl,
      kind
    }, []),
    "schedule": coalesce(schedule[] {
      _key,
      title,
      "items": coalesce(items[] {
        _key,
        time,
        itemType,
        speaker-> {
          _id,
          name
        },
        performer-> {
          _id,
          name
        },
        label,
        note
      }, [])
    }, []),
    "gallery": coalesce(gallery, []),
    "sponsors": coalesce(sponsors[]-> {
      name,
      logo,
      description,
      websiteLink
    }, [])
  }
`

// `{year, slug}` pairs for the `[year]/[slug]` route. Same guards as the
// index list, so unpublished entries are rendered on demand, not prerendered.
export const pastEventPaths = groq`
  *[_type == "pastEvent" && defined(slug.current) && defined(eventYear) && published != false] {
    "year": string(eventYear),
    "slug": slug.current
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

export const teamsPageQuery = groq`
  *[_type == "team"] {
    name,
    "slug": slug.current,
    description,
    priorityRank,
  } | order(name asc)
`

export const aboutPageQuery = groq`
  {
    "leaders": *[_type == "member" && position->isLeadership] {
      _id,
      name,
      "positionName": position->name,
      position->{
        name,
      },
      image,
    } | order(positionName asc),
    "campusesCount": count(*[_type == "campus"]),
    "teamsCount": count(*[_type == "team"]),
    "membersCount": count(*[_type == "member"])
  }
`

export const membersPageQuery = groq`
  {
    "teams": *[_type == "team"] {
      name,
      "slug": slug.current,
      description,
      priorityRank,
    } | order(name asc),
    "members": *[_type == "member"] {
      name,
      position->{
        name,
        team->{
          "slug": slug.current,
        },
        priorityRank,
      },
      image,
      major,
      hometown,
      goToIceCream,
      team->{
        "slug": slug.current,
      },
      campus->{
        name,
      },
    } | order(name asc, team asc)
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
