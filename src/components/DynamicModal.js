import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ModalC = ({ show, onClose, title, content, onAction }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <p className='size-font-subtitle' style={{ color: 'var(--color-verde)' }}>{title}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row justify-content-center text-center'>
          {content.map((item, index) => (
            <div key={index} className='col tarjeta-border ms-2 me-2'>
              <img src={item.icon} style={{ width: '120px' }} alt={item.title} />
              <h2 className='size-font-subsubtitle mt-2' style={{ color: 'black' }}>
                {item.title}
              </h2>
              <Link to={item.route}>
                <button className='style-button' onClick={() => onAction(item)}>
                  {item.buttonLabel}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};
