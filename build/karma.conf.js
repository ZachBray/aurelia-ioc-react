module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      'tests.webpack.js'
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      'tests.webpack.js': ['webpack'],
    },
    reporters: ['dots'],
    singleRun: true,
    autoWatch: true,
    webpack: require('./webpack.config.test'),
    webpackServer: {
      noInfo: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  });
};
