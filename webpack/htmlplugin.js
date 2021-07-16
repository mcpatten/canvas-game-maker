const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTML_TITLE = 'Game App';

module.exports = function(env) {
  return new HtmlWebpackPlugin({
    title: HTML_TITLE,
    filename: 'index.html',
    template: `../webpack/tmpl/${env}html.ejs`,
  });
};