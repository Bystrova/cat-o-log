const path = require('path');
const webpack = require('webpack');
const isDevelop = true;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./config/helpers');

module.exports = {
  entry: {
    polyfill: './src/polyfill.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
    inline: true,
    historyApiFallback: true,
    // stats: 'minimal'
  },
  watch: true,

  resolve: {
    extensions: ['.ts', '.js'],
  },
  
  module: {
    rules: [{
        test: /\.ts$/,
        loaders: [{
          loader: 'ts-loader',
        }, 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'),
      {}
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfill']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
