import React, { useState } from 'react'
import NavAdmin from '../../components/NavAdmin'
import { BreadCrumb } from '../../components/BreadCrumb'
import { TableSearch } from '../../components/TableSearch';
import { Modal } from 'react-bootstrap';
import { Footer } from '../../components/Footer';

import excel from '../../assets/excel.png'

export const ReportesInternos = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const links = [
    { url: '/', label: 'Inicio' },
    { url: '/ReportesInternos', label: 'Informes' }
  ];

  const columns = [
    { label: 'No.', key: 'id' },
    { label: 'Nombre documento', key: 'nombre' },
    { label: 'Periodo inicio', key: 'pInicio' },
    { label: 'Periodo fin', key: 'pFin' }
  ];

  const filters = [
    { label: 'No.', value: 'id' },
    { label: 'Nombre documento', value: 'name' },
    { label: 'Periodo inicio', value: 'email' }
  ];

  const actions = [
    {
      label: 'Editar',
      handler: (item) => console.log('Edit item:', item),
    },
    {
      label: 'Eliminar',
      handler: (item) => console.log('Delete item:', item),
    },
    {
      label: 'Hola',
      handler: (item) => console.log('hola item', item),
    }
  ];

  return (
    <div>
      <NavAdmin></NavAdmin>
      <BreadCrumb links={links}></BreadCrumb>
      <div className='justify-content-center container'>
        <h2 className='text-center mb-5'>REPORTES INTERNOS</h2>
        <div className='d-flex justify-content-end mb-3'>
          <button className='btn btn-success me-2' onClick={handleShow}>Generar reporte</button>
          <img src={excel} alt='excel'></img>
        </div>
        <div className="d-flex justify-content-center">
          <TableSearch
            endpoint={null}
            columns={columns}
            filters={filters}
            actions={actions}
          />
        </div>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
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
      <Footer></Footer>
    </div>
  )
}
