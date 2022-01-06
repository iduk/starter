import React from 'react'
import { Link, Outlet, useParams, useLocation } from 'react-router-dom'

export default function SubIndex() {
  const { subId } = useParams()
  const location = useLocation()

  let subNavlist = [
    { path: '/sub', title: 'Index' },
    { path: 'about', title: 'About' },
    { path: 'tab1', title: 'Tab1' },
    { path: 'tab2', title: 'Tab2' },
    { path: 'tab3', title: 'Tab3' },
  ]

  return (
    <div>
      <h1>{subId}</h1>
      <p>location: {location.pathname}</p>

      <div className="d-flex gap-1">
        {subNavlist.map((item, id) => (
          <Link
            key={id}
            role={'button'}
            className="btn btn-secondary"
            to={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}
