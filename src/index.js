/* eslint-env es2021 */
// 没有用三方的polyfills
import './libs/polyfills/object.assign.polyfill' // 兼容ie

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
moment.locale('zh-cn')

import App from '@/components/Layout/index'
import Home from '@/components/normal/home/index'
import Login from '@/components/normal/login/index'
import About from '@/pages/about/index'
import Invoice from '@/pages/about/invoice'
import Hooks from '@/pages/hooks/index'
import Class from '@/pages/class/index'

const { projectName } = require('../config/')

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="about" element={<About />}>
            {/* Index Routes 比较难理解的一个路由 */}
            {/* Index routes render in the parent routes outlet at the parent route's path.
								Index routes match when a parent route matches but none of the other children match.
								Index routes are the default child route for a parent route.
								Index routes render when the user hasn't clicked one of the items in a navigation list yet.
						*/}
            <Route
              index
              element={
                <main>
                  <p>select an invoice</p>
                </main>
              }
            ></Route>
            <Route path=":aboutId" element={<Invoice />}></Route>
          </Route>
          <Route path="hooks" element={<Hooks />}></Route>
          <Route path="class" element={<Class />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>there is nothing here!</p>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById(projectName)
)
