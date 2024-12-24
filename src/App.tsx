import React from 'react';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import HeroSlider from './components/HeroSlider';
import ProductSection from './components/ProductSection';
import ShopByCategory from './components/ShopByCategory';
import FeaturedCollection from './components/FeaturedCollection';
import Newsletter from './components/Newsletter';
import CustomerReviews from './components/CustomerReviews';
import InstagramFeed from './components/InstagramFeed';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SignupOffer from './components/SignupOffer';
import { useProducts } from './hooks/useProducts';

export default function App() {
  const { products } = useProducts();
  
  const newArrivals = products.slice(0, 4);
  const readyToShip = products.filter(p => p.inStock).slice(0, 4);
  const bestSellers = products.slice(4, 8);

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSlider />
        <ProductSection title="New Arrivals" products={newArrivals} viewAllLink="/new-arrivals" />
        <ProductSection title="Ready to Ship" products={readyToShip} viewAllLink="/ready-to-ship" />
        <FeaturedCollection />
        <ShopByCategory />
        <ProductSection title="Best Sellers" products={bestSellers} viewAllLink="/best-sellers" />
        <Newsletter />
        <CustomerReviews />
        <InstagramFeed />
        <FAQ />
      </main>
      <Footer />
      <SignupOffer />
    </div>
  );
}