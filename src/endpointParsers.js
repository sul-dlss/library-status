export function processEmbed(response) {
  response.json().then(function(data) {
    return data.default.success ? 'up' : 'outage';
  });
}
export function processLibraryHours(response) {
  return response.json().then(function(data) {
    console.log(data);
    return data.default.success ? 'up' : 'outage';
  });
};
export function processRequests(response) {
  response.json().then(function(data) {
    console.log(data);
    return data.components[1].status === 'operational' ? 'up' : 'outage';
  });
}
export function processLibraryDrupal(response) {
  response.body.getReader()
    .read()
    .then((data) => {
      return data.components[1].status === 'operational' ? 'up' : 'outage';
    });
}
