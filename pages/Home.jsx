// pages/Home.jsx
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../src/style.css';

function Home() {
useEffect(() => {
    const observerOptions = {
      threshold: 0.15 // Déclenche l'animation quand 15% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // On observe tous les éléments qui ont la classe "reveal"
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Nettoyage
  }, []);

  const [activeTab, setActiveTab] = useState('Archivage');
  const [openQuestion, setOpenQuestion] = useState(null);

 const faqData = {
  'Archivage': [
    { q: "Pourquoi numériser mes archives physiques ?", a: "La numérisation sécurise vos données contre l'usure physique et permet une recherche instantanée par mots-clés, optimisant ainsi votre temps." },
    { q: "Qu'est-ce qu'un système de gestion documentaire ?", a: "C'est un logiciel (ou SaaS) que je conçois pour organiser, stocker et suivre vos documents numériques de manière structurée." },

    // --- AJOUTS ---
    { q: "En quoi votre profil d’archiviste et de développeur est-il un avantage ?", a: "Je conçois des solutions numériques en comprenant à la fois les exigences techniques et les bonnes pratiques archivistiques. Cela garantit des outils fiables, adaptés et conformes aux standards du domaine." },
    { q: "Pouvez-vous mettre en place un système d’archivage complet ?", a: "Oui. Je peux vous accompagner depuis l’audit documentaire jusqu’à la mise en place d’un SGED, en intégrant des workflows, métadonnées et processus de conservation." }
  ],

  'Développement': [
    { q: "Quelles technologies utilisez-vous ?", a: "Je me spécialise en Next.js, React et Node.js pour garantir des interfaces rapides, modernes et évolutives." },
    { q: "Mon site sera-t-il adapté aux mobiles ?", a: "Absolument. Tous mes projets sont conçus en 'Responsive Design' pour fonctionner parfaitement sur smartphone, tablette et PC." },

    // --- AJOUTS ---
    { q: "Pouvez-vous intégrer un backend ou une base de données ?", a: "Oui. J’utilise Node.js, Express et diverses bases (MongoDB, SQL) pour créer des API sécurisées et fiables selon les besoins du projet." },
    { q: "Combien de temps prend la conception d’un projet ?", a: "La durée dépend de sa complexité, mais je fournis systématiquement une estimation claire après l’audit initial." }
  ],

  'Collaboration': [
    { q: "Proposez-vous une maintenance après projet ?", a: "Oui, j'offre un accompagnement technique pour m'assurer que votre solution reste performante et à jour." },
    { q: "Comment se déroule un projet avec vous ?", a: "On commence par un audit de vos besoins, suivi d'une phase de design (Figma), du développement, et enfin du déploiement." },

    // --- AJOUTS ---
    { q: "Travaillez-vous à distance ?", a: "Oui, je collabore à distance ou en présentiel selon les besoins. Tous les échanges peuvent se faire par visio ou messagerie." },
    { q: "Acceptez-vous les petites missions ou micro-projets ?", a: "Oui. Que ce soit une page web, un audit documentaire ou une identité visuelle, je prends également en charge les projets de petite envergure." }
  ],

  'Création de contenu': [
    { q: "Créez-vous du contenu professionnel ?", a: "Oui. Je produis du contenu clair, pédagogique et orienté valeur ajoutée, notamment pour le numérique et la gestion documentaire." },
    { q: "En quoi consiste votre chaîne YouTube Sagesse Stoïcienne ?", a: "Je partage des principes stoïciens modernes pour aider chacun à développer discipline, clarté mentale et efficacité personnelle." }
  ]
};

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div>
        <Navbar/>
        <section className="hero-section" id='top'>
     
      {/* Côté Gauche : Infos */}
      <div className="hero-content" >
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
            <a href="#projects">Voir mes projets</a> 
          </button>
          <button className="secondary-btn">
  <i className="fa-brands fa-whatsapp"></i>
  <a 
    href="https://wa.me/2290141516389" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Me contacter
  </a>
</button>
        </div>
      </div>

      {/* Côté Droit : Visuel */}
      <div className="hero-visual-side">
        <div className="photo-frame">
          {/* <i className="fa-solid fa-user-tie" style={{fontSize: '50px', opacity: 0.2, marginBottom: '15px'}}></i> */}

        </div>

      </div>
    </section>

    {/* --- Section À Propos --- */}
<section className="about-section reveal"  id="about">
  <div className="about-text-content">
    <h2>À propos  <span>de moi</span></h2>
    <p className="about-paragraph">
      Je suis <b>Soglo Julsido Émérus</b>, étudiant en Sciences et Techniques de l'Information Documentaire à l'ENA (Université d'Abomey-Calavi, Bénin). 
      <b> Depuis 2021</b>, je développe des <b>solutions numériques concrètes</b> pour moderniser la gestion de l'information, des archives et des services institutionnels.
    </p>
    
    <div className="about-quote">
      « Je ne sépare pas le fond de la forme : une archive bien gérée mérite une interface bien conçue. »
    </div>
  </div>

  <div className="about-cards-grid reveal">
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
<section className="skills-section reveal" id="skills">
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
        <span className="skill-tag">React js</span>
        <span className="skill-tag">Next js</span>
        <span className="skill-tag">Node js</span>
        <span className="skill-tag">HTML/CSS/JS</span>
        <span className="skill-tag">Figma</span>
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
<section className="projects-section reveal" id="projects">
  <h2>Mes <span>Projets</span></h2>

  <div className="projects-grid">
    {/* Projet 1: Myena */}
    <div className="project-card">
      <div className="project-image">
        <img src="../img/myena.png" alt="" />
      </div>
      <div className="project-info">
        <h3>Myena</h3>
        <p>Plateforme numérique conçue pour améliorer la gestion des archives et de la documentation.</p>
        <div className="project-tags">
          <span className="p-tag">React js</span>
          <span className="p-tag">Node js</span>
          <span className="p-tag">CSS</span>
        </div>
        <a href="https://my-ena-1.netlify.app/" className="project-link">
          Voir le projet <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
    {/* Projet 2: Hg  Bénin */}
    <div className="project-card">
      <div className="project-image">
        <img src="../img/hgbenin.png" alt="" />
      </div>
      <div className="project-info">
        <h3>HG Bénin</h3>
        <p>Boutique de vente d'accessoires informatiques.</p>
        <div className="project-tags">
          <span className="p-tag">React js </span>
          <span className="p-tag">Node js</span>
          <span className="p-tag">CSS</span>
        </div>
        <a href="https://hgbenin.com/" className="project-link">
          Voir le projet <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

    {/* Projet 3: Pichflow */}
    <div className="project-card">
      <div className="project-image">
        <img src="../img/pichflow.png" alt="" />
      </div>
      <div className="project-info">
        <h3>Pichflow </h3>
        <p>Pichflow automatise le marketing, le copywriting et la facturation dans un interface simple</p>
        <div className="project-tags">
          <span className="p-tag">Next js</span>
          <span className="p-tag">CSS</span>
        </div>
        <a href="https://pichflow.vercel.app/" className="project-link">
          Voir le projet <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>


    {/* Projet 4: Teleoff */}
    <div className="project-card">
      <div className="project-image">
        <img src="../img/teleoff.png" alt="" />
      </div>
      <div className="project-info">
        <h3>Téléoff</h3>
        <p>Téléoff est la plateforme de gestion centralisée pour vos appareils Shelly. Surveillance, contrôle et automatisation en temps réel.</p>
        <div className="project-tags">
          <span className="p-tag">React js</span>
          <span className="p-tag">Node js</span>
        </div>
        <a href="https://tele-off.com/" className="project-link">
          Voir le projet <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div className="project-card">
      <div className="project-image">
        <img src="../img/pharma24.png" alt="" />
      </div>
      <div className="project-info">
        <h3>Pharma24</h3>
        <p>Application web permettant de trouver une pharmacie de garde en temps réel dans sa zone, scanner les codes qr et codes bar des documents.</p>
        <div className="project-tags">
          <span className="p-tag">HTML</span>
          <span className="p-tag">CSS</span>
          <span className="p-tag">JavaScript</span>
          <span className="p-tag">Next js</span>
        </div>
        <a href="https://pharma24.vercel.app/" className="project-link">
          Voir le projet <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

   

    {/* Projet 5: Gestion de Stock */}
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

    

  </div>
</section>


{/* --- Section Services --- */}
<section className="services-section reveal"  id="services">
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
        <h2>Des <span>questions</span> ? Voiyons.</h2>

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


 <a href="#top" className="back-to-top" aria-label="Retour en haut">
        <i className="fa-solid fa-play triangle-up"></i>
      </a>





 <Footer/>

    </div>
    
  );
}

export default Home;