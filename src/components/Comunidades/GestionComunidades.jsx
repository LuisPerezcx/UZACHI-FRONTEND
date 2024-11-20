import React from "react";

export const GestionComunidades = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "95%", borderRadius: "12px" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Agregar comunidad</h4>
          <form>
            {/* Nombre de la comunidad */}
            <div className="row mb-3 justify-content-center">
              <div className="col-md-6 d-flex align-items-center">
                <label htmlFor="nombreComunidad" className="form-label me-2 " >
                  Nombre de la comunidad:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreComunidad"
                />
              </div>
            </div>

            {/* Municipio y Entidad en la misma línea */}
            <div className="row mb-3 justify-content-center">
              <div className="col-auto d-flex aling-items-center gap2">
                <label htmlFor="municipio" className="form-label mb-0">
                  Municipio:
                </label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="municipio"
                  />
                </div>
              </div>
              <div className="col-auto d-flex align-items-center gap-2 ms-2">
                <label htmlFor="entidad" className="form-label mb-0">
                  Entidad:
                </label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="entidad"
                  />
                </div>
              </div>
            </div>

            {/* Botón Agregar centrado */}
            <div className="d-flex justify-content-center mt-4">
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
