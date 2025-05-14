import React from 'react';

interface FilterProps {
  onCategoryChange: (value: string) => void;
}

const ProductFilter: React.FC<FilterProps> = ({ onCategoryChange }) => {
  // Define the options in an array
  const categories = ['Clothing', 'Accessories', 'Equipment'];

  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Filter by Category:</label>
      <select
        className="border p-2 rounded"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All</option>
        {/* Map over the categories array to generate <option> elements */}
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
