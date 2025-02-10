import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClockIcon,
  InfoIcon,
  MapPinIcon,
} from 'lucide-react'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { ArticlePayload } from '@/types'

export interface ArticlePageProps {
  data: ArticlePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ArticlePage({ data, encodeDataAttribute }: ArticlePageProps) {
  // Default to an empty object to allow previews on non-existent documents

  if (!data) return null

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="mx-auto mt-4 text-3xl font-extrabold md:text-5xl">
            {data.title}
          </h1>
        </div>

        <div className="border rounded-md">
          <div className="p-3 lg:p-4">
            <Link
              href="/inthenews"
              className="inline-flex flex-row items-center gap-2 px-4 py-2 text-sm font-bold text-red-600 transition-colors border border-red-600 rounded-full hover:bg-red-600 hover:text-white"
            >
              <ArrowLeftIcon size={16} />
              Back to All Articles
            </Link>

            <div className="grid gap-2 mt-4 md:grid-rows-2">
                Authors: {data.authors.map(( author ) => author).join(', ')}
            </div>

            <div className="grid gap-8 mt-8 md:grid-cols-2">
              <CustomPortableText value={data.content}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticlePage
