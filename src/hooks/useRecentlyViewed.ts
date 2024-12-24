import { useState, useEffect } from 'react';
import { Product } from '../types';
import { useLocalStorage } from './useLocalStorage';

const MAX_RECENT_ITEMS = 8;

export function useRecentlyViewed() {
  const [recentItems, setRecentItems] = useLocalStorage<Product[]>('recently-viewed', []);

  const addToRecentlyViewed = (product: Product) => {
    setRecentItems(current => {
      const filtered = current.filter(item => item.id !== product.id);
      return [product, ...filtered].slice(0, MAX_RECENT_ITEMS);
    });
  };

  const clearRecentlyViewed = () => {
    setRecentItems([]);
  };

  return {
    recentItems,
    addToRecentlyViewed,
    clearRecentlyViewed
  };
}