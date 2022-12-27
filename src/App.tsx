import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import '@/assets/scss/main.scss'
import '@/assets/scss/global.scss'

// components
import Error404 from '@/components/Error/Error404'
import Home from '@/pages/Home'
import Layout from './components/Layouts/Layout'

function App(): JSX.Element {
  const routes = {
    path: '/',
    element: <Layout.Base />,
    children: [
      {
        path: '*',
        element: <Error404 />,
        title: 'error'
      },
      {
        path: '/',
        element: <Home />,
        title: 'home'
      }
    ]
  }

  const routing = useRoutes([routes])

  return <>{routing}</>
}
export default App
