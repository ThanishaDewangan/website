import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

export default function ProductSection({ title, products, viewAllLink }: ProductSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-serif font-bold">{title}</h2>
          {viewAllLink && (
            <a href={viewAllLink} className="flex items-center gap-2 text-gray-600 hover:text-black">
              View All <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} onQuickView={() => {}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}