var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  watch: true,
  devtool: '#cheap-module-eval-source-map',
  entry: {
    main: './src/main',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/i,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
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
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin(),
    extractSass
  ]
};