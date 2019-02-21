const merge = require('webpack-merge');
const parts = require('./webpack.parts');

module.exports = merge([
  parts.entryOutput('[name]-[hash]'),
  parts.htmlWebpackPlugin({
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
  }),
  parts.extractCSS(),
  parts.LoadReactSvgToInline(),
  parts.loadImagesToFile(),
  parts.loadFonts(),
]);
