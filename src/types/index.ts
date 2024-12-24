// Product related types
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Cart related types
export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// Order related types
export interface Order {
  id?: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress: Address;
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  size: string;
  color: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

// Sorting
export type SortOption = 'newest' | 'price-low' | 'price-high' | 'name';