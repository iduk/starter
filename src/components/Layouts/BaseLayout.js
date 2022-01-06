import React, { useState, useEffect } from 'react'
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import { getNavList } from '../data/data'
import ThemeSwitch from '../ThemeSwitch'
import classnames from 'classnames/bind'

import './BaseLayout.scss'

function BaseLayout() {
  let navlist = getNavList()
  const [btnText, setBtnText] = useState(false)
  const [isCollapsedNav, setIsCollapsedNav] = useState(false)

  const toggleNav = ({ isOpen, onClose }) => {
    setIsCollapsedNav(!isCollapsedNav)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-xl">
          <Link to="/" className="navbar-brand">
            Pictor.
          </Link>
          <a
            className="navbar-toggler d-lg-none"
            onClick={toggleNav}
            data-bs-backdrop={true}
          >
            Burger
          </a>
          <div
            className={`navbar-collapse collapse ${
              isCollapsedNav ? 'show' : ''
            }`}
            id="menu"
          >
            <ul className="navbar-nav ms-lg-auto me-lg-0 mt-lg-0">
              {navlist.map((item, id) => (
                <li key={id} className="menu-item">
                  <NavLink
                    to={item.pathname}
                    className={({ isActive }) =>
                      `menu-item-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.title}
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
