const http = require('http');
const url = require('url');

http.createServer((request, response) => {
  if (request.method !== 'GET') {
    response.end('only routing GETs');
  }

  const URL = url.parse(request.url, true); // true == parse iso field
  const date = new Date(URL.query.iso);
  let tOut = null;

  if (URL.pathname === '/api/parsetime') {
    tOut = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  } else if (URL.pathname === '/api/unixtime') {
    tOut = { unixtime: date.getTime() };
  }

  if (tOut) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(tOut));
  } else {
    response.writeHead(404);
    response.end(`unkown route [${URL.pathname}]`);
  }
}).listen(process.argv[2]);
