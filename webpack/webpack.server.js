const path = require('path');

module.exports = () => ({
  devServer: {
    stats: 'errors-only', // Display only errors to reduce the amount of output.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: false, // Open the page in browser
    historyApiFallback: true, // HTML5 History API based routing
    // overlay: true, // show error in browser window
    contentBase: './public',
    hot: true,
    inline: true,
  },
});
