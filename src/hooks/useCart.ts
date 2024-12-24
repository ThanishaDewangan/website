import { useState } from 'react';
import { Cart, CartItem, Product } from '../types';

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  const addToCart = (product: Product, size: string, color: string, quantity: number = 1) => {
    setCart(currentCart => {
      const existingItem = currentCart.items.find(
        item => item.productId === product.id && item.size === size && item.color === color
      );

      let newItems: CartItem[];
      if (existingItem) {
        newItems = currentCart.items.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...currentCart.items, { productId: product.id, quantity, size, color }];
      }

      const total = newItems.reduce((sum, item) => sum + (product.price * item.quantity), 0);
      return { items: newItems, total };
    });
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart(currentCart => {
      const newItems = currentCart.items.filter(
        item => !(item.productId === productId && item.size === size && item.color === color)
      );
      const total = newItems.reduce((sum, item) => sum + (product.price * item.quantity), 0);
      return { items: newItems, total };
    });
  };

  return { cart, addToCart, removeFromCart };
}