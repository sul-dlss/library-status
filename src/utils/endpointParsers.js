export function processSwSolr(response) {
  return response.json().then((data) => {
    if (typeof data.default === 'undefined') return 'outage';
    if (data.sw_solr.success) {
      return data.low_app_apdex_alert.success ? 'up' : 'performanceIssue';
    }
    return 'outage';
  }).catch(() => 'outage');
}
export function processEbsco(response) {
  return response.json().then((data) => {
    if (typeof data.components === 'undefined') return 'outage';
    let operationalServices = data.components.filter(service => service.name.includes('EBSCO Discovery Service'));
    operationalServices = operationalServices.filter(service => service.status === 'operational');
    // Check that EDS is operational (service, API, UI)
    return operationalServices.length === 3 ? 'up' : 'outage';
  }).catch(() => 'outage');
}
export function processGenericOkComputer(response) {
  return response.json().then((data) => {
    if (typeof data.default === 'undefined') return 'outage';
    return data.default.success ? 'up' : 'outage';
  }).catch(() => 'outage');
}
export function processLiveAvailability(response) {
  return response.json().then((data) => {
    if (typeof data.default === 'undefined') return 'outage';
    return data.live_lookups.success ? 'up' : 'outage';
  }).catch(() => 'outage');
}
export function processLibraryDrupal(response) {
  return response.text().then((data) => {
    const lastLine = data.split('\n').pop();
    if (lastLine.match(/^all health checks successfull/i)) {
      return 'up';
    }
    return 'outage';
  }).catch(() => 'outage');
}
export function processCitationService(response) {
  return response.json().then((data) => {
    if (typeof data.default === 'undefined') return 'outage';
    return data.oclc_citation_service.success ? 'up' : 'outage';
  }).catch(() => 'outage');
}
