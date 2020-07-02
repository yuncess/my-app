var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

const resolve = (dir) => path.resolve(__dirname, dir);

const config = {
  entry: {
    index: __dirname + '/index.tsx',
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'bundle-[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      // '@': resolve('src'), // 这样配置后 @ 可以指向 src 目录
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'less-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('[name].css');
      },
      allChunks: true,
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/manifest.json'),
    }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // })
  ],
};

module.exports = config;
