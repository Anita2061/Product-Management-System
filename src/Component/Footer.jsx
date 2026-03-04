import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        
        {/* Branding Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Shopee</h2>
          <p className="text-gray-400 leading-relaxed">
            Your one-stop destination for the latest electronics, fashion, and home essentials. Quality products delivered to your door.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Shopping</h3>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/product" className="hover:text-orange-500 transition">All Products</Link></li>
            <li><Link to="/service" className="hover:text-orange-500 transition">Our Services</Link></li>
            <li><a href="#" className="hover:text-orange-500 transition">Featured Deals</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">New Arrivals</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Customer Support</h3>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link></li>
            <li><a href="#" className="hover:text-orange-500 transition">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
          <p className="text-gray-400 mb-4 text-sm">Subscribe to get special offers and once-in-a-lifetime deals.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-gray-800 text-white px-4 py-2 rounded-l-md outline-none focus:ring-1 focus:ring-orange-500 w-full"
            />
            <button className="bg-orange-600 px-4 py-2 rounded-r-md hover:bg-orange-700 transition">
              Go
            </button>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer