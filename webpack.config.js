var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.ts']
  },
  output: {
    publicPath: '/js/',
    path: path.join(__dirname, '/dist/js/'),
    filename: '[name].[hash].build.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          failOnHint: true,
          configuration: require('./tslint.json')
        }
      },
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      minChunks: 2
    }),
    new HtmlWebpackPlugin({
      // inject: false,
      template: 'index.html',
      filename: './index.html'
    }),
  ]
};