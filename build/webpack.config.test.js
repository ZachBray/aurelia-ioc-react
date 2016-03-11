var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  output: require('./webpack.output'),
  module: {
    loaders: require('./webpack.loaders'),
    preLoaders: require('./webpack.preloaders')
  },
  resolve: require('./webpack.resolve'),
  ts: require('./webpack.ts.config')
};
