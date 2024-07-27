const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // Remove Babel loader configuration
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Add these loaders for CSS
      },
    ],
  },
  mode: 'development',
};