import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import toArray from 'dayjs/plugin/toArray'
import utc from 'dayjs/plugin/utc'

// Extend dayjs with plugins
dayjs.extend(advancedFormat)
dayjs.extend(toArray)
dayjs.extend(utc)
dayjs.extend(timezone)

// Set the default timezone for the entire application
dayjs.tz.setDefault('America/New_York')

export default dayjs
