import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import Layout from './components/Layout/index'
import NoMatch from './components/NoMatch/index'
// page
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
