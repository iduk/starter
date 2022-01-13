import React from 'react'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function Home() {
  return (
    <div className={cx('home')}>
      <h1>Index</h1>
    </div>
  )
}
