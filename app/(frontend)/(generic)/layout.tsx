export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="max-w-screen-xl mx-auto my-8">{children}</main>
}
