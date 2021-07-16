const path = require('path');
const htmlPlugin = require('./htmlplugin');
const webpack = require("webpack");
const renderers = new webpack.DefinePlugin({
  CANVAS_RENDERER: JSON.stringify(true),
  WEBGL_RENDERER: JSON.stringify(true)
});

module.exports = {
  mode: 'production',
  clean: true,
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
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
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     ident: 'postcss',
          //     plugins: () => [
                
          //     ],
          //   },
          // },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, '../src/components/'),
      layouts: path.resolve(__dirname, '../src/layouts'),
      routes: path.resolve(__dirname, '../src/routes/'),
      types: path.resolve(__dirname, '../src/types/'),
      utilities: path.resolve(__dirname, '../src/utilities'),
    },
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [htmlPlugin('prod'), renderers],
};