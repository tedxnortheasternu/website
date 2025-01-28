import { redirect } from 'next/navigation'

export const runtime = 'edge'

export async function GET() {
  redirect('https://neu.co1.qualtrics.com/jfe/form/SV_eJPaHMcUfZtJBCm')
}
