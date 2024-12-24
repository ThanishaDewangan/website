import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "Absolutely love my traditional wear! The quality is exceptional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Priya K.",
    rating: 5,
    comment: "Perfect fit and beautiful designs. Will definitely shop again!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 4,
    comment: "Great collection and amazing customer service.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}