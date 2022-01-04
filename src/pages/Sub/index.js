import React from 'react'
import { Link, Outlet, useParams, useLocation } from 'react-router-dom'

export default function Sub() {
  const { id } = useParams()
  const location = useLocation()

  return (
    <div>
      <h1 className="display-1">{id}</h1>
      <p>location: {location.pathname}</p>
      <Link to="content">Sub Content</Link>
      <Outlet />
    </div>
  )
}
