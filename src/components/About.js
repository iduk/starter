import React from 'react'
import './About.scss'

// const cx = classNames.bind(styles)

export default function About() {
  return (
    <div>
      <h1 className={'title'}>About Page</h1>

      <main className="parent">
        <section className="child">
          <h1>One</h1>
        </section>
        <section className="child">
          <h1>Two</h1>
        </section>
        <section className="child">
          <h1>Three</h1>
        </section>
        <section className="child">
          <h1>Four</h1>
        </section>
      </main>
    </div>
  )
}
