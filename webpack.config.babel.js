import path from 'path';
import EventEmitter from 'events';
import WebpackNotifierPlugin from 'webpack-notifier';
import RemovePlugin from 'remove-files-webpack-plugin';
import { ProvidePlugin } from 'webpack';

import PlayFingerprintsPlugin from './build-tooling/PlayFingerprintsPlugin';
import WatchEventsPlugin from './build-tooling/WatchEventsPlugin';

const merge = require('webpack-merge');
const tooling = require('./build-tooling/webpack.tooling');

const paths = {
  ROOT: __dirname,
  RELATIVE_ASSETS: 'dist',
  ASSETS: path.join(__dirname, 'dist'),
  ASSETS_IMAGES: path.join(__dirname, 'dist/images'),
  RELATIVE_ASSETS_CSS: 'dist/css',
  BUNDLE: './js/id7-bundle.js',
  STANDALONE: './js/id7-standalone.js',
  ID7: './less/id7.less',
  ID7_DEFAULT_THEME: './less/default-theme.less',
  ID6A: './less/id6a.less',
  NODE_MODULES: path.join(__dirname, 'node_modules'),
  BOOTSTRAP: path.join(__dirname, 'node_modules/bootstrap'),
  PUBLIC_PATH: '/static',
};

const commonConfig = merge([
  {
    output: {
      path: paths.ASSETS,
      publicPath: paths.PUBLIC_PATH,
    },
    node: {
      // Fix Webpack global CSP violation https://github.com/webpack/webpack/issues/6461
      global: false,
    },
    plugins: [
      // Fix Webpack global CSP violation https://github.com/webpack/webpack/issues/6461
      new ProvidePlugin({
        global: require.resolve('./build-tooling/global.js'),
      }),
      new PlayFingerprintsPlugin(),
      new RemovePlugin({
        before: {
          root: paths.ROOT,
          include: [paths.RELATIVE_ASSETS],
        },
        after: {
          root: paths.ROOT,
          test: [
            {
              folder: paths.RELATIVE_ASSETS_CSS,
              method: filePath => (new RegExp(/.*\.js.*$/, 'm').test(filePath)),
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        bootstrap: paths.BOOTSTRAP,
      },
    },
  },
  tooling.lintJS(),
  tooling.transpileJS({
    entry: {
      'js/id7-bundle': paths.BUNDLE,
      'js/id7-standalone': paths.STANDALONE,
    },
  }),
  tooling.copyLocalImages({
    dest: paths.ASSETS_IMAGES,
  }),
  tooling.extractCSS({
    entry: {
      'css/id7': paths.ID7,
      'css/id7-default-theme': paths.ID7_DEFAULT_THEME,
      'css/id6a': paths.ID6A,
    },
    resolverPaths: [
      paths.NODE_MODULES,
    ],
  }),
]);

const productionConfig = merge([
  {
    mode: 'production',
  },
  tooling.minify(),
  tooling.generateSourceMaps('source-map'),
]);

const developmentConfig = merge([
  {
    mode: 'development',
    plugins: [
      new WebpackNotifierPlugin(),
      new WatchEventsPlugin({ emitter: new EventEmitter() }),
    ],
  },
  tooling.generateSourceMaps('cheap-module-source-map'),
]);

module.exports = ({ production } = {}) => {
  if (production) {
    return merge(commonConfig, productionConfig);
  } else {
    return merge(commonConfig, developmentConfig);
  }
};
