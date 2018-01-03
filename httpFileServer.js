const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  const rs = fs.createReadStream(process.argv[3]);

  rs.on('open', () => {
    rs.pipe(res);
  });
});

server.listen(+process.argv[2]);
