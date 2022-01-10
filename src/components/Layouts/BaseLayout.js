import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import GlobalNav from '../Nav/GlobalNav'
import classnames from 'classnames/bind'

import './BaseLayout.scss'

function BaseLayout() {
  return (
    <>
      <GlobalNav />
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}

export default BaseLayout
