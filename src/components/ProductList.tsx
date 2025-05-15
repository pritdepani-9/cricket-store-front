import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { generateFakeProducts, Product } from '../utils/fakeProducts';
import ProductSort from '../features/product/ProductSort';
import ProductFilter from '../features/product/ProductFilter';
import axios from '../services/http'; 

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fakeData = generateFakeProducts(12);
    setProducts(fakeData);
    setDisplayProducts(fakeData);
  }, []);


  //   useEffect(() => {
  // fetchProducts();
  // }, []);

   // 📌 Note:
  // In this project, we usually generate fake data using 'faker' utilities for demonstration purposes.
  // This axios call is just an example to show how you could fetch data from an API using our configured axios instance.
  // In a real app, replace this with your actual endpoint or keep using faker data for mockups.

  // ⚠️ Also — we're using Redux Toolkit for state management in this project.
  // But for this isolated task/component, state management via local component state (useState) is sufficient.
  // So, Redux integration is intentionally left out here.


    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get('/products');  // replace with your actual endpoint
    //     setProducts(response.data);
    //     setDisplayProducts(response.data);
    //   } catch (error) {
    //     console.error('Failed to fetch products:', error);
    //   }
    // };

  useEffect(() => {
  let filtered = [...products];

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (search.trim() !== '') {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort === 'priceAsc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'priceDesc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  setDisplayProducts(filtered);
}, [sort, category, search, products]);


  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 mb-6 justify-between">
        <ProductFilter onCategoryChange={setCategory} />
        <ProductSort onSortChange={setSort} />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 h-[40px]"
        />
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {displayProducts.length > 0 ? (
    displayProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  ) : (
    <div className="col-span-full flex flex-col items-center justify-center text-center py-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-36 w-36 text-gray-400 animate-bounce mb-4"
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
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Oops, nothing found!</h2>
      <p className="text-gray-500 text-lg">Try adjusting your filters or search keywords.</p>
    </div>
  )}
</div>

    </div>
  );
};

export default ProductList;
