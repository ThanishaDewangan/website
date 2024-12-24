import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-serif font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-black rounded-full flex items-center gap-2 hover:bg-gray-100"
            >
              Subscribe <Send className="w-4 h-4" />
            </motion.button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            By subscribing, you agree to receive marketing emails from us.
          </p>
        </motion.div>
      </div>
    </section>
  );
}