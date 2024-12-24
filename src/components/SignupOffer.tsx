import React from 'react';
import { X } from 'lucide-react';

export default function SignupOffer() {
  const [isOpen, setIsOpen] = React.useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-serif font-bold mb-4">Get 10% Off Your First Order</h2>
        <p className="text-gray-600 mb-6">Sign up for our newsletter and receive exclusive offers!</p>
        
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800">
            Sign Up Now
          </button>
        </form>
      </div>
    </div>
  );
}