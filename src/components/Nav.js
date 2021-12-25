import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

// const cx = classNames.bind(styles)

const Nav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className={'navbar-brand'}>
            Index
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto me-0 mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  content
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
