import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      <div className="text-orange-600 font-bold text-xl cursor-pointer">Shopee</div>
      
      <ul className="flex items-center gap-8 font-medium text-orange-600">
        
        <li className="hover:text-black cursor-pointer">
            <NavLink to= "/About"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black" : ""
  }>About</NavLink></li>
  <li className="hover:text-black cursor-pointer">
            <NavLink to= "/Service"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black" : ""
  }>Service</NavLink></li>
  <li className="hover:text-black cursor-pointer">
            <NavLink to= "/Product"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black" : ""
  }>Product</NavLink></li>
  <li className="hover:text-black cursor-pointer">
            <NavLink to= "/Contact"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black" : ""
  }>Contact</NavLink></li>
        
      </ul>

      <Link to="/login" className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
       Login
       </Link>
    </nav>
  )
}

export default Navbar