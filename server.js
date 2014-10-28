var http = require("http"),
  url = require("url"),
  api_client = require("./api_client.js");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var cors_headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Request-Method': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, PUT, POST, DELETE',
  'Access-Control-Allow-Headers': '*'
};

http.createServer(function (request, response) {
  if (request.method == 'OPTIONS') {
    response.writeHead(200, cors_headers);
		response.end();
  } else {
    var uri = url.parse(request.url).pathname;
  
    var headers = {
      'Content-Type': 'application/json'
    };
    
    // Check header for X-Request-For so we know what API to call, for now we call only one API
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
  }

}).listen(process.env.PORT, process.env.IP);
