import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="drawer text-white">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-[#18181B]">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">
        <img src="https://res.cloudinary.com/dtjybx29n/image/upload/v1710107785/logo_bqpomp.png" alt="Logo" className='w-20'/>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
            <li><Link to={'/books'}>Listado de Libros</Link></li>
            <li><a>Mis favoritos</a></li>
            <li>
                <details>
                <summary>
                    Iniciar sesión | Registrarse
                </summary>
                <ul className="p-2 bg-[#18181B] rounded-t-none flex items-center flex-col w-full">
                    <li><Link to={'/login'}>Iniciar Sesión</Link></li>
                    <li><a>Registrarme</a></li>
                </ul>
                </details>
            </li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
  </div> 
  <div className="drawer-side z-10">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar