const filtered = require('./filtered-files');

filtered(process.argv[2], process.argv[3], (err, data) => {
  /* eslint-disable no-console */
  if (err) return console.error(err);
  /* eslint-enable no-console */

  data.forEach((f) => {
    /* eslint-disable no-console */
    console.log(f);
    /* eslint-enable no-console */
  });
});
