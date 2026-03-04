import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-8">Please enter your details to login</p>
        
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-orange-600" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-orange-600 font-semibold hover:underline">Forgot password?</a>
          </div>

          <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition shadow-md">
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-8">
  Don't have an account? 
  <Link to="/signup" className="text-orange-600 font-bold hover:underline ml-1">
    Sign up
  </Link>
</p>
        
      </div>
    </div>
  );
};

export default Login;