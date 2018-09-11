import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
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

        switch (key) {
          case 'searchworksApplication':
            processSearchworks(response)
              .then((status) => {
                const newState = endpoints;
                newState.searchworksApplication.status = status;
                this.setState(newState);
              });
            break;
          case 'swSolr':
            processSwSolr(response)
              .then((status) => {
                const newState = endpoints;
                newState.swSolr.status = status;
                this.setState(newState);
              });
            break;
          case 'ebsco':
            processEbsco(response)
              .then((status) => {
                const newState = endpoints;
                newState.ebsco.status = status;
                this.setState(newState);
              });
            break;
          case 'libraryHours':
            processLibraryHours(response)
              .then((status) => {
                const newState = endpoints;
                newState.libraryHours.status = status;
                this.setState(newState);
              });
            break;
          case 'requests':
            processRequests(response)
              .then((status) => {
                const newState = endpoints;
                newState.requests.status = status;
                this.setState(newState);
              });
            break;
          case 'embed':
            processEmbed(response)
              .then((status) => {
                const newState = endpoints;
                newState.embed.status = status;
                this.setState(newState);
              });
            break;
          case 'libraryDrupal':
            processLibraryDrupal(response)
              .then((status) => {
                const newState = endpoints;
                newState.libraryDrupal.status = status;
                this.setState(newState);
              });
            break;
          case 'liveAvailability':
            processLiveAvailability(response)
              .then((status) => {
                const newState = endpoints;
                newState.liveAvailability.status = status;
                this.setState(newState);
              });
            break;
          case 'citationService':
            processCitationService(response)
              .then((status) => {
                const newState = endpoints;
                newState.citationService.status = status;
                this.setState(newState);
              });
            break;
          default:
            console.log('unknown endpoint');
        }
      }).catch(() => {
        const newState = endpoints;
        newState[key].status = 'outage';
        this.setState(newState);
      });
    });
  }

  render() {
    const { endpoints } = this.state;
    return (
      <div>
        <GlobalStatusSummary
          endpoints={endpoints}
          statuses={statuses}
        />
        <div id="services">
          <StatusHeader
            statuses={statuses}
          />
          {Object.keys(endpoints).map((endpointName) => {
            // Return the element. Also pass key
            const endpoint = endpoints[endpointName];
            return (
              <StatusItem
                key={endpointName}
                serviceName={endpoint.displayName}
                serviceStatus={endpoint.status}
                statusMessage={statuses[endpoint.status].message}
                statusIcon={statuses[endpoint.status].icon}
              />
            );
          })}

        </div>
        <div className="section">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="searchworks"
            options={{
              chrome: 'noheader nofooter',
            }}
          />
        </div>
        <GraphPanel graphs={graphs} />
      </div>
    );
  }
}

export default Dashboard;
