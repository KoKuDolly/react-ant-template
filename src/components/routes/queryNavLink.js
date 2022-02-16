// Custom Behavior
// 这里只是自定义行为的一个例子，还有很多组合可以实现
import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}
