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
  
  return (
    <Form onSubmit={handleSubmit}>
    <div className="container mt-4">
      <div className="row">
        {/* Primera columna: Formulario de trámites */}
        <div className="col-md-4 tarjeta-border">
          <div className="p-4 mb-3">
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
                  required
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
                  required
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
                      required
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
                      required
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
