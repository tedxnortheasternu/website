import { RenaissanceNavbar } from '@/components/global/renaissance/RenaissanceNavbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RenaissanceNavbar />
      <main className="w-full max-w-screen-xl mx-auto my-8">{children}</main>
    </>
  )
}
