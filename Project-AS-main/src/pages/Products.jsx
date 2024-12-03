import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import '../styles/Products.css'; 
import ProductCard from '../components/ProductCard';
import { deleteProduct } from '../services/api';

const Product = () => {
  return (
    <div className="product-page">
      {/* Header */}
      <header className="header">
        <div className="logo">
        <img src="./src/styles/assets/logo.svg" alt="Logo Nike" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Black Friday</a></li>
            <li><a href="/">Lançamentos</a></li>
            <li><a href="/">Ofertas</a></li>
            <li><a href="/">Masculino</a></li>
            <li><a href="/">Feminino</a></li>
            <li><a href="/">Infantil</a></li>
            <li><a href="/">SNKRS</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Buscar" />
        </div>
      </header>

      <div className="banner">
        <span>ENCONTRE O SEU TÊNIS IDEAL</span>
      </div>

      <div className='products'>
        <section className="product-images">
        <div className="product-image">
          <img src="./src/styles/assets/dunk1.png" alt="Tênis 1" />
        </div>
        <div className="product-image">
          <img src="./src/styles/assets/dunk2.png" alt="Tênis 2" />
        </div>
        <div className="product-image">
          <img src="./src/styles/assets/dunk3.png" alt="Tênis 3" />
        </div>
      </section>
      </div>
    </div>
  );
};

export default Product;