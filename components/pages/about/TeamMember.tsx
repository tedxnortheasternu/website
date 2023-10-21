import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export default function TeamMember({
  imageSrc,
  name,
  title,
}: {
  imageSrc: string | StaticImport
  name: string
  title: string
}) {
  return (
    <div>
      <Image
        src={imageSrc}
        alt="Logo"
        className="object-cover mb-2 h-36 w-36"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <span className="text-sm text-slate-800">{title}</span>
    </div>
  )
}
