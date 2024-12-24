import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold">Mytalorzone</h1>
            <p className="text-xs text-gray-500">By Sahiba</p>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-black">New Arrivals</a>
            <a href="#" className="text-gray-700 hover:text-black">Traditional</a>
            <a href="#" className="text-gray-700 hover:text-black">Western</a>
            <a href="#" className="text-gray-700 hover:text-black">Collections</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}