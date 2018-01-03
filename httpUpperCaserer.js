const http = require('http');
const map = require('through2-map');

const server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    return response.end('only processing POSTs');
  }

  return request // the return makes eslint happy
    .pipe(map(chunk => chunk.toString().toUpperCase()))
    .pipe(response);
});

server.listen(+process.argv[2]);
