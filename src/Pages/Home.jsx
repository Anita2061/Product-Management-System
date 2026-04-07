import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Welcome back
            </p>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hello, <span className="text-orange-600">{user.username}</span>. Your next favorite product is waiting.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
              Pick up where you left off, explore fresh arrivals, and manage your cart smoothly on any screen.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/products"
                className="rounded-full bg-orange-600 px-8 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
              >
                Browse Products
              </Link>
              <Link
                to="/orders"
                className="rounded-full border border-gray-300 px-8 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                View Orders
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Fast Checkout</p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">Simple shopping flow</h2>
              <p className="mt-3 text-gray-600">Browse, add to cart, and place orders with a cleaner layout built for phone, tablet, and desktop.</p>
            </div>
            <div className="rounded-3xl bg-gray-900 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Always Ready</p>
              <h2 className="mt-3 text-2xl font-bold">Responsive storefront</h2>
              <p className="mt-3 text-gray-300">The key pages are now easier to navigate with a clearer menu and more flexible spacing.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-orange-100">
            Modern beauty store
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-7xl">
            Welcome to <span className="text-orange-600">Shopee</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Discover quality products, reliable service, and a storefront experience that stays clear and usable on every device size.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="/products"
              className="rounded-full bg-orange-600 px-8 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-gray-300 px-8 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 sm:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">Everything in the menu bar</h2>
            <p className="mt-3 text-gray-600">
              Home, About, Service, Product, and Contact are now easy to reach from the top navigation.
            </p>
          </div>
          <div className="rounded-3xl bg-orange-600 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">Responsive</p>
            <p className="mt-3 text-3xl font-extrabold">Mobile first</p>
            <p className="mt-3 text-orange-50">Flexible spacing, stacked buttons, and a collapsible menu keep the layout readable on smaller screens.</p>
          </div>
          <div className="rounded-3xl bg-gray-900 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Reliable</p>
            <p className="mt-3 text-3xl font-extrabold">Simple flow</p>
            <p className="mt-3 text-gray-300">Browse products, check services, and contact the store without fighting the layout.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
