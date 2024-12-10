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
    { url: '/', label: 'Inicio' },
    { url: '/ReportesInternos', label: 'Informes' }
  ];

  const columnas = [
    { label: 'No.', key: 'id' },
    { label: 'Nombre documento', key: 'nombre' },
    { label: 'Periodo inicio', key: 'pInicio' },
    { label: 'Periodo fin', key: 'pFin' }
  ];

  const filtros = [
    { label: 'Nombre documento', value: 'filtroDocumento' },
    { label: 'Periodo inicio', value: 'filtropInicio' }
  ];

  const [reportes, setReportes] = useState([
    { id: 1, nombre: 'TransporteMadera 21-22', pInicio: '2023-10-23', pFin: '2024-10-23' },
    { id: 2, nombre: 'TransporteMadera 22-23', pInicio: '2022-10-23', pFin: '2023-10-23' },
    { id: 3, nombre: 'TransporteMadera 21-22', pInicio: '2021-10-23', pFin: '2022-10-23' },
    { id: 4, nombre: 'TransporteMadera 21-22', pInicio: '2023-10-23', pFin: '2024-10-23' },
    { id: 5, nombre: 'TransporteMadera 22-23', pInicio: '2022-10-23', pFin: '2023-10-23' },
    { id: 6, nombre: 'TransporteMadera 21-22', pInicio: '2021-10-23', pFin: '2022-10-23' }
  ]);

  // Función para eliminar un reporte
  const eliminarReporte = (item) => {
    const nuevosReportes = reportes.filter((reporte) => reporte.id !== item.id);
    setReportes(nuevosReportes);
  };

 
  // Función para agregar un nuevo reporte
  const agregarReporte = (nombreReporte) => {
    const nuevoReporte = {
      id: reportes.length + 1,  
      nombre: nombreReporte,
      pInicio: "2023-10-23",  // Ejemplo de periodo inicio
      pFin: "2024-10-23",     // Ejemplo de periodo fin
    };

    setReportes([...reportes, nuevoReporte]);  // Agregar el nuevo reporte a la lista
    handleClose(); // Cerrar el modal después de agregar el reporte
  };


  const acciones = [
    {
      label: 'Descargar',
      handler: (item) => console.log('Descargar elemento:', item),
    },
    {
      label: 'Eliminar',
      handler: eliminarReporte, // Vincula la función eliminarReporte
    }
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
            data={reportes} 
          />
        </div>
      </div>
      <GenerarReporteModal 
        show={show} 
        handleClose={handleClose} 
        agregarReporte={agregarReporte} 
      />
      <Footer />
    </div>
  );
};
