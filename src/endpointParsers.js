export function processSearchworks(response) {
  return response.json().then(function(data) {
    if (typeof data.default === 'undefined') return 'outage';
    return data.default.success ? 'up' : 'outage';
  });
}
export function processSwSolr(response) {
  return response.json().then(function(data) {
    if (typeof data.default === 'undefined') return 'outage';
    return data.default.success ? 'up' : 'outage';
  });
}
export function processEbsco(response) {
  return response.json().then(function(data) {
    if (typeof data.components === 'undefined') return 'outage';
    var operationalServices = data.components.filter(service => service['name'].includes('EBSCO Discovery Service'))
    operationalServices = operationalServices.filter(service => service['status'] == 'operational')
    // Check that both EDS and EDS API are operational
    return operationalServices.length == 2 ? 'up' :'outage'
  });
}
export function processEmbed(response) {
  return response.json().then(function(data) {
    if (typeof data.default === 'undefined') return 'outage';
    return data.default.success ? 'up' : 'outage';
  });
}
export function processLibraryHours(response) {
  return response.json().then(function(data) {
    if (typeof data.default === 'undefined') return 'outage';
    return data.default.success ? 'up' : 'outage';
  });
};
export function processRequests(response) {
  return response.json().then(function(data) {
    if (typeof data.default === 'undefined') return 'outage';
    return data.default.success ? 'up' : 'outage';
  });
}
export function processLibraryDrupal(response) {
  return response.body.getReader()
    .read()
    .then((data) => {
      console.log(data);
      return data.components[1].status === 'operational' ? 'up' : 'outage';
    });
}
export function processOclcEzproxy(response) {
  console.log(response.body)
  return response.body.getReader()
    .read()
    .then((data) => {
      console.log(data);
      return data.components[1].status === 'operational' ? 'up' : 'outage';
    });
}
export function processOclcWorldcatSearch(response) {
  console.log(response.body)
  return response.body.getReader()
    .read()
    .then((data) => {
      console.log(data);
      return data.components[1].status === 'operational' ? 'up' : 'outage';
    });
}
