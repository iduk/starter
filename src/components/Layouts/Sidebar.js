import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.scss'

export default function Sidebar() {
  return (
    <>
      <main id="layout-wrap">
        <header className="topbar" id="top-bar">
          <div className="sidebar_toggle">
            <i className="bx bx-menu-alt-left" id="sidebar-toggle" />
          </div>
          <div className="header_img">111</div>
        </header>

        <div className="sidebar" id="sidebar">
          <nav className="nav">
            <div>
              <a href="/" className="nav_logo">
                <i className="bx bxs-planet bx-spin-hover nav_logo-icon" />
                <span className="nav_logo-name">PICTOR</span>
              </a>

              <div className="nav_list">
                <a href="/" className="nav_link active">
                  <i className="bx bx-bell bx-spin-hover nav_icon" />
                  <span className="nav_name">Dashboard</span>
                </a>
                <a href="/sub" className="nav_link">
                  <i className="bx bx-blanket nav_icon" />
                  <span className="nav_name">Subpage</span>
                </a>
                <a href="/doc" className="nav_link">
                  <i className="bx bx-message-square-detail nav_icon" />
                  <span className="nav_name">Documents</span>
                </a>
              </div>
            </div>

            <a href="#" className="nav_link">
              <i className="bx bx-log-out nav_icon" />
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
        <div class="main-container">
          <Outlet />
        </div>
      </main>
    </>
  )
}

document.addEventListener('DOMContentLoaded', function (event) {
  const showNavbar = (toggleId, navId, layoutWrapId, topBarId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      layoutWrap = document.getElementById(layoutWrapId),
      topBar = document.getElementById(topBarId) // Validate that all variables exist

    if (toggle && nav && layoutWrap && topBar) {
      toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show') // change icon
        toggle.classList.toggle('bx-x') // add padding to body
        layoutWrap.classList.toggle('layout-wrap') // add padding to topBar
        topBar.classList.toggle('open')
      })
    }
  }

  showNavbar('sidebar-toggle', 'sidebar', 'layout-wrap', 'top-bar')

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
