import { useMemo } from 'react';
import { Product, SortOption } from '../types';

export function useSort(products: Product[], sortOption: SortOption) {
  return useMemo(() => {
    const sortedProducts = [...products];
    
    switch (sortOption) {
      case 'price-low':
        return sortedProducts.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sortedProducts.sort((a, b) => b.price - a.price);
      case 'name':
        return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      case 'newest':
      default:
        return sortedProducts; // Assuming products are already sorted by newest
    }
  }, [products, sortOption]);
}