import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react"; 
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import IconFaltaInfo from "../../../../../UZACHI-FRONTEND/src/assets/icon-falta-info.png"; // Ajusta la ruta según tu estructura de carpetas
import { Justify } from "react-bootstrap-icons";
const FormularioRemision = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (showWarningModal) {
      timer = setTimeout(() => {
        setShowWarningModal(false);
      }, 3000, 
    ); 
    }
    return () => clearTimeout(timer);
  }, [showWarningModal]);

  const [formData, setFormData] = useState({
    pinus: "",
    quercus: "",
    hojosa: "",

    folioInicialPinus: "",
    folioInicialQuercus: "",
    folioInicialHojosa: "",
    folioFinalPinus: "",
    folioFinalQuercus: "",
    folioFinalHojosa: "",

    primario: "",
    secundario: "",
    medidaEsp: "",

    volumenRollo: "",
    volumenAserrado:"",

    piesTabla: "",
    medidas: "",
    clasificacion: "",
    precio: "",
    volumen: "",
    producto:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddButtonClick = () => {
    const isFormComplete = Object.values(formData).every((field) => field.trim() !== "");

    if (isFormComplete) {
      setShowConfirmModal(true);
    } else {
      setShowWarningModal(true);
    }
  };

  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    console.log("Formulario enviado:", formData);
    alert("Formulario enviado exitosamente");
  };

  return (
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
            type="date" className="form-control" />
            
          </div>
            <div className="mb-3 d-flex">
              <label htmlFor="pinus" className="form-label me-2" style={{ width: "150px" }}>Pinus:</label>
              <input 
                type="text"
                className="form-control"
                name="pinus"
                value={formData.pinus}
                onChange={handleInputChange} 
              />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="quercus" className="form-label me-2" style={{ width: "150px" }}>Quercus:</label>
              <input 
                type="text"
                className="form-control"
                name="quercus"
                value={formData.quercus}
                onChange={handleInputChange} 
              />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="hojosa" className="form-label me-2" style={{ width: "150px" }}>Hojosa:</label>
              <input 
                type="text"
                className="form-control"
                name="hojosa"
                value={formData.hojosa}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>

        {/* Columna 2: Trámite 1 Pinus */}
        <div className="col-md-4">
          <h5 className="text-center">Trámite 1</h5>
          <form>
          <div className="d-flex">
              <label htmlFor="espacio" className="form-label me-2" style={{ width: "150px" }}></label>
              <label htmlFor="FolioInicial" className="form-label me-4" style={{ width: "150px" }}>Folio inicial</label>
              <label htmlFor="FolioFinal" className="form-label ms-2" style={{ width: "150px" }}>Folio Final</label>
              
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="pinusFolio" className="form-label me-2" style={{ width: "150px" }}>Pinus:</label>
              <input 
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioInicialPinus"
                value={formData.folioInicialPinus}
                onChange={handleInputChange}
              />
              <input 
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioFinalPinus"
                value={formData.folioFinalPinus}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="quercusFolio" className="form-label me-2" style={{ width: "150px" }}>Quercus:</label>
              <input 
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioInicialQuercus"
                value={formData.folioInicialQuercus}
                onChange={handleInputChange} 
              />
              <input 
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioFinalQuercus"
                value={formData.folioFinalQuercus}
                onChange={handleInputChange} 
              />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="hojosaFolio" className="form-label me-2" style={{ width: "150px" }}>Hojosa:</label>
              <input 
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioInicialHojosa"
                value={formData.folioInicialHojosa}
                onChange={handleInputChange} 
              />
              <input 
                type="text"
                className="form-control me-2"
                style={{width:"50%"}}
                name="folioFinalHojosa"
                value={formData.folioFinalHojosa}
                onChange={handleInputChange} 
              />
            </div>
          </form>
        </div>

        {/* Columna 3: Entrada Remisiones */}
        <div className="col-md-4">
          <h5 className=" text-center">Entrada Remisiones V(m²)</h5>
          <form className="">
            <div className="mt-4 mb-3 d-flex">
              <label htmlFor="primario" className="form-label me-2" style={{ width: "150px" }}>Primario:</label>
              <input 
                type="text"
                className="form-control"
                name="primario"
                value={formData.primario}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="secundario" className="form-label me-2" style={{ width: "150px" }}>Secundario:</label>
              <input 
                type="text"
                className="form-control"
                name="secundario"
                value={formData.secundario}
                onChange={handleInputChange}
              />            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="medidaEsp" className="form-label me-2" style={{ width: "200px" }}>Medida esp:</label>
              <input 
                type="text"
                className="form-control"
                name="medidaEsp"
                value={formData.medidaEsp}
                onChange={handleInputChange}
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
                <label htmlFor="volumenRollo" className="form-label">Madera Rollo</label>
                <input 
                  type="text"
                  className="form-control"
                  name="volumenRollo"
                  value={formData.volumenRollo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="volumenAserrado" className="form-label">Madera aserrado</label>
                <input 
                type="text"
                className="form-control"
                name="volumenAserrado"
                value={formData.volumenAserrado}
                onChange={handleInputChange}
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
                    <label htmlFor="producto" className="form-label">Producto</label>
                    <select
                      className="form-select"
                      name="producto"
                      value={formData.producto}
                      onChange={handleInputChange}
                      required
                    >
                    <option disabled value="">
                      Seleccione opción
                    </option>
                      <option value="tabla">Tabla</option>
                      <option value="tablon">Tablón</option>
                      <option value="rollo">Rollo</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="piesTabla" className="form-label">Pies tabla</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="piesTabla"
                      value={formData.piesTabla}
                      onChange={handleInputChange} />
                  </div>
                </div>

                {/* Columna 2 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <label htmlFor="medidas" className="form-label">Medidas</label>
                    <select
                      className="form-select"
                      name="medidas"
                      value={formData.medidas}
                      onChange={handleInputChange}
                      required
                    >
                    <option disabled value="">
                      Seleccione opción
                    </option>
                      <option>16 x 25</option>
                      <option>18 x 50</option>
                      <option>20 x 75</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="volumen" className="form-label">Volumen</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="volumen"
                      value={formData.volumen}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Columna 3 */}
                <div className="col-md-4">
                  <div className="mb-2">
                    <label htmlFor="clasificacion" className="form-label">Clasificación</label>
                    <select
                      className="form-select"
                      name="clasificacion"
                      value={formData.clasificacion}
                      onChange={handleInputChange}
                      required
                    >
                    <option disabled value="">
                      Seleccione opción
                    </option>
                      <option>Primera</option>
                      <option>Secundaria</option>
                      <option>Tercera</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="precio"
                      value={formData.precio}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-12 text-center mt-4">
            <button className="btn btn-primary" style={{background: "#14C3A2", width:"20%"}} onClick={handleAddButtonClick}>
              Agregar
            </button>
        </div>
      </div>
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar envío</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro de enviar el formulario?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirmSubmit}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Warning Modal */}
        <Modal show={showWarningModal} onHide={() => setShowWarningModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title><p style={{color:"red"}}>Advertencia</p></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p style={{
            justifyContent: "center",
            textAlign: "center",
            fontSize:"120%",
            fontWeight:"bold",
            color:"#f84339",
            fontFamily:"fantasy"
          }}>
            Faltan campos por llenar
          </p> 
          <img
            src={IconFaltaInfo}
            alt="Advertencia"
            style={{
              width: "35%", // Tamaño de la imagen, puedes ajustarlo
              height: "35%",
              marginBottom: "20px"
            }}
          />
          <p style={{
            justifyContent: "center",
            textAlign: "center",
            fontSize:"120%"
          }}>
            Por favor, complete todos los campos antes de enviar.
          </p>          
          </Modal.Body>
          <Modal.Footer>
            {/*<Button variant="primary" style={{background: "#14C3A2"}} onClick={() => setShowWarningModal(false)}>
              Cerrar
            </Button>*/}
          </Modal.Footer>
        </Modal>
    </div>
    </div>
  );
};

export default FormularioRemision;
