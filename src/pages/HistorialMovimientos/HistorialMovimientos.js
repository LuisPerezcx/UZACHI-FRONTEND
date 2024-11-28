import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import NavAdmin from '../../components/NavAdmin';
import { TableSearch } from '../../components/TableSearch';
import { Footer } from '../../components/Footer';
import { BreadCrumb } from '../../components/BreadCrumb';

export const HistorialMovimientos = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const links = [
    { url: '/', label: 'Inicio' },
    { url: '/HistorialMovimientos', label: 'Historial' },
  ];

  const communityData = [
    {
      folio: '001',
      nombreDocumento: 'Acta de Asamblea',
      tipo: 'Oaxaca',
      fecha: '2023-11-01',
      estado: 'Aprobado',
    },
    {
      folio: '002',
      nombreDocumento: 'Acta de Comunidad',
      tipo: 'Oaxaca',
      fecha: '2023-11-02',
      estado: 'Pendiente',
    },
  ];
  const columns = [
    { label: 'Folio', key: 'folio' },
    { label: 'Nombre documento', key: 'nombreDocumento' },
    { label: 'Tipo', key: 'tipo' },
    { label: 'Fecha', key: 'fecha' },
    { label: 'Estado', key: 'estado' },
  ];

  const filters = [
    { label: 'Estado', value: 'estado' },
    { label: 'Fecha', value: 'fecha' },
    { label: 'Nombre', value: 'nombreDocumento' },
    { label: 'Folio', value: 'folio' },
  ];

  const actions = [
    {
      label: 'Descargar',
      handler: (item) => console.log('Descargando:', item),
    },
    {
      label: 'Anular',
      handler: (item) => console.log('Anulando:', item),
    },
    {
      label: 'Imprimir',
      handler: (item) => console.log('Imprimiendo:', item),
    },
  ];

  return (
    <div>
      <NavAdmin/>
      <BreadCrumb links={links} />
      
      <div className="container">
        <h2 className="text-center mb-4">HISTORIAL DE MOVIMIENTOS</h2>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <input
              type="text"
              placeholder="Buscar en el historial"
              className="form-control"
            />
          </div>
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
              Filtrar por
            </button>
            <ul className="dropdown-menu">
              {filters.map((filter, index) => (
                <li key={index}>
                  <button className="dropdown-item">{filter.label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <TableSearch
          columns={columns}
          data={communityData}
          filters={filters}
          actions={actions}
          endpoint={null} // Configura tu endpoint aquí
        />
      </div>
      <Footer/>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <h5 className="text-center mb-4">Generar reporte</h5>
          <div className="mb-3">
            <label htmlFor="fechaInicio" className="form-label">
              Fecha de inicio
            </label>
            <input type="date" id="fechaInicio" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="fechaFinal" className="form-label">
              Fecha final
            </label>
            <input type="date" id="fechaFinal" className="form-control" />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-2" onClick={handleClose}>
              Cancelar
            </button>
            <button className="btn btn-primary">Generar</button>
          </div> 
        </Modal.Body>
      </Modal>
    </div>
  );
};
