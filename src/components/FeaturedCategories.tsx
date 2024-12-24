import React from 'react';

const categories = [
  {
    name: 'Traditional Wear',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80',
  },
  {
    name: 'Western Collection',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
  },
  {
    name: 'Trendy Styles',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80',
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}