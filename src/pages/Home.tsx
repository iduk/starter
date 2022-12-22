import React, { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import styled from '@emotion/styled'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

const ThemeWrap = styled.div`
  padding: 2rem;
  /* background-color: var(--theme-bg); */
  color: var(--theme-text);
  border: 1px solid var(--theme-border);

  [class*='col'] {
    height: 50px;
  }
`

export function Home(): JSX.Element {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="container">
          <ThemeWrap>
            <h6>Theme Mode</h6>
            <HomeContent />

            <section className="p-4 mt-lg-3 bg-gray-3">
              <article className="row" style={{ textAlign: 'center' }}>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
              </article>
            </section>

            <section className="p-4 mt-3">
              <article className="row" style={{ textAlign: 'center' }}>
                <div className="col-lg-4 col-md-6">
                  <div className="bg-gray-1 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-6">
                  <div className="bg-gray-2 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-6">
                  <div className="bg-gray-3 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-6">
                  <div className="bg-gray-4 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-6">
                  <div className="bg-gray-5 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-6">
                  <div className="bg-gray-6 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-6">
                  <div className="bg-gray-7 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-6">
                  <div className="bg-gray-8 py-2 align-center">Column</div>
                </div>
                <div className="col-lg-1 col-md-6">
                  <div className="bg-gray-9 py-2 align-center">Column</div>
                </div>
              </article>
            </section>
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
      <div
        className="mt-5 flex align-center justify-center"
        style={{ gap: 16 }}
      >
        <button className="btn btn-sm btn-primary">small</button>
        <button className="btn btn-primary">medium</button>
        <button className="btn btn-lg btn-primary">large</button>
        <button className="btn btn-xl btn-primary">xlarge</button>
      </div>

      <hr className="my-4" />
    </>
  )
}

export default Home
