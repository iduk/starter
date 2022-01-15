import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import App from './App'
import ThemeSwitch from './components/ThemeSwitch'
import './assets/scss/main.scss'

ReactDOM.render(
  <HashRouter>
    <App />
    <ThemeSwitch />
  </HashRouter>,
  document.getElementById('root')
)
