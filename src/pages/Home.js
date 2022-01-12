import React from 'react'
import Chart from '../components/Charts/Chart'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function Home() {
  return (
    <div>
      <div className={cx('home')}></div>
    </div>
  )
}
