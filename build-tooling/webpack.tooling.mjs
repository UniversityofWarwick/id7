import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import Autoprefixer from 'autoprefixer';

const autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [Autoprefixer()],
    },
    sourceMap: true,
  },
});

export const lintJS = () => ({

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
    ],
  },
});

export const transpileJS = () => ({
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

export const copyNpmDistAssets = ({ modules, dest } = {}) => {
  const pairs = modules.map(m => ({
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

export const copyLocalImages = ({ dest } = {}) => ({
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: 'images',
        globOptions: {
          ignore: ['**/*.sh', '**/src', '**/src/**/*'],
        },
        to: dest,
      }],
    }),
  ],
});

export const extractCSS = ({ resolverPaths } = {}) => ({
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
                math: 'parens-division',
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


export const minify = () => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: /@preserve|@cc_on/,
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
          }],
        },
      }),
    ],
  },
});


export const generateSourceMaps = (devtool) => ({
  devtool,
});
