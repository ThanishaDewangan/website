import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        onClick={() => onChange('')}
        className={`px-4 py-2 rounded-full whitespace-nowrap ${
          !selected
            ? 'bg-black text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selected === category
              ? 'bg-black text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}