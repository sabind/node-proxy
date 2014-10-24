var http = require("http"),
  url = require("url"),
  api_client = require("./api_client.js");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

http.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname;

  api_client.get_api(uri,
    function (body) {
      //success case
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(body, "utf8");
      response.end();
    },
    function (details) {
      //error case
      response.writeHead(404);
      response.write(JSON.stringify(details), "utf8");
      response.end();
    }
  );

}).listen(process.env.PORT, process.env.IP);
