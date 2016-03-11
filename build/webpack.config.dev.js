var webpack = require('webpack');
var vendorChunkPlugin = require('./webpack.vendor.chunk.plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index.tsx'
  ],
  output: require('./webpack.output'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    vendorChunkPlugin
  ],
  module: {
    loaders: require('./webpack.loaders'),
    preLoaders: require('./webpack.preloaders')
  },
  resolve: require('./webpack.resolve'),
  ts: require('./webpack.ts.config')
};
