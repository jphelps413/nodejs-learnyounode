const fs = require('fs');

module.exports = function eslintHappy(dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);

    const re = RegExp(`.${ext}$`);

    const res = [];
    list.forEach((f) => {
      if (f.match(re)) res.push(f);
    });

    return callback(null, res);
  });
};
