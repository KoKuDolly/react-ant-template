import React, { Suspense, lazy } from 'react'
// antd
import Spin from 'components/spin/Spin.jsx'

export default function lazyLoad({ loader, props }) {
  const Compo = lazy(loader)
  return (
    <Suspense fallback={<Spin />}>
      <Compo {...props} />
    </Suspense>
  )
}
