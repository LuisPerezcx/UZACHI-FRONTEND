import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState} from "react"; 
import Swal from "sweetalert2"; 
import { Form } from "react-bootstrap";
import "../styles/ValidacionFolio.css"
import { ListaTramites } from "./ListaTramites";

export const FormularioRemision = () => {
  
const [formData, setFormData] = useState({
  fechaTramite: '', 
  folioPinus: '',
  folioQuercus: '',
  folioHojosa: '',

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

  const [tramites, setTramites] = useState([]);

  const [formFolio, setFormFolios] = useState({
    folioInicialPinus: '',
    folioInicialQuercus: '',
    folioInicialHojosa: '',
    folioFinalPinus: '',
    folioFinalQuercus: '',
    folioFinalHojosa: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormFolios({ ...formFolio, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fechaTramite || !formData.folioQuercus || !formData.folioPinus || !formData.folioHojosa || !formData.clasificacion ||
        !formData.folioFinalHojosa || !formData.folioFinalPinus || !formData.folioFinalQuercus ||
        !formData.folioInicialHojosa || !formData.folioInicialPinus || !formData.folioInicialQuercus ||
        !formData.medidaEsp || !formData.medidas || !formData.piesTabla || !formData.precio || !formData.primario ||
        !formData.producto || !formData.secundario || !formData.volumen || !formData.volumenAserrado || !formData.volumenRollo
    ) {
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

    {/*Validacion de folio inicial sea menor que el final */}
    if (
      (formFolio.folioInicialPinus) >= (formFolio.folioFinalPinus) ||
      (formFolio.folioInicialHojosa) >= (formFolio.folioFinalHojosa) ||
      (formFolio.folioInicialQuercus) >= (formFolio.folioFinalQuercus)
    ) {
      Swal.fire({
        title: 'Error en los folios',
        text: 'El folio inicial debe ser menor que el folio final en todos los campos.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.getConfirmButton().style.backgroundColor = 'var(--color-verde)';
        },
      });
      return;
    }

    {/*Validar si no coinciden los folios */}
    const folioInicialQuercus = Number(formData.folioInicialQuercus);
    const folioFinalQuercus = Number(formData.folioFinalQuercus);

    const folioInicialPinus = Number(formData.folioInicialPinus);
    const folioFinalPinus = Number(formData.folioFinalPinus);

    const folioInicialHojosa = Number(formData.folioInicialHojosa);
    const folioFinalHojosa = Number(formData.folioFinalHojosa);
    const folioQuercus = Number(formData.folioQuercus);
    const folioPinus = Number(formData.folioPinus);
    const folioHojosa = Number(formData.folioHojosa);

    if (folioFinalQuercus - folioInicialQuercus + 1 !== folioQuercus || folioFinalPinus - folioInicialPinus + 1 !== folioPinus || folioFinalHojosa - folioInicialHojosa + 1 !== folioHojosa) {
      Swal.fire({
        title: "Error en la cantidad de folios",
        text: "El rango de folios no coincide con los folios autorizados.",
        icon: "error",
        confirmButtonText: "Aceptar",
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    {/*Guardar tramite */}
    setTramites([...tramites, {...formData,fecha: formData.fechaTramite} ]);
    // Limpiar formulario
    setFormData({
      fechaTramite: '', // Limpiar la fecha

      folioPinus: '',
      folioQuercus: '',
      folioHojosa: '',

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

    Swal.fire({
      title: "Formulario enviado",
      text: "Los datos son correctos.",
      icon: "success",
      confirmButtonText: "Aceptar",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.getConfirmButton().style.backgroundColor = 'var(--color-verde)';
      },
    });
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
            <Form.Label htmlFor="fechaTramite" style={{ width: "350px" }}>A n u a l i d a d</Form.Label>
            <Form.Control
              type="date"
              name="fechaTramite"
              value={formData.fechaTramite}
              onChange={handleChange}
            />
          </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="pinus" style={{ width: "150px" }}>Pinus: <span className="text-danger"> *</span></Form.Label>
              <Form.Control 
                type="number"
                name="folioPinus"
                value={formData.folioPinus}
                onChange={handleChange} 
                max="99999" 
                min="1"
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="quercus" style={{ width: "150px" }}>Quercus: <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="number"
                name="folioQuercus"
                value={formData.folioQuercus}
                onChange={handleChange} 
                max="99999" 
                min="1"
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="hojosa" style={{ width: "150px" }}>Hojosa: <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="number"
                name="folioHojosa"
                value={formData.folioHojosa}
                onChange={handleChange}
                max="99999" 
                min="1"
              />
            </div>
          </form>
        </div>

        {/* Columna 2: Trámite 1 Pinus */}
        <div className="col-md-4">
          <h5 className="text-center" style={{color:"#595B5A", fontWeight:"bold"}}>Trámites</h5>
          <form>
          <div className="d-flex">
              <Form.Label htmlFor="espacio" className="me-2" style={{ width: "150px" }}></Form.Label>
              <Form.Label htmlFor="FolioInicial" className=" me-4" style={{ width: "150px" }}>Folio inicial</Form.Label>
              <Form.Label htmlFor="FolioFinal" className=" ms-2" style={{ width: "150px" }}>Folio Final</Form.Label>

            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="pinusFolio" style={{ width: "150px"}}>Pinus:<span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="number"
                className="me-2"
                style={{width:"50%"}}
                name="folioInicialPinus"
                value={formFolio.folioInicialPinus}
                onChange={handleChange}
                max="99999" 
                min="0"
              />
              <Form.Control
                type="number"
                className="me-2"
                style={{width:"50%"}}
                name="folioFinalPinus"
                value={formFolio.folioFinalPinus}
                onChange={handleChange}
                max="99999" 
                min="0"
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="quercusFolio" style={{ width: "150px" }}>Quercus:<span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="number"
                className="me-2"
                style={{width:"50%"}}
                name="folioInicialQuercus"
                value={formFolio.folioInicialQuercus}
                onChange={handleChange}
                max="99999" 
                min="0"
              />
              <Form.Control 
                type="number"
                className="me-2"
                style={{width:"50%"}}
                name="folioFinalQuercus"
                value={formFolio.folioFinalQuercus}
                onChange={handleChange}
                max="99999" 
                min="0"
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="hojosaFolio" style={{ width: "150px" }}>Hojosa:<span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="number"
                className="me-2"
                style={{width:"50%"}}
                name="folioInicialHojosa"
                value={formFolio.folioInicialHojosa}
                onChange={handleChange} 
                max="99999" 
                min="0"
              />
              <Form.Control
                type="number"
                className="me-2"
                style={{width:"50%"}}
                name="folioFinalHojosa"
                value={formFolio.folioFinalHojosa}
                onChange={handleChange}
                max="99999" 
                min="0"
              />
            </div>
          </form>
        </div>

        {/* Columna 3: Entrada Remisiones */}
        <div className="col-md-4">
          <h5 className=" text-center" style={{color:"#595B5A", fontWeight:"bold"}}>Entrada Remisiones V(m²)</h5>
          <form>
            <div className="mt-4 mb-3 d-flex">
              <Form.Label htmlFor="primario" className="form-label me-2" style={{ width: "150px" }}>Primario:<span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="number"
                name="primario"
                placeholder="m²"
                value={formData.primario}
                onChange={handleChange}
                max="99999999.99" 
                min="0"
                step="0.01" 
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="secundario" className="form-label me-2" style={{ width: "150px" }}>Secundario:<span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="number"
                name="secundario"
                placeholder="m²"
                value={formData.secundario}
                onChange={handleChange}
                max="99999999.99" 
                min="0"
                step="0.01" 
                />            
              </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="medidaEsp" className="form-label me-2" style={{ width: "250px" }}>Medida especial:<span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="number"
                name="medidaEsp"
                placeholder="m²"
                value={formData.medidaEsp}
                onChange={handleChange}
                max="99999999.99" 
                min="0"
                step="0.01" 
              />            
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
            <h5 className="card-title text-center mb-4" style={{color:"#595B5A", fontWeight:"bold"}}>Volumen</h5>
            <form>
              <div className="mb-2">
                <Form.Label htmlFor="volumenRollo">Madera Rollo <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="volumenRollo"
                  placeholder="m³"
                  value={formData.volumenRollo}
                  onChange={handleChange}
                  max="99999999.99" 
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="mb-3">
                <Form.Label htmlFor="volumenAserrado">Madera aserrado<span className="text-danger">*</span></Form.Label>
                <Form.Control 
                type="number"
                name="volumenAserrado"
                placeholder="m³"
                value={formData.volumenAserrado}
                onChange={handleChange}
                max="99999999.99" 
                min="0"
                step="0.01"
              />              
              </div>
            </form>
          </div>
        </div>

        {/* Segunda columna: Formulario PRODUCCION */}
        <div className=" col-md-8 ms-4">
          <div className=" p-4 mb-3">
            <h5 className="card-title text-center mb-4" style={{color:"#595B5A", fontWeight:"bold"}}>Producción</h5>
            <form>
              <div className="row">
                {/* Columna 1 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <Form.Label htmlFor="producto" className="form-label">Producto<span className="text-danger">*</span></Form.Label>
                    <Form.Select
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
                    <Form.Label htmlFor="piesTabla" className="form-label">Pies tabla<span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="number"
                      name="piesTabla"
                      value={formData.piesTabla}
                      onChange={handleChange} 
                      max="99999999.99" 
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Columna 2 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <Form.Label htmlFor="medidas" className="form-label">Medidas<span className="text-danger">*</span></Form.Label>
                    <Form.Select
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
                    <Form.Label htmlFor="volumen" className="form-label">Volumen<span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="number"
                      placeholder="m³"
                      name="volumen"
                      value={formData.volumen}
                      onChange={handleChange}
                      max="99999999.99" 
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Columna 3 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <Form.Label htmlFor="clasificacion" className="form-label">Clasificación<span className="text-danger">*</span></Form.Label>
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
                    <Form.Label htmlFor="precio" className="form-label">Precio<span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="number"
                      name="precio"
                      value={formData.precio}
                      onChange={handleChange}
                      max="99999999.99" 
                      min="0"
                      step="0.01"
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
    <ListaTramites tramites={tramites} />

    </div>
    </Form>
    
  );
};

export default FormularioRemision;
