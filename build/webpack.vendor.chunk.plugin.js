var webpack = require('webpack');

module.exports = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', function(module){
  return module.resource && module.resource.indexOf('node_modules') !== -1;
})
