module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: 10,
        },
        useBuiltIns: 'usage', // babel会按需加载polyfill，不需要全局入口引入，也无须手动引入
        corejs: '3.12.0', // 版本号最好具体到小版本，对应项目中core-js的版本
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'classic',
      },
    ],
  ]
  const plugins = [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css', // `style: true` 会加载 less 文件
      },
    ],
    // @babel/preset-env 预设包含，无须加载了，预设就是插件的集合，方便使用的
    // '@babel/plugin-syntax-jsx',
    // '@babel/plugin-transform-react-jsx',
    // '@babel/plugin-transform-react-display-name',
    // @babel/preset-env 开启development模式会加载下面这俩插件
    // '@babel/plugin-transform-react-jsx-self',
    // '@babel/plugin-transform-react-jsx-source'
  ]

  return {
    presets,
    plugins,
  }
}
