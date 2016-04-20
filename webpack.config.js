var path = require('path');
var ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {
  entry: {
    'index': './modules/index.ts'
  },
  output: {
    // We use CommonJS because of Meteor 1.3 specification that uses it
    libraryTarget: 'commonjs',
    path: path.join(__dirname, "src"),
    filename: "[name].js"
  },
  plugins: [
    new ExternalsPlugin({
      type: 'commonjs',
      include: __dirname + '/node_modules',
    })
  ],
  resolve: {
    root: __dirname,
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  node: {
    process: false
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: 'ts-loader', exclude: [/bower_components/, /node_modules/]}
    ]
  }
};