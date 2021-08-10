'use strict'

const path = require('path')
, webpack = require('webpack')
, babelDevConfig = require('./babel.dev.config')
, ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
, HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  cache: true,
  entry: {
    app: path.resolve('src', 'index.jsx')
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8084
  },

  output: {
      path: path.resolve('dev'),
      filename: "[name]_dev_[contenthash].js",
      chunkFilename: "[name]_dev_[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            ...babelDevConfig
          }
        },
        include: [
          path.join(__dirname),
          path.join(__dirname, "src"),
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: path.resolve('dev', 'index.html'),
        template: path.resolve('template', 'index.ejs'),
        inject: false
    })
  ]
}
