import React, { useState } from 'react'
import { Outlet, Link, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom'
import { getNavList } from '../data/data'
import './BaseLayout.scss'
import ThemeSwitch from '../ThemeSwitch'

function BaseLayout() {
  let params = useParams()
  let navlist = getNavList()
  let navigate = useNavigate()
  let location = useLocation()

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
              {navlist.map((nav, id) => (
                <li key={id} className="menu-item">
                  <NavLink
                    to={nav.pathname}
                    // className={'menu-item__link'}
                    className={({ isActive }) => `menu-item__link ${isActive ? 'active' : ''}`}
                  >
                    {nav.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className="container pt-6">
        <Outlet />
        <ThemeSwitch />
      </main>
    </>
  )
}

export default BaseLayout
