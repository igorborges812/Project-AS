import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';
import { deleteProduct } from '../services/api';

const Products = () => {
  const { products, setProducts, loading } = useFetchProducts();

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    });
  };

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <main className="products-container">
      <h2>Produtos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </main>
  );
};

export default Products;