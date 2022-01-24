import React, { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

const cx = classnames.bind(styles)

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className={cx('home')}>
          <article
            className="flex flex-col justify-center text-center"
            style={{ height: '50vh' }}
          >
            <h5>Welcome, Pictor World!</h5>
            <p>
              Nowadays, websites have begun using loading screens that are more
              in tune with the platform’s vision: If they fall back to
              platitudinous progress bars, at least they spice it up with the
              product’s general aesthetic.
            </p>
            <div className="mt-5">
              <Link
                to="/"
                className="btn p-3 text-white"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Go Home
              </Link>
            </div>
          </article>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Home
