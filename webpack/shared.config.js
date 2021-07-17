const path = require('path');
const CssMinimizer = require('css-minimizer-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      styles: path.resolve(__dirname, '../src/styles/'),
      components: path.resolve(__dirname, '../src/components/'),
      layouts: path.resolve(__dirname, '../src/layouts'),
      routes: path.resolve(__dirname, '../src/routes/'),
      types: path.resolve(__dirname, '../src/types/'),
      utilities: path.resolve(__dirname, '../src/utilities'),
    },
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new CssMinimizer(), '...'],
  },
};
