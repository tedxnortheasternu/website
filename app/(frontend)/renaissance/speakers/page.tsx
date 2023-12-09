export default function RenaissanceSpeakers() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold md:text-3xl">
        Meet Our Speakers!
      </h1>
      <div className="grid gap-2 md:grid-cols-2">
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
      </div>
    </>
  )
}

function Speaker() {
  return (
    <div className="flex flex-col gap-2 p-4 border-2 border-gray-100 rounded-md">
      <span className="text-xl font-bold">Chloe Colipano</span>
    </div>
  )
}
