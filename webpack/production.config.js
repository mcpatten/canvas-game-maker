const path = require('path');
const htmlPlugin = require('./htmlplugin');
const sharedConfig = require('./shared.config');
const webpack = require("webpack");
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
  plugins: [htmlPlugin('prod'), renderers],
  performance: {
    hints: 'warning',
    maxAssetSize: 122880,
    maxEntrypointSize: 307200,
  },
});
