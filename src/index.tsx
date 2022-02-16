import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import App from './App'
import '@/assets/scss/main.scss'
import ThemeSwitch from '@/components/ThemeSwitch'

ReactDOM.render(
  <BrowserRouter>
    <App />
    <ThemeSwitch />
  </BrowserRouter>,
  document.getElementById('root')
)
