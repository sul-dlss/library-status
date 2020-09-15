function isBeingMaintained(currentTime, interval) {
  // Given a maintenance interval, return whether
  // the current time is within that interval.
  // Take timezone into account.
  const currentDate = new Date(
    new Date(currentTime).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
  );

  const currentHour = currentDate.getHours();
  const maintenanceDay = (interval.day === currentDate.getDay());
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
