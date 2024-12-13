import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState} from "react"; 
import Swal from "sweetalert2"; 
import { Form } from "react-bootstrap";
import { ListaTramites } from "./ListaTramites";

export const FormularioRemision = () => {
  const getTodayDate = () => {
    const today = new Date();
    return today.getFullYear(); 
  };  

const [formData, setFormData] = useState({
  fechaTramite: getTodayDate(), // Fecha actual al cargar el componente
  totalFolio: '', 

  folioPinus: '',
  folioQuercus: '',
  folioHojosa: '',

  folioInicialPinus: '',
  folioInicialQuercus: '',
  folioInicialHojosa: '',
  folioFinalPinus: '',
  folioFinalQuercus: '',
  folioFinalHojosa: '',

  });

  const folioInicialQuercus = Number(formData.folioInicialQuercus);
  const folioFinalQuercus = Number(formData.folioFinalQuercus);

  const folioInicialPinus = Number(formData.folioInicialPinus);
  const folioFinalPinus = Number(formData.folioFinalPinus);

  const folioInicialHojosa = Number(formData.folioInicialHojosa);
  const folioFinalHojosa = Number(formData.folioFinalHojosa);

  const totalFolio = Number(formData.totalFolio);

  const folioQuercus = Number(formData.folioQuercus);
  const folioPinus = Number(formData.folioPinus);
  const folioHojosa = Number(formData.folioHojosa);

  const [tramites, setTramites] = useState([]);
  const [formFolio, setFormFolios] = useState({
    totalFolio: '',
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

    if (!formData.totalFolio, !formData.fechaTramite || !formData.folioQuercus || !formData.folioPinus || !formData.folioHojosa ||
        !formData.folioFinalHojosa || !formData.folioFinalPinus || !formData.folioFinalQuercus ||
        !formData.folioInicialHojosa || !formData.folioInicialPinus || !formData.folioInicialQuercus
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

  // Validacion para que la suma de folios sea igual al total de folios 
    // Validar suma de folios
    if (folioPinus + folioQuercus + folioHojosa !== totalFolio) {
      Swal.fire({
        title: "Error en los folios asignados",
        text: "La suma de los folios no coincide con el total autorizado.",
        icon: "error",
        confirmButtonText: "Aceptar",
        timer: 4000,
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
      (folioPinus > 0 && folioInicialPinus > folioFinalPinus) ||
      (folioQuercus > 0 && folioInicialQuercus > folioFinalQuercus) ||
      (folioHojosa > 0 && folioInicialHojosa > folioFinalHojosa)
    ) {
      Swal.fire({
        title: 'Error en los rangos de folios',
        text: "El folio inicial debe ser menor que el folio final para los campos con folios asignados.",
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.getConfirmButton().style.backgroundColor = 'var(--color-verde)';
        },
      });
      return;
    }

  // Validar que si total asignado es 0, no se asignen rangos inicial y final
  if (
    (folioPinus === 0 && (folioInicialPinus !== 0 || folioFinalPinus !== 0)) ||
    (folioQuercus === 0 && (folioInicialQuercus !== 0 || folioFinalQuercus !== 0)) ||
    (folioHojosa === 0 && (folioInicialHojosa !== 0 || folioFinalHojosa !== 0))
  ) {
    Swal.fire({
      title: 'Error en los rangos de folios',
      text: 'No se pueden asignar folio inicial y final si el total de folios asignados es 0.',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      timer: 4000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.getConfirmButton().style.backgroundColor = 'var(--color-verde)';
      },
    });
    return;
  }
    {/*Validar si no coinciden los folios */}
    if (
      (folioPinus > 0 && folioFinalPinus - folioInicialPinus + 1 !== folioPinus) ||
      (folioQuercus > 0 && folioFinalQuercus - folioInicialQuercus + 1 !== folioQuercus) ||
      (folioHojosa > 0 && folioFinalHojosa - folioInicialHojosa + 1 !== folioHojosa)
    ) {
      Swal.fire({
        title: "Error en el folio inicial y final",
        text: "El rango de folios no coincide con los folios asignados.",
        icon: "error",
        confirmButtonText: "Aceptar",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          const confirmButton = Swal.getConfirmButton();
          confirmButton.style.backgroundColor = 'var(--color-verde)'; // Color verde
        }
      });
      return;
    }
    {/*Guardar tramite */}
    setTramites([...tramites, { ...formData, fechaTramite: formData.fechaTramite }]);
    
    // Limpiar formulario
    setFormData({
      fechaTramite: '', // Reestablece la fecha actual después de enviar el formulario
      totalFolio: '',

      folioPinus: '',
      folioQuercus: '',
      folioHojosa: '',

      folioInicialPinus: '',
      folioInicialQuercus: '',
      folioInicialHojosa: '',
      folioFinalPinus: '',
      folioFinalQuercus: '',
      folioFinalHojosa: '',  
    });

    setFormFolios(
      {
        folioInicialPinus: '',
        folioInicialQuercus: '',
        folioInicialHojosa: '',
        folioFinalPinus: '',
        folioFinalQuercus: '',
        folioFinalHojosa: '', 
      }
    )

    Swal.fire({
      title: "Trámite agregado",
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
        <div className="col-md-6">
          <form>
          <div className="d-flex">
          <Form.Label htmlFor="totalFolio" style={{ width: "530px", alignItems:"flex-start"}}>Folios Autorizados <span className="text-danger"> *</span></Form.Label>
            <Form.Control
              type="text"
              className="me-4 mb-4"
              style={{height:"40px",width:"50%"}}
              name="totalFolio"
              value={formData.totalFolio}
              maxLength={5}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "totalFolio", value } });
                  }
                }}
            
            />
            <Form.Label className="ms-2 me-2" htmlFor="fechaTramite" style={{ width: "380px"}}>Anualidad <span className="text-danger"> *</span></Form.Label>
            <Form.Control
              type="text"
              style={{height:"40px", width:"50%"}}
              name="fechaTramite"
              value={formData.fechaTramite}
              maxLength={4}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "fechaTramite", value } });
                  }
                }}
            />
          </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="folioPinus" style={{ width: "150px" }}>Pinus: <span className="text-danger"> *</span></Form.Label>
              <Form.Control 
                type="text"
                name="folioPinus"
                value={formData.folioPinus}
                maxLength={5}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "folioPinus", value } });
                  }
                }}
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="FolioQuercus" style={{ width: "150px" }}>Quercus: <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="folioQuercus"
                maxLength={5}
                value={formData.folioQuercus}
                onChange={(e) => {
                const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "folioQuercus", value } });
                }
                }}
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="folioHojosa" style={{ width: "150px" }}>Hojosa: <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text"
                name="folioHojosa"
                maxLength={5}
                value={formData.folioHojosa}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "folioHojosa", value } });
                  }
                }}
              />
            </div>
          </form>
        </div>

        {/* Columna 2: Trámite 1 Pinus */}
        <div className="col-md-6">
          <h5 className="text-center" style={{color:"#595B5A", fontWeight:"bold"}}>Trámites</h5>
          <form>
          <div className="d-flex">
              <Form.Label htmlFor="espacio" className="me-2" style={{ width: "150px" }}></Form.Label>
              <Form.Label htmlFor="FolioInicial" className=" me-4" style={{ width: "150px" }}>Folio inicial</Form.Label>
              <Form.Label htmlFor="FolioFinal" className=" ms-2" style={{ width: "150px" }}>Folio Final</Form.Label>

            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="folioInicialPinus" style={{ width: "150px"}}>Pinus:<span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text"
                className="me-2"
                style={{width:"50%"}}
                name="folioInicialPinus"
                maxLength={5}
                value={formFolio.folioInicialPinus}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "folioInicialPinus", value } });
                  }
                }}
              />
              <Form.Control
                type="text"
                className="me-2"
                style={{width:"50%"}}
                name="folioFinalPinus"
                maxLength={5}
                value={formFolio.folioFinalPinus}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "folioFinalPinus", value } });
                  }
                }}
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="quercusFolio" style={{ width: "150px" }}>Quercus:<span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text"
                className="me-2"
                style={{width:"50%"}}
                name="folioInicialQuercus"
                maxLength={5}
                value={formFolio.folioInicialQuercus}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "folioInicialQuercus", value } });
                  }
                }}
              />
              <Form.Control 
                type="text"
                className="me-2"
                style={{width:"50%"}}
                name="folioFinalQuercus"
                maxLength={5}
                value={formFolio.folioFinalQuercus}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "folioFinalQuercus", value } });
                  }
                }}
              />
            </div>
            <div className="mb-3 d-flex">
              <Form.Label htmlFor="hojosaFolio" style={{ width: "150px" }}>Hojosa:<span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                className="me-2"
                style={{width:"50%"}}
                name="folioInicialHojosa"
                maxLength={5}
                value={formFolio.folioInicialHojosa}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "folioInicialHojosa", value } });
                  }
                }}
              />
              <Form.Control
                type="texdt"
                className="me-2"
                style={{width:"50%"}}
                name="folioFinalHojosa"
                maxLength={5}
                value={formFolio.folioFinalHojosa}
                onChange={(e) => {
                  const value = e.target.value;
                  // Permitir solo números enteros o decimales
                  if (/^\d*$/.test(value)) {
                    handleChange({ target: { name: "folioFinalHojosa", value } });
                  }
                }}
              />
            </div>
          </form>
          
        </div>
        <div className="text-center pt-4">
            <button variant="success" type="submit" size="sm">
              {'Agregar'}
            </button>
          </div>
      </div>
    </div>
      <ListaTramites tramites={tramites} />
    </div>
    </Form>
    
  );
};

export default FormularioRemision;
