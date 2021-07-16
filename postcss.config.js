const autoprefixer = require('autoprefixer');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomSelectors = require('postcss-custom-selectors');
const postcssImageSetFunction = require('postcss-image-set-function');
const postcssNesting = require('postcss-nesting');

module.exports = {
  plugins: [
    postcssCustomMedia(),
    postcssCustomSelectors(),
    postcssImageSetFunction({oninvalid: 'warning'}),
    postcssNesting(),
    autoprefixer,
  ],
};
