import React from 'react'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
import Chart from '../components/Charts/Chart'

const cx = classnames.bind(styles)

export default function Home() {
  return (
    <div>
      <div className={cx('wrap')}>
        <p className="display-1">Hello?</p>
        <p className="display-1">I'm Pictor.</p>
      </div>

      <Chart />
    </div>
  )
}
