import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser] = useAuth()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/course' && !authUser) {
      toast.error("Please login first")
    }
  }, [location.pathname, authUser])

  return (
    <div>
      <Toaster position='top-right' reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser ? <Courses /> : <Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
