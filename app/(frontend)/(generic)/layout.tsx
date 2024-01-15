export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full max-w-screen-xl mx-auto my-8 md:my-12">
      {children}
    </main>
  )
}
