var path = require('path');
var srcDir = path.join(__dirname, '../src');
var testDir = path.join(__dirname, '../test');

module.exports = [{
  test: /\.tsx?/,
  loaders: ['babel', 'ts'],
  include: [srcDir, testDir]
}, {
  test: /\.html/,
  loaders: ['file'],
  include: [srcDir, testDir]
}];
