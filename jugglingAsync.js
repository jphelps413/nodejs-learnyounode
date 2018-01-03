const http = require('http');

/* "Official Solution" is simpler, but I wanted to tinker with Promises. */
const getPromise = function makePromis(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let reply = '';
      response.setEncoding('utf8');
      response.on('data', (data) => { reply += data; });
      response.on('end', () => {
        resolve(reply);
      });
      response.on('error', (e) => {
        reject(e);
      });
    }).on('error', (e) => {
      reject(e);
    });
  });
};

const promises = [];

for (let i = 2; process.argv[i] !== undefined; i += 1) {
  promises.push(getPromise(process.argv[i]));
}

/* eslint-disable no-console */
Promise.all(promises)
  .then(() => {
    promises.forEach((p) => {
      p.then((v) => {
        console.log(v);
      });
    });
  })
  .catch(err => console.log('Caught', err));

