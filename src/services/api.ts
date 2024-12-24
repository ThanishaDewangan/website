import { Product, Category, Order } from '../types';
import { mockProducts } from '../data/mockData';

// API base URL - can be switched to real backend URL later
const API_URL = 'https://api.mytalorzone.com';

// Simulate API delay for development
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProducts(): Promise<Product[]> {
  try {
    // In development, return mock data
    if (import.meta.env.DEV) {
      await delay(500); // Simulate network delay
      return mockProducts;
    }
    
    // In production, use real API
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback to mock data if API fails
    return mockProducts;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    if (import.meta.env.DEV) {
      await delay(500);
      // Generate categories from mock products
      const categories = Array.from(new Set(mockProducts.map(p => p.category)))
        .map(name => ({
          id: name,
          name: name.charAt(0).toUpperCase() + name.slice(1),
          description: `${name} collection`,
          imageUrl: mockProducts.find(p => p.category === name)?.imageUrl || '',
          featured: true
        }));
      return categories;
    }

    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    if (import.meta.env.DEV) {
      await delay(500);
      const product = mockProducts.find(p => p.id === id);
      if (!product) throw new Error('Product not found');
      return product;
    }

    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function createOrder(orderData: Order): Promise<Order | null> {
  try {
    if (import.meta.env.DEV) {
      await delay(500);
      return {
        ...orderData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    }

    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    if (!response.ok) throw new Error('Failed to create order');
    return response.json();
  } catch (error) {
    console.error('Error creating order:', error);
    return null;
  }
}