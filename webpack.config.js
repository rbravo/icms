const path = require('path');

module.exports = {
  entry: './indexWeb.js', // Replace this with the entry point of your app
  output: {
    filename: 'icms.js',
    path: path.resolve(__dirname, 'dist'), // Replace 'dist' with your desired output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};