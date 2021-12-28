import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import BaseLayout from './components/Layouts/BaseLayout'
import Error404 from './components/Error/Error404'
// page
import Home from './pages/Home'
import Sub from './pages/Sub'
import Doc from './pages/Doc'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nav Layout */}
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="sub" element={<Sub />} />
          <Route path="doc" element={<Doc />} />
        </Route>

        {/* None Layout */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
