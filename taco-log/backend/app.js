const http = require('http');
const server = require('express')();

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

server.get('/', (req, res) => {
  res.json({ message: 'yay im running' });
});

server.listen(process.env.PORT, () => {
  console.log('yess');
});
