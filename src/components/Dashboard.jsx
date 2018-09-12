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
import GlobalStatus from '../utils/globalStatus';
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
    const uniqueEndpointUrls = [...new Set(
      Object.keys(endpoints).map(key => endpoints[key].endpointUrl),
    )];

    uniqueEndpointUrls.forEach((endpointUrl) => {
      fetch(endpointUrl, {
        mode: 'cors',
      }).then((response) => {
        // Find all service keys corresponding to the
        // endpoint url of this response
        Object.keys(endpoints)
          .filter(key => endpoints[key].endpointUrl === endpointUrl)
          .forEach((key) => {
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
                // use .clone() for response bodies that will be read multiple times
                // https://developer.mozilla.org/en-US/docs/Web/API/Response/clone
                processSearchworks(response.clone())
                  .then((status) => {
                    const newState = endpoints;
                    newState.searchworksApplication.status = status;
                    this.setState(newState);
                  });
                break;
              case 'swSolr':
                processSwSolr(response.clone())
                  .then((status) => {
                    const newState = endpoints;
                    newState.swSolr.status = status;
                    this.setState(newState);
                  });
                break;
              case 'ebsco':
                processEbsco(response.clone())
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
                processLiveAvailability(response.clone())
                  .then((status) => {
                    const newState = endpoints;
                    newState.liveAvailability.status = status;
                    this.setState(newState);
                  });
                break;
              case 'citationService':
                processCitationService(response.clone())
                  .then((status) => {
                    const newState = endpoints;
                    newState.citationService.status = status;
                    this.setState(newState);
                  });
                break;
              default:
                console.error('unknown endpoint');
            }
          });
      }).catch(() => {
        const newState = endpoints;

        // set status for all endpoints that depend on this same request
        Object.keys(endpoints)
          .filter(key => endpoints[key].endpointUrl === endpointUrl)
          .forEach((key) => {
            newState[key].status = 'outage';
          });
        this.setState(newState);
      });
    });
  }

  render() {
    const { endpoints } = this.state;
    return (
      <div>
        <GlobalStatusSummary
          status={new GlobalStatus(statuses, endpoints).status}
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
        <div id="updates" className="section anchored">
          <h2>Updates</h2>
          <p>The SearchWorks team will tweet updates about notable service interruptions.</p>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="searchworks"
            options={{
              chrome: 'noheader nofooter',
              width: 600,
            }}
          />
        </div>
        <GraphPanel graphs={graphs} />
        <div id="feedback" className="section">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfO_IAoIZI28vSxAErtIwquqpUm7EqJtIj3DP14xQFa2M4-Wg/viewform?embedded=true"
            width="100%"
            height="748"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Submit feedback for this status page"
          >
            Loading...
          </iframe>
        </div>
      </div>
    );
  }
}

export default Dashboard;
