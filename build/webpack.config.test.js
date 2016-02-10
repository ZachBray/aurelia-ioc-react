var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  output: require('./webpack.output'),
  module: {
    loaders: require('./webpack.loaders')
  },
  resolve: require('./webpack.resolve')
};
