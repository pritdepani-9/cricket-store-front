
// ProductCard.tsx
// This component represents a single product card showing product image, name, price, 
// a short description, and buttons to add the product to the cart or view detailed info.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../utils/fakeProducts';
import { addToCart } from '../utils/cartUtils';
import toast from 'react-hot-toast';
import { useCart } from '../utils/CartContext';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const { updateCartCount } = useCart();

  const handleDetails = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    updateCartCount();
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div
      onClick={handleDetails}
      className="flex flex-col bg-white border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate" title={product.name}>
        {product.name}
      </h2>

      <p className="text-gray-600 text-sm mb-2 overflow-hidden text-ellipsis line-clamp-2 h-10">
        {product.description}
      </p>

      <p className="text-lg font-semibold text-green-600 mb-4 h-6 truncate">
        ${product.price}
      </p>


      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300"
        >
          Add to Cart
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDetails();
          }}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
