import React from 'react';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center bg-white shadow px-6 py-4 sticky top-0 z-10">
        <h1 className="text-3xl font-extrabold text-blue-600">🏏 Cricket App</h1>
        <Link
          to="/cart"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300"
        >
          View Cart
        </Link>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <ProductList />
      </main>
    </div>
  );
}

export default Home;
