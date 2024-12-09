import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import perfiIcon from '../assets/icon-perfil.png'
import perfiIconModal from '../assets/icon-add-user.png'
import AccountModal from './MiPerfil/ProfileModal ';
import { CambioContraseñaModal } from './Usuario/CambiarContraseña';
import '../styles/NavAdmin.css'

export const NavAdmin = () => {

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showPerfil, setShowPerfil] = useState(false);
  const mostrarPerfil = () => setShowPerfil(true);
  const ocultarPerfil = () => setShowPerfil(false);

  // Datos simulados del usuario
  const user = {
    nombre: "Luis Alberto Hernandez",
    correo: "WichoHernandez@gmail.com",
    profileImage: perfiIconModal,
  };

  
  return (
    <div className='colorNav m-4' style={{borderRadius: 12}}>
      <Navbar expand="lg" style={{ color: 'white' }}>
        <Container>
          <Navbar.Brand href="/PrincipalAdmin" className='size-font-title-nav' style={{color: 'white',}}>U Z A C H I</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white'}}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <NavDropdown className='size-font-subtitle ' title={<span style={{ color: 'white' }}>Catálogos</span>}>
                <NavDropdown.Item href="/GestionTransporte" className='dropdown-item'>Transporte</NavDropdown.Item>
                <NavDropdown.Item href="/AgregarComunidades" className='dropdown-item'>Comunidades</NavDropdown.Item>
                <NavDropdown.Item href="/ClientesFrecuentes" className='dropdown-item'>Clientes frecuentes</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className='ms-3 no-caret' title={<img src={perfiIcon} style={{width: '40px'}}></img>}>
                <NavDropdown.Item onClick={mostrarPerfil}  className='dropdown-item'>Mi cuenta</NavDropdown.Item>
                <NavDropdown.Item onClick={handleShowModal} className='dropdown-item'>Cambiar contraseña</NavDropdown.Item>
                <NavDropdown.Item href="/" className='dropdown-item'>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <AccountModal show={showPerfil} handleClose={ocultarPerfil} user={user} />
      <CambioContraseñaModal showModal={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default NavAdmin;
