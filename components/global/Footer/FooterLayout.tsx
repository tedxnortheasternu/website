import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { SettingsPayload } from 'types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  return (
    <footer className="w-full py-4 text-center bg-slate-50">
      {footer && (
        <CustomPortableText paragraphClasses="text-md" value={footer} />
      )}
    </footer>
  )
}
