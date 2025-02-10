import { ArrowRightIcon, ClockIcon,UserIcon } from 'lucide-react'
import Link from 'next/link'

import { resolveHref } from '@/sanity/lib/utils'
import type { ArticlePayload } from '@/types'
import { typeOf } from 'react-is'

interface ArticleProps {
  article: ArticlePayload
}

export function ArticleListItem(props: ArticleProps) {
  const { article } = props

  const href = resolveHref('article', article._id)
  console.log('Generated href:', href)

  if (!href) return null
  console.log(article.title)
  console.log('First author: ', article.authors[0])
  console.log('Type of date: ', typeof article.postDateTime)

  const postDate = new Date(article.postDateTime)

  return (
    <div className="flex flex-col p-4 transition border-t first:border-0 border-slate-200">
      <div className="grid gap-8 p-3 md:grid-cols-2">
        <div>
          {/* Authors */}
          <div className="flex flex-row items-center gap-1.5 mb-2 text-xs font-bold uppercase">
            {article.semesterPosted}
            <span className="text-slate-400">&middot;</span>
            <span className="bg-red-600 rounded-full px-2 py-0.5 text-white">
                {article.articleType || "Article"}
            </span>
          </div>
          {/* Title */}
          <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
            {article.title}
          </h3>

          {/* Article Photo */}
          {/* Campuses/Expected Hours */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
              <UserIcon />
              {article.authors.map(( author ) => author).join(', ')}
            </div>
            <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
              <ClockIcon />
              {postDate.toDateString()}
            </div>
          </div>
        </div>

        <div>
          {/* Overview  */}
          <p>{article.description}</p>

          <Link
            href={article.linkToArticle || href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700"
          >
            Read More <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
