import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import perfiIcon from '../assets/icon-perfil.png'
import { Link } from 'react-router-dom'; 
import '../styles/NavAdmin.css'

export const NavAdmin = () => {
  return (
    <div className='colorNav m-4' style={{borderRadius: 12}}>
      <Navbar expand="lg" style={{ color: 'white' }}>
        <Container>
          <Navbar.Brand href="/" className='size-font-title-nav' style={{color: 'white',}}>U Z A C H I</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white'}}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <NavDropdown className='size-font-subtitle ' title={<span style={{ color: 'white' }}>Catalogos</span>}>
                <NavDropdown.Item href="/GestionTransporte" className='dropdown-item'>Transporte</NavDropdown.Item>
                <NavDropdown.Item href="/AgregarComunidades" className='dropdown-item'>Comunidades</NavDropdown.Item>
                <NavDropdown.Item href="#Liga" className='dropdown-item'>Clientes frecuentes</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#home" className='size-font-subtitle mx-3' style={{ color: 'white' }}>Historial</Nav.Link>
              <Nav.Link href="#link"  className='size-font-subtitle' style={{ color: 'white' }}>Contacto</Nav.Link>
              <NavDropdown className='ms-3' title={<img src={perfiIcon} style={{width: '40px'}}></img>}>
                <NavDropdown.Item href="#Liga" className='dropdown-item'>Mi cuenta</NavDropdown.Item>
                <NavDropdown.Item href="#Liga" className='dropdown-item'>Cambiar contraseña</NavDropdown.Item>
                <NavDropdown.Item href="#Liga" className='dropdown-item'>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavAdmin;
