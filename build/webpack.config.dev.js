const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const { projectName } = require('../config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 2225,
    host: '127.0.0.1',
		open: true,
		historyApiFallback: true,
    proxy: {
      '/admin/**': {
        target: 'http://127.0.0.1:8082',
        // target: 'https://rain.cn.utools.club',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html/' + projectName + '.html',
      title: projectName,
    }),
  ],
})
