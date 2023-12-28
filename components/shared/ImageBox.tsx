import Image from 'next/image'

import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  crop?: boolean
  className?: string
  imageClassName?: string
  'data-sanity'?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 800,
  height = 800,
  size = '100vw',
  crop = true,
  className,
  imageClassName,
  ...props
}: ImageBoxProps) {
  if (!image) return null

  const imageUrl = crop
    ? urlForImage(image)?.height(height).width(width).fit('crop').url()
    : urlForImage(image)?.height(height).fit('max').url()

  return (
    <div
      className={cn('rounded-md bg-slate-50', className)}
      data-sanity={props['data-sanity']}
    >
      {imageUrl && (
        <Image
          className={cn('w-full h-full', imageClassName)}
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
        />
      )}
    </div>
  )
}
