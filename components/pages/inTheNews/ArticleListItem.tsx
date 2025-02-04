import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

import { resolveHref } from '@/sanity/lib/utils'
import type { ArticlePayload } from '@/types'

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

  return (
    <div className="flex flex-col p-4 transition border-t first:border-0 border-slate-200">
      <div className="grid gap-8 p-3 md:grid-cols-2">
        <div>
          {/* Authors */}
          <div className="flex flex-row items-center gap-1.5 mb-2 text-xs font-bold uppercase">
            Authors: {article.authors.join(', ')}
          </div>
          {/* Title */}
          <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
            {article.title}
          </h3>

          {/* Article Photo */}
        </div>

        <div>
          {/* Overview  */}
          <p>{article.description}</p>

          <Link
            href={href}
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700"
          >
            Read More <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
