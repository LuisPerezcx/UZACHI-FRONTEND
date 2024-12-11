import React, { useState } from 'react';
import NavAdmin from '../../components/NavAdmin';
import { BreadCrumb } from '../../components/BreadCrumb';
import { TableSearch } from './Components/TableSearch';
import { Footer } from '../../components/Footer';
import { GenerarReporteModal } from './Components/ModalGenerarReporte'; 
import { AlertComponent } from '../../components/AlertComponent'; 


import excel from '../../assets/excel.png';

export const ReportesInternos = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const enlaces = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    { url: '/ReportesInternos', label: 'Informes' }
  ];

  const columnasLabel = [
    { label: 'No.', key: 'id' },
    { label: 'Nombre documento', key: 'nombre' },
    { label: 'Periodo inicio', key: 'pInicio' },
    { label: 'Periodo fin', key: 'pFin' }
  ];

  const filtrosLabel = [
    { label: 'Nombre documento', value: 'documento' },
    { label: 'Periodo', value: 'periodo' }
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

 
  const handleDelete = (item) => {
    // Llama al componente de alerta antes de eliminar el reporte
    AlertComponent.confirm({
      title: '¿Estás seguro de eliminar este reporte?',
      text: `Se eliminará el reporte: ${item.nombre}`,
      onConfirm: () => {
        eliminarReporte(item);  // Elimina el reporte
        AlertComponent.success({
          title: 'Eliminado',
          text: `El reporte ${item.nombre} ha sido eliminado de manera exitosa.`,  // Mensaje actualizado
        });
      },
    });
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
            columnas={columnasLabel}
            filtros={filtrosLabel}
            acciones={acciones}
            datos={reportes} 
            onDelete={handleDelete}
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
