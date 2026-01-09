import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Section Header / Hero */}
      <header className="about-hero">
        <div className="hero-content">
          <span className="subtitle">Notre Passion</span>
          <h1>L'Art de la Boulangerie Traditionnelle</h1>
          <p>
            Depuis des générations, nous cultivons le goût de l'authentique 
            avec des ingrédients sourcés localement et un savoir-faire artisanal.
          </p>
        </div>
      </header>

      {/* Section Notre Histoire (Style avec courbes) */}
      <section className="about-history">
        <div className="history-container">
          <div className="history-image">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" alt="Farine et blé" />
          </div>
          <div className="history-text">
            <h2>Pétrir le temps, cuire l'émotion</h2>
            <p>
              Tout a commencé dans un petit fournil de village. Notre secret ? 
              Le temps. Nos levains fermentent lentement pour révéler des arômes 
              uniques et une texture incomparable.
            </p>
            <button className="btn-primary">Découvrir nos fours</button>
          </div>
        </div>
      </section>

      {/* Section Valeurs (Reprend le style "Why Choose Us") */}
      <section className="about-values">
        <div className="value-card">
          <div className="value-icon">🌾</div>
          <h3>100% Bio</h3>
          <p>Toutes nos farines sont certifiées agriculture biologique.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">🤝</div>
          <h3>Local</h3>
          <p>Nous travaillons en direct avec les meuniers de notre région.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">🥖</div>
          <h3>Tradition</h3>
          <p>Zéro additif, zéro conservateur. Juste l'essentiel.</p>
        </div>
      </section>
    </div>
  );
};

export default About;