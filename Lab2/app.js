const http = require('http');

const PORT = 80;

const listenter = (_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Some text here');
};

const server = http.createServer(listenter);
server.listen(PORT, () => {
  console.log(`Server running`);
});