import React from "react";

const FormularioCliente = () => {
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
  return (
    <div className="container mt-4 mb-4">
      <div style={formContainerStyle}>
        <div className="form-container p-3">
          <h5 className="text-center mb-3 fw-bold" style={interletradoStyle}>Agregar nuevo cliente</h5>
          <form>
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
                    id="nombre"
                    placeholder="Ingrese el nombre"
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
                    id="domicilioDestinatario"
                    placeholder="Ingrese el domicilio"
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="poblacion" className="form-label me-2" style={{ width: "150px" }}>
                    Población:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="poblacion"
                    placeholder="Ingrese la población"
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="entidad" className="form-label me-2" style={{ width: "150px" }}>
                    Entidad:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="entidad"
                    placeholder="Ingrese la entidad"
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
                    id="curp"
                    placeholder="Ingrese la CURP"
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="rfn" className="form-label me-2" style={{ width: "150px" }}>
                    RFN:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rfn"
                    placeholder="Ingrese el RFN"
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="municipio" className="form-label me-2" style={{ width: "150px" }}>
                    Municipio:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="municipio"
                    placeholder="Ingrese el municipio"
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="domicilio" className="form-label me-2" style={{ width: "150px" }}>
                    Domicilio:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="domicilio"
                    placeholder="Ingrese el domicilio"
                  />
                </div>
              </div>
            </div>

            {/* Botón Agregar */}
            <div className="d-flex justify-content-center mt-3 me-4">
              <button type="submit" className="btn btn-success">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioCliente;
