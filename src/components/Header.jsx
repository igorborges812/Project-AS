import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header-container">
    <h1 className="logo">Nike Store</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Produtos</Link>
    </nav>
  </header>
);

export default Header;