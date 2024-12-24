import { useState, useMemo } from 'react';
import { Product } from '../types';

interface SearchFilters {
  minPrice?: number;
  maxPrice?: number;
  categories?: string[];
  sizes?: string[];
  colors?: string[];
  inStock?: boolean;
}

export function useProductSearch(products: Product[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesPrice = (!filters.minPrice || product.price >= filters.minPrice) &&
                           (!filters.maxPrice || product.price <= filters.maxPrice);
        
        const matchesCategory = !filters.categories?.length ||
                              filters.categories.includes(product.category);
        
        const matchesSize = !filters.sizes?.length ||
                          product.sizes.some(size => filters.sizes?.includes(size));
        
        const matchesColor = !filters.colors?.length ||
                           product.colors.some(color => filters.colors?.includes(color));
        
        const matchesStock = !filters.inStock || product.inStock;

        return matchesSearch && matchesPrice && matchesCategory && 
               matchesSize && matchesColor && matchesStock;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'newest':
          default:
            return 0;
        }
      });
  }, [products, searchTerm, filters, sortBy]);

  return {
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    filteredProducts
  };
}