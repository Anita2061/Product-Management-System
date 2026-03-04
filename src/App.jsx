import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import About from './Pages/About'
import Service from './Pages/Service'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'


const App = () => {
  return (
    <div>
     
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

      </Routes>
    <Footer />
    </div>
  )
}

export default App
