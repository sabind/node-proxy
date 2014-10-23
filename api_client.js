var SuperAgent = require('superagent'),
  config = require("./config.js");

var api_url = config.get('some_api').url;

var authentication_64_encode = new Buffer(config.get('some_api').username + ':' + config.get('some_api').password).toString('base64')

function get(url, callback, error_callback) {
  SuperAgent
    .get(api_url + url)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + authentication_64_encode)
    .end(function (error, response) {
      if (response && response.ok) {
        console.log('RESPONSE: ',response.text);
        callback(response.text)
      } else {
        if (response && response.text) {
          console.log('API ERROR: ' + response.text);
          error_callback(error);
        } else {
          console.log('UNKNOWN ERROR');
          error_callback(error);
        }
      }
    });
}

function put(url, callback, error_callback) {
  SuperAgent
    .get(api_url + url)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + authentication_64_encode)
    .end(function (error, response) {
      if (response && response.ok) {
        console.log('RESPONSE: ',reponse.text);
        callback(JSON.stringify(reponse.text))
      } else {
        if (response && response.text) {
          console.log('API ERROR: ' + response.text);
          error_callback(error);
        } else {
          console.log('UNKNOWN ERROR');
          error_callback(error);
        }
      }
    });
}

function post(url, callback, error_callback) {
  SuperAgent
    .get(api_url + url)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + authentication_64_encode)
    .end(function (error, response) {
      if (response && response.ok) {
        console.log('RESPONSE: ',reponse.text);
        callback(JSON.stringify(reponse.text))
      } else {
        if (response && response.text) {
          console.log('API ERROR: ' + response.text);
          error_callback(error);
        } else {
          console.log('UNKNOWN ERROR');
          error_callback(error);
        }
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
      if (response && response.ok) {
        console.log('RESPONSE: ',reponse.text);
        callback(JSON.stringify(reponse.text))
      } else {
        if (response && response.text) {
          console.log('API ERROR: ' + response.text);
          error_callback(error);
        } else {
          console.log('UNKNOWN ERROR');
          error_callback(error);
        }
      }
    });
}

module.exports = {
  get_api: get,
  put_api: put,
  post_api: post,
  delete_api: delete_api
};
