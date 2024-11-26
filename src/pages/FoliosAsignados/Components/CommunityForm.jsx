import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CommunityForm({ onAddCommunity }) {
  const [formData, setFormData] = useState({
    name: "",
    initialFolio: "",
    municipality: "",
    finalFolio: "",
    postalCode: "",
    assignedVol: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCommunity(formData);
    setFormData({
      name: "",
      initialFolio: "",
      municipality: "",
      finalFolio: "",
      postalCode: "",
      assignedVol: "",
    });
  };

  return (
    <div className="d-flex  justify-content-cente mt-5 ">
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded"
        style={{ maxWidth: "800%", width: "800%" }}
      >
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Nombre comunidad:
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Capulalpam de Méndez"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="initialFolio" className="form-label">
              Folio Inicial:
            </label>
            <input
              id="initialFolio"
              type="text"
              className="form-control"
              value={formData.initialFolio}
              onChange={handleChange}
              placeholder="305"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="municipality" className="form-label">
              Municipio:
            </label>
            <input
              id="municipality"
              type="text"
              className="form-control"
              value={formData.municipality}
              onChange={handleChange}
              placeholder="Capulalpam de Méndez"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="finalFolio" className="form-label">
              Folio Final:
            </label>
            <input
              id="finalFolio"
              type="text"
              className="form-control"
              value={formData.finalFolio}
              onChange={handleChange}
              placeholder="317"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="postalCode" className="form-label">
              Código Postal:
            </label>
            <input
              id="postalCode"
              type="text"
              className="form-control"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="69350"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="assignedVol" className="form-label">
              Vol. Asignado:
            </label>
            <input
              id="assignedVol"
              type="text"
              className="form-control"
              value={formData.assignedVol}
              onChange={handleChange}
              placeholder="345623 m3"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 me-4">
          <button type="submit" className="btn btn-primary">
            Guardar Folio
          </button>
        </div>
      </form>
      
    </div>
    
  );
}

export default CommunityForm;
