var http = require("http");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

http.createServer(function (request, response) {
  var headers = {
    'Content-Type': 'application/xml',
    'Accept': 'application/xml'
  };

  response.writeHead(200, headers);
  response.write(
    '<root><hello>World</hello></root>'
  , 'utf8');
  response.end();
}).listen(3002, 'localhost');
