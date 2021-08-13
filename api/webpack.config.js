const path = require('path');
const package = require('./package.json');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'hal9.js',
    library: {
      name: 'hal9',
      type: 'umd2',
      export: 'default',
    },
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'none',
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(package.version),
      HAL9ENV: JSON.stringify(process.env.HAL9_ENV ? process.env.HAL9_ENV : 'dev'),
      HAL9HOST: JSON.stringify('api')
    })
  ],
  module: {
    rules: [
      {
        test: /\\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        type: 'asset',
      },
      {
        test: /(\.txt\.js$)|(\.txt$)|(\.txt\.html$)/,
        use: [
          'raw-loader',
        ],
      },
    ],
  },
};
