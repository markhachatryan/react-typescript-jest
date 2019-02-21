const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const devServer = require('./webpack.server');

module.exports = merge([
  // { devtool: 'source-map' },
  {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
  devServer(),
  parts.entryOutput('[name]'),
  parts.htmlWebpackPlugin(),
  parts.loadImagesToFile(),
  parts.LoadReactSvgToInline(),
  parts.loadCSS(),
  parts.loadFonts(),
]);
