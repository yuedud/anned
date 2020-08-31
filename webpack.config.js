const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OCAWP = require('optimize-css-assets-webpack-plugin');

const devPlugins = [
  new HTMLPlugin({
    template: './public/index.html',
    minify: true,
  }),
  new MiniCssExtractPlugin({
    filename: 'lib/[name]/index.css',
  }),
];

const proPlugins = [
  new MiniCssExtractPlugin({
    filename: 'lib/[name]/index.css',
  }),
  new OCAWP(),
];

module.exports = {
  entry: {
    alert: path.join(__dirname, 'src/alert/index.jsx'),
    drawer: path.join(__dirname, 'src/drawer/index.jsx'),
    loading: path.join(__dirname, 'src/loading/index.jsx'),
    tag: path.join(__dirname, 'src/tag/index.jsx'),
    toast: path.join(__dirname, 'src/toast/index.jsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'lib/[name]/index.js',
    library: '@lijianqiang01/anned',
    libraryTarget: 'umd',
  },
  resolve: {
    mainFiles: ['index.jsx', 'index.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 99999,
            encoding: false,
          },
        }],
      },
      {
        test: /\.global\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/src',
              hmr: true,
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          'less-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: path.resolve(__dirname, './src/main.global.less'),
              injector: 'append',
            },
          },
        ],
      },
    ],
  },
  plugins: process.env.NODE_ENV === 'development' ? devPlugins : proPlugins,
  devServer: {
    port: 3456,
    open: true,
    hot: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    compress: true,
  },
  performance: {
    hints: false,
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'hidden-source-map',
};
