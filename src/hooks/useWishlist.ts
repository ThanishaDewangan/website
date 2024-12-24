import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useWishlist() {
  const [wishlist, setWishlist] = useLocalStorage<string[]>('wishlist', []);

  const isInWishlist = useCallback((productId: string) => {
    return wishlist.includes(productId);
  }, [wishlist]);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist(current => {
      if (current.includes(productId)) {
        return current.filter(id => id !== productId);
      }
      return [...current, productId];
    });
  }, [setWishlist]);

  return { wishlist, isInWishlist, toggleWishlist };
}