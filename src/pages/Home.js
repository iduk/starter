import React, { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import styled from '@emotion/styled'

import styles from './Home.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

const ThemeWrap = styled.div`
  height: 280px;
  padding: 3rem 2rem;
  margin-top: 2rem;
  /* background-color: var(--theme-bg); */
  color: var(--theme-text);
  border: 1px solid var(--theme-border);
`

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className={cx('home')}>
          <ThemeWrap className="flex flex-col justify-center text-center">
            <h6>Theme Mode</h6>
            <HomeContent />
          </ThemeWrap>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

function HomeContent() {
  return (
    <>
      <h1>원투뜨리포퍼블퍼블</h1>

      <p>
        별빛이 이 가을 못 슬퍼하는 버리었습니다. 청춘이 강아지, 패, 계십니다.
        남은 풀이 옥 내린 노새, 아름다운 못 봅니다.
      </p>
      <div className="mt-5 flex gap-2 justify-center">
        <button className="btn btn-primary p-2 ">primary</button>
        <button className="btn btn-secondary p-2">secondary</button>
      </div>
    </>
  )
}

export default Home
