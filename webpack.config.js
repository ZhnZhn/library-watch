'use strict';
const path = require('path')
    , webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    lib: [
           "react", "react-dom", "reflux",
           "interact.js", "localforage",
           "chart.js",
           "timeago.js",
           "raven-js",
           "classnames",
           "browser-filesaver", "lodash.merge"
         ],
     app: path.resolve('js', 'index.js')
  },
  output: {
      path: path.resolve('app'),
      filename: "[name]_[chunkhash].js",
      chunkFilename: "[chunkhash].js"
  },
  resolve: {
    modulesDirectories: ['local_modules', 'node_modules']
  },
  plugins : [
    new webpack.DefinePlugin({
       'process.env' : {
          'NODE_ENV': JSON.stringify('production')
       }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['lib', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
           warnings: false
        },
        output: {
           comments: false
        }
    }),
    new HtmlWebpackPlugin({
        filename: path.resolve('index.html'),
        template: path.resolve('template','index.ejs'),
        inject: false
    })
  ]
};
