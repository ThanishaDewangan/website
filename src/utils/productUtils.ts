import { Product } from '../types';

export const filterNewArrivals = (products: Product[]) => products.slice(0, 4);

export const filterReadyToShip = (products: Product[]) => 
  products.filter(p => p.inStock).slice(0, 4);

export const filterBestSellers = (products: Product[]) => products.slice(4, 8);

export const filterByCategory = (products: Product[], category: string) =>
  products.filter(p => p.category === category);