import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome back, <span className="text-orange-600">{user.username}</span>!
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Ready to explore the latest products and deals?
        </p>
        <Link to="/products">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition">
            Browse Products
          </button>
        </Link>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gray-50">
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
        Welcome to <span className="text-orange-600">Shopee</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Discover the best deals on the latest products. High quality, fast shipping, and excellent customer service all in one place.
      </p>
      <div className="flex gap-4">
        <Link to="/products">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition">
            Shop Now
          </button>
        </Link>
        <Link to="/about">
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};


export default Home
