var http = require("http");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

http.createServer(function (request, response) {
  var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  response.writeHead(200, headers);
  response.write(JSON.stringify({
      "Hello":"World",
      "Method": request.method
    }), 'utf8');
  response.end();
}).listen(3001, 'localhost');
