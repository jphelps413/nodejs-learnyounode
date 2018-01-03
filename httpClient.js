const http = require('http');
/* eslint-disable no-console */

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => { console.log(data); });
  response.on('error', console.error);
}).on('error', console.error);
