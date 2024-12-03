// src/pages/ReportesInternos.js
import React, { useState } from 'react';
import NavAdmin from '../../components/NavAdmin';
import { BreadCrumb } from '../../components/BreadCrumb';
import { TableSearch } from './Components/TableSearch';
import { Footer } from '../../components/Footer';
import { GenerarReporteModal } from './Components/ModalGenerarReporte'; 

import excel from '../../assets/excel.png';

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
    { label: 'Periodo inicio', value: 'filtropInicio' }
  ];

  const actions = [
    {
      label: 'Descargar',
      handler: (item) => console.log('Edit item:', item),
    },
    {
      label: 'Eliminar',
      handler: (item) => console.log('Delete item:', item),
    }
  ];

  const SimulatedData = [
    { id: 1, nombre: 'TransporteMadera 21-22', pInicio: '2023-10-23', pFin: '2024-10-23' },
    { id: 2, nombre: 'TransporteMadera 22-23', pInicio: '2022-10-23', pFin: '2023-10-23' },
    { id: 3, nombre: 'TransporteMadera 21-22', pInicio: '2021-10-23', pFin: '2022-10-23'},
    { id: 4, nombre: 'TransporteMadera 21-22', pInicio: '2023-10-23', pFin: '2024-10-23' },
    { id: 5, nombre: 'TransporteMadera 22-23', pInicio: '2022-10-23', pFin: '2023-10-23' },
    { id: 6, nombre: 'TransporteMadera 21-22', pInicio: '2021-10-23', pFin: '2022-10-23'}
];

  return (
    <div>
      <NavAdmin />
      <BreadCrumb links={links} />
      <div className='justify-content-center container'>
        <h2 className='text-center mb-5'>REPORTES INTERNOS</h2>
        <div className='d-flex justify-content-end '>
          <button className='btn btn-success me-3'  onClick={handleShow}>Generar reporte</button>
          <img src={excel} alt='excel' />
        </div>
        <div className="d-flex justify-content-center">
          <TableSearch
            endpoint={null}
            columns={columns}
            filters={filters}
            actions={actions}
            data={SimulatedData}
          />
        </div>
      </div>
      <GenerarReporteModal show={show} handleClose={handleClose} />
      <Footer />
    </div>
  );
};
