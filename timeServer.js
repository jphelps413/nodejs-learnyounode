const net = require('net');

function getNow() {
  const zFill = n => n.toString().padStart(2, 0);
  const now = new Date(Date.now());

  // "YYYY-MM-DD hh:mm"
  return `${now.getFullYear()}-${
    zFill(now.getMonth() + 1)}-${
    zFill(now.getDate())} ${
    zFill(now.getHours())}:${
    zFill(now.getMinutes())}`;
}

const server = net.createServer((socket) => {
  socket.end(`${getNow()}\n`);
});

server.listen(process.argv[2]);
