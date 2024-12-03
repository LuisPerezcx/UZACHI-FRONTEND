import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Para navegación interna

export const ModalFolio = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Asignar Folios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Selecciona una opción para asignar folios:</p>
        <div className="d-flex flex-column gap-3">
          {/* Opción 1: Formulario de Remisión */}
          <Link to="/FolioRemision" className="btn btn-primary">
            Formulario de Remisión
          </Link>
          {/* Opción 2: Formulario de Reembarque */}
          <Link to="/FolioReembarque" className="btn btn-secondary">
            Formulario de Reembarque
          </Link>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
