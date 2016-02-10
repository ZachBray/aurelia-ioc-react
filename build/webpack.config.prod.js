var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");

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
    })
  ],
  module: {
    loaders: require('./webpack.loaders')
  },
  resolve: require('./webpack.resolve')
};
