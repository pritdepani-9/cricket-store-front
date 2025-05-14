import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { generateFakeProducts, Product } from '../utils/fakeProducts';
import ProductSort from '../features/product/ProductSort';
import ProductFilter from '../features/product/ProductFilter';

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
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
