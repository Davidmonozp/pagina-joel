import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import './styles/Footer.css';

// Importa tu ilustración de la ramita si la tienes localmente
// import branchIcon from '../../assets/branch.png'; 

const Footer = () => {
    return (
        <footer className="custom-footer">
            {/* Borde orgánico superior */}
            {/* <div className="footer-top-border">
                <svg
                    className="top-border-svg"
                    viewBox="0 0 1440 60"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,30 C320,60 420,0 720,25 C1020,50 1200,10 1440,25 L1440,60 L0,60 Z"
                        fill="#f7f4ee"
                    />
                </svg>
            </div> */}

            {/* Contenedor y SVG de ondas animadas de fondo */}
            <div className="footer-wave-container">
                <svg
                    className="animated-svg-bg"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1600 900"
                    preserveAspectRatio="xMidYMax slice"

                >
                    <defs>
                        <linearGradient id="bg">
                            <stop offset="0%" style={{ stopColor: '#167a603a' }}></stop>
                            <stop offset="50%" style={{ stopColor: '#c1bfa833' }}></stop>
                            <stop offset="100%" style={{ stopColor: '#798c5e7d' }}></stop>
                        </linearGradient>
                        <path
                            id="wave"
                            fill="url(#bg)"
                            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                            s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                        />
                    </defs>
                    <g>
                        <use xlinkHref="#wave" opacity=".3">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="10s"
                                calcMode="spline"
                                values="270 230; -334 180; 270 230"
                                keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                        <use xlinkHref="#wave" opacity=".6">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="8s"
                                calcMode="spline"
                                values="-270 230;243 220;-270 230"
                                keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                        <use xlinkHref="#wave" opacity=".9">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="6s"
                                calcMode="spline"
                                values="0 230;-140 200;0 230"
                                keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                    </g>
                </svg>
                <div className="footer-content">
                    {/* Sección Izquierda */}
                    <div className="footer-left">
                        <p className="footer-message">
                            Gracias por ser parte <br />
                            de mi primer año <span className="heart-icon">♥</span>
                        </p>
                    </div>

                    {/* Sección Central (Redes Sociales) */}
                    <div className="footer-socials">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Instagram">
                            <img src="./public/chupo.png" alt="chupo" className='icono-chupo' />

                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Facebook">
                            <img src="./public/nene.png" alt="bebe" className='icono-chupo' />

                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="WhatsApp">
                            <img src="./public/coche.png" alt="coche" className='icono-chupo' />
                        </a>
                    </div>

                    {/* Sección Derecha */}
                    <div className="footer-right">
                        <div className="footer-info">
                            <p className="made-with">
                                Hecho con <span className="heart-icon">♥</span> por mis papás
                            </p>
                            <p className="copyright">
                                © 2026 Mi Primer Año
                            </p>
                        </div>
                        {/* Ramita decorativa */}
                        {/* <img src={branchIcon} alt="Decoración de hojas" className="footer-branch" /> */}
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;