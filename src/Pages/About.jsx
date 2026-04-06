import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Product Management <span className="text-orange-600">System</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A streamlined solution designed to help businesses organize, track, 
            and manage their inventory with precision and ease.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-orange-500">
            <div className="text-orange-600 text-2xl mb-3">📦</div>
            <h3 className="font-bold text-gray-800 text-xl mb-2">Inventory Tracking</h3>
            <p className="text-gray-500 text-sm">
              Real-time updates on stock levels to prevent overstocking or running out of essentials.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-blue-500">
            <div className="text-blue-600 text-2xl mb-3">📊</div>
            <h3 className="font-bold text-gray-800 text-xl mb-2">Data Analytics</h3>
            <p className="text-gray-500 text-sm">
              Visualize your product performance and category distribution at a glance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-green-500">
            <div className="text-green-600 text-2xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-800 text-xl mb-2">Fast Performance</h3>
            <p className="text-gray-500 text-sm">
              Built with React and Vite for a lightning-fast management experience.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Ready to manage your stock?</h2>
          <div className="flex justify-center gap-4">
            <Link 
              to="/service" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Services
            </Link>
            <Link 
              to="/Home" 
              className="bg-transparent border border-gray-400 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;