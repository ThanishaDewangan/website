import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCategories } from '../hooks/useCategories';

export default function ShopByCategory() {
  const { categories } = useCategories();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-serif font-bold">Shop By Category</h2>
          <button className="flex items-center gap-2 text-gray-600 hover:text-black">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-serif">{category.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}