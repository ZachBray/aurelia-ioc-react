var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");

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
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: require('./webpack.loaders'),
    preLoaders: require('./webpack.preloaders')
  },
  resolve: require('./webpack.resolve'),
  ts: require('./webpack.ts.config')
};
