import { type ClassValue, clsx } from 'clsx'
import * as ics from 'ics'
import { twMerge } from 'tailwind-merge'

import dayjs from '@/lib/dayjs'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadICS(
  title: string,
  start: string,
  end: string,
  description: string,
  location: string,
) {
  ics.createEvent(
    {
      title: title,
      busyStatus: 'BUSY',
      start: dayjs(start).utc().format('YYYYMMDDTHHmmss[Z]'),
      startInputType: 'utc',
      end: dayjs(end).utc().format('YYYYMMDDTHHmmss[Z]'),
      description: description,
      location: location,
    },
    (error, value) => {
      if (error) {
        console.log(error)
        return
      }

      const element = document.createElement('a')
      const file = new Blob([value], {
        type: 'text/calendar',
      })
      element.href = URL.createObjectURL(file)
      element.download = title.replaceAll(' ', '') + '.ics'
      document.body.appendChild(element) // Required for this to work in FireFox
      element.click()
    },
  )
}
