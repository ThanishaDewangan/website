import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../hooks/useCart';
import { useProducts } from '../hooks/useProducts';
import { formatPrice } from '../utils/format';

interface MiniCartProps {
  onOpenCart: () => void;
}

export default function MiniCart({ onOpenCart }: MiniCartProps) {
  const { cart } = useCart();
  const { products } = useProducts();
  const [isHovered, setIsHovered] = React.useState(false);

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const getProduct = (productId: string) => products.find(p => p.id === productId);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={onOpenCart}
        className="p-2 hover:bg-gray-100 rounded-full relative"
      >
        <ShoppingBag className="w-5 h-5" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isHovered && cart.items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-50"
          >
            <div className="p-4 max-h-96 overflow-y-auto">
              {cart.items.slice(0, 3).map((item) => {
                const product = getProduct(item.productId);
                if (!product) return null;

                return (
                  <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-3 mb-3">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{product.name}</h4>
                      <p className="text-xs text-gray-500">
                        {item.quantity} × {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                );
              })}
              
              {cart.items.length > 3 && (
                <p className="text-sm text-gray-500 text-center mt-2">
                  +{cart.items.length - 3} more items
                </p>
              )}
            </div>
            
            <div className="border-t p-4">
              <div className="flex justify-between mb-3">
                <span className="font-medium">Total</span>
                <span className="font-medium">{formatPrice(cart.total)}</span>
              </div>
              <button
                onClick={onOpenCart}
                className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors text-sm"
              >
                View Cart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}