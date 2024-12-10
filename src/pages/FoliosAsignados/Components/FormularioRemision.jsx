import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState} from "react"; 
import Swal from "sweetalert2"; 
import { Form } from "react-bootstrap";
export const FormularioRemision = () => {
  
  const [formData, setFormData] = useState({
  pinus: '',
  quercus: '',
  hojosa: '',

  folioInicialPinus: '',
  folioInicialQuercus: '',
  folioInicialHojosa: '',
  folioFinalPinus: '',
  folioFinalQuercus: '',
  folioFinalHojosa: '',

  primario: '',
  secundario: '',
  medidaEsp: '',

  volumenRollo: '',
  volumenAserrado:'',

  piesTabla: '',
  medidas: '',
  clasificacion: '',
  precio: '',
  volumen: '',
  producto:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.pinus || !formData.quercus || !formData.hojosa) {
      Swal.fire({
        title: 'Datos incompletos',
        text: `Por favor, llena todos los campos requeridos.`,
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          const confirmButton = Swal.getConfirmButton();
          confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
        }
      });
      return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="container mt-2">
      {/* Filas principales */}
    <div className="container tarjeta-border mt-4">
      <div className="row p-4">
        {/* Columna 1: Anualidad */}
        <div className="col-md-4">
          <form>
          <div className="mb-4 d-flex">
            <label htmlFor="anualidad" className="form-label me-2" style={{ width: "150px" }}>Anualidad</label>
            <input 
            type="date" className="form-control" 
            />
          </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="pinus" className="me-2" style={{ width: "150px" }}>Pinus: <span className="text-danger"> *</span></Form.Label>
              <Form.Control 
                type="text"
                className="form-control"
                name="pinus"
                value={formData.pinus}
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="quercus" className="form-label me-2" style={{ width: "150px" }}>Quercus: <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                name="quercus"
                value={formData.quercus}
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="hojosa" className="form-label me-2" style={{ width: "150px" }}>Hojosa: <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text"
                className="form-control"
                name="hojosa"
                value={formData.hojosa}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>

        {/* Columna 2: Trámite 1 Pinus */}
        <div className="col-md-4">
          <h5 className="text-center">Trámite 1</h5>
          <form>
          <div className="d-flex">
              <Form.Label htmlFor="espacio" className="me-2" style={{ width: "150px" }}></Form.Label>
              <Form.Label htmlFor="FolioInicial" className=" me-4" style={{ width: "150px" }}>Folio inicial</Form.Label>
              <Form.Label htmlFor="FolioFinal" className=" ms-2" style={{ width: "150px" }}>Folio Final</Form.Label>
              
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="pinusFolio" className="form-label me-2" style={{ width: "150px" }}>Pinus:</Form.Label>
              <Form.Control 
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioInicialPinus"
                value={formData.folioInicialPinus}
                onChange={handleChange}
              />
              <Form.Control
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioFinalPinus"
                value={formData.folioFinalPinus}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="quercusFolio" className="form-label me-2" style={{ width: "150px" }}>Quercus:</Form.Label>
              <Form.Control 
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioInicialQuercus"
                value={formData.folioInicialQuercus}
                onChange={handleChange} 
              />
              <Form.Control 
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioFinalQuercus"
                value={formData.folioFinalQuercus}
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="hojosaFolio" className="form-label me-2" style={{ width: "150px" }}>Hojosa:</Form.Label>
              <Form.Control
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioInicialHojosa"
                value={formData.folioInicialHojosa}
                onChange={handleChange} 
              />
              <Form.Control
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioFinalHojosa"
                value={formData.folioFinalHojosa}
                onChange={handleChange} 
              />
            </div>
          </form>
        </div>

        {/* Columna 3: Entrada Remisiones */}
        <div className="col-md-4">
          <h5 className=" text-center">Entrada Remisiones V(m²)</h5>
          <form>
            <div className="mt-4 mb-3 d-flex">
              <Form.Label htmlFor="primario" className="form-label me-2" style={{ width: "150px" }}>Primario:</Form.Label>
              <Form.Control 
                type="text"
                className="form-control"
                name="primario"
                value={formData.primario}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="secundario" className="form-label me-2" style={{ width: "150px" }}>Secundario:</Form.Label>
              <Form.Control 
                type="text"
                className="form-control"
                name="secundario"
                value={formData.secundario}
                onChange={handleChange}
                />            
              </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="medidaEsp" className="form-label me-2" style={{ width: "200px" }}>Medida esp:</Form.Label>
              <Form.Control 
                type="text"
                className="form-control"
                name="medidaEsp"
                value={formData.medidaEsp}
                onChange={handleChange}
              />            </div>
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
                <Form.Label htmlFor="volumenRollo" className="form-label">Madera Rollo </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="volumenRollo"
                  value={formData.volumenRollo}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Form.Label htmlFor="volumenAserrado" className="form-label">Madera aserrado</Form.Label>
                <Form.Control 
                type="text"
                className="form-control"
                name="volumenAserrado"
                value={formData.volumenAserrado}
                onChange={handleChange}
              />              </div>
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
                    <Form.Label htmlFor="producto" className="form-label">Producto</Form.Label>
                    <Form.Select
                      className="form-select"
                      name="producto"
                      value={formData.producto}
                      onChange={handleChange}
                      required
                    >
                    <option disabled value="">
                      Seleccione opción
                    </option>
                      <option value="tabla">Tabla</option>
                      <option value="tablon">Tablón</option>
                      <option value="rollo">Rollo</option>
                    </Form.Select>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="piesTabla" className="form-label">Pies tabla</Form.Label>
                    <Form.Control 
                      type="text"
                      className="form-control"
                      name="piesTabla"
                      value={formData.piesTabla}
                      onChange={handleChange} />
                  </div>
                </div>

                {/* Columna 2 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <Form.Label htmlFor="medidas" className="form-label">Medidas</Form.Label>
                    <Form.Select
                      className="form-select"
                      name="medidas"
                      value={formData.medidas}
                      onChange={handleChange}
                      required
                    >
                    <option disabled value="">
                      Seleccione opción
                    </option>
                      <option>16 x 25</option>
                      <option>18 x 50</option>
                      <option>20 x 75</option>
                    </Form.Select>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="volumen" className="form-label">Volumen</Form.Label>
                    <Form.Control 
                      type="text"
                      className="form-control"
                      name="volumen"
                      value={formData.volumen}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Columna 3 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <Form.Label htmlFor="clasificacion" className="form-label">Clasificación</Form.Label>
                    <Form.Select
                      className="form-select"
                      name="clasificacion"
                      value={formData.clasificacion}
                      onChange={handleChange}
                      required
                    >
                    <option disabled value="">
                      Seleccione opción
                    </option>
                      <option>Primera</option>
                      <option>Secundaria</option>
                      <option>Tercera</option>
                    </Form.Select>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="precio" className="form-label">Precio</Form.Label>
                    <Form.Control 
                      type="text"
                      className="form-control"
                      name="precio"
                      value={formData.precio}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center pt-4">
            <button variant="success" type="submit" size="sm">
              {'Agregar'}
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Form>
    
  );
};

export default FormularioRemision;
