import React, { useState } from 'react';
import './styles/Navbar.css';
import logoImage from '../assets/logo-primer-año.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}


        <div className="navbar-logo" onClick={() => scrollToSection('inicio')}>
          <img src={logoImage} alt="Mi Primer Año Logo" className="logo-img" />
        </div>




        {/* Botón hamburguesa animado */}
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Enlaces de navegación */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li onClick={() => scrollToSection('inicio')}>Inicio</li>
          <li onClick={() => scrollToSection('historia')}>Mi Historia</li>
          <li onClick={() => scrollToSection('momentos')}>Momentos</li>
          {/* <li onClick={() => scrollToSection('galeria')}>Galería</li> */}
          <li onClick={() => scrollToSection('messagesList')}>Comentarios</li>

          {/* Botón visible solo dentro del menú móvil */}
          <button
            className="navbar-btn mobile-btn"
            onClick={() => scrollToSection('messages')}
          >
            ❤️ Deja tu mensaje
          </button>
          {/* <button
            className="navbar-btn mobile-btn"
            onClick={() => {
              navigate('/admin/comentarios'); 
              setMenuOpen(false);             
            }}
          >
            Administrador
          </button> */}
        </ul>

        {/* Botón de escritorio */}
        <button
          className="navbar-btn desktop-btn"
          onClick={() => scrollToSection('messages')}
        >
          <i className="fa-regular fa-heart"></i> Deja tu mensaje
        </button>
      </div>
    </nav>
  );
};

export default Navbar;