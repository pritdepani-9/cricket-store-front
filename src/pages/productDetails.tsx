import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { addToCart } from '../utils/cartUtils';
import toast from 'react-hot-toast';
import { useCart } from '../utils/CartContext';

const ProductDetails: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { updateCartCount, cartCount } = useCart();
  const product = state?.product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    updateCartCount();
    toast.success(`${product?.name} added to cart!`);
  };

  if (!product) {
    return <div className="text-center py-10 text-2xl text-red-500">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar: Back & View Cart */}
      <div className="flex justify-between items-center bg-white shadow px-6 py-4 sticky top-0 z-10">
  <button
    onClick={() => navigate(-1)}
    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full text-sm font-medium transition"
  >
    ←
  </button>

  <div className="relative">
    <Link
      to="/cart"
      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-5 rounded-full text-sm font-medium transition"
    >
      View Cart
    </Link>
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {cartCount}
      </span>
    )}
  </div>
</div>


      {/* Product details */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-72 md:h-auto object-cover"
          />
          <div className="p-8 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600 mb-6">${product.price}</p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
