const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  /* eslint-disable no-console */
  if (!err) console.log(data.split('\n').length - 1);
});

