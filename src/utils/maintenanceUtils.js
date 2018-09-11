import moment from 'moment';
import 'moment-timezone';

function isBeingMaintained(currentTime, interval) {
  // Given a maintenance interval, return whether
  // the current time is within that interval.
  // Take timezone into account.
  // let currentDate = new Date
  const currentDate = moment(currentTime).tz('America/Los_Angeles');
  const currentHour = currentDate.hour();
  const maintenanceDay = (interval.day === currentDate.day());
  const maintenanceInterval = (currentHour >= interval.startHour)
    && (currentHour < interval.endHour);
  return (maintenanceDay && maintenanceInterval);
}

export default function areBeingMaintained(currentTime, intervals) {
  let isDown = false;
  intervals.forEach((interval) => {
    if (isBeingMaintained(currentTime, interval)) {
      isDown = true;
    }
  });
  return isDown;
}
