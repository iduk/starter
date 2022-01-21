import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import BaseLayout from './components/Layouts/BaseLayout'
import Error404 from './components/Error/Error404'
import Home from './pages/Home'
import Example from './pages/Example'
import Posts from './pages/Blog/Posts'
import PostList from './pages/Blog/PostList'
import Post from './pages/Blog/Post'
import Profile from './pages/Profile'
import Test from './pages/Test/index'

export default function App() {
  return (
    <>
      <Routes>
        {/* Nav Layout */}
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="posts/*" element={<Posts />}>
            <Route index element={<PostList />} />
            <Route path=":postId" element={<Post />} />
          </Route>
          <Route path="example" element={<Example />} />
          <Route path="test" element={<Test />} />
        </Route>

        {/* None Layout */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}
