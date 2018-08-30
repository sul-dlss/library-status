import moment from 'moment'
import momentTimezone from 'moment-timezone'
function isBeingMaintained (interval) {
  // Given a maintenance interval, return whether
  // the current time is within that interval.
  // Take timezone into account.
  // let currentDate = new Date
  let currentDate = moment(new Date).tz('America/Los_Angeles')
  let currentHour = currentDate.hour()
  let maintenanceDay = (interval.day === currentDate.day())
  let maintenanceInterval = (currentHour >= interval.startHour) && (currentHour < interval.endHour)
  return (maintenanceDay && maintenanceInterval)
}

export default function areBeingMaintained(intervals){
  let isDown = false
  intervals.forEach((interval) => {
    if (isBeingMaintained(interval)) {
      isDown = true
    }
  })
  return isDown
}
