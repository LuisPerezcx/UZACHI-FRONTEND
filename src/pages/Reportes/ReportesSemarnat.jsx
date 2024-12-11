import React, { useState } from 'react';
import NavAdmin from '../../components/NavAdmin';
import { TableSearch } from './Components/TableSearch';
import { GenerarReporteModal } from './Components/ModalGenerarReporte';
import { BreadCrumb } from '../../components/BreadCrumb';
import { Footer } from '../../components/Footer';
import { AlertComponent } from '../../components/AlertComponent'; 

import excel from '../../assets/excel.png';

export const ReportesSemarnat = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const enlacesLabel = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    { url: '/ReportesSemarnat', label: 'Reportes SEMARNAT' }
  ];

  const [reportes, setReportes] = useState([  
    { id: 1, nombre: "MOVIMIENTO DE MADERA ENE-JUN 2024", comunidad: "Santiago Xiacuí", periodo: "2019 - 2020" },
    { id: 2, nombre: "MOVIMIENTO DE MADERA JUL-DIC 2024", comunidad: "San Juan Bautista", periodo: "2020 - 2021" },
    { id: 3, nombre: "REPORTE DE ACTIVIDADES 2023", comunidad: "Santa María Yolotepec", periodo: "2022 - 2023" },
  ]);

  const columnasLabel = [
    { label: 'No.', key: 'id' },
    { label: 'Nombre documento', key: 'nombre' },
    { label: 'Comunidad', key: 'comunidad' },
    { label: 'Periodo', key: 'periodo' },
  ];

  
  const filtrosLabel = [
    { label: 'Comunidad', value: 'comunidad' },
    { label: 'Periodo inicio', value: 'periodo' }
  ];

  const accionesLabel = [
    {
      label: 'Descargar',
      handler: (item) => console.log('Editar elemento:', item),
    },
    {
      label: 'Eliminar',
      handler: (item) => handleDelete(item),  // Llama a la función de eliminación
    }
  ];

  const agregarReporte = (nombreReporte) => {
    const nuevoReporte = {
      id: reportes.length + 1,  // Nuevo ID para el reporte
      nombre: nombreReporte,
      comunidad: "Comunidad Ejemplo",  
      periodo: "2023 - 2024",
    };

    setReportes([...reportes, nuevoReporte]);  // Agregar el nuevo reporte a la lista
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
  

   // Función para eliminar un reporte
   const eliminarReporte = (item) => {
    const nuevosReportes = reportes.filter((reporte) => reporte.id !== item.id);
    setReportes(nuevosReportes);
  };

  return (
    <div>
      <NavAdmin />
      <BreadCrumb links={enlacesLabel} />
      <div className='justify-content-center container'>
        <h2 className='text-center mb-5'>REPORTES SEMARNAT</h2>
        <div className='d-flex justify-content-end'>
          <button className='btn btn-success me-3 reporte-btn' onClick={handleShow}>Generar reporte</button>
          <img className='excel-icon-informes' src={excel} alt='excel' />
        </div>
        <div className="d-flex justify-content-center">
          <TableSearch
            endpoint={null}
            columnas={columnasLabel}
            filtros={filtrosLabel}
            acciones={accionesLabel}
            datos={reportes}
            onDelete={handleDelete}  
          />
        </div>
      </div>
      <GenerarReporteModal show={show} handleClose={handleClose} agregarReporte={agregarReporte} />
      <Footer />
    </div>
  );
};
