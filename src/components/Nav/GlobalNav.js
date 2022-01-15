import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
          <Link to="/" className={cx('logo', 'text-gradient-anima')}>
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
                    to={item.links}
                    className={({ isActive }) =>
                      `${
                        isActive ? cx('menu-link', 'active') : cx('menu-link')
                      }`
                    }
                    tabIndex={0}
                    title={item.title}
                  >
                    <span className={cx('menu-text')}>{item.title}</span>
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
