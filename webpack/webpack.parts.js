const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Prefixer = require('autoprefixer')();


// hash only for production
exports.entryOutput = name => ({
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: `${name}.js`,
  },
});

exports.htmlWebpackPlugin = (minify = {}) => {
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo',
        template: './public/index.html',
        minify,
      }),
    ],
  };
};
/** *************  CSS  ************** */
// mini-css-extract-plugin
// Output extracted CSS to a file only for Production
// #documentation https://github.com/webpack-contrib/mini-css-extract-plugin

const autoPrefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [Prefixer],
  },
});

exports.extractCSS = () => {
  const plugin = new MiniCssExtractPlugin({
    filename: '[name]-[hash].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            autoPrefix(),
            {
              loader: 'sass-loader',
              options: {
                data: "@import 'variables.scss';",
                includePaths: [path.resolve(__dirname, '../src/constants')],
              },
            },
          ],
        },
      ],
    },
    plugins: [plugin],
  };
};

// CSS to a <style> teg in header only for Development
exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include,
        exclude,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: "@import 'variables.scss';",
              includePaths: [path.resolve(__dirname, '../src/constants')],
            },
          },
        ],
      },
    ],
  },
});


/** *************  IMAGES ************** */

exports.loadImagesToFile = () => ({
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        issuer: /\.(css|scss)$/,
        use: {
          loader: 'file-loader',
          options: {
            include: path.resolve(__dirname, '../public'),
            name: 'assets/images/[name].[ext]',
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            include: path.resolve(__dirname, '../public'),
            name: 'assets/images/[name].[ext]',
          },
        },
      },
    ],
  },
});

exports.LoadReactSvgToInline = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        issuer: /\.(js|jsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svg: {
                plugins: [
                  {
                    removeTitle: false,
                    // jsx: true,
                  },
                ],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
    ],
  },
});
/** *************  FONTS ************** */

exports.loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[ext]',
          },
        },
      },
    ],
  },
});