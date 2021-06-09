// const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin')
const baseConfig = require('./webpack.config.base')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { projectName } = require('../config')

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5, // 兼容ie
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          // For webpack@4
          // test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    // minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html/' + projectName + '.html',
      filename: `${projectName}.html`,
      title: projectName,
    }),
    new ZipPlugin({
      path: path.resolve(__dirname, '..'),
      filename: `${projectName}.zip`,
    }),
    // new MiniCssExtractPlugin({
    //   ignoreOrder: true,
    //   filename: '[name].[contenthash].css',
    //   chunkFilename: '[id].[contenthash].css',
    // }),
  ],
})
