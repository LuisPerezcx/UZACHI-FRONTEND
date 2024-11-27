import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from './Boton';
import 'font-awesome/css/font-awesome.min.css';

export const CambioContraseñaModal = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('La nueva contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setError('');
    console.log('Nueva contraseña enviada', formData.newPassword);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton className="text-center">
        <Modal.Title style={{ color: 'var(--color-verde)' }}>Cambiar Contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="currentPassword" className="form-label">Contraseña Actual</label>
            <div className="input-group">
              <input
                type={showPassword.currentPassword ? 'text' : 'password'}
                className="form-control"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                
                className="btn btn-outline-secondary"
                onClick={() => togglePasswordVisibility('currentPassword')}
              >
                <i className={`fa ${showPassword.currentPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">Nueva Contraseña</label>
            <div className="input-group">
              <input
                type={showPassword.newPassword ? 'text' : 'password'}
                className="form-control"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => togglePasswordVisibility('newPassword')}
              >
                <i className={`fa ${showPassword.newPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmar Nueva Contraseña</label>
            <div className="input-group">
              <input
                type={showPassword.confirmPassword ? 'text' : 'password'}
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => togglePasswordVisibility('confirmPassword')}
              >
                <i className={`fa ${showPassword.confirmPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>
          </div>

          {error && <div className="text-danger">{error}</div>}

          <div className="d-flex justify-content-center mt-3">
            <Button label="Guardar" type="submit" className="btn-success" />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
