import React from 'react';
import './Accueil.css'; // Importation du style séparé

const Accueil = () => {
  return (
    <div className="bakery-container">
      

      <section className="hero-section">
        <div className="hero-card">
          <h1 className="hero-title">Freshly Baked, Just for You!</h1>
          <p>Artisanal pastries made daily with organic ingredients.</p>
          
          <div className="hero-grid">
            <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a" alt="Croissant" />
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff" alt="Bread" className="img-offset" />
            <img src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd" alt="Pastry" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;