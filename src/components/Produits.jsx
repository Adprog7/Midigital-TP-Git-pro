import React from 'react';
import './Produits.css';

const Produits = () => {
  const products = [
    {
      id: 1,
      name: 'Pains Artisanaux',
      description: 'Farines bio, levain naturel et 24h de fermentation.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800',
      price: 'À partir de 1.20€'
    },
    {
      id: 2,
      name: 'Viennoiseries',
      description: 'Pur beurre de baratte pour un feuilletage croustillant.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800',
      price: 'À partir de 1.40€'
    },
    {
      id: 3,
      name: 'Pâtisseries',
      description: 'Des créations saisonnières peu sucrées et gourmandes.',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800',
      price: 'À partir de 3.50€'
    }
  ];

  return (
    <div className="presentation-container">
      <header className="pres-header">
        <h1>Nos Produits</h1>
        <p>Le goût de l'authentique, chaque matin.</p>
      </header>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produits;