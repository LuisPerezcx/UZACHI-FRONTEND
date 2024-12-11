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

    // Límite máximo para el usuario
    const MAX_TAM_USUARIO = 25;
    // Límite máximo para la contraseña
    const MAX_TAM_CONTRASENA = 20;
    switch (true) {
      case !usuario && !contrasena:
        Swal.fire({
          title: 'Error en los campos ingresados',
          text: 'Los campos de contraseña y usuario no pueden estar bacios',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
          }
        });        
        break;

      case !contrasena:
        Swal.fire({
          title: 'Error al ingresar la contraseña',
          text: 'El campo de contraseña no puede estar bacio',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
          }
        });
        break;

      case !usuario:
        Swal.fire({
          title: 'Error al ingresar el Usuario',
          text: 'El campo de usuario no puede estar bacio',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
          }
        });
        break;

      case usuario.length > MAX_TAM_USUARIO:
        Swal.fire({
          title: 'Error de validacion',
          text: 'El usuario supero el limite de 25 caracteres',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
          }
        });
        //setErrorMessage(`El Usuario no puede tener más de ${MAX_EMAIL_LENGTH} caracteres.`);
        break;

      case contrasena.length > MAX_TAM_CONTRASENA:
        Swal.fire({
          title: 'Error de validacion',
          text: 'La contraseña supero el limite de 25 caracteres',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
          }
        });  
      //setErrorMessage(`La contraseña no puede tener más de ${MAX_PASSWORD_LENGTH} caracteres.`);
        break;

      case usuario !== adminUser.usuario:
        Swal.fire({
          title: 'Error de validacion',
          text: 'El usuario que ingresaste no es correcto',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
          }
        });        break;

      case contrasena !== adminUser.contrasena && usuario === adminUser.usuario:
        Swal.fire({
          title: 'Error de validacion',
          text: 'La contraseña que se ingreso es incorrecta',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
          }
        });
        break;
  
      case usuario === adminUser.usuario && contrasena === adminUser.contrasena:
        //setErrorMessage(''); // Limpiar mensaje de error al iniciar sesión correctamente
        navigate('/PrincipalAdmin');
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
          {errorMessage && ( // Mostrar mensaje de error si existe
            <div className="mt-4 text-danger" style={{ fontSize: '1.1rem' }}>
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>    
  );
};
