import { useState } from 'react'
import Books from './pages/Books'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
    <Navbar />
    <Toaster richColors/>
      <Routes>

        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
