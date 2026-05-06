/* eslint-env node */
/* eslint no-process-env: 0 */
process.env.CHROME_BIN = require('puppeteer').executablePath();

const browsers = [
  // 'PhantomJS',
  'ChromeHeadlessNoSandbox',
];

const frameworks = [
  'qunit',
  'sinon',
];

const plugins = [
  'karma-qunit',
  'karma-sinon',
  'karma-junit-reporter',
];

const reporters = ['dots'];

const conf = {
  basePath: '../..',
  port: 9876,
  colors: true,
  autoWatch: false,
  singleRun: true,
  concurrency: Infinity,
  client: {
    qunit: {
      showUI: true,
    },
  },
  junitReporter: {
    outputDir: '_build/test-reports',
  },
  customLaunchers: {
    ChromeHeadlessNoSandbox: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox']
    }
  }
};

plugins.push(
  // 'karma-phantomjs-launcher',
  'karma-chrome-launcher',
);

conf.browsers = browsers;
conf.frameworks = frameworks;
conf.plugins = plugins;
conf.reporters = reporters;
conf.files = [
  'dist/js/id7-bundle.js',
  'js/tests/unit/*.js'
];

module.exports = (karmaConfig) => {
  // possible values: karmaConfig.LOG_DISABLE || karmaConfig.LOG_ERROR || karmaConfig.LOG_WARN || karmaConfig.LOG_INFO || karmaConfig.LOG_DEBUG
  conf.logLevel = karmaConfig.LOG_ERROR || karmaConfig.LOG_WARN;
  karmaConfig.set(conf)
};
