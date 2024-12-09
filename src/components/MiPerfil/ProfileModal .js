import React from 'react';
import Modal from 'react-bootstrap/Modal';

export const AccountModal = ({ show, handleClose, user }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div
        style={{
          backgroundColor: '#24C6A3',
          textAlign: 'center',
          padding: '15px 0',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      >
        <h5 style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>Administrador</h5>
      </div>

      <Modal.Body style={{ textAlign: 'center', padding: '30px 20px' }}>
        <img
          src={user.profileImage || "https://via.placeholder.com/80"}
          alt="Perfil"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            marginBottom: '15px',
          }}
        />

        <h5 style={{ fontWeight: 'bold', marginBottom: '5px' }}>{user.name}</h5>

        <p style={{ color: '#777', fontSize: '14px', margin: 0 }}>{user.email}</p>
      </Modal.Body>
    </Modal>
  );
};

export default AccountModal;
