// pages/Navbar.jsx
import React, { useState } from 'react';
import '../src/style.css'; // Importation de style.css depuis le dossier src

function Navbar() {
  // État pour gérer l'ouverture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer le menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Liste des liens de navigation (pour éviter la répétition)
  const navItems = [
    { name: 'À propos', href: '#about', active: true },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    // { name: 'Formation', href: '#formation' },
    { name: 'Services', href: '#services' },
    // { name: 'YouTube', href: '#youtube' },
    { name: 'Contact', href: 'https://wa.me/2290141516389' }
  ];

  return (
    <nav className="navbar-container">
      {/* --- Section Logo (Gauche) --- */}
      <a href="/" className="nav-logo-link">
        
        <div className="text-group">
          {/* <span className="logo-name">Soglo Julsido</span> */}
          <div className="logo-name">
  <img src="/img/logo.png" alt="Logo SJE" />
  <div className="name-wrapper">
    <span className="first-name">Soglo</span>
    <span className="last-name">Emérus</span>
  </div>
</div>
        </div>
      </a>

      {/* --- Menu Desktop (Centre) --- */}
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <a 
              href={item.href} 
              className={`nav-link ${item.active ? 'active' : ''}`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* --- Bouton Contact Desktop (Droite) --- */}
      <button className="contact-btn-desktop">
        {/* Icône de paper plane de Font Awesome */}
        <i className="fa-solid fa-paper-plane"></i>
        <a href="https://wa.me/2290141516389">Contact</a>
      </button>

      {/* --- Menu Hamburger Mobile --- */}
      <div 
        className={`hamburger-menu ${isMenuOpen ? 'is-active' : ''}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* --- Panneau Mobile Déroulant --- */}
      <div className={`nav-mobile-panel ${isMenuOpen ? 'is-open' : ''}`}>
        <ul className="nav-mobile-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="nav-mobile-link"
                onClick={toggleMenu} // Ferme le menu après un clic sur un lien
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button className="contact-btn-mobile">
              <i className="fa-solid fa-paper-plane"></i>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;