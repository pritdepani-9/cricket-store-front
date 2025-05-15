import React, { useEffect, useState } from 'react';
import { getCartItems, clearCart, updateCartItemQuantity } from '../utils/cartUtils';
import { Product } from '../utils/fakeProducts';
import { Link } from 'react-router-dom';
import { useCart } from '../utils/CartContext';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const { updateCartCount } = useCart();

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleClearCart = () => {
    clearCart();
    setCartItems([]);
    updateCartCount();
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const updatedCart = updateCartItemQuantity(productId, newQuantity);
    setCartItems(updatedCart);
    updateCartCount();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto mb-8 gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 flex items-center gap-2 text-center">
          <span role="img" aria-label="cricket">🏏</span> Cricket App
        </h1>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-base font-medium transition w-full sm:w-auto text-center"
        >
          Go Shopping
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="max-w-5xl mx-auto text-center py-20">
          <div className="flex justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-32 w-32 sm:h-36 sm:w-36 text-gray-400"
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
                className="flex flex-col sm:flex-row gap-4 border p-4 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full sm:w-24 sm:h-24 h-40 object-cover rounded-lg border border-gray-300"
                />
                <div className="flex-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.product.name}</h3>
                    <p className="text-lg text-green-600 font-semibold">${item.product.price}</p>
                  </div>
                  <div className="flex items-center gap-4 justify-between sm:justify-start">
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-lg"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={handleClearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium transition w-full sm:w-auto"
            >
              Clear Cart
            </button>
            <div className="flex items-center text-lg font-semibold text-gray-800">
              Total:&nbsp;
              <span className="text-2xl font-bold text-green-600">
                ${cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
