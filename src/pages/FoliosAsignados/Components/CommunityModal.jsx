import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles_modal.css";

function CommunityModal({ showModal, handleClose, onSave }) {
  const [name, setName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [municipality, setMunicipality] = useState("");

  const handleSave = () => {
    const newCommunity = {
      name,
      postalCode,
      municipality,
    };
    onSave(newCommunity);
    handleClose(); // Cierra el modal después de guardar informacion 
  };

  return (
    <div className={`modal fade ${showModal ? "show" : ""}`} tabIndex="-1" style={{ display: showModal ? "block" : "none" }} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="centrar" id="exampleModalLabel">Agregar Comunidad</h5>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="communityName" className="form-label">Nombre Comunidad</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="communityName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="postalCode" className="form-label">Código Postal</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="postalCode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="municipality" className="form-label">Municipio</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="municipality"
                  value={municipality}
                  onChange={(e) => setMunicipality(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn custom-btn-red" onClick={handleClose}>
              Cancelar
            </button>
            <button type="button" className="btn custom-btn-green" onClick={handleSave}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityModal;
