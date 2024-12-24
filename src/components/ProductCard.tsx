import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={imageError ? 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80' : product.imageUrl}
          alt={product.name}
          onError={() => setImageError(true)}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
        <button 
          onClick={() => onQuickView(product)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Quick View
        </button>
      </div>
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      {!product.inStock && (
        <p className="text-red-500 text-sm mt-1">Out of Stock</p>
      )}
    </div>
  );
}