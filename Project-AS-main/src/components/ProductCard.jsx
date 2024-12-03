import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onDelete }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>R$ {product.price.toFixed(2)}</p>
    <Link to={`/products/${product.id}`} className="details-link">Detalhes</Link>
    <button onClick={() => onDelete(product.id)}>Excluir</button>
  </div>
);

export default ProductCard;