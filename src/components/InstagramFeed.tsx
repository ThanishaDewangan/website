import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80",
    likes: 245,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80",
    likes: 189,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80",
    likes: 324,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
    likes: 156,
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Instagram className="w-6 h-6" />
          <h2 className="text-3xl font-serif font-bold">Follow Us @mytalorzone</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden"
            >
              <div className="aspect-square">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="flex items-center gap-2">
                  ♥️ {post.likes}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}