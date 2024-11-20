import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';  
import logo from '../../assets/Iniciar_sesion.png';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow-lg p-4 text-center"
        style={{ maxWidth: '400px', width: '100%', backgroundColor: '#F6F5F5' }}
      >
        <div className="position-relative mb-4">
          <img 
            src={logo} 
            alt="Logo" 
            className="img-fluid mb-2" 
            style={{ width: '75%' }} 
          />
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Usuario</label>
            <input 
              type="email" 
              id="email" 
              className="form-control form-control-sm rounded" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input 
              type={showPassword ? 'text' : 'password'} 
              id="password" 
              className="form-control form-control-sm rounded"  
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-check mb-3 ">
            <input 
              type="checkbox" 
              id="showPasswordCheck" 
              className="form-check-input" 
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPasswordCheck" className="form-check-label">
              Mostrar contraseña
            </label>
          </div>
          <button 
            type="button" 
            className="btn btn-success w-45 btn-sm mt-3" 
            style={{ backgroundColor: 'var(--color-verde)', fontWeight: 'bold', border: 'var(--color-verde)' }}>
            Ingresar
          </button>
        </form>
        <small className="d-block text-muted mt-1">
          Acceso a formulario
        </small>
      </div>
    </div>
  );
}

export default LoginForm;
