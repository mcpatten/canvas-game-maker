const autoprefixer = require('autoprefixer');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomSelectors = require('postcss-custom-selectors');
const postcssNesting = require('postcss-nesting');

module.exports = {
  plugins: [
    postcssCustomMedia(),
    postcssCustomSelectors(),
    postcssNesting(),
    autoprefixer,
  ],
};
