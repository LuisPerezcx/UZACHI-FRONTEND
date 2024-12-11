import React, { useState } from 'react';
import './ModalGenerarReporte.css';
import { Modal, Alert } from 'react-bootstrap';
import { generarReporteSemarnat } from './GenerarReporteSemarnat';

export const GenerarReporteModal = ({ show, handleClose, agregarReporte, tipoReporte }) => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFinal, setFechaFinal] = useState('');
  const [comunidad, setComunidad] = useState('');
  const [tipoFormato, setTipoFormato] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const manejarGenerarReporte = () => {
    setMensajeError('');

    // Validación actualizada para asegurar que "Comunidad" sea requerido a menos que "Interno"
    if (!fechaInicio || !fechaFinal || (!comunidad && tipoFormato !== 'Interno') || !tipoFormato) {
      setMensajeError('Por favor, completa todos los campos requeridos.');
      return;
    }

    if (new Date(fechaFinal) < new Date(fechaInicio)) {
      setMensajeError('La fecha final no puede ser antes de la fecha de inicio.');
      return;
    }

    const fechaInicioDate = new Date(fechaInicio);
    const fechaFinalDate = new Date(fechaFinal);
    fechaInicioDate.setHours(0, 0, 0, 0);
    fechaFinalDate.setHours(0, 0, 0, 0);
    const diferenciaTiempo = (fechaFinalDate - fechaInicioDate) / (1000 * 3600 * 24);

    if (diferenciaTiempo > 365) {
      setMensajeError('El período no puede ser mayor a un año.');
      return;
    }

    const anioInicio = new Date(fechaInicio).getFullYear();
    const anioFinal = new Date(fechaFinal).getFullYear();

    let ultimoId = 3;
    // Crear el nuevo reporte
    const nuevoReporte = {
      id: ultimoId + 1,
      nombre: `REPORTE ${anioInicio} - ${anioFinal}`,
      comunidad: comunidad,
      tipo: tipoFormato,
      periodo: `${fechaInicio} - ${fechaFinal}`,
    };

    ultimoId = nuevoReporte.id;

    agregarReporte(nuevoReporte);
    generarReporteSemarnat();
    handleClose();
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
            <div className="col">
              <label htmlFor="fechaInicio" className="form-label">Fecha Inicio</label>
              <input
                type="date"
                id="fechaInicio"
                className="form-control"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="fechaFinal" className="form-label">Fecha Fin</label>
              <input
                type="date"
                id="fechaFinal"
                className="form-control"
                value={fechaFinal}
                onChange={(e) => setFechaFinal(e.target.value)}
              />
            </div>
          </div>

          {/* Mostrar el campo Comunidad solo si tipoReporte no es 'Interno' */}
          {tipoReporte !== 'Interno' && (
            <div className="row mb-3">
              <div className="col-4 text-start">
                <label htmlFor="comunidad" className="form-label">
                  Comunidad:
                </label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  id="comunidad"
                  className="form-control"
                  value={comunidad}
                  onChange={(e) => setComunidad(e.target.value)}
                  placeholder="Ingresa la comunidad"
                />
              </div>
            </div>
          )}

          <div className="row mb-3">
            <div className="col-4 text-start">
              <label htmlFor="tipoFormato" className="form-label">
                Tipo:
              </label>
            </div>
            <div className="col-8">
              <select
                id="tipoFormato"
                className="form-control"
                value={tipoFormato}
                onChange={(e) => setTipoFormato(e.target.value)}
              >
                <option value="">Selecciona un tipo</option>
                <option value="Remisión">Remisión</option>
                <option value="Embarque">Embarque</option>
                <option value="Interno">Interno</option> {/* Opción para "Interno" */}
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col text-center">
              <button className="btn btn-success" onClick={manejarGenerarReporte}>
                Generar
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
