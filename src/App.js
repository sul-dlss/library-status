import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'
import StatusItem from './StatusItem'
import './styles/main.css'

const statusEndpoints = {
  libraryHours: {
    displayName: 'Library Hours',
    endpointUrl: 'https://library-hours.stanford.edu/is_it_working'
  },
  requests: {
    displayName: 'SUL Requests',
    endpointUrl: 'https://requests.stanford.edu/status/all'
  },
  bitly: {
    displayName: 'Shortlink Redirects',
    endpointUrl: 'http://status.bitly.com/?format=json'
  },
  embed: {
    displayName: 'SUL Embed',
    endpointUrl: 'http://embed.stanford.edu/status/all'
  }
}

Object.keys(statusEndpoints).forEach((key) => {
  fetch(statusEndpoints[key].endpointUrl, {
    mode: 'cors'
  })
    .then((response) => {
        console.log('Attempting: ' + statusEndpoints[key].endpointUrl );
      if (response.status !== 200) {
        return;
      }

      parseHours(response);

      /* response.json().then(function(data) {
       *   console.log(data);
       * });*/
    }).catch((err) => {
      console.log(err);
    });
});

function parseEmbed() {}
function parseHours(response) {
  // Examine the text in the response
  const reader = response.body.getReader().read();
  reader.then((stream) => console.log(
   new TextDecoder("utf-8").decode(stream.value)
  ));
}
function parseBitly() {}
function parseRequests() {}

const App = () => (
  <div>
    <h1>Searchworks Status</h1>
    <div id="services">
      <StatusItem />
      <StatusItem />
      <StatusItem />
      <StatusItem />
    </div>
  </div>
)

export default hot(module)(App)
