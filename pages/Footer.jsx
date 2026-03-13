// pages/Footer.jsx
import React from 'react';
import '../src/style.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      {/* Icônes de réseaux sociaux - Font Awesome */}
      <div className="footer-socials">
       
        <a href="https://www.facebook.com/eme.lux.8609" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="mailto:emerussoglo@gmail.com" className="social-icon">
          <i className="fa-solid fa-envelope"></i>
        </a>

         <a href="https://www.tiktok.com/@stocisme.modern" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa-brands fa-tiktok"></i>
        </a>
         <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>

      {/* Texte de création */}
      <p className="footer-passion">
        Conçu avec <span>passion</span> et créativité.
      </p>

      {/* Droits d'auteur */}
      <p className="footer-copyright">
        © {currentYear} SOGLO Julsido Émérus — Tous droits réservés
      </p>
    </footer>
  );
}

export default Footer;