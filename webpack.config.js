const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'demo/src/index.html'),
  filename: './index.html'
});

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'demo/src/index.js'),
  output: {
    path: path.join(__dirname, 'demo/dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [htmlPlugin],

  devServer: {
    port: 4000,
    publicPath: '/demo/dist'
  }
};
