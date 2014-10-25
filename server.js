var http = require("http"),
  url = require("url"),
  api_client = require("./api_client.js");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

http.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname;

  var headers = {
    'Content-Type': 'application/json'
  }
  
  // Check header for X-Request-For so we know what API to call, for now we call only one API
  api_client.get_api(uri,
    function (response) {
      response.writeHead(response.code, headers);
      response.write(response.text, "utf8");
      response.end();
    },
    function (details) {
      response.writeHead(500);
      response.write(JSON.stringify(details), "utf8");
      response.end();
    }
  );

}).listen(process.env.PORT, process.env.IP);
