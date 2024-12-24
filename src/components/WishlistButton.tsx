import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';

interface WishlistButtonProps {
  productId: string;
  className?: string;
}

export default function WishlistButton({ productId, className = '' }: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(productId);

  return (
    <button
      onClick={() => toggleWishlist(productId)}
      className={`p-2 rounded-full transition-colors ${
        inWishlist ? 'text-red-500 hover:bg-red-50' : 'text-gray-400 hover:bg-gray-100'
      } ${className}`}
      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart className="w-5 h-5" fill={inWishlist ? 'currentColor' : 'none'} />
    </button>
  );
}