import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import GlobalNav from '../Nav/GlobalNav'
import classnames from 'classnames/bind'

import './BaseLayout.scss'

function BaseLayout() {
  return (
    <>
      <GlobalNav />
      <main className="container pt-6">
        <Outlet />
      </main>
    </>
  )
}

export default BaseLayout
