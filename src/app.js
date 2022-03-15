import React from 'react'
import { useRoutes } from 'react-router-dom'

import Layout from '@/components/Layout/index'
import Home from '@/components/normal/home/index'
import Login from '@/components/normal/login/index'
import About from '@/pages/about/index'
import Invoice from '@/pages/about/invoice'
import Hooks from '@/pages/hooks/index'
import Class from '@/pages/class/index'

export default function App() {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'about',
          element: <About />,
          children: [
            {
              index: true,
              element: (
                <main>
                  <p>select an invoice</p>
                </main>
              ),
            },
            {
              path: ':aboutId',
              element: <Invoice />,
            },
          ],
        },
        {
          path: 'hooks',
          element: <Hooks />,
        },
        {
          path: 'class',
          element: <Class />,
        },
        {
          path: '*',
          element: (
            <main style={{ padding: '1rem' }}>
              <p>there is nothing here!</p>
            </main>
          ),
        },
      ],
    },
  ]

  const element = useRoutes(routes)

  return <>{element}</>
}
