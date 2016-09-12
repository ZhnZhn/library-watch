'use strict';
const webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
     app: "./js/index.js",
     lib: [ 
            "react", "react-dom", "reflux",
            "interact.js", "localforage",
            "chart.js",
            "timeago.js"
          ]
  },
  output: {
      path: "./app",
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
      name: 'lib'
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
        filename: '../index.html', 
        template: './template/index.ejs',
        inject: 'body' 
    })
  ]
};
