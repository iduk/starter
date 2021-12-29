import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './BaseLayout.scss'

function BaseLayout() {
  const [isActive, setIsActive] = useState(false)
  const [btnText, setBtnText] = useState(false)

  const handleClick = (e) => {
    setBtnText(!btnText)
  }

  const navlist = [
    {
      id: 0,
      path: '/',
      name: 'Index',
    },
    {
      id: 1,
      path: '/sub',
      name: 'Sub',
    },
    {
      id: 2,
      path: '/example',
      name: 'Example',
    },
    {
      id: 3,
      path: '/error',
      name: 'Error',
    },
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-xl">
          <Link to="/" className={'navbar-brand'}>
            Pictor.
          </Link>
          <a
            className="navbar-toggler d-lg-none"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            onClick={handleClick}
          >
            {`${btnText ? 'close' : 'menu'}`}
          </a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto me-0 mt-lg-0">
              {navlist.map((nav) => (
                <li key={nav.id} className="menu-item">
                  <Link to={nav.path} className="menu-item__link" onClick={() => setIsActive(!isActive)}>
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className="pt-6">
        <Outlet />
      </main>
    </>
  )
}

export default BaseLayout
