import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import QueryNavLink from '@/components/routes/queryNavLink.js'
import { getAboutData } from './data.js'

export default function About() {
  let data = getAboutData()
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <>
      <div style={{ display: 'flex' }}>
        <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
          {/* Search Params */}
          <input
            value={searchParams.get('filter') || ''}
            onChange={(event) => {
              let filter = event.target.value
              if (filter) {
                setSearchParams({ filter })
              } else {
                setSearchParams({})
              }
            }}
          />
          {/* Active Links */}
          {data
            .filter((item) => {
              let filter = searchParams.get('filter')
              if (!filter) return true
              let name = item.name.toLowerCase()
              return name.startsWith(filter.toLowerCase())
            })
            .map((item) => (
              // Custom Behavior
              /*
               */
              <QueryNavLink
                key={item.number}
                to={`/about/${item.number}`}
                style={({ isActive }) => {
                  return {
                    display: 'block',
                    margin: '1rem 0',
                    color: isActive ? 'red' : '',
                  }
                }}
              >
                {item.name}
              </QueryNavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    </>
  )
}
