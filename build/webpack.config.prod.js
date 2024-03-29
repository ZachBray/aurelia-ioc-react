var webpack = require('webpack');
var vendorChunkPlugin = require('./webpack.vendor.chunk.plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.tsx'
  ],
  output: require('./webpack.output'),
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    vendorChunkPlugin
  ],
  module: {
    loaders: require('./webpack.loaders'),
    preLoaders: require('./webpack.preloaders')
  },
  resolve: require('./webpack.resolve'),
  ts: require('./webpack.ts.config')
};
