
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import About from './Pages/About'
import Service from './Pages/Service'

import Contact from './Pages/Contact'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home';
import Productdetail from './Component/Productdetail';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import { useAuth } from './context/AuthContext';


function App() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />

        <Route path="/Products/:id" element={<Productdetail />} />
      </Routes>
      <Footer />
    </div>

  )

}

export default App
