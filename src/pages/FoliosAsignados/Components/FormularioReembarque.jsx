import React from 'react';

export const FormularioReembarque = () => {
  return (
    <div className="container mt-4">
      <div className="tarjeta-border row">
        {/* Primera columna: Formulario de trámites */}
        <div className="col-md-4">
          <div className=" p-4 mb-3">
            <h5 className="card-title text-center"></h5>
            <form>
            <div className="row">
                {/* Columna 1: Folio inicial */}
                <div className="col-md-8">
                  <div className="mb-3">
                    <label htmlFor="numeroTramite" className="form-label">Número de trámite:</label>
                  </div>
                </div>
                {/* Columna 2: Folio final */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder=" " />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="volumenAutorizado" className="form-label">Volumen autorizado</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="mb-3">
                <label htmlFor="foliosAutorizados" className="form-label">Folios autorizados</label>
                <input type="text" className="form-control" placeholder=" " />
              </div>
              <div className="row">
                {/* Columna 1: Folio inicial */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="folioInicial" className="form-label">Folio inicial</label>
                    <input type="text" className="form-control" placeholder=" " />
                  </div>
                </div>

                {/* Columna 2: Folio final */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="folioFinal" className="form-label">Folio final</label>
                    <input type="text" className="form-control" placeholder=" " />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Segunda columna: Formulario venta reembarque */}
        <div className="col-md-8">
          <div className="p-4 mb-3">
            <h4 className="card-title text-center pb-4 mb-4 fw-2">Venta reembarque</h4>
            <form>
              <div className="row">
                {/* Columna 1 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <label htmlFor="producto" className="form-label">Producto</label>
                    <select className="form-select" id="producto" required>
                      <option selected disabled value="">Seleccione opción</option>
                      <option>Tabla</option>
                      <option>Tablón</option>
                      <option>Rollo</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="piesTabla" className="form-label">Pies tabla</label>
                    <input type="text" className="form-control" id="piesTabla" placeholder=" " />
                  </div>
                </div>

                {/* Columna 2 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <label htmlFor="medidas" className="form-label">Medidas</label>
                    <select className="form-select" id="medidas" required>
                      <option selected disabled value="">Seleccione opción</option>
                      <option>16 x 25</option>
                      <option>18 x 50</option>
                      <option>20 x 75</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="volumen" className="form-label">Num. Piezas </label>
                    <input type="text" className="form-control" id="volumen" placeholder=" " />
                  </div>
                </div>

                {/* Columna 3 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <label htmlFor="clasificacion" className="form-label">Clasificación</label>
                    <select className="form-select" id="clasificacion" required>
                      <option selected disabled value="">Seleccione opción</option>
                      <option>Primera</option>
                      <option>Secundaria</option>
                      <option>Tercera</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input type="text" className="form-control" id="precio" placeholder=" " />
                  </div>
                </div>

                {/* Columna 4 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <label htmlFor="volumenExtra" className="form-label">Volumen</label>
                    <input type="text" className="form-control" id="volumenExtra" placeholder=" " />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="total" className="form-label">Total</label>
                    <input type="text" className="form-control" id="total" placeholder=" " />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
