import React from 'react'
import styles from './Home.module.scss'
import Chart from '../components/Charts/Chart'
import classnames from 'classnames/bind'

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
