import React from 'react'
import {statusEndpoints, statuses, graphs, feeds, maintenanceWindows} from './config'
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
} from './endpointParsers'
import Header from './Header'
import StatusHeader from './StatusHeader'
import StatusItem from './StatusItem'
import GraphPanel from './GraphPanel'
import areBeingMaintained from './maintenanceUtils'

class Dashboard extends React.Component {
  state = {
    statusEndpoints: statusEndpoints,
    statuses: statuses,
    graphs: graphs,
    feeds: feeds,
    intervals: maintenanceWindows
  }

  componentDidMount() {
    Object.keys(statusEndpoints).forEach((key) => {
      fetch(statusEndpoints[key].endpointUrl, {
        mode: "cors"
      }).then((response) => {
        console.log(response.status)
        if (response.status !== 200) {
          var newState = this.state.statusEndpoints
          newState[key].status = 'issue'
          this.setState(prevState => ({newState}))
          return;
        }

        switch (key) {
        case 'searchworksApplication':
          processSearchworks(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.searchworksApplication.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'swSolr':
          processSwSolr(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.swSolr.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'ebsco':
          processEbsco(response)
          .then((status) => {
            console.log(status)
            var newState = this.state.statusEndpoints
            newState.ebsco.status = status
            this.setState(prevState => ({newState}))
          });
          break
        case 'libraryHours':
          processLibraryHours(response)
            .then((status) => {
              var newState = this.state.statusEndpoints
              newState.libraryHours.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'requests':
          processRequests(response)
            .then((status) => {
              var newState = this.state.statusEndpoints
              newState.requests.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'embed':
          processEmbed(response)
            .then((status) => {
              var newState = this.state.statusEndpoints
              newState.embed.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'libraryDrupal':
          processLibraryDrupal(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.libraryDrupal.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'liveAvailability':
          processLiveAvailability(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.liveAvailability.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'citationService':
          processCitationService(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.citationService.status = status
              this.setState(prevState => ({newState}))
            });
          break
        default:
          console.log('unknown endpoint')
          return
        }
      }).catch((err) => {
        var newState = this.state.statusEndpoints
        newState[key].status = 'outage'
        this.setState(prevState => ({newState}))
        return;
        console.log('Request for ' + key + ' did not complete.')
        console.log(err)
      });
    });
  }

  render() {
    return <div>
      <div id="services">
      <StatusHeader
        statuses={statuses}
      />
        {Object.keys(this.state.statusEndpoints).map((endpointName, i) => {
          statusEndpoints[endpointName].key = i;
          if (areBeingMaintained(maintenanceWindows)) {
            Object.keys(this.state.statusEndpoints).forEach((endpointName) => statusEndpoints[endpointName].status = 'maintenance')
          }
          // Return the element. Also pass key
          let endpoint = statusEndpoints[endpointName];
          return (
            <StatusItem
              key={endpoint.key}
              serviceName={endpoint.displayName}
              serviceStatus={endpoint.status}
              statusMessage={statuses[endpoint.status].message}
              statusIcon={statuses[endpoint.status].icon}
            />
          )
        })}

      </div>

      <GraphPanel graphs={this.state.graphs}/>
    </div>
  }
}

export default Dashboard
