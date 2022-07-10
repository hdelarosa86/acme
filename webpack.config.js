const path = require('path');

const config = {
  mode: 'production',
  entry: './src/app/root.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
    sourceMapFilename: 'app.js.map',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
