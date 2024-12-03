import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error('Erro ao carregar produtos:', error));
  }, []);

  return { products, setProducts, loading };
};

export default useFetchProducts;