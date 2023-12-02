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
    <div className="w-40">
      <Image
        src={imageSrc}
        alt="Logo"
        className="object-cover w-40 h-40 mb-3 rounded"
      />
      <h3 className="mb-1 text-lg font-semibold leading-tight">{name}</h3>
      <p className="text-sm leading-snug text-slate-800">{title}</p>
    </div>
  )
}
