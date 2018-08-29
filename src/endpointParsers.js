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
