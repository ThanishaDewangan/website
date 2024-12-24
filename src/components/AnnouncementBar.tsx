import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const announcements = [
  "Free Shipping on Orders Over $100",
  "New Collection Launch: 20% Off",
  "Student Discount: 15% Off",
  "Flash Sale: Up to 50% Off Traditional Wear",
  "Free Returns on All Orders",
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white py-2 text-center text-sm relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-2"
        >
          {announcements[currentIndex]}
          <ChevronRight className="w-4 h-4" />
        </motion.p>
      </AnimatePresence>
    </div>
  );
}