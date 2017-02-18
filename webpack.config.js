const path = require('path');

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: ['whatwg-fetch', 'app.jsx', 'index.html'],
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist/app'),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules', 'app'],
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['airbnb'],
        },
      },
      {
        test: /\.(html|png)$/,
        loader: 'file?name=[path][name].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000/',
      },
    },
  },
};
