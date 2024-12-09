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

  const enlaces = [
    { url: '/', etiqueta: 'Inicio' },
    { url: '/ReportesInternos', etiqueta: 'Informes' }
  ];

  const columnas = [
    { etiqueta: 'No.', clave: 'id' },
    { etiqueta: 'Nombre documento', clave: 'nombre' },
    { etiqueta: 'Periodo inicio', clave: 'pInicio' },
    { etiqueta: 'Periodo fin', clave: 'pFin' }
  ];

  const filtros = [
    { etiqueta: 'Nombre documento', valor: 'filtroDocumento' },
    { etiqueta: 'Periodo inicio', valor: 'filtropInicio' }
  ];

  const acciones = [
    {
      etiqueta: 'Descargar',
      manejador: (elemento) => console.log('Editar elemento:', elemento),
    },
    {
      etiqueta: 'Eliminar',
      manejador: (elemento) => console.log('Eliminar elemento:', elemento),
    }
  ];

  const datosSimulados = [
    { id: 1, nombre: 'TransporteMadera 21-22', pInicio: '2023-10-23', pFin: '2024-10-23' },
    { id: 2, nombre: 'TransporteMadera 22-23', pInicio: '2022-10-23', pFin: '2023-10-23' },
    { id: 3, nombre: 'TransporteMadera 21-22', pInicio: '2021-10-23', pFin: '2022-10-23' },
    { id: 4, nombre: 'TransporteMadera 21-22', pInicio: '2023-10-23', pFin: '2024-10-23' },
    { id: 5, nombre: 'TransporteMadera 22-23', pInicio: '2022-10-23', pFin: '2023-10-23' },
    { id: 6, nombre: 'TransporteMadera 21-22', pInicio: '2021-10-23', pFin: '2022-10-23' }
  ];

  return (
    <div>
      <NavAdmin />
      <BreadCrumb links={enlaces} />
      <div className='justify-content-center container'>
        <h2 className='text-center mb-5'>REPORTES INTERNOS</h2>
        <div className='d-flex justify-content-end '>
          <button className='btn btn-success me-3 reporte-btn' onClick={handleShow}>Generar reporte</button>
          <img className='excel-icon' src={excel} alt='excel' />
        </div>
        <div className="d-flex justify-content-center">
          <TableSearch
            endpoint={null}
            columns={columnas}
            filters={filtros}
            actions={acciones}
            data={datosSimulados}
          />
        </div>
      </div>
      <GenerarReporteModal show={show} handleClose={handleClose} />
      <Footer />
    </div>
  );
};
