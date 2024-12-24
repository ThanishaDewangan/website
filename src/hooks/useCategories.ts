import { useState, useEffect } from 'react';
import { Category } from '../types';
import * as api from '../services/api';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchCategories() {
      try {
        setLoading(true);
        const data = await api.getCategories();
        if (mounted) {
          setCategories(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch categories');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchCategories();

    return () => {
      mounted = false;
    };
  }, []);

  return { categories, loading, error };
}