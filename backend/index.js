const http = require("node:http");

const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const randomValue = Math.floor(Math.random() * 6) + 1;
  res.end(randomValue.toString());
});

server.listen(4000);
