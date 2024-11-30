import React from 'react';
import './ModalGenerarReporte.css';
import { Modal } from 'react-bootstrap';


export const GenerarReporteModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Title className="modal-title">
        Generar reporte
      </Modal.Title>
      <Modal.Body>
        <div className='container'>
          {/* Fila de Fecha de Inicio */}
          <div className='row mb-3'>
            <div className='col-4 text-start'>
              <label htmlFor="fechaInicio" className='form-label'>Fecha de inicio:</label>
            </div>
            <div className='col-8'>
              <input
                type="date"
                id="fechaInicio"
                className='form-control'
                placeholder='Selecciona la fecha de inicio'
              />
            </div>
          </div>

          {/* Fila de Fecha Final */}
          <div className='row mb-3'>
            <div className='col-4 text-start'>
              <label htmlFor="fechaFinal" className='form-label'>Fecha final:</label>
            </div>
            <div className='col-8'>
              <input
                type="date"
                id="fechaFinal"
                className='form-control'
                placeholder='Selecciona la fecha final'
              />
            </div>
          </div>

          {/* Botón Generar */}
          <div className='row mt-3'>
            <div className='col text-center'>
              <button className='btn btn-success' onClick={() => console.log("Generar reporte")}>
                Generar
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
