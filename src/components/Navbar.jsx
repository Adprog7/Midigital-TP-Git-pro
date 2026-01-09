import React from 'react';
import './Navbar.css'; // Si vous voulez séparer le style

const Navbar = () => {
  return (
    <nav className="bakery-header">
      <div className="bakery-logo">BAKERY</div>
      <ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button className="btn-order">ORDER NOW</button>
    </nav>
  );
};

export default Navbar;