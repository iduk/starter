import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { getNavList } from '../../data/nav'
import classnames from 'classnames/bind'
import styles from './GlobalNav.module.scss'

const cx = classnames.bind(styles)

function GlobalNav() {
  let navlist = getNavList()
  const [btnText, setBtnText] = useState(false)
  const [isCollapsedNav, setIsCollapsedNav] = useState(false)

  const toggleNav = () => {
    setIsCollapsedNav(!isCollapsedNav)
  }

  return (
    <>
      <header className={cx('header-nav', 'navbar', 'navbar-expand-lg')}>
        <div className={cx('container')}>
          <Link to="/" className={cx('logo', 'navbar-brand')}>
            <span className={cx('text-gradient-anima')}>Pictor.</span>
          </Link>
          <a
            className={cx('toggler', ' d-lg-none')}
            onClick={toggleNav}
            data-bs-backdrop={true}
          >
            Burger
          </a>
          <nav
            className={
              cx('g', 'navbar-collapse', 'collapse') +
              `${isCollapsedNav ? cx('show') : ''}`
            }
            id="menu"
          >
            <ul className="navbar-nav ms-lg-auto me-lg-0 mt-lg-0">
              {navlist.map((item, id) => (
                <li key={id} className={cx('menu-item')}>
                  <NavLink
                    to={item.pathname}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? cx('menu-item-link', 'active')
                          : cx('menu-item-link')
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default GlobalNav
