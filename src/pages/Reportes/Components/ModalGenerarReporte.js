import React, { useState } from 'react';
import './ModalGenerarReporte.css';
import { Modal } from 'react-bootstrap';
import { generarReporteSemarnat } from './GenerarReporteSemarnat';

export const GenerarReporteModal = ({ show, handleClose }) => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFinal, setFechaFinal] = useState('');

  // Función para manejar la generación del reporte
  const manejarGenerarReporte = () => {
    if (!fechaInicio || !fechaFinal) {
      alert('Por favor, selecciona las fechas de inicio y final.');
      return;
    }

    // Validar que la fecha final no sea antes que la fecha de inicio
    if (new Date(fechaFinal) < new Date(fechaInicio)) {
      alert('La fecha final no puede ser antes de la fecha de inicio.');
      return;
    }

    // Llamar a la función para generar el reporte si la validación es correcta
    generarReporteSemarnat();
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
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
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
                value={fechaFinal}
                onChange={(e) => setFechaFinal(e.target.value)}
                placeholder="Selecciona la fecha final"
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
