import React, {useState } from 'react';
import { Form,} from 'react-bootstrap';
import { Button } from '../../../components/Boton';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.folioInicial || !formData.folioFinal || !formData.foliosAutorizados || !formData.volumenAutorizado) {
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
                <Form.Label htmlFor="volumenAutorizado" className="form-label">Volumen autorizado: <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="text"
                  className="form-control"
                  name="volumenAutorizado"
                  value={formData.volumenAutorizado}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <Form.Label htmlFor="foliosAutorizados" className="form-label">Folios autorizados <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="text"
                  className="form-control"
                  name="foliosAutorizados"
                  value={formData.foliosAutorizados}
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                {/* Columna 1: Folio inicial */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <Form.Label htmlFor="folioInicial" className="form-label">Folio inicial: <span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="text"
                      className="form-control"
                      name="folioInicial"
                      value={formData.folioInicial}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Columna 2: Folio final */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <Form.Label htmlFor="folioFinal" className="form-label">Folio final: <span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="text"
                      className="form-control"
                      name="folioFinal"
                      value={formData.folioFinal}
                      onChange={handleChange} 
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
            <h4 className="card-title text-center pb-4 mb-4 fw-2">Venta reembarque</h4>
            <form>
              <div className="row">
                {/* Columna 1 */}
                <div className="col-md-3">
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
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="piesTabla" className="form-label">Pies tabla</Form.Label>
                    <Form.Control 
                      type="text"
                      className="form-control"
                      name="piesTabla"
                      value={formData.piesTabla}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Columna 2 */}
                <div className="col-md-3">
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
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="piezas" className="form-label">Num. Piezas </Form.Label>
                    <Form.Control 
                      type="text"
                      className="form-control"
                      name="piezas"
                      value={formData.piezas}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Columna 3 */}
                <div className="col-md-3">
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
                    <label htmlFor="" className="form-label"></label>
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

                {/* Columna 4 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <Form.Label htmlFor="volumenExtra" className="form-label">Volumen</Form.Label>
                    <Form.Control 
                    type="text"
                    className="form-control"
                    name="volumenExtra"
                    value={formData.volumenExtra}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="" className="form-label"></Form.Label>
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="total" className="form-label">Total</Form.Label>
                    <Form.Control 
                      type="text"
                      className="form-control"
                      name="total"
                      value={formData.total}
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
    
    </Form>
  );
};
