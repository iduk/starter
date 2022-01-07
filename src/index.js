import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from './App'
import ThemeSwitch from './components/ThemeSwitch'
import './assets/scss/main.scss'

render(
  <HashRouter>
    <App />
    <ThemeSwitch />
  </HashRouter>,
  document.getElementById('root')
)
