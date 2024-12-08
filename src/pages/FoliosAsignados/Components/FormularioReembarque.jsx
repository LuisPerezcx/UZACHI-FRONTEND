import React, {useState } from 'react';
import { Form,} from 'react-bootstrap';
import { Button } from '../../../components/Boton';
import "../styles/ValidacionFolio.css"
import Swal from "sweetalert2"; 

export const FormularioReembarque = () => {

  const [formData, setFormData] = useState({
    volumenAutorizado: '',
    foliosAutorizados: '',
    folioInicial: '',
    folioFinal: '',
    producto: '',
    piesTabla: '',
    medidas: '',
    clasificacion: '',
    piezas: '',
    precio: '',
    volumenExtra: '',
    total: '',
  });
  const [formFolio, setFormFolios] = useState({
    folioInicial: '',
    folioFinal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormFolios({ ...formFolio, [name]: value });

  };
  {/*Validar que se llenen todos lo campos */}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.folioInicial || !formData.folioFinal || !formData.foliosAutorizados || !formData.volumenAutorizado || !formData.medidas || !formData.piesTabla ||
      !formData.piezas || !formData.precio || !formData.producto || !formData.total || !formData.volumenExtra || !formData.clasificacion
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

    {/*Validación del número de Folio inicial sea menor 
      al número de Folio final*/}
    if ((formFolio.folioInicial) >= (formFolio.folioFinal)) {
      Swal.fire({
        title: 'Error en los folios',
        text: 'El folio inicial debe ser menor que el folio final.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          const confirmButton = Swal.getConfirmButton();
          confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
        }
      });
      return;
    };

    {/*Validar si no coinciden los folios */}
    const folioInicial = Number(formData.folioInicial);
    const folioFinal = Number(formData.folioFinal);
    const foliosAutorizados = Number(formData.foliosAutorizados);

    if (folioFinal - folioInicial + 1 !== foliosAutorizados) {
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
    const seleccionarCliente = () => {
      console.log("Se clickeo agregar cliente")
    }
  };
  
  // Llamar a la función `onAdd` con los datos del formulario
  return (
    <Form onSubmit={handleSubmit}>
    <div className="container mt-4">
      <div className="tarjeta-border row">
        {/* Primera columna: Formulario de trámites */}
        <div className="col-md-4">
          <div className="p-4 mb-3">
            <h5 className="card-title text-center"></h5>
            <form>
            <div className="row">
                {/* Columna 1: Folio inicial */}
                <div className="col-md-8">
                  <div className="mb-2">
                    <label htmlFor="numeroTramite">Número de trámite:<span className="text-danger">*</span></label>
                  </div>
                </div>
                {/* Columna 2: Folio final */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <Form.Control type="text" placeholder=" " />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <Form.Label htmlFor="volumenAutorizado">Volumen autorizado: <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="number"
                  name="volumenAutorizado"
                  value={formData.volumenAutorizado}
                  onChange={handleChange}
                  max="99999999.99" 
                  min="0"
                />
              </div>
              <div className="mb-3">
                <Form.Label htmlFor="foliosAutorizados">Folios autorizados <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="number"
                  name="foliosAutorizados"
                  value={formData.foliosAutorizados}
                  onChange={handleChange}
                  max="99999" 
                  min="0"
                />
              </div>
              <div className="row">
                {/* Columna 1: Folio inicial */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <Form.Label htmlFor="folioInicial">Folio inicial: <span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="number"
                      name="folioInicial"
                      value={formFolio.folioInicial}
                      onChange={handleChange}
                      max="99999"
                      min="1"
                    />
                  </div>
                </div>

                {/* Columna 2: Folio final */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <Form.Label htmlFor="folioFinal">Folio final: <span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="number"
                      name="folioFinal"
                      value={formFolio.folioFinal}
                      onChange={handleChange} 
                      max="99999"
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Segunda columna: Formulario venta reembarque */}
        <div className="col-md-8">
          <div className="p-4 mb-3">
            <h4 className="card-title text-center pb-2 mb-4 fw-2">Venta reembarque</h4>
            <form>
              <div className="row">
                {/* Columna 1 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <Form.Label htmlFor="producto">Producto<span className="text-danger">*</span></Form.Label>
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
                    <label htmlFor="" ></label>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="piesTabla">Pies tabla<span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="number"
                      name="piesTabla"
                      value={formData.piesTabla}
                      onChange={handleChange}
                      max="99999999.99" 
                      min="1"
                      step="0.01" 
                    />
                  </div>
                </div>

                {/* Columna 2 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <Form.Label htmlFor="medidas">Medidas<span className="text-danger">*</span></Form.Label>
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
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="piezas">Número Piezas<span className="text-danger">*</span> </Form.Label>
                    <Form.Control
                      type="number"
                      name="piezas"
                      value={formData.piezas}
                      onChange={handleChange}
                      max="9999" // Máximo valor permitido
                      min="1" 
                    />
                  </div>
                </div>

                {/* Columna 3 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <Form.Label htmlFor="clasificacion">Clasificación<span className="text-danger">*</span></Form.Label>
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
                    <label htmlFor=""></label>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="precio">Precio<span className="text-danger">*</span></Form.Label>
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

                {/* Columna 4 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <Form.Label htmlFor="volumenExtra">Volumen<span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                    type="number"
                    name="volumenExtra"
                    placeholder="m³"
                    value={formData.volumenExtra}
                    onChange={handleChange}
                    max="99999999.99" 
                    min="0"
                    step="0.01" 
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor=""></Form.Label>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="total">Total<span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="number"
                      name="total"
                      value={formData.total}
                      onChange={handleChange}
                      step="0.01" 
                      min="0"
                      max="99999999.99" 
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
    
    </Form>
  );
};
