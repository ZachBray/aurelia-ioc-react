var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  module: {
    loaders: require('./webpack.loaders'),
    preLoaders: require('./webpack.preloaders')
  },
  resolve: require('./webpack.resolve'),
  ts: require('./webpack.ts.config')
};
