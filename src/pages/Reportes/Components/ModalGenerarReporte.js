import React, { useState } from 'react';
import './ModalGenerarReporte.css';
import { Modal, Alert } from 'react-bootstrap';
import { generarReporteSemarnat } from './GenerarReporteSemarnat';

export const GenerarReporteModal = ({ show, handleClose, agregarReporte }) => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFinal, setFechaFinal] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  // Función para manejar la generación del reporte
  const manejarGenerarReporte = () => {
    setMensajeError(''); // Limpiar mensaje de error al hacer clic

    if (!fechaInicio || !fechaFinal) {
      setMensajeError('Por favor, selecciona las fechas de inicio y final.');
      return;
    }

    // Validar que la fecha final no sea antes que la fecha de inicio
    if (new Date(fechaFinal) < new Date(fechaInicio)) {
      setMensajeError('La fecha final no puede ser antes de la fecha de inicio.');
      return;
    }

    // Validar que la diferencia entre las fechas no supere un año (365 días)
    const fechaInicioDate = new Date(fechaInicio);
    const fechaFinalDate = new Date(fechaFinal);
    
    // Ajustamos las fechas para que solo comparen el año, mes y día (sin considerar la hora)
    fechaInicioDate.setHours(0, 0, 0, 0);  // Poner la hora a las 00:00
    fechaFinalDate.setHours(0, 0, 0, 0);   // Poner la hora a las 00:00

    const diferenciaTiempo = (fechaFinalDate - fechaInicioDate) / (1000 * 3600 * 24); // Diferencia en días

    // Validar que no haya más de 365 días entre las fechas
    if (diferenciaTiempo > 365) {
      setMensajeError('El período no puede ser mayor a un año.');
      return;
    }

    // Llamar a la función para generar el reporte si la validación es correcta
    generarReporteSemarnat();

    // Agregar el nuevo reporte a la lista de reportes
    agregarReporte(`REPORTE ${fechaInicio} - ${fechaFinal}`); // Pasar un nombre dinámico del reporte
    handleClose();  // Cerrar el modal después de generar el reporte
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Title className="modal-title">
        Generar reporte
      </Modal.Title>
      <Modal.Body>
        <div className="container">
          {mensajeError && (
            <Alert variant="danger">
              {mensajeError}
            </Alert>
          )}
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
