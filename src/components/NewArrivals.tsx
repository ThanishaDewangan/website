import React, { useState, useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useSearch } from '../hooks/useSearch';
import { useCart } from '../hooks/useCart';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { Product } from '../types';

export default function NewArrivals() {
  const { products, loading, error } = useProducts();
  const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, filteredProducts } = useSearch(products);
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = useMemo(() => 
    Array.from(new Set(products.map(p => p.category))),
    [products]
  );

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product, size: string, color: string) => {
    addToCart(product, size, color);
    setSelectedProduct(null);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">New Arrivals</h2>
        
        <div className="mb-8 space-y-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-8">No products found</p>
        )}
      </div>

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
}