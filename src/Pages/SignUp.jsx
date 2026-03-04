import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    
  return (
    <div className="flex items-center justify-center min-h-[85vh] bg-gray-50 px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Create Account</h2>
        <p className="text-gray-500 text-center mb-8">Join Shopee today and start shopping!</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            />
          </div>

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
              placeholder="Create a password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            />
          </div>

          <div className="text-xs text-gray-500 mt-2">
            By signing up, you agree to our <span className="text-orange-600 cursor-pointer hover:underline">Terms of Service</span> and <span className="text-orange-600 cursor-pointer hover:underline">Privacy Policy</span>.
          </div>

          <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition shadow-md mt-4">
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mt-8">
          Already have an account? <Link to="/login" className="text-orange-600 font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp