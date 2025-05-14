import React, { useEffect, useState } from 'react';
import { getCartItems, clearCart } from '../utils/cartUtils';
import { Product } from '../utils/fakeProducts';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleClearCart = () => {
    clearCart();
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 flex items-center gap-2">
          <span role="img" aria-label="cricket">🏏</span> Cricket App
        </h1>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm sm:text-base transition"
        >
          Go Shopping
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="max-w-5xl mx-auto text-center py-20">
          <div className="flex justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-36 w-36 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h14l-1.5 6H7.4M7 13L5.4 5H21M7 13H5.4M7 13l1.5 6m5.1-6l1.5 6m-6 0a1.5 1.5 0 11-3 0m13.5 0a1.5 1.5 0 11-3 0"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Oops! Your cart is empty.</h2>
          <p className="text-lg text-gray-500 mb-6">Looks like you haven't added anything yet. Start shopping now!</p>

        </div>
      ) : (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>

          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border p-4 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-lg text-green-600 font-semibold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <button
              onClick={handleClearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 w-full md:w-auto"
            >
              Clear Cart
            </button>
            <div className="flex items-center text-lg font-semibold text-gray-800">
              Total:&nbsp;
              <span className="text-2xl font-bold text-green-600">
                ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
