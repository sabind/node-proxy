var http = require("http"),
  url = require("url"),
  api_client = require("./api_client.js"),
  config = require("./config.js");

var cors_headers = config.get('some_api').cors_headers;

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
      api_client.get_api(uri, headers,
        function (proxy_response) {
          proxy_response.headers['Access-Control-Allow-Origin'] = cors_headers['Access-Control-Allow-Origin'];
          proxy_response.headers['Access-Control-Request-Method'] = cors_headers['Access-Control-Request-Method'];
          proxy_response.headers['Access-Control-Allow-Methods'] = cors_headers['Access-Control-Allow-Methods'];
          proxy_response.headers['Access-Control-Allow-Headers'] = cors_headers['Access-Control-Allow-Headers'];

          response.writeHead(proxy_response.status, proxy_response.headers);
          if (proxy_response.text) {
            response.write(proxy_response.text, "utf8");
          }
          response.end();
        },
        function (details) {
          response.writeHead(500);
          response.write(JSON.stringify(details), "utf8");
          response.end();
        }
      );
      break;
    case 'PUT':
      api_client.get_api(uri, headers,
        function (proxy_response) {
          proxy_response.headers['Access-Control-Allow-Origin'] = cors_headers['Access-Control-Allow-Origin'];
          proxy_response.headers['Access-Control-Request-Method'] = cors_headers['Access-Control-Request-Method'];
          proxy_response.headers['Access-Control-Allow-Methods'] = cors_headers['Access-Control-Allow-Methods'];
          proxy_response.headers['Access-Control-Allow-Headers'] = cors_headers['Access-Control-Allow-Headers'];

          response.writeHead(proxy_response.status, proxy_response.headers);
          if (proxy_response.text) {
            response.write(proxy_response.text, "utf8");
          }
          response.end();
        },
        function (details) {
          response.writeHead(500);
          response.write(JSON.stringify(details), "utf8");
          response.end();
        }
      );
      break;
    case 'POST':
      api_client.get_api(uri, headers,
        function (proxy_response) {
          proxy_response.headers['Access-Control-Allow-Origin'] = cors_headers['Access-Control-Allow-Origin'];
          proxy_response.headers['Access-Control-Request-Method'] = cors_headers['Access-Control-Request-Method'];
          proxy_response.headers['Access-Control-Allow-Methods'] = cors_headers['Access-Control-Allow-Methods'];
          proxy_response.headers['Access-Control-Allow-Headers'] = cors_headers['Access-Control-Allow-Headers'];

          response.writeHead(proxy_response.status, proxy_response.headers);
          if (proxy_response.text) {
            response.write(proxy_response.text, "utf8");
          }
          response.end();
        },
        function (details) {
          response.writeHead(500);
          response.write(JSON.stringify(details), "utf8");
          response.end();
        }
      );
      break;
    case 'DELETE':
      api_client.get_api(uri, headers,
        function (proxy_response) {
          proxy_response.headers['Access-Control-Allow-Origin'] = cors_headers['Access-Control-Allow-Origin'];
          proxy_response.headers['Access-Control-Request-Method'] = cors_headers['Access-Control-Request-Method'];
          proxy_response.headers['Access-Control-Allow-Methods'] = cors_headers['Access-Control-Allow-Methods'];
          proxy_response.headers['Access-Control-Allow-Headers'] = cors_headers['Access-Control-Allow-Headers'];

          response.writeHead(proxy_response.status, proxy_response.headers);
          if (proxy_response.text) {
            response.write(proxy_response.text, "utf8");
          }
          response.end();
        },
        function (details) {
          response.writeHead(500);
          response.write(JSON.stringify(details), "utf8");
          response.end();
        }
      );
      break;
  }
}).listen(process.env.PORT, process.env.IP);
