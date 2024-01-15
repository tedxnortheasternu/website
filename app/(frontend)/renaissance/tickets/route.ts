import { redirect } from 'next/navigation'

export const runtime = 'edge'

export async function GET(request: Request) {
  redirect(
    'https://nuhuskies.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS:ATHLETICS:SL2324:TED0224:&linkID=northeastern-athletics&siteId=ev_northeastern-athletics',
  )
}
