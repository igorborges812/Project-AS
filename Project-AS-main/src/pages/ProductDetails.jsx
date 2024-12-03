import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((response) => setProduct(response.data));
  }, [id]);

  if (!product) return <p>Carregando detalhes do produto...</p>;

  return (
    <main className="product-details">
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>R$ {product.price.toFixed(2)}</p>
        <div className="add-to-cart-container">
          <button>Adicionar ao Carrinho</button>
          <button className="favorite-button">Favoritar</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;