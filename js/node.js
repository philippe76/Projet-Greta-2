const { readFile } = require("fs");
const http = require("http");
// 1 créer le server
const server = http.createServer();
// 2 déterminer les traitements du server
server.on("request", function(req, res) {
  // entête http
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
});
