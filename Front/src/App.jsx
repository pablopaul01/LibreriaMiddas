import { useState } from 'react'
import Books from './pages/Books'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>

        <Route path='/books' element={<Books />} />
   


  
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
