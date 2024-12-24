import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: "Wedding Collection",
    description: "Stunning bridal wear and accessories",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?auto=format&fit=crop&q=80",
  },
  {
    title: "Festival Edit",
    description: "Celebrate in style",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80",
  }
];

export default function FeaturedCollection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Featured Collections</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="aspect-[16/9]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-serif mb-2">{collection.title}</h3>
                <p className="mb-4 opacity-90">{collection.description}</p>
                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-white/90 hover:text-white"
                >
                  Explore Collection <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}