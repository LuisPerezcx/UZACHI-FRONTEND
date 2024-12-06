import React, { useState, useEffect } from "react"; 
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import IconFaltaInfo from "../../../../../UZACHI-FRONTEND/src/assets/icon-falta-info.png"; // Ajusta la ruta según tu estructura de carpetas
import { Justify } from "react-bootstrap-icons";



export const FormularioReembarque = () => {
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
    volumenAutorizado: "",
    foliosAutorizados: "",
    folioInicial: "",
    folioFinal: "",
    producto: "",
    piesTabla: "",
    medidas: "",
    clasificacion: "",
    piezas: "",
    precio: "",
    volumenExtra: "",
    total: "",
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
                <label htmlFor="volumenAutorizado" className="form-label">Volumen autorizado</label>
                <input 
                  type="text"
                  className="form-control"
                  name="volumenAutorizado"
                  value={formData.volumenAutorizado}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="foliosAutorizados" className="form-label">Folios autorizados</label>
                <input 
                  type="text"
                  className="form-control"
                  name="foliosAutorizados"
                  value={formData.foliosAutorizados}
                  onChange={handleInputChange}
                />
              </div>
              <div className="row">
                {/* Columna 1: Folio inicial */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="folioInicial" className="form-label">Folio inicial</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="folioInicial"
                      value={formData.folioInicial}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Columna 2: Folio final */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="folioFinal" className="form-label">Folio final</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="folioFinal"
                      value={formData.folioFinal}
                      onChange={handleInputChange} 
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
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="piesTabla" className="form-label">Pies tabla</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="piesTabla"
                      value={formData.piesTabla}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Columna 2 */}
                <div className="col-md-3">
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
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="piezas" className="form-label">Num. Piezas </label>
                    <input 
                      type="text"
                      className="form-control"
                      name="piezas"
                      value={formData.piezas}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Columna 3 */}
                <div className="col-md-3">
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
                    <label htmlFor="" className="form-label"></label>
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

                {/* Columna 4 */}
                <div className="col-md-3">
                  <div className="mb-2">
                    <label htmlFor="volumenExtra" className="form-label">Volumen</label>
                    <input 
                    type="text"
                    className="form-control"
                    name="volumenExtra"
                    value={formData.volumenExtra}
                    onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label"></label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="total" className="form-label">Total</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="total"
                      value={formData.total}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-12 text-center mt-4">
            <button className="btn btn-primary" style={{background: "#14C3A2", width:"20%"}} onClick={handleAddButtonClick}>
              Agregar
            </button>
        </div>
        </div>
        {/* Confirm Modal */}
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
            textAlign: "center"
          }}>
            Faltan campos por llenar. Por favor, complete todos los campos antes de enviar.
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
