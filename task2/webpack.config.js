const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    app: './src/script.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'app.min.css',
    }),
  ],
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ],
    }, ],
  },

};