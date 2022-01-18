import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

function Home() {
  const location = useLocation()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  let params = useParams()

  return (
    <>
      <ul>
        {Array(9)
          .fill()
          .map((item, index) => (
            <li key={index}>{item}호로로로로롤ㄹ</li>
          ))}
      </ul>
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
