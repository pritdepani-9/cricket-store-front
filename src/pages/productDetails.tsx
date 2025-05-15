import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { addToCart } from '../utils/cartUtils';
import toast from 'react-hot-toast';
import { useCart } from '../utils/CartContext';

const ProductDetails: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { updateCartCount, cartCount } = useCart();
  const product = state?.product;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedSize && product.sizes.length > 1) {
      toast.error('Please select a size');
      return;
    }
    addToCart(product);
    updateCartCount();
    toast.success(`${product?.name} ${selectedSize ? `(${selectedSize}) ` : ''}added to cart!`);
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
  className="text-gray-800 font-bold py-2 px-5 rounded-full text-3xl transition hover:bg-gray-100"
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
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
            <p className="text-2xl font-semibold text-green-600 mb-6">${product.price}</p>
            
            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product?.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-full text-sm font-medium transition ${
                        selectedSize === size
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg transition mt-auto"
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