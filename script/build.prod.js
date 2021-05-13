'use strict'
// require('./check-versions')()

var ora = require('ora') // 终端 spinner
var rm = require('rimraf')
var chalk = require('chalk')
var webpack = require('webpack')
var CONFIG = require('../config/index')
var webpackConfig = require('../build/webpack.prod.config.js')
var spinner = ora('building for production...')

process.env.NODE_ENV = process.env.NODE_ENV || 'production'
console.log(process.env.NODE_ENV)

spinner.start()

rm(CONFIG.build.buildPath, (err) => {
  if (err) throw err
  console.log(chalk.cyan('build step 1'))
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    console.log(chalk.cyan('build step 2'))
    if (err) {
      throw err
    }
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
        warningsFilter: (warn) => warn.indexOf('Conflicting order') > -1,
      }) + '\n\n'
    )

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(
      chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
          "  Opening index.html over file:// won't work.\n"
      )
    )
  })
})
