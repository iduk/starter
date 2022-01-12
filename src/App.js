import React, { useState } from 'react'
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom'

// components
import BaseLayout from './components/Layouts/BaseLayout'
import Error404 from './components/Error/Error404'
// page
import Home from './pages/Home'
import SubIndex from './pages/Sub/index'
import SubContent from './pages/Sub/Content'
import About from './pages/Sub/About'
import Example from './pages/Example'

export default function App() {
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()

  const [pages, setPages] = useState()

  const handleRemovePage = (subId) => {
    setPages((state) => state.filter((page) => page.id !== subId))
    navigate('/sub')
  }

  return (
    <>
      <Routes>
        {/* Nav Layout */}
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="sub/*" element={<SubIndex pages={pages} />}>
            <Route
              path=":subId"
              element={<SubContent onRemovePage={handleRemovePage} />}
            />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="example" element={<Example />} />
        </Route>

        {/* None Layout */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}
