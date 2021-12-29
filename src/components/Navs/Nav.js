import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

// const cx = classNames.bind(styles)
export default function Nav() {
  const [btnText, setBtnText] = useState(false)

  const handleClick = (e) => {
    // const current = e.target.id
    setBtnText(!btnText)
  }

  return (
    <aside>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className={'navbar-brand'}>
            Index
          </Link>
          <button
            className="btn btn-outline-primary d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            onClick={handleClick}
          >
            {`menu ${btnText ? 'close' : 'open'}`}
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto me-0 mt-2 mt-lg-0">
              <li className="nav-item">
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
    </aside>
  )
}
