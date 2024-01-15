import { redirect } from 'next/navigation'

export const runtime = 'edge'

export async function GET(request: Request) {
  redirect('https://mailchi.mp/39a289393abb/tedxnu-mailing-list')
}
