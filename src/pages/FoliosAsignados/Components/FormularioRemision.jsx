import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const FormularioRemision = () => {
  return (
    <div className="container mt-2">
      {/* Filas principales */}
    <div className="container tarjeta-border mt-4">
      <div className="row p-4">
        {/* Columna 1: Anualidad */}
        <div className="col-md-4">
          <form>
          <div className="mb-3 d-flex">
            <label htmlFor="anualidad" className="form-label me-2" style={{ width: "150px" }}>Anualidad</label>
            <input type="date" className="form-control" />
            
          </div>
            <div className="mb-3 d-flex">
              <label htmlFor="pinus" className="form-label me-2" style={{ width: "150px" }}>Pinus:</label>
              <input type="text" className="form-control flex-grow-1" />
              <div id="validationServer03Feedback" class="invalid-feedback">
                Proporciona una ciudad válida.
              </div>
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="quercus" className="form-label me-2" style={{ width: "150px" }}>Quercus:</label>
              <input type="text" className="form-control flex-grow-1" />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="hojosa" className="form-label me-2" style={{ width: "150px" }}>Hojosa:</label>
              <input type="text" className="form-control flex-grow-1" />
            </div>
          </form>
        </div>

        {/* Columna 2: Trámite 1 Pinus */}
        <div className="col-md-4">
          <h5 className="text-center">Trámite 1</h5>
          <form>
          <div className="mb-3 d-flex">
              <label htmlFor="espacio" className="form-label me-2" style={{ width: "150px" }}></label>
              <label htmlFor="FolioInicial" className="form-label me-2" style={{ width: "150px" }}>Folio inicial</label>
              <label htmlFor="FolioFinal" className="form-label me-2" style={{ width: "150px" }}>Folio Final</label>
              
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="pinusFolio" className="form-label me-2" style={{ width: "150px" }}>Pinus:</label>
              <input type="text" className="form-control me-2 ms-4" />
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="quercusFolio" className="form-label me-2" style={{ width: "150px" }}>Quercus:</label>
              <input type="text" className="form-control me-2" />
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="hojosaFolio" className="form-label me-3" style={{ width: "150px" }}>Hojosa:</label>
              <input type="text" className="form-control me-2" />
              <input type="text" className="form-control" />
            </div>
          </form>
        </div>

        {/* Columna 3: Entrada Remisiones */}
        <div className="col-md-4">
          <h5 className="text-center">Entrada Remisiones V(m²)</h5>
          <form>
            <div className="mb-3 d-flex">
              <label htmlFor="nombre" className="form-label me-2" style={{ width: "150px" }}>Primario:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="secundario" className="form-label me-2" style={{ width: "150px" }}>Secundario:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="medidaEsp" className="form-label me-2" style={{ width: "200px" }}>Medida esp:</label>
              <input type="text" className="form-control" />
            </div>
          </form>
        </div>
      </div>
    </div>
      {/* Formulario Remision */}
    <div className="tarjeta-border container mt-4">
      <div className="row">
        {/* FORMULARIO DE ROLLO VOLUMEN  */}
        <div className=" col-md-3 me-2 ms-4">
          <div className=" p-4">
            <h5 className="card-title text-center mb-4">Volumen</h5>
            <form>
              <div className="mb-2">
                <label htmlFor="volumenRolloA" className="form-label">Volumen rollo aserrado</label>
                <input type="text" className="form-control" placeholder=" " />
              </div>
              <div className="mb-3">
                <label htmlFor="volumenRolloA" className="form-label">Volumen madera aserrado</label>
                <input type="text" className="form-control" placeholder=" " />
              </div>
            </form>
          </div>
        </div>

        {/* Segunda columna: Formulario PRODUCCION */}
        <div className=" col-md-8 ms-4">
          <div className=" p-4 mb-3">
            <h5 className="card-title text-center mb-4">Producción</h5>
            <form>
              <div className="row">
                {/* Columna 1 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <label htmlFor="producto" className="form-label">Producto</label>
                    <select className="form-select" id="producto" required>
                      <option selected disabled value="">Seleccione opción</option>
                      <option>Tabla</option>
                      <option>Tablón</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="piesTabla" className="form-label">Pies tabla</label>
                    <input type="text" className="form-control" id="piesTabla" placeholder=" " />
                  </div>
                </div>

                {/* Columna 2 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <label htmlFor="medidas" className="form-label">Medidas</label>
                    <select className="form-select" id="medidas" required>
                      <option selected disabled value="">Seleccione opción</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="volumen" className="form-label">Volumen</label>
                    <input type="text" className="form-control" id="volumen" placeholder=" " />
                  </div>
                </div>

                {/* Columna 3 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <label htmlFor="clasificacion" className="form-label">Clasificación</label>
                    <select className="form-select" id="clasificacion" required>
                      <option selected disabled value="">Seleccione opción</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input type="text" className="form-control" id="precio" placeholder=" " />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
    <button class="btn btn-primary" type="submit">Enviar formulario</button>
  </div>
    </div>
  );
};

export default FormularioRemision;
