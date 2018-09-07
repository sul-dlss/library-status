import React from 'react'

const statusReducer = (endpointStatuses) => {
  let allAreUp = Object.keys(endpointStatuses).every(e => endpointStatuses[e].status === 'up');
  let anyIssues = Object.keys(endpointStatuses).some(e => endpointStatuses[e].status === 'issue');
  let anyMaintenance = Object.keys(endpointStatuses).some(e => endpointStatuses[e].status === 'maintenance');
  let criticalEndpoints = Object.keys(endpointStatuses).filter(e => endpointStatuses[e].critical)
  let nonCriticalEndpoints = Object.keys(endpointStatuses).filter(e => !endpointStatuses[e].critical)
  let anyNonCriticalOutages = nonCriticalEndpoints.some(e => endpointStatuses[e].status === 'outage');
  let anyCriticalOutages = criticalEndpoints.some(e => endpointStatuses[e].status === 'outage');

  if (allAreUp) {
    return 'up';
  } else if (anyCriticalOutages) {
    return 'outage';
  } else if (anyMaintenance) {
    return 'maintenance';
  } else if (anyIssues || anyNonCriticalOutages) {
    return 'issue';
  } else {
    return 'pending';
  }
}

const GlobalStatusSummary = props => (
   <div id="GlobalStatusSummary" className="section">
     <h1>{props.statuses[statusReducer(props.endpoints)].icon}</h1>
     <h3>{props.statuses[statusReducer(props.endpoints)].legend}</h3>
     <p>
       {props.statuses[statusReducer(props.endpoints)].global_message || props.statuses[statusReducer(props.endpoints)].message}
      </p>
   </div>
)

export default GlobalStatusSummary
