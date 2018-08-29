const webpack = require('webpack');
import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require('path');

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  resolve: {
    extensions: ['.js', '.json', '.graphql'],
  },
  entry: {
    index: [
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '/src/index.js'),
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'dist.js',
    publicPath: '/',
  },
  watchOptions: {
    ignored: ['server/temp/*', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx*$/,
        include: path.join(__dirname, '/src'),
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '/src'),
        loader: "style-loader!css-loader!sass-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader/locals?module&localIdentName=[name]__[local]___[hash:base64:5]",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=[path][name].[ext]"
      },
      {
        test: /\.pug/,
        loader: "pug-loader",
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
    })
  ],
};

module.exports = config;
