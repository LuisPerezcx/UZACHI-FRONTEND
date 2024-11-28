import React from 'react';
import { Modal } from 'react-bootstrap';

export const AlertDialog = ({ 
  show, 
  title, 
  message, 
  onConfirm, 
  onCancel, 
  confirmText = 'Confirmar', 
  cancelText = 'Cancelar' 
}) => (
  <Modal show={show} onHide={onCancel} centered>
    <Modal.Body>
      <h5 className="text-center mb-3">{title}</h5>
      <p className="text-center">{message}</p>
      <div className="d-flex justify-content-center mt-3">
        <button 
          className="btn btn-primary me-2" 
          style={{ backgroundColor: 'blue', borderColor: 'blue' }}
          onClick={onCancel}
        >
          {cancelText}
        </button>
        <button 
          className="btn btn-danger" 
          style={{ backgroundColor: 'red', borderColor: 'red' }}
          onClick={onConfirm}
        >
          {confirmText}
        </button>
      </div>
    </Modal.Body>
  </Modal>
);

