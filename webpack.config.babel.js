/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      },
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader'
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./', 'index.html'),
      filename: 'index.html',
      hash: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
}
