import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SortOption } from '../types';

interface ProductSortProps {
  value: SortOption;
  onChange: (option: SortOption) => void;
}

export default function ProductSort({ value, onChange }: ProductSortProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none w-full pl-4 pr-10 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
      >
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name</option>
      </select>
      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
    </div>
  );
}