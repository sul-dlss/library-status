export const statusEndpoints = {
  searchworksApplication: {
    displayName: 'SearchWorks Website',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    critical: true,
    position: 1
  },
  swSolr: {
    displayName: 'SearchWorks Solr',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    critical: true,
    position: 2
  },
  ebsco: {
    displayName: 'Articles+',
    endpointUrl: 'https://status.ebsco.com/index.json',
    status: 'pending',
    critical: true,
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
    endpointUrl: 'https://requests.stanford.edu/status/all.json',
    status: 'pending',
    position: 5
  },
  embed: {
    displayName: 'SUL Embed',
    endpointUrl: 'https://embed.stanford.edu/status/all.json',
    status: 'pending',
    position: 6
  },
  libraryDrupal: {
    displayName: 'Library.stanford.edu',
    endpointUrl: 'https://library.stanford.edu/healthcheck.php',
    status: 'pending',
    position: 7
  },
  liveAvailability: {
    displayName: 'Live Availability Lookups',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 8
  },
  citationService: {
    displayName: 'OCLC Citation Service',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 9
  }
}

export const statuses = {
  up: {
    icon: '✅',
    legend: 'No Issues',
    message: 'No Issues',
    global_message: 'All systems are operational'
  },
  maintenance: {
    icon: '🛠',
    legend: 'Maintenance',
    message: 'This service is currently down for scheduled maintenance.'
  },
  issue: {
    icon: '⚠️',
    legend: 'Issue',
    message: 'There is currently a performance issue with this service.',
    global_message: 'There is currently an issue with SearchWorks or a related service. Please see below for more details.'
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

// SUL Maintenance windows in PST
export const maintenanceWindows = [
  {
    day: 0,
    startHour: 4,
    endHour: 8
  },
  {
    day: 2,
    startHour: 4,
    endHour: 8
  },
  {
    day: 4,
    startHour: 4,
    endHour: 8
  },
  {
    day: 6,
    startHour: 4,
    endHour: 8
  }
]

export const graphs = {
  swResponseTime: {
    title: 'Searchworks Page Load Time',
    iframeSrc: 'https://rpm.newrelic.com/public/charts/5f3weQre01n',
    position: 1
  },
  solr: {
    title: 'SOLR Response Time',
    iframeSrc: 'https://rpm.newrelic.com/public/charts/iM3aQqmT3Yt',
    position: 2
  },
  ebsco: {
    title: 'Ebsco Response Time',
    iframeSrc: 'https://rpm.newrelic.com/public/charts/lFCu4RDWoE2',
    position: 3
  }
}

export const feeds = {
  sulSystemStatus: '<a class="twitter-timeline" href="https://twitter.com/SULSystemStatus?ref_src=twsrc%5Etfw">Tweets by SULSystemStatus</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
}
