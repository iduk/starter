import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.scss'

export default function Layout() {
  // const [isPush, setIsPush] = useState(false)

  // const sidebarPush = () => {
  //   setIsPush(!isPush)
  // }

  return (
    <>
      <main id="body-pd">
        <header className="topbar" id="topbar">
          <div className="sidebar_toggle">
            <i className="bx bx-right-arrow-alt" id="sidebar-toggle" />
          </div>
          <div className="header_img">111</div>
        </header>

        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              <a href="#" className="nav_logo">
                <i className="bx bxs-planet bx-spin-hover nav_logo-icon" />
                <span className="nav_logo-name">PICTOR</span>
              </a>

              <div className="nav_list">
                <a href="#" className="nav_link active">
                  <i className="bx bx-bell bx-spin-hover nav_icon" />
                  <span className="nav_name">Dashboard</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-blanket nav_icon" />
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

document.addEventListener('DOMContentLoaded', function (event) {
  const showNavbar = (toggleId, navId, bodyId, topbarId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      topbarpd = document.getElementById(topbarId) // Validate that all variables exist

    if (toggle && nav && bodypd && topbarpd) {
      toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show') // change icon
        toggle.classList.toggle('bx-x') // add padding to body
        bodypd.classList.toggle('body-pd') // add padding to topbar
        topbarpd.classList.toggle('body-pd')
      })
    }
  }

  showNavbar('sidebar-toggle', 'nav-bar', 'body-pd', 'topbar')

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((lala) => l.classList.remove('active'))
      this.classList.add('active')
    }
  }

  linkColor.forEach((lala) => l.addEventListener('click', colorLink))
})
