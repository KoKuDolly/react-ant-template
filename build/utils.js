const path = require('path')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = 'static'
  const __ = path.posix.join(assetsSubDirectory, _path)
  // console.log(__)
  return __
}
