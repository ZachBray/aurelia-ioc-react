module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'tests.webpack.js', watched: false },
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      'tests.webpack.js': ['webpack'],
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: require('./webpack.config.test'),
    webpackServer: {
      noInfo: true
    }
  });
};
