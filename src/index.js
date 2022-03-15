/* eslint-env es2021 */
// 没有用三方的polyfills
import './libs/polyfills/object.assign.polyfill' // 兼容ie

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
moment.locale('zh-cn')

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import App from './app'

const { projectName } = require('../config/')

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById(projectName)
)
