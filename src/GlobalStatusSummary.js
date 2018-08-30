import React from 'react'

const statusReducer = (endpointStatuses) => {
  // If all statuses are green, we're green

  // If we're still waiting on some statuses,
  // we're pending.

  // Searchworks is up, but some items are experiencing
  // issues, we're sort of up.

  // If we're in the maintenance window, we are
  // under maintenance.
  return 'pending'
}

const GlobalStatusSummary = props => (
   <div id="GlobalStatusSummary">
     <h1>{props.statuses[statusReducer(props.endpoints)].icon}</h1>
     <h3>Retrieving status information</h3>
     <p>This will only take a moment.</p>
   </div>
)

export default GlobalStatusSummary
