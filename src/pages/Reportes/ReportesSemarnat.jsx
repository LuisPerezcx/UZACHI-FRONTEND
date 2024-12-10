import React, { useState } from 'react';
import NavAdmin from '../../components/NavAdmin';
import { TableSearch } from './Components/TableSearch';
import { GenerarReporteModal } from './Components/ModalGenerarReporte';
import { BreadCrumb } from '../../components/BreadCrumb';
import { Footer } from '../../components/Footer';

import excel from '../../assets/excel.png';

export const ReportesSemarnat = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reportes, setReportes] = useState([  // Agregar estado para los reportes
    { id: 1, nombre: "MOVIMIENTO DE MADERA ENE-JUN 2024", comunidad: "Santiago Xiacuí", periodo: "2019 - 2020" },
    { id: 2, nombre: "MOVIMIENTO DE MADERA JUL-DIC 2024", comunidad: "San Juan Bautista", periodo: "2020 - 2021" },
    { id: 3, nombre: "REPORTE DE ACTIVIDADES 2023", comunidad: "Santa María Yolotepec", periodo: "2022 - 2023" },
    ]);

  const linksLabel = [
    { url: '/PrincipalAdmin', label: 'Inicio' },
    { url: '/ReportesSemarnat', label: 'Reportes SEMARNAT' }
  ];

  const columnsLabel = [
    { label: 'No.', key: 'id' },
    { label: 'Nombre documento', key: 'nombre' },
    { label: 'Comunidad', key: 'comunidad' },
    { label: 'Periodo', key: 'periodo' },
  ];

  const filtersLabel = [
    { label: 'Comunidad', value: 'filtroComunidad' },
    { label: 'Periodo inicio', value: 'filtropInicio' }
  ];

  const actionsLabel = [
    {
      label: 'Descargar',
      handler: (item) => console.log('Editar elemento:', item),
    },
    {
      label: 'Eliminar',
      handler: (item) => console.log('Eliminar elemento:', item),
    }
  ];

  const simulatedDataLabel = reportes;  
  // Usar el estado de los reportes en lugar de los datos simulados

  const agregarReporte = (nombreReporte) => {
    const nuevoReporte = {
      id: reportes.length + 1,  // Nuevo ID para el reporte
      nombre: nombreReporte,
      comunidad: "Comunidad Ejemplo",  
      periodo: "2023 - 2024",
    };

    setReportes([...reportes, nuevoReporte]);  // Agregar el nuevo reporte a la lista
  };

  const eliminarReporte = (item) => {
    setReportes(reportes.filter(reporte => reporte.id !== item.id));
};

return (
    <div>
      <NavAdmin />
      <BreadCrumb links={linksLabel} />
      <div className='justify-content-center container'>
        <h2 className='text-center mb-5'>REPORTES SEMARNAT</h2>
        <div className='d-flex justify-content-end'>
          <button className='btn btn-success me-3 reporte-btn' onClick={handleShow}>Generar reporte</button>
          <img className='excel-icon-informes' src={excel} alt='excel' />
        </div>
        <div className="d-flex justify-content-center">
          <TableSearch
            endpoint={null}
            columns={columnsLabel}
            filters={filtersLabel}
            actions={actionsLabel}
            data={simulatedDataLabel}
            onDelete={eliminarReporte}  // Pasamos la función onDelete
          />
        </div>
      </div>
      <GenerarReporteModal show={show} handleClose={handleClose} agregarReporte={agregarReporte} />
      <Footer />
    </div>
);
}