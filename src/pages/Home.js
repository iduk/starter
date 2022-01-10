import React from 'react'
import Chart from '../components/Charts/Chart'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function Home() {
  return (
    <div>
      <div className={cx('home')}>
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Transactions
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>

      <Chart />
    </div>
  )
}
