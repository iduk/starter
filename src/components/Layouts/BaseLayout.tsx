import * as React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './BaseLayout.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

function BaseLayout() {
  return (
    <main className={cx('layout--base')}>
      <Outlet />
    </main>
  )
}

export default BaseLayout
