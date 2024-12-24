import { useState } from 'react';
import * as api from '../services/api';

export function useOrder() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createOrder = async (orderData: any) => {
    setLoading(true);
    setError(null);
    try {
      const order = await api.createOrder(orderData);
      return order;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create order');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createOrder, loading, error };
}