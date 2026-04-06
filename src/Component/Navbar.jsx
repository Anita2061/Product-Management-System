import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'


const Navbar = () => {
  const { user, logout } = useAuth()
  const { cartCount } = useCart()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (user) {
    return (
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
        <Link to="/" className="text-orange-600 font-bold text-xl cursor-pointer">Shopee</Link>
        <div className="flex items-center gap-6">
          <NavLink to="/products" className={({ isActive }) => `font-semibold transition hover:text-orange-700 ${isActive ? 'text-black' : 'text-orange-600'}`}>Products</NavLink>
          <NavLink to="/orders" className={({ isActive }) => `font-semibold transition hover:text-orange-700 ${isActive ? 'text-black' : 'text-orange-600'}`}>Orders</NavLink>
          <Link to="/cart" className="relative text-orange-600 font-semibold hover:text-black transition">
            Cart
            {cartCount > 0 ? (
              <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs px-2 py-2px rounded-full">
                {cartCount}
              </span>
            ) : null}
          </Link>
          <button
            onClick={handleLogout}
            className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-black transition"
          >
            Logout
          </button>
        </div>
      </nav>
    )
  }

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      <Link to="/" className="text-orange-600 font-bold text-xl cursor-pointer">Shopee</Link>
      
      <ul className="flex items-center gap-8 font-medium text-orange-600">
        <li className="hover:text-black cursor-pointer">
            <NavLink to= "/"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black" : ""
  }>Home</NavLink></li>
        
        
        <li className="hover:text-black cursor-pointer">
            <NavLink to= "/About"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black" : ""
  }>About</NavLink></li>
  <li className="hover:text-black cursor-pointer">
            <NavLink to= "/Service"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black" : ""
  }>Service</NavLink></li>
            
  <li><NavLink to= "/Products"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black" : ""
  }>Products</NavLink></li>
  <li className="hover:text-black cursor-pointer">
            <NavLink to= "/Contact"className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black" : ""
  }>Contact</NavLink></li>
        
      
        
      </ul>

      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative text-orange-600 font-semibold hover:text-black transition">
          Cart
          {cartCount > 0 ? (
            <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs px-2 py-2px rounded-full">
              {cartCount}
            </span>
          ) : null}
        </Link>

        <Link to="/login" className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar