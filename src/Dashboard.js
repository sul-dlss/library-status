import React from 'react'
import {statusEndpoints, statuses, graphs, feeds} from './config'
import {
  processLibraryHours,
  processRequests,
  processEmbed,
  processLibraryDrupal,
  processBitly
} from './endpointParsers'
import Header from './Header'
import StatusHeader from './StatusHeader'
import StatusItem from './StatusItem'
import GraphPanel from './GraphPanel'

class Dashboard extends React.Component {
  state = {
    statusEndpoints: statusEndpoints,
    statuses: statuses,
    graphs: graphs,
    feeds: feeds
  }

  componentDidMount() {
    Object.keys(statusEndpoints).forEach((key) => {
      fetch(statusEndpoints[key].endpointUrl, {
        mode: "cors"
      }).then((response) => {
        if (response.status !== 200) {
          return;
        }

        console.log(key);
        switch (key) {
        case 'searchworksApplication':
          processLibraryHours(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.searchworksApplication.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'libraryHours':
          processLibraryHours(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.libraryHours.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'requests':
          console.log('requests requested')
          processRequests(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.bitly.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'embed':
          console.log('embedrequested')
          processEmbed(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.bitly.status = status
              this.setState(prevState => ({newState}))
            });
          break
        case 'libraryDrupal':
          processLibraryDrupal(response)
            .then((status) => {
              console.log(status)
              var newState = this.state.statusEndpoints
              newState.bitly.status = status
              this.setState(prevState => ({newState}))
            });
          break
        default:
          console.log('unknown')
          return
        }
      }).catch((err) => {
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
