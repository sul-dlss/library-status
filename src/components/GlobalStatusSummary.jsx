import React from 'react';

const statusReducer = (endpointStatuses) => {
  const allAreUp = Object.keys(endpointStatuses).every(e => endpointStatuses[e].status === 'up');
  const anyIssues = Object.keys(endpointStatuses).some(e => endpointStatuses[e].status === 'issue');
  const anyMaintenance = Object.keys(endpointStatuses).some(e => endpointStatuses[e].status === 'maintenance');
  const criticalEndpoints = Object.keys(endpointStatuses).filter(e => endpointStatuses[e].critical);
  const nonCriticalEndpoints = Object.keys(endpointStatuses).filter(e => !endpointStatuses[e].critical);
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

const GlobalStatusSummary = props => (
  <div id="GlobalStatusSummary" className="section">
    <h1>{props.statuses[statusReducer(props.endpoints)].icon}</h1>
    <h3>{props.statuses[statusReducer(props.endpoints)].legend}</h3>
    <p>
      {props.statuses[statusReducer(props.endpoints)].global_message || props.statuses[statusReducer(props.endpoints)].message}
    </p>
  </div>
);

export default GlobalStatusSummary;
