import React, {useState } from 'react';
import { Form,} from 'react-bootstrap';
import Swal from "sweetalert2"; 
import '../../FoliosAsignados/styles/ValidacionFolio.css'


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

  const [tramites, setTramites] = useState([
    { id: 1, volumenAutorizado: "10", foliosAutorizados: "100", folioInicial: "1", folioFinal: "100" },
    { id: 2, volumenAutorizado: "15", foliosAutorizados: "150", folioInicial: "101", folioFinal: "250" },
    { id: 3, volumenAutorizado: "20", foliosAutorizados: "200", folioInicial: "251", folioFinal: "450" },
  ]); // Lista de trámites con valores predeterminados

  const [contador, setContador] = useState(4); // Contador de trámites

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
    if ((formFolio.folioInicial) > (formFolio.folioFinal)) {
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
    const nuevoTramite = {
      id: contador,
      ...formData,
    };
    setTramites([...tramites, nuevoTramite]);
    setContador(contador + 1);

    setFormData({
      volumenAutorizado: "",
      foliosAutorizados: "",
      folioInicial: "",
      folioFinal: "",
    });
    setFormFolios({
      folioInicial: "",
      folioFinal: "",
    });
    Swal.fire({
      title: "Tramite registrado",
      text: "Los datos son correctos.",
      icon: "success",
      confirmButtonText: "Aceptar",
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.getConfirmButton().style.backgroundColor = 'var(--color-verde)';
      },
    });
  };
  
  return (
    <Form onSubmit={handleSubmit}>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="row">
        {/* Primera columna: Formulario de trámites */}
        <div className="col-md-5 tarjeta-border">
          <div className="p-4">
            <form>
            <div className="row">
                {/* Columna 1: Folio inicial */}
                <div className="col-md-8">
                  <div className="mb-2">
                    <label htmlFor="numeroTramite">
                      Número de trámite:<span className="text-danger">*</span>
                    </label>
                  </div>
                </div>
                {/* Columna 2: Folio final */}
                <div className="col-md-4">
                  <div className="mb-1">
                  <Form.Control
                      type="text"
                      value={contador}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <Form.Label htmlFor="volumenAutorizado">Volumen autorizado: <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="text"
                  name="volumenAutorizado"
                  value={formData.volumenAutorizado}
                  maxLength={5}
                  max={1}
                  onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*\.?\d*$/.test(value)) {
                    handleChange({ target: { name: "volumenAutorizado", value } });
                  }
                }}
                />
              </div>
              <div className="mb-2">
                <Form.Label htmlFor="foliosAutorizados">Folios autorizados <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="text"
                  name="foliosAutorizados"
                  value={formData.foliosAutorizados}
                  maxLength={5}
                  max={1}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Permitir solo números enteros o decimales
                    if (/^\d*$/.test(value)) {
                      handleChange({ target: { name: "foliosAutorizados", value } });
                  }
                }}
                />
              </div>
              <div className="row">
                {/* Columna 1: Folio inicial */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <Form.Label htmlFor="folioInicial">Folio inicial: <span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="text"
                      name="folioInicial"
                      value={formFolio.folioInicial}
                      maxLength={5}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Permitir solo números enteros o decimales
                        if (/^\d*$/.test(value)) {
                          handleChange({ target: { name: "folioInicial", value } });
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Columna 2: Folio final */}
                <div className="col-md-6">
                  <div className="mb-2">
                    <Form.Label htmlFor="folioFinal">Folio final: <span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      type="text"
                      name="folioFinal"
                      value={formFolio.folioFinal}
                      maxLength={5}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Permitir solo números enteros o decimales
                        if (/^\d*$/.test(value)) {
                          handleChange({ target: { name: "folioFinal", value } });
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center pt-2">
            <button variant="success" type="submit" size="sm" fontWeight="bold">
              {'Agregar'}
            </button>
          </div>      
          </div>
        </div>
        <div className="col-md-6 mt-4" >
          <h5 className="text-center" style={{color:"#595B5A", fontWeight:"bold"}}>Lista de trámites</h5>
          <div className="scrollable-container tarjeta-border">
            {tramites.length === 0 ? ( // Validar si no hay trámites
              <div className="alert alert-info" role="alert" style={{ textAlign: "center" }}>
              No hay trámites existentes.
            </div>
            ) : (
              <ul className="list-group">
                {tramites.map((tramite) => (
                  <li key={tramite.id} className="list-group-item ">
                    <strong  style={{color:"#14C3A2"}}> Trámite # {tramite.id}<br /></strong>
                    Volumen autorizado = <b>{tramite.volumenAutorizado}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Folio autorizado = <b>{tramite.foliosAutorizados}</b> <br></br>
                    Folio inicial = <b>{tramite.folioInicial}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Folio final = <b>{tramite.folioFinal}</b>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
    </Form>
  );
};
