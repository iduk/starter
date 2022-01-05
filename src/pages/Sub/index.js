import React from 'react'
import { Link, Outlet, useParams, useLocation } from 'react-router-dom'

export default function Sub() {
  const { subId } = useParams()
  const location = useLocation()

  return (
    <div>
      <p>location: {location.pathname}</p>

      <div className="d-flex justify-content-between" style={{ maxWidth: '300px' }}>
        <Link role={'button'} className="btn btn-secondary" to={'about'}>
          About
        </Link>
        <Link role={'button'} className="btn btn-secondary" to={'content1'}>
          Content1
        </Link>
        <Link role={'button'} className="btn btn-secondary" to={'content2'}>
          Content2
        </Link>
      </div>

      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}
