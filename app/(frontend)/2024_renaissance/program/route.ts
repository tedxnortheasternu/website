import { redirect } from 'next/navigation'

export const runtime = 'edge'

export async function GET() {
  redirect(
    'https://drive.google.com/file/d/1KC0K8eIrA0VEh16SSQoGKF03laCFKSDs/preview',
  )
}
