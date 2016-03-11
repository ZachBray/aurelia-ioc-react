var path = require('path');
var modulesDir = path.join(__dirname, '..', 'node_modules');

module.exports = [{
  test: /\.tsx?/,
  loaders: ['tslint'],
  exclude: [modulesDir]
}];

