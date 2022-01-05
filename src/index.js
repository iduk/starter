import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from './App'
import * as bootstrap from 'bootstrap'
import './assets/scss/style.scss'

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)
