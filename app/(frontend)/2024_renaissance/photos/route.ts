import { redirect } from 'next/navigation'

export const runtime = 'edge'

export async function GET(request: Request) {
  redirect(
    'https://www.flickr.com/photos/tedxnu/collections/72157722634285458/',
  )
}
