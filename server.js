var http = require("http"),
  url = require("url"),
  api_client = require("./api_client.js"),
  config = require("./config.js");

var cors_headers = config.get('api_list').some_api.cors_headers;

// Load up the Proxy Servers
var api_names = config.get('api_list');

api_list = {};
for (var i = 0; i < api_names.length; i++) {
  api_list[api_names[i]] = require('./' + api_names[i] + '.js');
}

function select_api(request_headers) {
  return api_list[request_headers['X-Request-For']];
}

function successful_proxy(proxy_response, response) {
  proxy_response.headers['Access-Control-Allow-Origin'] = cors_headers['Access-Control-Allow-Origin'];
  proxy_response.headers['Access-Control-Request-Method'] = cors_headers['Access-Control-Request-Method'];
  proxy_response.headers['Access-Control-Allow-Methods'] = cors_headers['Access-Control-Allow-Methods'];
  proxy_response.headers['Access-Control-Allow-Headers'] = cors_headers['Access-Control-Allow-Headers'];

  response.writeHead(proxy_response.status, proxy_response.headers);
  if (proxy_response.text) {
    response.write(proxy_response.text, "utf8");
  }
  response.end();
}

function failed_proxy(error, response) {
  response.writeHead(500);
  response.write(JSON.stringify(error), "utf8");
  response.end();
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

http.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname;

  var headers = {
    'Content-Type': 'application/json'
  };

  switch (request.method) {
    case 'OPTIONS':
      response.writeHead(200, cors_headers);
      response.end();
      break;
    case 'GET':
      select_api(request.headers).get_api(uri, headers,
        function (proxy_response){ successful_proxy(proxy_response, response)},
        function (error) { failed_proxy(error, response)}
      );
      break;
    case 'PUT':
      select_api(request.headers).get_api(uri, headers,
        function (proxy_response){ successful_proxy(proxy_response, response)},
        function (error) { failed_proxy(error, response)}
      );
      break;
    case 'POST':
      select_api(request.headers).get_api(uri, headers,
        function (proxy_response){ successful_proxy(proxy_response, response)},
        function (error) { failed_proxy(error, response)}
      );
      break;
    case 'DELETE':
      select_api(request.headers).get_api(uri, headers,
        function (proxy_response){ successful_proxy(proxy_response, response)},
        function (error) { failed_proxy(error, response)}
      );
      break;
  }
}).listen(process.env.PORT, process.env.IP);
