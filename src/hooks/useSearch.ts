import { useState, useMemo } from 'react';
import { Product } from '../types';

export function useSearch(products: Product[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredProducts
  };
}