import React from 'react';
import { Modal } from 'react-bootstrap'; // Importa Modal desde react-bootstrap

export const ModalPlantilla = ({ show, onClose, content, title }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        {/* Renderiza el título dinámicamente */}
        <Modal.Title>
          <p className='size-font-subtitle' style={{ color: 'var(--color-verde)' }}>
            {title}
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Aquí renderizamos directamente el contenido que es un componente de React */}
        <div className='row justify-content-center text-center'>
          {content}  {/* Renderiza el componente que pasas como 'content' */}
        </div>
      </Modal.Body>
    </Modal>
  );
};
