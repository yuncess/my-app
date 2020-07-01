var path = require('path');
const webpack = require('webpack');

const vendors = ['react', 'react-dom', 'react-router', 'plume2'];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]'
  },
  entry: {
    vendor: vendors
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'node_modules/plume2')],
        loader: 'babel-loader?cacheDirectory=true'
      }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'dist/manifest.json',
      name: '[name]',
      context: __dirname
    })
  ]
};
