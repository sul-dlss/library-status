export const statusEndpoints = {
  libraryHours: {
    displayName: 'Library Hours',
    endpointUrl: 'https://library-hours.stanford.edu/is_it_working',
    status: 'pending',
    position: 1
  },
  requests: {
    displayName: 'SUL Requests',
    endpointUrl: 'https://requests-dev.stanford.edu/status/all.json',
    status: 'pending',
    position: 2
  },
  bitly: {
    displayName: 'Shortlink Redirects',
    endpointUrl: 'http://status.bitly.com/?format=json',
    status: 'pending',
    position: 3
  },
  embed: {
    displayName: 'SUL Embed',
    endpointUrl: 'https://embed-stage.stanford.edu/status/all.json',
    status: 'pending',
    position: 4
  },
  libraryDrupal: {
    displayName: 'Library.stanford.edu',
    endpointUrl: 'https://library.stanford.edu/healthcheck.php',
    status: 'pending',
    position: 5
  }
}

export const statuses = {
  up: {
    icon: '✅',
    legend: 'No Issues',
    message: 'No Issues'
  },
  maintainance: {
    icon: '🛠',
    legend: 'Maintenance',
    message: 'This service is currently down for scheduled maintenance.'
  },
  issue: {
    icon: '⚠',
    legend: 'Issue',
    message: 'There is currently a performance issue with this service.'
  },
  pending: {
    icon: '🔄',
    message: 'Retrieving status information...'
  },
  outage: {
    icon: '🚫',
    legend: 'Outage',
    message: 'This service is currently unavailable due to an outage.'
  }
}

export const graphs = {
  swResponseTime: {
    title: 'Searchworks Response Time',
    tag: '<iframe src="https://rpm.newrelic.com/public/charts/9kReJWHRXyt" width="500" height="300" scrolling="no" frameborder="no"></iframe>',
    position: 1
  },
  solr: {
    title: 'Solr Response Time',
    tag: '<iframe src="https://rpm.newrelic.com/public/charts/tAPstSMLa7" width="500" height="300" scrolling="no" frameborder="no"></iframe>',
    position: 1
  },
  ebsco: {
    title: 'Ebsco Response Time',
    tag: '<iframe src="https://rpm.newrelic.com/public/charts/gaCwQOqamfZ" width="500" height="300" scrolling="no" frameborder="no"></iframe>',
    position: 2
  }
}

export const feeds = {
  sulSystemStatus: '<a class="twitter-timeline" href="https://twitter.com/SULSystemStatus?ref_src=twsrc%5Etfw">Tweets by SULSystemStatus</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
}
