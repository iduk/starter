import React, { useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { getNavList } from '../data/data'
import './BaseLayout.scss'

function BaseLayout() {
  let navlist = getNavList()

  const [btnText, setBtnText] = useState(false)

  const handleClick = (e) => {
    setBtnText(!btnText)
  }

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
                  <NavLink
                    to={nav.path}
                    // className={'menu-item__link'}
                    className={({ isActive }) => `menu-item__link ${isActive ? 'active' : ''}`}
                  >
                    {nav.name}
                  </NavLink>
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
