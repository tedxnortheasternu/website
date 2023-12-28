import ImageBox from '@/components/shared/ImageBox'

export default function TeamMember({
  image,
  name,
  title,
}: {
  image?: { asset?: any }
  name: string
  title: string
}) {
  return (
    <div className="w-32">
      {image ? (
        <ImageBox
          image={image}
          className="object-cover w-32 h-32 mb-3"
          imageClassName="rounded-md"
        />
      ) : null}
      <h3 className="mb-1 text-lg font-semibold leading-tight">{name}</h3>
      <p className="text-sm leading-snug text-slate-800">{title}</p>
    </div>
  )
}
