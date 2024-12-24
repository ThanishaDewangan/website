import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Mytalorzone</h3>
            <p className="text-gray-400">Crafting unique and elegant fashion pieces for the modern woman.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Customer Care</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Order Status</a></li>
              <li><a href="#" className="hover:text-white">Payment Methods</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full text-black"
              />
              <button className="bg-white text-black px-6 py-2 rounded-r-full hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mytalorzone By Sahiba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}