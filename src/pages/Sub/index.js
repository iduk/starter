import React from 'react'
import { Link, Outlet, useParams, useLocation } from 'react-router-dom'

export default function Sub() {
  const { subId } = useParams()
  const location = useLocation()

  return (
    <div>
      <h1 className="display-1">{subId}</h1>
      <p>location: {location.pathname}</p>

      <Link to="content1">content1</Link>
      <Link to="content2">content2</Link>

      <Outlet />
    </div>
  )
}
