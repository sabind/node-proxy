var SuperAgent = require('superagent'),
  config = require("./config.js");

var api_url = 'http://' + config.get('some_api').username + ':' + config.get('some_api').password + '@' + config.get('some_api').url;

function api_command(url, callback, error_callback) {
  SuperAgent
    .get(api_url + url)
    .set('Accept', 'application/json')
    .end(function (error, response) {
      if (response && response.ok) {
        console.log('RESPONSE: ',response.body);
        callback(JSON.stringify(response.body))
      } else {
        if (response && response.text) {
          console.log('API ERROR: ' + response.text);
          error('error');
        } else {
          console.log('UNKNOWN ERROR');
          error_callback(error);
        }
      }
    });
}

module.exports = {
  api_command: api_command
};
