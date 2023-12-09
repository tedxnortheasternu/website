import { RenaissanceNavbar } from 'components/global/renaissance/RenaissanceNavbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RenaissanceNavbar />
      <main className="max-w-screen-xl px-4 mx-auto my-8">{children}</main>
    </>
  )
}
