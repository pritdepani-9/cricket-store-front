
// sorting products by category in the product list

import React from 'react';

interface SortProps {
  onSortChange: (value: string) => void;
}

const ProductSort: React.FC<SortProps> = ({ onSortChange }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Sort by:</label>
      <select
        className="border p-2 rounded"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">Select</option>
        <option value="priceAsc">Price Low to High</option>
        <option value="priceDesc">Price High to Low</option>
      </select>
    </div>
  );
};

export default ProductSort;
