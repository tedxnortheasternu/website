import { ArrowRightIcon, ClockIcon,UserIcon } from 'lucide-react'
import Link from 'next/link'

import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { ArticlePayload } from '@/types'

interface ArticleProps {
  article: ArticlePayload
}

export function ArticleListItem(props: ArticleProps) {
  const { article } = props
  // const [tagColors, setTagColors] = useState('')

  const href = resolveHref('article', article._id)
  console.log('Generated href:', href)

  if (!href) return null
  console.log(article.title)
  console.log('First author: ', article.authors[0])
  console.log('Type of date: ', typeof article.postDateTime)

  const postDate = new Date(article.postDateTime)

  const buttonColor = article.readMoreButtonColor || { hex: "#dc2626", alpha: 1 }

  const readMoreButtonStyle = {
    backgroundColor: buttonColor.hex,
    opacity: buttonColor.alpha,
  }

  console.log(`Background image information: ${article.articlePhoto}`)
  console.log(`Article photo url: ${urlForImage(article.articlePhoto)}`)

  // Splitting description if it's too long
  const descriptionWordLimit = 50

  const articleDescription = article.description
  const words = articleDescription.split(' ')

  let newArticleDescription = ''
  if (words.length > descriptionWordLimit) {
    for (let i = 0; i < descriptionWordLimit; i++) {
      newArticleDescription += words[i] + ' ';
    }

    newArticleDescription = newArticleDescription.trim()
    newArticleDescription += '...'
  } else {
    newArticleDescription = articleDescription
  }
  

  return (
    <div className="flex flex-col p-4 transition border-t first:border-0 border-slate-200">
      <div className="grid gap-8 p-3 md:grid-cols-2">
        <div>
          {/* Article Semester & Article Type */}
          <div className="flex flex-row items-center gap-1.5 mb-2 text-xs font-bold uppercase">
            {article.semesterPosted}
            <span className="text-slate-400">&middot;</span>
            <span style={readMoreButtonStyle} className="rounded-full px-2 py-0.5 text-white">
                {article.articleType || "Article"}
            </span>
          </div>

          <div className='rounded-lg overflow-hidden'>
            {/* Background Image with Title Section */}
            <div 
              className="relative bg-cover bg-center h-40 flex items-end px-6 py-4"
              style={{
                backgroundImage: `url(${urlForImage(article.articlePhoto)})`,
                backgroundPosition: 'center'
              }}
            >
              {/* Article Title */}
              <h3 className="text-2xl font-extrabold text-white">{article.title}</h3>
            </div>

            {/* Article Author & Date Information */}
            <div className="p-4 bg-white rounded-b-lg">
              <div className="grid grid-cols-2 gap-4">
                {/* Article Authors */}
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <UserIcon size={18} />
                  <span>{article.authors.join(', ')}</span>
                </div>

                {/* Article Posting Date */}
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <ClockIcon size={18} />
                  <span>{postDate.toDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div>
          {/* Article Description */}
          <p className='pt-8'>{newArticleDescription}</p>

          <Link
            href={article.linkToArticle || href}
            target="_blank"
            rel="noopener noreferrer"
            style={readMoreButtonStyle}
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-white uppercase transition-colors rounded-full w-max hover:bg-red-700"
          >
            Read More <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
