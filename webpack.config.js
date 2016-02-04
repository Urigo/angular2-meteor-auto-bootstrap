var path = require('path');

module.exports = {
  entry: {
    'index': './modules/index.ts'
  },
  output: {
    // We use CommonJS because of Meteor 1.3 specification that uses it
    libraryTarget: 'commonjs',
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  externals: [
    {
      // Angular files from the source code will be available from the NPM package
      // No need to bundle them inside
      'angular2-meteor/mongo_cursor_differ': 'angular2-meteor/mongo_cursor_differ',
      'angular2/core': 'angular2/core',
      'angular2/common': 'angular2/common',
      'angular2/bootstrap': 'angular2/bootstrap',
      'angular2/src/core/change_detection/change_detection': 'angular2/src/core/change_detection/change_detection'
    }
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