import React, { useEffect, useState } from 'react';
import GlobalStatus from '../utils/globalStatus';
import GlobalStatusSummary from './GlobalStatusSummary';
import StatusHeader from './StatusHeader';
import StatusItem from './StatusItem';
import {
  statusEndpoints, statuses, maintenanceWindows,
} from '../config';
import * as processors from '../utils/endpointParsers';
import areBeingMaintained from '../utils/maintenanceUtils';

const StatusPanel = () => {
  const [responseStatuses, setResponseStatuses] = useState({});

  const maintenanceWindow = areBeingMaintained(new Date(), maintenanceWindows);

  useEffect(() => { loadStatuses(); }, statusEndpoints);

  async function loadStatuses() {
    const statusEndpointsByUrl = Object.keys(statusEndpoints).reduce((acc, key) => {
      const endpoint = statusEndpoints[key];

      acc[endpoint.endpointUrl] = acc[endpoint.endpointUrl] || [];
      acc[endpoint.endpointUrl].push(key);

      return acc;
    }, {});

    Object.keys(statusEndpointsByUrl).forEach((url) => {
      fetch(url, { mode: 'cors' }).then((response) => {
        statusEndpointsByUrl[url].forEach((key) => {
          const endpoint = statusEndpoints[key];

          processors[endpoint.processor](response.clone()).then((status) => {
            setResponseStatuses(prevResponses => ({ ...prevResponses, [key]: { status: (status == 'outage' && maintenanceWindow) ? 'maintenance' : status } }));
          });
        })
      }).catch((error) => {
        statusEndpointsByUrl[url].forEach((key) => {
          setResponseStatuses(prevResponses => ({ ...prevResponses, [key]: { status: null } }));
        });
      });
    });
  };

  const globalStatus = new GlobalStatus(statuses, responseStatuses).status;

  return (
    <>
      <GlobalStatusSummary
        status={globalStatus}
      />
      <StatusHeader />
      <div id="services">
        {Object.keys(statusEndpoints || {}).map((endpointName) => {
          // Return the element. Also pass key
          const endpoint = statusEndpoints[endpointName];
          let status = responseStatuses[endpointName]?.status || 'pending';

          return (
            <StatusItem
              key={endpointName}
              serviceName={endpoint.displayName}
              serviceUrl={endpoint.serviceUrl}
              serviceStatus={status}
              statusMessage={statuses[status]?.message}
              statusIcon={statuses[status]?.icon}
            />
          );
        })}
      </div>
    </>
  );
}

export default StatusPanel;
