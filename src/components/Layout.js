import React from 'react'
import { Outlet } from 'react-router-dom'
// import Nav from './Nav'
import './Layout.scss'

// export default function Layout_0() {
//   return (
//     <div>
//       <Nav />
//       <Outlet />
//     </div>
//   )
// }

export default function Layout() {
  return (
    <>
      <main id="body-pd">
        <header className="header" id="header">
          <div className="header_toggle">
            <i className="bx bx-menu" id="header-toggle" />
          </div>
          <div className="header_img">111</div>
        </header>

        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              <a href="#" className="nav_logo">
                <i className="bx bx-layer nav_logo-icon" />
                <span className="nav_logo-name">BBBootstrap</span>
              </a>

              <div className="nav_list">
                <a href="#" className="nav_link active">
                  <i className="bx bx-grid-alt nav_icon" />
                  <span className="nav_name">Dashboard</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-user nav_icon" />
                  <span className="nav_name">Users</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-message-square-detail nav_icon" />
                  <span className="nav_name">Messages</span>
                </a>

                <a href="#" className="nav_link">
                  <i className="bx bx-bookmark nav_icon" />
                  <span className="nav_name">Bookmark</span>
                </a>
              </div>
            </div>

            <a href="#" className="nav_link">
              <i className="bx bx-log-out nav_icon" />
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
        <div id="main-container" className="height-100">
          <Outlet />
        </div>
      </main>
    </>
  )
}

document.addEventListener('DOMContentLoaded', function(event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId) // Validate that all variables exist

    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show') // change icon

        toggle.classList.toggle('bx-x') // add padding to body

        bodypd.classList.toggle('body-pd') // add padding to header

        headerpd.classList.toggle('body-pd')
      })
    }
  }

  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  /*===== LINK ACTIVE =====*/

  const linkColor = document.querySelectorAll('.nav_link')

  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }

  linkColor.forEach(l => l.addEventListener('click', colorLink))
})
