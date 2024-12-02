import React, { useState } from 'react';
import './ModalGenerarReporte.css';
import { Modal } from 'react-bootstrap';
import { generarReporteSemarnat } from './GenerarReporteSemarnat';

export const GenerarReporteModal = ({ show, handleClose }) => {
  const [archivo, setArchivo] = useState(null);

  // Función para manejar la selección de archivos
  const manejarArchivo = (evento) => {
    const archivoSeleccionado = evento.target.files[0];
    if (archivoSeleccionado) {
      setArchivo(archivoSeleccionado);
    }
  };

  // Función para generar el reporte, pasándole el archivo seleccionado
  const manejarGenerarReporte = () => {
    if (archivo) {
      // Aquí podrías pasar el archivo al proceso de generación del reporte
      generarReporteSemarnat(archivo); // Asegúrate de que la función puede manejar archivos
    } else {
      alert('Por favor, selecciona un archivo Excel.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Title className="modal-title">
        Generar reporte
      </Modal.Title>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <div className="col-4 text-start">
              <label htmlFor="fechaInicio" className="form-label">
                Fecha de inicio:
              </label>
            </div>
            <div className="col-8">
              <input
                type="date"
                id="fechaInicio"
                className="form-control"
                placeholder="Selecciona la fecha de inicio"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-4 text-start">
              <label htmlFor="fechaFinal" className="form-label">
                Fecha final:
              </label>
            </div>
            <div className="col-8">
              <input
                type="date"
                id="fechaFinal"
                className="form-control"
                placeholder="Selecciona la fecha final"
              />
            </div>
          </div>

          {/* Nueva sección para cargar el archivo Excel */}
          <div className="row mb-3">
            <div className="col-4 text-start">
              <label htmlFor="archivo" className="form-label">
                Cargar archivo:
              </label>
            </div>
            <div className="col-8">
              <input
                type="file"
                id="archivo"
                className="form-control"
                accept=".xlsx,.xls"
                onChange={manejarArchivo}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col text-center">
              <button className="btn btn-success" onClick={manejarGenerarReporte}>
                Generar Reporte
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
