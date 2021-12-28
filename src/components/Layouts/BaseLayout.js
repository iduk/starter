import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import ThemeSwitch from '../ThemeSwitch'
import './BaseLayout.scss'

function BaseLayout() {
  const [isActive, setIsActive] = useState(false)

  const navlist = [
    {
      id: 0,
      path: '/',
      name: 'Index',
      icon: 'bx-fork',
    },
    {
      id: 1,
      path: '/sub',
      name: 'Sub',
      icon: 'bx-notepad',
    },
    {
      id: 2,
      path: '/doc',
      name: 'Guide',
      icon: 'bx-vial',
    },
    {
      id: 3,
      path: '/error',
      name: 'Error',
      icon: 'bxs-traffic-barrier',
    },
  ]

  return (
    <>
      <main>
        <div className="container">
          <nav className="topnav row align-items-center border-bottom border-warning">
            <div className="col-lg-6 col-12">
              <Link to="/" className="brand py-2">
                Pictor.
              </Link>
            </div>
            <div className="col">
              <ul className="navlist row row-cols-4 g-1">
                {navlist.map((nav) => (
                  <li key={nav.id} className="navlist--item bx-ui text-center">
                    <Link to={nav.path} role="button" onClick={() => setIsActive(!isActive)}>
                      <i className={`bx bx-fw ${nav.icon}`}></i>
                      <span>{nav.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <Outlet />

        <ThemeSwitch />
      </main>
    </>
  )
}

export default BaseLayout
