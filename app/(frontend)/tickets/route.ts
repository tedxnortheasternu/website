import { redirect } from 'next/navigation'

export const runtime = 'edge'

export async function GET(request: Request) {
  redirect('/renaissance/tickets')
}
