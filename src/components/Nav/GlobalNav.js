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
      <header className={cx('global-menu')}>
        <div className={cx('container', 'wrapper')}>
          <Link to="/" className={cx('logo', 'tracking-in-expand')}>
            PICTOR
          </Link>
          <a className={cx('toggler')} onClick={toggleNav}>
            Burger
          </a>
          <nav
            className={cx('menubar') + `${isCollapsedNav ? cx('show') : ''}`}
            id="menu"
          >
            <ul className={cx('menu-list')}>
              {navlist.map((item, id) => (
                <li key={id}>
                  <NavLink
                    to={item.pathname}
                    className={({ isActive }) =>
                      `${
                        isActive ? cx('menu-items', 'active') : cx('menu-items')
                      }`
                    }
                  >
                    <span className={cx('menu-link')}>{item.title}</span>
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
