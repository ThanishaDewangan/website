import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Bridal Collection 2024",
    subtitle: "Exquisite designs for your special day",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?auto=format&fit=crop&q=80",
    cta: "Explore Collection"
  },
  {
    id: 2,
    title: "Traditional Elegance",
    subtitle: "Timeless classics with modern touch",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80",
    cta: "Shop Now"
  },
  {
    id: 3,
    title: "Summer Fusion",
    subtitle: "Where comfort meets style",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80",
    cta: "View Latest"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="text-white max-w-2xl px-8 md:px-16">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-serif font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-white/90"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 text-lg"
              >
                {slides[currentSlide].cta} <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}