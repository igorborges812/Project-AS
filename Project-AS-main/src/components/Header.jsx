import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => (
  <header className="header-container">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Produtos</Link>
    </nav>
  </header>
);

export default Header;