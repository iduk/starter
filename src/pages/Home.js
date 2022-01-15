import React, { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
import { useParams, useLocation } from 'react-router-dom'

const cx = classnames.bind(styles)

function Home() {
  const location = useLocation()
  console.log(location.state)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  let params = useParams()

  return (
    <>
      {loading === false ? (
        <div className={cx('home')}>
          <article
            className="flex flex-col justify-center text-center"
            style={{ height: '50vh' }}
          >
            <h1>픽터월드에 오신걸 환영합니다</h1>
            <h2>{params.pathname}</h2>
          </article>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  )
}

export default Home
