require('dotenv').config();
const merge = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

module.exports = ({ mode }) => {
  const modeConfig = require(`./webpack/webpack.${mode}.js`);
  return merge(
    { mode },
    commonConfig,
    modeConfig,
  );
};
