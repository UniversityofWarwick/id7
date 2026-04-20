import path from 'path';
import { fileURLToPath } from 'url';
import { EventEmitter } from 'events';
import { createRequire } from 'module';
import WebpackNotifierPlugin from 'webpack-notifier';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';
import ZipPlugin from 'zip-webpack-plugin';
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts';

import PlayFingerprintsPlugin from './build-tooling/PlayFingerprintsPlugin.mjs';
import WatchEventsPlugin from './build-tooling/WatchEventsPlugin.mjs';

import { merge } from 'webpack-merge';
import * as tooling from './build-tooling/webpack.tooling.mjs';

const require = createRequire(import.meta.url);
const { version } = require('./package.json');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { ProvidePlugin } = webpack;

const paths = {
  ROOT: __dirname,
  ASSETS: path.join(__dirname, 'dist'),
  ASSETS_IMAGES(basePath) { return path.join(basePath, 'images'); },
  ASSETS_CSS(basePath) { return path.join(basePath, 'css'); },
  ASSETS_FONTS(basePath) { return path.join(basePath, 'fonts'); },
  ASSETS_TEMPLATES(basePath) { return path.join(basePath, 'templates'); },
  BUNDLE: './js/id7-bundle.js',
  ID7: './less/id7.less',
  ID7_2024: './less/id7-2024.less',
  ID7_DEFAULT_THEME: './less/default-theme.less',
  ID7_WIDE: './less/id7-wide.less',
  ID7_BORDERLESS: './less/id7-borderless.less',
  ID6A: './less/id6a.less',
  NODE_MODULES: path.join(__dirname, 'node_modules'),
  FONTAWESOME_FONTS: path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'),
  FONTAWESOME_PRO_FONTS: path.join(__dirname, 'node_modules/@fortawesome/fontawesome-pro/webfonts'),
  TEMPLATES: path.join(__dirname, 'templates'),
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
      new RemoveEmptyScriptsPlugin(),
      new ProvidePlugin({
        // Fix Webpack global CSP violation https://github.com/webpack/webpack/issues/6461
        global: path.join(__dirname, 'build-tooling/global.js'),
        jQuery: 'jquery',
        $: 'jquery',
      }),
      new PlayFingerprintsPlugin(),
    ]
  },
  tooling.lintJS(),
  tooling.transpileJS(),
  tooling.copyLocalImages({
    dest: paths.ASSETS_IMAGES(basePath),
  }),
  {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.FONTAWESOME_FONTS,
            to: paths.ASSETS_FONTS(basePath),
          },
          {
            from: paths.TEMPLATES,
            to: paths.ASSETS_TEMPLATES(basePath),
          },
        ],
      }),
    ],
  },
  tooling.extractCSS({
    resolverPaths: [
      paths.NODE_MODULES,
    ],
  }),
  {
    entry: {
      'js/id7-bundle': paths.BUNDLE,
      'css/id7': paths.ID7,
      'css/id7-2024': paths.ID7_2024,
      'css/id7-default-theme': paths.ID7_DEFAULT_THEME,
      'css/id7-wide': paths.ID7_WIDE,
      'css/id7-borderless': paths.ID7_BORDERLESS,
      'css/id6a': paths.ID6A,
    },
  },
]);

const productionConfig = merge([
  {
    mode: 'production',
  },
  tooling.minify(),
  tooling.generateSourceMaps('source-map'),
  {
    plugins: [
      new ZipPlugin({
        filename: `id7-${version}-dist.zip`,
        pathPrefix: 'id7',
        exclude: [/^css\/id6a/, /^images\/id6a/],
      }),
      new ZipPlugin({
        filename: `id6a-${version}-dist.zip`,
        pathPrefix: 'id6a',
        include: [/^css\/id6a/, /^images\/id6a/],
      }),
    ],
  },
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

const docsConfig = merge([
  {
    entry: {
      'docs/css/config-options': './docs/assets/css/config-options.less',
      'docs/css/subsite': './docs/assets/css/subsite.less',
      'docs/site/docs-site': './docs/assets/site/docs-site.less',
      'docs/site/site': './docs/assets/site/site.less',
    },
  },
  {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './docs/assets/js',
            to: path.join(paths.DOCS_ASSETS, 'docs/js'),
          },
          {
            from: './docs/assets/images',
            to: path.join(paths.DOCS_ASSETS, 'docs/images'),
          },
          {
            from: './docs/assets/id6',
            to: path.join(paths.DOCS_ASSETS, 'docs/id6'),
          },
          {
            from: './docs/assets/site',
            globOptions: {
              ignore: ['**/*.less', '**/*.js'],
            },
            to: path.join(paths.DOCS_ASSETS, 'docs/site'),
          },
        ],
      }),
    ],
  },
]);

export default ({ production, docs } = {}) => {
  let mainConfig;
  if (production) {
    mainConfig = merge(commonConfig(paths.ASSETS), productionConfig);
  } else if (docs) {
    mainConfig = merge(commonConfig(paths.DOCS_ASSETS), productionConfig, docsConfig);
  } else {
    mainConfig = merge(commonConfig(paths.ASSETS), developmentConfig);
  }

  return [
    merge(mainConfig, { name: 'main' }),
  ];
};
