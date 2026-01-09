import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <header className="contact-hero">
        <span className="subtitle">Nous rendre visite</span>
        <h1>Contactez la Boulangerie</h1>
        <p>Une question ? Une commande spéciale ? Notre équipe est à votre écoute.</p>
      </header>

      <section className="contact-container">
        {/* Colonne de gauche : Infos */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Horaires d'ouverture</h3>
            <ul>
              <li><span>Lundi - Vendredi :</span> 7h00 - 19h00</li>
              <li><span>Samedi :</span> 7h00 - 13h00</li>
              <li><span>Dimanche :</span> Fermé</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Coordonnées</h3>
            <p>📍 12 rue de la Farine, 75000 Paris</p>
            <p>📞 01 23 45 67 89</p>
            <p>✉️ contact@artisan-bakery.fr</p>
          </div>
        </div>

        {/* Colonne de droite : Formulaire */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label>Nom complet</label>
              <input type="text" placeholder="Jean Dupont" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="jean@email.com" />
            </div>
            <div className="form-group">
              <label>Votre message</label>
              <textarea rows="5" placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </div>
            <button type="submit" className="btn-submit">Envoyer le message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;