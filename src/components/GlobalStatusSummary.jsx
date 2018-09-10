import React from 'react';

const statusReducer = (endpointStatuses) => {
  const allAreUp = Object.keys(endpointStatuses).every(e => endpointStatuses[e].status === 'up');
  const anyIssues = Object.keys(endpointStatuses).some(e => endpointStatuses[e].status === 'issue');
  const anyMaintenance = Object.keys(endpointStatuses).some(e => endpointStatuses[e].status === 'maintenance');
  const criticalEndpoints = Object.keys(endpointStatuses).filter(e => endpointStatuses[e].critical);
  const nonCriticalEndpoints = Object.keys(endpointStatuses)
    .filter(e => !endpointStatuses[e].critical);
  const anyNonCriticalOutages = nonCriticalEndpoints.some(e => endpointStatuses[e].status === 'outage');
  const anyCriticalOutages = criticalEndpoints.some(e => endpointStatuses[e].status === 'outage');

  if (allAreUp) {
    return 'up';
  } if (anyCriticalOutages) {
    return 'outage';
  } if (anyMaintenance) {
    return 'maintenance';
  } if (anyIssues || anyNonCriticalOutages) {
    return 'issue';
  }
  return 'pending';
};

const GlobalStatusSummary = ({
  statuses, endpoints,
}) => (
  <div id="GlobalStatusSummary" className="section">
    <h1>{statuses[statusReducer(endpoints)].icon}</h1>
    <h3>{statuses[statusReducer(endpoints)].legend}</h3>
    <p>
      {
        statuses[statusReducer(endpoints)].global_message
        || statuses[statusReducer(endpoints)].message
      }
    </p>
  </div>
);

export default GlobalStatusSummary;
