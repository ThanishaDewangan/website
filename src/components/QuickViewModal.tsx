import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export default function QuickViewModal({ product, onClose, onAddToCart }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="aspect-square">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold mb-2">{product.name}</h2>
            <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Color</label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => onAddToCart(product, selectedSize, selectedColor)}
              disabled={!product.inStock}
              className={`w-full py-3 rounded-full ${
                product.inStock
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}