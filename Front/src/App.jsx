import { useState } from 'react'
import Books from './pages/Books'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Favorites from './pages/Favorites'

function App() {
  const [isLogged, setIsLogged] = useState(()=>{
    return !!localStorage.getItem('token') || false
  })

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <>
    <Navbar isLogged={isLogged} setIsLogged={setIsLogged}/>
    <Toaster richColors/>
      <Routes>

        <Route path='/books' element={isAuthenticated && <Books />} />
        <Route path='/login' element={!isAuthenticated &&  <Login setIsLogged={setIsLogged} />} />
        <Route path='/register' element={!isAuthenticated && <Register />} />
        <Route path='/favorites/:id' element={<Favorites />} />

        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
