import { useState, useEffect } from 'react';
import { Product } from '../types';
import * as api from '../services/api';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await api.getProducts();
        if (mounted) {
          setProducts(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch products');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, []);

  const refetch = async () => {
    setLoading(true);
    try {
      const data = await api.getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, refetch };
}