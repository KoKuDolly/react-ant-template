const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { projectName, assetsPublicPath } = require('../config')
const utils = require('./utils')

module.exports = {
  entry: {
    [projectName]: './src/index.js',
  },
  output: {
    filename: utils.assetsPath('/js/[name].[contenthash].js'),
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: assetsPublicPath,
    // 兼容 ie
    environment: {
      arrowFunction: false, // 环境不支持箭头函数
      bigIntLiteral: false, // 不支持BigInt
      const: false, // ie 10不支持const
      destructuring: false, // 不支持解构
      dynamicImport: false, // 不支持异步import
      forOf: false, // 不支持for...of
      module: false, // 不支持module
    },
  },
  resolve: {
    alias: {
			'@': path.resolve(__dirname, '../src'),
			'@mock': path.resolve(__dirname, '../mock')
    },
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // compiles Less to CSS
          // 'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: utils.assetsPath('/img/[name].[contenthash].[ext]'),
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: utils.assetsPath('/fonts/[name].[contenthash].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: utils.assetsPath('/media/[name].[contenthash].[ext]'),
        },
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: utils.assetsPath('/css/[name].[contenthash].css'),
      chunkFilename: utils.assetsPath('/css/[id].[contenthash].css'),
    }),
  ],
}
