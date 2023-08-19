import React from 'react';
import GlobalStatus from '../utils/globalStatus';
import GlobalStatusSummary from './GlobalStatusSummary';
import StatusHeader from './StatusHeader';
import ServiceGrid from './ServiceGrid';
import {
  statusEndpoints, statuses, maintenanceWindows,
} from '../config';
import * as processors from '../utils/endpointParsers';
import areBeingMaintained from '../utils/maintenanceUtils';

class StatusPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { endpoints: statusEndpoints };
  }

  componentDidMount() {
    const { endpoints } = this.state;
    const maintenanceWindow = areBeingMaintained(new Date(), maintenanceWindows);
    const groupedEndpoints = this.groupedEndpoints();

    Object.keys(groupedEndpoints).forEach((endpointUrl) => {
      fetch(endpointUrl, {
        mode: 'cors',
      }).then((response) => {
        Object.keys(groupedEndpoints[endpointUrl]).forEach((key) => {
          if (response.status !== 200) {
            const newState = endpoints;
            if (maintenanceWindow) {
              newState[key].status = 'maintenance';
            } else {
              newState[key].status = 'issue';
            }
            this.setState(newState);
            return;
          }

          processors[endpoints[key].processor](response.clone())
            .then((status) => {
              const newState = endpoints;
              newState[key].status = status;
              this.setState(newState);
            });
        });
      }).catch(() => {
        Object.keys(groupedEndpoints[endpointUrl]).forEach((key) => {
          const newState = endpoints;
          newState[key].status = 'outage';
          this.setState(newState);
        });
      });
    });
  }

  groupedEndpoints() {
    const { endpoints } = this.state;
    const endpointCache = {};

    Object.keys(endpoints).forEach((key) => {
      const current = endpoints[key];
      const { endpointUrl } = current;

      if (endpointCache[endpointUrl]) {
        endpointCache[endpointUrl][key] = current;
      } else {
        endpointCache[endpointUrl] = { [key]: current };
      }
    });
    return endpointCache;
  }

  render() {
    const { endpoints } = this.state;

    const globalStatus = new GlobalStatus(statuses, endpoints).status;

    return (
      <>
        <GlobalStatusSummary
          status={globalStatus}
        />
        <StatusHeader />
        <ServiceGrid endpoints={endpoints} />
      </>
    );
  }
}

export default StatusPanel;
