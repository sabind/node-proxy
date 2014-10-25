var SuperAgent = require('superagent'),
    config = require("./config.js");

var api_url = config.get('some_api').url;
var authentication_64_encode = new Buffer(config.get('some_api').username + ':' + config.get('some_api').password).toString('base64')

function get_api(url, callback, error_callback) {
  SuperAgent
    .get(api_url + url)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + authentication_64_encode)
    .end(function (error, response) {
      if (response) {
        console.log('RESPONSE: ',response);
        callback(response)
      } else {
        console.log('UNKNOWN ERROR');
        error_callback(error);
      }
    });
}

function put_api(url, callback, error_callback) {
  SuperAgent
    .get(api_url + url)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + authentication_64_encode)
    .end(function (error, response) {
      if (response) {
        console.log('RESPONSE: ',response);
        callback(response)
      } else {
        console.log('UNKNOWN ERROR');
        error_callback(error);
      }
    });
}

function post_api(url, callback, error_callback) {
  SuperAgent
    .get(api_url + url)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + authentication_64_encode)
    .end(function (error, response) {
      if (response) {
        console.log('RESPONSE: ',response);
        callback(response)
      } else {
        console.log('UNKNOWN ERROR');
        error_callback(error);
      }
    });
}

function delete_api(url, callback, error_callback) {
  SuperAgent
    .get(api_url + url)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + authentication_64_encode)
    .end(function (error, response) {
      if (response) {
        console.log('RESPONSE: ',response);
        callback(response)
      } else {
        console.log('UNKNOWN ERROR');
        error_callback(error);
      }
    });
}

module.exports = {
  get_api: get_api,
  put_api: put_api,
  post_api: post_api,
  delete_api: delete_api
};
