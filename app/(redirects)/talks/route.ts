import { redirect } from 'next/navigation'

export const runtime = 'edge'

export async function GET() {
  redirect('https://www.youtube.com/@tedxnortheasternu/playlists')
}
