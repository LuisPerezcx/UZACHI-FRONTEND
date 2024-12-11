import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';  
import logo from '../../assets/Iniciar_sesion.png';
import Swal from 'sweetalert2';

export const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // Estado para el mensaje de error
  const [errorMessage, setErrorMessage] = useState(''); 

  const navigate = useNavigate();
  
  const handleLogin = () => {
    const adminUser = {
      usuario: 'admin',
      contrasena: 'admin123',
      rol: 'admin',
    };

    const MAX_TAM_USUARIO = 25;
    const MAX_TAM_CONTRASENA = 20;

    switch (true) {
      case !usuario && !contrasena:
        setErrorMessage('Los campos de contraseña y usuario no pueden estar bacios');      
        break;

      case !contrasena:
        setErrorMessage('El campo de contraseña no puede estar bacio');
        break;

      case !usuario:
        setErrorMessage('El campo de usuario no puede estar bacio');
        break;

      case usuario.length > MAX_TAM_USUARIO:
        setErrorMessage('El usuario supero el limite de 25 caracteres');
        break;

      case contrasena.length > MAX_TAM_CONTRASENA:
        setErrorMessage('La contraseña supero el limite de 25 caracteres'); 
        break;

      case usuario !== adminUser.usuario:
        setErrorMessage('El usuario que ingresaste no es correcto');     
        break;

      case contrasena !== adminUser.contrasena && usuario === adminUser.usuario:
        setErrorMessage('La contraseña que se ingreso es incorrecta');  
        break;
  
      case usuario === adminUser.usuario && contrasena === adminUser.contrasena:
        navigate('/PrincipalAdmin');
        setErrorMessage('');
        break;

      default:
        setErrorMessage('Por favor, ingresa un usuario válido.');
        break;
    }
  };

  return (
    <div className="container-login d-flex flex-column align-items-center justify-content-between">
      <div className="card-login">
        <div className="position-relative mb-4">
          <img
            src={logo}
            alt="Logo"
            className="img-login"
          />
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label-login">
              Usuario
            </label>
            <input
              type="email"
              id="email"
              className="form-control form-control-login"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label-login">
              Contraseña
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="form-control form-control-login"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <div className="form-check mb-3 text-start">
            <input
              type="checkbox"
              id="showPasswordCheck"
              className="form-check-input"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPasswordCheck" className="form-check-label-login">
              Mostrar contraseña
            </label>
          </div>
          <button
            onClick={handleLogin}
            type="button"
            className="btn btn-success-login btn-sm"
          >
            Ingresar
          </button>
          </form>
          {errorMessage && ( // Mostrar mensaje de error si existe
            <div className="mt-4 text-danger" style={{ fontSize: '1rem' }}>
              {errorMessage}
            </div>
          )}
        
      </div>
    </div>    
  );
};
