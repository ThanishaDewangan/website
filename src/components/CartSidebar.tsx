import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../hooks/useCart';
import { useProducts } from '../hooks/useProducts';
import { formatPrice } from '../utils/format';

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart } = useCart();
  const { products } = useProducts();

  const getProduct = (productId: string) => products.find(p => p.id === productId);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <h2 className="text-lg font-medium">Shopping Cart</h2>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <AnimatePresence>
                  {cart.items.length === 0 ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-gray-500"
                    >
                      Your cart is empty
                    </motion.p>
                  ) : (
                    <motion.div className="space-y-4">
                      {cart.items.map((item) => {
                        const product = getProduct(item.productId);
                        if (!product) return null;

                        return (
                          <motion.div
                            key={`${item.productId}-${item.size}-${item.color}`}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex gap-4"
                          >
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="h-24 w-24 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium">{product.name}</h3>
                              <p className="text-sm text-gray-500">
                                Size: {item.size} | Color: {item.color}
                              </p>
                              <p className="text-sm">Quantity: {item.quantity}</p>
                              <p className="font-medium">{formatPrice(product.price * item.quantity)}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.productId, item.size, item.color)}
                              className="p-2 hover:bg-gray-100 rounded-full h-fit"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t p-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">{formatPrice(cart.total)}</span>
                </div>
                <button
                  className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 disabled:bg-gray-200 transition-colors"
                  disabled={cart.items.length === 0}
                >
                  Checkout
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}