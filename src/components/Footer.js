import React from 'react';
import facebookIcon from '../assets/facebook (1).png'; 
import instagramIcon from '../assets/instagram.png'; 
import whatsappIcon from '../assets/whatsapp.jpeg'; 
import logo from '../assets/logo.jpeg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line"></div>   
      <div className="footer-content">
        <div className="footer-logo">
          <br></br>
          <p>Unión de Comunidades Productoras Forestales</p>
          <p>Zapotecos-Chinantecos de la Sierra Juárez</p><br></br>  
          <p>Organizaciones Sociales del Sector Forestal</p>
        </div>
        <div className='footer-logo'>
        <img src={logo} alt="logo" /> 
        </div>
        <div className="footer-contact">
          <h3>CONTACTO</h3>
          <p>Teléfono: 951 539 2008</p>
          <p>Correo: <a href="mailto:uzachi89@gmail.com">uzachi89@gmail.com</a></p>
          <p>Dirección: Av. Hidalgo, 68760 Capulálpam de Méndez, Oax.</p>
        </div>
        <div className="footer-socials">
          <h3 className='redes-socials'>REDES SOCIALES</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Whatsapp">Whatsapp</a>
          </div>
          <div className="social-images">
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <img className='instagram' src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" aria-label="Whatsapp">
              <img className='whatsapp' src={whatsappIcon} alt="Whatsapp" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Copyright: UZACHI</p>
      </div>
    </footer>
  );
};

export default Footer;
