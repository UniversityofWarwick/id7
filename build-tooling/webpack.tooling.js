/* eslint-disable import/no-extraneous-dependencies */
import CopyWebpackPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Autoprefixer from 'autoprefixer';
import CssNano from 'cssnano';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import PostCssSafeParser from 'postcss-safe-parser';
import ESLintPlugin from 'eslint-webpack-plugin';

const autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: () => [Autoprefixer()],
    },
    sourceMap: true,
  },
});

const lintJS = () => ({
  plugins: [new ESLintPlugin()],
});

const transpileJS = () => ({
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
    ],
  },
});

const copyNpmDistAssets = ({ modules, dest } = {}) => {
  const pairs = modules.map((m) => ({
    from: `node_modules/${m}/dist`,
    to: `${dest}/${m}/[1]`,
    test: new RegExp('.*/dist/(.+/[-.a-z0-9@]+\\.(otf|eot|woff|woff2|ttf|js|js.map|gif|png|jpg|svg|ico))$', 'i'),
  }));

  return {
    plugins: [
      new CopyWebpackPlugin({ patterns: pairs }),
    ],
  };
};

const copyLocalImages = ({ dest } = {}) => ({
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: 'images',
        globOptions: { ignore: ['**/*.sh', '**/src', '**/src/**/*'] },
        to: dest,
      }],
    }),
  ],
});

const extractCSS = ({ resolverPaths } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
            },
          },
          autoprefix(),
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
            },
          },
          autoprefix(),
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                paths: resolverPaths,
                relativeUrls: false,
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
});

const minify = () => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        cache: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: /@preserve|@cc_on/,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: CssNano,
        cssProcessorOptions: {
          parser: PostCssSafeParser,
          discardComments: {
            removeAll: true,
          },
        },
        canPrint: true,
      }),
    ],
  },
});

const generateSourceMaps = (devtool) => ({
  devtool,
});

export {
  copyNpmDistAssets,
  copyLocalImages,
  lintJS,
  transpileJS,
  extractCSS,
  minify,
  generateSourceMaps,
};
