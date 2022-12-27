import * as React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

function Layout() {
  return (
    <main className={cx('layout')}>
      <Outlet />
    </main>
  )
}
function LayoutBase() {
  return (
    <main className={cx('layout')}>
      <Outlet />
    </main>
  )
}

function LayoutPlain() {
  return (
    <main className={cx('layout')}>
      <Outlet />
    </main>
  )
}

// Compound
Layout.Base = LayoutBase
Layout.Plain = LayoutPlain

export default Layout
