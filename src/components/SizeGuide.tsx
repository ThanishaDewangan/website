import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface SizeGuideProps {
  onClose: () => void;
}

export default function SizeGuide({ onClose }: SizeGuideProps) {
  const sizes = [
    { size: 'XS', bust: '32"', waist: '24"', hip: '34"' },
    { size: 'S', bust: '34"', waist: '26"', hip: '36"' },
    { size: 'M', bust: '36"', waist: '28"', hip: '38"' },
    { size: 'L', bust: '38"', waist: '30"', hip: '40"' },
    { size: 'XL', bust: '40"', waist: '32"', hip: '42"' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-xl max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-medium">Size Guide</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Size</th>
                <th className="py-2 px-4 text-left">Bust</th>
                <th className="py-2 px-4 text-left">Waist</th>
                <th className="py-2 px-4 text-left">Hip</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((row) => (
                <tr key={row.size} className="border-b">
                  <td className="py-2 px-4">{row.size}</td>
                  <td className="py-2 px-4">{row.bust}</td>
                  <td className="py-2 px-4">{row.waist}</td>
                  <td className="py-2 px-4">{row.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <p className="mb-2">How to Measure:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bust: Measure around the fullest part of your bust</li>
            <li>Waist: Measure around your natural waistline</li>
            <li>Hip: Measure around the fullest part of your hips</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}