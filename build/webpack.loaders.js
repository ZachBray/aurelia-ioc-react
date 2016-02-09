var path = require('path');
var srcDir = path.join(__dirname, '../src');

module.exports = [{
  test: /\.jsx?/,
  loaders: ['babel'],
  include: srcDir
}, {
  test: /\.html/,
  loaders: ['file'],
  include: srcDir
}];
