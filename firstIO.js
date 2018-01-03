const fs = require('fs');

const fb = fs.readFileSync(process.argv[2]);

/* eslint-disable no-console */
console.log(fb.reduce((cnt, ch) => cnt += (ch === 10 ? 1 : 0), 0));
