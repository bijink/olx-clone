const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');


module.exports = {
   entry: path.resolve(__dirname, '..', './src/index.jsx'),
   resolve: {
      extensions: ['*', '.js', '.jsx'],
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },
         {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(s[ac]ss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
      ],
   },
   output: {
      path: path.resolve(__dirname, '..', './build'),
      filename: 'bundle.js',
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, '..', './public/index.html'),
      }),
      new Dotenv(),
   ]
};
