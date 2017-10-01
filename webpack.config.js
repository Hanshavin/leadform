const path = require('path');

module.exports = {
  entry: './src/leadform.js',
  output: {
    filename: 'leadform.js',
    path: path.resolve(__dirname, '../../public/leadform')
  },
  module: {
    rules: [
      {
      	test: /\.js$/,
      	// exclude: /node_modules/,
      	// loader: "babel-loader",
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
