const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  target: 'web',
  resolve: {
    extensions: ['.js', '.json'],
  },
  entry: {
    index: [path.join(__dirname, '/src/index.js')],
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    publicPath: '/',
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i, loader: "file-loader?name=/images/[path][hash].[ext]"
      },
      {
        test: /\.svg/i, loader: "svg-url-loader"
      },
      {
        test: /\.pug/,
        loader: "pug-loader",
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/images', to: path.resolve(__dirname, 'dist/images'), flatten: false},
      { from: 'src/video', to: path.resolve(__dirname, 'dist/video'), flatten: false},
    ]),
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true,
          ecma: 6,
          output: {
            comments: false
          }
        }
      }),
    ],
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    }
  }
};

module.exports = config;
