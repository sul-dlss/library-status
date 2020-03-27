export const statusEndpoints = {
  swSolr: {
    displayName: 'SearchWorks catalog (Solr)',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    serviceUrl: 'https://searchworks.stanford.edu',
    status: 'pending',
    critical: true,
    position: 1,
    processor: 'processSwSolr',
  },
  ebsco: {
    displayName: 'Articles+ (EDS)',
    endpointUrl: 'https://status.ebsco.com/index.json',
    serviceUrl: 'https://searchworks.stanford.edu/articles',
    status: 'pending',
    critical: true,
    position: 2,
    processor: 'processEbsco',
  },
  libraryDrupal: {
    displayName: 'Library website',
    endpointUrl: 'https://library.stanford.edu/healthcheck.php',
    serviceUrl: 'https://library.stanford.edu/',
    status: 'pending',
    position: 3,
    processor: 'processLibraryDrupal',
  },
  libraryHours: {
    displayName: 'Library hours',
    endpointUrl: 'https://library-hours.stanford.edu/status/all.json',
    serviceUrl: 'https://library-hours.stanford.edu',
    status: 'pending',
    position: 4,
    processor: 'processGenericOkComputer',
  },
  requests: {
    displayName: 'Requests',
    endpointUrl: 'https://requests.stanford.edu/status/all.json',
    status: 'pending',
    position: 5,
    processor: 'processGenericOkComputer',
  },
  embed: {
    displayName: 'SDR embedded content',
    endpointUrl: 'https://embed.stanford.edu/status/all.json',
    status: 'pending',
    position: 6,
    processor: 'processGenericOkComputer',
  },
  liveAvailability: {
    displayName: 'Live availability lookups',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 7,
    processor: 'processLiveAvailability',
  },
  citationService: {
    displayName: 'OCLC citation service',
    endpointUrl: 'https://searchworks.stanford.edu/status/all.json',
    status: 'pending',
    position: 8,
    processor: 'processCitationService',
  },
  myLibrary: {
    displayName: 'My Library Account',
    endpointUrl: 'https://mylibrary.stanford.edu/status/all.json',
    serviceUrl: 'https://mylibrary.stanford.edu',
    status: 'pending',
    position: 9,
    processor: 'processGenericOkComputer',
  },
};

export const statuses = {
  pending: {
    icon: '🔄',
    message: 'Checking status ...',
  },
  up: {
    icon: '✅',
    legend: 'SearchWorks is up',
    message: 'No issues',
    global_message: 'Indexes and supporting services are responding normally.',
  },
  maintenance: {
    icon: '🛠',
    legend: 'Scheduled maintenance',
    message: 'Scheduled maintenance',
    global_message: 'Services may encounter slowness or brief outages.',
  },
  performanceIssue: {
    icon: '⚠️',
    legend: 'SearchWorks is slow',
    message: 'Performance is slower than normal',
    global_message: 'The operations team has been alerted.',
  },
  issue: {
    icon: '⚠️',
    legend: 'Issue',
    message: 'Performance is slower than normal',
  },
  outage: {
    icon: '🚫',
    legend: 'Outage',
    message: 'Service is down; operations team is aware',
  },
  nonCritical: {
    icon: '⚠️',
    legend: 'SearchWorks may have an issue',
    global_message: 'One of its supporting services is affected.',
  },
  critical: {
    icon: '🚫',
    legend: 'SearchWorks is partly down',
    message: 'Service is down; operations team is aware',
    global_message: "One of its indexes is not responding. We're on it.",
  },
  fatal: {
    icon: '🚫',
    legend: 'SearchWorks is down',
    global_message: "We're on it. Check incidents for updates.",
  },
};

// SUL Maintenance windows in PST
export const maintenanceWindows = [
  {
    day: 0,
    startHour: 4,
    endHour: 8,
  },
  {
    day: 2,
    startHour: 4,
    endHour: 8,
  },
  {
    day: 4,
    startHour: 4,
    endHour: 8,
  },
  {
    day: 6,
    startHour: 4,
    endHour: 8,
  },
];

export const graphs = {
  swResponseTime: {
    title: 'Page load time',
    position: 1,
    horizons: [
      { label: '6 hours', iframeSrc: 'https://rpm.newrelic.com/public/charts/47JE5FsWnMD' },
      { label: '3 days', iframeSrc: 'https://rpm.newrelic.com/public/charts/bTisUaCTW3z' },
      { label: '30 days', iframeSrc: 'https://rpm.newrelic.com/public/charts/8RpiSIXjRBF' },
    ],
  },
  solr: {
    title: 'Catalog index (Solr) response time',
    position: 2,
    horizons: [
      { label: '6 hours', iframeSrc: 'https://rpm.newrelic.com/public/charts/fL0sJurf9eZ' },
      { label: '3 days', iframeSrc: 'https://rpm.newrelic.com/public/charts/4zYnObHnQij' },
    ],
  },
  ebsco: {
    title: 'Articles+ (EDS) response time',
    position: 3,
    horizons: [
      { label: '6 hours', iframeSrc: 'https://rpm.newrelic.com/public/charts/eZp3HEze2w8' },
      { label: '3 days', iframeSrc: 'https://rpm.newrelic.com/public/charts/9GsYfLT6hlr' },
    ],
  },
};

export const twitterFeeds = [
  { feedId: 'sulsystemstatus', label: 'Library systems' },
  { feedId: 'suleresources', label: 'Databases & e-resources' },
];
