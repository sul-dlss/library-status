import React from 'react';
import {
  statusEndpoints, statuses, graphs, maintenanceWindows,
} from '../config';
import {
  processSearchworks,
  processSwSolr,
  processEbsco,
  processLibraryHours,
  processRequests,
  processEmbed,
  processLibraryDrupal,
  processLiveAvailability,
  processCitationService,
} from '../utils/endpointParsers';
import GlobalStatusSummary from './GlobalStatusSummary';
import StatusHeader from './StatusHeader';
import StatusItem from './StatusItem';
import GraphPanel from './GraphPanel';
import areBeingMaintained from '../utils/maintenanceUtils';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statusEndpoints };
  }

  componentDidMount() {
    Object.keys(statusEndpoints).forEach((key) => {
      fetch(statusEndpoints[key].endpointUrl, {
        mode: 'cors',
      }).then((response) => {
        if (response.status !== 200) {
          const newState = this.state.statusEndpoints;
          newState[key].status = 'issue';
          this.setState(prevState => ({ newState }));
          return;
        }

        switch (key) {
          case 'searchworksApplication':
            processSearchworks(response)
              .then((status) => {
                const newState = this.state.statusEndpoints;
                newState.searchworksApplication.status = status;
                this.setState(prevState => ({ newState }));
              });
            break;
          case 'swSolr':
            processSwSolr(response)
              .then((status) => {
                const newState = this.state.statusEndpoints;
                newState.swSolr.status = status;
                this.setState(prevState => ({ newState }));
              });
            break;
          case 'ebsco':
            processEbsco(response)
              .then((status) => {
                const newState = this.state.statusEndpoints;
                newState.ebsco.status = status;
                this.setState(prevState => ({ newState }));
              });
            break;
          case 'libraryHours':
            processLibraryHours(response)
              .then((status) => {
                const newState = this.state.statusEndpoints;
                newState.libraryHours.status = status;
                this.setState(prevState => ({ newState }));
              });
            break;
          case 'requests':
            processRequests(response)
              .then((status) => {
                const newState = this.state.statusEndpoints;
                newState.requests.status = status;
                this.setState(prevState => ({ newState }));
              });
            break;
          case 'embed':
            processEmbed(response)
              .then((status) => {
                const newState = this.state.statusEndpoints;
                newState.embed.status = status;
                this.setState(prevState => ({ newState }));
              });
            break;
          case 'libraryDrupal':
            processLibraryDrupal(response)
              .then((status) => {
                const newState = this.state.statusEndpoints;
                newState.libraryDrupal.status = status;
                this.setState(prevState => ({ newState }));
              });
            break;
          case 'liveAvailability':
            processLiveAvailability(response)
              .then((status) => {
                const newState = this.state.statusEndpoints;
                newState.liveAvailability.status = status;
                this.setState(prevState => ({ newState }));
              });
            break;
          case 'citationService':
            processCitationService(response)
              .then((status) => {
                const newState = this.state.statusEndpoints;
                newState.citationService.status = status;
                this.setState(prevState => ({ newState }));
              });
            break;
          default:
            console.log('unknown endpoint');
        }
      }).catch((err) => {
        const newState = this.state.statusEndpoints;
        newState[key].status = 'outage';
        this.setState(prevState => ({ newState }));
        return;
        console.log(`Request for ${key} did not complete.`);
        console.log(err);
      });
    });
  }

  render() {
    return (
      <div>
        <GlobalStatusSummary
          endpoints={this.state.statusEndpoints}
          statuses={statuses}
        />
        <div id="services">
          <StatusHeader
            statuses={statuses}
          />
          {Object.keys(this.state.statusEndpoints).map((endpointName, i) => {
            statusEndpoints[endpointName].key = i;
            if (areBeingMaintained(new Date(), maintenanceWindows)) {
              Object.keys(this.state.statusEndpoints).forEach(endpointName => statusEndpoints[endpointName].status = 'maintenance');
            }
            // Return the element. Also pass key
            const endpoint = statusEndpoints[endpointName];
            return (
              <StatusItem
                key={endpoint.key}
                serviceName={endpoint.displayName}
                serviceStatus={endpoint.status}
                statusMessage={statuses[endpoint.status].message}
                statusIcon={statuses[endpoint.status].icon}
              />
            );
          })}

        </div>

        <GraphPanel graphs={graphs} />
      </div>
    );
  }
}

export default Dashboard;
