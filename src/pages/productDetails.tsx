import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart } from '../utils/cartUtils';
import toast from 'react-hot-toast';
import { useCart } from '../utils/CartContext';


const ProductDetails: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { updateCartCount } = useCart();
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
    <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back
      </button>
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
  );
};

export default ProductDetails;
