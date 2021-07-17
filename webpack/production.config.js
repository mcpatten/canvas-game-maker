const path = require('path');
const sharedConfig = require('./shared.config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPlugin = require('./htmlplugin');
const webpack = require('webpack');
const renderers = new webpack.DefinePlugin({
  CANVAS_RENDERER: JSON.stringify(true),
  WEBGL_RENDERER: JSON.stringify(true)
});

module.exports = Object.assign(sharedConfig, {
  mode: 'production',
  target: 'web',
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './index.tsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 122880,
    maxEntrypointSize: 307200,
  },
  plugins: [htmlPlugin('prod'), renderers, new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  })],
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
          MiniCssExtractPlugin.loader,
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentHashFunction: 'MD5',
                localIdentName: '[hash:base64:8]',
              },
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
