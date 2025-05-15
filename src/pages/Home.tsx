// Home page component displaying header with cart count and product listing


import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import { useCart } from '../utils/CartContext';


function Home() {
   const { cartCount } = useCart();

   return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center bg-white shadow px-6 py-4 sticky top-0 z-10">
        <h1 className="text-3xl font-extrabold text-blue-600">🏏 Cricket App</h1>
        <div className="relative">
          <Link
            to="/cart"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300"
          >
            View Cart
          </Link>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <ProductList />
      </main>
    </div>
  );

}

export default Home;
