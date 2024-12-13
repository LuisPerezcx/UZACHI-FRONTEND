import React, { useState, useEffect } from 'react';
import './ModalGenerarReporte.css';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { generarReporteSemarnat } from './GenerarReporteSemarnat';
import { generarReporteInterno } from './GenerarReporteInterno';

export const GenerarReporteModal = ({ show, handleClose, agregarReporte, tipoReporte }) => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFinal, setFechaFinal] = useState('');
  const [comunidad, setComunidad] = useState('');
  const [tipoFormato, setTipoFormato] = useState('');
  const [nombreInforma, setNombreInforma] = useState('');

  useEffect(() => {
    if (show) {
      setFechaInicio('');
      setFechaFinal('');
      setComunidad('');
      setTipoFormato('');
      setNombreInforma('');
    }
  }, [show]);

  const manejarGenerarReporte = async () => {
    // Validación inicial
    if (!fechaInicio || !fechaFinal || (!comunidad && tipoReporte !== 'interno') || !tipoFormato) {
      Swal.fire({
        title: 'Datos incompletos',
        text: 'Por favor, completa todos los campos requeridos.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    if (new Date(fechaFinal) < new Date(fechaInicio)) {
      Swal.fire({
        title: 'Error en fechas',
        text: 'La fecha final no puede ser antes de la fecha de inicio.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    const fechaInicioDate = new Date(fechaInicio);
    const fechaFinalDate = new Date(fechaFinal);
    fechaInicioDate.setHours(0, 0, 0, 0);
    fechaFinalDate.setHours(0, 0, 0, 0);
    const diferenciaTiempo = (fechaFinalDate - fechaInicioDate) / (1000 * 3600 * 24);

    if (diferenciaTiempo > 365) {
      Swal.fire({
        title: 'Período no válido',
        text: 'El período no puede ser mayor a un año.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    const anioInicio = fechaInicioDate.getFullYear();
    const anioFinal = fechaFinalDate.getFullYear();

    const nuevoReporte =
      tipoReporte === 'interno'
        ? {
            id: Date.now(),
            nombre: `TransporteMadera ${anioInicio}-${anioFinal}`,
            tipo: tipoFormato,
            pInicio: fechaInicio,
            pFin: fechaFinal,
          }
        : {
            id: Date.now(),
            nombre: `REPORTE ${anioInicio} - ${anioFinal}`,
            comunidad: comunidad,
            tipo: tipoFormato,
            periodo: `${fechaInicio} - ${fechaFinal}`,
          };

    agregarReporte(nuevoReporte);

    // Generar el reporte correspondiente
    if (tipoReporte === 'semarnat') {
      await generarReporteSemarnat();
    } else if (tipoReporte === 'interno') {
      await generarReporteInterno();
    }

    Swal.fire({
      title: 'Reporte generado',
      text: 'El reporte se ha generado exitosamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer: 3000,
      timerProgressBar: true,
    });

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="d-flex justify-content-center">
        <Modal.Title className="modal-title text-center w-100">Generar reporte</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
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

          {tipoReporte !== 'interno' && (
            <>
              <div className="row mb-3">
                <div className="col-4 text-start">
                  <label htmlFor="comunidad" className="form-label">Comunidad:</label>
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
              <div className="row mb-3">
                <div className="col-4 text-start">
                  <label htmlFor="nombreInforma" className="form-label">Informe por:</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="nombreInforma"
                    className="form-control"
                    value={nombreInforma}
                    onChange={(e) => setNombreInforma(e.target.value)}
                    placeholder="Ingresa el nombre de quien informa"
                  />
                </div>
              </div>
            </>
          )}

          <div className="row mb-3">
            <div className="col-4 text-start">
              <label htmlFor="tipoFormato" className="form-label">Operación:</label>
            </div>
            <div className="col-8">
              <select
                id="tipoFormato"
                className="form-control"
                value={tipoFormato}
                onChange={(e) => setTipoFormato(e.target.value)}
              >
                <option value="">Seleccione una opción</option>
                <option value="Remisión">Remisión</option>
                <option value="Reembarque">Reembarque</option>
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
