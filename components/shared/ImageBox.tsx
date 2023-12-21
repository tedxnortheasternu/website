import { urlForImage } from 'lib/sanity.image'
import { cn } from 'lib/utils'
import Image from 'next/image'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  className?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 800,
  height = 800,
  size = '100vw',
  className,
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div className={cn('rounded-md bg-slate-50', className)}>
      {imageUrl && (
        <Image
          className="w-full h-full px-4"
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
