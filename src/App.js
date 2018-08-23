import React from 'react'
import { hot } from 'react-hot-loader'
import Header from './Header'
import StatusHeader from './StatusHeader'
import StatusItem from './StatusItem'
import './styles/main.css'

const statusEndpoints = {
  libraryHours: {
    displayName: 'Library Hours',
    endpointUrl: 'https://library-hours.stanford.edu/is_it_working',
    status: 'pending'
  },
  requests: {
    displayName: 'SUL Requests',
    endpointUrl: 'https://requests.stanford.edu/status/all.json',
    status: 'pending'
  },
  bitly: {
    displayName: 'Shortlink Redirects',
    endpointUrl: 'http://status.bitly.com/?format=json',
    status: 'pending'
  },
  embed: {
    displayName: 'SUL Embed',
    endpointUrl: 'http://embed.stanford.edu/status/all.json',
    status: 'pending'
  },
  libraryDrupal: {
    displayName: 'Library.stanford.edu',
    endpointUrl: 'http://library.stanford.edu/healthcheck.php',
    status: 'pending'
  }
}

const statuses = {
  down: '🚫',
  up: '✅',
  issue: '⚠',
  pending: '🔄'
}

const statusMessages = {
  down: 'The service is currently down',
  up: 'Service is Operational',
  issue: 'There is a performance issue with this service',
  pending: 'Retrieving Status Information'
}

Object.keys(statusEndpoints).forEach((key) => {
  fetch(statusEndpoints[key].endpointUrl, {
    mode: 'cors'
  }).then((response) => {
    if (response.status !== 200) {
      return;
    }

    switch (key) {
      case 'libraryHours':
        processLibraryHours(response)
        break
      case 'requests':
        processRequests(response)
        break
      case 'bitly':
        processBitly(response)
        break
      case 'embed':
        processEmbed(response)
        break
      case 'libraryDrupal':
        processLibraryDrupal(response)
        break
      default:
        console.log('unknown')
        return
    }
  }).catch((err) => {
    console.log(err)
  });
});

function processEmbed(response) {
  response.json().then(function(data) {
  });
}
function processLibraryHours(response) {
  // Examine the text in the response
  response.body.getReader()
          .read()
          .then((data) => {
          });
};
function processBitly(response) {
  response.json().then(function(data) {

  });
}
function processRequests() {
  response.json().then(function(data) {
  });
}
function processLibraryDrupal(response) {
  response.body.getReader()
          .read()
          .then((data) => {
          });
}

const App = () => (
  <div>
    <Header />
    <div id="services">
    <StatusHeader />
    {Object.keys(statusEndpoints).map((endpointName, i) => {
      statusEndpoints[endpointName].key = i;
      // Return the element. Also pass key
      let endpoint = statusEndpoints[endpointName];
      return (
        <StatusItem
        serviceName={endpoint.displayName}
        serviceStatus={endpoint.status}
        statusMessage={statusMessages[endpoint.status]}
        statusIcon={statuses[endpoint.status]}
        />
      )
    })}
    </div>
  </div>
)

export default hot(module)(App)
