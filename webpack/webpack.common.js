const path = require('path');
const merge = require('webpack-merge');

const NODE_PATH = process.env.NODE_PATH || ' ';

module.exports = merge([
  {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        // { enforce: "pre",
        //   test: /\.js$/,
        //   loader: "source-map-loader"
        // },
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   use: ['babel-loader'],
        // },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', 'css', 'scss', 'png', 'jpeg', ".ts", ".tsx", ".js", ".json"],
      modules: ['node_modules', "../" + NODE_PATH],
      alias: {
        assets: path.resolve(__dirname, '../public/assets'),
      },
    },
    stats: {
      entrypoints: false,
      children: false,
    }
  },
]);
