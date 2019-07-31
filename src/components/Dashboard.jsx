import React from 'react';
import {
  statusEndpoints, statuses, graphs, maintenanceWindows,
} from '../config';
import * as processors from '../utils/endpointParsers';
import GlobalStatus from '../utils/globalStatus';
import GlobalStatusSummary from './GlobalStatusSummary';
import StatusHeader from './StatusHeader';
import StatusItem from './StatusItem';
import GraphPanel from './GraphPanel';
import TabbedTwitterFeeds from './TabbedTwitterFeeds';
import areBeingMaintained from '../utils/maintenanceUtils';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { endpoints: statusEndpoints };
  }

  componentDidMount() {
    const { endpoints } = this.state;
    const maintenanceWindow = areBeingMaintained(new Date(), maintenanceWindows);
    Object.keys(endpoints).forEach((key) => {
      fetch(endpoints[key].endpointUrl, {
        mode: 'cors',
      }).then((response) => {
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
        processors[endpoints[key].processor](response)
          .then((status) => {
            const newState = endpoints;
            newState[key].status = status;
            this.setState(newState);
          });
      }).catch(() => {
        const newState = endpoints;
        newState[key].status = 'outage';
        this.setState(newState);
      });
    });
  }

  render() {
    const { endpoints } = this.state;
    const feeds = [
      { feedId: 'sulsystemstatus', label: 'Library systems' },
      { feedId: 'suleresources', label: 'Databases & e-resources' }];
    return (
      <div>
        <GlobalStatusSummary
          status={new GlobalStatus(statuses, endpoints).status}
        />
        <StatusHeader
          statuses={statuses}
        />
        <div id="services">
          {Object.keys(endpoints).map((endpointName) => {
            // Return the element. Also pass key
            const endpoint = endpoints[endpointName];
            return (
              <StatusItem
                key={endpointName}
                serviceName={endpoint.displayName}
                serviceUrl={endpoint.serviceUrl}
                serviceStatus={endpoint.status}
                statusMessage={statuses[endpoint.status].message}
                statusIcon={statuses[endpoint.status].icon}
              />
            );
          })}

        </div>
        <div id="updates" className="section anchored">
          <h2>Incidents</h2>
          <p>Updates about planned and unplanned service interruptions.</p>
          <TabbedTwitterFeeds feeds={feeds} />
        </div>
        <GraphPanel graphs={graphs} />
      </div>
    );
  }
}

export default Dashboard;
