import React from 'react';
import { Link } from 'react-router-dom'; // Import important
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bakery-header">
      <div className="bakery-logo">
        <Link strokeWidth="none" to="/" style={{ textDecoration: 'none', color: 'inherit' }}>BAKERY</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/produits">Produits</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">À Propos</Link></li>
      </ul>
      <button className="btn-order">ORDER NOW</button>
    </nav>
  );
};

export default Navbar;