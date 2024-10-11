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
    // Check that EDS is operational (service, API)
    return operationalServices.length === 2 ? 'up' : 'outage';
  }).catch(() => 'outage');
}
export function processGenericOkComputer(response) {
  return response.json().then((data) => {
    if (typeof data.default === 'undefined') return 'outage';
    if (!data.default.success) return 'outage';

    if (Object.values(data).some((service) => !service.success)) return 'issue';

    return 'up';
  }).catch(() => 'outage');
}
export function processLiveAvailability(response) {
  return response.json().then((data) => {
    if (typeof data.default === 'undefined') return 'outage';
    return data.live_lookups.success ? 'up' : 'outage';
  }).catch(() => 'outage');
}
export function processCitationService(response) {
  return response.json().then((data) => {
    if (typeof data.default === 'undefined') return 'outage';
    return data.oclc_citation_service.success ? 'up' : 'outage';
  }).catch(() => 'outage');
}
