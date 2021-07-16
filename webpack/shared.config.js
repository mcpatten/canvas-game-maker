const path = require('path');

module.exports = {
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
  },
};
