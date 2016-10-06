var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: debug ? "eval" : null,
  entry: [
    "webpack-hot-middleware/client",
    "./app/client/index.js"
  ],
  output: {
    path: path.join(__dirname, "app/dist"),
    filename: "bundle.js",
    publicPath: '/static/'
  },
  plugins: debug ?
  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false, sourcemap: false
    })
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app/client')
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }
    ]
  }
}