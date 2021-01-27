import moment from 'moment'
import 'moment-duration-format'

export const getDurationString = (duration) => {
  const mDuration = moment.duration(duration, 'seconds')
  let format = 'hh:mm:ss'

  if(duration < 3600) format = 'mm:ss'
  if(duration < 60) format = 'ss'

  return mDuration.format(format, {trim: false})
}
