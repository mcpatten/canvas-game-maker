const path = require('path');
const htmlPlugin = require('./htmlplugin');
const sharedConfig = require('./shared.config');
const webpack = require("webpack");
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
  plugins: [htmlPlugin('dev'), renderers],
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
});
