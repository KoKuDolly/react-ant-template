import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/login">login</Link> | <Link to="/home">home</Link> |{' '}
        <Link to="/about">About</Link> | <Link to="/hooks">Hooks</Link> |{' '}
        <Link to="/class">Class</Link>
      </nav>
      <Outlet />
    </>
  )
}
