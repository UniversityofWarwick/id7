import path from 'path';
import EventEmitter from 'events';
import WebpackNotifierPlugin from 'webpack-notifier';
import RemovePlugin from 'remove-files-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { ProvidePlugin } from 'webpack';

import PlayFingerprintsPlugin from './build-tooling/PlayFingerprintsPlugin';
import WatchEventsPlugin from './build-tooling/WatchEventsPlugin';

const merge = require('webpack-merge');
const tooling = require('./build-tooling/webpack.tooling');

const paths = {
  ROOT: __dirname,
  ASSETS: path.join(__dirname, 'dist'),
  ASSETS_IMAGES(basePath) { return path.join(basePath, 'images'); },
  ASSETS_CSS(basePath) { return path.join(basePath, 'css'); },
  ASSETS_FONTS(basePath) { return path.join(basePath, 'fonts'); },
  BUNDLE: './js/id7-bundle.js',
  HOMEPAGE_JS: './js/external-homepage/hp.js',
  ID7: './less/id7.less',
  ID7_DEFAULT_THEME: './less/default-theme.less',
  ID6A: './less/id6a.less',
  NODE_MODULES: path.join(__dirname, 'node_modules'),
  BOOTSTRAP: path.join(__dirname, 'node_modules/bootstrap'),
  FONTAWESOME_FONTS: path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'),
  PUBLIC_PATH: '/static',
  DOCS_ASSETS: path.join(__dirname, 'docs/dist'),
};

const commonConfig = basePath => merge([
  {
    output: {
      path: basePath,
      publicPath: paths.PUBLIC_PATH,
    },
    node: {
      // Fix Webpack global CSP violation https://github.com/webpack/webpack/issues/6461
      global: false,
    },
    plugins: [
      new ProvidePlugin({
        // Fix Webpack global CSP violation https://github.com/webpack/webpack/issues/6461
        global: require.resolve('./build-tooling/global.js'),
        jQuery: 'jquery',
        $: 'jquery',
      }),
      new PlayFingerprintsPlugin(),
      new RemovePlugin({
        before: {
          root: paths.ROOT,
          include: [basePath],
        },
        after: {
          root: paths.ROOT,
          test: [
            {
              folder: paths.ASSETS_CSS(basePath),
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
      'external-homepage/js/hp': paths.HOMEPAGE_JS,
    },
  }),
  tooling.copyLocalImages({
    dest: paths.ASSETS_IMAGES(basePath),
  }),
  {
    plugins: [
      new CopyWebpackPlugin([{
        from: paths.FONTAWESOME_FONTS,
        to: paths.ASSETS_FONTS(basePath),
      }]),
    ],
  },
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

module.exports = ({ production, docs } = {}) => {
  if (production) {
    return merge(commonConfig(paths.ASSETS), productionConfig);
  } else if (docs) {
    return merge(commonConfig(paths.DOCS_ASSETS), developmentConfig);
  } else {
    return merge(commonConfig(paths.ASSETS), developmentConfig);
  }
};
