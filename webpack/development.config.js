const path = require('path');
const sharedConfig = require('./shared.config');
const htmlPlugin = require('./htmlplugin');
const webpack = require('webpack');
const renderers = new webpack.DefinePlugin({
  CANVAS_RENDERER: JSON.stringify(true),
  WEBGL_RENDERER: JSON.stringify(true)
});

module.exports = Object.assign(sharedConfig, {
  mode: 'development',
  target: 'web',
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './index.tsx',
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dev'),
    clean: true,
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    compress: false,
    open: true,
    hot: true,
  },
  watchOptions: {
    ignored: ['/dev/', '/dist/', '/webpack/', '/node_modules/'],
  },
  plugins: [htmlPlugin('dev'), renderers],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(tsx?|jsx?)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss'
              },
            },
          },
        ],
      },
    ],
  },
});
