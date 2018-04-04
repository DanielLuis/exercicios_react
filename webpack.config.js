const webpack = require('webpack')
// const ExtractTextPlugin =   require('extract-text-webpack-plugin')
// const path = require('path')

module.exports = {
    // devtool: 'source-map',
    entry: './ex/index.jsx',
    output : {
        path : __dirname + '/public',
        filename : './bundle.js'
    },
    devServer : {
        port : 8080,
        contentBase : './public'
    },
    resolve : {
        extensions : ['','.js','.jsx']

    },
    // plugins :[
    //      new ExtractTextPlugin("app.css")
    // ],
    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react']
            }
          }
        ]
      }    
}
