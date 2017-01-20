var purge = require('css-purge-alt/lib/css-purge');

module.exports = function (css, map) {
  return purge(null, null, null, css);
};
