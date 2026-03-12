// pages/Home.jsx
import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../src/style.css';

function Home() {

  const [activeTab, setActiveTab] = useState('Archivage');
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = {
    'Archivage': [
      { q: "Pourquoi numériser mes archives physiques ?", a: "La numérisation sécurise vos données contre l'usure physique et permet une recherche instantanée par mots-clés, optimisant ainsi votre temps." },
      { q: "Qu'est-ce qu'un système de gestion documentaire ?", a: "C'est un logiciel (ou SaaS) que je conçois pour organiser, stocker et suivre vos documents numériques de manière structurée." }
    ],
    'Développement': [
      { q: "Quelles technologies utilisez-vous ?", a: "Je me spécialise en Next.js, React et Node.js pour garantir des interfaces rapides, modernes et évolutives." },
      { q: "Mon site sera-t-il adapté aux mobiles ?", a: "Absolument. Tous mes projets sont conçus en 'Responsive Design' pour fonctionner parfaitement sur smartphone, tablette et PC." }
    ],
    'Collaboration': [
      { q: "Proposez-vous une maintenance après projet ?", a: "Oui, j'offre un accompagnement technique pour m'assurer que votre solution reste performante et à jour." },
      { q: "Comment se déroule un projet avec vous ?", a: "On commence par un audit de vos besoins, suivi d'une phase de design (Figma), du développement, et enfin du déploiement." }
    ]
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div>
        <Navbar/>
        <section className="hero-section">
    
      {/* Côté Gauche : Infos */}
      <div className="hero-content">
        <div className="status-badge">
          <span className="dot-pulse"></span>
          Disponible — missions & collaborations
        </div>

        <h1 className="hero-title">
          <span>SOGLO Julsido</span>

          <span className="italic-name">Emérus.</span>
        </h1>

        <p className="hero-description">
          Archiviste en formation et développeur web, je conçois des solutions 
          numériques pour moderniser la gestion de l'information, des archives 
          et des services institutionnels.
        </p>

        

        <div className="hero-btns">
          <button className="primary-btn">
            <i className="fa-solid fa-rocket"></i>
            Voir mes projets
          </button>
          <button className="secondary-btn">
            <i className="fa-solid fa-envelope"></i>
            Me contacter
          </button>
        </div>
      </div>

      {/* Côté Droit : Visuel */}
      <div className="hero-visual-side">
        <div className="photo-frame">
          <i className="fa-solid fa-user-tie" style={{fontSize: '50px', opacity: 0.2, marginBottom: '15px'}}></i>

        </div>

      </div>
    </section>

    {/* --- Section À Propos --- */}
<section className="about-section" id="about">
  <div className="about-text-content">
    <h2>À propos de <span>moi</span></h2>
    <p className="about-paragraph">
      Je suis <b>Soglo Julsido Émérus</b>, étudiant en Sciences et Techniques de l'Information Documentaire à l'ENA (Université d'Abomey-Calavi, Bénin). 
      <b> Depuis 2021</b>, je développe des <b>solutions numériques concrètes</b> pour moderniser la gestion de l'information, des archives et des services institutionnels.
    </p>
    
    <div className="about-quote">
      « Je ne sépare pas le fond de la forme : une archive bien gérée mérite une interface bien conçue. »
    </div>
  </div>

  <div className="about-cards-grid">
    {/* Carte 1 */}
    <div className="about-card">
      <div className="card-icon">
        <i className="fa-solid fa-user-graduate"></i>
      </div>
      <h3>Formation académique</h3>
      <p>ENA — Sciences & Techniques de l'Information Documentaire</p>
    </div>

    {/* Carte 2 */}
    <div className="about-card">
      <div className="card-icon">
        <i className="fa-solid fa-code"></i>
      </div>
      <h3>Développement web</h3>
      <p>React, Next.js, Node.js — interfaces modernes et fonctionnelles</p>
    </div>

    {/* Carte 3 */}
    <div className="about-card">
      <div className="card-icon">
        <i className="fa-solid fa-box-archive"></i>
      </div>
      <h3>Archivistique</h3>
      <p>Gestion documentaire, numérisation, valorisation des archives</p>
    </div>

    {/* Carte 4 */}
    <div className="about-card">
      <div className="card-icon">
        <i className="fa-solid fa-video"></i>
      </div>
      <h3>Créateur de contenu</h3>
      <p>Sagesse Stoïcienne — chaîne YouTube à 4 000+ abonnés</p>
    </div>
  </div>
</section>



{/* --- Section Compétences --- */}
<section className="skills-section" id="skills">
  <div className="skills-header">
    <h2>Mes <span>compétences</span></h2>
    <p className="skills-subtitle">
      Un profil hybride mêlant gestion documentaire, développement web et création de contenu.
    </p>
  </div>

  <div className="skills-grid">
    {/* Archivistique */}
    <div className="skill-card">
      <div className="skill-icon-box">
        <i className="fa-solid fa-sitemap"></i>
      </div>
      <h3>Archivistique & Documentation</h3>
      <div className="skill-tags">
        <span className="skill-tag">Traitement doc.</span>
        <span className="skill-tag">Conservation</span>
        <span className="skill-tag">SGED</span>
        <span className="skill-tag">Valorisation</span>
      </div>
    </div>

    {/* Développement Web */}
    <div className="skill-card">
      <div className="skill-icon-box">
        <i className="fa-solid fa-laptop-code"></i>
      </div>
      <h3>Développement Web</h3>
      <div className="skill-tags">
        <span className="skill-tag">React</span>
        <span className="skill-tag">Next.js</span>
        <span className="skill-tag">Node.js</span>
        <span className="skill-tag">HTML/CSS/JS</span>
        <span className="skill-tag">Figma</span>
        <span className="skill-tag">Vite</span>
      </div>
    </div>

    {/* Création Graphique */}
    <div className="skill-card">
      <div className="skill-icon-box">
        <i className="fa-solid fa-palette"></i>
      </div>
      <h3>Création Graphique</h3>
      <div className="skill-tags">
        <span className="skill-tag">Canva</span>
        <span className="skill-tag">Design UI</span>
        <span className="skill-tag">Identité visuelle</span>
      </div>
    </div>

    {/* Bureautique */}
    <div className="skill-card">
      <div className="skill-icon-box">
        <i className="fa-solid fa-file-excel"></i>
      </div>
      <h3>Bureautique Avancée</h3>
      <div className="skill-tags">
        <span className="skill-tag">Excel</span>
        <span className="skill-tag">Word</span>
        <span className="skill-tag">PowerPoint</span>
      </div>
    </div>

    {/* Gestion Numérique */}
    <div className="skill-card">
      <div className="skill-icon-box">
        <i className="fa-solid fa-database"></i>
      </div>
      <h3>Gestion Numérique</h3>
      <div className="skill-tags">
        <span className="skill-tag">Bases de données</span>
        <span className="skill-tag">Numérisation</span>
        <span className="skill-tag">Processus</span>
      </div>
    </div>

    {/* Création de Contenu */}
    <div className="skill-card">
      <div className="skill-icon-box">
        <i className="fa-solid fa-clapperboard"></i>
      </div>
      <h3>Création de Contenu</h3>
      <div className="skill-tags">
        <span className="skill-tag">YouTube</span>
        <span className="skill-tag">Stratégie</span>
        <span className="skill-tag">Communauté</span>
      </div>
    </div>
  </div>
</section>


{/* --- Section Projets --- */}
<section className="projects-section" id="projects">
  <h2>Mes <span>Projets</span></h2>

  <div className="projects-grid">
    {/* Projet 1: Myena */}
    <div className="project-card">
      <div className="project-image">
        {/* Remplace par ton image réelle plus tard */}
        <div style={{width:'100%', height:'100%', background: 'linear-gradient(45deg, #111, #222)', display:'flex', alignItems:'center', justifyContent:'center'}}>
           <i className="fa-solid fa-folder-tree" style={{fontSize: '40px', color: '#333'}}></i>
        </div>
      </div>
      <div className="project-info">
        <h3>Myena</h3>
        <p>Plateforme numérique conçue pour améliorer la gestion des archives et de la documentation.</p>
        <div className="project-tags">
          <span className="p-tag">React</span>
          <span className="p-tag">Node.js</span>
        </div>
        <a href="#" className="project-link">
          Voir le projet <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

    {/* Projet 2: Gestion de Stock */}
    <div className="project-card">
      <div className="project-image">
         <div style={{width:'100%', height:'100%', background: 'linear-gradient(45deg, #111, #222)', display:'flex', alignItems:'center', justifyContent:'center'}}>
           <i className="fa-solid fa-chart-line" style={{fontSize: '40px', color: '#333'}}></i>
        </div>
      </div>
      <div className="project-info">
        <h3>Site de gestion de stock</h3>
        <p>Application web permettant de gérer des produits, catégories et statistiques.</p>
        <div className="project-tags">
          <span className="p-tag">React</span>
          <span className="p-tag">Vite</span>
          <span className="p-tag">JavaScript</span>
        </div>
        <a href="#" className="project-link">
          Voir le projet <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

    {/* Projet 3: Boutique Tech */}
    <div className="project-card">
      <div className="project-image">
         <div style={{width:'100%', height:'100%', background: 'linear-gradient(45deg, #111, #222)', display:'flex', alignItems:'center', justifyContent:'center'}}>
           <i className="fa-solid fa-laptop" style={{fontSize: '40px', color: '#333'}}></i>
        </div>
      </div>
      <div className="project-info">
        <h3>Boutique technologique</h3>
        <p>Site e-commerce responsive pour la vente d'ordinateurs, téléphones et outils informatiques.</p>
        <div className="project-tags">
          <span className="p-tag">HTML</span>
          <span className="p-tag">CSS</span>
          <span className="p-tag">JavaScript</span>
        </div>
        <a href="#" className="project-link">
          Voir le projet <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</section>


{/* --- Section Services --- */}
<section className="services-section" id="services">
  <h2>Mes <span>services</span></h2>

  <div className="services-grid">
    {/* Service 1: Développement Web */}
    <div className="service-card">
      <div className="service-icon-box">
        <i className="fa-solid fa-code"></i>
      </div>
      <h3>Développement d'interface web</h3>
    </div>

    {/* Service 2: Système d'archivage */}
    <div className="service-card">
      <div className="service-icon-box">
        <i className="fa-solid fa-server"></i>
      </div>
      <h3>Système d'archivage numérique</h3>
    </div>

    {/* Service 3: Conception graphique */}
    <div className="service-card">
      <div className="service-icon-box">
        <i className="fa-solid fa-pen-nib"></i>
      </div>
      <h3>Conception graphique</h3>
    </div>

    {/* Service 4: Audit documentaire */}
    <div className="service-card">
      <div className="service-icon-box">
        <i className="fa-solid fa-file-contract"></i>
      </div>
      <h3>Audit documentaire</h3>
    </div>

    {/* Service 5: Documents & Rapports */}
    <div className="service-card">
      <div className="service-icon-box">
        <i className="fa-solid fa-file-lines"></i>
      </div>
      <h3>Documents & Rapports pros.</h3>
    </div>

    {/* Service 6: Conseil transition */}
    <div className="service-card">
      <div className="service-icon-box">
        <i className="fa-solid fa-lightbulb"></i>
      </div>
      <h3>Conseil transition numérique</h3>
    </div>
  </div>
</section>

<section className="faq-section" id="faq">
        <h2>Tu te poses des <span>questions</span> ? Normal.</h2>

        <div className="faq-tabs">
          {Object.keys(faqData).map((tab) => (
            <button 
              key={tab}
              className={`faq-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => { setActiveTab(tab); setOpenQuestion(null); }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="faq-grid">
          {faqData[activeTab].map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openQuestion === index ? 'open' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleQuestion(index)}>
                {item.q}
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>







 <Footer/>

    </div>
    
  );
}

export default Home;