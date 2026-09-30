import React from 'react';
import './styles/Hero.css';

const Hero = () => {
  return (
    <>
      <div className="container" id='inicio'>
        {/* 2. Usa la variable importada en el src */}
        <img src='portada-joel.png' alt="Mi Primer Año Logo" className="hero-img" />
      </div>
    </>
  );
}

export default Hero;