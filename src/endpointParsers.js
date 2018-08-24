export function processEmbed(response) {
  response.json().then(function(data) {
  });
}
export function processLibraryHours(response) {
  // Examine the text in the response
  response.body.getReader()
    .read()
    .then((data) => {
    });
};
export function processBitly(response) {
  return response.json().then(function(data) {
    console.log(data);
    return data.components[1].status === 'operational' ? 'up' : 'outage';
  });
}
export function processRequests(response) {
  response.json().then(function(data) {
    console.log(data);
  });
}
export function processLibraryDrupal(response) {
  response.body.getReader()
    .read()
    .then((data) => {
    });
}
