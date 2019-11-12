const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const iconsPath = path.resolve(__dirname, '..', 'static', 'icons');

module.exports = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../components/'),
      styles: path.resolve(__dirname, '../styles/'),
      static: path.resolve(__dirname, '../static/'),
      lib: path.resolve(__dirname, '../lib/'),
      layouts: path.resolve(__dirname, '../layouts/'),
      icons: path.resolve(__dirname, '../static/icons/'),
      store: path.resolve(__dirname, '../store/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { url: true, importLoaders: 1 } },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { url: true } },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: true }],
              },
            },
          },
        ],
        include: [iconsPath],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
        ],
      },
    ],
  },
};
