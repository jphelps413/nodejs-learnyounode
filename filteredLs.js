const fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
  /* eslint-disable no-console */
  if (err) return console.error(err);
  /* eslint-enable no-console */

  const re = RegExp(`.${process.argv[3]}`);

  list.forEach((f) => {
    /* eslint-disable no-console */
    if (f.match(re)) console.log(f);
    /* eslint-enable no-console */
  });
});
