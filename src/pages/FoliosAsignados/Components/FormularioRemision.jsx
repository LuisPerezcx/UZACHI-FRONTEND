import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState} from "react"; 
import Swal from "sweetalert2"; 
import { Form } from "react-bootstrap";
import { ListaTramites } from "./ListaTramites";

export const FormularioRemision = () => {
  
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  };

const [formData, setFormData] = useState({
  fechaTramite: getTodayDate(), // Fecha actual al cargar el componente
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

    if (!formData.fechaTramite || !formData.folioQuercus || !formData.folioPinus || !formData.folioHojosa ||
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

    {/*Validacion de folio inicial sea menor que el final */}
    if (
      (formFolio.folioInicialPinus) > (formFolio.folioFinalPinus) ||
      (formFolio.folioInicialHojosa) > (formFolio.folioFinalHojosa) ||
      (formFolio.folioInicialQuercus) > (formFolio.folioFinalQuercus)
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
      fechaTramite: getTodayDate(), // Reestablece la fecha actual después de enviar el formulario
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
      title: "Tramite Agregado",
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
          <div className="mb-4 d-flex">
          <Form.Label htmlFor="fechaTramite" style={{ width: "530px", alignItems:"flex-start"}}>Total de folios</Form.Label>
            <Form.Control
              type="number"
              className="me-4"
              style={{height:"40px"}}
              name="fechaTramite"
              value={formData.fechaTramite}
              onChange={handleChange}
            />

            <Form.Label className="ms-2" htmlFor="fechaTramite" style={{ width: "350px"}}>Anualidad</Form.Label>
            <Form.Control
              type="date"
              style={{height:"40px"}}
              name="fechaTramite"
              value={formData.fechaTramite}
              onChange={handleChange}
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
