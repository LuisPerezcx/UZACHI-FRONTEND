// src/components/CommunityList.js
import React, { useState } from 'react';
import CommunityForm from './CommunityForm';
import './CommunityList.css';

function CommunityList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const communities = [
    { name: "Capulalpam de Méndez", postalCode: "69350", municipio: "Capulalpam de Méndez" },
    { name: "Santiago Xiacui", postalCode: "68767", municipio: "Santiago Xiacui" },
    { name: "Ixtlán de Juárez", postalCode: "68725", municipio: "Ixtlán de Juárez" },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="community-list">
      <table>
        <thead>
          <tr>
            <th>Nombre comunidad</th>
            <th>Código Postal</th>
            <th>Municipio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {communities.map((community, index) => (
            <tr key={index}>
              <td>{community.name}</td>
              <td>{community.postalCode}</td>
              <td>{community.municipio}</td>
              <td>
                <button className="action-button">👁️</button>
                <button className="action-button">✏️</button>
                <button className="action-button">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-button" onClick={handleOpenModal}>Agregar Comunidad</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Agregar Comunidad</h3>
            <div className="form-group">
              <label htmlFor="community-name">Nombre comunidad:</label>
              <input id="community-name" type="text" placeholder="Capulalpam de Méndez" />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="postal-code">Código Postal:</label>
              <input id="postal-code" type="text" placeholder="69350" />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="municipality">Municipio:</label>
              <input id="municipality" type="text" placeholder="Capulalpam de Méndez" />
            </div>

            <button className="close-button" onClick={handleCloseModal}>Cerrar</button>
        
            <button className="aceptar-button" onClick={handleCloseModal}>Agregar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunityList;
