import { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { ArticlePayload } from '@/types'

import { ArticleListItem } from './ArticleListItem'

export interface NewsPageProps {
  data: ArticlePayload[] | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function InTheNewsPage({
  data: articles,
  encodeDataAttribute,
}: NewsPageProps) {
  if (!articles || articles.length === 0) {
    return <div className="text-center">No Articles.</div>
  }

  console.log(`log`,articles.length);
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Our Voices
        </h1>
      </div>

      {/* Articles List */}
      {articles.length > 0 ? (
        <div className="mx-auto border rounded-md border-slate-200 overflow-clip">
          {articles
            .slice() // Makes a shallow copy of the array
            .map((article) => {
              return <ArticleListItem key={article._id} article={article} />
            })}
        </div>
      ) : (
        // TODO: improve styling
        <div className="text-center">No stories are available right now. Please check back later.</div>
      )}
    </div>
  )
}

export default InTheNewsPage
