import { useState } from 'react'
import Books from './pages/Books'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Toaster richColors/>
      <Routes>

        <Route path='/books' element={<Books />} />
   


  
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
