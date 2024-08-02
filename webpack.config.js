const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './client/src/js/index.js',
    install: './client/src/js/install.js',
    database: './client/src/js/database.js',
    editor: './client/src/js/editor.js',
    header: './client/src/js/header.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Your future Text Editor',
      short_name: 'JATE',
      description: 'Just a Text Editor',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      start_url: '/',
      icons: [
        {
          src: path.resolve(__dirname, 'client/src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('images', 'logos'),
        },
      ],
    }),
    new InjectManifest({
      swSrc: './client/src/src-sw.js',
      swDest: 'sw.js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
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