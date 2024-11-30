import React, { useState } from "react";
import { Form } from "react-bootstrap";

const FormularioCliente = ({onAdd, editarClientesFrecuentes}) => {

  const [formData, setFormData] = useState({
    nombre: '',
    domicilioDestinatario: '',
    poblacion: '',
    entidad: '',
    curp: '',
    rfn: '',
    municipio: '',
    domicilio: '' 
  })

  React.useEffect(() => {
    if (editarClientesFrecuentes) {
      setFormData(editarClientesFrecuentes);
    }
  }, [editarClientesFrecuentes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!formData.propietario || !formData.tipo || !formData.capacidad) {
    //   alert('Por favor llena todos los campos requeridos.');
    //   return;
    // }

    onAdd(formData); // Llamar a la función `onAdd` con los datos del formulario

    // Reiniciar el formulario
    setFormData({
      nombre: '',
      domicilioDestinatario: '',
      poblacion: '',
      entidad: '',
      curp: '',
      rfn: '',
      municipio: '',
      domicilio: ''
    });
  };

  const formContainerStyle = {
    backgroundColor: "white",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 1, 0.4)",
    borderRadius: "8px",
    padding: "5px",

  }; 

  const interletradoStyle = {
    letterSpacing: "2px",
  };

  // onAdd(formData);
  return (
    <div className="container mt-4 mb-4">
      <div style={formContainerStyle}>
        <div className="form-container p-3">
          <h5 className="text-center mb-3 fw-bold" style={interletradoStyle}>Agregar nuevo cliente</h5>
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Columna 1 */}
              <div className="col-md-6">
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="nombre" className="form-label me-2" style={{ width: "150px" }}>
                    Nombre:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value = {formData.nombre}
                    placeholder="Ingrese el nombre"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="domicilioDestinatario"
                    className="form-label me-2"
                    style={{ width: "200px" }}
                  >
                    Dom. destinatario:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="domicilioDestinatario"
                    value = {formData.domicilioDestinatario}
                    placeholder="Ingrese el domicilio"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="poblacion" className="form-label me-2" style={{ width: "150px" }}>
                    Población:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="poblacion"
                    value = {formData.poblacion}
                    placeholder="Ingrese la población"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="entidad" className="form-label me-2" style={{ width: "150px" }}>
                    Entidad:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="entidad"
                    value = {formData.entidad}
                    placeholder="Ingrese la entidad"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Columna 2 */}
              <div className="col-md-6">
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="curp" className="form-label me-2" style={{ width: "150px" }}>
                    CURP:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="curp"
                    value = {formData.curp}
                    placeholder="Ingrese la CURP"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="rfn" className="form-label me-2" style={{ width: "150px" }}>
                    RFN:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="rfn"
                    value = {formData.rfn}
                    placeholder="Ingrese el RFN"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="municipio" className="form-label me-2" style={{ width: "150px" }}>
                    Municipio:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="municipio"
                    value = {formData.municipio}
                    placeholder="Ingrese el municipio"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="domicilio" className="form-label me-2" style={{ width: "150px" }}>
                    Domicilio:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="domicilio"
                    value = {formData.domicilio}
                    placeholder="Ingrese el domicilio"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <button variant="success" type="submit" size="sm">
                {editarClientesFrecuentes ? 'Actualizar' : 'Agregar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioCliente;
