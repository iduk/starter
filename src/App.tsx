import * as React from 'react'
import { useRoutes } from 'react-router-dom'

// components
import BaseLayout from '@/components/Layouts/BaseLayout'
import Error404 from '@/components/Error/Error404'
import Home from '@/pages/Home'

function App(): JSX.Element {
  const routes = {
    path: '/',
    element: <BaseLayout />,
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
