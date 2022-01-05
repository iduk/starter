import * as React from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

// components
import BaseLayout from './components/Layouts/BaseLayout'
import Error404 from './components/Error/Error404'
// page
import Home from './pages/Home'
import Sub from './pages/Sub/index'
import SubContent from './pages/Sub/Content'
import Example from './pages/Example'

export default function App() {
  let navigate = useNavigate()
  let location = useLocation()

  return (
    <Routes>
      {/* Nav Layout */}
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="sub" element={<Sub />}>
          <Route path=":subId" element={<SubContent />} />
          <Route path="about" element={<div>sub about</div>} />
        </Route>
        <Route path="example" element={<Example />} />
      </Route>

      {/* None Layout */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
