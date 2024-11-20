import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import facebookIcon from '../assets/facebook (1).png';
import instagramIcon from '../assets/instagram.png';
import whatsappIcon from '../assets/whatsapp.jpeg';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="text-center text-md-left" style={{backgroundColor: 'white'}}>
      <div style={{ borderTop: '1px solid #A5B4FC' }}></div>
      <Container fluid className="py-4">
        <Row>
          {/* Solo es visible en pantallas grandes*/}
          <Col md="3" className="text-md-left mb-3 mb-md-0 d-none d-md-block ">
            <h6 className='footer-title paragraph-spacing'>Unión de Comunidades Productoras Forestales Zapotecos-Chinantecos de la Sierra Juárez</h6>
            <p className='footer-title paragraph-spacing'>Organizaciones Sociales del Sector Forestal</p>
          </Col>
          {/* Logo */}
          <Col md="3" className="text-center mb-3 mb-md-0 d-none d-md-block">
            <img className='logo-img' src={logo} alt="UZACHI" style={{ width: '80px' }} />
          </Col>
          {/* Sección Central - Contacto */}
          <Col md="3" className="mb-3 mb-md-0 ">
            <h6 className='footer-title' style={{ fontWeight: 'bold', textAlign: 'center' }}>CONTACTO</h6>
            <div className="text-left">
              <p><span className="footer-title" style={{ fontWeight: 'bold' }}>Teléfono:</span> <span className="data-text">951 539 2008</span></p>
              <p><span className="footer-title" style={{ fontWeight: 'bold' }}>Correo:</span> <span className="data-text"><a href="mailto:uzachi89@gmail.com" className="email-link">uzachi89@gmail.com</a></span></p>
              <p><span className="footer-title" style={{ fontWeight: 'bold' }}>Dirección:</span> <span className="data-text">Av. Hidalgo, 68760 Capulálpam de Méndez, Oax.</span></p>
            </div>
          </Col>
          <Col md="3" className="text-center">
            <h6 className="footer-title">REDES SOCIALES</h6>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="mx-2">
                <img src={facebookIcon} alt="Facebook" style={{ width: '30px' }} />
              </a>
              <a href="https://www.instagram.com" className="mx-2">
                <img src={instagramIcon} alt="Instagram" style={{ width: '30px' }} />
              </a>
              <a href="https://wa.me/9515392008" className="mx-2">
                <img src={whatsappIcon} alt="WhatsApp" style={{ width: '30px' }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="custom-footer-line py-2">
        <p className="mb-0">© 2024 Copyright: UZACHI</p>
      </div>
    </footer>
  );
};

export default Footer;
