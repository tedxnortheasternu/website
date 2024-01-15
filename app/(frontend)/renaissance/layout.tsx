import { RenaissanceNavbar } from '@/components/global/renaissance/RenaissanceNavbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RenaissanceNavbar />
      <main className="w-full max-w-screen-xl mx-auto mt-4">{children}</main>
    </>
  )
}
