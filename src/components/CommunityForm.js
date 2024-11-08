// src/components/CommunityForm.js
import React from 'react';
import './CommunityForm.css';
function CommunityForm() {
  return ( // etiquetas JSX 
    <div className="community-form">
    <div className="form-group">
      <label htmlFor="community-name">Nombre comunidad:</label>
      <input id="community-name" type="text" placeholder="Capulalpam de Méndez" />
    </div>

    <div className="form-group">
      <label htmlFor="initial-folio">Folio Inicial:</label>
      <input id="initial-folio" type="text" placeholder="305" />
    </div>

    <div className="form-group">
      <label htmlFor="municipality">Municipio:</label>
      <input id="municipality" type="text" placeholder="Capulalpam de Méndez" />
    </div>
    <div className="form-group">
      <label htmlFor="final-folio">Folio Final:</label>
      <input id="final-folio" type="text" placeholder="317" />
    </div>

    <div className="form-group">
      <label htmlFor="postal-code">Código Postal:</label>
      <input id="postal-code" type="text" placeholder="69350" />
    </div>

    <div className="form-group">
      <label htmlFor="assigned-vol">Vol. Asignado:</label>
      <input id="assigned-vol" type="text" placeholder="345623 m3" />
    </div>

      <button className="save-button">Guardar Folio</button>
      <br></br>
    </div>
  );
}

export default CommunityForm;
