export const statusEndpoints = {
  searchworksApplication: {
    displayName: 'SearchWorks Website',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 1
  },
  swSolr: {
    displayName: 'SearchWorks Solr',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 2
  },
  ebsco: {
    displayName: 'Articles+',
    endpointUrl: 'https://status.ebsco.com/index.json',
    status: 'pending',
    position: 3
  },
  libraryHours: {
    displayName: 'Library Hours',
    endpointUrl: 'https://library-hours.stanford.edu/status/all.json',
    status: 'pending',
    position: 4
  },
  requests: {
    displayName: 'SUL Requests',
    endpointUrl: 'https://requests-dev.stanford.edu/status/all.json',
    status: 'pending',
    position: 5
  },
  embed: {
    displayName: 'SUL Embed',
    endpointUrl: 'https://embed-stage.stanford.edu/status/all.json',
    status: 'pending',
    position: 6
  },
  libraryDrupal: {
    displayName: 'Library.stanford.edu',
    endpointUrl: 'https://library.stanford.edu/healthcheck.php',
    status: 'pending',
    position: 7
  },
  oclcEzproxy: {
    displayName: 'EZproxy',
    endpointUrl: 'https://oclc.service-now.com/status?id=service&sys_id=a135f987139f6e40250a36722244b098',
    status: 'pending',
    position: 8
  },
  oclcWorldcat: {
    displayName: 'Worldcat Search & Citations',
    endpointUrl: 'https://oclc.service-now.com/status?id=service&sys_id=3b1c847a4ff6e684a5832cee0210c759',
    status: 'pending',
    position: 9
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
    icon: '⚠️',
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
