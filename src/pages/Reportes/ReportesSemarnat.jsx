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
  const tipoReporte = "semarnat";

  const enlacesLabel = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    { url: '/ReportesSemarnat', label: 'Reportes SEMARNAT' }
  ];

  const [reportes, setReportes] = useState([  
    { id: 1, nombre: "REPORTE 2019 - 2020", comunidad: "Santiago Xiacuí", tipo: "Remisión", periodo: "2019-01-01 - 2020-01-01" },
    { id: 2, nombre: "REPORTE 2020 - 2021", comunidad: "San Juan Bautista", tipo: "Remisión", periodo: "2020-01-01 - 2021-01-01" },
    { id: 3, nombre: "REPORTE 2022 - 2023", comunidad: "Santa María Yolotepec", tipo: "Rembarque", periodo: "2022-01-01 - 2023-01-01" },
  ]);

  const columnasLabel = [
    { label: 'Nombre documento', key: 'nombre' },
    { label: 'Comunidad', key: 'comunidad' },
    { label: 'Tipo', key: 'tipo' },
    { label: 'Periodo', key: 'periodo' },
  ];

  const filtrosLabel = [
    { label: 'Comunidad', value: 'comunidad' },
    { label: 'Periodo', value: 'periodo' },
    { label: 'Tipo informe', value: 'tipo' }
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

  const agregarReporte = (nuevoReporte) => {
    setReportes([...reportes, nuevoReporte]);  
  };

  const handleDelete = (item) => {
    AlertComponent.confirm({
      title: '¿Estás seguro de eliminar este reporte?',
      text: `Se eliminará el reporte: ${item.nombre}`,
      onConfirm: () => {
        eliminarReporte(item); 
        AlertComponent.success({
          title: 'Eliminado',
          text: `El reporte ${item.nombre} ha sido eliminado de manera exitosa.`,  // Mensaje actualizado
        });
      },
    });
  };
  
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
      <GenerarReporteModal show={show} handleClose={handleClose} agregarReporte={agregarReporte}  tipo={tipoReporte}  />
      <Footer />
    </div>
  );
};
