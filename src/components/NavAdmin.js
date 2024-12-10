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

  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  
  const handleShowAccountModal = () => setShowAccountModal(true);
  const handleCloseAccountModal = () => setShowAccountModal(false);
  
  const handleShowChangePasswordModal = () => setShowChangePasswordModal(true);
  const handleCloseChangePasswordModal = () => setShowChangePasswordModal(false);
  
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

              <NavDropdown className='ms-3 no-caret custom-dropdown' title={<img src={perfiIcon} style={{width: '40px'}}></img>}>
                <NavDropdown.Item onClick={handleShowAccountModal} className='dropdown-item'>Mi cuenta</NavDropdown.Item>
                <NavDropdown.Item onClick={handleShowChangePasswordModal} className='dropdown-item'>Cambiar contraseña</NavDropdown.Item>
                <NavDropdown.Item href="/" className='dropdown-item'>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <AccountModal show={showAccountModal} handleClose={handleCloseAccountModal} user={user}/>

      <CambioContraseñaModal showModal={showChangePasswordModal} handleClose={handleCloseChangePasswordModal}/>

    </div>
  );
};

export default NavAdmin;
