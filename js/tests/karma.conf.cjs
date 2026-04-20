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

let files = [
  'node_modules/popper.js/dist/umd/popper.min.js',
  'node_modules/hammer-simulator/index.js',
];

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

files = files.concat([
  'dist/js/id7-bundle.js',
]);

files.push('js/tests/unit/*.js');

conf.browsers = browsers;
conf.frameworks = frameworks;
conf.plugins = plugins;
conf.reporters = reporters;
conf.files = files;

module.exports = (karmaConfig) => {
  // possible values: karmaConfig.LOG_DISABLE || karmaConfig.LOG_ERROR || karmaConfig.LOG_WARN || karmaConfig.LOG_INFO || karmaConfig.LOG_DEBUG
  conf.logLevel = karmaConfig.LOG_ERROR || karmaConfig.LOG_WARN;
  karmaConfig.set(conf)
};
