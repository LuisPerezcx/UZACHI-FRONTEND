import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';  
import logo from '../../assets/Iniciar_sesion.png';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error

  const navigate = useNavigate();

  const handleLogin = () => {
    const adminUser = {
      email: 'admin',
      password: 'admin123',
      role: 'admin',
    };

    switch (true) {
      case !email || !password:
        setErrorMessage('Por favor, completa todos los campos.');
        break;

      case !password:
        setErrorMessage('Por favor, completa el campo "Contraseña".');
        break;

      case !email:
        setErrorMessage('Por favor, completa el campo "Email".');
        break;
  
      case email === adminUser.email && password === adminUser.password:
        setErrorMessage(''); // Limpiar mensaje de error al iniciar sesión correctamente
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
          <h5 style={{ fontWeight: 'bold', color: '#4B4B4B' }}>Iniciar Sesión</h5>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
