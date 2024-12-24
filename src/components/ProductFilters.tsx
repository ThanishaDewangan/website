import React from 'react';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProducts } from '../hooks/useProducts';

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  filters: FilterState;
}

interface FilterState {
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

export default function ProductFilters({ onFilterChange, filters }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { products } = useProducts();

  // Get unique values from products
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes)));
  const allColors = Array.from(new Set(products.flatMap(p => p.colors)));
  const priceRange = products.reduce(
    (range, product) => [
      Math.min(range[0], product.price),
      Math.max(range[1], product.price)
    ],
    [Infinity, -Infinity]
  );

  const toggleFilter = (type: keyof FilterState, value: any) => {
    if (type === 'priceRange') {
      onFilterChange({ ...filters, priceRange: value });
    } else if (type === 'inStock') {
      onFilterChange({ ...filters, inStock: value });
    } else {
      const array = filters[type] as string[];
      const newArray = array.includes(value)
        ? array.filter(v => v !== value)
        : [...array, value];
      onFilterChange({ ...filters, [type]: newArray });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:border-black transition-colors"
      >
        <Filter className="w-4 h-4" />
        <span>Filters</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-40 p-4"
          >
            <div className="space-y-6">
              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min={priceRange[0]}
                    max={priceRange[1]}
                    value={filters.priceRange[1]}
                    onChange={(e) => toggleFilter('priceRange', [priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-500">
                    Up to ${filters.priceRange[1].toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="font-medium mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleFilter('sizes', size)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filters.sizes.includes(size)
                          ? 'bg-black text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-medium mb-3">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {allColors.map(color => (
                    <button
                      key={color}
                      onClick={() => toggleFilter('colors', color)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filters.colors.includes(color)
                          ? 'bg-black text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* In Stock */}
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => toggleFilter('inStock', e.target.checked)}
                    className="rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span>In Stock Only</span>
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}