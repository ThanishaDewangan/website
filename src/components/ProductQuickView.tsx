import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../hooks/useWishlist';
import { formatPrice } from '../utils/format';
import SizeGuide from './SizeGuide';

interface ProductQuickViewProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
}

export default function ProductQuickView({ product, onClose, onAddToCart }: ProductQuickViewProps) {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);
  const [quantity, setQuantity] = React.useState(1);
  const [showSizeGuide, setShowSizeGuide] = React.useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const benefits = [
    { icon: Truck, text: "Free Shipping" },
    { icon: Shield, text: "Secure Payment" },
    { icon: RotateCcw, text: "Easy Returns" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-2">{product.name}</h2>
              <p className="text-2xl font-medium mb-4">{formatPrice(product.price)}</p>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium">Size</label>
                <button
                  onClick={() => setShowSizeGuide(true)}
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'border hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="font-medium block mb-2">Color</label>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedColor === color
                        ? 'bg-black text-white'
                        : 'border hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="font-medium block mb-2">Quantity</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-2 border rounded-md hover:border-black"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-2 border rounded-md hover:border-black"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={() => onAddToCart(product, selectedSize, selectedColor, quantity)}
                disabled={!product.inStock}
                className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-800 disabled:bg-gray-200"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 rounded-full border ${
                  inWishlist ? 'text-red-500 border-red-500' : 'hover:border-black'
                }`}
              >
                <Heart className="w-6 h-6" fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
              <button className="p-3 rounded-full border hover:border-black">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm text-gray-600">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {showSizeGuide && (
          <SizeGuide onClose={() => setShowSizeGuide(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}