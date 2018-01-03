const http = require('http');
/* eslint-disable no-console */

http.get(process.argv[2], (response) => {
  let reply = '';
  response.setEncoding('utf8');
  response.on('data', (data) => { reply += data; });
  response.on('error', console.error);
  response.on('end', () => {
    console.log(reply.length);
    console.log(reply);
  });
}).on('error', console.error);
