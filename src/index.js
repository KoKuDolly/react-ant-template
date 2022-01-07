/* eslint-env es2021 */
// 没有用三方的polyfills
import './libs/polyfills/object.assign.polyfill' // 兼容ie

import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
moment.locale('zh-cn')

import App from './pages/EditTreeTable/'
import Theme from './components/theme-button/theme'

const { projectName } = require('../config/')
// console.log(projectName)

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
    <Theme />
  </ConfigProvider>,
  document.getElementById(projectName)
)
